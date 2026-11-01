# YouTube Playables — 게시판 (기획 파트너가 염, 2026-10-30)

## 🔁 이어받기
- 마지막 저장: 2026-11-01 19:00 KST (개발 세션 ③-b 완료) · 작업 브랜치: `claude/playables-molemash` (main 반영됨)
- 방금 끝낸 것: **Mole Mash Playgama 샌드박스 게시 완료** — 게임 id `cmvxme9mt1hvbj80hj6q0lokb`, 아카이브 `molemash-1.0.0`(id `cmvxmi8l41hylj80hj24nwrhg`, 빌드 체크 PASSED, Bridge 2.4.0 FOUND), 커버 3종, 폼(제목·arcade·설명·조작법·story·EN·iOS/Android/Desktop·세로+가로·distributeEverywhere) 완료.
  - 🎮 **샌드박스: https://playgama.ai/play/cmnhxm72r5k4zv** (누구나 플레이, 모더레이션 없음)
  - 🔧 QA 툴(Bridge 환경·크기 프리셋): https://developer.playgama.com/qa-tool/cmvxmi8l41hylj80hj24nwrhg
  - 🌐 GitHub Pages 복사본(광고 없음, 저장은 됨): https://soulfulfillable.github.io/test-mvp/playables/molemash/
  - 빌드: `playables/molemash/`(index.html·playgama-bridge.js·config·audio·CREDITS.md), `./build.sh` → `dist/molemash.zip` + docs 복사. 로봇 `robot.js` 53/53(`qa/report.json`). 규칙 번호별 점검표는 아래 "11-01 업로드 전 점검".
  - ⚠️ **모더레이션(Submit for review)은 지금 열려 있지 않다**: `get_submission_state` = MODERATION_UNAVAILABLE("Publish it to the sandbox instead"). 새 게임은 **샌드박스가 콘솔의 샌드박스 카드에 적힌 목표(플레이 시간 등, 하루 1번 집계)에 도달해야** 모더레이션이 열린다. 즉 다음 단계는 플레이 모으기 = 링크 공유 또는 트래픽 캠페인(`start_sandbox_traffic`, 사용자 확인 전엔 안 함). 공유용 문구는 `get_sandbox_share`(X·Threads·Facebook·LinkedIn·Reddit 링크 제공; 문구에 "Made with AI… #PlaygamaMCP" 가 박혀 있음 — 사용자가 바꿔도 됨).
- 진행 중이던 것: 없음
- **다음 할 일 (순서)**:
  ① 사용자: 폰에서 샌드박스 한 판(소리·음소거·일시정지·이어하기 광고 느낌). 아쉬운 점 피드백 → 이 게시판 "사용자 피드백 기록"
  ② 사용자 결정: 트래픽 캠페인(`start_sandbox_traffic`, 공유 링크 또는 추천 보너스)을 돌릴지. 돌리면 세션이 `get_launch_steps` → traffic 단계 진행. 모더레이션 목표 도달은 콘솔 샌드박스 카드에서 확인
  ③ BGM 교체(선택): 지금 곡은 CC0 "Battle Theme A"(카니발 느낌 아님). 사용자가 카니발/칼리오페 루프 음원(mp3, 라이선스 명시)을 주면 `audio/bgm.ogg`·`bgm.mp3` 만 바꾸고 `./build.sh` → 재업로드(`start_archive_upload` name `molemash-1.0.1`) → `publish_sandbox`(updateNote 필요)
  ④ 다음 게임 **Chicken Cross** 를 같은 틀로: `playables/molemash/index.html` 의 ①Bridge 부트 ②store ③snd 컨트롤러 ④ads/frozen ⑤layout 세 모드 ⑥robot.js 를 복사해 시작. 음원은 같은 CC0 팩에서(`/tmp` 가 아니라 `npm pack @netforge/asset-library-files uisfx` 다시). 그다음 Daily Stairs → Ice Cream Tower. 캣도쿠·CvD 는 🐱🐶 그림 교체가 커서 뒤
  ⑤ Bridge 리더보드(`create_leaderboard` + `bridge.leaderboards`)는 플레이가 모이면 다음 버전에
- 사용자 대기: ① 느낌 피드백 ② 트래픽 캠페인 할지(A: 공유 링크로 자연 유입만 / B: start_sandbox_traffic) ③ (선택) 카니발 BGM 음원
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/playables.md "🔁 이어받기" 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·PLAYBOOK.md 규칙대로. Playgama MCP 도구가 있는지 먼저 확인.`

### 이전 이어받기 (10-31)
- 마지막 저장: 2026-10-31 (개발 세션) · 작업 브랜치: `claude/playables-catalog` (main 반영됨)
- 결정(사용자 "추천대로 가자", `PRODUCT.md` 결정 로그 10-30): **A = 구글 관심 신청서 + 파트너(Playgama 등) 경유를 동시에.** 재료는 `docs/` 의 기존 HTML 게임. 퍼블리셔 채널 = 기존 Peblit(10-31).
- 방금 끝낸 것: ① **카탈로그 `docs/games.html`** (9개 카드: 실제 플레이 스크린샷·이름·장르·영문 한 줄·Play 버튼·파일 크기, 라이트/다크, 시스템 글꼴·강조색 1개) ② **영문 소개 `playables/pitch.md`** (스튜디오 한 줄·게임별 한 줄·Playables 적합 이유·신청서 답안) ③ 스크린샷 자동 캡처 `playables/capture.js`(1170×2532, 콘솔 에러 0·외부 요청 0 전부 확인) + 카드용 `playables/thumbs.js` ④ 아이스크림 탑 UI 를 영어로(Ice Cream Tower) — 9개 중 유일하게 한국어였음
- 진행 중이던 것: 없음
- **다음 할 일 (순서)**:
  ③ **사용자가 제출**: 구글 Playables 관심 신청서(developers.google.com/youtube/gaming/playables/support/contact 에서 링크) + Playgama 개발자 콘솔(캣도쿠·두더지 2개 먼저). 답안은 `playables/pitch.md` "Suggested answers" 를 그대로 복사. 채널 칸 = Peblit 채널 URL(채널 관리 권한이 신청 계정에 있어야 함). 제출하면 날짜·어느 쪽에 냈는지 이 게시판에 적기
  ③-b **Mole Mash 를 Playgama 요건에 맞춰 고치고 MCP 로 업로드**(위 요건 표 전부 → `playables/molemash/` 폴더에 index.html+audio+config 로 빌드, GitHub Pages 판은 그대로 두고 어댑터로 양쪽 동작) → create_application → 폼 → zip 업로드 → 커버 3종 → QA 툴 → 샌드박스 링크를 사용자에게. 이전 메모: create_application → 폼 → zip 업로드 → 커버 3종(`docs/assets/games/full/*.png` 에서 생성) → QA 툴 → 샌드박스 링크를 사용자에게. 커버·폼 문구는 `playables/pitch.md`.
  ④ **Playables SDK 연동 1개 시범**(두더지 잡기가 가장 단순): 게임 준비 신호(`gameReady`/first frame), 일시정지·재개, 음소거, 저장(SDK 저장소 우선·localStorage 폴백), 외부 호출 0(이미 확인됨), 초기 용량 30MB 이하(전부 60KB 이하). **이 환경은 developers.google.com·playables.in 접속이 막혀 있어** SDK 문서는 사용자가 PDF/캡처로 주거나 네트워크 허용 뒤에. 문서 없이 미리 할 수 있는 것: `window.ytgame` 유무를 보고 분기하는 어댑터 뼈대 + 광고 슬롯 자리(게임 오버 패널 뜨기 전) 표시
  ⑤ 승인/파트너 답이 오면 나머지 게임에 같은 틀 적용. 광고는 SDK 가 주는 방식만(AdMob 아님). 파트너가 아이콘·배너를 요구하면 `docs/assets/games/full/*.png`(1170×2532)에서 잘라 만든다
- **11-01 (기획 파트너) Playgama 진행 상황**: 사용자가 Playgama 개발자 계정 가입 완료(스튜디오명 Soulfulfill, Solo developer). 콘솔이 "Playgama MCP" 연결을 권함 → 사용자 "직접 할 수 있으면 좋겠다" → **MCP 로 연결해 세션이 직접 올리는 방식 채택.**
  - **Playgama MCP 사실(공개 README 확인)**: 원격 HTTP MCP `https://developer.playgama.com/api/mcp`, 인증 OAuth 2.1(처음 연결 때 브라우저 로그인, 토큰 채팅에 붙이지 말 것). 도구: 게임 생성·폼 수정, zip 빌드 업로드(≤300MB), 커버 업로드(800×800 / 1080×1920 / 1920×1080, ≤10MB), 인앱·리더보드, QA 툴, 샌드박스 게시(시간당 15회), Bridge SDK 문서·요건 체크리스트 읽기(`get_game_checklist`). 모든 쓰기 도구는 destructive 표시.
  - **연결 방법(클라우드 세션용)**: claude.ai → Settings → Connectors → **Add custom connector** → URL 위 주소 → Connect → 브라우저에서 Playgama 로그인·허용. 그 뒤 새로 여는 세션(또는 이 Playables 세션)에 `mcp__playgama...` 도구가 뜬다. (Claude Code CLI 는 `claude mcp add --transport http playgama-developer-console https://developer.playgama.com/api/mcp` 후 `/mcp` 로그인.) 이 클라우드 환경은 playgama.com 네트워크가 막혀 있으니 커넥터 방식이 맞다.
  - **⚠️ 업로드 전 필수**: Playgama 는 모든 게임에 **Playgama Bridge SDK(≥2.2.0)** 연동을 요구한다(npm `@playgama/bridge`). 우리 게임은 파일 1개·외부 호출 0 원칙이라 Bridge 를 **인라인으로 번들**하고, 플랫폼 감지로 Playgama 밖에서는 no-op 어댑터로 떨어지게 한다. 두더지 잡기 → 캣도쿠 순으로 시범. 정확한 요건은 연결 뒤 `get_game_checklist`·Bridge 문서 도구로 읽는다(이 환경에서 npm 레지스트리 접근이 되면 패키지 소스 확인 가능).
- ✅ **11-01 Playgama 커넥터 연결됨**(사용자) — 기획 세션에서 MCP 도구(`mcp__URL__*`, list_applications 등) 호출 확인. 계정에 게임 0개. 새로 여는 세션에는 같은 도구가 뜬다(기존 세션은 안 뜨면 새 세션으로).
- **11-01 요건 대조 (기획 파트너가 `get_game_checklist`·Bridge `api`/`setup`/`config` 읽고 9개 게임을 스캔)** — 우리 게임 전부에 공통으로 걸리는 것, 번호는 Playgama 규칙 번호:
  | 규칙 | 지금 우리 게임 | 해야 할 것 |
  |---|---|---|
  | **3.3.2 코드로 합성한 소리 불가** + 3.3.1 배경음악 필수 + 3.3.3 음소거 버튼 | 9개 전부 Web Audio 합성음(oscillator/noise), 음악 없음, 음원 파일 0 | **ogg/mp3 실제 음원**(효과음 + 루프 BGM)을 아카이브에 동봉. 출처: CC0 팩 또는 Everygen 커넥터(generate_audio/find_music — 라이선스 확인). 파일 1개 원칙은 Playgama 아카이브(zip, index.html + 폴더)에선 완화 |
  | **3.2.1 저장은 Bridge storage 만**(localStorage 금지) | 9개 전부 localStorage | 저장 어댑터: Playgama 안에서는 `bridge.storage`, 밖(GitHub Pages)에서는 localStorage 폴백. 시작 때 `storage.get([...])` 한 번, 의미 있는 변화 때만 쓰기 |
  | **4.3.2 이모지를 아이콘으로 쓰지 말 것** | 9개 전부 HUD 에 이모지(🏆🏅👥❤💔 등). **캣도쿠·Cats vs Dogs 는 말 자체가 🐱🐶** | HUD 아이콘 → 인라인 SVG. 캣도쿠류는 고양이 그림(SVG/Canvas)으로 교체 필요 → 뒤 순위 |
  | 1.1 Bridge SDK 필수 단계 8개 | 없음 | `<head>` 첫 스크립트로 `https://bridge.playgama.com/v2/stable/playgama-bridge.js`(CDN 권장; 외부 호출 금지 1.2.5 의 예외) → `bridge.initialize()` 대기 → `platform.language` → storage → 일시정지/오디오 이벤트 → `platform.sendMessage('game_ready')`(첫 플레이 가능 프레임) → 자연스런 멈춤마다 `showInterstitial()`(타이머 금지) → 미지원 기능 숨김. `playgama-bridge-config.json` 을 index.html 옆에 |
  | 2.1.2 전면 광고 필수, 2.2 보상형 규칙 | 광고 없음 | 게임 오버/라운드 끝에 interstitial. 보상형(이어하기)은 시도당 1회, `rewarded` 상태에서만 보상 |
  | 1.5 데스크톱 키보드/마우스, 1.5.2 Esc 금지 | keydown 있음: 두더지·치킨·계단·아이스크림·불길·똥 / 없음: 캣도쿠·CvD·색칠(마우스 탭으로 충분) | Esc 바인딩 없는지 확인 |
  | 1.6.8 정사각(1:1) 창에서도 꽉 차게, 1.6.1 모든 비율 | 전부 세로 고정 설계 | 레이아웃을 비율 대응으로(최소 1:1 과 가로) 또는 폼에 세로 전용 선언(1.4.3 — 모바일만 해당, 데스크톱 1:1 은 여전히 요구) |
  | 3.1.3 튜토리얼/온보딩, 3.1.2 난이도 상승 | 첫 화면 한 줄 설명 수준 | 첫 판 손가락 안내 1~2단계 |
  | 3.5.1 게임 안 제목 = 폼 제목 | OK | 폼 작성 때 맞추기 |
  | 1.3.2 index.html 루트, 라틴 파일명 | 파일명 OK | zip 구조: index.html + audio/ + playgama-bridge-config.json |
  **첫 게임 = Mole Mash**(그림이 코드 드로잉, 키보드 있음, 45초 라운드, 광고 자리 명확). 그다음 Chicken Cross → Daily Stairs → Ice Cream Tower. 캣도쿠·CvD 는 🐱🐶 교체가 커서 뒤로.
  **지금 당장 올리면 반려** — 위 표를 다 맞춘 뒤 `get_game_checklist` 를 다시 읽고 번호별로 체크한 다음 `start_archive_upload`.
- 11-01 작업 세션 `Playgama: Mole Mash` 가 ③-b 진행 중(기획 파트너가 엶). 이 게시판 이어받기는 그 세션이 갱신한다.

### 🖱️ Codex 에게 (브라우저 작업) — 구글 Playables 관심 신청서
- URL: https://developers.google.com/youtube/gaming/playables/support/contact → 본문의 "Playables interest form" 링크
- 로그인 계정: Peblit 채널(https://www.youtube.com/@peblit) 관리 권한이 있는 개인 Google 계정
- 할 것: 폼 제출. 답안은 `playables/pitch.md` "Suggested answers" + "Studio (short paragraph)". 게임 URL 은 catdoku.html, 포트폴리오는 games.html. 회사명·실명·회사 메일 금지.
- 준비된 파일: `playables/pitch.md`, `docs/games.html`(배포됨)
- 확인할 결과: 제출 완료 화면/확인 메일. 끝나면 이 게시판 "사용자 대기"에 날짜 적기.

- 사용자 대기: 없음(신청서는 Codex, Playgama 업로드는 세션). 샌드박스 링크가 나오면 사용자가 폰에서 느낌 확인 → 그 뒤 Playgama 콘솔 "Submit for review" 를 Codex 가.
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/playables.md "🔁 이어받기" 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·PLAYBOOK.md 규칙대로.`

## 11-01 업로드 전 점검 — Playgama 규칙 번호별 (Mole Mash, 아카이브 molemash-1.0.0)

증거: `playables/molemash/robot.js` 53/53 통과(`qa/report.json`), 스크린샷 `qa/*.png`, 코드 grep. ✔ = 확인됨, ✖ = 미충족, ? = 확인 못 함(사람·실기기·QA 툴 필요).

| 규칙 | 결과 | 근거 |
|---|---|---|
| 1.1.1 현재 Bridge SDK | ✔ | npm `@playgama/bridge@2.4.0` 로컬 번들(`playgama-bridge.js`), 아카이브 분석 `bridgeVersion` 으로 재확인 |
| 1.1.2 필수 8단계 | ✔ | ①config 동봉 ②head 첫 스크립트·`initialize()` 대기 후 게임 시작 ③`platform.language` 읽음(영어만) ④storage.get 1회·게임오버/이름/음소거 때만 set ⑤`isAudioEnabled`·PAUSE/AUDIO 이벤트 ⑥첫 프레임 뒤 `game_ready` 1회(로봇 확인) ⑦Play again·일시정지 때 `showInterstitial`, 타이머 없음 ⑧`isRewardedSupported` 아니면 이어하기 버튼 숨김 |
| 1.2.1~1.2.3 로그인 없음 | ✔ | 로그인 없음 |
| 1.2.4 외부 분석 없음 | ✔ | Bridge analytics 만 |
| 1.2.5 외부 리소스 0 | ✔ | 로봇 "external requests: 0" |
| 1.2.6 외부 링크 | ✔ | 도전장·공유 링크 제거(Playgama 판) |
| 1.2.7 URL 제한 없음 | ✔ | — |
| 1.3.1 300MB | ✔ | zip 2.9MB |
| 1.3.2 index.html 루트·라틴 파일명 | ✔ | `unzip -l` |
| 1.3.3 메모리 2GB | ✔ | 캔버스 1개·파일 3MB (자동 빌드 체크가 재확인) |
| 1.4.1 전체 화면 | ? | 플랫폼 iframe 안에서 사람이 확인 |
| 1.4.2 키보드 자동 | ✔ | 이름 칸 네이티브 `<input>` |
| 1.4.3 방향 | ✔ | 세로·가로 둘 다 지원으로 폼 선언 |
| 1.4.4 터치 | ✔ | pointerdown 탭, 로봇 터치 컨텍스트로 플레이 |
| 1.4.5 길게 누름 | ✔ | user-select none·touch-callout none·contextmenu 막음, `touch-action:none`; 실기기 iOS 돋보기는 ? |
| 1.4.6 WebGL 경고 | ✔ | 2D 캔버스 |
| 1.5.1 키보드/마우스 | ✔ | 클릭 + 1~9·넘패드·Space·P·M (로봇: 숫자 키 명중) |
| 1.5.2 Esc | ✔ | 로봇: Esc 아무 일 없음 |
| 1.5.3 두 조작 동시 | ✔ | 같은 빌드에서 둘 다 |
| 1.6.1~1.6.2 모든 비율 꽉 채움·잘림 없음 | ✔ | 14개 크기(세로 3·가로 2·태블릿 2·1:1·iframe 2·데스크톱 2·9:21·21:9) HUD/판 겹침 0·판 화면 안 |
| 1.6.3 페이지 스크롤 없음 | ✔ | html/body 100%·overflow hidden |
| 1.6.4 겹침 | ✔ | 스크린샷 눈으로 확인(인트로 문구는 알약 배경으로 분리) |
| 1.6.5 팝업 닫기 | ✔ | 일시정지: Resume, 게임오버: Play again |
| 1.6.6 한 손 | ✔ | 탭만 |
| 1.6.7 글자 크기 | ✔ | 짧은 변 기준 스케일, 360×640 스크린샷 |
| 1.6.8 1:1 | ✔ | 640×640 스크린샷(compact HUD) |
| 1.7.1 오류·멈춤 | ✔ | 콘솔 에러 0·페이지 에러 0, 회전(resize)·숨김·광고 상태 전환 로봇 확인 |
| 1.7.2 끝까지 플레이 | ✔ | 시간 종료·하트 소진 두 경로 모두 게임오버 |
| 1.7.3 브라우저 5종 | ? | Chromium 만 돌림. Safari 용 mp3 분기는 코드로만 |
| 1.8 비디오 | ✔ | 없음 |
| 2.1.1 제3자 광고 없음 | ✔ | Bridge 만 |
| 2.1.2 전면 광고 | ✔ | `showInterstitial('round_end')`·`('pause')` |
| 2.1.3 논리적 멈춤에서만 | ✔ | Play again·일시정지 버튼 |
| 2.1.4 손가락 밑 광고 | ? | 광고 위치는 플랫폼이 정함 |
| 2.1.5 광고 방향 | ? | 플랫폼 |
| 2.1.6 광고 중 멈춤·무음 | ✔ | 로봇 "interstitial opened: frozen and silent" |
| 2.1.7 광고 실패 시 계속 | ✔ | 호출은 try 로 감싸고 결과를 기다리지 않음 |
| 2.2.1 옵트인 버튼 문구 | ✔ | "Watch an ad: continue / +10 seconds and all hearts back" |
| 2.2.2 거절 가능 | ✔ | Play again 이 항상 있음 |
| 2.2.3~2.2.4 시도당 1회 | ✔ | 로봇 "no second continue in the same attempt" |
| 2.2.5 rewarded 에서만 보상 | ✔ | 로봇 "ad closed early: no reward" |
| 2.3 배너 | ✔ | 없음 |
| 2.4~2.5 결제·실돈 | ✔ | 없음 |
| 3.1.1~3.1.2 진행·난이도 | ✔ | heat 로 점점 빨라짐·동시 3마리, 점수 기록 |
| 3.1.3 튜토리얼 | ✔ | 첫 판 TAP! 링+느린 두더지 3마리(로봇 스크린샷) |
| 3.2.1 Bridge storage 만 | ✔ | 코드에 localStorage/sessionStorage/indexedDB/cookie 0건(grep) |
| 3.2.2 최고 점수 저장 | ✔ | progress.best·ranks |
| 3.2.3 리로드·회전·광고 뒤 유지 | ✔ | 로봇 리로드 복원(best·name·muted) |
| 3.3.1 배경음악+효과음 | ✔ | bgm 루프 + 효과음 13종 |
| 3.3.2 파일 음원(합성 금지) | ✔ | Kenney·uisfx·cynicmusic CC0, ogg/mp3 (`CREDITS.md`) — 코드 합성 0 |
| 3.3.3 음소거 버튼 | ✔ | 오른쪽 위 + 일시정지 메뉴, 리로드 뒤 유지 |
| 3.3.4 플랫폼 음소거 | ✔ | 시작 때 `isAudioEnabled`, 이벤트 구독 |
| 3.3.5 숨김 때 무음 | ✔ | 로봇 "hidden page: silent and frozen" |
| 3.4.1~3.4.2 영어 기본·언어는 Bridge 에서 | ✔ | 영어만, `platform.language` 읽음 |
| 3.4.3 선언 언어 번역 | ✔ | EN 만 선언 |
| 3.4.4 언어 선택기 | ✔ | 없음 |
| 3.5.1 제목 일치 | ✔ | 게임 안 "MOLE MASH" = 폼 "Mole Mash" |
| 4.1 금지 콘텐츠 | ✔ | 두더지·스컹크 |
| 4.2 권리·독창성 | ✔ | 자체 그림·코드, CC0 음원, 카탈로그 중복은 ? (모더레이션 판단) |
| 4.3.1 전부 AI 생성 아님 | ? | 그림은 코드로 그린 캔버스(사람이 스크린샷 보고 다듬음). 모더레이션 판단 |
| 4.3.2 이모지·템플릿 티 | ✔ | HUD 하트·시계·아이콘 전부 캔버스/SVG, 이모지 0 |
| 4.4 사용자 데이터 | ✔ | 이름 8자 로컬 저장만 |
| 5.1 Unity | — | 해당 없음 |
| 플랫폼별(YouTube Playables) | ✔ | 30MB 이하(3MB), 세로+가로, 외부 호출 0, 파일명 라틴, 파일 33개 |

## 지금 상태
Mole Mash Playgama 샌드박스 게시(11-01) https://playgama.ai/play/cmnhxm72r5k4zv — 모더레이션은 샌드박스 목표 도달 뒤 열림. 카탈로그 https://soulfulfillable.github.io/test-mvp/games.html, 영문 소개 `playables/pitch.md`. 구글 Playables 신청서는 사용자 제출 대기.

## 다른 세션에 알리는 노하우
- 게임 스크린샷은 `playables/capture.js` 가 실제 플레이(시작 탭→조작)까지 해서 찍는다. 날짜 시드 게임(계단)은 게임과 같은 시드 함수를 복사해 정답 방향을 계산해야 죽은 화면이 안 찍힌다.
- Playwright `click()` 은 깜빡이는(animation) 버튼을 "not stable" 로 30초 기다리다 실패 → `{ force: true }`.
- `page.setContent()` 로 만든 페이지는 `file://` 이미지를 못 읽는다(빈 네모). 파일로 써서 `goto('file://…')`. 캔버스 `toDataURL` 로 파일 이미지를 내보내려면 `--allow-file-access-from-files`.
- `<img width height>` 속성과 CSS `aspect-ratio` 를 같이 쓰면 height 속성이 이겨서 카드가 세로로 터진다 → CSS 에 `height:auto`.
- Playwright 동봉 ffmpeg 는 `hstack` 같은 필터가 없다. 대조표는 브라우저 페이지로 만든다.

## 알아낸 것 (2026-10-30, 검색 요약 — 공식 문서는 이 환경에서 못 열었음)
- Playables = 유튜브 앱 안 HTML5 게임. 개발자 포털은 **초기 접근(승인제)**: 관심 신청서 → 승인 → SDK·테스트 스위트·인증 요건 제공 → 유튜브 인증 통과 후 게시. 승인 기간 공식 수치 없음(파트너 측 "몇 주~몇 달").
- 파트너 경유: Playgama(자체 Bridge SDK, 구글 개발자 계정 불필요, 24시간 안 피드백 주장, 비독점 주장), GameDistribution, Mediacube, FRVR 등. 수익 배분 비율 비공개 → 약관 확인.
- 기술: 개별 파일 30MiB·전체 250MiB(2024 기준), 초기 용량은 HTTP 압축 후 측정. 세로 화면. 외부 네트워크 호출·외부 분석 SDK 금지(제3자 가이드 주장). 지원 엔진 목록에 순수 JS 도 사실상 가능(Phaser/PixiJS 등 웹).
- 수익: 유튜브 수익 배분은 **시범 운영** 단계(선정 퍼블리셔) — 돈이 언제 들어오는지 불확실. 기대치는 "노출·플레이 수 확보" 우선.
- 사용자 캡처(Supersonic): 게임 정보 카드 = 이름·장르·따옴표 한 줄 설명·개발자·제작사·게시 날짜. 목록 = 세로 썸네일 + 플레이 버튼 + 플레이 횟수. 전부 하이퍼캐주얼(탭/드래그 1조작, 30초~1분).

## 사용자 피드백 기록
- 10-30 "유튜브 채널에 이렇게 게임으로 만들어놓네. 애플에 내려고 하는 거 계속 안 되는데 이쪽으로 해볼 수 있을까" → A 결정.
