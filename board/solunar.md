# Glance Solunar: Fishing Times (낚시·사냥 시간, solunar 앱) — 개발 세션 게시판
마지막 갱신: 2026-10-06 (KST)

## 지금 상태 (3줄 이내)
**10-06 사용자 요청으로 `DESIGN.md` 리터칭 완료**(기존 앱이지만 사용자가 직접 요청 — Glance dB 와 같은 예외): Cupertino·라이트/다크·강조색 1개(해 뜰 녘 주황)·시그니처 **24시간 원형 다이얼**(해·달 하루, Major 굵게·Minor 가늘게, 지금 점), 낚시/사냥 전환(사냥은 다이얼 가운데 허용 시간 카운트다운), 안내 화면 없이 첫 화면부터 메인.
테스트 37개(엔진 22 + 로봇 15: 3기종×라이트/다크·135% 글씨·VoiceOver 버튼·줄 합쳐짐 검사) + 웹 클릭 점검 43/43. AdMob 실제 ID 반영(배너·보상형). 웹 https://soulfulfillable.github.io/test-mvp/solunar-app/index.html
다음: ASC 앱 레코드(사용자) 확인 → `Release iOS`(solunar) → TestFlight(초대 자동).

## 다음 할 일 / 사용자에게 받을 것
- ✅ 이름·번들(10-03) → ✅ Apple 번들 등록 → ✅ AdMob 앱·광고 단위 2개(10-06, 사용자 캡처: 앱 `~5104875562`, 배너 `/2111135851`, 보상형 `/6669238673`) → 코드 반영.
- [사용자] App Store Connect 신규 앱: iOS / `Glance Solunar: Fishing Times` / English (U.S.) / `com.soulfulfill.solunar` / SKU `solunar` / Full Access (https://soulfulfillable.github.io/test-mvp/todo.html). 됐는지 Actions 로 확인 후 바로 Release iOS.
- [사용자] 새 디자인 웹 미리보기 '느낌' 한마디.
- [세션] 앱 레코드 생기면 → `Release iOS`(solunar) → TestFlight 초대 자동 → 스크린샷 1290×2796 → `App Store 등록 정보 채우기` → 2.1 대비 심사 메모 7항목·녹화 부탁(공통 규칙).

## 사용자 피드백 기록 (최신이 위, 원문 인용 + 어떻게 반영했나)
| 날짜 | 원문 | 반영 |
|---|---|---|
| 10-06 | "너무 뭔가 앱이 1차원적인데 디자인들이, 어제 내가 head쪽에 디자인업데이트방향 말해봤는데 그거보고 다시좀해보자" | `DESIGN.md` 방향으로 다시 만듦: Material → Cupertino(큰 제목·묶음 목록·라이트/다크), 강조색 1개, 평평한 24시간 막대 → **원형 다이얼(시그니처)**, 낚시/사냥 전환, 온보딩 삭제(폰 시간대 큰 마을로 바로 시작 + Use My Location). `DESIGN.md` 는 "기존 앱 손대지 않음" 이지만 사용자가 이 앱에 직접 요청 → PRODUCT 결정 로그에 예외로 기록 |
| 10-06 | AdMob 광고 단위 생성 완료 화면 2장 (배너·보상형) | 앱 ID `ca-app-pub-4724352880074547~5104875562`(Info.plist), 배너 `…/2111135851`, 보상형 `…/6669238673`(ads.dart) |
| 10-03 | (A/B) 이름 → "Glance Solunar: Fishing Times (추천)", 번들 → "solunar 로 등록 (추천)" | 이름·부제 확정, Actions 로 번들 등록(새로 등록함), 홈 화면 이름 `Solunar`, 스토어 문구 `ios-metadata.json`, `Release iOS`·`App Store 등록 정보 채우기` 선택지에 solunar 추가, todo 페이지에 추가 |
| 10-03 | "낚시·사냥 시간(솔루나) 앱 개발 시작해줘. plans/solunar-app.md 기획서대로 하고, 시작 전에 PLAYBOOK.md 와 board/ 전체를 읽어 (특히 board/tides.md — 일출일몰·달 계산 재사용). 네 게시판은 board/solunar.md 야 — 내 피드백 받을 때마다, 단계 끝날 때마다 갱신해서 다른 세션들과 공유해줘." | 읽고 시작. 물때 앱 일출일몰·위상 코드 재사용 + 달 위치·월출월몰·남중 새로 만듦. 이 파일을 단계마다 갱신 |

## 사용자 성향 — 원하는 것 / 불편해하는 것 (이 앱에서 알게 된 것)
- (다른 게시판에서 배움) 폰으로 바로 해 보는 링크를 먼저 원함 → 웹 미리보기부터. 결정은 추천안 + 이유 한 줄. 이름은 Glance 시리즈로 통일되는 중.
- (이 앱) 이름·번들 둘 다 추천안을 바로 골랐다 (다른 앱들과 같음).
- (이 앱) **평평한(1차원) 화면을 싫어한다** — 막대 그래프+카드 목록은 "1차원적". 한눈에 들어오는 주인공 그림(다이얼) 하나가 있는 쪽을 원함.
- (이 앱) 기획 쪽(head)에 말해 둔 방향을 개발 세션이 알아서 찾아 반영하길 기대한다 → 시작할 때 `DESIGN.md`·PRODUCT 결정 로그를 다시 읽을 것.

## 다른 세션에 알리는 노하우 (다른 앱에서도 써먹을 것)
- **물때 세션에: 월출·월몰·달 남중/북중이 생겼다** → `solunar_app/flutter/lib/core/astro.dart` 의 `moonEvents(start, end, lat, lng)` (Meeus 47장 달 위치 + USNO 정의).
  PyEphem 대조 13곳·1,839건: 남중 ±1초, 월출·월몰 최대 30초(71°N). 파일 하나라 그대로 복사해 쓰면 된다 (해·위상 부분은 물때 코드와 같음).
  기준값 생성기 `tools/solunar/make_reference.py` — **PyEphem 은 북극권에서 월출을 놓치는 일이 있다**(앞 남중 때 달이 지평선 아래면 NeverUpError). 고도를 직접 찍어 우리 값이 맞는 걸 확인하고 테스트에 예외 1건으로 적었다.
- **공개 솔루나 표 대조**: solunarforecast.com 의 Major = 달 남중/북중 ±60분, Minor = 월출/월몰 ±30분 (Tool TX 2026-09-03 표와 2분 이내 일치). 신문 Knight 표는 '시작 시각'을 싣는다 — 가운데 시각이 아니니 대조할 때 주의.
- **ListView 를 맨 위로 보내는 순간에 위쪽 항목이 빠지면(조건부 카드) 스크롤이 엉뚱한 곳(230px)에서 멈춘다** — 그 프레임에 남은 옛 위치로 보정하기 때문. `animateTo`·`jumpTo`·다음 프레임 `jumpTo` 다 실패.
  → 날짜/장소가 바뀌면 `KeyedSubtree(key: 날짜)` 로 목록을 새로 만들고 `ScrollController(keepScrollOffset: false)`. 로봇 테스트가 "다른 날 눌렀는데 점수가 화면 밖" 으로 잡았다.
- **`timezone` 패키지의 `latest_all.dart`(Dart 문자열 내장)는 웹 main.dart.js 를 1.8MB 키운다** → `.tzf` 파일을 자산으로 넣고 `tz.initializeDatabase(bytes)`. (4.1MB → 2.7MB)
- **Flutter 웹 접근성 트리**: 카드 안 글자들은 그룹의 `aria-label` 한 덩어리로 합쳐지거나 `span` 에 들어간다 → 점검 스크립트는 `flt-semantics, span, h2` 의 aria-label·글자를 정규식으로 찾는다(`solunar_app/qa/web-check.js` 의 `has()`).
  ChoiceChip 은 role `checkbox`. **AppBar 제목 자리의 InkWell 은 버튼이 아니라 제목(h2)으로만 읽힌다** → `Semantics(container: true, button: true, label: …)` 로 감싸야 VoiceOver·자동 점검이 버튼으로 찾는다.
- **도시 목록이 필요하면** GeoNames(download.geonames.org)는 막혀 있지만 PyPI `geonamescache` 휠에 cities500/1000/5000/15000 JSON(시간대 포함)이 들어 있다 → `tools/solunar/make_places.py`. CC BY 4.0 이라 앱 안에 출처 표기.
- **GPS 위치의 이름은 "가장 가까운 곳"이 아니라 큰 도시 가중**: GeoNames 에 "University of Texas" 같은 항목이 있어 오스틴 한복판이 "near University of Texas" 로 나왔다 → 거리 − 1.5마일×log10(인구)로 고른다.
- **시간대**: GPS 지점은 폰 시간대(`flutter_timezone`), 검색한 마을은 그 마을 시간대 — 다른 주를 볼 때 그곳 시각으로 보여 준다(Bozeman 은 MDT).
- **복사해 온 문구 확인**: 물때 앱 `location.dart` 를 가져왔더니 "search for a station" 이 남아 있었다(웹 스크린샷에서 발견) → 로봇에 "station 글자 없음" 검사를 넣었다.
- 이 작업 환경에서 WebFetch 는 대부분 막히지만 **WebSearch 는 된다** — 경쟁 앱 평점·리뷰 불만은 백그라운드 조사 에이전트에게 WebSearch 로 맡기면 15분 안에 나온다.

- **todo 페이지 광고 단위가 2개 이상인 앱**: `docs/todo.html` 의 `apps` 항목에 `units:[['광고 단위 1 · Banner 카드','banner'],['광고 단위 2 · Rewarded 카드','rewarded_calendar']]` 처럼 넣으면 줄마다 복사 버튼이 생긴다 (없으면 기존대로 banner 한 줄).
- 홈 화면 아이콘 아래 이름은 12자 안팎에서 잘린다 → "Glance Solunar"(14자) 대신 `Solunar`. 스토어 이름은 따로라 검색에는 영향 없음.

- **(웹 미리보기) `CupertinoSearchTextField` 기본 지우기(×) 버튼은 첫 글자를 치는 순간 입력칸 포커스를 날린다** — 웹 점검에서 한 글자씩 쳤더니 "b" 만 들어감
  (`document.activeElement` 가 BODY 로). 자리표시 글자는 무관, `suffixMode: OverlayVisibilityMode.never` 로 끄면 해결 → ×는 칸 **밖에 항상** 두고 비었을 때 흐리게.
  `enterText` 를 쓰는 로봇 테스트로는 안 잡힌다 — 웹 점검에서 **한 글자씩 치며 포커스 유지**를 검사할 것 (`solunar_app/qa/web-check.js`).
- **`CupertinoListTile(onTap:)` 은 자기 접근성 노드를 안 만든다** → 묶음 하나가 통째로 버튼 하나로 읽혔다("Starts 6:18 AM Ends … Adjust"). 줄마다 `MergeSemantics`
  (안에 버튼이 있는 줄은 `Semantics(container: true)`) — `solunar_app/flutter/lib/screens/widgets.dart` 의 `ListRow`. 로봇 `expectButtonsTappable` 에 "버튼 라벨이 4줄 넘으면 합쳐진 것" 검사 추가(고치기 전 실패 확인).
- **`CupertinoSliverNavigationBar` 는 `middle` 이 없으면 큰 제목 위젯(키 포함)을 접힌 제목에도 쓴다** → `find.byKey` 가 2개 → `middle:` 따로 + `alwaysShowMiddle: false`.
- **`CupertinoListTile` 의 `additionalInfo` 는 큰 글씨(135%)·SE 에서 제목을 자른다**("Adjust for Your State 30 / 30 min") → 값은 `subtitle` 로. 로봇 잘림 검사가 잡음.
- 한 가지 강조색으로 등급·구간을 나눌 때 **연한 색(투명도)은 다른 연한 면(낮 구간)과 섞여 안 보인다** → 굵기·길이로 구분(Major 굵게·Minor 가늘게, 점수는 막대 길이).
- 첫 실행 안내 화면 대신 **폰 시간대의 가장 큰 마을**로 바로 진짜 숫자를 보여 주고 "Use My Location" 버튼 하나 (`AppStore.guessPlace`). 시간대에 마을이 없으면(해외 폰) 뉴욕.

## 다른 세션·기획 파트너에게 묻고 싶은 것
- 기획 파트너: 30일 달력 보상형에서 **영상이 없을 때(오프라인·광고 재고 없음)는 그냥 열어 준다**(8초 기다린 뒤). 사용자 탓이 아닌데 막는 건 1등 앱 불만과 같은 결이라 판단. 괜찮은지?
- 기획 파트너: 점수 분포가 정직하게 나오면 1년 중 약 40% 가 "Slow"(반달 무렵). 계산식을 부풀리지 않고 그대로 두었다 — 너무 박하다는 느낌이면 TestFlight 때 다시 본다.
- 기획 파트너: 주별 사냥 시간 프리셋은 넣지 않았다(출처 확인 못 한 주가 대부분). 대신 오프셋 직접 설정 + 빠른 설정 3개(30/30, 30/일몰, 일출/일몰) + "주 규정 확인" 안내.
