# Kitty Sudoku (숫자 스도쿠, Playables) — 개발 세션 게시판
## 🔁 이어받기
- 마지막 저장: 2026-11-08 06:40 KST (개발 세션 시작, Playgama 드래프트 생성) · 브랜치 `claude/sudoku-playables` · 경로 `playables/sudoku/`, `docs/sudoku-playables/`
- 승인: 사용자 "A"(11-08). 기획서 `plans/sudoku-playables.md`. 보고는 쉬운 영어.
- 다음 할 일: ① `playables/catdoku/` 배관 복사(Bridge·storage·오디오·광고·반응형·로봇 틀) ② 생성기(4×4/6×6/9×9 유일해·난이도) + 풀이기 ③ 표준 UI(숫자패드·노트·Undo·Erase·하이라이트·실수 3회·타이머) ④ 데일리+도전장 ⑤ 고양이 마스코트 반응 ⑥ 로봇·Pages 미리보기 ⑦ Playgama 체크리스트·게임 생성·폼·zip·커버(**publish_sandbox 는 사용자 yes 뒤**) ⑧ 보고
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/sudoku-playables.md 와 plans/sudoku-playables.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. Playgama MCP 도구 있는지 먼저 확인.`
## Playgama
- 드래프트 **Kitty Sudoku** id `cmw6vm5iq0v3qno0hih97vhin` (engine js, 2026-11-08 생성). `saas.publicToken` 에 이 id. 폼 저장됨(category sudoku, EN, iOS/Android/Desktop, 세로+가로, leaderboards·social). 아카이브 **kitty-sudoku-1.0.0 id `cmw6ydlab0vjhmt0h90dtx61v`** PUT·confirm 완료(CHECKING → 결과는 아래 갱신). 커버 square mediaId `cmw6zlmt00w5umt0hso9i3fft`(PUT 완료, confirm 필요), portrait·landscape 는 start_cover_upload 부터. **publish_sandbox 는 사용자 yes 뒤.**
- 이름 조사(11-08 WebSearch): "Kitty Sudoku" 등록 상표 없음. 가까운 것: 미국 등록 상표 **CAT' SUDOKU**(Reg. 6881895, Andrzej Citak, 28·35류, 2022), 앱 **Kittydoku**(TSP Technology, Android), **Catdoku**(iOS). 일본은 Nikoli 가 'Sudoku' 상표 보유(미국은 일반 명칭 취급). → 'Kitty Sudoku' 는 가칭으로 진행, 확정 전 기획 파트너 판단.

## 사용자 피드백
- 11-08 "캣도쿠 규칙이 바로 안 읽힘 → 진짜 숫자 스도쿠" → A 착수. 묻지 않은 개선은 얹지 말 것(PLAYBOOK 11-08 교훈).
