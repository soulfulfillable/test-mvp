# How It Works (사물의 원리) — 개발 세션 게시판
마지막 갱신: 2026-10-15 (KST) — 시제품 공개

## 🔁 이어받기 (크레딧 막혀도 다른 계정에서 바로 이어서 — 매 단계마다 갱신)
- 마지막 저장: 2026-10-16 · 작업 브랜치: `claude/how-it-works`
- 방금 끝낸 것: 레슨을 파일 1개씩으로 분리(`howitworks_app/lessons/NN-key.js`, 빌드 `tools/howitworks/build.py`), 작성 가이드 `howitworks_app/lessons/README.md`,
  "Why it's built this way"(설계 이유) 섹션 추가, 로봇을 모든 레슨 자동 검사형으로(`howitworks_app/qa/robot.js` — 내용 규칙+터치 125/125), ASO 수집 워크플로 `howitworks-aso.yml` 실행
- 진행 중이던 것: ① 레슨 27개를 작업자 5명이 병렬로 작성 중(파일 단위). ② ASO 결과(브랜치 `how-it-works-aso` 의 `tools/howitworks/aso/aso.md`)로 이름 A/B 정리
- **다음 할 일**: 없는 레슨 파일부터 이어서 작성(가이드대로, 번호·key 는 아래 표) → `build.py` → 로봇 전체 통과 → 스크린샷 직접 확인 → main 푸시
  → 이름 A/B 사용자에게 → 번들 ID 확정 → ④ Flutter 이식 방식 결정(도해·애니메이션을 Dart 로 어떻게 옮길지)
- 레슨 번호·key: 03 refrigerator · 04 air-conditioner · 05 lock · 07 ballpoint-pen · 08 elevator · 09 electric-toothbrush · 10 coffee-maker · 11 toaster ·
  12 washing-machine · 13 wifi-router · 14 touchscreen · 15 gps · 16 e-bike · 17 car-brakes · 18 airplane-wing · 19 helicopter · 20 four-stroke-engine ·
  21 hybrid-car · 22 solar-panel · 23 battery · 24 led-bulb · 25 water-filter · 26 fire-extinguisher · 27 septic-tank · 28 dishwasher · 29 vacuum-cleaner · 30 barcode-scanner
- 사용자 대기 중인 것: 없음 (이름 A/B 를 곧 물어봄)
- 이어받는 세션에 붙여 넣을 말:
  `soulfulfillable/test-mvp 의 board/how-it-works.md "🔁 이어받기" 와 plans/how-it-works-app.md 를 읽고, "다음 할 일"부터 이어서 해줘.`

## 지금 상태 (3줄 이내)
웹 시제품(레슨 3개) 공개, 사용자 느낌 대기. 경쟁: 큰 앱 3개 전부 구독 벽, 가장 비슷한 Innerspect 는 안드로이드 전용.
도해 = 손으로 그린 듯 흔들리는 선(SVG 변위 필터) + 단면 해칭 + 모눈종이 + 빨간 번호. 강조색 빨강 1개, 물은 파랑.

## 다음 할 일 / 사용자에게 받을 것
- 시제품 '느낌' (그림이 싸 보이나 / 3분 길이 / 번호 탭·See it work)
- 나중: 이름(A/B)
- ✅ 대상 = **A 미국 일반 성인** (사용자 결정 2026-10-16, 기획 파트너가 기록). 차별화 4개는 기획서 '차별화 4개' 참고 — 특히 2번 **움직이는 도해**가 시그니처

## 사용자 피드백 기록 (최신이 위)
- 2026-10-16 "시제품 괜찮아. 그림 결 이대로 가자. 대상은 미국 일반 성인으로 결정됐어. 이름 검색어 조사해서 A/B 추천해주고, 레슨 27개 추가 진행해줘." → 그림 결 고정(가이드에 명시), 이름 조사·27개 착수
- 2026-10-16 (기획 파트너 세션에서, 시제품 첫 느낌): "오 괜찮아" → 그림 결·방향 OK. 다음 단계(이름 A/B → 레슨 27개) 진행 가능
## 사용자 성향 — 원하는 것 / 불편해하는 것
- (다른 게시판에서 배움) **코드로 그린 도형 그림은 "최악"(앰비언트)** → 이 앱의 가장 큰 위험. 도해는 클립아트가 아니라 '공학 스케치' 결로, 느낌을 먼저 묻는다.
- 폰 링크 먼저, A/B + 추천 이유 한 줄, 보고는 짧게 번호로, 증거(스크린샷) 같이.

## 다른 세션에 알리는 노하우
- **SVG 에서 CSS 클래스의 `fill:none` 은 요소의 `fill="…"` 속성을 이긴다**(속성은 우선순위가 가장 낮음) → 해칭·색 채움이 통째로 사라졌다. `.ink:not([fill]){fill:none}` 처럼 속성이 없을 때만 적용.
- 코드 도해를 '손그림'처럼: `feTurbulence`+`feDisplacementMap`(scale 2 정도)으로 선을 살짝 흔들고, 단면은 45° 해칭 패턴, 배경 모눈 패턴. 빈 칸(구멍)은 모눈 패턴으로 채우면 이음새가 안 보인다.
- 헤드리스 리눅스엔 손글씨 글꼴이 없어 스크린샷은 세리프로 나온다(아이폰은 Noteworthy). 손글씨 라벨은 짧게만.
- 이 작업 환경은 apps.apple.com·itunes 검색 API·trustpilot·apkcombo 가 막힘(WebFetch DNS 실패, curl 403). 경쟁 조사는 WebSearch 요약 + 제3자 집계 수치로, 정확한 값은 Actions 로.

## 다른 세션·기획 파트너에게 묻고 싶은 것
