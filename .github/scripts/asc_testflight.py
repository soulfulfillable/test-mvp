#!/usr/bin/env python3
"""TestFlight 초대 자동화 (App Store Connect API).

  asc_testflight.py invite <build_number> [bundle_id]

`Release iOS` 로 올린 빌드가 처리(Processing)되기를 기다렸다가:
  ① 수출 규정(암호화) 답이 비어 있으면 "해당 없음"으로 채움
  ② 앱에 내부 테스트 그룹이 없으면 `me` 를 만듦 (모든 빌드 자동 포함)
  ③ 계정 소유자(ACCOUNT_HOLDER)를 그 그룹의 테스터로 넣음
  ④ 빌드를 그룹에 붙이고 초대 메일 발송
→ 사용자는 메일의 "View in TestFlight" / Redeem 코드만 누르면 된다.

이메일 주소는 로그에 남기지 않는다 (공개 리포 로그). 환경변수 KEY_ID, ISSUER_ID, KEY_PATH 필요.
번호가 같은 빌드가 여러 앱에 있으면 bundle_id 로 좁힌다 (Release iOS 실행 번호는 앱이 달라도 겹치지 않는다).
"""
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from asc_signing import API, token  # noqa: E402

WAIT_MIN = int(os.environ.get('WAIT_MINUTES', '50'))


def say(msg):
    """로그 + 실행 요약(Step Summary). 요약은 add-mask 가 안 먹으니 이메일이 든 문장은 여기로 보내지 않는다."""
    print(msg, flush=True)
    path = os.environ.get('GITHUB_STEP_SUMMARY')
    if path:
        with open(path, 'a') as f:
            f.write(msg + '\n\n')


def req(method, path, body=None):
    """(HTTP 상태, JSON) — 실패해도 멈추지 않고 돌려준다."""
    r = urllib.request.Request(
        API + path, method=method,
        data=json.dumps(body).encode() if body is not None else None,
        headers={'Authorization': f'Bearer {token()}', 'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(r, timeout=60) as resp:
            raw = resp.read()
            return resp.status, (json.loads(raw) if raw else {})
    except urllib.error.HTTPError as e:
        raw = e.read().decode(errors='replace')
        try:
            return e.code, json.loads(raw)
        except ValueError:
            return e.code, {'raw': raw}


def must(method, path, body=None):
    code, data = req(method, path, body)
    if code >= 300:
        sys.exit(f'{method} {path} → HTTP {code}\n{errors(data)}')
    return data


def errors(data):
    msg = '; '.join(e.get('detail') or e.get('title', '') for e in data.get('errors', [])) or str(data)[:300]
    return re.sub(r'[\w.+-]+@[\w-]+\.[\w.-]+', '<email>', msg)  # 오류 문장에 이메일이 섞여 와도 가린다


def find_build(number, bundle_id):
    app_filter = ''
    if bundle_id:
        apps = must('GET', f'/apps?filter[bundleId]={bundle_id}')['data']
        if not apps:
            sys.exit(f'앱 레코드 없음: {bundle_id}')
        app_filter = f'&filter[app]={apps[0]["id"]}'
    deadline = time.time() + WAIT_MIN * 60
    last = None
    while True:
        data = must('GET', f'/builds?filter[version]={number}{app_filter}&include=app&limit=20')
        builds = data['data']
        if len(builds) > 1:
            sys.exit(f'빌드 {number} 이(가) 여러 앱에 있다 — bundle_id 를 같이 넘긴다')
        if builds:
            b = builds[0]
            state = b['attributes'].get('processingState')
            if state != last:
                say(f'빌드 {number}: {state}')
                last = state
            if state == 'VALID':
                app = next(i for i in data.get('included', []) if i['type'] == 'apps')
                return b, app
            if state in ('FAILED', 'INVALID'):
                sys.exit(f'빌드 {number} 처리 실패: {state} — App Store Connect 메일 확인')
        elif last is None:
            say(f'빌드 {number}: 아직 App Store Connect 에 안 보임 (업로드 직후엔 몇 분 걸린다)')
            last = 'MISSING'
        if time.time() > deadline:
            sys.exit(f'{WAIT_MIN}분 기다려도 빌드 {number} 처리가 안 끝남 — 나중에 이 워크플로를 수동 실행')
        time.sleep(60)


def internal_group(app_id):
    groups = must('GET', f'/apps/{app_id}/betaGroups?limit=50')['data']
    internal = [g for g in groups if g['attributes'].get('isInternalGroup')]
    for g in internal:
        if g['attributes'].get('name') == 'me':
            return g
    if internal:
        return internal[0]
    code, data = req('POST', '/betaGroups', {'data': {
        'type': 'betaGroups',
        'attributes': {'name': 'me', 'isInternalGroup': True, 'hasAccessToAllBuilds': True},
        'relationships': {'app': {'data': {'type': 'apps', 'id': app_id}}}}})
    if code >= 300:
        sys.exit(f'내부 테스트 그룹을 만들 수 없음 (HTTP {code}): {errors(data)}\n'
                 '→ App Store Connect → 앱 → TestFlight → 내부 테스팅 ＋ 로 그룹을 한 번 만들면 다음부터 자동')
    say('내부 테스트 그룹 me 새로 만듦 (모든 빌드 자동 포함)')
    return data['data']


def account_holder():
    users = must('GET', '/users?filter[roles]=ACCOUNT_HOLDER&limit=10')['data']
    if not users:
        sys.exit('계정 소유자를 찾지 못함 (API 키 역할이 Admin 인지 확인)')
    a = users[0]['attributes']
    email = a.get('username') or a.get('email')
    print(f'::add-mask::{email}')  # 로그에서 가린다
    return email, a.get('firstName') or 'Owner', a.get('lastName') or 'Soulfulfill'


def ensure_tester(group_id, email, first, last):
    for t in must('GET', f'/betaGroups/{group_id}/betaTesters?limit=200')['data']:
        if (t['attributes'].get('email') or '').lower() == email.lower():
            say('계정 소유자: 이미 그룹 테스터')
            return t['id']
    code, data = req('POST', '/betaTesters', {'data': {
        'type': 'betaTesters',
        'attributes': {'email': email, 'firstName': first, 'lastName': last},
        'relationships': {'betaGroups': {'data': [{'type': 'betaGroups', 'id': group_id}]}}}})
    if code < 300:
        say('계정 소유자를 그룹 테스터로 추가')
        return data['data']['id']
    # 다른 앱에서 이미 테스터인 경우 — 있는 테스터를 그룹에 붙인다
    found = must('GET', f'/betaTesters?filter[email]={urllib.parse.quote(email)}&limit=5')['data']
    if not found:
        sys.exit(f'테스터 추가 실패 (HTTP {code}): {errors(data)}')
    tid = found[0]['id']
    code, data = req('POST', f'/betaGroups/{group_id}/relationships/betaTesters',
                     {'data': [{'type': 'betaTesters', 'id': tid}]})
    if code >= 300:
        sys.exit(f'테스터를 그룹에 붙이기 실패 (HTTP {code}): {errors(data)}')
    say('기존 테스터(계정 소유자)를 그룹에 붙임')
    return tid


def invite(number, bundle_id=''):
    build, app = find_build(number, bundle_id)
    name = app['attributes'].get('name', app['id'])
    say(f'앱: {name} · 빌드 {number} 처리 완료')

    if build['attributes'].get('usesNonExemptEncryption') is None:
        # Info.plist 에 ITSAppUsesNonExemptEncryption=false 가 있으면 보통 이미 채워져 있다.
        code, data = req('PATCH', f'/builds/{build["id"]}', {'data': {
            'type': 'builds', 'id': build['id'], 'attributes': {'usesNonExemptEncryption': False}}})
        say('수출 규정: 암호화 해당 없음으로 답함' if code < 300 else f'수출 규정 답하기 실패: {errors(data)}')

    group = internal_group(app['id'])
    gid = group['id']
    code, data = req('POST', f'/betaGroups/{gid}/relationships/builds',
                     {'data': [{'type': 'builds', 'id': build['id']}]})
    if code < 300:
        say(f'빌드 {number} 를 그룹 "{group["attributes"].get("name")}" 에 붙임')
    else:
        # "모든 빌드 자동 포함" 그룹은 직접 붙이면 거절된다 — 그래도 빌드는 들어가 있다.
        say(f'빌드 붙이기 건너뜀 ({code}): {errors(data)[:160]}')

    email, first, last = account_holder()
    tid = ensure_tester(gid, email, first, last)
    code, data = req('POST', '/betaTesterInvitations', {'data': {
        'type': 'betaTesterInvitations',
        'relationships': {'app': {'data': {'type': 'apps', 'id': app['id']}},
                          'betaTester': {'data': {'type': 'betaTesters', 'id': tid}}}}})
    if code < 300:
        say('초대 메일 보냄 → 메일의 "View in TestFlight" 또는 Redeem 코드를 TestFlight 앱에 입력')
    else:
        # 이미 이 앱 테스트를 수락했으면 새 빌드는 TestFlight 앱 알림으로 온다
        say(f'초대 메일은 안 보냄 ({code}): {errors(data)[:200]} — 이미 수락했다면 TestFlight 앱에 새 빌드가 뜬다')
    say(f'\n✅ {name} 빌드 {number}: TestFlight 내부 테스트 준비 끝')


if __name__ == '__main__':
    if len(sys.argv) >= 3 and sys.argv[1] == 'invite':
        invite(sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else '')
    else:
        sys.exit('usage: asc_testflight.py invite <build_number> [bundle_id]')
