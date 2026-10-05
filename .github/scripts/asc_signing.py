#!/usr/bin/env python3
"""App Store 배포 서명 준비/정리 (App Store Connect API).

  asc_signing.py setup   <bundle_id> <workdir>   → 배포 인증서(재사용)·App Store 프로파일 준비, p12 생성
  asc_signing.py cleanup <workdir>               → (아무것도 지우지 않음 — 아래 이유)
  asc_signing.py register <bundle_id> <name>     → 번들 ID 등록(없을 때만) + App Store Connect 앱 레코드 확인

기기 등록 없이 App Store 배포 서명을 하기 위한 것. 환경변수 KEY_ID, ISSUER_ID, KEY_PATH, KEY_P8 필요.

**배포 인증서를 지우면(revoke) 안 된다.** 예전엔 실행마다 만들고 끝나면 지웠는데, 그 인증서로 서명한 빌드를
나중에 심사 제출하면 ITMS-90035 Invalid Signature 로 반려됐다 (Glance Mortgage 빌드 22, 2026-10-04).
그래서 인증서 하나를 계속 쓴다: 개인 키를 KEY_P8(비밀값)에서 만든 키로 암호화해 SIGN_STORE_IN/OUT 파일
(워크플로가 `ci-signing` 브랜치의 signing/state.json 으로 보관)에 담는다. 암호문만 공개 저장소에 올라간다.
"""
import base64
import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request

import jwt  # PyJWT

API = 'https://api.appstoreconnect.apple.com/v1'
OPENSSL = '/usr/bin/openssl'  # macOS LibreSSL — p12 를 security import 가 읽는 형식으로 만든다


def token():
    with open(os.environ['KEY_PATH']) as f:
        key = f.read()
    now = int(time.time())
    return jwt.encode(
        {'iss': os.environ['ISSUER_ID'], 'iat': now, 'exp': now + 1100, 'aud': 'appstoreconnect-v1'},
        key, algorithm='ES256', headers={'kid': os.environ['KEY_ID'], 'typ': 'JWT'})


def call(method, path, body=None):
    req = urllib.request.Request(
        API + path, method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={'Authorization': f'Bearer {token()}', 'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            raw = r.read()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        sys.exit(f'{method} {path} → HTTP {e.code}\n{e.read().decode(errors="replace")}')


def sh(*args):
    subprocess.run(args, check=True)


def _fernet():
    """KEY_P8(GitHub Secret) 에서 암호화 키를 만든다 — 저장소에는 암호문만 남는다."""
    from cryptography.fernet import Fernet
    from cryptography.hazmat.primitives import hashes
    from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=b'soulfulfill-ci-signing-v1', iterations=300000)
    return Fernet(base64.urlsafe_b64encode(kdf.derive(os.environ['KEY_P8'].strip().encode())))


def _load_store():
    path = os.environ.get('SIGN_STORE_IN', '')
    if not path or not os.path.exists(path) or os.path.getsize(path) == 0:
        return None
    try:
        with open(path) as f:
            return json.load(f)
    except ValueError:
        return None


def _cert_alive(cert_id):
    """인증서가 아직 유효하고 만료까지 30일 넘게 남았나."""
    req = urllib.request.Request(API + f'/certificates/{cert_id}', headers={'Authorization': f'Bearer {token()}'})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            cert = json.load(r)['data']
    except urllib.error.HTTPError:
        return None
    exp = cert['attributes'].get('expirationDate', '')
    if exp and time.strptime(exp[:10], '%Y-%m-%d') < time.gmtime(time.time() + 30 * 86400):
        return None
    return cert


def setup(bundle_id, wd):
    os.makedirs(wd, exist_ok=True)
    key = f'{wd}/dist.key'
    cert = None
    stored = _load_store()
    if stored:
        cert = _cert_alive(stored['certificate_id'])
        if cert:
            with open(key, 'wb') as f:
                f.write(_fernet().decrypt(stored['key_enc'].encode()))
            print(f'배포 인증서 재사용: {cert["id"]}', file=sys.stderr)
    if not cert:
        csr = f'{wd}/dist.csr'
        sh(OPENSSL, 'genrsa', '-out', key, '2048')
        sh(OPENSSL, 'req', '-new', '-key', key, '-out', csr, '-subj', '/CN=GitHub CI/C=US')
        with open(csr) as f:
            csr_pem = f.read()
        cert = call('POST', '/certificates', {'data': {'type': 'certificates', 'attributes': {
            'certificateType': 'DISTRIBUTION', 'csrContent': csr_pem}}})['data']
        with open(key, 'rb') as f:
            enc = _fernet().encrypt(f.read()).decode()
        out = os.environ.get('SIGN_STORE_OUT')
        if out:
            with open(out, 'w') as f:
                json.dump({'certificate_id': cert['id'], 'key_enc': enc,
                           'created': time.strftime('%Y-%m-%d'), 'note': 'Release iOS 공용 배포 인증서 — 지우지 말 것'}, f, indent=1)
        print(f'배포 인증서 새로 발급: {cert["id"]} (보관함에 저장)', file=sys.stderr)
    state = {'certificate_id': cert['id']}
    with open(f'{wd}/dist.cer', 'wb') as f:
        f.write(base64.b64decode(cert['attributes']['certificateContent']))
    sh(OPENSSL, 'x509', '-inform', 'der', '-in', f'{wd}/dist.cer', '-out', f'{wd}/dist.pem')
    sh(OPENSSL, 'pkcs12', '-export', '-inkey', key, '-in', f'{wd}/dist.pem',
       '-out', f'{wd}/dist.p12', '-passout', 'pass:ci')

    found = call('GET', f'/bundleIds?filter[identifier]={bundle_id}&limit=50')['data']
    bid = next((b['id'] for b in found if b['attributes']['identifier'] == bundle_id), None)
    if not bid:
        sys.exit(f'번들 ID {bundle_id} 가 developer.apple.com 에 등록되어 있지 않습니다.')

    # 프로파일도 지우지 않는다 — 이 인증서로 만든 이 앱 것이 살아 있으면 재사용
    prof = None
    base = f'ci-appstore-{bundle_id}-{cert["id"][:6]}'
    same_name = call('GET', f'/profiles?filter[name]={base}&include=certificates&limit=20').get('data', [])
    for p in same_name:
        certs = [c['id'] for c in p.get('relationships', {}).get('certificates', {}).get('data', [])]
        if p['attributes'].get('profileState') == 'ACTIVE' and cert['id'] in certs:
            prof = p
            print(f'프로파일 재사용: {base}', file=sys.stderr)
            break
    # 같은 이름이 쓸 수 없는 상태로 남아 있으면 실행 번호를 붙여 새 이름으로 (지우지 않는다)
    name = base if not same_name else f'{base}-{os.environ.get("GITHUB_RUN_ID", int(time.time()))}'
    if prof:
        name = prof['attributes']['name']
    else:
        prof = call('POST', '/profiles', {'data': {
            'type': 'profiles',
            'attributes': {'name': name, 'profileType': 'IOS_APP_STORE'},
            'relationships': {
                'bundleId': {'data': {'type': 'bundleIds', 'id': bid}},
                'certificates': {'data': [{'type': 'certificates', 'id': cert['id']}]},
            }}})['data']
    state.update(profile_id=prof['id'], profile_name=name, profile_uuid=prof['attributes']['uuid'])
    with open(f'{wd}/state.json', 'w') as f:
        json.dump(state, f)
    with open(f'{wd}/profile.mobileprovision', 'wb') as f:
        f.write(base64.b64decode(prof['attributes']['profileContent']))
    print(json.dumps({k: v for k, v in state.items() if k != 'certificate_id'}))


def cleanup(wd):
    # 인증서·프로파일을 지우면 그걸로 서명한 빌드가 심사에서 ITMS-90035 로 반려된다 → 지우지 않는다.
    print('인증서·프로파일은 남겨 둔다 (지우면 제출한 빌드가 Invalid Signature)')


def register(bundle_id, name):
    # 번들 ID 는 한 번 등록하면 바꿀 수 없다 — 사용자 확인을 받은 값만 넣는다.
    found = call('GET', f'/bundleIds?filter[identifier]={bundle_id}&limit=50')['data']
    if any(b['attributes']['identifier'] == bundle_id for b in found):
        print(f'번들 ID {bundle_id}: 이미 등록됨')
    else:
        call('POST', '/bundleIds', {'data': {'type': 'bundleIds', 'attributes': {
            'identifier': bundle_id, 'name': name, 'platform': 'IOS'}}})
        print(f'번들 ID {bundle_id}: 새로 등록함 ({name})')
    apps = call('GET', f'/apps?filter[bundleId]={bundle_id}')['data']
    if apps:
        print(f'App Store Connect 앱 레코드: 있음 — {apps[0]["attributes"]["name"]} (id {apps[0]["id"]})')
    else:
        print('App Store Connect 앱 레코드: 아직 없음 — appstoreconnect.apple.com → 앱 → ＋ → 신규 앱 에서 만든다 '
              '(API 로는 앱 레코드를 만들 수 없다). 만들기 전에는 Release iOS 업로드가 실패한다.')


if __name__ == '__main__':
    if sys.argv[1] == 'setup':
        setup(sys.argv[2], sys.argv[3])
    elif sys.argv[1] == 'cleanup':
        cleanup(sys.argv[2])
    elif sys.argv[1] == 'register':
        register(sys.argv[2], sys.argv[3])
    else:
        sys.exit('usage: asc_signing.py setup <bundle_id> <workdir> | cleanup <workdir> | register <bundle_id> <name>')
