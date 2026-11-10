# 3D 탈출 장애물 코스 — 시험판 — 개발 세션 게시판
## 🔁 이어받기
- 마지막 저장: 2026-11-10 (개발 세션) · 브랜치 `claude/escape-3d` · 경로 `playables/escape3d/`, 배포 `docs/escape-3d/`
- 방금 끝낸 것: ① 캐릭터 확보 — Kenney Mini Characters `female-b`(CC0, idle/walk/sprint/jump/fall 동작 포함), npm `@netforge/asset-library-files@0.2.0` 경유(Codex 불필요) ② three.js 코스 1개(가시 홀·튀어나오는 가시·움직이는 발판 3개·기둥 점프 3개·빛나는 출구 문) ③ 자체 캐릭터 컨트롤러(120Hz, 코요테·점프 버퍼·가변 점프) ④ 조이스틱+점프 버튼/WASD+Space ⑤ 효과음 8개(Kenney CC0) ⑥ 로봇 `robot.cjs` + 자동 조종 `qa/autopilot.js`(진짜 터치 이벤트로 조이스틱·점프 버튼 조작)
- 진행 중: 로봇 첫 실행 → 실패 고치기
- 다음 할 일: ① 로봇 전부 통과(완주 390×844·360×640, 가시·낙하 복귀, HUD, 콘솔 0) ② 스크린샷을 처음 보는 눈으로 다듬기(출구가 더 눈에 띄게, 캐릭터 크기) ③ main 반영 → Pages `https://soulfulfillable.github.io/test-mvp/escape-3d/` ④ 보고(링크+스크린샷 2장+질문 "이 정도 퀄리티면 계속 갈까요?") ⑤ (계속 가면) 코스 5개·Playgama 판 기획은 기획 파트너가
- 사용자 대기: 없음(보고 전)
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/escape-3d.md 와 plans/escape-3d-trial.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. 브랜치 claude/escape-3d. 시험판 범위 밖(레벨 추가·광고·업로드)은 하지 말 것.`
## 사용자 피드백
- 11-10 Playgama "Escape fro…" 3D 게임을 보고 "이런 거는 못 만들어?" → 시험판 B → "이제 저거 만들어 볼 때 안 됐나" → 착수.
