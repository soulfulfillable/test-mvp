# YouTube Playables — 게시판 (기획 파트너가 염, 2026-10-30)

## 🔁 이어받기
- 마지막 저장: 2026-10-31 (개발 세션) · 작업 브랜치: `claude/playables-catalog` (main 반영됨)
- 결정(사용자 "추천대로 가자", `PRODUCT.md` 결정 로그 10-30): **A = 구글 관심 신청서 + 파트너(Playgama 등) 경유를 동시에.** 재료는 `docs/` 의 기존 HTML 게임. 퍼블리셔 채널 = 기존 Peblit(10-31).
- 방금 끝낸 것: ① **카탈로그 `docs/games.html`** (9개 카드: 실제 플레이 스크린샷·이름·장르·영문 한 줄·Play 버튼·파일 크기, 라이트/다크, 시스템 글꼴·강조색 1개) ② **영문 소개 `playables/pitch.md`** (스튜디오 한 줄·게임별 한 줄·Playables 적합 이유·신청서 답안) ③ 스크린샷 자동 캡처 `playables/capture.js`(1170×2532, 콘솔 에러 0·외부 요청 0 전부 확인) + 카드용 `playables/thumbs.js` ④ 아이스크림 탑 UI 를 영어로(Ice Cream Tower) — 9개 중 유일하게 한국어였음
- 진행 중이던 것: 없음
- **다음 할 일 (순서)**:
  ③ **사용자가 제출**: 구글 Playables 관심 신청서(developers.google.com/youtube/gaming/playables/support/contact 에서 링크) + Playgama 개발자 콘솔(캣도쿠·두더지 2개 먼저). 답안은 `playables/pitch.md` "Suggested answers" 를 그대로 복사. 채널 칸 = Peblit 채널 URL(채널 관리 권한이 신청 계정에 있어야 함). 제출하면 날짜·어느 쪽에 냈는지 이 게시판에 적기
  ③-b **Playgama Bridge SDK 인라인 어댑터 + MCP 로 두더지 잡기·캣도쿠 업로드**(커넥터 연결 뒤): create_application → 폼 → zip 업로드 → 커버 3종(`docs/assets/games/full/*.png` 에서 생성) → QA 툴 → 샌드박스 링크를 사용자에게. 커버·폼 문구는 `playables/pitch.md`.
  ④ **Playables SDK 연동 1개 시범**(두더지 잡기가 가장 단순): 게임 준비 신호(`gameReady`/first frame), 일시정지·재개, 음소거, 저장(SDK 저장소 우선·localStorage 폴백), 외부 호출 0(이미 확인됨), 초기 용량 30MB 이하(전부 60KB 이하). **이 환경은 developers.google.com·playables.in 접속이 막혀 있어** SDK 문서는 사용자가 PDF/캡처로 주거나 네트워크 허용 뒤에. 문서 없이 미리 할 수 있는 것: `window.ytgame` 유무를 보고 분기하는 어댑터 뼈대 + 광고 슬롯 자리(게임 오버 패널 뜨기 전) 표시
  ⑤ 승인/파트너 답이 오면 나머지 게임에 같은 틀 적용. 광고는 SDK 가 주는 방식만(AdMob 아님). 파트너가 아이콘·배너를 요구하면 `docs/assets/games/full/*.png`(1170×2532)에서 잘라 만든다
- **11-01 (기획 파트너) Playgama 진행 상황**: 사용자가 Playgama 개발자 계정 가입 완료(스튜디오명 Soulfulfill, Solo developer). 콘솔이 "Playgama MCP" 연결을 권함 → 사용자 "직접 할 수 있으면 좋겠다" → **MCP 로 연결해 세션이 직접 올리는 방식 채택.**
  - **Playgama MCP 사실(공개 README 확인)**: 원격 HTTP MCP `https://developer.playgama.com/api/mcp`, 인증 OAuth 2.1(처음 연결 때 브라우저 로그인, 토큰 채팅에 붙이지 말 것). 도구: 게임 생성·폼 수정, zip 빌드 업로드(≤300MB), 커버 업로드(800×800 / 1080×1920 / 1920×1080, ≤10MB), 인앱·리더보드, QA 툴, 샌드박스 게시(시간당 15회), Bridge SDK 문서·요건 체크리스트 읽기(`get_game_checklist`). 모든 쓰기 도구는 destructive 표시.
  - **연결 방법(클라우드 세션용)**: claude.ai → Settings → Connectors → **Add custom connector** → URL 위 주소 → Connect → 브라우저에서 Playgama 로그인·허용. 그 뒤 새로 여는 세션(또는 이 Playables 세션)에 `mcp__playgama...` 도구가 뜬다. (Claude Code CLI 는 `claude mcp add --transport http playgama-developer-console https://developer.playgama.com/api/mcp` 후 `/mcp` 로그인.) 이 클라우드 환경은 playgama.com 네트워크가 막혀 있으니 커넥터 방식이 맞다.
  - **⚠️ 업로드 전 필수**: Playgama 는 모든 게임에 **Playgama Bridge SDK(≥2.2.0)** 연동을 요구한다(npm `@playgama/bridge`). 우리 게임은 파일 1개·외부 호출 0 원칙이라 Bridge 를 **인라인으로 번들**하고, 플랫폼 감지로 Playgama 밖에서는 no-op 어댑터로 떨어지게 한다. 두더지 잡기 → 캣도쿠 순으로 시범. 정확한 요건은 연결 뒤 `get_game_checklist`·Bridge 문서 도구로 읽는다(이 환경에서 npm 레지스트리 접근이 되면 패키지 소스 확인 가능).
- 사용자 대기: ① **Playgama 커넥터 추가 + 로그인**(위 "연결 방법", 2분) → "연결했어" ② 구글 Playables 관심 신청서 제출(③) → "냈어"
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/playables.md "🔁 이어받기" 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·PLAYBOOK.md 규칙대로.`

## 지금 상태
카탈로그 https://soulfulfillable.github.io/test-mvp/games.html + 영문 소개 `playables/pitch.md` 완료(10-31). 사용자 신청서 제출 대기. SDK 문서는 아직 없음.

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
