# 맥락 성경 동반자 (가칭) — 개발 세션 게시판

## 🔁 이어받기
- 마지막 저장: 2026-11-04 (개발 세션) · 작업 브랜치: `claude/context-bible` (main 반영)
- 방금 끝낸 것: **첫 화면 = 질문 하나**("Why did Nathanael ask if anything good could come from Nazareth?" + 45-46절 → See why → 쉬운 설명 → View sources), 나머지 47·51 은 본문에서 탭. 설명 3개를 **실제로 열어 읽은 초기 주석**(Chrysostom·Augustine·Cyril·Aquinas, HistoricalChristianFaith DB)으로 다시 다듬고 출처(저자·자료·위치·링크)를 View sources 에. 47절 원인 단정 삭제, 야곱-속임은 "one possible reading". 로봇 88/88(실제 터치, 390 라이트·다크 + 데스크톱).
- 막힌 자료: biblehub·studylight·ccel·netbible·archive.org·sacred-texts·biblestudytools·wikisource·gutenberg·bible.helloao.org 접속 거부 → Westcott·Ellicott·JFB·Meyer·NET 노트는 못 열어서 근거로 안 씀(`context_bible/sources/commentaries.md`). github.com clone·raw.githubusercontent 은 됨.
- 진행 중이던 것: 없음
- 다음 할 일:
  1. 사용자 답 2개: "설명이 쉬웠나 / 근거 보기로 충분히 확인됐나"
  2. 막힌 사이트가 열리는 환경이면 Westcott *St John*·NET 노트로 47절 야곱 연결 재확인
  3. 답에 따라 `easy` 문장 다듬기(JSON 만 고치고 `python3 context_bible/build.py` → `node context_bible/robot.js`)
  3. 출시 전 필수: 사람(신학 배경) 검수. 견해 문장은 주석 위치를 대조해 붙이거나 지금처럼 'some readers' 수준 유지
  4. 사용자 OK 시 두 번째 단락(같은 JSON 형식) → 영어권 지인 검증 → iOS 전환
- 사용자 대기: 질문 2개 답
- 공유 표현: "초기 미리보기" (완성 iOS 앱·신학 전문가 검수 완료 아님)
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/context-bible.md 와 plans/context-bible.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. 범위 밖(피드·결제·제출·자동 생성)은 하지 말 것.`

## 지금 상태
- 콘텐츠 수정은 `context_bible/content/*.json` → `python3 context_bible/build.py`(본문·하이라이트·금지어 검사 후 `docs/context-bible/data.json` 생성) → `node context_bible/robot.js`.
- 본문은 손으로 치지 않는다: `context_bible/sources/texts.json`(스크립트 추출). 원어 대조 기록 `sources/original-language.md`.

## 사용자 피드백 기록
- 11-04 "지금 만든 거 간단하게 줄여줘. 구절 누르면 쉬운 설명 하나 나오고 더 궁금하면 근거 보기만 있게" → 단순화 반영.
- 11-04 "지금은 맥락 이해하는 거 먼저 제대로 만들고 나중에 숏폼처럼 넘겨 보는 것도 넣을 수 있게" / "하고 있대 그래서?" → MVP 구현 시작.
- 11-04 Codex 검토(사용자 요청): 창 27:35 화자 오류, 기억 의존 원어를 사실로 표시, 견해-출처 미연결 책 목록, 설교 판정 말투 → 전부 반영. "사용자 요구의 핵심은 쉽게 이해되는 설명과 근거이지 등급 자체가 아니다."

## 다른 세션에 알리는 노하우
- 성경 본문·원문 공개 파일은 raw.githubusercontent 로 받힌다(bible-api.com 등은 막힘). 경로는 PLAYBOOK 6장 11-04.
