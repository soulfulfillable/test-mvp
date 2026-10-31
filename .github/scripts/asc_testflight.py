#!/usr/bin/env python3
"""TestFlight 초대 자동화 (App Store Connect API).

  asc_testflight.py invite   <build_number> [bundle_id]   내부 그룹 `me` + 계정 소유자 초대 (Release iOS 뒤 자동)
  asc_testflight.py external <build_number> [bundle_id]   외부 그룹 + 공개 링크 + Beta App Review 제출 (수동)

`Release iOS` 로 올린 빌드가 처리(Processing)되기를 기다렸다가:
  ① 수출 규정(암호화) 답이 비어 있으면 "해당 없음"으로 채움
  ② 앱에 내부 테스트 그룹이 없으면 `me` 를 만듦 (모든 빌드 자동 포함)
  ③ 계정 소유자(ACCOUNT_HOLDER)를 그 그룹의 테스터로 넣음
  ④ 빌드를 그룹에 붙이고 초대 메일 발송
→ 사용자는 메일의 "View in TestFlight" / Redeem 코드만 누르면 된다.

`external` 은 외부 테스터용:
  ① 수출 규정 답 → ② Beta App Review 연락처(비어 있으면 최근 App Review 연락처를 복사) → ③ 베타 앱 설명·피드백 메일
  → ④ 빌드의 "What to Test" → ⑤ 외부 그룹(기본 이름 "Beta Testers", 공개 링크 켬, 정원 PUBLIC_LINK_LIMIT 기본 100)
  → ⑥ 빌드를 그룹에 붙임 → ⑦ Beta App Review 제출(처음 한 번, 보통 하루 안팎) → 공개 링크를 요약에 적는다.
  문구는 TF_INFO(json: description, feedbackEmail?, whatsNew) 에서 읽고, 없으면 기본 영어 문구.
  공개 링크는 Beta App Review 가 APPROVED 된 뒤부터 설치가 된다. 제출 결과는 이 명령을 다시 돌리면 상태만 확인한다.

이메일 주소·연락처는 로그에 남기지 않는다 (공개 리포 로그). 환경변수 KEY_ID, ISSUER_ID, KEY_PATH 필요.
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


# ---------------------------------------------------------------- 외부 테스트 (공개 링크)

DEFAULT_INFO = {
    'description': 'A calm logic puzzle. Place one cat in every color region so that each row and column '
                   'has exactly one cat and no two cats touch, even diagonally. Every board has exactly one solution.',
    'whatsNew': 'Thanks for testing! Please play for 5-10 minutes and reply with: one thing you liked, '
                'one thing that was confusing, and how likely you would recommend it (0-10).',
}


def load_info():
    path = os.environ.get('TF_INFO', '')
    info = dict(DEFAULT_INFO)
    if path and os.path.exists(path):
        with open(path) as f:
            info.update({k: v for k, v in json.load(f).items() if not k.startswith('_')})
        say(f'테스트 안내 문구: {path}')
    return info


def mask(value):
    if value:
        print(f'::add-mask::{value}')
    return value


def review_contact(app_id):
    """Beta App Review 연락처 — 비어 있으면 최근 App Review(appStoreReviewDetail) 연락처를 복사한다."""
    code, data = req('GET', f'/apps/{app_id}/betaAppReviewDetail')
    if code >= 300:
        sys.exit(f'Beta App Review 상세를 못 읽음 (HTTP {code}): {errors(data)}')
    detail = data['data']
    a = detail['attributes']
    keys = ('contactFirstName', 'contactLastName', 'contactPhone', 'contactEmail')
    for k in keys:
        mask(a.get(k))
    if all(a.get(k) for k in keys):
        say('Beta App Review 연락처: 이미 있음')
        return detail['id']
    # 최근 버전의 App Review 연락처에서 가져온다 (이미 심사 제출한 앱이면 채워져 있다)
    attrs = {}
    code, vers = req('GET', f'/apps/{app_id}/appStoreVersions?limit=3')
    for v in (vers.get('data') or []):
        code, d = req('GET', f'/appStoreVersions/{v["id"]}/appStoreReviewDetail')
        if code < 300 and d.get('data'):
            src = d['data']['attributes']
            attrs = {k: mask(src.get(k)) for k in keys if src.get(k)}
            if len(attrs) == len(keys):
                break
    missing = [k for k in keys if not (a.get(k) or attrs.get(k))]
    if missing:
        sys.exit(f'Beta App Review 연락처가 비어 있음: {", ".join(missing)}\n'
                 '→ App Store Connect → 앱 → TestFlight → Test Information → Beta App Review Information 에 '
                 '이름·전화·이메일을 한 번 채우면 다음부터 자동')
    attrs['demoAccountRequired'] = False
    code, data = req('PATCH', f'/betaAppReviewDetails/{detail["id"]}', {'data': {
        'type': 'betaAppReviewDetails', 'id': detail['id'], 'attributes': attrs}})
    if code >= 300:
        sys.exit(f'Beta App Review 연락처 저장 실패 (HTTP {code}): {errors(data)}')
    say('Beta App Review 연락처: App Review 연락처에서 복사해 채움')
    return detail['id']


def beta_app_localization(app_id, info, contact_email):
    """베타 앱 설명(Test Information) + 피드백 이메일."""
    locs = must('GET', f'/apps/{app_id}/betaAppLocalizations?limit=10')['data']
    attrs = {'description': info['description'],
             'feedbackEmail': info.get('feedbackEmail') or contact_email}
    mask(attrs['feedbackEmail'])
    for loc in locs:
        if loc['attributes'].get('locale', '').lower().startswith('en'):
            cur = loc['attributes']
            if cur.get('description') and cur.get('feedbackEmail'):
                say('베타 앱 설명: 이미 있음 (그대로 둠)')
                return
            code, data = req('PATCH', f'/betaAppLocalizations/{loc["id"]}', {'data': {
                'type': 'betaAppLocalizations', 'id': loc['id'], 'attributes': attrs}})
            say('베타 앱 설명 채움' if code < 300 else f'베타 앱 설명 저장 실패: {errors(data)}')
            return
    code, data = req('POST', '/betaAppLocalizations', {'data': {
        'type': 'betaAppLocalizations', 'attributes': dict(attrs, locale='en-US'),
        'relationships': {'app': {'data': {'type': 'apps', 'id': app_id}}}}})
    say('베타 앱 설명(en-US) 새로 만듦' if code < 300 else f'베타 앱 설명 만들기 실패: {errors(data)}')


def what_to_test(build_id, info):
    locs = must('GET', f'/builds/{build_id}/betaBuildLocalizations?limit=10')['data']
    for loc in locs:
        if loc['attributes'].get('locale', '').lower().startswith('en'):
            code, data = req('PATCH', f'/betaBuildLocalizations/{loc["id"]}', {'data': {
                'type': 'betaBuildLocalizations', 'id': loc['id'], 'attributes': {'whatsNew': info['whatsNew']}}})
            say('What to Test 채움' if code < 300 else f'What to Test 저장 실패: {errors(data)}')
            return
    code, data = req('POST', '/betaBuildLocalizations', {'data': {
        'type': 'betaBuildLocalizations', 'attributes': {'locale': 'en-US', 'whatsNew': info['whatsNew']},
        'relationships': {'build': {'data': {'type': 'builds', 'id': build_id}}}}})
    say('What to Test(en-US) 새로 만듦' if code < 300 else f'What to Test 만들기 실패: {errors(data)}')


def external_group(app_id):
    name = os.environ.get('GROUP_NAME', 'Beta Testers')
    limit = int(os.environ.get('PUBLIC_LINK_LIMIT', '100'))
    want = {'publicLinkEnabled': True, 'publicLinkLimitEnabled': True, 'publicLinkLimit': limit,
            'feedbackEnabled': True}
    groups = must('GET', f'/apps/{app_id}/betaGroups?limit=50')['data']
    external = [g for g in groups if not g['attributes'].get('isInternalGroup')]
    group = next((g for g in external if g['attributes'].get('name') == name), None) or (external[0] if external else None)
    if group is None:
        code, data = req('POST', '/betaGroups', {'data': {
            'type': 'betaGroups',
            'attributes': dict(want, name=name, isInternalGroup=False),
            'relationships': {'app': {'data': {'type': 'apps', 'id': app_id}}}}})
        if code >= 300:
            sys.exit(f'외부 테스트 그룹을 만들 수 없음 (HTTP {code}): {errors(data)}')
        say(f'외부 테스트 그룹 "{name}" 새로 만듦 (공개 링크 켬, 정원 {limit})')
        return data['data']
    a = group['attributes']
    if not a.get('publicLinkEnabled') or a.get('publicLinkLimit') != limit:
        code, data = req('PATCH', f'/betaGroups/{group["id"]}', {'data': {
            'type': 'betaGroups', 'id': group['id'], 'attributes': want}})
        if code >= 300:
            sys.exit(f'외부 그룹 공개 링크 켜기 실패 (HTTP {code}): {errors(data)}')
        say(f'외부 테스트 그룹 "{a.get("name")}": 공개 링크 켬 (정원 {limit})')
        return data['data']
    say(f'외부 테스트 그룹 "{a.get("name")}": 이미 있음 (공개 링크 켜져 있음)')
    return group


def beta_review(build_id):
    """Beta App Review 제출 — 이미 제출돼 있으면 상태만 알려 준다."""
    code, data = req('GET', f'/builds/{build_id}/betaAppReviewSubmission')
    if code < 300 and data.get('data'):
        state = data['data']['attributes'].get('betaReviewState')
        say(f'Beta App Review: 이미 제출됨 → 상태 {state}')
        return state
    code, data = req('POST', '/betaAppReviewSubmissions', {'data': {
        'type': 'betaAppReviewSubmissions',
        'relationships': {'build': {'data': {'type': 'builds', 'id': build_id}}}}})
    if code >= 300:
        say(f'⚠️ Beta App Review 제출 실패 (HTTP {code}): {errors(data)}')
        return None
    state = data['data']['attributes'].get('betaReviewState')
    say(f'Beta App Review 제출함 → 상태 {state} (외부 테스터 첫 빌드는 보통 하루 안팎 걸린다)')
    return state


def external(number, bundle_id=''):
    build, app = find_build(number, bundle_id)
    name = app['attributes'].get('name', app['id'])
    say(f'앱: {name} · 빌드 {number} 처리 완료 — 외부 테스트 준비 시작')
    info = load_info()

    if build['attributes'].get('usesNonExemptEncryption') is None:
        code, data = req('PATCH', f'/builds/{build["id"]}', {'data': {
            'type': 'builds', 'id': build['id'], 'attributes': {'usesNonExemptEncryption': False}}})
        say('수출 규정: 암호화 해당 없음으로 답함' if code < 300 else f'수출 규정 답하기 실패: {errors(data)}')

    detail_id = review_contact(app['id'])
    code, d = req('GET', f'/betaAppReviewDetails/{detail_id}')
    contact_email = (d.get('data') or {}).get('attributes', {}).get('contactEmail') if code < 300 else None
    beta_app_localization(app['id'], info, contact_email)
    what_to_test(build['id'], info)

    group = external_group(app['id'])
    gid = group['id']
    code, data = req('POST', f'/betaGroups/{gid}/relationships/builds',
                     {'data': [{'type': 'builds', 'id': build['id']}]})
    if code < 300:
        say(f'빌드 {number} 를 외부 그룹 "{group["attributes"].get("name")}" 에 붙임')
    else:
        say(f'빌드 붙이기: {code} — {errors(data)[:200]} (이미 붙어 있으면 그대로 진행)')

    state = beta_review(build['id'])

    # 공개 링크 (그룹을 다시 읽어야 publicLink 가 보인다)
    g = must('GET', f'/betaGroups/{gid}')['data']['attributes']
    link = g.get('publicLink')
    if link:
        say(f'\n🔗 공개 링크: {link}\n(Beta App Review 가 APPROVED 되기 전엔 열어도 설치가 안 된다. 상태: {state})')
        out = os.environ.get('GITHUB_OUTPUT')
        if out:
            with open(out, 'a') as f:
                f.write(f'public_link={link}\nreview_state={state}\n')
    else:
        say('⚠️ 공개 링크가 아직 안 보임 — App Store Connect → TestFlight → 그룹에서 확인')
    say(f'\n✅ {name} 빌드 {number}: 외부 테스트 준비 끝 (Beta App Review 상태: {state})')


if __name__ == '__main__':
    if len(sys.argv) >= 3 and sys.argv[1] == 'invite':
        invite(sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else '')
    elif len(sys.argv) >= 3 and sys.argv[1] == 'external':
        external(sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else '')
    else:
        sys.exit('usage: asc_testflight.py invite|external <build_number> [bundle_id]')
