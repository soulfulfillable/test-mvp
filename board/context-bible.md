# 맥락 성경 동반자 (가칭) — 개발 세션 게시판

## 🔁 이어받기
- 마지막 저장: 2026-11-04 (개발 세션) · 작업 브랜치: `claude/context-bible` (main 에 반영됨)
- 방금 끝낸 것: **웹 시제품 v1** https://soulfulfillable.github.io/test-mvp/context-bible/index.html — 요 1:43-51, 표시 3개(46·47·51), 5단계 펼침, 연결 본문 바로 펼치기(같은 문구 파란 하이라이트), "Heard it in a sermon?" 예시 3개. 로봇 367/367·콘솔 에러 0(`docs/context-bible/qa/robot-result.txt`), 내용 검수 `context_bible/REVIEW.md`. Codex 검토 4건 반영.
- 진행 중이던 것: 없음 (사용자 피드백 대기)
- 다음 할 일:
  1. 사용자 답 2개 받기 — ①혼자 읽었으면 놓쳤을 걸 발견했나 ②어디까지 본문/해석인지 구분됐나
  2. 답에 따라: 설명 문장을 더 쉽게(사용자 핵심 = 쉬운 설명+근거, 등급 자체 아님) / 등급 표시 줄이기·이름 바꾸기
  3. 출시 전 필수: 사람(신학 배경) 검수, 견해 두 개씩을 실제 주석 위치와 연결하거나 '읽기'로 유지 결정
  4. 그다음 후보(사용자 OK 시): 두 번째 단락 하나 더(같은 JSON 형식) → 영어권 지인 5~10명 검증 → iOS(Flutter) 전환
- 사용자 대기: 질문 2개 답
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/context-bible.md 와 plans/context-bible.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. 범위 밖(피드·결제·제출·자동 생성)은 하지 말 것.`

## 지금 상태
- 콘텐츠 수정은 `context_bible/content/*.json` → `python3 context_bible/build.py`(본문·하이라이트·금지어 검사 후 `docs/context-bible/data.json` 생성) → `node context_bible/robot.js`.
- 본문은 손으로 치지 않는다: `context_bible/sources/texts.json`(스크립트 추출). 원어 대조 기록 `sources/original-language.md`.

## 사용자 피드백 기록
- 11-04 "지금은 맥락 이해하는 거 먼저 제대로 만들고 나중에 숏폼처럼 넘겨 보는 것도 넣을 수 있게" / "하고 있대 그래서?" → MVP 구현 시작.
- 11-04 Codex 검토(사용자 요청): 창 27:35 화자 오류, 기억 의존 원어를 사실로 표시, 견해-출처 미연결 책 목록, 설교 판정 말투 → 전부 반영. "사용자 요구의 핵심은 쉽게 이해되는 설명과 근거이지 등급 자체가 아니다."

## 다른 세션에 알리는 노하우
- 성경 본문·원문 공개 파일은 raw.githubusercontent 로 받힌다(bible-api.com 등은 막힘). 경로는 PLAYBOOK 6장 11-04.
