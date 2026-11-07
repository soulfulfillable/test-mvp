# Catdoku → YouTube Playables 런칭 계획 (기획 파트너, 2026-11-07) — 제안, 사용자 OK 전 착수 안 함

사용자: "캣도쿠로 유튜브에 런칭하는 걸로 한번 짜볼까."

## 왜 캣도쿠가 맞나
- Meowdoku 류 고양이 스도쿠가 미국 차트 상위를 오래 유지(우리 10-05·10-12 주간 점검). YouTube Playables 에도 "생각하는 탭 퍼즐"이 상위 유형(10-31 표본: Thief Puzzle 등).
- 이미 완성·검증된 게임(`docs/catdoku.html` 36KB, 로봇 통과, 날짜 시드 유일해 퍼즐 생성기, 랭킹·도전장). 애플 쪽 Kitty Queens(500레벨 Flutter 판)와 **같은 핵심** — 플랫폼만 다르다. 애플 4.3 은 유튜브와 무관.
- Mole Mash 로 Playgama 파이프라인(Bridge SDK·storage·광고·QA 로봇·업로드·샌드박스)이 **이미 뚫려 있다** → 복사해서 쓴다.

## 유튜브에 올라가는 길 (두 갈래 — 둘 다 유지)
1. **직접(Google Playables 개발자 포털)**: 관심 신청서 제출 여부·승인 상태 **미확인**(Codex 작업으로 남아 있음 `board/playables.md`). 승인되면 공식 SDK 로 직접 인증.
2. **Playgama 경유**: 샌드박스 → 목표 도달 → 모더레이션 → 카탈로그 → 파트너 플랫폼(YouTube 포함 여부는 Playgama 폼의 배포 플랫폼 선택에서 확인). Mole Mash 와 같은 길.
→ 캣도쿠 Playgama 판을 만들면 1·2 어느 쪽이 먼저 열려도 쓸 수 있다(어댑터만 교체).

## 지금 웹 캣도쿠에서 고쳐야 하는 것 (11-01 요건 대조표 + 코드 재확인)
| 항목 | 현재 | 할 것 |
|---|---|---|
| **🐱 이모지 말**(Playgama 4.3.2 이모지 아이콘 금지) | 말·HUD 전부 이모지 | 고양이 그림(SVG/Canvas) 1세트 — Kitty Queens 아이콘 결 유지, 표시 ✕도 그림 |
| 소리 | 합성음 1종, 음악 없음 | CC0 효과음(놓기·오류·완료)·루프 BGM·음소거 — Mole Mash 음원 파이프라인 재사용 |
| 저장 | localStorage 11곳 | Bridge storage 어댑터(진행·설정·랭킹), Pages 판은 localStorage 폴백 |
| 모드 | **데일리 1판 + 연습**(레벨 없음) | **레벨 모드 추가**: 같은 생성기에 레벨 시드(5×5→9×9 점진, Flutter 판 규칙 재사용), 레벨 선택 격자. 데일리는 유지 |
| 광고 | 없음 | 전면: 판 완료/레벨 전환. 보상형(선택): 힌트 1회·하트 다 잃었을 때 이어하기 1회(2.2 규칙) |
| 온보딩 | 규칙 글 | 첫 판 5×5 를 손가락 안내로(놓기→자동 ✕ 힌트가 보이게) |
| 레이아웃 | 세로 고정 | 1:1·가로 대응(판은 정사각이라 유리) |
| 제목 | Catdoku | 스토어명 충돌(10-02 조사: Catdoku 동명 다수) → 유튜브/Playgama 표기는 **Kitty Queens: Cat Sudoku** 로 통일 추천 |

## 범위·순서 (승인 시)
1. `playables/catdoku/` 에 Playgama 판(Mole Mash 틀 복사) — 그림 말·음원·storage·광고·레벨 모드·온보딩·반응형. 웹 `docs/catdoku.html` 은 그대로.
2. 로봇: 데일리 1판 + 레벨 10개 실제 클리어(생성기 유일해 검증 포함), 1:1/세로/가로, 콘솔 0, Bridge mock.
3. Playgama: 게임 생성 → 폼(Puzzle) → zip → 커버 3종 → QA 툴(Codex) → **샌드박스 게시는 사용자 yes 뒤** → 샌드박스 목표(플레이 수·평균 시간 — Puzzle 카테고리 목표치는 콘솔 카드) → 모더레이션(사용자 클릭).
4. 병행: Google Playables 관심 신청서 상태 확인(Codex) — 승인되면 공식 SDK 어댑터.
- 예상: 1~2주(혼자). 비용 0. 광고 수익은 Playgama 시범 배분 — 기대치 낮게.
- 안 하는 것: 결제·상점(유튜브판은 무료+광고만), 새 퍼즐 규칙, 애플 제출.

## 위험
- 4.2.2(카탈로그 내 유사 게임): Playgama 카탈로그에 Queens/Star Battle 류가 있을 수 있음 → 날짜 시드 데일리 + 고양이 세계관 + 자동 ✕ 힌트 + "왜 틀렸는지" 설명이 차별점. 폼에 명시.
- Mole Mash 교훈: 샌드박스 목표(평균 플레이 5:00/Arcade)가 생각보다 높다 — 퍼즐은 한 판이 길어 유리할 수 있음.
- 사용자 10-02 체감 "어렵다" → 첫 레벨 5×5·온보딩 필수.

## 결정 대기
- A. 위 순서로 캣도쿠 Playgama/유튜브 판 착수(새 작업 세션) / B. 보류.
- 표기 이름: Kitty Queens: Cat Sudoku(추천) / Catdoku.

## 진행 기록
- 2026-11-07 (개발 세션): 1·2·3단계(샌드박스 게시 전까지) 완료. `playables/catdoku/` — 게임 본체·로봇 84/84·zip 2.97MB·커버 3종·CREDITS. Playgama 드래프트 id `cmw5rj3x202syno0hy56lnw64`(category sudoku), 아카이브 `kitty-queens-1.0.0` PASSED, 커버 등록. 미리보기 https://soulfulfillable.github.io/test-mvp/catdoku-playables/ . 남은 것: 사용자 yes → publish_sandbox → 공유 링크 → QA 툴 인증(Codex) → 샌드박스 목표 → Submit(사용자). 상세·점검표는 `board/catdoku-playables.md`.
- '와 포인트': 고양이를 놓는 순간 판 위의 ✕ 가 번지듯 깔리고(자동 힌트), 틀리면 그 자리에서 이유를 외친다 — 로봇 스크린샷 `qa/phone-390x844-tutorial-2.png`, `qa/phone-390x844-wrong.png`.
