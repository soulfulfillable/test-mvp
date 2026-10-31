# Kitty Queens — Google Play 등록 자료 (en-US, 2026-10-31)

Play Console 앱은 사용자가 10-23 에 만듦: **Kitty Queens: Cat Sudoku**, 패키지 `com.soulfulfill.catdoku`, Game → Puzzle, 무료.
앱 콘텐츠 설문(개인정보·광고·등급·대상 연령·Data safety·광고 ID)은 10-23 완료 — 아래 "설문과 맞춰 둔 것" 참고.
그래픽은 `catdoku_app/store/play/` (만드는 법 `make.js`, 아이콘은 PIL 축소).

## 사용자가 Play Console 에 붙여 넣을 것 (Grow users → Store presence → Main store listing)

**App name (30자 이내)**
```
Kitty Queens: Cat Sudoku
```

**Short description (80자 이내)**
```
One cat in every color. A cozy daily logic puzzle with 500 levels, 5×5 to 9×9.
```

**Full description (4000자 이내)**
```
Place one cat in every color — that's it!

Kitty Queens is a cozy logic puzzle with three simple rules:
• Each color gets exactly 1 cat
• Each row and each column gets 1 cat
• Cats can't touch — not even corners

Every puzzle has exactly one solution, and you can always reach it by logic — no guessing.

■ A NEW PUZZLE EVERY DAY
Today's Puzzle is the same for everyone. Solve it daily to keep your streak going.

■ 500 LEVELS
Start with quick 5×5 boards and work up to brain-bending 9×9. Replay any level you've solved and see how many are left.

■ EASY ON THE EYES AND FINGERS
Big squares, clear colors with bold borders, and the rules always on screen. Pick Cat or Mark, then tap. Drag to mark many squares at once.

■ FRIENDLY HELP
Break a rule and the app shows you why. Stuck? It tells you which row or color has no spot left. Watch a short video for a hint or 3 more hearts.

■ PLAY ANYWHERE
Works offline — perfect for the bus, the subway or a coffee break. No account, no sign-in.

Levels 1–30 are free. Unlock more levels by watching a short video, or get all 500 levels and remove banner ads with a one-time purchase.
```

**Graphics** (`catdoku_app/store/play/`)
| 칸 | 파일 | 규격 |
|---|---|---|
| App icon | `icon-512.png` | 512×512 PNG |
| Feature graphic | `feature-1024x500.png` | 1024×500 |
| Phone screenshots (2~8장) | `phone-01-play.png` … `phone-05-all-levels.png` | 1080×2160 (비율 2:1, Play 허용 범위) |
| 7인치/10인치 태블릿 | 선택 — 비워 둬도 된다(폰 전용) | |

**Contact details (Store settings)**: 이메일은 ✅ 사용자 결정(10-23): 정식 출시 전에 `soulfulfill` 이 든 새 Gmail 로 교체. 웹사이트 `https://soulfulfillable.github.io/test-mvp/`.
**Privacy policy**: `https://soulfulfillable.github.io/test-mvp/catdoku-privacy.html` (10-31: Google Play 결제 문구 추가, 광고 ID 문구 있음).

## 비공개 테스트(Closed testing) 순서 — 개인 계정은 12명 × 14일 필수

1. Actions **`Build Android (앱 선택 → AAB/APK)`** → Run workflow → app = `catdoku` → 끝나면 Artifacts `catdoku-aab` 다운로드(zip 안 `app-release.aab`).
   서명은 **자동 보관 업로드 키**(10-31: Secrets `ANDROID_KEYSTORE_*` 는 실제로 비어 있었다 → `ci-signing` 브랜치에 ASC_KEY_P8 로 암호화해 자동 생성·재사용). Actions 요약의 "서명:" 줄이 "자동 보관 업로드 키 (Play 업로드 가능)" 이어야 Play 가 받는다. 첫 업로드 때 Play App Signing 에 동의하면 이 키가 그 앱의 업로드 키로 묶인다.
2. Play Console → **Test and release → Testing → Closed testing** → 트랙(기본 "Alpha") → **Create new release** → AAB 업로드.
   처음엔 Play App Signing 동의. Release name 은 자동(versionCode = Actions 실행 번호). Release notes(en-US):
   ```
   First Android test build. Please play Today's Puzzle and a few levels, then tell us one thing you liked, one thing that was confusing, and 0–10 how likely you'd recommend it.
   ```
3. **Testers 탭** → 이메일 목록 만들기(테스터 Gmail 12명+) → 저장 → **Copy link** 로 opt-in 링크 → 테스터에게 보냄(아이폰 TestFlight 링크와 같은 문구, `docs/beta.html`).
4. 테스터가 링크에서 **Become a tester** → Play 스토어에서 설치. **12명이 14일 연속 opt-in 상태**여야 Apply for production 이 열린다(설치만 하면 되고 매일 켤 필요는 없음).
5. **In-app product**: Monetize → Products → In-app products → Create → Product ID **`com.soulfulfill.catdoku.unlockall`**(코드와 같아야 함, `lib/core/purchases.dart`), Name "Unlock All Levels", 설명 "All 500 levels + remove banner ads", 가격 **$1.99**(USD, 다른 나라는 자동 환산) → Activate. 테스트 트랙에 AAB 가 한 번 올라간 뒤에야 만들 수 있다(결제 권한이 AAB 에 들어가야 메뉴가 열림).
   테스터가 결제를 실제로 안 하게 하려면 Setup → License testing 에 테스터 Gmail 을 넣으면 테스트 카드로 결제된다.
6. 14일 뒤 **Apply for production** → 설문(테스트 내용·피드백 요약) → 승인되면 Production 트랙에 같은 AAB.
   **그 전에**: 연락처 이메일 교체(위), AdMob Android 앱 실제 ID 교체 후 새 AAB.

## 설문과 맞춰 둔 것 (10-23 사용자 답 ↔ 앱)

| 설문 답 | 앱에서 확인한 것 |
|---|---|
| 광고 ID 사용: 예 | `AndroidManifest.xml` 에 `com.google.android.gms.permission.AD_ID` 명시(10-31) |
| 로그인 없음 | 계정 없음. 레벨 해금은 영상 또는 결제, **영상 없으면 보상 그냥 지급**(`ads.dart` unavailable → 지급, iOS 와 같은 Dart 코드) |
| 광고 있음 | AdMob 배너 + 보상형 2자리. ⚠️ **Android 는 아직 Google 테스트 광고 ID** — 사용자가 AdMob(`soulfulfillable`) 에 Android 앱 + 광고 단위 3개를 만들면 `AndroidManifest.xml` APPLICATION_ID 와 `lib/core/ads.dart` 의 Android 분기 교체. 비공개 테스트 동안은 테스트 광고여도 됨(프로덕션 전엔 교체) |
| 디지털 구매 있음 | `Unlock All Levels` $1.99 (Play Billing, `in_app_purchase`) — Play Console 에 상품 등록 필요(위 5번) |
| Data safety: 대략 위치·앱 상호작용·크래시·진단·기기 ID 수집(광고/분석/사기 방지), 공유 | AdMob SDK 공식 공개 기준. 앱 자체는 서버 없음 |
| 대상 연령 13+ | 앱에 어린이 대상 요소 없음, Families 정책 해당 없음 |

## 아직 못 한 것 / 확인 못 한 것
- Android 실기기·에뮬레이터에서 실제로 돌려 보지 못했다(이 환경엔 Flutter·에뮬레이터 없음). Actions 빌드의 `flutter test`(테스트 로봇 32개)·`flutter analyze` 통과와 AAB 생성까지가 이 세션의 증거. **첫 테스터(사용자 또는 안드로이드 쓰는 지인) 설치 확인이 필요**.
- ~~서명 Secrets~~ → 비어 있었음. 자동 보관 키로 대체(위 1번). ci-signing 브랜치의 `android-upload.json` 이 곧 업로드 키 — 지우지 말 것.
- 태블릿 스크린샷 없음(폰 전용 등록).
