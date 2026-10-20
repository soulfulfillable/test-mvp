# 성경 통독 앱 — 개발 세션 게시판
마지막 갱신: 2026-10-20 (KST)

## 🔁 이어받기 (크레딧 막혀도 다른 계정에서 바로 이어서 — 매 단계마다 갱신)
- 마지막 저장: 2026-10-20 (개발 세션) · 작업 브랜치: `claude/tender-brahmagupta-n0qp95` (main 과 같음)
- 방금 끝낸 것: **1.0(36) 4.3 Spam + 4.2.6 반려(10-19)** → 9문항 답장 초안 `tolle_app/store/review-reply-4.3.md`, 복사 페이지 `docs/tolle-review.html` 맨 위
- 진행 중이던 것: 사용자 답장(Reply to App Review → Send) 대기. **Resubmit 금지**(Apple 지시 + 캣도쿠 방침)
- **다음 할 일** (순서대로):
  1. 사용자가 답장 보냈는지 확인 → Apple 응답 기다리기(보통 1~3일)
  2. 응답이 **승인/재심사 진행** → AdMob 진짜 ID(아래 3) 넣은 빌드 37 을 1.0.1 로
  3. AdMob(사용자): soulfulfillable 계정 → Apps → Add app(iOS, 스토어 No, `Tolle`) → Add ad unit → Banner → `banner` → 완료 캡처 → `lib/core/ads.dart`·`Info.plist` 교체 → `flutter test` → Release iOS(tolle) → 빌드 37 (Reset Book 포함)
  4. 응답이 **또 4.3** → 재제출 금지. 계획 B(큰 차별 변경 후에만 새 빌드, 기획 파트너와): ① 오늘 화면 '와 포인트' 강화(읽은 순간 지도 애니메이션·연간 회고 카드) ② 잠금화면 위젯(2차로 미뤘던 것) ③ 기도·묵상 음악 탭(앰비언트 엔진) ④ Verse Weave 암송 퍼즐을 이 앱 기능으로 합치기 — 4.3 문항 3·6 에 답이 커진다. 그래도 안 되면 App Review Board 이의 제기
  5. 계정 위험: Speed 5.6·Kitty Queens 4.3·Tolle 4.3 → `board/_shared.md` 의 "새 Submit 보류" 방침 따르기
- 사용자 대기: 4.3 답장 Send · AdMob 완료 캡처(급하지 않음)
- 이어받는 세션에 붙여 넣을 말:
  `soulfulfillable/test-mvp 의 board/bible-reading.md "🔁 이어받기" 와 plans/bible-reading-app.md 를 읽고, "다음 할 일"부터 이어서 해줘. CLAUDE.md·PLAYBOOK.md 규칙대로.`

## 지금 상태 (3줄 이내)
**Tolle: Bible Reading Plan** (`tolle_app/`, 번들 `com.soulfulfill.tolle`, ASC id 6819705454). 1.0(빌드 36) 10-07 제출 → 10-08 2.1 정보 요청 → 10-12 답장+영상 → 재심사 → **10-19 4.3 Spam + 4.2.6 반려** → 9문항 답장 준비(재제출 금지). 광고는 아직 Google 테스트 ID.
기능: 오늘 분량(절 수 균형)·Mark as Read·1,189칸 지도·책별 장 직접 체크·Reset Book·계획 15종(성경순/연대순)·밀림 조정·알림·CSV. 테스트 47 · 웹 터치 17/17.
웹 미리보기 https://soulfulfillable.github.io/test-mvp/bible-reading-app/index.html · 검수 https://soulfulfillable.github.io/test-mvp/bible-reading-qa.html · 심사 답장 https://soulfulfillable.github.io/test-mvp/tolle-review.html

## 다음 할 일 / 사용자에게 받을 것
- 위 "🔁 이어받기 → 다음 할 일" 1~5 가 최신.
- 준비 완료: 스토어 문구·심사 메모 `tolle_app/store/ios-metadata.json`, 스크린샷 5장 `tolle_app/store/screenshots/`, 개인정보 `docs/bible-privacy.html`.
- [나중] 위젯(2차, 사용자 결정), 음악 탭(앰비언트 판정 뒤), 추천 자료(제휴), 오늘의 한 절(WEB).

## 사용자 피드백 기록 (최신이 위, 원문 인용 + 어떻게 반영했나)
| 날짜 | 원문 | 반영 |
|---|---|---|
| 10-20 | (ASC 캡처) 1.0(36) Rejected **4.3.0 Design: Spam** — "Guidelines 4.3 - Spam and 4.2.6 - App Generation Services" (10-19), 9문항 답하라·변경 없이 재제출 금지 | 캣도쿠와 같은 사례 → 재제출 말고 답장. 9문항 답 `tolle_app/store/review-reply-4.3.md`(7번 공유 코드는 사실대로: 알림·광고 래퍼·작은 UI 부품 재사용, 핵심은 이 앱 전용), `docs/tolle-review.html` 맨 위에 복사 버튼 |
| 10-12 | (폰 캡처) App Review → 수요일 8:48 PM 제출 "Unresolved Issues" — "저거때문아님가?" | 맞음: 답장한 그 제출이 아직 열려 있음. 그 제출을 눌러 **Resubmit to App Review**(이제 파란색이어야 함) → Waiting for Review 확인. 회색이면 캡처 받기(Cancel Submission 은 답장 맥락을 잃을 수 있어 마지막 수단) |
| 10-12 | "아예 싹 초기화하기 이런게잇어도 좋겟지? 전체는 위험하니 각 책마다 해노ㅗ을까 그래서 진짜할거냐면 확인한번 받고" | 이미 책마다 확인 창 있는 지우기가 있었음 → 눈에 띄게 **Reset Book** 으로 이름 바꾸고 확인 창 문구를 "Reset Psalms? … This can’t be undone. Chapters finished in your reading plan stay." 로. 전체 초기화는 만들지 않음(사용자 판단과 같음). 계획 진행은 Plan 에서 새 계획 시작(확인 창)으로만 초기화. 테스트 47·웹 17/17. 앱 반영은 다음 빌드 |
| 10-12 | (폰 캡처) iOS App Version 1.0 "Ready for Review" — "이거는 이제 기다리는건가" | 아직 아님: Ready for Review = 제출 전 상태. **Add for Review → Submit to App Review** 해야 Waiting for Review. PC 에서 하라고 안내 |
| 10-12 | "review는 눌렀어" / "AdMob … 어케하는지몰라 너가 해줘야되는데" | 재제출 완료 기록. AdMob 은 API 로 앱·광고 단위를 만들 수 없음(관리형 계정 전용) → 클릭 단위 4단계 안내, 완료 화면 캡처 받으면 ID 반영·새 빌드 |
| 10-12 | (캡처) 답장 보냄 — 6항목 + video_2026-10-12_13-01-47.mp4, 빌드 1.0.0 (36). Resubmit to App Review 는 회색 | 버전 화면(Distribution → iOS App 1.0) 맨 위 **Update Review** 로 재제출하라고 안내 (환율 앱 때와 같음) |
| 10-12 | (메시지 캡처) "Guideline 2.1 - Information Needed - New App Submission" (10-08, 제출 10-07) | 신규 계정 표준 정보 요청(환율·캣도쿠·소음과 같음). 답장 페이지 `docs/tolle-review.html`(녹화 순서·6항목 영어 답장 복사 버튼·Update Review 안내). 광고는 아직 테스트 ID — 정식 출시 전 AdMob 진짜 ID 로 바꿀 것 |
| 10-12 | (ASC 캡처) iOS 1.0 **Rejected — 2.1.0 Performance: App Completeness**, Update Review 버튼 | 상세 사유 요청 → 아래 줄 |
| 10-06 | "무조건 genesis 여기부터 시작되야하는거같은데 이거는 이거대로 있고 그리고 다른탭이나 뭔가 고민해서, 내가 읽은것에 체크해둘수있게하는거는 없나? 이건있어야할듯" | 계획(창세기부터)은 그대로. **Map 에서 책을 누르면 장 번호 칸 → 탭해서 읽음/해제**(두 상태만), Mark All Read·Clear(확인 창). 계획과 따로 저장, 새 계획에도 남음, 지도는 이제 66권 전부(계획 읽음 ∪ 직접 체크). 계획에서 읽은 장은 책 화면에서 못 지우고 이유 표시. 테스트 47·웹 터치 17/17 |
| 10-06 | "햇어" (ASC 신규 앱) | 앱 레코드 확인 Actions → 있음(id 6819705454) → Release iOS(tolle) 실행 |
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
- **계획에 묶이지 않고 '내가 읽은 장'을 직접 체크하고 싶어 한다** — 이미 읽은 부분이 있는 사람에게 창세기부터만 강요하면 답답. 기록(체크)과 계획(오늘 분량)을 분리.
- (다른 게시판에서 배움) 폰 링크 먼저, 결정은 2지선다+추천 이유 한 줄, 보고는 짧게 번호로. 신앙 앱은 혼내지 않는 정서.

## 다른 세션에 알리는 노하우 (다른 앱에서도 써먹을 것)
- **새 앱 첫 `TestFlight 초대` 는 메일이 안 갈 수 있다**: 그룹 `me` 를 막 만든 직후라 "409 Tester has no installable build" 로 메일을 건너뜀(빌드가 그룹에 자동으로 붙기 전). 몇 분 뒤 `TestFlight 초대`를 수동 실행(build·app)하면 "초대 메일 보냄". 로그의 409 줄을 꼭 확인.
- **성경 장·절 수는 PyPI `pythonbible`(MIT) 휠에 들어 있다** (`MAX_VERSE_NUMBER_BY_BOOK_AND_CHAPTER`, 앞 66권 = 1,189장·31,102절). pip download 가 이 환경에서 된다 → `tools/bible/make_books.py` 가 Dart 상수로 뽑음. Verse Weave 등 다른 신앙 앱도 재사용.
- **하루 분량은 장 수 말고 절 수로 나눈다** — 시편 117편(2절)과 119편(176절)이 같은 '1장'이라 장 수로 나누면 들쭉날쭉(경쟁 앱 Read Scripture 리뷰 불만이 이것). 누적 절 수 목표에 가장 가까운 장 경계 + 남은 날마다 1장 보장 → 1년 계획 하루 4~22분, 중앙 11분.
- **경쟁 앱 리뷰 불만 = 기능 목록**: 연속 기록 죄책감, 밀리면 못 따라감, 시작일 못 바꿈 → '오늘' 대신 '다음 분량'을 주인공으로, 밀리면 "Spread the Rest(끝날 유지)" / "Continue From Today(끝날 미룸)" 두 가지, 시작일 변경은 진행 유지.
- **로봇의 `didExceedMaxLines` 검사가 `CupertinoListTile` 의 제목+`additionalInfo` 잘림을 잡았다** (큰 글씨 135%에서 "Psalms & Proverbs…"). 오른쪽 값이 긴 줄은 `subtitle` 로.
- **테스트 스크린샷에서 CupertinoIcons 가 네모로 찍히면** pub 캐시의 `cupertino_icons-1.0.9/assets/CupertinoIcons.ttf` 를 `FontLoader('packages/cupertino_icons/CupertinoIcons')` 로 넣는다 (`tolle_app/flutter/test/robot_test.dart` 의 `loadFonts`).
- 위젯 테스트에서 날짜를 바꿔 가며 보려면 `withClock(Clock(() => now), body)` 로 테스트 본문을 감싸고 `now` 를 바꾼 뒤 저장소 `refresh()`.

## 다른 세션·기획 파트너에게 묻고 싶은 것
- 기획 파트너: 연대순은 장을 쪼개지 않는 근사(`tolle_app/store/chronological.md`). 복음서를 섞지 않았다 — TestFlight 느낌 보고 더 잘게 갈지.
- 앰비언트 세션: 음악 탭을 붙일 때 Still/Hope 같은 분위기 2~3개면 충분. 앱은 웹 오디오가 아니라 네이티브 재생(화면 꺼도)이 필요 — 미리 렌더한 파일을 앱에 넣는 방식이 가능할지?
