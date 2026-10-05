# DESIGN.md — "AI 가 만든 느낌" 없애는 디자인 규칙 (모든 앱)

사용자 피드백(2026-10-05): **"글씨체나 UI 가 다 AI 로 돌린 느낌."** 이 파일은 그걸 없애기 위한 공통 규칙이다.
**모든 개발 세션은 화면을 만들거나 고치기 전에 이 파일을 읽고, 검수할 때 4장 체크리스트로 스크린샷을 점검한다.**

근거: 2025~26 디자이너 글 다수(대부분 의견이지 실험 자료는 아님) + Apple HIG + Flutter 공식 문서. 출처는 맨 아래.

## 1. 왜 AI 티가 나나
- 스타일을 정해 주지 않으면 AI 는 **가장 흔한 기본값**으로 수렴한다. 웹은 Inter 글꼴·보라색(Tailwind indigo-500)·둥근 카드,
  **Flutter 는 손대지 않은 Material 3 테마**(seed 색 보라 틴트, 리플, FAB, `Card` 남발)가 그 기본값이다.
- 아이폰 사용자 눈엔 Material 기본값 = "아이폰 앱 같지 않음" = 싸 보임.

## 2. 우리 방향 한 줄
**"애플 기본 앱(설정·날씨·주식·계산기) 옆에 놓아도 어울리게. 그리고 앱마다 딱 하나의 '시그니처'만 공들인다."**
(2024 애플 디자인 상 Crouton, 2022 (Not Boring) Habits 공통점: 나머지는 조용하고 네이티브, 핵심 동작 하나에만 소리·햅틱·애니메이션)

## 3. 규칙
### 글꼴
- **아이폰 시스템 글꼴(San Francisco)만.** Flutter: `CupertinoSystemText`(20pt 미만)·`CupertinoSystemDisplay`(20pt 이상), 또는 iOS 에서 기본 Typography 유지.
  Google Fonts·Inter·Roboto 금지. 예외: 브랜드로 **숫자 전용 글꼴 1개**(예: 큰 속도·dB 숫자)만 의도적으로 허용 — 기획서에 이유를 적을 것.
- Apple 텍스트 스타일 단계(Large Title·Title·Headline·Body·Footnote·Caption). **한 화면에 크기 3개·굵기 2개까지.**
- Dynamic Type(큰 글씨 설정) 존중 — `textScaler` 를 막지 말고 큰 글씨로도 테스트.

### 위젯·탐색
- iOS 에서는 **Cupertino / `.adaptive()` 위젯**: `CupertinoNavigationBar`(큰 제목), 탭 바, 가장자리 밀어서 뒤로, 시트,
  `CupertinoListSection.insetGrouped`, `CupertinoSlidingSegmentedControl`, `Switch.adaptive`, `showAdaptiveDialog`.
- **기본 금지**: Material 리플, FAB, Material `AppBar`, 모든 걸 감싸는 `Card`, 알약(pill) 버튼 남발.
- 설정·기록은 떠 있는 카드 더미가 아니라 **그룹 목록**.

### 색
- **강조색 1개**(앱마다 브랜드로 고른 색, seed 기본값 금지) + 시스템 회색·의미 색(성공/경고). 라이트·다크 둘 다.
- **보라·남색 그라데이션, 글자 그라데이션 금지.** 크림+테라코타+고정폭 글꼴 조합도 새 "AI 기본값"이라 금지.

### 아이콘·그림
- `CupertinoIcons`(SF Symbols 스타일) 한 가지 굵기·크기로. **이모지를 UI 아이콘으로 쓰지 않는다**(게임 캐릭터로 의도한 것만 예외, 그것도 그림으로 대체 권장). 반짝이(✨) 아이콘 금지.
- 그림자는 거의 쓰지 않는다 — 구분은 가는 선과 배경 톤으로. 모서리 둥글기는 iOS 수준, 안쪽이 바깥보다 작게.
- 유리(blur) 효과를 Flutter 로 흉내 내지 않는다(그 자체가 AI 티). 단색 면을 절제해서.

### 배치
- **화면마다 주인공 하나**를 확실히 크게(속도 숫자, 퍼즐 판, 월 납입액…). 나머지는 조용히.
- 4/8pt 격자, 하지만 **간격을 다 똑같이 두지 않는다** — 관련된 것끼리 붙이고, 덩어리 사이를 띄운다.
- 내용은 실제 데이터로 촘촘하게. 앱 안에 광고 문구 같은 큰 제목·빈 공간 금지. 문구는 구체적이고 짧게.

### 손맛
- 햅틱: 선택(`selectionClick`)·성공·실패에만, 아껴서.
- 애니메이션: 상태 변화를 설명할 때만(스프링). 장식용 금지.
- **앱마다 시그니처 1개**: 퍼즐 완성 순간, 속도 경고, dB 바늘 등 핵심 순간에만 소리·햅틱·움직임을 공들인다.

## 4. 화면 검수 체크리스트 (스크린샷 보고 하나씩)
1. 애플 기본 앱 옆에 놓으면 어울리나? (설정/날씨/주식 스크린샷과 나란히 비교)
2. Material 흔적(리플·FAB·보라 틴트·`Card` 더미)이 남았나?
3. 글꼴이 시스템 글꼴인가? 크기 3개·굵기 2개 이내인가?
4. 주인공 하나가 한눈에 보이나?
5. 강조색이 1개인가? 그라데이션이 있나?
6. 이모지가 아이콘으로 쓰였나?
7. 간격이 전부 똑같아서 밋밋하지 않나? 그림자가 많지 않나?
8. 큰 글씨 설정·다크 모드·키보드 뜬 상태에서도 괜찮나?
9. 시그니처 순간이 있나? 그 외엔 조용한가?
10. 가짜 데이터·채우기용 아이콘·"Coming soon" 이 없나?

## 출처
- 원인(기본값 수렴, Tailwind indigo): https://dev.to/alanwest/why-every-ai-built-website-looks-the-same-blame-tailwinds-indigo-500-3h2p
- AI 티 목록: https://www.925studios.co/blog/ai-slop-design-tells · https://www.developersdigest.tech/blog/ai-design-slop-and-how-to-spot-it ·
  https://www.mania.design/blog/spot-the-slop-a-ui-designers-guide-to-fixing-ai-defaults/ · https://github.com/funboy322/avoid-ai-design
- Apple HIG 글꼴·색: https://developer.apple.com/design/human-interface-guidelines/typography · https://developer.apple.com/design/human-interface-guidelines/color
- Flutter iOS 적응: https://docs.flutter.dev/ui/adaptive-responsive/platform-adaptations · https://github.com/flutter/flutter/issues/147708 ·
  예시 https://github.com/InMatrix/veggieseasons_adaptive · Liquid Glass 미지원 https://github.com/flutter/flutter/issues/170310
- 디자인 상 사례: https://www.apple.com/newsroom/2024/06/apple-announces-winners-of-the-2024-apple-design-awards/ · https://developer.apple.com/news/?id=9ab1g4r3
