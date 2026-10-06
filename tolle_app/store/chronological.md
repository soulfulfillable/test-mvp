# 연대순(Chronological) 읽기 순서 — 근거

앱의 연대순 계획(`tolle_app/flutter/lib/core/plan.dart` 의 `_chrono`)은 **장 묶음 단위 근사**다.
장을 쪼개지 않는다(체크 칸이 장 단위라서). 1,189장이 정확히 한 번씩 들어가는지는 `test/plan_test.dart` 가 확인한다.

## 따른 큰 흐름 (공개 자료)
- Blue Letter Bible 1년 연대순 — 장 단위, Gen 8–11 다음 Job, 사무엘서 사이에 시편: https://www.blueletterbible.org/assets/pdf/dbrp/1Yr_ChronologicalPlan.pdf
- 66권 연대순 개요(욥기는 창 11 뒤, 서신서는 사도행전 안): https://www.biblestudytools.com/bible-study/topical-studies/what-is-the-chronological-order-of-the-66-books-of-the-bible.html · https://www.gotquestions.org/chronological-Bible.html
- 그 밖에 참고: https://www.biblestudytools.com/bible-reading-plan/chronological.html

## 우리 순서 (요약)
창 1–11 → 욥 → 창 12–50 → 출·레·민·신 → 시 90(모세) → 수·삿·룻 → 삼상 → 대상 1–10 → 삼하 1–4 → 시 1–41 →
삼하 5–10 · 대상 11–19 → 시 42–72 → 삼하 11–24 · 대상 20–29 → 시 73–89 → 왕상 1–11 · 대하 1–9 → 잠·전·아 →
왕상 12–22 · 대하 10–20 → 옵 → 왕하 1–14 · 대하 21–25 → 욜·욘·암·호 → 왕하 15–16 · 대하 26–28 · 사 1–39 · 미 →
왕하 17–20 · 대하 29–32 → 시 91–106 → 사 40–66 → 왕하 21–23 · 대하 33–35 · 나·습·합 → 렘 · 왕하 24–25 · 대하 36 · 애 →
겔 · 단 → 스 1–6 · 학 · 슥 · 에 · 스 7–10 → 시 107–150 → 느 · 말 →
눅 · 마 · 막 · 요 → 행 1–14 · 약 · 갈 → 행 15–18 · 살전후 → 행 19 · 고전후 · 롬 → 행 20–28 → 엡·빌·골·몬 →
딤전 · 딛 · 벧전 · 히 · 딤후 · 벧후 · 유 · 요일이삼 · 계

## 단순화한 곳 (앱 안 설명에도 "roughly" 로 적음)
- 복음서는 서로 섞지 않고 책 단위(누가 → 마태 → 마가 → 요한).
- 시편은 다윗 생애 옆에 '권(Book I~V)' 단위로 끼움 — 편마다 배경을 맞추지는 않음.
- 선지서 연대(요엘·오바댜 등)는 학설이 갈리는 곳이라 전통적 배치를 따름.
