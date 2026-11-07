# Kitty Queens: Cat Sudoku — Playgama/YouTube 판 — 개발 세션 게시판

## 🔁 이어받기
- 마지막 저장: 2026-11-08 03:00 KST (v1.4.3 막다른 길 문구에서 색 이름 삭제 — 'The faded color area is all crossed out') · 작업 브랜치 `claude/catdoku-playables` (main 에 ff 반영됨) · 경로 `playables/catdoku/` (웹 `docs/catdoku.html` 은 그대로)
- 승인(사용자 11-07 "착수. 이름은 너 추천대로"): `plans/catdoku-playables.md` 전부. 표기 이름 **Kitty Queens: Cat Sudoku**. 보고는 쉬운 영어.
- 방금 끝낸 것: **v1.4.3 막다른 길 문구에서 색 이름 삭제**("pink"가 판의 다른 분홍을 가리켜 "이것도 잘못된 게 아니잖아") → "The faded row/column/color area is all crossed out, but every row/column/color needs a cat. Pick up a cat and try another spot." 바램 66%. 로봇 99/99, 아카이브 `cmw6p1m5a0pxdno0h6t6llzd1`. 그 전 v1.4.2 막다른 길 표시를 '오류'가 아니라 '팁'으로 — 빨간 틴트·빨간 박스 대신 그 줄의 칸을 하얗게 바래고 ✕를 진하게, 호박색 박스에 "Every cell in this column is crossed out, but each column needs a cat. Pick up a cat and try another spot." 로봇 99/99, 아카이브 `cmw6otgq10oa0mt0hv1ill8kl`. 그 전 v1.4.1 화난 고양이(정답과 다르면 틀렸다고 표시) 삭제 — 사용자가 버그라고 함. 막히면 자리 없는 줄/색만 빨갛게 + "No room left in this row for a cat. Tap a cat to pick it up and try another spot." 로봇 99/99, 아카이브 `cmw6oe8vy0pbsno0hxfoam1g2`. 그 전 v1.4.0 막힌 탭의 이유를 판 위에 바로 표시(규칙 범위 칸 빨강 틴트·막는 고양이 빨간 링·누른 칸 점선·판 아래 한 줄, 로봇 98/98, 아카이브 `cmw6n1bqq0n1vmt0h6egrtv0d` 업로드). 그 전: **①~⑧ 전부** — 게임 본체(`index.html`), 로봇 84/84(`qa/report.json`), 빌드 `dist/kitty-queens.zip`(2.97MB) + Pages 복사본 `docs/catdoku-playables/`, 커버 3종, `CREDITS.md`, **Playgama 게임 생성·폼·아카이브(빌드 체크 PASSED, Bridge 2.4.0 FOUND)·커버 3종 업로드 완료**. 런치 단계: archive ✅ bridge ✅ covers ✅ · form BLOCKED(NO_CERTIFICATION → QA 툴 인증은 Codex) · **sandbox TODO(publish_sandbox, 사용자 yes 필요)** · traffic BLOCKED(샌드박스 뒤, 사용자 결정).
- 진행 중이던 것: 없음.
- 다음 할 일: ⑨ 사용자 yes 가 오면 `publish_sandbox`(앱 id `cmw5rj3x202syno0hy56lnw64`, 아카이브 **v1.4.3 `cmw6p1m5a0pxdno0h6t6llzd1`**) → `get_sandbox_share` 로 링크 받아 게시판·handoff 에 기록 → `playgama-bridge-config.json` 의 `social.shares[0].url` 에 샌드박스 주소 넣고 재빌드·재업로드(v1.0.1) → 사용자 폰 체감 피드백(첫 판 온보딩·그림 고양이) 받아 반영 → 샌드박스 목표(콘솔 카드: Puzzle/sudoku 카테고리 목표치, Codex 가 읽어 적음) → QA 툴 인증(Codex) → Submit(사용자 클릭). 트래픽 부스트는 사용자 결정 뒤에만.
- 사용자 대기: **샌드박스 게시 yes/no** (호랑이 그림은 11-08 "괜찮아" 확인).
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
- 2026-11-08 (스크린샷: 레벨 5, v1.4.1 화면 "No room left in the pink area" — 오른쪽 진분홍(자주) 세로 구역이 전부 ✕인데, 사용자 눈엔 아래쪽 연분홍 구역에 고양이가 있으니) "아니 이것도 뭐 잘못된 게 아니잖아" → **v1.4.3**: 원인 ① 색 이름 — 팔레트의 `#c4608c` 를 'pink' 라 불렀는데 판에는 'light pink'(`#f2a0bf`) 도 있어 다른 구역을 가리킴 ② v1.4.1 의 빨간 틴트가 자주색 위에서는 거의 안 보여 어느 구역인지 알 수 없었음. → 문구에서 **색 이름을 아예 뺌**(`COLOR_NAMES` 삭제). 바랜 칸이 곧 포인터: "**The faded color area is all crossed out**, but every color needs a cat. Pick up a cat and try another spot." (행/열은 faded row/column). 바램을 55→66% 로 올려 자주·연분홍·노랑 어디서든 띄게. 로봇 99/99(문구에 색 이름 없음 검사). 게임 판단 자체는 맞았음(그 구역에 고양이 자리 0).
  - 교훈: **색을 이름으로 부르지 않는다.** 팔레트 9색 중 비슷한 색이 둘이면 반드시 엇갈린다. 화면에서 가리켜야(바램·링·틴트) 한다.
- 2026-11-08 (스크린샷: 레벨 4, 3마리 놓은 뒤 세로줄 하나가 전부 ✕인데 빨간 박스 "No room left in this column") "이건 또 왜 나온 건지 모르겠네.." → **v1.4.2**: 문제는 메시지 내용보다 **모양**이었다 — 합법인 수를 뒀는데 빨간 테두리 박스 + 그 줄이 거무스름하게 틴트되니 '내가 뭘 잘못했지?'로 읽힘. ① 빨간 틴트 삭제, 그 줄의 칸을 **하얗게 바래고 ✕를 진한 갈색으로**(한 번만 살짝 커졌다 작아짐, Calm 은 정지) → '✕로 꽉 찼다'가 바로 보임. ② 박스를 빨강(오류)에서 **호박색(팁)**으로, 글자는 본문색. ③ 문구를 화면에 보이는 것과 규칙으로: "**Every cell in this column is crossed out**, but each column needs a cat. Pick up a cat and try another spot." (행/색도 같은 꼴). 로봇 99/99. 스크린샷 `qa/phone-390x844-stuck.png`.
- 2026-11-08 (스크린샷: 레벨 4, 규칙은 하나도 안 어긴 고양이가 화난 얼굴) "아니 저게 왜 안 되는 거야. 호랑이 느낌은 괜찮아" → 이어서 "아니 정답이 아닐 때 안 된다고 뜨는 게 아니라, 한 줄에 하나가 아니거나 붙어 있는 어딘가에 고양이가 있을 때 뜨게 하라고. 버그 안 된다는 게" → **v1.4.1**: 숨은 정답과 비교해 고양이를 '틀렸다'(화난 얼굴·빨간 테두리)고 찍던 로직을 **전부 삭제**. '안 됨' 표시(빨간 플래시·화난 고양이·이유 오버레이)는 **눈에 보이는 규칙 위반(줄에 둘·색에 둘·붙음)에만**. 막다른 길은 사실만: 자리 없는 행/열/색을 빨갛게 틴트 + "No room left in this row for a cat. Tap a cat to pick it up and try another spot." (어느 고양이를 들지는 플레이어 몫 — Queens 류 모두 그렇다). 호랑이 그림은 OK 확인. 로봇 99/99(막다른 길에서 화난 얼굴 0·테두리 0 검사 추가).
  - 교훈: **숨은 정답으로 '틀렸다'고 알려 주면 플레이어는 버그로 본다.** 규칙상 합법인 수는 절대 틀렸다고 표시하지 않는다. 보여 줄 수 있는 건 '보이는 사실'(이 줄에 자리가 없다)까지.
- 2026-11-07 "뭐야 왜 안 된다는 건지 모르겠네 되는 게 맞는 거 같은데. 뭐 누르면 왜 안 되는 건지 추가 설명 볼 수 있게 해볼까 근데 직관적으로" → **v1.4.0 '왜 안 되는지' 판 위에**: 막힌 탭이 나오면 그 규칙이 덮는 칸 전부를 빨갛게 틴트(행 전체 / 열 전체 / 같은 색 구역 전체 / 막는 고양이 둘레 3×3), 막는 고양이는 빨간 링, 내가 누른 칸은 점선 테두리, 판 아래 한 줄("**Too close.** The ringed cat already owns every cell around it, corners included." / "**This row already has a cat** (the ringed one). One cat per row." 등). 다음 탭이나 6초 뒤에 사라짐. 첫 판(튜토리얼) 토스트는 "No heart lost on this first level. The red cells below show why that spot is blocked." 로 줄여 같은 말 두 번 안 하게. 로봇 98/98(틀린 탭 뒤 오버레이 켜짐·다음 탭에 꺼짐 확인). 스크린샷 `qa/phone-390x844-why.png`. 아카이브 v1.4.0 `cmw6n1bqq0n1vmt0h6egrtv0d`.
- 2026-11-07 "그냥 고양이 자리 눌러서 undo 하라는게 낫지않겟냐" → **v1.3.3**: 버튼·긴 문구 삭제. 막히면 틀린 고양이만 화난 얼굴+빨간 테두리, 판 아래 한 줄 "Tap the grumpy cat to pick it up." 끝. (막힌 줄 점선도 삭제.) 로봇 96/96(화난 고양이를 실제로 탭해서 걷어내는 것 확인).
- 2026-11-07 (막힘 화면 캡처와 함께) "이거 뜨면 바로 질리기부터 해 어쩌라는건지" → **v1.3.2**: 막혔을 때 **틀린 자리의 고양이를 화난 얼굴 + 빨간 테두리로 바로 표시**(정답 자리와 비교), 문구 "Row 5 has no free spot left. The 2 grumpy cats are in the wrong spots. Tap them to pick them up, or:" + 버튼 **"Pick up the 2 grumpy cats"** 한 번으로 틀린 고양이만 걷어냄(맞는 고양이는 남김). 막힌 줄 점선은 연하게. 로봇 96/96.
- 2026-11-07 (Mole Mash 건) "두더지에서 신기록갱신되면 알려주는뭔가 있음 좋겠고 그리고 끝나서 광고보고다시보기할때 자동으로 삼이일하면서 시작그거 아직도안돼ㅠ 일시정지 눌렀다가 다시하기해야지돼" → Mole Mash v1.8.0 (이 세션이 대신 수정, `board/_shared.md` 에 기록): ①freeze watchdog(플랫폼 pause/hidden 이 안 풀린 채 남으면 실제 상태를 다시 읽어 해제) ②라운드 중 기록 돌파 시 'NEW BEST! past N, keep going' + HUD 'NEW BEST!' + 효과음. 원인 추정: 광고가 닫힌 뒤 Bridge 의 PAUSE_STATE_CHANGED(false) 가 안 오거나 순서가 꼬여 `reasons.paused` 가 남음 → 일시정지/재개 때 `level_resumed` 메시지로 플랫폼이 다시 풀어 준 것으로 보임. 텔레메트리(session facts)는 이벤트 순서를 안 주어 확정 못 함 → `pause_state`·`freeze_fixed` 이벤트로 다음에 확인.
- 2026-11-07 "누를때 없을때 어쩌라는건지 몰라함" → **v1.3.1 막힘 안내**: 고양이를 규칙엔 안 걸리지만 틀린 자리에 놓아 어느 행·열·색 구역에 빈칸이 하나도 안 남으면, 그 줄/구역에 빨간 점선 테두리 + 판 아래에 "Row 3 has no free spot left. One of your cats is in the wrong place. Tap a cat to pick it up, or undo the last one." + **Undo last cat** 버튼(마지막에 놓은 고양이부터 되돌림). 하트는 안 깎임. 로봇 97/97(레벨 8에서 막힘 상황을 실제로 만들어 검사). (해석: "누를 데가 없을 때" — 다른 뜻이면 다시 확인.)
- 2026-11-07 사진 16장 + "고양이 이름은 호랑이. 추천대로" → **v1.3.0 호랑이 기본**: 사진에서 읽은 특징(연한 복숭아빛 주황 털, 진한 주황 줄무늬 — 이마 M·뺨 줄, 연두색 눈, 분홍 코, 코 주변 밝은 털, 흰 수염, 통통한 볼)을 같은 그림체(굵은 외곽선 벡터)로 옮겨 `s-h-cat`(얼굴)·`s-h-sleep`(조는 얼굴)·`s-h-mad`(화난 얼굴) 세 벌 + 타이틀 눈 깜빡임 버전. 타이틀 "Starring Horangi" 버튼·일시정지 "Cat: Horangi" 로 주황이(Classic)와 전환, 설정 저장. 문구에 이름("Horangi rules out the row…", "Horangi found a spot", "Every Horangi is home"). 참고 얼굴 1장만 `art/ref/`(사람·집 없음, 빌드 제외). Playgama 설명·story 에 "my own orange tabby Horangi" 추가. 로봇 94/94. 커버 3종 호랑이로 교체. 아카이브 v1.3.0 `cmw6jst5l0limno0hpipma62q` PASSED → v1.3.1 `cmw6ldfxr0lgmmt0hv8vxqpv0` → v1.3.2 `cmw6lvcd60lvwmt0hc7rcj2mi` → v1.3.3 `cmw6m791y0m95mt0hvhng5hja`(화난 고양이 + 한 줄) → v1.4.0 `cmw6n1bqq0n1vmt0h6egrtv0d`(왜 안 되는지 판 위에) → v1.4.1 `cmw6oe8vy0pbsno0hxfoam1g2`(정답 기준 틀림 표시 삭제) → v1.4.2 `cmw6otgq10oa0mt0hv1ill8kl`(막다른 길 = 호박색 팁) → **v1.4.3 `cmw6p1m5a0pxdno0h6t6llzd1`(색 이름 삭제) 최신.**
- 2026-11-07 "고양이 모양을 우리 고양이 사진 주면 활용해서 할 수 있나? 해도 되나? / 애니메이션은 옵션으로 메뉴에 넣고 켜고 끄게?" → 애니메이션 옵션은 v1.2.0 에 이미 있음(타이틀·일시정지 `Effects: Calm/Lively`). 고양이: 가능·허용(본인 고양이 = 저작권 문제 없음, Playgama 4.2.1 OK). 사진을 그대로 쓰면 작은 칸에서 안 읽히고 벡터 결과 어긋나므로 **사진을 보고 같은 결로 그린다**. 사진·이름 대기.
- 2026-11-07 "효과 때문에 눈이 계속 아프다. 그냥 빼고 막 빨리빨리 눌리고 되는 뭐 그런 게 나으려나?" → **v1.2.0 Calm 기본**: 분홍 물결·폭죽·판 흔들림·고양이 무한 바운스·타이틀 둥실·판 등장 애니 전부 꺼짐(기본). 남긴 것 = 탭 즉시 반응(고양이 팝 0.16초), 틀린 칸 화난 고양이(0.45초)+이유 글자+연한 빨강, 완료 시 고양이 한 번 깡충+SOLVED 글자(작게), 결과 창 0.7초 뒤. 타이틀·일시정지에 **Effects: Calm / Lively** 스위치(Bridge storage 저장) — 원하는 사람만 켬. 로봇 90/90.
- 2026-11-07 "효과 눈쫌 아파 그리고 전체보이게할때 밑으로 스크롤해서 쭉 냐릴수있게해주라" → **v1.1.1**: ①효과 전부 연하게 — 분홍 물결 불투명도 0.92→0.55·색 #fbd3d3·1초로 느리게, ✕ 회전 제거, 폭죽 250조각→약 120조각·흰색 제거·낙하 느리게·투명 0.9, 고양이 바운스 -9%→-6%, SOLVED 36→29px, 하트 흔들림·타이틀 둥실 줄임 ②"All levels" 는 페이지 넘기기(Previous/Next) 삭제 → **500판을 한 줄 목록으로 쭉 스크롤**(크기별 소제목 5×5/6×6/…, 열면 다음 레벨이 보이는 위치로 자동 스크롤, 브라우저 스크롤 아님 — 게임 안 영역만 스크롤이라 Playgama 1.6.3 OK). 로봇 86/86.
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
- **(기획 파트너·Mole Mash 세션에게) 사용자 질문 11-07: "두더지에서 상위 1~5등에게 누가 더 올라가면 알림해 줄 수 있나? 다시 돌아오게 하는 요소가 부족한 것 같다. 유튜브는 그런 거 없나."** Bridge 문서로 확인한 사실(2026-11-07):
  - 푸시 알림(`notifications` 모듈)은 **MSN 1개 플랫폼만 지원**, Playgama·YouTube 는 `isSupported=false`. 게임이 외부 푸시 서비스를 쓰는 것도 규칙(1.2.1/1.2.4/1.2.5, YouTube "외부 호출 0")에 걸림 → **"넘어갔다" 푸시는 지금 길에선 불가**.
  - 리더보드: YouTube 는 `native`(플랫폼이 그려 주고 `getEntries` 못 읽음, `isMain` 1개만 제출) → 게임 안에서 남 점수를 읽을 수도 없음. Playgama 는 SaaS 리더보드(`in_game`, Mole Mash 가 이미 사용)라 읽을 수 있음.
  - **할 수 있는 것(돌아왔을 때 자극)**: ①Playgama 판에서 마지막 등수를 Bridge storage 에 저장해 두고 다음 접속 때 `getEntries` 로 비교 → "지난번 3등이었는데 지금 5등. 00:47 을 넘기면 복귀" 카드 + 바로 시작 버튼 ②Bridge `dailyRewards`(연속 출석 Bridge 가 집계)로 매일 올 이유 ③날짜 시드 데일리(Kitty Queens 처럼 "오늘의 판")를 Mole Mash 에도 — "오늘의 두더지 판" 랭킹은 매일 리셋되니 1~5등이 매일 새로 생김 ④공유 문구에 내 등수 넣기(친구가 넘으면 그 친구가 알려 주는 구조). 푸시 대신 "다시 왔을 때 첫 화면"에 돈을 쓰는 게 맞다.
  - 결정은 기획 파트너가. Mole Mash 코드는 이 세션이 건드리지 않음.
- 카탈로그의 'CatDoku' 와 4.2.2 충돌 시 대응(이름 유지? 'Kitty Queens' 만?) — 모더레이션 답을 보고 결정.

## 사용자 피드백 (11-08)
- 폰 캡처(레벨 5, 6×6, 5/6, 맨 윗줄 전부 ✕로 흐려짐 + "The faded row is all crossed out, but every row needs a cat. Pick up a cat and try another spot.") + 원문: **"아 이것도 이상한데. 그냥 시중에 있는 스도쿠들 어떻게 하는지 보고 그 정도로 그냥 하자."**
- 해석: 자동 ✕가 판을 뒤덮고, 막다른 길마다 긴 안내문이 뜨는 게 "이상하다". 10-03 피드백("너무 요란하게 안 된다고 하는데")과 같은 결. → **시중 표준(LinkedIn Queens / Star Battle / Meowdoku 류)대로 단순하게.** 샌드박스 게시는 이 수정 뒤 사용자 재확인 후.

