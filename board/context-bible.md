# 맥락 성경 동반자 (가칭) — 개발 세션 게시판

## 🔁 이어받기
- 마지막 저장: 2026-11-04 (개발 세션) · 작업 브랜치: `claude/context-bible` (main 반영)
- 방금 끝낸 것: **새 출처 기준(팀 켈러 실제 설교·저술만) 적용 → 46·47·51 해설 모두 '보류'**. 이 환경에서 gospelinlife.com·timothykeller.com·YouTube·TGC 가 전부 막혀(웹 검색은 됨, 열기는 DNS 차단) 켈러 원문을 하나도 읽지 못함. 화면은 각 절마다 **본문 명시 범위 한 문단 + View sources(인용 본문만)**. 교부·아퀴나스 출처는 화면에서 빼고 `content` JSON(`heldEarlyCommentaries`)·`sources/commentaries.md` 에 보존. 이전 해설 초안은 `draftBeforeKeller` 에 보존. 로봇 88/88.
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

## 🖱️ Codex 에게 (브라우저 작업) — 켈러 원자료 확인 (2026-11-04)
- URL: https://gospelinlife.com/sermons/ → 검색 "Nazareth" (웹 검색으로 확인된 목록: **"Nazareth?!", Timothy J. Keller, Redeemer Presbyterian Church, 2010-12-25, John 1:43-46** — https://gospelinlife.com/book-of-the-bible/john/page/8 에 실려 있다고 검색 결과에 나옴). 같은 사이트에서 "Nathanael", "John 1:47", "John 1:51", "Jacob's ladder" 도 검색
- 로그인 계정: 필요 없음(무료 설교면). 유료 결제가 필요하면 멈추고 사용자에게 알림 — 구매 금지
- 할 것: ① 설교 페이지의 정확한 URL ② 원고(transcript)가 있으면 요 1:46(나사렛에서 무슨 선한 것이) 를 다루는 대목 — 문단 첫·끝 문장과 문단 위치, 없으면 오디오 타임스탬프(시작~끝)와 그 구간에서 켈러가 하는 말 2~3줄 요약(긴 원문 복사 금지) ③ 47절(간사함 없는 이스라엘 사람)·51절(천사들이 오르락내리락, 야곱의 사다리)을 다루는 켈러 설교·저서가 있으면 같은 방식으로 ④ 결과를 `context_bible/sources/keller.md` 에 적고 main 에 푸시(또는 이 게시판에 붙여 넣기)
- 준비된 파일: `context_bible/content/john1_43-51.json`(현재 보류 상태, `sourcePolicy`), `context_bible/sources/commentaries.md`(이전 교부 대조, 새 기준 출처 아님)
- 확인할 결과: keller.md 에 설교 제목·날짜·URL·위치(문단/타임스탬프)·짧은 요약이 있다. 실제로 듣거나 읽은 대목만.

## 지금 상태
- 콘텐츠 수정은 `context_bible/content/*.json` → `python3 context_bible/build.py`(본문·하이라이트·금지어 검사 후 `docs/context-bible/data.json` 생성) → `node context_bible/robot.js`.
- 본문은 손으로 치지 않는다: `context_bible/sources/texts.json`(스크립트 추출). 원어 대조 기록 `sources/original-language.md`.

## 사용자 피드백 기록
- 11-04 "지금 만든 거 간단하게 줄여줘. 구절 누르면 쉬운 설명 하나 나오고 더 궁금하면 근거 보기만 있게" → 단순화 반영.
- 11-04 "지금은 맥락 이해하는 거 먼저 제대로 만들고 나중에 숏폼처럼 넘겨 보는 것도 넣을 수 있게" / "하고 있대 그래서?" → MVP 구현 시작.
- 11-04 Codex 검토(사용자 요청): 창 27:35 화자 오류, 기억 의존 원어를 사실로 표시, 견해-출처 미연결 책 목록, 설교 판정 말투 → 전부 반영. "사용자 요구의 핵심은 쉽게 이해되는 설명과 근거이지 등급 자체가 아니다."

## 다른 세션에 알리는 노하우
- 성경 본문·원문 공개 파일은 raw.githubusercontent 로 받힌다(bible-api.com 등은 막힘). 경로는 PLAYBOOK 6장 11-04.
