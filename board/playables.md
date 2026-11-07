# YouTube Playables — 게시판 (기획 파트너가 염, 2026-10-30)

## 🔁 이어받기
- 마지막 저장: 2026-11-08 01:30 KST (개발 세션 ③-b: … → v1.7.1 → v1.8.0(catdoku 세션) → **v1.9.0 신기록/1위 축하 연출**) · 작업 브랜치: `claude/playables-molemash` (main 반영됨)
- 방금 끝낸 것: **Mole Mash v1.9.1**(축하 연출 + 즉시성, 피드백 기록 11-07) 아카이브 `molemash-1.9.1`(id `cmw6ml28p0mmimt0hd0rjpa6c`) 업로드(빌드 체크 확인은 다음 할 일 ①; 1.9.0 id `cmw6m71ma0nfqno0hnyscc5bw` 는 PASSED 였음) → **샌드박스 게시는 사용자 yes 뒤**(v1.8.0 id `cmw6lqmns0mxjno0h0b6r8co5` 는 1.9.0 에 포함되므로 1.9.0 으로 게시하면 됨). 샌드박스는 아직 v1.7.1(id `cmvylmkb82633j80hi0iu03j9`, PUBLISHED 11-02 01:51Z). 직전 v1.7.0(id `cmvylee98260ej80hus357g2y`) **PUBLISHED(01:42Z)**. 내용: 피드백 기록 11-02 v1.6.0 참고(가속 틱·Lilita One/Fredoka·광고 미제공 2회면 버튼 숨김). 직전 v1.6.0: 타이틀·일시정지의 **Music 버튼**(6곡 CC0, 기본 Chiptune, 고른 곡만 로드, 누르면 즉시 전환) — 피드백 기록 11-02 v1.5.0 참고. 로봇 77/77. 직전 v1.5.0 내용: 콤보 5부터 망치에 불꽃+점수 2배, 10부터 3배(`comboMult`, HUD 콤보 강조) · 결과 화면 World top 10 에 자기 줄 "You (이름)" 표시 + 로그인 지원 플랫폼이면 `#signin-btn`(이름은 Playgama 계정에서만 보임, 게임 안 이름은 기기 로컬) · 보상형 광고 중 페이지가 리로드돼도 `pendingRun`(10분)으로 결과 화면 복원("Welcome back. Your run is still here.") · 폭탄은 하트 1개만(다른 두더지 놀라 숨음, 패널티 없음) · 이어하기 뒤 SECOND WIND 카드+3·2·1·GO, 플랫폼 pause 무시 가드. 로봇 73/73(`qa/report.json`).
  - 🎮 샌드박스: https://playgama.ai/play/cmnhxm72r5k4zv (**v1.7.1 라이브**) · 🌐 Pages 복사본: https://soulfulfillable.github.io/test-mvp/playables/molemash/ · 🔧 QA 툴(v1.7.1): https://developer.playgama.com/qa-tool/cmvylmkb82633j80hi0iu03j9
  - 저장: `progress` v2 = {best, played, ranks, name, hammers[], equipped, boxFill, boxesReady, boxesOpened}(v1 저장은 기본값으로 이어짐). 보상형 배치 `continue`·`open_box`(config).
  - ⚠️ 모더레이션(Submit for review)은 샌드박스 목표 도달 뒤 열림(MODERATION_UNAVAILABLE). 트래픽 캠페인은 사용자 확인 전엔 안 함.

### ~~🖱️ Codex 에게 — 귀여운 배경음악 1곡 구하기~~ (11-02 해결: 개발 세션이 GitHub raw 로 CC0 6곡 확보, v1.6.0. 아래는 기록용) (개발 세션 11-01, 사용자 "노래가 더 귀여우면")
- 어디서: https://opengameart.org (검색 "cute loop", "happy chiptune loop", "carnival loop" + 라이선스 필터 **CC0**) 또는 https://kenney.nl/assets (Music 계열), https://freesound.org (CC0 필터)
- 조건: **CC0(또는 CC-BY 면 저작자 표기 문구 함께)**, 30~90초 루프, 밝고 귀여운 느낌(칼리오페·우쿨렐레·치프튠), mp3 또는 ogg/wav. 파일을 `playables/molemash/audio/bgm-src.<확장자>` 로 커밋하고, 출처 URL·제목·작가·라이선스를 `playables/molemash/CREDITS.md` 끝에 한 줄 추가.
- 확인할 결과: 파일 1개 + CREDITS 줄. 그 뒤는 개발 세션이 `audio/bgm.ogg`·`bgm.mp3` 로 변환·재업로드.

### 🖱️ Codex 에게 (브라우저 작업) — Threads 브랜드 계정 만들기 + 첫 글 (개발 세션 11-01, 사용자 "너가 만들 수 있니")
- 목적: Playgama 샌드박스 무료 부스트(3일·약 50플레이, 3회)에 쓸 **공개 게시물 URL** 1개. 세션은 브라우저·전화 인증이 없어 직접 못 만든다.
- URL: https://www.threads.com (Instagram 계정으로 로그인/가입). **개인 인스타 쓰지 말 것** — 실명 노출 금지. 새 Instagram 계정: 사용자 이름 `soulfulfill`(없으면 `soulfulfill.games`), 이름 "Soulfulfill", 이메일은 사용자가 지정하는 soulfulfill Gmail, 전화 인증은 사용자가.
- 프로필: 사진 `playables/brand/avatar-soulfulfill-640.png`(황금 두더지), 소개 "Small browser games, one thumb, one minute. Made by Soulfulfill.", 링크 https://soulfulfillable.github.io/test-mvp/games.html
- 첫 글(공개, 링크 포함 필수):
  `Mole Mash, a 45-second whack-a-mole I made. Tap moles, dodge the bomb, collect hammers. Play in the browser: https://playgama.ai/play/cmnhxm72r5k4zv`
- 확인할 결과: 글의 공개 URL(threads.com/@…/post/…)을 이 게시판 "사용자 대기" 줄에 적기 → 개발 세션이 `start_sandbox_traffic` 으로 부스트 시작(결정 "A + 무료 부스트"로 기록). 회사명·실명 어디에도 쓰지 않는다.

### 🖱️ Codex 에게 (브라우저 작업) — Playgama QA 툴 인증(certification) (개발 세션 11-01)
- URL: https://developer.playgama.com/qa-tool/cmvylmkb82633j80hi0iu03j9 (v1.7.1 아카이브; 로그인 = Playgama 개발자 계정, 스튜디오 Soulfulfill)
- 할 것: QA 툴에서 **Test Game** 으로 열어 한 판 플레이(세로·가로·1:1 프리셋 각 1번) → 인증(certification) 체크 진행. `get_launch_steps` 의 form 단계가 `NO_CERTIFICATION` 이라 사람이 QA 툴에서 인증해야 폼이 완성됨. **Submit for review(모더레이션)·트래픽 캠페인은 누르지 말 것.**
- 확인할 결과: 인증 항목 통과/실패 목록(실패하면 번호·문구 그대로 이 게시판에 적기), `get_launch_steps` form 단계가 BLOCKED 에서 풀림.
- 진행 중이던 것: 없음 (v1.5.0 게시 확인 끝)
- **다음 할 일 (순서)**:
  ① `get_archive_status`(archive `cmw6ml28p0mmimt0hd0rjpa6c`) PASSED 확인 → **사용자 yes 가 오면 `publish_sandbox`(archive `cmw6ml28p0mmimt0hd0rjpa6c`, updateNote 영어)** → `get_publications` PUBLISHED 확인 → 게시판. (이전) ✅ v1.7.1 게시 확인됨(PUBLISHED 01:51Z). ✅ ad_state 재조회 완료(14:53Z, 피드백 기록 참고): v1.7.1 에서 iOS·Windows 이어하기 정상. **기획 세션 11-02 우선순위: 정식 출시가 최우선** — 샌드박스 재게시는 플레이어가 느낄 변화가 있을 때만(UNCHANGED 재게시 금지, 시간당 15회), Submit·트래픽·결제 금지. Codex 가 QA 툴 결과를 적으면 실패 항목 수정이 이 세션 몫. ✅ 이어하기 실패 원인은 확정됨(샌드박스 광고 미제공, 피드백 기록 11-02 v1.6.0) — 사용자가 또 말하면 **코드가 아니라 샌드박스 광고 공급 문제**라고 설명. 정식 카탈로그 광고망에서 다시 봐야 함 — 사용자가 다시 '컨티뉴 안 됨'이라 하면 `get_game_telemetry_session_facts eventName=ad_state` 로 그 세션의 순서(seq)를 읽어 원인 확정 — 아직이면 `publish_sandbox`(updateNote 필수). **확인 못 한 것**: SaaS 리더보드가 실제 샌드박스에서 `in_game` 으로 잡히는지(mock 에선 not_available 이라 숨김) — 사용자가 플레이 뒤 결과 화면에 "World top 10" 이 뜨는지 알려 주면 됨. 안 뜨면 config `saas.leaderboards.platforms` 값 재확인
  ② 사용자가 v1.1.0 플레이 → 느낌·"다음 판 기대되나" 원문 기록. Playgama 텔레메트리는 트래픽이 모이면 `get_game_telemetry_analytics`(하루 1번 이하)로 옵트인율·다음 판 시작률 확인
  ③ Codex 인증(위 🖱️) 결과 반영
  ④ **무료 부스트 진행 중(run `cmvzetvks020dlf0h7c2m5w8e`, ~11-05 15:24Z)** — 하루 1회 `get_sandbox_traffic` 읽어 위 '부스트 일지'에 한 줄(status·goalProgress·spentRatio), FAILED 면 failureReason 적고 멈춤. `start_sandbox_traffic` 재호출 금지(남은 무료 2회는 다른 게임용), 캠페인 중 샌드박스 재게시 금지. (이전: 트래픽 = A 자연 유입(11-01) → 11-02 사용자 승인으로 부스트 1회로 바뀜.) (참고 `get_sandbox_traffic` 11-01: 무료 부스트 3회 남음 — 3일간 약 50플레이 예상, 공유 글 링크가 필요. 사용자가 마음 바꾸면 그때.) **샌드박스 목표 수치(플레이 시간·인원)는 도구로 못 읽음 — 콘솔 샌드박스 카드에서만 보임, 하루 1번 집계.** 공유 링크는 `get_sandbox_share`(X·Threads·Facebook·LinkedIn·Reddit) — 사용자가 올리고 싶을 때 문구 바꿔 사용
  ⑤ (선택) BGM 교체 — 카니발 루프 mp3 받으면 `audio/bgm.*` 교체 → `./build.sh` → 재업로드
  ⑥ 다음 트랙은 기획 결정에 따름(`plans/playables-core-fun.md` 7장: Chicken Cross 제외, 신규 코어 1순위 조준+물리 연쇄 — 착수 미승인). Mole Mash 틀 복사 시 `playables/molemash/index.html`·`robot.js`
- 사용자 대기: ⓪ (선택) 부스트 일지를 매일 자동으로 적으려면 이 세션을 하루 1번 깨우는 예약 작업이 필요 — 사용자가 OK 하면 만들고 `ops/routines/` 에 기록 ① v1.7.1: 새 폰트 느낌(Lilita One/Fredoka — 다른 후보 Bangers·Luckiest Guy·Baloo 2 도 받아 둠, scratchpad), 10초 틱 느낌, 음악 6곡 중 마음에 드는 것·이음새 어색한 곡 이름, 결과 화면에 World top 10 이 보이는지 ② Threads 글 URL(무료 부스트용, 위 🖱️) ③ Codex QA 툴 인증 결과(QA 툴 링크는 v1.6.0 으로 갱신)
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
- 11-01 (기획 파트너, get_launch_steps 확인): archive ✅ bridge ✅ covers ✅ · **form = BLOCKED(NO_CERTIFICATION)** → `get_archive_qa_tool_link` 의 QA 툴을 **브라우저에서 돌려 인증**해야 폼이 열림(로그인 브라우저 작업 → 세션이 링크를 게시판에 적으면 **Codex** 몫) · sandbox = TODO(`publish_sandbox`, 사용자 동의 범위 안 — 개발 세션이 진행) · traffic 은 사용자 확인 전 안 함.
- **권한 프롬프트 안내**: Playgama 쓰기 도구(update_application_form, start/confirm_archive_upload, start/confirm_cover_upload, publish_sandbox)는 전부 `destructive` 표시라 Auto 모드에서도 허용 창이 뜰 수 있다. 범위 = Playgama 계정의 Mole Mash 게임 1개. 매번 뜨는 게 불편하면 이 도구들만 세션 설정에서 허용(전체 bypass 아님). 읽기 도구(get_*, list_*)는 프롬프트 없음.

### 🖱️ Codex 에게 (브라우저 작업) — 구글 Playables 관심 신청서
- URL: https://developers.google.com/youtube/gaming/playables/support/contact → 본문의 "Playables interest form" 링크
- 로그인 계정: Peblit 채널(https://www.youtube.com/@peblit) 관리 권한이 있는 개인 Google 계정
- 할 것: 폼 제출. 답안은 `playables/pitch.md` "Suggested answers" + "Studio (short paragraph)". 게임 URL 은 catdoku.html, 포트폴리오는 games.html. 회사명·실명·회사 메일 금지.
- 준비된 파일: `playables/pitch.md`, `docs/games.html`(배포됨)
- 확인할 결과: 제출 완료 화면/확인 메일. 끝나면 이 게시판 "사용자 대기"에 날짜 적기.

- 사용자 대기: 없음(신청서는 Codex, Playgama 업로드는 세션). 샌드박스 링크가 나오면 사용자가 폰에서 느낌 확인 → 그 뒤 Playgama 콘솔 "Submit for review" 를 Codex 가.
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/playables.md "🔁 이어받기" 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·PLAYBOOK.md 규칙대로.`

## 🗣️ 사용자 피드백 (11-07) — 1등/신기록 연출
원문: "두더지에 일등 하면 점수 나올 때 그때도 대단한 거 막 어마어마한 거 막 하게 해 주라."
→ 결과 화면에서 **신기록(개인 최고) / 랭킹 1위**일 때 지금보다 훨씬 큰 축하 연출: 화면 전체 폭죽·컨페티, 점수 카운트업+펑, 트로피/왕관 등장, 두더지들이 튀어나와 환호, 전용 팡파르(CC0), 햅틱, "NEW BEST!"/"#1!" 큰 글자. 평소 결과 화면과 **확연히 다르게**. 카메라 과한 흔들림은 피하고(Playgama 1.6/1.7 규칙 안), 1:1·가로에서도 안 깨지게. 로봇에 신기록 경로 추가. **샌드박스 재게시는 사용자 yes 뒤**(지금 캠페인 끝났으니 재게시 가능, UNCHANGED 재게시 금지 규칙은 변경 있으면 해당 없음).

## 🚀 Mole Mash 정식 출시까지 — API 로 확인한 사실 (기획 파트너, 2026-11-02 10:xx UTC)

**샌드박스 게시 ≠ 카탈로그 출시.** 지금은 "링크 있는 사람만 하는 공개 테스트 페이지" 단계다.

| 항목 | API 응답(원문 요지) | 뜻 |
|---|---|---|
| 게임 상태 | `list_applications` → status **DRAFT** | 카탈로그에 올라간 적 없음 |
| 샌드박스 | `get_sandbox_state` → site ACTIVE, discovery VISIBLE, revision = 아카이브 `molemash-1.7.1`(cmvylmkb…), publishedAt 2026-11-02T01:51Z, `publish.allowed:true`, changeStatus UNCHANGED | v1.7.1 이 실제로 서비스 중. 같은 빌드 재게시는 의미 없음 |
| 모더레이션(정식 심사) 제출 | `get_submission_state` → **allowed:false, reason MODERATION_UNAVAILABLE, catalogAvailable:false**, message: "This game cannot be submitted to moderation. Publish it to the sandbox instead", failedAttempts 0, certificationPassedLevel null, extendedCertResetAvailable true | **Submit 버튼은 잠겨 있다.** 잠금 사유는 "아직 샌드박스 목표 미달"(도구 설명: 샌드박스가 콘솔 카드의 목표치에 닿으면 열림, 하루 1회 집계; 목표 중 플레이 시간은 게임 카테고리별). **목표 수치와 현재값은 API 에 없다 → 콘솔 샌드박스 카드에서만 보임.** 만들어 내지 않는다 |
| 런치 단계 | `get_launch_steps` → archive DONE · bridge DONE · covers DONE · **form BLOCKED(NO_CERTIFICATION, required:false)** · sandbox DONE · share AVAILABLE · **traffic TODO(required:true, source SHARE, askDeveloper:true)** — current = traffic | 남은 필수 단계는 트래픽 1개. 폼은 QA 툴 인증 뒤 열림 |
| 인증 | QA 툴 링크 `https://developer.playgama.com/qa-tool/cmvylmkb82633j80hi0iu03j9` (브라우저에서 사람이 실행) | 모더레이션 전 필요(제출 거부 순서에 "missing certification" 이 MODERATION_UNAVAILABLE 다음) |
| 트래픽 | `get_sandbox_traffic` → verdict allowed, offer **FREE** available, durationDays 3, expectedGameplays ≈50, remainingFreeRuns 3, referral 없음, hasCompletedRun false, runs [] | 무료 부스트 3회 남음(공개 글 URL 1개 필요). 유료는 콘솔. **시작은 미승인** |
| 게시 기록 | `get_publications` → PLAYGAMA_SANDBOX PUBLISHED(01:51Z) 1건, PLAYGAMA(카탈로그) 기록 없음 | 카탈로그 게시 이력 0 |

**정확히 무엇이 남았나 (순서)**
1. **샌드박스 목표 도달** — 플레이 수·체류 시간 등. 수치는 콘솔 카드에서 읽어야 한다(아래 Codex 작업). 자연 유입(사용자 결정 11-01 A)만으로는 느릴 수 있음 → 무료 부스트는 사용자 승인 사항.
2. **QA 툴 인증** — 브라우저에서 체크 실행(Codex). 인증되면 form 단계가 열리고 certificationPassedLevel 이 채워진다.
3. **모더레이션 제출** — `catalogAvailable` 이 true 로 바뀐 뒤 **사용자가 콘솔에서 Submit for review**. 도구로는 못 한다. 무료. 출시일은 모더레이션 결과에 달려 있어 **확정 불가**.
4. 승인 후 카탈로그 게시. 이후 업데이트는 `send_playgama_catalog_update`(사용자 yes 뒤에만).

**누가 무엇을**: 세션(Claude) = 상태 조회·빌드·게시판. Codex = 콘솔 카드 읽기·QA 툴 인증·(승인 시) 공개 글. 사용자 = 부스트 승인 여부, Submit for review 클릭.
**비용**: 지금까지 전부 무료. 유료 트래픽만 콘솔 결제(미승인).
**출시 조건이 아닌 것**: 상자 A 실험(v1.1), 신규 기능, 리더보드 확인 — 선택 후속 업데이트. **로봇 77/77 ≠ 플랫폼 심사 승인.**
**✅ 무료 부스트 1회 시작 (2026-11-02 15:24Z, 기획 세션이 실행 — 사용자 승인 "아 해 그러면"(Codex 채팅), 공개 글은 Codex 가 treasurefieldstudio Threads 계정에 게시)**
- 시작 전 `get_sandbox_traffic`: offer FREE, priceUsd null, remainingFreeRuns 3, current null, runs [] (진행 중 없음 확인)
- `start_sandbox_traffic(postUrls=[https://www.threads.com/@treasurefieldstudio/post/DfPnIRLoTqU])` → run **id `cmvzetvks020dlf0h7c2m5w8e`**, kind FREE, status **PENDING**, budgetUsd 6(플랫폼 내부 예산, 사용자 결제 아님), startsAt 2026-11-02T15:24:47Z, **endsAt 2026-11-05T15:24:47Z**(3일), goalProgress 0, creativeCount 0, failureReason null
- 시작 직후 재조회(15:25Z): verdict allowed:false reason **RUN_IN_PROGRESS**(정상 — 진행 중이라 새 캠페인 불가), offer available:false, **remainingFreeRuns 2**, current = 위 run(status PENDING, goalProgress 0, spentRatio null), hasCompletedRun false. 비용 0. 링크는 1개만 넣음(2개까지 가능 — 두 번째 공개 글이 생기면 같은 캠페인에 추가해 예산·기간 연장 가능, 새 캠페인 아님). **중복 캠페인 금지 — 이 게임엔 이 1회뿐.**
- 다음 확인: 개발 세션은 스스로 깨어나지 않으므로, **기획 세션(0. Head)이 캠페인 종료 시각에 1회 자체 확인 예약**(send_later, trig_01BvmifQzovWYKtkANfHE9yx, 2026-11-05 15:40Z — 조회·기록만, 새 캠페인·Submit 없음). 중간 확인은 사용자가 세션을 열 때.
- **부스트 일지(개발 세션, 하루 1줄)**:
  - 11-02 15:26Z: status PENDING, goalProgress 0, spentRatio null, creativeCount 0, failureReason null, remainingFreeRuns 2, verdict RUN_IN_PROGRESS (시작 2분 뒤 — 아직 광고 소재 생성 전)
  - 11-03 (조회 시각 UTC 기준): status **FINISHED**(예정 종료 11-05 15:24Z 보다 일찍 끝남), goalProgress 1, spentRatio 0.993, spentFinal false, creativeCount 20, failureReason null, hasCompletedRun true, current null, verdict allowed(새 캠페인 가능하지만 시작 안 함), remainingFreeRuns 2. 실제 유입 수·플레이 시간은 API 에 없음(콘솔 카드). 심사: 여전히 MODERATION_UNAVAILABLE(하루 1회 집계) 샌드박스 목표치 도달 여부는 콘솔 카드(Codex). 사용자에게 다시 "쓸지" 묻지 않는다.
  - 11-05 15:41Z (기획 세션 예약 확인): run cmvzetvks… **FINISHED**, goalProgress 1, spentRatio 0.994, creativeCount 20, failureReason null. 남은 무료 2회(시작 안 함). `get_submission_state`(archive molemash-1.7.1): 여전히 **MODERATION_UNAVAILABLE, catalogAvailable false**("This game cannot be submitted to moderation. Publish it to the sandbox instead") — 샌드박스 목표 미달 또는 하루 1회 집계 대기. 목표치·현재값은 콘솔 카드에서만(Codex). 새 캠페인·재게시·Submit 안 함.
  - **11-05 콘솔 카드 실측(Codex 브라우저, 정정)**: Mole Mash(cmvxme9mt1hvbj80hj6q0lokb) Sandbox — **qualifying plays 47/100**, **평균 플레이 2:36 / 목표 5:00(Arcade)**, 광고 노출 약 1.01 / 0.30 → 통과. 평균은 최근 200 qualifying plays 기준, 하루 1회 재계산. **캠페인 FINISHED ≠ 카탈로그 자격** — 아직 **목표 2개 미달**(플레이 수·평균 시간)이라 잠긴 것이지 "모더레이션 반영 대기"가 아님(앞선 기록 정정). QA 툴은 로딩 시도만, 통과 확인 없음. 이 요청 범위에선 캠페인 재시작·Mole Mash 수정 안 함.

### 🖱️ Codex 에게 (브라우저 작업) — Mole Mash 출시 전 2건
- URL: https://developer.playgama.com → 게임 **Mole Mash**(id cmvxme9mt1hvbj80hj6q0lokb)
- 로그인 계정: Playgama 개발자 계정(Soulfulfill)
- 할 것 ①: 게임 페이지의 **샌드박스 카드**에 적힌 **목표치(플레이 수·플레이 시간 등)와 현재값**을 그대로 옮겨 적기(화면 문구 원문). 어디에도 없으면 "없음"이라고.
- 할 것 ②: **QA 툴** https://developer.playgama.com/qa-tool/cmvylmkb82633j80hi0iu03j9 를 열어 체크를 실행하고 결과(통과/실패 항목 원문)를 적기. 실패 항목이 있으면 고치는 건 Claude 세션.
- 하지 않을 것: Submit for review, 트래픽 캠페인 시작, 결제, 계약 동의.
- 확인할 결과: 이 게시판 "출시 조건" 표 아래에 "콘솔 카드(날짜): 목표 …, 현재 …" + "QA 툴(날짜): …" 두 줄.

## 📚 참고 연구: Hamster Escape(YouTube Playables)의 보상 루프 — 배우되 베끼지 않음 (기획 파트너, 2026-11-01)

**사용자 목표**: "광고 보기까지의 동기부여와 꾸미기/수집 구조를 배우고 싶다". 복제가 아니라 **놀이→진척→기대→선택→공개→장착→다음 판** 연결의 타이밍을 배우는 것.

**증거 수준** (Codex 분석, 2026-11-01)
- 📷 스크린샷 5장으로 확인: ①방·문·경비 시야콘을 피하는 짧은 스킬 게임(Level 3) ②"WHAT'S IN THE BOX?" 화면 — 큰 OPEN(영상 아이콘) + 작은 LOSE IT ③보상 화면 — 모자·단안경 코스튬 햄스터, EQUIP / MAYBE LATER ④CLOSET — SKINS·TRAILS 탭, 장착 체크, 잠긴 카드들, 하단 "SURPRISE GIFT! OPEN"(영상 아이콘 — 두 번째 광고 입구) ⑤Playables 목록의 제목.
- 🗣️ 사용자 설명(독립 검증 안 됨): 판을 돌면 상자 진행률이 차고, 다 차면 OPEN→광고→꾸미기 보상, 장착한 꾸미기가 다음 판에 보임. 트레일도 보상일 수 있음(불확실).
- 🎮 **Codex 직접 플레이로 확인(11-01, 갱신)**: Unity 로딩이 오래 걸렸지만 열림. 첫 화면에 방향키/WASD 튜토리얼과 CLOSET 버튼. 방향키로 **Level 1 클리어** → "GOOD JOB!" 화면에서 **MYSTERY BOX 진행 바가 애니메이션으로 차올라 75% 에서 멈추고 CONTINUE** 가 나옴. 시작값을 재지 않았으므로 "한 판당 75%" 나 고정 임계값으로 **일반화하지 말 것**. CONTINUE 이후 캔버스 입력이 먹지 않아 **광고 시청·상자 개봉·LOSE IT 실제 손실·트레일 보상은 여전히 사용자 스크린샷·설명 근거.**
- ❓ 모름: 상자 임계값·시작값, 실패 시 보상, 중복 처리, LOSE IT 의 실제 효과, 광고 실패 시 동작, 저장 내구성. 리텐션·수익 효과는 가설일 뿐 — 숫자 단정 금지.

**사용자가 짚은 핵심**: **플레이 성과를 광고 제안보다 먼저 "눈에 보이는 진척"으로 바꿔 보여 주는 구조.** 첫 판 끝에 이미 상당히 찬 바(75%)가 보이면 "조금만 더" 하는 짧은 목표가 생긴다는 설계 가설 — 효과 크기는 주장하지 않음.
**배울 점(설계 가설)**: 보상이 **얻기 전·중·후에 계속 보인다**(진행률 → 상자 → 공개 → 장착 → 플레이 중 노출 → 옷장의 다음 목표). 광고 제안은 **플레이어가 먼저 진척을 쌓은 뒤**에 와서 맥락이 있다. 꾸미기는 승패에 영향 없이 정체성 가치를 준다. **사용자가 좋게 본 것**: 광고를 보기까지의 **기대감**, 수집 **진척**, **놓치기 아쉬운 보상 제안**. (LOSE IT 가 실제로 무엇을 잃게 하는지는 확인 안 됨 → 원작을 기만적이라고 단정하지 않는다.) **우리 원칙**: 어느 안이든 광고 없이 기본 플레이는 계속되고, 이미 가진 아이템·기본 플레이를 빼앗지 않고, 광고 실패·취소·no-fill 때 진척·상자를 보존한다. **자발적 꾸미기 보상 광고 ≠ 강제 광고.**

**지금 Mole Mash Playgama 판에 실제 있는 것 (11-01 코드 확인)**: 보상형 광고는 **이어하기 1종**(`continue` 배치, +10초·하트 회복, 시도당 1회, `rewarded` 상태에서만 지급, 미지원 플랫폼에선 버튼 숨김). 전면 광고 `round_end`·`pause`. 저장은 `progress{best, played, ranks, name}` + `settings{muted}`. **꾸미기·수집·진행률 트랙은 없음.** 플레이 중 보이는 커스터마이즈 가능 요소 = 망치(탭할 때 그려짐), 두더지, 잔디/구멍 보드.

### 제안: 가장 작은 실험 1개 — "망치 수집" (사용자 OK 전엔 구현하지 않음)
- **범위**: 기존 라운드·점수·이어하기 광고는 그대로. 꾸미기 **1종류(망치)만**, 원작 디자인 5개(코드 드로잉, 예: 나무·고무·황금·사탕·프라이팬 — 햄스터·모자 같은 원작 요소 금지). 상점·화폐 없음.
- **공통 루프**: 라운드 중 잡은 두더지 수가 **'선물 상자' 진행 바**를 채움(라운드 끝 패널에서 애니메이션으로 차오름, 원작처럼 첫 판 끝에 이미 상당히 차 보이게 하는 변형도 후보) → 다 차면 `bonus_ready` → 공개 연출 → 새 망치 → **EQUIP / LATER** → 다음 판에 장착 망치가 보임 → 패널 하단 5칸 망치 줄(보유/잠김)로 다음 목표. 임계값은 로봇/실제 라운드 길이에서 **첫 상자가 2~3판 안에** 열리게 잡고 기록(원작 수치 추정 금지).
- **상자를 여는 방식 — 작은 비교안 2개** (어느 쪽도 다음 판은 광고 없이 바로 가능):
  - **(A) 광고로 선택 개봉 + Later 보관**: 누적 진척으로 준비된 꾸미기 상자를 **"Watch an ad: open the box"** 로 연다(옵트인, 2.2.1). **LATER** 를 누르면 상자는 보관돼 다음 라운드 끝에 다시 제안(잃는 것 없음, 상자 수는 쌓임). 기대감·"놓치기 아쉬움"을 원작에 가깝게 살리되 손실 문구 없이. 광고 실패·no-fill 이면 상자 유지 + 한 줄 안내. 보상은 `rewarded` 상태에서만. 꾸미기는 승패와 무관한 추가 보너스라 2.2.3 안.
  - **(B) 무료 기본 상자 + 광고 추가 상자**: 다 찬 상자는 **무료로 열리고**, 그 라운드 끝에만 "Watch an ad: one more box now" 1회. 광고 의존이 가장 낮고 규칙 위험도 가장 낮지만, 광고를 보기까지의 기대감은 A 보다 약할 수 있음(가설).
  - 두 안 모두: 같은 라운드 끝에 이어하기 광고와 상자 광고를 동시에 띄우지 않음(이어하기가 떴으면 상자 제안은 다음 라운드 끝에). 어느 안으로 갈지는 **사용자 선택** — 기획 파트너 추천은 **A**(사용자가 좋게 본 기대감·보상 제안 구조를 살리면서 Later 보관으로 박탈 없음). 둘을 실측으로 비교하려면 A 로 먼저 내고 옵트인·다음 판 시작률을 본 뒤 B 변형을 시험.
- **상태**: collecting → bonus_ready → (무료 open) reveal → owned/equipped. 광고 경로: ad_pending → reward_earned(`rewarded` 상태에서만) → reveal. 취소/실패/no-fill 이면 미개봉 상자·진행률 **그대로 유지**, 안내 한 줄.
- **중복·완주 정책(출시 전 확정)**: 5개 다 모으면 진행 바를 "All hammers collected" 로 바꾸고 상자 광고 버튼 숨김(중복 지급 없음).
- **저장**: `progress.hammers[]`, `progress.equipped`, `progress.boxFill`, `progress.boxesReady` 를 Bridge storage 에(라운드 끝·장착 때만 set). 비밀값 없음.
- **측정(Bridge analytics, 개인정보 없음)**: round_end, progress_shown, bonus_ready, box_opened_free, reward_offer_shown, ad_opt_in, ad_rewarded, ad_failed, reward_granted, equipped, next_round_started. 볼 것 = 옵트인율·보상 도달·다음 판 시작률·이탈, 광고 노출 수 단독은 보지 않음.
- **QA 체크리스트**: ①보상은 SDK `rewarded` 에서만, 더블클릭·중복 콜백·재시도·리로드에도 1회 ②no-fill/취소 때 상자 유지 ③광고 중 게임·소리 멈춤, 복귀 정상 ④리로드 후 보유·장착·진행률 유지(Bridge storage) ⑤5개 완주 상태 ⑥1:1·가로·세로에서 새 패널 안 깨짐 ⑦규칙 2.2.1~2.2.5·3.2.x·4.3.2(이모지 금지) 재점검 ⑧로봇 테스트에 위 경로 추가, 스크린샷 ⑨Playgama 테스트 광고 성공 ≠ 실서비스 준비 — 구분해 기록. YouTube Playables 로 갈 땐 광고·저장 API 가 다르므로 어댑터만 바꾸고 상태 기계는 유지.
- **적용 시점**: Mole Mash v1 샌드박스가 올라간 **뒤**, 같은 게임의 v1.1 로. 다른 8개 게임엔 결과 보고 나서.
- ✅ **사용자 결정(11-01)**: **실험 진행, 방식 A**(광고로 선택 개봉 + Later 보관). 순서: **v1 샌드박스 검증 먼저 → 그다음 v1.1 로 구현·테스트.** 다시 묻지 않는다. 개발 세션은 v1 샌드박스가 끝나면 이어받기 "다음 할 일"에 v1.1(A) 을 넣고 진행.
- 📌 **핵심 재미는 별개 문제**(사용자 "너무 단순·일차원"): 9개 비교·대표 후보(Chicken Cross)·막대기 게임 식별은 `plans/playables-core-fun.md`. **11-01 추가(Codex 조사 반영)**: "파일 1개·100KB·탭 전용"은 YouTube 요건이 아니라 우리 습관 → 절대 조건에서 해제(5장). 신규 코어 플레이 3안 비교(6장) → **11-01 피드백 반영(7장)**: Chicken Cross 후보 제외, 아트 기준 신설(일관 에셋·그림자·UI·4상태 애니·효과음), 2안으로 압축 → **1순위 조준+물리 연쇄(비폭력), 2순위 공간 잠입**. 신규 제작 착수는 미승인 — 승인 뒤 첫 단계는 "아트 기준 한 화면" 1장. Mole Mash 샌드박스/A 실험과는 별도 트랙.
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
- **11-07 사용자(기획 세션 경유, 원문)**: "두더지에 일등 하면 점수 나올 때 그때도 대단한 거 막 어마어마한 거 막 하게 해 주라." → **v1.9.0 축하 연출**(main 의 v1.8.0 watchdog 커밋 위에 작업): 신기록(이전 기록이 있을 때만) 또는 월드 보드 1위면 결과 패널 전에 2.6초 연출 — 9칸 두더지 전부 파티 모자 쓰고 팔 흔들며 튀어나옴(`drawCheerMole`), 트로피/왕관 카드에 "NEW BEST!"/"WORLD #1!" + 이전 기록→점수 카운트업(틱 음 높아짐) 뒤 펑(링·파편·황금 폭죽·햅틱), 폭죽 9발·컨페티(패널 위에도 떨어지게 `#fx` 오버레이 캔버스, z-index 30), 팡파르 `audio/fanfare.*`(Kenney Sax jingle + uisfx achievement/level-up 믹스, CC0) → 패널은 `.party`(금색 테두리 글로우, 제목 34px 트로피/왕관 SVG, 점수 50px). 화면 흔들림 없음. 월드 1위는 리더보드 응답이 늦게 오면 패널 위에서 가벼운 버전(폭죽+제목+팡파르). 1:1·가로 검사 포함 로봇 90/90(`qa/*-newbest*.png`). 아카이브 `molemash-1.9.0`(id `cmw6m71ma0nfqno0hnyscc5bw`) 업로드 — **publish_sandbox 는 사용자 yes 뒤**(Head 에 알림). 참고: 첫 판(이전 기록 0)은 파티 없음, 평소 결과 화면 유지
- **11-07 추가(기획 세션 경유, 원문)**: "그런 거 나오게. 일등이다 바로 알고 기뻐하게." → **v1.9.1 즉시성**: 라운드 끝나는 프레임에 카드·폭죽·컨페티·팡파르가 동시에 시작(로봇 검사: 0.13초 시점에 두더지 9마리·오버레이 켜짐), 탭 없이 자동. 큰 라운드엔 '라운드 종료' 소리 대신 팡파르. **월드 1위를 즉시 알리기 위해 직전 월드 보드 응답을 캐시**(`worldTop`) — 점수 확정 순간 캐시의 1위 점수를 넘으면 바로 "WORLD #1!"(서버 응답은 확인만). 같은 세션에서 보드를 한 번도 안 읽었으면(첫 라운드) NEW BEST 로 시작하고 서버 응답이 오면 카드가 WORLD #1 로 바뀜. 로봇 91/91. 아카이브 `molemash-1.9.1`(id `cmw6ml28p0mmimt0hd0rjpa6c`) 업로드 — **게시는 사용자 yes 뒤**(1.9.0 대신 이걸로)
- **11-02 14:53Z 이어하기 텔레메트리 확정(`get_game_telemetry_session_facts eventName=ad_state`, 6세션)**: ①01:07·01:09Z iOS v1.5.0 두 사용자 — `loading→failed` 가 즉시 반복(5회·14회 탭), 광고 자체가 열리지 않음 = **샌드박스 광고 미제공** ②**01:53Z iOS v1.7.1: `loading→opened→rewarded→closed` → `reward_applied`(time_left 30) → `continue_used` 정상** ③03:34Z·03:45Z Windows v1.7.1 정상(2건) ④10:23Z Android v1.7.1: `loading→opened` 뒤 5초 세션 종료(광고가 열린 뒤 사용자가 떠났거나 페이지 이탈 — pendingRun 복원 대상). **결론: 코드는 광고가 오면 되고(iOS 포함), 안 될 때는 광고가 안 온 것.** 사용자에게 "지금은 된다, 안 되면 '광고 없음' 문구가 뜬다"고 설명
- **11-02 v1.7.0 직후 같은 요청 반복(원문)**: "시간 10초 남을때 그 점점 조급하게 딸캇거리는거 하게해줘 / 왓치 앤 컨티뉴 아직도안돼 ㅠ 이거 급순위" → v1.7.1: 틱 음원을 Kenney 의 78ms 짧은 UI 클릭에서 **uisfx mechanical/press(CC0, 33ms 어택 2ms 3.5kHz)** 로 교체하고 음량을 올림, 틱·톡 교대(음높이 1.0/0.9)에 10초→0초로 갈수록 +0.07씩 올라감. 이어하기: 코드 쪽 게이트(`continueUsed/continueOffered/rewardPending`) 재점검 — 막히는 조건 없음. 00:50Z 이후 세션(v1.4.1+, `ad_state` 이벤트 포함)은 아직 집계 전(01:44Z 기준 `ad_state` 세션 0건)이라 사용자의 최신 시도는 못 봄. **결론은 그대로: 샌드박스 광고 미제공.** 사용자에게 "새 브라우저/시크릿 창 또는 아직 광고를 안 본 친구 기기에서 한 번" 부탁 — 샌드박스에 사용자별 보상형 한도가 있을 가능성(한 세션에서 2번 성공 뒤 실패한 기록)
- **11-02 v1.6.0 플레이(원문)**: "시간 10초 남을때 그 점점 조급하게 딸캇거리는거 하게해줘 / 왓치 앤 컨티뉴 아직도안돼 ㅠ 이거 급순위 / 폰트는 이게근데 최선인가???" → 반영(v1.7.0): ①10초부터 매초 틱, 5초부터는 간격이 1초→0.36초로 좁아지고 음높이·음량이 올라감(`tickAcc`), HUD 시간 바는 10초부터 경고색 ②**이어하기 원인 확정(텔레메트리 11-02)**: 00:10~00:26Z 보상형 광고 7건은 opened→rewarded→closed 로 정상 지급(continue_used 5건). **00:25Z 이후 3명·46건은 전부 플랫폼이 `failed`**(Bridge 내부: Playgama advService 가 "empty"/"error" 응답 = 광고 미제공). 게임 코드 문제가 아니라 **샌드박스 광고 공급**이고, 규칙 2.2.5(실패 시 보상 금지)라 게임이 대신 줄 수 없음. 사용자가 20번 넘게 탭하던 걸 막기 위해: 요청 직후 "Loading the ad…", 1회 실패 "Tap once more to retry", 2회 연속 실패면 버튼 숨기고 "The ad provider has no ad to show right now, so this run can't be continued (rule: no ad, no reward)". Bridge 에 `preloadRewarded` 가 있지만 Playgama 플랫폼 구현은 no-op 이라 효과 없음 ③폰트: 시스템 글꼴 대신 **Lilita One**(간판·점수·외침·패널 제목·카운트다운)과 **Fredoka**(버튼·본문) 번들(OFL, `fonts/`, 187KB, google/fonts GitHub raw 에서 입수), 첫 프레임 전에 `document.fonts.load`(최대 2.5초 대기). 로봇 77/77
- **11-02 v1.5.0 플레이(원문)**: "음악바꿀때 배경음악은 안바껴 배경음악이 달라지면 좋겧는데 막 경쾌하고 신나는거 생기고. 소리 하나는 칠때 효과음 바꾸기 하나는 배경음 바꾸기 이렇게 넣자" → 반영(v1.6.0): 타이틀 하단 알약 2개(Hit sound / Music)·일시정지 메뉴에도 2개. **배경음악 6곡**(Chiptune·Chiptune rush·Ragtime·Funky·Ukulele·Battle march), 기본은 Chiptune. 음원은 전부 CC0 — Juhani Junkala "Retro Game Music Pack" Level 1·3(OpenGameArt CC0, 끊김 없는 루프), FreePD(CC0) "The Entertainer"·"Pickled Pink"(Kevin MacLeod)·"Happy Whistling Ukulele"(Rafael Krux). **입수 경로**: 이 환경은 raw.githubusercontent.com 이 열려 있어서 공개 GitHub 저장소(SoundSafari/CC0-1.0-Music = FreePD 미러, coderKillo/FactorySurvivorsGame)에서 받음 → 이제 Codex 에게 BGM 부탁할 필요 없음. FreePD 곡은 루프가 아니라 파형 자기유사도로 반복 지점을 찾아 42~48초 루프로 자름(1.5~2.5초 크로스페이드). 음량 −19 LUFS 통일. 고른 곡만 내려받음(나머지는 버튼 누를 때 로드·디코드 끝나면 즉시 전환). **확인 못 한 것**: 루프 이음새가 귀에 거슬리는지(이 환경에선 못 들음) — 사용자가 어색하면 곡 이름을 알려 달라고
- **11-02 v1.4.1 플레이(원문)**: "콤보 근데 생기면 뭐가 되나 좀 때렸을때 막 불도나고 점점 막 5 이상부터는 막 더쌔게 때려지는거같고 그렇게 해볼까 콤보효과로 / 아니근데 사람들이 지인들이 이거하면 이름 올라간건가? 내이름 지정은 못하나 각자들이? 할수잇나? / 그리고 내친구가 햇는데 월드 탑10 에 이름 안올라간대 야 그리고 광고보고 이어하기가 앙돼 계속 / 아니 올라가긴하는데 친구가 지정한 이름으로 안올라간대" → v1.5.0: ①콤보 5부터 망치에 불꽃·파편이 불꽃색·링 커짐·**점수 2배**, 10부터 **3배**("2x POINTS" 표시, +2/+3 떠오름, 외침에 2x/3x) ②월드 보드 이름: Playgama 계정 이름만 올라감(게스트는 "Player N") — 게임 안 이름 칸은 기기 랭킹 전용이라 라벨을 "Your name (this device)"로 바꾸고, 월드 보드엔 내 줄을 "You (이름)"로, 플랫폼이 허용하면 "Sign in to show your name" 버튼(1.2.2: 강제 아님) ③이어하기: iOS 세션 팩트에서 **광고 요청 순간 세션이 끝난 기록**(page unload) 발견 → 광고 직전에 라운드를 Bridge storage 에 저장하고, 다시 열리면 결과 화면을 "Welcome back. Your run is still here." 로 복원(이어하기 버튼 유지, 10분 이내). 로봇 73/73. 사용자 세션의 `ad_state` 순서는 집계(약 30분~1시간 주기) 뒤 `get_game_telemetry_session_facts eventName=ad_state` 로 읽을 것
- **11-02 v1.4.0 플레이(원문)**: "야 컨티뉴가 안되는거같은데?????? 빨리 봐줘 ㅠ / 아니 시간도 있고 목숨도있는데 폭탄하나 누르면 바로끝나버리는 버그가 있어" → ①폭탄: 재현됨 — 폭탄 자체는 하트 1개지만 그 순간 올라와 있던 두더지들이 폭발 멈칫 사이에 가라앉아 MISSED 가 연달아 터져 하트 2~3개가 한 번에 날아감. v1.4.1: 폭탄이 터지면 다른 두더지는 전부 놀라 숨고(페널티 없음) 0.9초 쉬어 감 → 폭탄 1개 = 하트 1개 보장(로봇 검사) ②컨티뉴: 텔레메트리(`get_game_telemetry_analytics` 11-02)에 `advertisement_rewarded_failed`·`ad_failed` 가 00:25Z 에 1건 — 샌드박스에서 보상형 광고가 **로드 실패(no fill)** 한 세션. 규칙 2.2.5 상 광고 실패엔 보상 불가 → v1.4.1 은 실패 문구를 크고 길게("No ad could be loaded right now. Tap again to retry.") + 재시도 가능. 또 모든 광고 상태를 `ad_state`(seq 포함)·`reward_applied` 이벤트로 보내 다음부턴 세션 팩트로 순서를 읽을 수 있게 함. 샌드박스는 광고 fill 이 불안정(interstitial_failed 7건)하다는 점을 사용자에게 설명
- **11-02 v1.3.3 플레이(원문)**: "두더지 연속해서 패면 그 콤보 나오는거 점점 강조되게 막 되는거 있어야돼 / 광고보면 삼이일 하면서 다시 안나오잖아 아직도. Resume 해야플레이돼 아직도 / 소리 아 좀 귀여운 띠리릭 그런거로 밤구던가 아니면 버튼 있어서 눌러서 바꿔할수잇게 버전 5개로 만들어놔줘" → 반영(v1.4.0): ①콤보 표시: 판 위에 "xN COMBO" 가 칠 때마다 튀고 커지고 색이 바뀜(주황→빨강→금), 아래 작은 바가 0.9초 창을 보여줌, 5·10·15·20 콤보에 "ON FIRE! / UNSTOPPABLE! / LEGENDARY! / MOLE MASHER!" 외침, 결과에 best combo ②광고 뒤 일시정지 패널: 광고 직후 6초·카운트인 중에는 플랫폼 일시정지/탭 숨김 신호가 와도 패널을 띄우지 않고 얼리기만(Resume 불필요). 로봇 검사 추가 ③타격음 5종 버튼(타이틀 하단 알약 + 일시정지 메뉴): Classic thump / Cute blip / Rubber pop / Arcade / Glass chime — uisfx CC0 팩에서, 콤보 3부터 두 번째 소리 겹침, 설정은 Bridge storage 에 저장
- **11-02 v1.3.2 플레이(원문)**: "시간이 다 차있는데 타임 나오는이유가 뭐야. 플러스되게하던가 타임 먹는거는 나중에 나오던가 / 뭔가 점수가 줄어들었어? / ㅇ니 광고보고 이어하기했는데 갑자기 처음부터돼 이럼 절대안더ㅐ" → 반영(v1.3.3): ①시계 두더지는 남은 시간 25초 이하일 때만 등장 ②이어하기 흐름을 플랫폼이 보내는 광고 상태 순서(rewarded→closed 또는 closed→rewarded)에 상관없이 같은 판을 이어가도록 다시 씀 — 'closed' 만 오면 1.5초 기다렸다가 'rewarded' 가 따라오면 이어하기, 'rewarded' 뒤 'closed' 가 안 와도 2.5초 뒤 이어하기, 보상 결정 중엔 Play again 잠금(실수로 새 판 시작 금지). 로봇에 closed→rewarded 순서 검사 추가(점수 유지 확인) ③"점수가 줄었다"는 상자 게이지(상자가 열리면 남은 수로 돌아감)로 추정 — 라벨은 그대로, 사용자에게 설명. **확인 못 함**: 실제 Playgama 가 보내는 상태 순서(헤드리스 mock 은 보상형 미지원) — 사용자 재현 결과로 판단
- **11-02 v1.3.1 플레이(원문)**: "뉴릉때 화면 흔들리는거 빼고 소리만 쾌감있게. 끝나고 막 화면 너무 파바박 뜨는거 불편" → 반영(v1.3.2): ①화면 흔들림 전부 제거(타격·폭탄·게임오버), 번쩍임도 더 약하게 ②타격음 두 겹 다 키우고 콤보마다 음높이가 올라감 ③끝 화면: 패널이 0.28초 페이드인, 내 기록 줄 깜빡임 제거, 월드 보드 자리를 처음부터 잡아 나중에 튀어나오지 않게
- **11-02 v1.3.0 플레이(원문)**: "광고보고나서 다시 시적할때눈 다시 시작할때 너 광고보고나서 뭐 어떻게 되었어!(시간 얼마 더 벌었어라는거 알려주면서 좀 비유적으로?) 카운트다운 다시 삼 이 일 이렇게 나오면서 다시 들어가도록 하자 아 그리고 너무 진동이 쌔졌어 눈아파" → 반영(v1.3.1): ①이어하기 뒤 "SECOND WIND! / The clock coughed up 10 more seconds and your hearts are full again." 카드 + 3·2·1·GO! 카운트인(그동안 두더지·타이머 정지, 틱 소리) ②화면 흔들림(눈 아픔) 절반 이하로: 보통 타격 9~15→4~7, 폭탄 26→11, 황금 12→6, 폭탄 플래시 0.75→0.45; OS "동작 줄이기" 설정이면 흔들림 0
- **11-01 v1.2.0 플레이(원문)**: "광고보몀 뭐가좋은건지 바로알게하고싶은데 왜봐야되나 모르겟는데 / 때리는맛이 더있으면 좋겠다 그리고 폭탄치면 진동울리냐 / 시간늘어나게하는애도 하나만들어보자 시계모양으로 하면 어떠냐 직관적으로 / 노래가 더 귀여우면좋겠어 / 랭킹 공유되게 어케히지 / 광고보고 이어하기하면 처음에 멈추게되. 일시정지햇다 풀어야 다시돌아오네" → 반영(v1.3.0): ①보상 버튼이 보상을 그대로 보여줌("Continue with +10 s and ♥♥♥ / watch one ad", 상자: "Open it: one ad, one new hammer" + 아래 수집 줄) ②타격감: 히트스톱 0.055→0.085, 흔들림·파편 증가, 충격 링, 두더지 찌그러짐 강화, 연속 히트 콤보(BONK→WHAM→SMASH→CRUSH→MEGA, x3 부터 표시·커짐) ③폭탄: 주황 플래시·큰 링·히트스톱 0.18·흔들림 26·진동 패턴 — **진동은 안드로이드만**(iOS 사파리는 Vibration API 없음, 코드로 불가) ④**시계 두더지**(파란 알람시계, 위에 +5s, 6점부터 ~8% 등장, 놓쳐도 하트 안 깎임) — 15마리 보너스는 제거, 황금은 +3·하트만 ⑤이어하기 버그: 보상을 `rewarded` 때가 아니라 광고가 **닫힌 뒤** 적용(rewarded 상태도 '광고 열림'으로 취급), 광고 중 플랫폼 일시정지는 일시정지 패널을 띄우지 않음 ⑥랭킹 공유: Playgama SaaS 리더보드 `moles`(콘솔에 생성, 공개 토큰 config) — 라운드 끝 setScore → "World top 10" 표시(플랫폼이 in_game 지원할 때), "Share my score" 버튼(플랫폼 share → 웹 share → 클립보드 복사 순). 노래는 코드로 못 만듦(합성 금지·Everygen 없음) → Codex 요청(아래)
- **11-01 v1.1.1 플레이(원문)**: "시간 1뷴이 너무 짧은거같고 시간초과로 끝날거면 타임 몇초남은거 카윤트다운이라도 되게하던가 아니면 기프투받은거로 시건늘리게 하거나 하면어떠냐 그리고 끝나고 랭킹보이는거 좀더 자극족이고 딱 직관적이면 좋겟는데" → 반영(v1.2.0): ①한 판 45→60초(속도 램프는 45초 기준 유지) ②마지막 10초 화면 가운데 큰 카운트다운(초마다 튐, 5초부턴 빨강) ③시간 보너스: 황금 두더지 +5초, 15마리마다 +5초("+5s" 표시) ④결과 화면: 점수 아래 "NEW BEST! +N over your old record" 또는 "#N of your M runs", 그 아래 "Next target: X" / "X more to beat your best", 랭킹은 상위 5개에 금·은·동 메달, 내 기록 줄 강조(깜빡임), 5위 밖이면 내 줄을 따로 추가
- **11-01 트래픽 결정(원문)**: "트래픽은 A로 가자" → 자연 유입만, 캠페인 없음(`PRODUCT.md` 결정 로그)
- **11-01 v1.1.0 플레이(원문)**: "오 훨씬 나아짐 근데중간에 갑자기 루즈해지는게 좀 있어 막 빨라지기전에" → 반영(v1.1.1): 8~18초 구간이 한 마리씩·1.7초 머무름·1초 간격이라 비었음. heat 시간 가중 0.7→0.8, 머무름 1.8→0.5초, 간격 0.9→0.3초, 동시 2마리를 heat 0.15(≈8초)부터·3마리를 0.5부터, 첫 판 아닌 라운드는 4초 뒤부터 2마리
- **11-01 Mole Mash 샌드박스 v1.0.0 첫 플레이(원문)**: "켜자마자 글씨너무많아 벌써 지겨워 심지어 뭐하라는건지 눈에 들어오지도 않아 / 한판 그냥 끝나버렸는데 광고부터나와서 frustrating / 처음부터 애들이 너무빨리 사라져 뭐하는건지도 모르고있는데 / 눌렸을때 떨어지는건 그나마 직관적인듯 / 맞추면 안되는애가 있느거같은데 왜안된건지도모르곘어 아예 폭탄같은모양으로 해버리던지 확 안눌르게, 오휴 누를뻔했다 이런게 생길정도로 / 그리고 하다보니까 너무 지겨워........ 다음판이 하나도 기대가 안돼 이거 게임 자체가 구성이 별로인건 아닌가.. 하나도 창의적인게 없이? / play again눌렀는데, watch an ad:Continue 안누르고 그래도 광고 나온게 이상한데 이거맞아? 마치 광고 안볼것처럼 싶었는데도 광고가 보인건데. 속인거같은데 이게 뭐야 싶을거같은데 / watch ad ad랑 차이가 없어보이는데"
  - 반영(v1.0.1, 같은 날): ①타이틀의 설명 카드 삭제 — 간판·Best·TAP TO START 만, 가르치는 건 첫 판 TAP!/DON'T! 링 ②초반 속도: 머무는 시간 1.5→2.0초 시작, 첫 8초 한 마리, 첫 판 처음 3마리는 3.0/2.6/2.2초에 놓쳐도 하트 안 깎임("FASTER!") ③스컹크→**폭탄**(불붙은 심지·빨간 점선 위험 링·첫 판엔 "DON'T!" 라벨, 때리면 BOOM 폭발) ④광고 자리: Play again·일시정지에서 광고 호출 제거, 전면 광고는 **라운드가 끝난 순간**(결과 패널 전)에만, 그것도 세션 첫 판 뒤엔 안 부름 ⑤보상형 버튼 문구 "Watch an ad to continue / reward: +10 seconds and 3 hearts", 지급 때 "+10s and 3 hearts" 표시
  - 아직 못 푼 것(사용자 결정 필요): "다음 판이 기대가 안 된다" = 구성 문제. 기획 파트너의 "망치 수집" 실험(위 📚 절) 또는 더 큰 변주. "watch ad 와 ad 차이 없음" — 광고 영상 자체는 플랫폼이 고르므로 같아 보일 수 있고, 차이는 보상(+10초·하트)뿐
- 10-30 "유튜브 채널에 이렇게 게임으로 만들어놓네. 애플에 내려고 하는 거 계속 안 되는데 이쪽으로 해볼 수 있을까" → A 결정.
