#!/usr/bin/env python3
"""안드로이드 업로드 키(keystore) 자동 보관 — 사용자가 keytool 을 돌리거나 Secrets 를 넣지 않아도 되게.

  android_keystore.py ensure <android_dir>

  ① STORE_IN(ci-signing 브랜치 signing/android-upload.json) 이 있으면 복호화해 <android_dir>/app/upload-keystore.jks + key.properties 를 쓴다.
  ② 없으면 keytool 로 새 키를 만들고(무작위 비밀번호), KEY_P8(GitHub Secret ASC_KEY_P8) 에서 만든 키로 암호화해 STORE_OUT 에 쓴다
     → 워크플로가 ci-signing 브랜치에 커밋한다. 저장소에는 암호문만 남는다.
  모든 앱이 같은 업로드 키를 쓴다 (Play App Signing 이 앱마다 배포 키를 따로 관리하므로 괜찮다).
  ⚠️ 이 키를 잃으면 Play 업데이트를 못 올린다 — ci-signing 브랜치를 지우지 말 것. 잃었을 때는 Play Console → Setup → App signing → "Request upload key reset".
  ASC_KEY_P8 을 바꾸면 복호화가 안 되므로, 바꾸기 전에 이 파일을 옛 키로 풀어 새 키로 다시 잠근다(`reencrypt` 는 아직 없음 — 그때 추가).

환경변수: KEY_P8(필수), STORE_IN(있으면 읽음), STORE_OUT(새로 만들었을 때 씀). 비밀번호·키는 로그에 남기지 않는다.
"""
import base64
import json
import os
import secrets
import subprocess
import sys


def fernet():
    from cryptography.fernet import Fernet
    from cryptography.hazmat.primitives import hashes
    from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=b'soulfulfill-android-upload-v1', iterations=300000)
    return Fernet(base64.urlsafe_b64encode(kdf.derive(os.environ['KEY_P8'].strip().encode())))


def write_files(android_dir, jks_bytes, password, alias):
    app_dir = os.path.join(android_dir, 'app')
    os.makedirs(app_dir, exist_ok=True)
    with open(os.path.join(app_dir, 'upload-keystore.jks'), 'wb') as f:
        f.write(jks_bytes)
    with open(os.path.join(android_dir, 'key.properties'), 'w') as f:
        f.write(f'storeFile=upload-keystore.jks\nstorePassword={password}\nkeyAlias={alias}\nkeyPassword={password}\n')
    print(f'::add-mask::{password}')


def ensure(android_dir):
    store_in = os.environ.get('STORE_IN', '')
    if store_in and os.path.exists(store_in):
        with open(store_in) as f:
            stored = json.load(f)
        f_ = fernet()
        jks = f_.decrypt(stored['jks_enc'].encode())
        password = f_.decrypt(stored['password_enc'].encode()).decode()
        write_files(android_dir, jks, password, stored.get('alias', 'upload'))
        print(f'업로드 키: ci-signing 보관함에서 복원 (만든 날 {stored.get("created", "?")}, SHA-256 {stored.get("sha256", "?")[:16]}…)')
        return

    password = secrets.token_urlsafe(24)
    alias = 'upload'
    tmp = os.path.join(os.environ.get('RUNNER_TEMP', '/tmp'), 'upload-keystore.jks')
    if os.path.exists(tmp):
        os.remove(tmp)
    subprocess.run(['keytool', '-genkeypair', '-v', '-keystore', tmp, '-storetype', 'PKCS12', '-keyalg', 'RSA',
                    '-keysize', '2048', '-validity', '10000', '-alias', alias, '-storepass', password,
                    '-keypass', password, '-dname', 'CN=Soulfulfill, O=Soulfulfill, C=US'],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    with open(tmp, 'rb') as f:
        jks = f.read()
    fp = subprocess.run(['keytool', '-list', '-keystore', tmp, '-storepass', password, '-alias', alias, '-v'],
                        check=True, capture_output=True, text=True).stdout
    sha = next((line.split(':', 1)[1].strip() for line in fp.splitlines() if 'SHA256:' in line), '')
    f_ = fernet()
    import datetime
    out = {'alias': alias, 'created': datetime.date.today().isoformat(), 'sha256': sha,
           'jks_enc': f_.encrypt(jks).decode(), 'password_enc': f_.encrypt(password.encode()).decode()}
    store_out = os.environ.get('STORE_OUT')
    if store_out:
        with open(store_out, 'w') as f:
            json.dump(out, f, indent=1)
    write_files(android_dir, jks, password, alias)
    print(f'업로드 키: 새로 만듦 (SHA-256 {sha[:16]}…) → ci-signing 보관함에 저장 예정')


if __name__ == '__main__':
    if len(sys.argv) == 3 and sys.argv[1] == 'ensure':
        ensure(sys.argv[2])
    else:
        sys.exit('usage: android_keystore.py ensure <android_dir>')
