# PLAYBOOK.md — 앱 개발 플레이북 (시행착오를 다음 앱에 물려주는 곳)

**개발 세션은 시작할 때 이 파일을 끝까지 읽고, 끝날 때 새로 배운 것을 여기에 추가한다.**
같은 실수를 두 번 하지 않게 하는 게 목적이다. 방향·우선순위는 `PRODUCT.md`, 공통 규칙은 `CLAUDE.md`.

---

## 0. 세션 역할 나누기

| 세션 | 하는 일 | 하지 않는 일 |
|---|---|---|
| 🧭 기획 파트너 (한 개, 계속 유지) | 방향·후보 고르기·기획서·결정 기록(`PRODUCT.md`, `plans/`)·주간 점검 | 코드 개발 |
| 개발 세션 (앱/작업마다 새로) | `plans/<앱>.md` 대로 개발·테스트·출시, 배운 것을 이 파일에 기록 | 방향 바꾸기 (필요하면 사용자에게 A/B 로 묻고 `PRODUCT.md` 결정 로그에 기록) |

## 1. 새 앱 시작 체크리스트

1. `CLAUDE.md` → `PRODUCT.md` → 이 파일 → `plans/<앱>.md` 순서로 읽는다.
2. 앱 폴더를 `<앱이름>_app/` 로 만든다 (환율 앱 `currency_app/` 구조를 따른다: 웹 원형 + `flutter/` + `store/`).
3. 번들 ID `com.soulfulfill.<앱>` — 정하기 전에 사용자에게 확인 (Apple 에 등록하면 바꿀 수 없다).
4. **테스트 로봇 먼저** — 모든 화면·모든 버튼을 누르는 Flutter 위젯 테스트 (`currency_app/flutter/test/` 참고).
   iPhone 13 크기(1170×2532), 키보드가 뜬 상태도 흉내.
5. 앱마다 AdMob 앱·광고 단위를 새로 만든다 (사용자가 콘솔에서 해야 하는 일 → 클릭 단위 안내).
6. 개인정보처리방침 페이지 `docs/<앱>-privacy.html` (Pages 로 공개).
7. 진행 기록은 `plans/<앱>.md` 아래 "진행 기록"에 남긴다 (세션이 바뀌어도 이어지게).
8. **✨ '와 포인트' 확인** — 기획서에 적힌 "와, 이 정도까지 한다고?" 장면 1개를 먼저 정하고, 보고할 때 그 장면 스크린샷을 같이 낸다.
   빈 화면·오류·오프라인·첫 실행·큰 글씨·다크 모드까지 다듬었는지 점검 (`CLAUDE.md` "품질 목표").

## 2. iOS 출시 경로 (맥 없이) — 환율 앱에서 검증됨

- 업로드: GitHub Actions `Release iOS` (`.github/workflows/release-ios.yml`, 서명 스크립트 `.github/scripts/asc_signing.py`).
  **지금은 환율 앱 경로가 박혀 있다 → 새 앱이면 앱 폴더·번들 ID 를 입력값으로 받게 일반화부터.**
- 등록 정보·스크린샷·빌드 연결: Actions `App Store 등록 정보 채우기` (`asc-metadata.yml`, 데이터는 `<앱>/store/`).
- TestFlight 초대: `Release iOS` 성공 → `TestFlight 초대` 워크플로가 자동으로 내부 그룹 `me`·계정 소유자 초대 메일까지 (2026-10-05~).
  API 메모: 내부 그룹은 `isInternalGroup: true, hasAccessToAllBuilds: true` 로 **API 로 만들 수 있다**. 그 그룹에 빌드를 직접 붙이면 422("Cannot add internal group to a build") — 자동 포함이라 괜찮다.
- 비밀값(ASC API 키 등)은 GitHub 리포 Secrets 에 이미 있다 — 새 앱도 같은 키 재사용.
- 실제로 겪은 실패 (다시 하지 말 것):
  - 자동 서명은 등록 기기가 없으면 개발용 프로파일을 못 만든다 → 실패.
  - 서명 없이 아카이브하면 Google 광고 SDK 프레임워크가 재서명되지 않아 업로드 거부(ITMS 90035).
  - → 해결: API 로 배포 인증서·App Store 프로파일을 만들어 Runner 만 수동 서명. **인증서는 지우지 않고 재사용**(지우면 제출 때 ITMS-90035, 2026-10-05).
  - Podfile 은 `flutter pub get` 이후에 생긴다 → 있을 때만 수정.
  - iOS 는 SwiftPM 이라 CocoaPods 설치 불필요.
- 첫 출시는 범위를 줄인다: 아이폰 전용·세로 고정, EU 제외(trader 신고는 사용자 확인 필요).

## 3. 스토어 등록

- 이름·부제·키워드는 **미국 검색량이 큰 검색어** 기준 (`currency_app/store/ios-listing.md` 가 예시).
- 스크린샷 6.7형 1290×2796, 첫 장에 앱의 가장 매력적인 순간 (환율 앱은 금·비트코인이 보이는 화면으로 교체했다).
- Copyright `2026 Soulfulfill`. 회사명·실명 금지.
- 화면 숫자는 진짜만. 가짜 데이터·"Coming soon" 버튼은 심사 거절 사유.

### 심사 2.1 "정보 요청" 대비 (환율·Kitty Queens 둘 다 받음, 2026-10)
- 신규 개인 계정의 첫 제출들은 2.1 Information Needed 를 받기 쉽다. **첫 제출 때 미리** App Review Notes 에 7항목
  (화면 녹화 첨부 / 목적·대상 / 사용법 / 외부 서비스 / 지역 차이 / 규제·제3자 콘텐츠 / 결제 상품)을 넣고 **실기기 화면 녹화**를 첨부한다.
  예시: `catdoku_app/store/review-reply.md`. 녹화는 사용자 폰이 필요 → 제출 전에 미리 부탁.

## 4. 광고 (수익 = 성공 기준)

- 배너 + 보상형(영상 보고 계속/힌트/해금). 결제(광고 제거) 없이 시작하는 게 기본 방침 (색칠 앱 결정).
- 광고는 사용자가 '원해서' 보는 자리(보상형)에 둔다. 강제 전면 광고는 신중히.

## 5. 게임/퍼즐 설계 교훈 (웹게임에서 배운 것, 자세한 건 `CLAUDE.md`)

- 한눈에 읽혀야 한다. 규칙 2개까지, 규칙은 화면에 상시 보이게(남은 개수 카운터 등).
- 탭 순환 + 페널티 조합 금지 → 팔레트에서 고르고 탭.
- 모바일 터치로 반드시 테스트.

## 6. 시행착오 기록 (최신이 위, 개발 세션이 추가)

| 날짜 | 앱 | 무슨 일이 있었나 | 다음엔 이렇게 |
|---|---|---|---|
| 2026-11-04 | 성경 동반자(context-bible) | 성경 해설 초안에서 ①창 27:35 화자를 기억으로 '에서'라고 씀(실제 이삭) ②원어 주장을 기억으로 쓰고 🟢로 표시 ③견해를 'Many commentators'로 쓰고 대조 안 한 책 목록을 붙여 검수된 것처럼 보임 — Codex 검토에서 지적. 또 inline `<button>` 은 문장 안에서 줄바꿈이 안 돼 강조 문구 앞에서 줄이 끊김 | 본문·원문은 **raw.githubusercontent 의 공개 파일**(WEB: TehShrike/world-english-bible, KJV·ASV: scrollmapper/bible_databases, 헬라어 morphgnt/sblgnt, LXX OpenGreekAndLatin/First1KGreek tlg0527, 히브리어 openscriptures/morphhb)에서 스크립트로 가져와 대조, 인용 화자까지 확인. 대조 못 한 주장은 화면에서 빼고 빌드 스크립트가 금지어로 막게. 문장 속 탭 대상은 `span[role=button]` |
| 2026-11-02 | Popcorn(재설계 대기) | 첫 화면에 새총·목표 통·틈·화살표 라벨·자동 시범 발사까지 넣었는데도 "저걸 왜 쓰러뜨려야 돼? 처음부터 다시" — 뭘·어떻게는 보여 줬지만 **왜**가 없었다 | 새 코어 게임은 조작·목표보다 먼저 **전제(원하는 주인공과 그 이유)** 를 정하고, 첫 프레임에 그 주인공이 원하는 것을 보고 있게 그린다. "목표물을 떨어뜨려라" 식의 추상 목표는 혼자서는 동기가 안 된다 |
| 2026-11-02 | Popcorn(Pop & Topple) | 팝콘 물리 조준 시제품 5레벨. 겪은 것: ①2D 측면 보기라 기획서의 "틈"(받침 사이)은 사방이 막혀 씨앗이 못 들어감 → 위나 옆으로 **열린 포켓**으로 다시 설계 ②직격(씨앗이 컵을 쳐서 떨어짐)이 팝보다 많이 이김 → 씨앗 밀도 1.2·컵 밀도 3.5 로 "팝만 통하게" ③좁은 슬롯(0.32)에 지름 1.2 팝콘이 끼면 Box2D 가 기둥을 화면 밖으로 날림 → 입구만 좁고 아래는 넓은 **열쇠구멍** 모양 ④기둥이 바닥에 서 있으면 밀어도 미끄러지기만 함 → **기둥보다 좁은 받침** 위에 세워 어느 쪽으로든 밀리면 떨어지게 ⑤보이지 않는 세계 벽에 넘어진 기둥·컵이 **걸려** 성공 판정이 안 남(두 레벨) ⑥팝콘이 남아 다음 길을 막음 → 2.2초 뒤 소멸 ⑦레벨 라벨 `textContent` 로 자식 요소를 지워 첫 로딩이 죽음 ⑧로봇의 "반쯤 당겨 스크린샷" 이 실제 발사가 되어 4레벨 실패로 오판 | 물리 퍼즐은 **풀이기 지표 3개**(전체 성공 %, 틈 안 팝 중 성공 %, 팝 없는 직격 성공 %)를 보며 기하를 고친다 — "틈 안 팝 = 거의 성공, 직격 = 0" 이 목표. 넘어질 물건은 받침 위에, 뒷벽(backboard)은 빗나간 씨앗을 포켓으로 떨어뜨려 성공 창을 넓힌다. 세계 경계는 카메라보다 넉넉히(또는 낮은 턱으로 멈춤). 팝 시 셀 때 `R+0.12` 안의 바디만 밀되 **가장 가까운 점**에 임펄스를 줘 기울게. 슬링샷 게임은 가로로 긴 장면이라 폰 세로에선 작아짐 → 카메라 x 범위를 레벨마다 지정(`cam.x1`)하고 구조물 세로를 1.4m 로 키움. 로봇 드래그는 CDP 터치, 짧은 당김은 취소(MIN_PULL)라도 절반 당김은 발사됨에 주의 |
| 2026-11-02 | Knock Chain(중단) | 새 코어 게임의 1단계 정지 화면·플레이 빌드를 사용자가 보고 "전혀 모르겠는데" — 장면이 화면 1/4 크기 디오라마, 어둡고, 양(목표)이 화면에 없고, 조작 대상(당길 돌)이 안 보이고, 할 일을 글 한 줄로만 설명 | **첫 프레임에 주인공·목표·조작 대상이 한 화면에 크게**, 글 없이 그림이 말하게. 보고 전에 폰 크기 스크린샷을 "처음 보는 사람" 눈으로 다시 보고, 승인 범위(정지 화면 1장)를 넘기지 말 것 — 2단계까지 만든 뒤 1단계가 실패하면 그 작업이 전부 헛수고 |
| 2026-11-02 | Mole Mash | 배경음악을 "경쾌한 걸로 여러 곡" 달라는데 opengameart·kenney·freesound·pixabay·archive.org·jsDelivr·unpkg 가 전부 막혀 사람(Codex)에게 부탁하려 했음. 그런데 **raw.githubusercontent.com 은 열려 있었다**(github.com·api.github.com·codeload 는 403) | 음원·에셋은 **공개 GitHub 저장소의 raw 경로**로 받는다. 경로 찾기: `gh api -X GET search/code -f q='"곡 이름" freepd'` 로 라이선스·크레딧 텍스트 파일을 가진 저장소를 찾고, 같은 폴더의 바이너리를 raw URL 로 받는다(공백·대괄호는 URL 인코딩). 확인된 보물창고: `SoundSafari/CC0-1.0-Music` 의 `freepd.com/<곡명>.mp3`(FreePD 전곡, CC0), Juhani Junkala 팩은 Godot 게임 저장소들에 wav 로 들어 있음. 루프가 아닌 곡은 파형 자기유사도로 반복 지점을 찾아 크로스페이드 루프로 자르는 스크립트(`scratchpad/music/mkloops.py` 방식: 2초 창 정규화 상관, −19 LUFS loudnorm, ogg q3.5 + mp3 112k). 안 들어보고 자르는 거라 이음새는 사용자 확인 필요 |
| 2026-11-01 | Knock Chain | 물리 퍼즐 2단계: 시소 레벨이 해 0(공이 플랭크를 쳐도 돌이 안 날아감), 도미노는 미끄러져 안 넘어짐, 로봇은 `.js` 가 ESM 패키지라 `require` 실패, 야간 씬이 폰에서 검게 보일 만큼 어두움, HUD 알약 둘이 겹침·정사각에서 하단 문구가 화면 밖 | 물리는 렌더 없이 node 에서 도는 모듈로 → **풀이기(전수 탐색)로 클리어 가능·성공 % 를 먼저** 보고 레벨을 고친다(도미노는 키 1.4·돌을 가장자리에 걸침). 로봇은 `.cjs`, 해를 **CDP 터치 드래그**로 재현. 어두운 씬 하한 = 반구광 1.1+방향광 1.4+점광. 14개 크기 로봇에 HUD 겹침·화면 밖 검사 |
| 2026-11-01 | Knock Chain | "진짜 게임 같은" 정지 화면 1장을 두 방식으로: ①Canvas 2.5D 는 광원·면 음영·투영 그림자·접촉 AO·선 두께를 **함수 하나씩으로 고정**하니 코드 드로잉이어도 한 덩어리로 보임 ②three.js 는 npm `@netforge/asset-library-files` 의 CC0 GLB(meshopt → `setMeshoptDecoder` 필수)와 프리미티브로 조명·그림자가 자동 일관. 함정: Kenney `crate.glb` 는 SF 보라 상자, Quaternius 동물은 metalness 0.4+정점색이라 환경맵 없으면 검게 나옴, renderer 캔버스를 append 하면 HUD 를 덮음, Everygen 이미지도 402 | 아트 기준 화면은 **A/B 두 안을 같은 좌표·같은 광원·같은 HUD 로** 만들어 1:1 비교. 3D 모델은 이름 말고 렌더로 확인, 재질은 `metalness=0, vertexColors=false` 로 리셋. 렌더 스크립트는 `playables/knockchain/art/render.js`(콘솔 0 검사 포함) |
| 2026-11-01 | Playables | 샌드박스 첫 사용자 플레이: "Play again 눌렀는데 광고가 나와 속은 느낌" — 전면 광고를 Play again 버튼에 걸어 둔 탓. 또 설명 카드 5줄은 "글씨 많아 지겹다", 스컹크는 "왜 안 되는지 모르겠다" | 전면 광고는 **버튼이 아니라 라운드가 끝나는 순간**에(세션 첫 판 뒤엔 안 부름), 보상형 버튼엔 보상을 문구로. 설명은 글 대신 첫 판의 링/라벨로. 피해야 할 것은 "만지면 안 되는 모양"(폭탄·심지·빨간 링)으로 — 캐릭터 변형(스컹크)은 안 읽힌다 |
| 2026-11-01 | Playables | **Playgama 첫 업로드**: ①Bridge SDK 는 CDN 이 이 환경에서 막혀 있어 npm `@playgama/bridge` 의 `dist/playgama-bridge.js` 를 아카이브에 동봉(문서가 허용하는 self-contained 방식) → 빌드 체크 `bridgeSdk FOUND 2.4.0` 통과, 헤드리스에서도 mock 플랫폼으로 storage·이벤트가 실제로 돈다 ②Everygen 은 구독이 없어 음원 생성 불가(402) — npm 에 CC0 음원이 든 패키지가 있다(`@netforge/asset-library-files` Kenney 효과음+cynicmusic 곡, `uisfx` UI 효과음) ③Safari 는 Web Audio 로 ogg(Vorbis)를 못 풀어 효과음·BGM 을 ogg+mp3 두 벌 넣고 `canPlayType` 으로 고름 ④로봇의 `bridge.platform` 접근을 initialize 전에 했더니 SDK 가 console.error 를 찍어 "콘솔 에러 0" 검사가 깨짐 ⑤플랫폼 일시정지(탭 숨김) 뒤 자동 재개하면 45초 반응 게임에선 바로 죽는다 | SDK 는 npm pack → 로컬 동봉(매 업로드 전 `npm pack` 으로 갱신). 음원은 먼저 npm 검색(`npm search cc0 sound`), 라이선스·출처를 `CREDITS.md` 에. 오디오는 ogg+mp3 두 벌. 플랫폼 메시지 검증은 게임 쪽 `DEBUG` 훅으로(SDK 를 감싸지 말 것). 숨김/플랫폼 일시정지는 일시정지 패널을 띄워 사용자가 Resume 을 누르게. 전체 틀은 `playables/molemash/index.html`·`robot.js`(14개 크기 매트릭스, 세션 검사) — 다음 게임은 복사해서 시작 |
| 2026-11-01 | Playables | 세로 전용으로 만든 게임을 1:1·가로에 맞추기: HUD 를 세로=위 띠 / 가로=왼쪽 기둥 / 정사각=위 2줄 세 모드로 나누고, 판 크기는 `min(폭/3.4, (높이-33)/3.35)` 로 잡으니 14개 크기 전부 겹침 0. 커버 3종(800², 1080×1920, 1920×1080)은 게임 자체를 `#cover` 모드로 그 크기에서 스크린샷 — 레이아웃 증명과 커버를 한 번에 | 새 게임도 처음부터 `layout()` 에 세 모드. 커버는 따로 그리지 말고 게임 화면으로 |
| 2026-10-31 | Kitty Queens | TestFlight **외부 테스트(공개 링크)** 를 API 로 한 번에 만듦 — `betaGroups`(isInternalGroup:false, publicLinkEnabled) 응답에 `publicLink` 가 바로 들어 있고, Beta App Review 제출엔 연락처(`betaAppReviewDetail`)·베타 설명(`betaAppLocalizations`)·What to Test(`betaBuildLocalizations`)가 먼저 채워져야 했다. 연락처는 이미 App Review 에 낸 적 있는 앱이면 `appStoreReviewDetail` 에서 복사하면 됨. 외부 그룹은 내부 `me` 와 달리 **빌드를 직접 붙이고 새 빌드마다 다시 붙여야** 한다 | Actions `TestFlight 외부 테스트`(build·app) 한 번이면 끝. 링크는 Beta App Review **APPROVED 뒤에만 설치**되므로 테스터에게 미리 보내지 말고 "곧 보낼게"만. 외부 베타 피드백은 4.3 답장 4번의 근거 → 이름·연락처 없이 `<앱>_app/store/beta-feedback.md` 에 원문 그대로 |
| 2026-10-31 | Kitty Queens | Google Play 폰 스크린샷은 **긴 변이 짧은 변의 2배를 넘으면 안 된다** — 아이폰 캡처(1170×2532, 2.16배)를 그대로 올리면 거절. 또 Play 는 같은 versionCode 를 두 번 안 받는다 | 1080×2160 틀(제목 + 폰 화면, 아래쪽 잘림)로 다시 렌더(`catdoku_app/store/play/make.js`). `Build Android` 는 `--build-number=run_number`. Flutter·에뮬레이터가 없는 이 환경에선 Actions 의 `flutter test`+AAB 생성까지가 증거이고 실기기 설치는 "확인 못 함"으로 적는다 |
| 2026-10-31 | Playables | 9개 게임 스크린샷을 헤드리스로 찍는데 ①펄스 애니메이션 버튼이 Playwright `click` 에서 "not stable" 로 30초 타임아웃 ②`setContent` 페이지의 `file://` 이미지가 안 뜸 ③`<img height>` 속성이 CSS `aspect-ratio` 를 이겨 카드가 세로로 터짐 ④날짜 시드 계단 게임을 랜덤으로 눌러 죽은 화면이 찍힘 | `click(sel,{force:true})` · 대조표 HTML 은 파일로 써서 `goto` · 썸네일 `<img>` 는 CSS `height:auto` · 시드 게임은 게임의 시드 함수를 복사해 정답을 계산 (`playables/capture.js`) |
| 2026-10-16 | How It Works | `iOS 번들 ID 등록` 이 Apple API 시간 초과로 실패했는데 ✅ 성공 표시(`… | tee` 가 파이썬 종료 코드를 가림) | 워크플로의 `| tee` 앞에 `set -o pipefail`(ios-register 수정함). Actions 결과는 초록 체크가 아니라 **로그의 결과 줄**로 확인 |
| 2026-10-16 | How It Works | 콘텐츠 27개(SVG 도해+애니메이션+사실)를 한 세션이 순서대로 쓰면 몇 시간·크레딧 위험. 또 App Store 자동완성(검색 인기) 엔드포인트는 이제 빈 값 | 단위별 파일 + 작성 가이드 + 내용 규칙 로봇을 먼저 만들고 작업자 5명 병렬(`howitworks_app/lessons/README.md`). 작업자는 자기 파일만, 엔진 버그는 보고만. 검색량은 못 얻으니 iTunes Search API 로 '경쟁 밀도·이름 충돌'을 본다(`tools/howitworks/aso_fetch.py`) |
| 2026-10-15 | How It Works | 코드로 그린 SVG 단면도에서 해칭·색 채움이 전부 사라짐 — CSS `.ink{fill:none}` 이 요소의 `fill=` 속성을 이김(속성 우선순위가 가장 낮다). 또 App Store·trustpilot 은 이 환경에서 WebFetch/curl 모두 막힘 | 스타일 클래스엔 `:not([fill])` 조건. 도해는 스크린샷을 꼭 직접 본다. 경쟁 조사는 WebSearch 요약 + 제3자 집계(apppricinglab 등)로, 정확한 값은 Actions |
| 2026-10-13 | 물때 | 재제출이 자동 분석으로 막힘: AdMob 광고가 있는데 연령 등급 설문의 **Advertising** 을 No 로 둠 | 광고 넣은 앱은 Age Rating 설문에서 Advertising = **Yes** (연령 등급은 그대로 4+) — 첫 제출 체크리스트에 넣을 것 |
| 2026-10-12 | 속도계 | 2.1 답장(녹화 첨부) 이틀 뒤 **5.6 Developer Code of Conduct**("심사 중 숨긴 기능") 거절. 숨긴 기능은 없음 — 정지·실내에선 속도·경고·기록이 안 변해 심사자가 못 본 것, 또는 새 계정 다수 제출 패턴으로 추정 | 움직여야 보이는 기능은 **정지 상태에서도 화면에 이유를 보이게**("움직이면 속도가 나와요"). 안 쓰는 권한 문구(Always 위치 등)는 넣지 않는다. 5.6 은 빌드를 바꾸기 전에 사실 설명 답장부터 |
| 2026-10-12 | Tolle | 2.1 답장 후 Update Review 를 눌렀는데 버전 상태가 "Waiting for Review" 가 아니라 **"Ready for Review"**(아직 제출 안 됨)로 바뀜 — 사용자가 기다리는 줄 앎 | 재제출 안내는 "상태가 **Waiting for Review** 인지 확인"까지. Ready for Review 면 Add for Review → Submit to App Review (폰 웹은 버튼이 안 보일 수 있어 PC 권장) |
| 2026-10-06 | Blessing Jar | 기획서의 "흔들면 하나 떨어짐" 이 경쟁 앱 4곳에 이미 있었다(검색 1번에 나옴). 또 로봇의 "카드 연타 방지" 검사가 0.8초 기다린 뒤 연타해 잠금(0.7초)이 이미 풀려 오탐 | 시제품 전에 핵심 동작 이름으로 스토어 검색 → 차별점을 동작이 아니라 쓰는 방식(돌려쓰기·봉인 의식)에 둔다. 연타 검사는 결과가 뜬 **직후** 바로 누른다. 흔들기 웹 점검은 `new DeviceMotionEvent('devicemotion', {acceleration})` dispatch + 마우스 끌기 둘 다 (`blessingjar_app/qa/robot.js`) |
| 2026-10-06 | Tolle(성경 통독) | 새 앱 첫 `TestFlight 초대` 자동 실행이 그룹을 만든 직후 "409 Tester has no installable build" 로 초대 메일을 건너뛰고도 ✅ 성공으로 끝남 | 새 앱은 자동 실행 로그에서 "초대 메일 보냄" 줄을 확인. 없으면 몇 분 뒤 `TestFlight 초대` 를 build·app 넣어 수동 실행 |
| 2026-10-06 | 은사 키트 | 문항 70개를 손으로 쓰다 보니 분별 문항에 "teaching", 전도·목양 문항에 "faith" 가 섞여 다른 은사 점수를 유도할 뻔 | 문구가 많은 앱은 **검사 스크립트부터**: 금지어(상표·타사·의료 언어) + 항목 이름 노출 + 중복·길이 (`tools/giftskit/check_content.py`). 사용자 검토는 폰 페이지에 "표시 → id 복사" 버튼 |
| 2026-10-06 | 성경 통독 | 하루 분량을 장 수로 나누면 시편 117편(2절)·119편(176절)이 같은 무게라 들쭉날쭉 — 경쟁 앱 리뷰 불만 1순위 중 하나 | 분량은 **절 수 누적**으로 나누고(장은 안 쪼갬) 매일 1장 이상 보장, 15가지 계획 전부 테스트. 장·절 수는 PyPI `pythonbible`(MIT) 휠에서 (`tools/bible/make_books.py`) |
| 2026-10-06 | 성경 통독 | DESIGN.md 첫 적용 — `CupertinoListTile` 오른쪽 값(`additionalInfo`)이 큰 글씨에서 제목을 잘라 먹음, 두 책 걸친 큰 제목이 "2 / Samuel" 로 끊김(스크린샷에서만 보임) | 긴 값은 `subtitle` 로, 큰 제목은 조각마다 줄바꿈. 테스트 스크린샷의 아이콘 네모는 CupertinoIcons 글꼴을 `FontLoader` 로 |
| 2026-10-06 | 솔루나 | (웹) `CupertinoSearchTextField` 의 기본 × 버튼이 첫 글자 입력 때 나타나며 입력칸 포커스를 날림 — `enterText` 로봇은 통과, 웹에서 한 글자씩 칠 때만 보임 | `suffixMode: never` + × 를 칸 밖에 항상. 웹 점검에 "한 글자씩 치며 `activeElement` 유지" 검사 |
| 2026-10-06 | 솔루나 | `CupertinoListTile(onTap)` 이 접근성 노드를 안 만들어 묶음 전체가 버튼 하나로 읽힘 | 줄마다 `MergeSemantics`(안에 버튼 있으면 `Semantics(container)`), 로봇에서 버튼 라벨 줄 수 검사 |
| 2026-10-06 | 솔루나 | 사용자 "앱이 1차원적" — 막대·카드 목록만으로는 평평해 보임 | 화면마다 주인공 그림 하나(솔루나는 24시간 원형 다이얼). `DESIGN.md` 를 새 앱 첫 화면 전에 읽기 |
| 2026-10-06 | 앰비언트 | 90분 영상은 작업 환경에서 몇 시간·리포 100MB 제한 초과 | Actions 에서 렌더 → `gh release create` 로 Releases 에 올림(자산 2GB 까지). 긴 실행 전에 같은 워크플로를 3분짜리로 먼저 돌려 환경 확인 |
| 2026-10-06 | 앰비언트 | 코드(캔버스 도형)로 그린 영상 그림이 "최악" — 다듬어도 클립아트 수준 | 영상·배경은 **실사 사진 + GPU 셰이더 효과**. 헤드리스 크롬 WebGL2 는 `--use-angle=swiftshader --enable-unsafe-swiftshader --allow-file-access-from-files` 로 된다. 사진은 Actions 로 Commons PD/CC0 받기(작업 환경은 사진 사이트 차단) |
| 2026-10-06 | 연비 | 앱 레코드를 만들자마자 돌린 빌드 29 가 **서명 수정(6eb31aa) 이전 커밋**이라, 그대로 냈다면 다른 앱처럼 ITMS-90035 반려될 뻔 | 제출할 빌드는 `git merge-base --is-ancestor 6eb31aa <빌드의 head_sha>` 로 확인. 아니면 새로 Release iOS |
| 2026-10-06 | 연비 | 스토어 스크린샷을 웹 미리보기로 찍으니 가짜 광고 칸·"web preview"·"this browser" 문구·탭 말풍선(마우스 hover)이 찍힘 | 웹 전용 `?shots=1`(광고 숨김·아이폰 문구) + 예시 기록 `?demo=1`, 탭은 Playwright `.tap()`(click 은 tooltip). `fuellog_app/store/screenshots/capture.js` |
| 2026-10-05 | 물때 | 심사 제출 때 "Content Rights Information" 이 빠져 Add for Review 막힘 | 외부 데이터(NOAA 등)를 보여 주는 앱은 App Information → Content Rights 를 "제3자 콘텐츠 있음 + 권리 있음" 으로 미리 안내 |
| 2026-10-05 | 공통(대출) | 제출 1.5일 뒤 **ITMS-90035 Invalid Signature** 로 반려 — Release iOS 가 업로드 직후 배포 인증서를 revoke 하고 있었다(빠르게 제출한 환율 빌드 8 은 통과해 늦게 드러남) | 배포 인증서는 지우지 않는다. 암호화해 `ci-signing` 브랜치에 보관·재사용 (`asc_signing.py`) |
| 2026-10-05 | 앰비언트 | 헤드리스 크롬 OfflineAudioContext 로 3분 렌더 — 비 소리만 348초(빗방울 0.1초마다 노드 4개 생성) | 짧은 소리를 자주 내는 레이어는 노드를 매번 만들지 말고 미리 만든 버퍼를 재생. 긴 렌더는 조각으로 나눠 이어 붙인다 |
| 2026-10-05 | 소음 | ASC 웹에서 스크린샷을 손으로 올리는데 버전 화면 칸이 **6.5" Display** 라 1290×2796(6.9"용)이 전부 거절 → 빨간 칸이 "screenshot uploads in progress" 로 제출을 막음. 여러 장 끌어 넣다 중복·순서 섞임 | 수동 업로드 안내 땐 6.5"용 1284×2778 도 같이 만든다(`ffmpeg scale=1284:2783,crop=1284:2778`, `decibel_app/store/screenshots/6.5in/`). 올릴 순서 목록을 같이 준다 |
| 2026-10-05 | 소음 | `App Store 등록 정보 채우기` 가 3번 연속 "job was not acquired by Runner of type hosted" 로 15분 대기 후 취소(GitHub 쪽). 또 UI 리터칭 후 심사 메모가 옛 화면(welcome·Continue) 그대로였다 | 러너가 한 번 안 잡히면 기다리지 말고 수동 대안(메모 붙여넣기 글·스크린샷 파일·빌드 직접 선택)을 바로 준다. 화면 흐름을 바꾸면 `ios-metadata.json` 심사 메모도 같은 커밋에서 고친다 |
| 2026-10-05 | 소음 | Cupertino 전환 후 **Flutter 기본 뒤로 버튼이 VoiceOver 누르기 동작 없는 노드**를 만듦(로봇 접근성 검사로 발견), `insetGrouped` 머리글은 기본 20pt 굵게(설정 앱과 다름) | 직접 만든 `BackLink`·`SectionHeader`/`Footer` (`decibel_app/flutter/lib/screens/widgets.dart`) 재사용 |
| 2026-10-05 | 소음 | 다크 모드 밝은 강조색 버튼에 흰 글씨 → 거의 안 읽힘. 노랑(systemYellow) 숫자 글씨도 흰 바탕에서 안 읽힘 | 강조색 위 글씨는 밝기 따라 흑/백. 의미 색은 글씨 대신 작은 점으로 |
| 2026-10-05 | 앰비언트 | 생성 음악의 '같은 시드 = 같은 곡'이 깨짐 — 난수 하나를 코드·멜로디·빗방울·귀뚜라미가 나눠 써서 예약 구간 길이에 따라 소비 순서가 달라짐 | 스트림마다 RNG 를 따로. 검증은 OfflineAudioContext 렌더 두 번 비교(크롬은 1e-8 부동소수점 차이가 있어 허용 오차로). 엔진은 '오디오 시계 t 까지 예약' 구조로 짜면 실시간·오프라인 렌더를 같은 코드로 검증 |
| 2026-10-05 | 속도계 | `App Store 등록 정보 채우기` 두 번째 실행에서 심사 메모 수정이 409 — 연락처(이름·성·이메일·전화 4개)가 비어 있어서(처음 만들 땐 통과, 고칠 땐 4개 다 요구) | 심사 메모는 **처음부터 7항목 최종본**으로 첫 실행. 고치려면 사용자가 ASC 에 연락처(+1… 형식)를 넣은 뒤 다시 돌린다 |
| 2026-10-05 | 속도계 | TestFlight 초대를 사람이 ASC 웹에서 하던 걸 자동화 — 빌드 26 이 업로드 2분 뒤 VALID, 그룹 생성·테스터·초대 메일까지 API 로 됨 | `testflight-invite.yml`(Release iOS 와 따로 둔 워크플로라 Release iOS 대기 줄을 늘리지 않음). 공개 리포 로그엔 `::add-mask::`, Step Summary 는 가림이 안 먹으니 이메일 문장을 쓰지 않는다 |
| 2026-10-05 | 소음 | `flutter create` 기본 버전 **0.1.0** 그대로 TestFlight 에 올려서, ASC 의 1.0 버전에 빌드가 안 붙음(`App Store 등록 정보 채우기` 빌드 연결 StopIteration). 1.0.0 빌드는 ASC "1.0" 에 정상 연결됨 | 새 앱은 만들자마자 `pubspec.yaml` 을 `version: 1.0.0+1` 로. 첫 `Release iOS` 전에 확인 |
| 2026-10-03 | 대출 | 인구조사국 API 가 키 없이 'Missing Key' HTML 을 돌려줌 + 이 환경에서 census 차단 | 키 없는 ACS 표 단위 요약 파일(.dat)을 Actions 로 받아 데이터 브랜치에 (`tools/mortgage/fetch_census_counties.py`) |
| 2026-10-03 | 대출 | 테스트가 화면 밖(시트 맨 아래) 항목을 탭하고도 경고만 내고 진행 | `WidgetController.hitTestWarningShouldBeFatal = true` 로 실패시키기 |
| 2026-10-03 | 대출 | 로컬 Flutter 3.47.6 으로 `flutter create` → `sdk: ^3.13.5` 가 박혀 Actions(Flutter 3.47.2, Dart 3.13.2)의 `Release iOS` 가 `pub get` 에서 실패 | 새 앱은 `pubspec.yaml` 의 `sdk:` 를 CI 버전(`^3.13.2`)에 맞춘다. 로컬도 workflow 의 `flutter-version` 과 같은 버전을 깔면 더 안전 |
| 2026-10-03 | 연비 | 주유를 저장해도 기록 탭 숫자가 그대로 — 위에서 `ListenableBuilder` 로 감쌌지만 `const HomeShell()`·`const _Summary()` 는 **같은 const 위젯이라 다시 안 그려짐** | 저장소를 읽는 화면은 **각자 구독**(`build` 를 `ListenableBuilder` 로)하거나 바뀌는 데이터를 인자로 넘긴다. 로봇이 "저장 → 화면 숫자" 를 검사해서 잡았다 |
| 2026-10-03 | 연비 | 거리 알림의 예상 날짜가 이미 지난 날(기록이 뜸할 때) → `notifyAt` 이 과거라 **알림이 예약조차 안 됨**. 테스트는 통과, **스크린샷의 "about Sep 29"(오늘 Oct 2)** 로 발견 | 예상일은 오늘보다 앞이면 오늘로, 알림은 다음 날 아침. 로봇에 "알림 켠 정비는 전부 미래 시각에 예약됐나" 검사. 고치기 전 실패 확인 |
| 2026-10-03 | 연비 | `Semantics(button: true, excludeSemantics: true)` 로 감싼 버튼이 VoiceOver 에선 **누르기 동작이 없음**(앱 바 제목에 합쳐짐). 웹 점검 `getByRole('button')` 이 못 찾아서 발견 | `Semantics` 에 `onTap`(+앱 바 안이면 `container: true`). 로봇 `expectButtonsTappable`: 버튼인데 tap 액션 없는 노드 = 실패 (`fuellog_app/flutter/test/robot_test.dart`) |
| 2026-10-03 | 연비 | 앱 바 제목·탭 글자가 스크린샷에서 검은 네모 → 잘림 검사 오탐. `appBarTheme.titleTextStyle: TextStyle(...)` 처럼 **빈 TextStyle 은 테마 글꼴을 안 이어받는다** | `base.textTheme.titleMedium!.copyWith(...)` 로 만든다 (기기에선 시스템 글꼴로 보여 눈치 못 챔) |
| 2026-10-03 | 연비 | 큰 글씨(135%)에서 단가 칸 숫자가 1.5px 모자라 잘림 | 입력 칸 폭을 `MediaQuery.textScalerOf` 에 비례(화면 62% 까지). 3칸 요약은 `FittedBox(scaleDown)` |
| 2026-10-03 | 연비 | `pkill -f "flutter test"`·`pkill -f flutter_tester` 가 **그 글자가 든 내 bash 명령까지 죽여** 뒤 명령이 안 돎 | 멈춘 테스트는 `pkill -9 -x flutter_tester` (프로세스 이름 정확히) |
| 2026-10-03 | 연비 | 다른 앱 CSV 가져오기 형식을 알 길이 없음(사이트 막힘) | 오픈소스 가져오기 도구 코드(Hammond·LubeLogger)에서 Fuelly 열 이름을 읽었다 → 머리글 별칭으로 맞추고 엔진 테스트에 그 형식 그대로 고정 (`fuellog_app/flutter/lib/core/csv.dart`) |
| 2026-10-03 | 캣도쿠(Kitty Queens) | TestFlight 에서 "No video available" 연속 — 새 AdMob 앱은 스토어 출시·링크 전 광고 재고가 거의 없고, 그 사이 틀린 고양이로 막다른 판에 갇힘 | 보상형 광고가 **안 오면 보상을 그냥 준다**(중간 닫기만 안 줌). 막다른 상태는 화면에 이유 표시. 출시 뒤 AdMob 에 스토어 링크 연결 |
| 2026-10-03 | 캣도쿠 | 점검 팀 426회 누름에서 가장 많이 나온 버그 = **연타**: 다음 레벨 연타로 레벨 건너뛰기·저장 중단, 새 판에 엉뚱한 고양이, 반칙 칸 연타로 하트 3개, 마지막 칸 연타로 승리 패널 버튼이 눌림, 힌트 연타로 창 즉시 닫힘 | 결과 패널은 0.9~1.1초 뒤에, 새 판·반칙·창 닫힘 뒤 0.45~0.7초 입력 잠금(**Timer 로** — DateTime.now 는 위젯 테스트 가짜 시계에서 안 풀림), "다음 단계"는 저장값에서 계산, 확인 창 `barrierDismissible:false`. 로봇에 연타 테스트 |
| 2026-10-03 | 캣도쿠 | 뒤로 갔다 오면 홈 카드 숫자가 옛 값 — `await Navigator.push` 뒤 setState 는 다음 화면 dispose 저장보다 먼저 돈다(`pushReplacement` 도 같음) | 홈은 저장소(ChangeNotifier)를 구독해 다시 그린다. 자정 넘김은 앱 복귀 + 주기 확인 |
| 2026-10-03 | 캣도쿠 | Flutter 웹(ensureSemantics)에서 반투명 패널 뒤 버튼이 눌림 | 패널이 뜨면 뒤 화면을 `AbsorbPointer` + `ExcludeSemantics` |
| 2026-10-02 | 캣도쿠 | 웹판 탭 순환(✕→🐱→해제)은 ✕ 를 지우려다 하트를 잃음(재현) | 팔레트(🐱/✕) + ✕ 끌어 칠하기·끌어 지우기. ✕ 붓은 고양이를 지우지 않는다 |
| 2026-10-02 | 캣도쿠 | 유일해 퍼즐을 다시 뽑기로 찾으면 8×8 부터 수천 번 | "다른 해의 칸을 이웃 구역으로 넘기기" 보정 → 9×9 ≤60ms. 난수는 xorshift32(곱셈 없음)라 Dart VM·웹이 같은 판 |
| 2026-10-02 | 캣도쿠 | 폰으로 바로 해 보고 싶다는 요청 | Flutter 웹 빌드를 `docs/<앱>/` 로(`canvaskit/` 빼면 40→3.6MB), 광고는 kIsWeb 이면 가짜. 샌드박스 점검은 `catdoku_app/qa/flutter-web-harness.js` |
| 2026-10-02 | 캣도쿠 | 웹게임 이름 "Catdoku" 가 스토어에 동명 앱 여럿 | 이름은 먼저 스토어 검색. 번들 ID 등록은 API(`iOS 번들 ID 등록` Actions), 앱 레코드는 사람이 ASC 웹에서 |
| 2026-10-03 | 솔루나 | 다른 날을 누르면(위쪽 "지금" 카드가 빠짐) 목록을 맨 위로 보냈는데 230px 에서 멈춤 — `animateTo`/`jumpTo`/다음 프레임 모두 실패 | 내용이 바뀌는 목록은 `KeyedSubtree(key: 날짜·장소)` 로 새로 만들고 `ScrollController(keepScrollOffset: false)`. 로봇에서 "누른 뒤 제목이 화면 안" 을 검사 |
| 2026-10-03 | 솔루나 | `timezone` 패키지 `latest_all.dart` 가 웹 스크립트를 1.8MB 키움 | `.tzf` 를 자산으로 넣고 `tz.initializeDatabase(bytes)` |
| 2026-10-03 | 솔루나 | 다른 앱에서 복사한 코드에 "station" 문구가 남음 — 테스트 통과, 웹 스크린샷에서만 보임 | 복사해 온 파일은 문구를 grep, 로봇에 "옛 앱 단어 없음" 검사 |
| 2026-10-03 | 솔루나 | AppBar 제목 자리 InkWell 이 웹/VoiceOver 에서 버튼이 아니라 제목으로만 읽힘 | `Semantics(container: true, button: true, label: …)` 로 감싸고 로봇에서 `find.bySemanticsLabel` 로 확인 |
| 2026-10-03 | 경로 퍼즐 | 웹 실제 터치 점검에서 "드래그가 전혀 안 먹음" — 원인은 앱이 아니라 점검 스크립트가 부모 `flt-semantics`(화면 전체 상자)를 판으로 잡아 엉뚱한 곳을 끈 것 | 접근성 트리에서 요소를 찾을 땐 글자가 맞는 것 중 **가장 작은 상자**. 실패하면 스크린샷과 좌표부터 확인하고 앱을 고친다 |
| 2026-10-03 | 경로 퍼즐 | 유일해 풀이기를 빠르게 하려고 가지치기를 넣을수록 해를 빠뜨려 "해가 하나"라고 잘못 믿을 위험 | 무식한 풀이(가지치기 없음)와 해 개수를 맞춰 보는 테스트를 같이 둔다 (`kittypath_app/flutter/test/puzzle_test.dart`) |
| 2026-10-03 | 경로 퍼즐 | 날짜 시드 생성기가 VM 에선 빠른데 크롬(JS) 테스트에선 50~100배 느림 | `flutter test --platform chrome` 로 웹 속도·같은 판(지문)을 따로 잰다. 풀이기를 증분 계산으로 바꿔 8×8 105→16ms |
| 2026-10-03 | 물때 | 작업 환경에서 NOAA API 가 막힘 (WebFetch 도) | Actions 워크플로로 받아 데이터 브랜치에 커밋 → 그 실제 응답으로 테스트·웹 점검 (`fetch-noaa.yml`) |
| 2026-10-03 | 물때 | NOAA 관측소 메타데이터(서머타임·시간대)가 수십~천여 곳 틀리거나 빔 | 공공 데이터도 "모든 항목을 화면에 띄우는" 테스트로 훑고, 틀린 건 규칙으로 보정 + 대표값 고정 테스트 |
| 2026-10-03 | 물때 | 테스트 헬퍼 일괄 치환이 헬퍼 자신을 바꿔 무한 재귀 → flutter_tester 5GB·무응답 | 일괄 치환 뒤 헬퍼 본문 확인. 멈추면 `pkill -9 -f flutter_tester`, 단계 print 로 위치 찾기 |
| 2026-10-03 | 속도계 | 차로 달린 최고 속도가 달리기 모드로 넘어가 "BEST 0:50/mi" — 테스트는 통과, **웹 스크린샷에서만** 보임 | 단위·의미가 다른 모드는 기록을 따로 저장. 스크린샷을 화면마다 직접 보고, 찾으면 고치기 전 코드에서 실패하는 테스트부터 |
| 2026-10-03 | 속도계 | 잘린 글자 검사를 테스트 기본 글꼴(Ahem)로 돌려 오탐 6건 | SDK Roboto 를 `FontLoader` 로 넣고 재면 진짜 잘림만 남는다. 버튼 글자는 '…' 대신 `FittedBox(scaleDown)` |
| 2026-10-03 | 속도계 | 위젯 테스트에서 가짜 GPS 이벤트 직후 화면이 한 박자 늦음 | 스트림 이벤트 뒤엔 `pump(Duration.zero)` (그냥 `pump()` 는 프레임이 없으면 안 그림). 시간은 `package:clock` |
| 2026-10-03 | 속도계 | 큰 글씨(135%) + iPhone SE 에서 아래 시트가 넘쳐 Done 이 화면 밖 | 시트는 제목 줄 오른쪽에 Done, 내용은 스크롤. 로봇의 `press()` 가 버튼이 화면 안·안 가려졌는지 hit test 로 확인 |
| 2026-10-03 | 대출 | 숫자 칸이 좁아 "18.75 %"·비싼 집의 "Principal & interest" 가 잘림 — 기본값·한 기기 테스트는 통과 | 로봇에 **잘림 자동 검사**(`RenderParagraph.didExceedMaxLines`, `RenderEditable` 글자 폭 > 칸 폭)를 넣고 큰 값·3개 기기로 돈다 (`mortgage_app/flutter/test/robot_test.dart`) |
| 2026-10-03 | 대출 | `Semantics(textField: true)` 로 TextField 를 감쌌더니 VoiceOver 에 입력 칸이 두 개씩 생김 (웹 접근성 트리 덤프로 발견) | `MergeSemantics` 로 합치고, 로봇에서 화면 읽기 입력 칸 수 == 실제 칸 수 검사 |
| 2026-10-03 | 대출 | 위젯 테스트 스크린샷이 3배 확대된 일부만 / 차트 글씨가 네모 | 루트 레이어를 `physicalSize` 로 찍고 SDK Roboto 를 `FontLoader` 로 넣기, `TextPainter` 에 테마 글꼴 전달 |
| 2026-10-03 | 대출 | Playwright `proxy` bypass 가 localhost 에 안 먹어 로컬 미리보기가 405 | `--proxy-server=https=<프록시>` 로 https 만 프록시. gstatic 은 `page.route` 로 로컬 canvaskit |
| 2026-10-03 | 소음 | 화면 켜짐(wakelock) 같은 플러그인 호출을 `await` 했더니 위젯 테스트에서 응답이 안 와 **그 뒤 자동 저장이 통째로 안 돎** (실기기에서도 응답 지연 시 같은 위험) | 부가 기능 플랫폼 호출은 기다리지 말고 `.catchError` 로 흘려보내고, 저장·상태 변경을 먼저 한다 |
| 2026-10-03 | 소음 | 긴 `ListView` 아래쪽 입력칸은 키보드가 뜨며 화면이 줄면 목록에서 빠져(dispose) 포커스가 날아감 | 입력칸은 화면 위쪽에 두거나 `SingleChildScrollView`. 로봇 테스트에서 `viewInsets` 로 키보드를 흉내 내 잡았다 |
| 2026-10-03 | 소음 | `SizedBox(height)` 안 `Row` 의 `Expanded(ColoredBox)` 막대가 높이 0 으로 안 보임 — 테스트는 통과, **스크린샷에서만** 보임 | `crossAxisAlignment: stretch`. 웹 빌드 스크린샷을 화면마다 직접 본다 → 찾으면 높이 검사 테스트 추가(고치기 전 실패 확인) |
| 2026-10-03 | 소음 | 마이크 앱을 헤드리스로 점검할 방법 | 크롬 `--use-fake-device-for-media-stream --use-fake-ui-for-media-stream` + `grantPermissions(['microphone'])` 이면 진짜 getUserMedia 경로를 탄다. 거부는 `--deny-permission-prompts`. `decibel_app/qa/web-check.js` |
| 2026-10-02 | 공통 | 새 세션형 루틴은 저장소 쓰기 권한이 안 붙어 푸시 403 | 루틴은 저장소가 붙은 세션을 깨우는 방식으로 |
| 2026-10 | 환율 | iOS 서명 두 번 실패 (자동 서명·무서명 아카이브) | 위 2장의 API 수동 서명 방식 |
