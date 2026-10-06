# 성경 통독 앱 — 개발 세션 게시판
마지막 갱신: 2026-10-06 (KST)

## 지금 상태 (3줄 이내)
이름 **Tolle: Bible Reading Plan** 확정, 번들 `com.soulfulfill.tolle` **Apple 등록 완료**(Actions run 14). Flutter 1차 완성(`tolle_app/flutter/`): 오늘 분량 하나 + Mark as Read(시그니처: 1,189칸 지도가 톡톡 채워짐) · 지도(66권×장) · 계획(전체/신약/시편·잠언 × 기간 × 성경순/연대순, 시작일, 밀림 조정 2가지, 하루 1번 알림, CSV 내보내기).
테스트 45개 통과(엔진 24 + 로봇 21), 웹 실제 터치 15/15. 웹 미리보기 https://soulfulfillable.github.io/test-mvp/bible-reading-app/index.html · 검수 https://soulfulfillable.github.io/test-mvp/bible-reading-qa.html
다음: ASC 앱 레코드(사용자) → `Release iOS`(tolle) → TestFlight. AdMob 은 스토어 제출 전까지.

## 다음 할 일 / 사용자에게 받을 것
- ✅ [사용자] 이름 A `Tolle: Bible Reading Plan`, 위젯 A(2차로). 번들 `com.soulfulfill.tolle` 등록 완료.
- [사용자] App Store Connect → 앱 → ＋ 신규 앱: iOS / `Tolle: Bible Reading Plan` / English (U.S.) / `com.soulfulfill.tolle` / SKU `tolle` / Full Access (복사: https://soulfulfillable.github.io/test-mvp/todo.html)
- [사용자, 스토어 제출 전] AdMob(soulfulfillable 계정) → 앱 추가(iOS, 미출시, 이름 Tolle) → Banner `banner` → 완료 화면 캡처. 앱 설정 → Blocking controls → 민감 카테고리 차단(Religion 허용).
- [세션] 레코드 생기면 `Release iOS`(tolle) → TestFlight 자동 초대 → 2.1 대비 30초 녹화 부탁(오늘 → Mark as Read → Map → Plan).
- 준비 완료: 스토어 문구·심사 메모 7항목 `tolle_app/store/ios-metadata.json`, 스크린샷 5장 `tolle_app/store/screenshots/`.
- [나중] 위젯(2차, 사용자 결정), 음악 탭, 추천 자료(제휴), 오늘의 한 절(WEB).

## 사용자 피드백 기록 (최신이 위, 원문 인용 + 어떻게 반영했나)
| 날짜 | 원문 | 반영 |
|---|---|---|
| 10-06 | "1 A, 2 A 추천대로" | 이름 Tolle: Bible Reading Plan, 위젯은 2차. 폴더 `bible_app`→`tolle_app`(워크플로 규칙: 폴더=번들 이름), 번들 등록, Release iOS·등록 정보 선택지에 tolle, todo 페이지, 스토어 문구·스크린샷 |
| 10-06 | "성경 통독 앱 개발 시작해줘. … DESIGN.md 새 앱 규칙을 처음 적용하는 앱이니까 첫 화면 만들기 전에 꼭 읽고, 스크린샷을 4장 체크리스트로 점검해서 보고해줘" | DESIGN.md 를 먼저 읽고 Cupertino 로만 만듦. 아래 "디자인 점검 결과" 10항목 |

## 디자인 점검 결과 (DESIGN.md 4장, 로봇 스크린샷 47장 + 웹 스크린샷)
1. 애플 기본 앱 옆에 어울림: 오늘 = 큰 글자 하나 + 버튼 하나, 지도·계획 = 설정 앱식 큰 제목·묶음 목록 ✓
2. Material 흔적 없음: CupertinoApp·TabScaffold·ListSection·ActionSheet·AlertDialog·SegmentedControl·DatePicker. 리플·FAB·Card·보라 틴트 없음 ✓
3. 글꼴: 지정 없음 = iOS 시스템 글꼴. 화면당 크기 3개(34·17·13 — 목록 부제도 12→13 으로 맞춤)·굵기 2개(400·600) ✓. **확인 못 함**: 실기기 SF 렌더(웹·테스트는 Roboto)
4. 주인공: 오늘 분량 34pt. 책이 둘인 날은 책마다 한 줄("2 / Samuel" 끊김을 스크린샷에서 잡아 고침) ✓
5. 강조색 1개: 포도주색 #8E2C48 / 다크 #E07A96, 그라데이션 없음 ✓
6. 이모지 아이콘 없음 (탭 3개·체크 표시는 CupertinoIcons, 앱 아이콘은 SVG 로 그린 칸 지도) ✓
7. 간격: 날짜·계획 줄은 붙이고 덩어리 사이만 크게 띄움. 그림자 없음 ✓
8. 큰 글씨 135%·다크: 로봇 통과(잘림 2건 잡아 고침). 키보드: 입력 칸이 없는 앱이라 해당 없음 ✓
9. 시그니처: 읽음 → 지도 칸이 90ms 간격으로 살짝 넘치며 채워짐 + 햅틱 1번. 그 외 애니메이션 없음 ✓ (**확인 못 함**: 실기기 햅틱 느낌)
10. 가짜 데이터 없음: "About N min" 은 절 수×7.5초 계산, 예시 진행은 `?demo=` 주소에서만(저장 안 함). 음악 탭은 판정 전이라 숨김, "Coming soon" 없음 ✓

## 사용자 성향 — 원하는 것 / 불편해하는 것 (이 앱에서 알게 된 것)
- (다른 게시판에서 배움) 폰 링크 먼저, 결정은 2지선다+추천 이유 한 줄, 보고는 짧게 번호로. 신앙 앱은 혼내지 않는 정서.

## 다른 세션에 알리는 노하우 (다른 앱에서도 써먹을 것)
- **성경 장·절 수는 PyPI `pythonbible`(MIT) 휠에 들어 있다** (`MAX_VERSE_NUMBER_BY_BOOK_AND_CHAPTER`, 앞 66권 = 1,189장·31,102절). pip download 가 이 환경에서 된다 → `tools/bible/make_books.py` 가 Dart 상수로 뽑음. Verse Weave 등 다른 신앙 앱도 재사용.
- **하루 분량은 장 수 말고 절 수로 나눈다** — 시편 117편(2절)과 119편(176절)이 같은 '1장'이라 장 수로 나누면 들쭉날쭉(경쟁 앱 Read Scripture 리뷰 불만이 이것). 누적 절 수 목표에 가장 가까운 장 경계 + 남은 날마다 1장 보장 → 1년 계획 하루 4~22분, 중앙 11분.
- **경쟁 앱 리뷰 불만 = 기능 목록**: 연속 기록 죄책감, 밀리면 못 따라감, 시작일 못 바꿈 → '오늘' 대신 '다음 분량'을 주인공으로, 밀리면 "Spread the Rest(끝날 유지)" / "Continue From Today(끝날 미룸)" 두 가지, 시작일 변경은 진행 유지.
- **로봇의 `didExceedMaxLines` 검사가 `CupertinoListTile` 의 제목+`additionalInfo` 잘림을 잡았다** (큰 글씨 135%에서 "Psalms & Proverbs…"). 오른쪽 값이 긴 줄은 `subtitle` 로.
- **테스트 스크린샷에서 CupertinoIcons 가 네모로 찍히면** pub 캐시의 `cupertino_icons-1.0.9/assets/CupertinoIcons.ttf` 를 `FontLoader('packages/cupertino_icons/CupertinoIcons')` 로 넣는다 (`tolle_app/flutter/test/robot_test.dart` 의 `loadFonts`).
- 위젯 테스트에서 날짜를 바꿔 가며 보려면 `withClock(Clock(() => now), body)` 로 테스트 본문을 감싸고 `now` 를 바꾼 뒤 저장소 `refresh()`.

## 다른 세션·기획 파트너에게 묻고 싶은 것
- 기획 파트너: 연대순은 장을 쪼개지 않는 근사(`tolle_app/store/chronological.md`). 복음서를 섞지 않았다 — TestFlight 느낌 보고 더 잘게 갈지.
- 앰비언트 세션: 음악 탭을 붙일 때 Still/Hope 같은 분위기 2~3개면 충분. 앱은 웹 오디오가 아니라 네이티브 재생(화면 꺼도)이 필요 — 미리 렌더한 파일을 앱에 넣는 방식이 가능할지?
