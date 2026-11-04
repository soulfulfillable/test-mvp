# 맥락 성경 동반자 (가칭) — 개발 세션 게시판

## 🔁 이어받기
- 마지막 저장: 2026-11-04 (개발 세션) · 작업 브랜치: `claude/context-bible` (main 반영)
- 방금 끝낸 것: **요 1:51 리뷰 초안 1개(첫 화면 질문)** — 켈러 "You Shall See Heaven Open"(2009-12-20, 요 1:43-51) 근거. 공식 페이지는 Codex 가 읽음, 제3자 녹취 PDF 는 Codex·이 세션 둘 다 읽음(02:26–05:05 야곱의 꿈, 09:07–11:31 예수 자신이 하늘과 땅의 연결). **공식 오디오와 타임스탬프 대조는 아직** → 상태 "transcript read, audio not verified", 최종 아님. 46·47 은 계속 보류(46: 같은 녹취 11:31–12:52 에서 켈러는 '하찮은 시골 마을 경멸'로 읽음, 베들레헴 예언 인식 아님 — 아직 화면에 안 씀). 핵심 목표는 1개만 초안, 나머지 미완. 로봇 91/91.
- 진행 중이던 것: 없음
- 다음 할 일:
  0. **Codex 가 아래 '🖱️ Codex 에게' 를 열어 켈러 원문 대목을 리포에 적어 주면** → 그 대목 범위 안에서만 46(그리고 근거가 있으면 47·51) 해설 재작성, View sources 에 설교 제목·URL·타임스탬프
  1. 사용자 답 2개: "설명이 쉬웠나 / 근거 보기로 충분히 확인됐나"
  2. 막힌 사이트가 열리는 환경이면 Westcott *St John*·NET 노트로 47절 야곱 연결 재확인
  3. 답에 따라 `easy` 문장 다듬기(JSON 만 고치고 `python3 context_bible/build.py` → `node context_bible/robot.js`)
  3. 출시 전 필수: 사람(신학 배경) 검수. 견해 문장은 주석 위치를 대조해 붙이거나 지금처럼 'some readers' 수준 유지
  4. 사용자 OK 시 두 번째 단락(같은 JSON 형식) → 영어권 지인 검증 → iOS 전환
- 사용자 대기: 질문 2개 답
- 공유 표현: "초기 미리보기" (완성 iOS 앱·신학 전문가 검수 완료 아님)
- 이어받기 문장: `soulfulfillable/test-mvp 의 board/context-bible.md 와 plans/context-bible.md 를 읽고 "다음 할 일"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로. 범위 밖(피드·결제·제출·자동 생성)은 하지 말 것.`

## 🖱️ Codex 에게 (브라우저 작업) — 켈러 원자료 (2026-11-04 갱신)
**A0. 요 1:51 오디오 대조 (최우선)**
- URL: https://gospelinlife.com/sermon/you-shall-see-heaven-open/
- 할 것: Play Audio 로 **02:26–05:05**(야곱의 꿈)과 **09:07–11:31**("heaven and earth intersect upon me" — 예수 자신이 연결)이 실제 오디오의 그 시각에 있는지 확인, 어긋나면 실제 시각 기록. 11:31–12:52(나사렛) 도 확인
- 확인할 결과: `context_bible/sources/keller.md` 의 상태를 "transcript read, audio verified (YYYY-MM-DD)" 로 바꾸고 실제 시각 기록

**A. "Nazareth?!" 요 1:46 대목**
- URL: https://gospelinlife.com/sermon/nazareth/
- 로그인 계정: 필요 없음. 결제 요구 시 멈추고 사용자에게 알림(구매 금지)
- 할 것: ① "Download Audio" 를 누르면 나오는 **약관(agreement) 문구**를 읽고 요점 2줄 기록(개인 청취 한정인지, 인용·요약 허용 여부) ② Download Audio 링크의 실제 주소(마우스 오른쪽 → 링크 주소 복사) 기록 ③ Play Audio 로 00:00–20:33 을 듣고, 켈러가 "Can anything good come out of Nazareth?"(요 1:46)을 다루는 **구간 타임스탬프(시작–끝)** 와 그 구간에서 하는 말을 **자기 말로 2–3줄 요약**(원문 길게 받아 적기 금지) ④ 화면에 보이는 설교 날짜를 다시 확인
- 준비된 파일: `context_bible/sources/keller.md`(빈칸을 채우면 됨)
- 확인할 결과: keller.md 의 "Timestamp range" 와 "own-words summary" 가 채워지고 main 에 푸시됨(또는 이 게시판에 붙여 넣기)

**B. 요 1:47·1:51 켈러 설교 찾기**
- URL: https://gospelinlife.com/sermons/ (사이트 검색)
- 할 것: "John 1:47", "John 1:51", "Nathanael", "Jacob's ladder", "Son of Man" 를 각각 검색해 나온 **설교 제목·날짜·성경 범위·정확한 URL** 목록 작성(내용은 아직 안 들어도 됨)
- 확인할 결과: keller.md 의 "John 1:47, 1:51" 칸에 URL 목록. 없으면 "검색어별 결과 없음"이라고 기록

## 지금 상태
- 콘텐츠 수정은 `context_bible/content/*.json` → `python3 context_bible/build.py`(본문·하이라이트·금지어 검사 후 `docs/context-bible/data.json` 생성) → `node context_bible/robot.js`.
- 본문은 손으로 치지 않는다: `context_bible/sources/texts.json`(스크립트 추출). 원어 대조 기록 `sources/original-language.md`.

## 사용자 피드백 기록
- 11-04 "지금 만든 거 간단하게 줄여줘. 구절 누르면 쉬운 설명 하나 나오고 더 궁금하면 근거 보기만 있게" → 단순화 반영.
- 11-04 "지금은 맥락 이해하는 거 먼저 제대로 만들고 나중에 숏폼처럼 넘겨 보는 것도 넣을 수 있게" / "하고 있대 그래서?" → MVP 구현 시작.
- 11-04 Codex 검토(사용자 요청): 창 27:35 화자 오류, 기억 의존 원어를 사실로 표시, 견해-출처 미연결 책 목록, 설교 판정 말투 → 전부 반영. "사용자 요구의 핵심은 쉽게 이해되는 설명과 근거이지 등급 자체가 아니다."

## 다른 세션에 알리는 노하우
- 성경 본문·원문 공개 파일은 raw.githubusercontent 로 받힌다(bible-api.com 등은 막힘). 경로는 PLAYBOOK 6장 11-04.
