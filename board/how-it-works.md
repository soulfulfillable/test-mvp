# How It Works (사물의 원리) — 개발 세션 게시판
마지막 갱신: 2026-10-17 (KST) — 레슨 30개·이름·번들 완료, Flutter 이식 A/B 대기

## 🔁 이어받기 (크레딧 막혀도 다른 계정에서 바로 이어서 — 매 단계마다 갱신)
- 마지막 저장: 2026-10-20 (기획 파트너가 대표 앱 지정·다음 할 일 갱신) · 작업 브랜치: `claude/how-it-works` (main 반영, 커밋 안 된 작업 없음)
- 방금 끝낸 것: 이름 확정 **How Things Work: Engineering** / 부제 Everyday Objects, Explained (`howitworks_app/store/ios-listing.md`),
  번들 **`com.soulfulfill.howthingswork` 등록 완료**(Actions iOS 번들 ID 등록 run 38916038511), `docs/todo.html` 에 앱 값 추가
- 진행 중이던 것: 없음
- 🚩 **2026-10-20 (기획 파트너): 이 앱이 계정의 대표 앱이 됐다.** 다른 8개 앱이 전부 4.3 스팸으로 거절됨(`board/_shared.md` 🛑). 이 앱을 통과시키는 게 계정 전체를 살리는 일 — 서두르지 말고 '와 포인트'까지 완성도 우선.
- **다음 할 일**:
  ① **이식 방식 = 네이티브 추천으로 변경**(기획 파트너): WebView 로 웹 엔진을 감싸면 4.2(웹사이트를 감싼 앱) 위험이 지금 계정 상태에선 크다. 화면·조작·애니메이션은 Flutter 네이티브, 도해는 지금 SVG 를 `flutter_svg` 로 그리고 움직이는 부분만 Dart 애니메이션(혹은 30개 Dart 로 다시). 방식 확정안을 사용자에게 한 줄로 확인받고 진행
  ② `howitworks_app/flutter/` 생성(pubspec `version: 1.0.0+1`, `sdk: ^3.13.2`) → 테스트 로봇 먼저 → Today/Library/레슨(Cupertino) → 30개 사실 2차 검토
  ③ 이름 접두·화면 틀이 기존 'Glance' 앱과 겹치지 않게(아이콘·색·구조 모두 다르게) — 4.3 대비
  ④ Release iOS → **TestFlight 외부 테스트 그룹 + 공개 링크**(ASC API `betaGroups` publicLinkEnabled) → 외부 베타 심사 → 사용자에게 링크 전달(모집 문구 `docs/beta.html`)
  ⑤ 테스터 10명+ 피드백 원문을 `howitworks_app/store/beta-feedback.md` 에 모으고, 반영한 것을 빌드별로 기록(4.3 질문 4번의 근거)
  ⑥ 심사 메모에 4.3 9문항 답을 미리 작성(`howitworks_app/store/review-notes.md`) → 기획 파트너·사용자 확인 뒤에만 제출. AdMob 은 제출 직전
- 사용자 대기 중인 것: 이식 방식 확인(네이티브 추천). (App Store Connect 앱 레코드는 TestFlight 업로드 전까지)
- 이어받는 세션에 붙여 넣을 말:
  `soulfulfillable/test-mvp 의 board/how-it-works.md "🔁 이어받기" 와 plans/how-it-works-app.md 를 읽고, "다음 할 일"부터 이어서 해줘.`

## 지금 상태 (3줄 이내)
웹 미리보기 레슨 30개 완성(`docs/how-it-works.html`, 로봇 1124/1124). 이름 How Things Work: Engineering, 번들 com.soulfulfill.howthingswork 등록 완료.
다음은 Flutter 이식 방식 A/B(사용자 답 대기) → Flutter 앱. 새 심사 제출은 속도계 5.6 답까지 보류(개발·TestFlight 는 진행).

## 다음 할 일 / 사용자에게 받을 것
- 시제품 '느낌' (그림이 싸 보이나 / 3분 길이 / 번호 탭·See it work)
- 나중: 이름(A/B)
- ✅ 대상 = **A 미국 일반 성인** (사용자 결정 2026-10-16, 기획 파트너가 기록). 차별화 4개는 기획서 '차별화 4개' 참고 — 특히 2번 **움직이는 도해**가 시그니처

## 사용자 피드백 기록 (최신이 위)
- 2026-10-20 "네이티브로 가" → 웹뷰 없이 Flutter 가 직접 그림. 도해는 웹 엔진에서 장면·프레임 데이터로 추출해 재사용
- 2026-10-16 "A 추천대로 가자" → 이름 How Things Work: Engineering, 번들 com.soulfulfill.howthingswork 등록
- 2026-10-16 "시제품 괜찮아. 그림 결 이대로 가자. 대상은 미국 일반 성인으로 결정됐어. 이름 검색어 조사해서 A/B 추천해주고, 레슨 27개 추가 진행해줘." → 그림 결 고정(가이드에 명시), 이름 조사·27개 착수
- 2026-10-16 (기획 파트너 세션에서, 시제품 첫 느낌): "오 괜찮아" → 그림 결·방향 OK. 다음 단계(이름 A/B → 레슨 27개) 진행 가능
## 사용자 성향 — 원하는 것 / 불편해하는 것
- (다른 게시판에서 배움) **코드로 그린 도형 그림은 "최악"(앰비언트)** → 이 앱의 가장 큰 위험. 도해는 클립아트가 아니라 '공학 스케치' 결로, 느낌을 먼저 묻는다.
- 폰 링크 먼저, A/B + 추천 이유 한 줄, 보고는 짧게 번호로, 증거(스크린샷) 같이.

## 다른 세션에 알리는 노하우
- **`iOS 번들 ID 등록` 워크플로가 실패해도 ✅ 로 보였다**: Apple API 시간 초과인데 `| tee` 가 종료 코드를 가림 → `set -o pipefail` 추가(10-16). 다른 워크플로도 `| tee` 앞엔 pipefail. 결과는 로그의 "새로 등록함/이미 등록됨" 줄로 확인.
- **콘텐츠 대량 제작은 '파일 1개 = 단위 1개' + 작성 가이드 + 자동 검사 로봇 + 병렬 작업자**로: 레슨 27개를 작업자 5명이 각자 파일만 쓰고, 각자 미리보기(`build.py --only … --out 스크래치`)·로봇·스크린샷 확인까지 하고 넘김 → 약 25분. 공용 파일(엔진)은 작업자가 못 고치게 하고 버그는 보고만 받아 한 곳에서 고침.
- SVG 에서 CSS 가 `stroke`·`stroke-width`·`opacity` 속성도 덮는다(fill 과 같은 문제). 클래스 규칙은 `:not([stroke])` 등 속성이 없을 때만.
- 레슨 파일 하나의 문법 오류가 페이지 전체를 죽인다 → 빌드 때 `node --check` 먼저.
- **SVG 에서 CSS 클래스의 `fill:none` 은 요소의 `fill="…"` 속성을 이긴다**(속성은 우선순위가 가장 낮음) → 해칭·색 채움이 통째로 사라졌다. `.ink:not([fill]){fill:none}` 처럼 속성이 없을 때만 적용.
- 코드 도해를 '손그림'처럼: `feTurbulence`+`feDisplacementMap`(scale 2 정도)으로 선을 살짝 흔들고, 단면은 45° 해칭 패턴, 배경 모눈 패턴. 빈 칸(구멍)은 모눈 패턴으로 채우면 이음새가 안 보인다.
- 헤드리스 리눅스엔 손글씨 글꼴이 없어 스크린샷은 세리프로 나온다(아이폰은 Noteworthy). 손글씨 라벨은 짧게만.
- 이 작업 환경은 apps.apple.com·itunes 검색 API·trustpilot·apkcombo 가 막힘(WebFetch DNS 실패, curl 403). 경쟁 조사는 WebSearch 요약 + 제3자 집계 수치로, 정확한 값은 Actions 로.

## 다른 세션·기획 파트너에게 묻고 싶은 것
