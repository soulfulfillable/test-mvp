# Kitty Sudoku (숫자 스도쿠, Playables) — 개발 세션 게시판
마지막 갱신: 2026-11-08 10:20 (KST)

## 🔁 이어받기
- 마지막 저장: 2026-11-08 10:20 KST · 작업 브랜치 `claude/sudoku-playables`(main 에 ff 반영) · 경로 `playables/sudoku/`, 웹 `docs/sudoku-playables/`
- 승인: 사용자 "A"(11-08). 기획서 `plans/sudoku-playables.md`. 보고는 쉬운 영어.
- 방금 끝낸 것: **v1.0.0 전부** — 생성기(`sudoku-core.js`: 4×4/6×6/9×9, 유일해 + 싱글 기반 난이도 채점, 레벨 300, 데일리 6×6 KST 시드), 표준 UI(숫자패드+남은 개수·Notes·Undo·Erase·행/열/박스·같은 숫자 하이라이트·틀린 입력 빨강·실수 3회·타이머·일시정지), 데일리 랭킹 + 도전장 링크(`#c=초&n=이름&d=날짜`, 친구 기록이 HUD 칩·결과 목록에 표시), 호랑이 마스코트(맞으면 깡충·틀리면 투덜·일시정지 낮잠·완료 춤), Bridge 배관(storage·오디오·전면/보상형 광고)·반응형(세로/가로/1:1)·로봇 104/104(실제 탭 550회)·zip·Pages 복사. Playgama 드래프트 + 폼 + 아카이브 1.0.0 + 커버 3종 업로드.
- 진행 중이던 것: 없음. 아카이브 빌드 체크 PASSED(bridgeSdk FOUND 2.4.0).
- **다음 할 일**: ① 사용자 답("설명 없이 바로 됐나요?") 받기 → 피드백은 **지목된 것만** 고치기(PLAYBOOK 11-08 교훈: 묻지 않은 개선 금지) ② 사용자 yes 면 `publish_sandbox`(id `cmw6vm5iq0v3qno0hih97vhin`) → 공유 링크 → config 에 share url → 재업로드 ③ QA 툴은 Codex(아래 양식) ④ 예상 피드백 대비: 데일리 크기(6×6 vs 9×9) A/B, 이름(Kitty Sudoku 확정 여부)은 기획 파트너.
- 사용자 대기 중인 것: 첫 판 느낌 1문항, 샌드박스 게시 yes/no.
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/sudoku-playables.md "🔁 이어받기" 와 plans/sudoku-playables.md 를 읽고, "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. Playgama MCP 도구 있는지 먼저 확인.`

## 지금 상태 (3줄 이내)
- 미리보기 https://soulfulfillable.github.io/test-mvp/sudoku-playables/ (Bridge mock: 저장 됨·광고 없음). 게임 v1.0.0, 로봇 104/104, 콘솔 0, 외부 요청 0, zip 2.97MB(32파일).
- Playgama 드래프트 **Kitty Sudoku** `cmw6vm5iq0v3qno0hih97vhin` — 폼 저장, 아카이브 `kitty-sudoku-1.0.0`(`cmw6ydlab0vjhmt0h90dtx61v`) 업로드·confirm, 커버 3종 확정(square `cmw6zlmt00w5umt0hso9i3fft`, portrait `cmw74ff1110wjno0hupfk5jt2`, landscape `cmw74pcjj112rno0hgngjty39`). **샌드박스 미게시(사용자 yes 대기).**
- 결정(이 세션): 데일리 = **6×6 Medium**(차별점 ① 짧은 판에 맞춤; 9×9 는 레벨 76+). 레벨 사다리 1–5 4×4 → 6–75 6×6(Easy/Medium/Hard) → 76–300 9×9(Easy/Medium/Hard).

## Playgama
- 드래프트 **Kitty Sudoku** id `cmw6vm5iq0v3qno0hih97vhin` (engine js, 2026-11-08 생성). `saas.publicToken` 에 이 id. 폼 저장됨(category sudoku, EN, iOS/Android/Desktop, 세로+가로, leaderboards·social, description/howToPlay/story). 아카이브 `cmw6ydlab0vjhmt0h90dtx61v` confirm 완료 — **빌드 체크 PASSED, bridgeSdk FOUND 2.4.0 (javascript), unpack DONE**. 런치 단계: archive·bridge·covers DONE, form 은 NO_CERTIFICATION(QA 툴 인증 — Codex), **current = sandbox(사용자 yes 대기)**. 커버 3종 확정. **publish_sandbox 는 사용자 yes 뒤.**
- 이름 조사(11-08 WebSearch): "Kitty Sudoku" 등록 상표 없음. 가까운 것: 미국 등록 상표 **CAT' SUDOKU**(Reg. 6881895, Andrzej Citak, 28·35류, 2022), 앱 **Kittydoku**(TSP Technology, Android), **Catdoku**(iOS). 일본은 Nikoli 가 'Sudoku' 상표 보유(미국은 일반 명칭 취급). → 'Kitty Sudoku' 는 가칭으로 진행, 확정 전 기획 파트너 판단.

### Playgama 체크리스트 점검표 (get_game_checklist 2026-11-08, 번호별)
| 번호 | 항목 | 상태 | 근거 |
|---|---|---|---|
| 1.1.1–1.1.2 | Bridge SDK 최신 + Required steps 8개 | ✅ | SDK 2.4.0 동봉, config 동봉, `<head>` 첫 스크립트, initialize 뒤 로드, language 읽음, storage 1회 get/의미 있는 변화에만 set, isAudioEnabled/pause 이벤트, loading 숨긴 뒤 `game_ready` 1회(로봇), 전면 광고 타이밍은 Bridge, 미지원 숨김(힌트/이어하기는 `isRewardedSupported` 일 때만, 리더보드 `not_available` 이면 미호출) |
| 1.2.x | 외부 서비스·로그인·외부 자원 없음 | ✅ | 로봇 "external requests: 0", 로그인 없음. 도전장 링크(Pages URL)는 **mock 플랫폼(웹)에서만** 공유 문구에 들어감 — Playgama 안에서는 텍스트만(1.2.6) |
| 1.3.x | 300MB 이하, index.html 루트, 라틴 파일명 | ✅ | 2.97MB, 32파일 |
| 1.4.x | 모바일 전체 화면·키보드·방향·제스처·롱프레스 | ✅ | fixed 전체 화면, 이름 입력칸만 키보드, 세로+가로 선언, 탭만, user-select/callout 없음·contextmenu 차단 |
| 1.5.x | 데스크톱 키보드/마우스, Esc 미사용 | ✅ | 마우스 + 숫자/화살표/Backspace/N/Z/P/M, 로봇 "Esc does nothing" |
| 1.6.x | 모든 비율·1:1·겹침·스크롤 없음·팝업 닫기 | ✅ | 로봇 14개 크기 HUD/판/풋 겹침 0·화면 안·판 ≥ 55%·패드 키 ≥ 30×40px, 문서 스크롤 없음, 패널마다 닫는 버튼 |
| 1.7.x | 에러·멈춤 없음, 끝까지 플레이, 5개 브라우저 | ⚠️ 부분 | 콘솔/페이지 에러 0, 4×4·6×6·9×9 각 3판 + 데일리 실제 탭으로 클리어. **Safari·Firefox·Edge·Opera 실기기 미확인**(헤드리스 Chromium) — 사용자 폰 확인 필요 |
| 2.1.x | 전면 광고: Bridge 만, 논리적 멈춤, 실패해도 진행 | ✅ | `level_end`(다음/재시도/레벨 목록)·`round_end`(데일리 다시), 광고 중 소리·시계 정지(로봇) |
| 2.2.x | 보상형: 옵트인·거절 가능·보너스만·복구 1회·`rewarded` 에서만 | ✅ | 버튼에 AD 배지/"watch one ad", 힌트 = 판당 1칸, 이어하기 = 시도당 1회(실수 0, 틀린 숫자 제거), closed/failed 미지급(로봇), 두 번 no-fill 이면 숨김 |
| 2.3–2.5 | 배너·결제·실물 없음 | ✅ | 해당 없음 |
| 3.1.x | 진행·난이도 상승·온보딩 | ✅ | 300레벨 4×4→9×9 Easy→Hard, 데일리. 설명 화면 0 — 첫 4×4 + 한 줄 팁("Tap a cell, then tap a number.", 첫 숫자 뒤 사라짐) |
| 3.2.x | Bridge storage 만, 리로드 생존 | ✅ | localStorage 미사용, `progress`/`settings` 2키, 로봇 리로드 복원 통과. (판 중간 상태 저장은 없음 — 아쉬운 점) |
| 3.3.x | 음악+효과음, 파일 음원, 음소거, 플랫폼 음소거·일시정지, 숨김 시 무음 | ✅ | CC0 ogg+mp3 11효과음+BGM 2곡, 음소거 버튼(제목/HUD/일시정지), hidden 시 suspend(로봇) |
| 3.4.x | 영어 기본, 언어는 Bridge 에서 | ✅ | 영어만, `platform.language` 읽기만 |
| 3.5.1 | 게임 안 제목 = 폼 제목 | ✅ | `<title>`·타이틀 "Kitty Sudoku" = 폼 "Kitty Sudoku" |
| 4.1 | 금지 콘텐츠 | ✅ | 숫자 퍼즐 + 고양이 |
| 4.2.x | 저작권·카탈로그 복제 아님 | ⚠️ 주의 | 코드·SVG 자체 제작, 음원 CC0(`CREDITS.md`). 카테고리 자체가 sudoku 라 유사 게임 많음 → 폼에 차별점(짧은 판·데일리 도전장·마스코트) 명시 |
| 4.3.x | 생성형 AI 전용 아님, 이모지 없음 | ✅ | 이모지 0(로봇), 손그림 SVG 고양이·스트로크 아이콘, 시스템 글꼴 |
| 4.4 | 사용자 데이터 | ✅ | 이름 8자 로컬 저장뿐 |

### 🖱️ Codex 에게 (브라우저 작업) — QA 툴 인증 (샌드박스 yes 와 무관하게 가능)
- URL: Playgama 콘솔 → Kitty Sudoku(id `cmw6vm5iq0v3qno0hih97vhin`) → QA tool (링크는 `get_archive_qa_tool_link` 또는 콘솔에서)
- 로그인 계정: Playgama 개발자 계정(Soulfulfill)
- 할 것: QA 툴 체크를 끝까지(모바일/데스크톱, 광고 상태, 저장 리로드). 결과 원문을 이 게시판 "QA 툴(날짜)" 줄로. 실패 항목 수정은 Claude 세션.
- 하지 않을 것: Submit for review, publish, 트래픽 캠페인, 결제.

## 다음 할 일 / 사용자에게 받을 것
- 사용자: ① "설명 없이 바로 됐나요?" ② 샌드박스 게시 yes/no.
- 아쉬운 점(숨기지 않음): ① 실기기 사파리 미확인 ② 판 중간 상태(진행 중인 숫자) 저장 없음 — 나가면 그 판은 처음부터(레벨 진행은 저장) ③ 랭킹은 기기 로컬 + 도전장 링크뿐, Bridge 리더보드 `levels` 는 config 선언·setScore 만 ④ 도전장 링크는 Pages 판에서만(Playgama 는 URL 을 못 바꿈) ⑤ BGM 2곡은 Mole Mash·Kitty Queens 와 같은 CC0 곡 ⑥ 데일리 6×6 은 내 결정(사용자가 9×9 를 원하면 한 줄 수정).

## 사용자 피드백 기록 (최신이 위, 원문 인용 + 어떻게 반영했나)
- 11-08 (기획 세션 전달) "캣도쿠 규칙이 바로 안 읽힘 → 진짜 숫자 스도쿠" → A 착수. 묻지 않은 개선은 얹지 말 것(PLAYBOOK 11-08 교훈). → 규칙·UI 는 Sudoku.com 류 표준 그대로, 설명 화면 0.

## 사용자 성향 — 원하는 것 / 불편해하는 것 (이 앱에서 알게 된 것)
- (Kitty Queens 에서) 게임이 말을 많이 하면 "이상하다". 이 앱은 글이 한 줄(첫 판 팁)뿐이고 틀리면 빨간 숫자 + Mistakes 카운터만.
- 폰으로 봄 → Pages 링크 하나로 바로.

## 다른 세션에 알리는 노하우 (다른 앱에서도 써먹을 것)
- **스도쿠 생성기는 "파고 나서 채점"이 빠르고 단순하다**: 완성판 → 180° 대칭 쌍을 셔플 순서로 비우며 매번 유일해 검사(후보 최소 칸 우선 백트래킹, cap 2) → 목표 힌트 수에서 멈춤 → 네이키드/히든 싱글 풀이기로 등급(easy = 네이키드만, medium = 히든 필요, hard = 그 이상) → 등급이 안 맞으면 시드 이어서 재시도. 9×9 한 판 최악 20ms, 300레벨 전수 2초. 코드 `playables/sudoku/sudoku-core.js`(UMD — 브라우저·node 같은 파일, 로봇이 node 에서 전수 검증 + "페이지 = node 같은 판" 검사).
- 게임 코어를 별도 `.js` 로 빼면 로봇이 `require` 로 전수 검증할 수 있다(단일 HTML 에 넣으면 `<script>` 를 긁어야 함).
- 숫자패드·판 모두 `touchstart` 로 바로 반응(click 300ms 지연 없음), 마우스는 `mousedown` + 터치 뒤 800ms 가드. 패드는 9칸 1줄(세로)/3×3(가로)로 `grid-template-columns: repeat(var(--n), minmax(0,1fr))`.
- Playgama MCP 서버가 이번 세션엔 **거의 매 호출마다 끊김** → 호출 1~2개씩 + 받은 id 즉시 게시판 커밋 + ToolSearch 로 다시 로드. PUT(curl)은 끊김과 무관.

## 다른 세션·기획 파트너에게 묻고 싶은 것
- 이름 확정: "Kitty Sudoku"(가칭) vs 다른 이름 — CAT' SUDOKU 등록 상표(미국)와 가까운지 판단.
- 데일리 크기: 6×6(지금) vs 9×9 — 사용자 반응 보고 결정.
