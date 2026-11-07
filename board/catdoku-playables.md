# Kitty Queens: Cat Sudoku — Playgama/YouTube 판 — 개발 세션 게시판

## 🔁 이어받기
- 마지막 저장: 2026-11-07 14:40 KST (v1.1.0 손맛 효과) · 작업 브랜치 `claude/catdoku-playables` (main 에 ff 반영됨) · 경로 `playables/catdoku/` (웹 `docs/catdoku.html` 은 그대로)
- 승인(사용자 11-07 "착수. 이름은 너 추천대로"): `plans/catdoku-playables.md` 전부. 표기 이름 **Kitty Queens: Cat Sudoku**. 보고는 쉬운 영어.
- 방금 끝낸 것: **①~⑧ 전부** — 게임 본체(`index.html`), 로봇 84/84(`qa/report.json`), 빌드 `dist/kitty-queens.zip`(2.97MB) + Pages 복사본 `docs/catdoku-playables/`, 커버 3종, `CREDITS.md`, **Playgama 게임 생성·폼·아카이브(빌드 체크 PASSED, Bridge 2.4.0 FOUND)·커버 3종 업로드 완료**. 런치 단계: archive ✅ bridge ✅ covers ✅ · form BLOCKED(NO_CERTIFICATION → QA 툴 인증은 Codex) · **sandbox TODO(publish_sandbox, 사용자 yes 필요)** · traffic BLOCKED(샌드박스 뒤, 사용자 결정).
- 진행 중이던 것: 없음.
- 다음 할 일: ⑨ 사용자 yes 가 오면 `publish_sandbox`(앱 id `cmw5rj3x202syno0hy56lnw64`, 아카이브 **v1.1.0 `cmw6dun2o0gksno0hfpm40tak`**) → `get_sandbox_share` 로 링크 받아 게시판·handoff 에 기록 → `playgama-bridge-config.json` 의 `social.shares[0].url` 에 샌드박스 주소 넣고 재빌드·재업로드(v1.0.1) → 사용자 폰 체감 피드백(첫 판 온보딩·그림 고양이) 받아 반영 → 샌드박스 목표(콘솔 카드: Puzzle/sudoku 카테고리 목표치, Codex 가 읽어 적음) → QA 툴 인증(Codex) → Submit(사용자 클릭). 트래픽 부스트는 사용자 결정 뒤에만.
- 사용자 대기: **샌드박스 게시 yes/no** · 질문 2개(아래 보고).
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/catdoku-playables.md 와 plans/catdoku-playables.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. Playgama MCP 도구 있는지 먼저 확인.`
- 🌐 미리보기(Pages): https://soulfulfillable.github.io/test-mvp/catdoku-playables/ · 로봇 스크린샷 `playables/catdoku/qa/` · 🔧 QA 툴: https://developer.playgama.com/qa-tool/cmw5tfzkp03evmt0hxrtvuond

## 지금 상태 (3줄 이내)
- Playgama 드래프트 **Kitty Queens: Cat Sudoku** (id `cmw5rj3x202syno0hy56lnw64`, category sudoku) — 아카이브 `kitty-queens-1.0.0` PASSED, 커버 3종 등록, 폼 저장. 샌드박스는 **미게시**(사용자 yes 대기).
- 게임: 레벨 500(5×5→9×9, Flutter 판과 같은 생성기라 같은 판) + 데일리 7×7(웹판과 같은 판). 로봇 84/84, 콘솔 0, 외부 요청 0. 유일해: 레벨 1..500 전부 + 오늘 데일리(node 로 전수 검증).
- Playgama 카테고리 설명에 **'CatDoku' 가 이미 예시 게임으로 있음** → 4.2.2(카탈로그 내 유사 게임) 위험. 폼에 차별점(자동 ✕ 힌트·위반 사유·데일리 동일판·손가락 온보딩·500레벨 성장)을 적었다.

## Playgama 체크리스트 점검표 (get_game_checklist, 2026-11-07 — 번호별)
| 번호 | 항목 | 상태 | 근거 |
|---|---|---|---|
| 1.1.1–1.1.2 | Bridge SDK 최신 + Required steps 8개 | ✅ | SDK 2.4.0 로컬 동봉(빌드 체크 FOUND), config 동봉, `<head>` 첫 스크립트, initialize 뒤 로드, language 읽음, storage 1회 get/의미 있는 변화에만 set, isAudioEnabled/pause 이벤트, loading 숨긴 뒤 `game_ready` 1회(로봇), 전면 광고는 Bridge 가 타이밍, 미지원 기능 숨김(힌트/이어하기 버튼은 `isRewardedSupported` 일 때만) |
| 1.2.1–1.2.7 | 외부 서비스·로그인·외부 자원 없음 | ✅ | 로봇 "external requests: 0", 로그인 없음, 외부 링크 없음, 분석은 Bridge analytics 만 |
| 1.3.1–1.3.3 | 300MB 이하, index.html 루트, 라틴 파일명 | ✅ | 2.97MB, 31개 파일, 루트 index.html(YouTube 30MB·8,000파일 조건도 충족) |
| 1.4.1–1.4.6 | 모바일: 전체 화면·키보드·방향·제스처·롱프레스 | ✅ | fixed 전체 화면, 이름 입력칸은 포커스 시 키보드, 세로+가로 둘 다 선언, 탭만으로 조작, user-select/callout 없음·contextmenu 차단, WebGL 경고 없음 |
| 1.5.1–1.5.3 | 데스크톱 키보드/마우스, Esc 미사용 | ✅ | 마우스 클릭 + 화살표/Space/Enter/P/M, 로봇 "Esc does nothing" |
| 1.6.1–1.6.8 | 모든 비율·1:1·겹침·스크롤 없음·팝업 닫기 | ✅ | 로봇 14개 크기(세로·가로·1:1·태블릿·데스크톱·21:9) HUD/판/푸터 겹침 0·화면 안·판이 짧은 변 55%↑, `overflow:hidden`, 모든 패널에 닫는 버튼(Resume/Title/Levels) |
| 1.7.1–1.7.3 | 에러·멈춤 없음, 끝까지 플레이 가능, 5개 브라우저 | ⚠️ 부분 | 콘솔/페이지 에러 0, 레벨 10개+데일리 실제 클리어. **Safari·Firefox·Edge·Opera 실기기는 확인 못 함**(헤드리스 Chromium 만) — 사용자 폰(사파리) 확인 필요 |
| 1.8 | 비디오 없음 | ✅ | 해당 없음 |
| 2.1.1–2.1.7 | 전면 광고: Bridge 만, 논리적 멈춤에서, 실패해도 진행 | ✅ | `level_end`(다음 레벨/재시도/레벨 목록) · `round_end`(데일리 다시) 에서 `showInterstitial`, 타이밍은 Bridge, 광고 중 소리·시계 정지(로봇), 실패해도 게임 계속 |
| 2.2.1–2.2.5 | 보상형: 옵트인·거절 가능·보너스만·실패 복구 1회·`rewarded` 에서만 | ✅ | 버튼 문구 "watch an ad"/"watch one ad" 명시, 힌트 = 판당 1회(정답 고양이 1마리), 이어하기 = 시도당 1회(하트 3개), closed/failed 시 미지급(로봇), 두 번 no-fill 이면 버튼 숨김 |
| 2.3–2.5 | 배너·결제·실물 없음 | ✅ | 해당 없음 |
| 3.1.1–3.1.3 | 진행·난이도 상승·온보딩 | ✅ | 레벨 500(5→9), 데일리, 첫 판 손가락 안내(글 벽 없음) |
| 3.2.1–3.2.3 | Bridge storage 만, 저장·리로드 생존 | ✅ | localStorage 미사용(코드 grep 0), `progress`/`settings` 2키, 로봇 리로드 복원 통과 |
| 3.3.1–3.3.5 | 음악+효과음, 파일 음원, 음소거, 플랫폼 음소거·일시정지, 숨김 시 무음 | ✅ | CC0 ogg+mp3 11효과음+BGM 2곡, 합성음 0, 음소거 버튼(제목/HUD/일시정지), `isAudioEnabled` 시작 시 반영+이벤트, hidden 시 suspend(로봇) |
| 3.4.1–3.4.4 | 영어 기본, 언어는 Bridge 에서 | ✅ | 영어만(EN 선언), `platform.language` 읽기만 |
| 3.5.1 | 게임 안 제목 = 폼 제목 | ✅ | `<title>`·타이틀 화면 "Kitty Queens / Cat Sudoku" = 폼 "Kitty Queens: Cat Sudoku" |
| 4.1 | 금지 콘텐츠 | ✅ | 고양이 퍼즐 |
| 4.2.1–4.2.5 | 저작권·카탈로그 복제 아님 | ⚠️ 주의 | 모두 자체 제작(코드·SVG), 음원 CC0(`CREDITS.md`). **카탈로그에 'CatDoku' 가 있음** → 폼 설명에 차별점 명시. 모더레이션 판단은 Playgama 몫 |
| 4.3.1–4.3.2 | 생성형 AI 전용 아님, 이모지 아이콘 없음 | ✅ | 이모지 0(로봇 검사), 아이콘 결의 손그림 SVG 세트, 시스템 글꼴 |
| 4.4 | 사용자 데이터 | ✅ | 이름 8자 로컬 저장뿐 |
| 5.x | 엔진 | ✅ | 해당 없음(plain JS) |
| YouTube | 30MB·세로+가로·외부 호출 0·8,000파일·원본성 | ✅ | 위와 같음 |

### 🖱️ Codex 에게 (브라우저 작업) — QA 툴 인증 (샌드박스 yes 와 무관하게 가능)
- URL: https://developer.playgama.com/qa-tool/cmw5tfzkp03evmt0hxrtvuond
- 로그인 계정: Playgama 개발자 계정(Soulfulfill)
- 할 것: QA 툴을 열어 체크를 끝까지 실행(모바일/데스크톱, 광고 상태, 저장 리로드). 결과(통과/실패 항목 원문)를 이 게시판 "QA 툴(날짜)" 줄로 적기. 실패 항목이 있으면 고치는 건 Claude 세션.
- 하지 않을 것: Submit for review, publish, 트래픽 캠페인, 결제.
- 확인할 결과: 콘솔의 form 단계가 열림(`get_launch_steps` form ≠ NO_CERTIFICATION).

## 다음 할 일 / 사용자에게 받을 것
- 사용자: 샌드박스 게시 yes/no · 질문 2개(첫 판이 설명 없이 되나 / 그림 고양이가 마음에 드나).
- 세션: yes 뒤 publish_sandbox → 공유 링크 → config 에 share url → v1.0.1 재업로드.
- 아쉬운 점(숨기지 않음): ① 실기기 사파리 미확인(헤드리스 Chromium 만) ② 랭킹은 기기 로컬(오늘의 시간) + Bridge 리더보드 `levels` 는 config 선언만, 결과 화면 표시 없음 ③ 도전장 링크(웹판의 해시 공유)는 Playgama 에선 URL 을 못 바꿔 뺌 → 공유는 텍스트만 ④ BGM 2곡은 Mole Mash 와 같은 CC0 곡(우쿨렐레·래그타임) ⑤ 레벨 보상(별·꾸미기)은 없음 — 핵심 깊이에 집중, 필요하면 다음 판.

## 사용자 피드백 기록 (최신이 위, 원문 인용 + 어떻게 반영했나)
- 2026-11-07 "고양이 올라가면 그 이제 못올릴 네방향 그리고 인근 그부분에 뭐 그런 연한 분홍색 이펙트 같은거 살짝 올라왔다가 내려가면 어떠냐 그래서 뭔뜻인지좀더 알게? 뭔가 너무 일차원적이고 그리고 막 끝나거나 할때 막 다른 게임은 막 별 이펙트 막 챠라락 그런가막 정신없게 나오는데 그냥 잔잔하기만하고 디자인도그냥.. 그런데. 스도쿠니까 이런느낌으로해야되나.. 그 막 깃허브나 그런데보면 사람들이 막 뭐 올려놓는거많던데 그런거중에 깔아서 스킬추가할만한거 없을까? 이런 디자인적인게 지금까지 공통된 아쉬움인데.."
  → **v1.1.0 손맛**: ①고양이를 놓으면 못 놓는 칸(행·열·색·인접) 위로 **연분홍 물결이 고양이에서 바깥으로 거리 순서대로 번졌다 사라짐**(45ms 간격) + ✕ 가 돌면서 나타남(`qa/wave-strip.png`) ②틀린 칸엔 **화난 고양이가 튀어나왔다 도망감**(`qa/phone-390x844-tutorial-wrong.png`) ③완료 시 **색종이·별 폭죽 3연발 + 고양이들이 열 순서로 파도 바운스 + "SOLVED!/PURR-FECT!" 큰 글씨 + 시간 카운트업**(`qa/phone-390x844-win-burst.png`) ④타이틀 고양이 눈 깜빡임·둥실, 버튼 눌림 스케일, 판 등장 애니, 진행 고양이 깡충. 전부 코드(캔버스·CSS)로, 외부 파일 없음, reduced-motion 존중. 로봇 86/86.
  → **스킬 설치**: Anthropic 공개 저장소 `anthropics/skills` 의 `frontend-design` 스킬(Apache-2.0)을 `.claude/skills/frontend-design/` 에 넣음 — 새 화면 만들기 전에 `/frontend-design` 호출. 게임 손맛 체크리스트는 `PLAYBOOK.md` 5장.
- 2026-11-07 "그냥 손가락 누르면 바로 고양이 들어가게 하자. 그림 고양이 괜찮" → v1.0.1: 탭 한 번 = 고양이(✕ 거치는 단계 삭제, 수동 ✕ 없음, 자동 ✕ 는 유지), 고양이 탭 = 제거. 온보딩·팁·Playgama 폼 문구 수정. 로봇 83/83(실제 탭 73). 그림 고양이는 그대로.
- 2026-11-07 "착수. 이름은 너 추천대로" → Kitty Queens: Cat Sudoku 로 Playgama 드래프트 생성.
- (웹 캣도쿠 10-02) "어렵다" → 레벨 1~3 은 5×5, 레벨 1 은 손가락 안내 + 실수해도 하트 안 깎임.

## 사용자 성향 — 원하는 것 / 불편해하는 것 (이 앱에서 알게 된 것)
- 증거 있는 보고(스크린샷·로봇 결과)를 원함 → `qa/` 스크린샷 35장 + 점검표.
- 폰으로 봄 → Pages 링크 하나로 바로 플레이되게.

## 다른 세션에 알리는 노하우 (다른 앱에서도 써먹을 것)
- **Playgama `saas.publicToken` = 그 게임의 application id** (Mole Mash config 로 확인) → create_application 직후 config 에 넣고 다시 빌드하면 리더보드가 붙는다.
- CSS grid 판: `grid-template-columns` 만 주고 rows 를 안 주면 칸 안의 `<svg>` 가 기본 150px 높이로 행을 늘린다 → `grid-template-rows: repeat(n,1fr)` + 칸 `min-height:0; overflow:hidden` 필수(로봇이 "마지막 행이 화면 밖" 으로 잡음).
- grid 컬럼 `1fr` 은 `minmax(auto,1fr)` 이라 nowrap 글자가 있으면 컨테이너를 넘친다 → `minmax(0,1fr)`.
- 레벨 생성기는 Flutter(Dart) 코드를 그대로 JS 로 포팅(xorshift32 는 `>>>0`, `x >> 17` 은 `>>> 17`)하면 같은 시드 = 같은 판. 레벨 1..500 유일해를 node 로 전수 검증(약 수 초).
- Playgama MCP 서버가 세션 재시작으로 자주 끊긴다 → 업로드 id 들은 받는 즉시 게시판에 커밋(confirm_* 는 반복 호출 안전).

## 다른 세션·기획 파트너에게 묻고 싶은 것
- 카탈로그의 'CatDoku' 와 4.2.2 충돌 시 대응(이름 유지? 'Kitty Queens' 만?) — 모더레이션 답을 보고 결정.