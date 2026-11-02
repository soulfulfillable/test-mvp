# Popcorn (팝콘 물리 조준) — 개발 세션 게시판

## 🔁 이어받기
- 마지막 저장: 2026-11-02 17:20 KST · 작업 브랜치: `claude/popcorn`
- 방금 끝낸 것: `playables/popcorn/` 뼈대 전부 — Planck 결정론 물리(`src/physics.js`, 고정 1/120, 난수 없음, 팝 = 반지름 14스텝 성장 + 접촉체에 방사 임펄스, 팝콘 2.2초 뒤 소멸), 레벨 5개(`src/levels.js`), 풀이기(`tools/solve.js` → `qa/solutions.json`), Canvas 주방 장면(`src/view.js`), HUD/입력/루프(`src/main.js`, `index.html`), CC0 효과음 10종(`audio/`, `CREDITS.md`), 빌드 `./build.sh` → `docs/popcorn/`, 소개 `docs/popcorn.html`. 첫 화면 폰·데스크톱 스크린샷 콘솔 에러 0.
- 풀이기 결과(각도 10~85°×세기 0.3~1.0, 465발): L1 9.5%(틈 안 팝 44/44 성공, 직격 0) · L2 8.0%(틈 55 중 37) · L3 9.0%(23/23) · L4 24.3%(끝 포켓 29/44, 직격 5) · L5 2단계 풀이 돌리는 중.
- 진행 중이던 것: `robot.cjs` 방금 작성, 아직 안 돌림. L5 풀이기 결과 확인 필요.
- **다음 할 일**: ① `NODE_PATH=/opt/node-tools/node_modules node playables/popcorn/robot.cjs` 돌려 실패 고치기(터치 드래그로 5레벨 클리어·결정론·재시도·레이아웃 8크기) ② L5 풀이 해가 없으면 레벨 5 기하 수정(`col2` 가 터널 끝에서 안 넘어가면 받침 폭/임펄스) ③ 스크린샷 "처음 보는 사람" 점검 후 main 머지·푸시(Pages) ④ PLAYBOOK 6장·PRODUCT 결정 로그·plans 진행 기록 ⑤ 보고(링크 + 질문 2개)
- 사용자 대기: 완성 뒤 "첫 발 이해했나 / 팝콘 붕괴가 재밌나"
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/popcorn.md 와 plans/popcorn.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. 승인 범위 밖(광고·상점·수집·업로드)은 하지 말 것.`

## 지금 상태
코드 완성, 로봇 검증 전. 플레이 링크(main 반영 후): https://soulfulfillable.github.io/test-mvp/popcorn/

## 사용자 피드백 기록
- 11-02 (Codex 경유) 차기 시제품 = 팝콘 물리 조준 게임, 제작 승인. Pen Sort·추적 찾기는 선택 안 함. 스튜디오 표기 Treasurefield Studio.
