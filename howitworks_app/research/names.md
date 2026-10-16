# 이름 조사 (2026-10-16) — 미국 App Store

데이터: Actions `How It Works ASO 조사` 실행 1 → 브랜치 `how-it-works-aso` 의 `tools/howitworks/aso/aso.md`·`aso.json`
(iTunes Search API, country=us). ⚠️ App Store 자동완성(검색 인기) 엔드포인트는 빈 값을 돌려줘 **검색량 숫자는 못 얻었다** — 아래는 '경쟁 밀도'와 '이름 충돌' 기준.

## 검색어별 경쟁 (상위 결과에 '그 주제 전용' 큰 앱이 있나)
| 검색어 | 결과 | 주제 전용 큰 앱 | 판단 |
|---|---|---|---|
| how things work | 46 | **없음** (Facebook·eBay 등 무관한 앱만) | 빈자리 — 제목에 넣을 1순위 |
| how it works | 48 | 없음 | 빈자리. 단 "How It Works" 는 영국 과학 잡지 이름이라 제목엔 피함 |
| how stuff works | 47 | 없음 | HowStuffWorks(사이트 상표)라 피함 |
| engineering explained | 43 | 없음 (최대 302개 평가) | 빈자리 |
| engineering / engineering app | 46~48 | SmartyMe 5.9만·Brilliant 3.3만 | 경쟁사가 잡는 말 — 부제·키워드로 |
| daily learning / micro learning | 45~46 | Duolingo·Elevate·Headway·Blinkist | 레드오션, 피함 |
| science explained / everyday science | 36~38 | Scientific American 1만 | 약함, 키워드로 |

## 이름 충돌
- "How Things Work": 같은 이름 1개(평가 0개, 개인 개발자) — 글자가 똑같지 않게 부제까지 붙이면 등록 가능.
- "Inside Things"·"Daily Engineering"·"Explained": 충돌 0.
- "Blueprint"·"Tinker"·"Gizmo"·"Cutaway": 이미 여럿 → 탈락.

## 추천 A/B
- **A (추천)**: 이름 `How Things Work: Engineering` (28자) · 부제 `Everyday Objects, Explained` (27자) · 번들 `com.soulfulfill.howthingswork`
  — 사람들이 칠 말이 그대로 이름. 이 검색어를 잡은 전용 앱이 없다.
- **B**: 이름 `Inside Things: Engineering` (26자) · 부제 `How Everyday Stuff Works` (24자) · 번들 `com.soulfulfill.insidethings`
  — 브랜드로 기억되기 쉽고 충돌 0. 대신 "how things work" 는 키워드 칸에만 들어가 검색 노출이 약하다.
- 키워드 칸(100자, 공통): `how,things,work,engineering,explained,machines,science,physics,inventions,facts,daily,lesson,diagram`
