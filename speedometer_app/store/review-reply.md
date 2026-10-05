# App Review 메모 (Guideline 2.1 대비 7항목, 첫 제출 때 미리 넣는다 — 공용 규칙 2026-10-05)

App Store Connect → 1.0 버전 → App Review Information → **Notes** 에 아래 영어를 넣고(=`ios-metadata.json` 의 reviewNotes),
**Attachment** 에 실기기 화면 녹화를 올린다. 2.1 정보 요청이 오면 "Reply to App Review" 에도 같은 글 + 영상.

## 화면 녹화 부탁 (사용자 폰, TestFlight 빌드, 30초 안팎)

제어 센터 → 화면 기록 ● → 아래 순서 → 다시 ● 로 멈춤. **운전자는 찍지 말고 조수석이나 걸으면서.**
1. 앱 아이콘 눌러 켜기 (처음이면 "Before you drive" 안내 → I Understand → 위치 허용)
2. 서 있을 때 **0** 이 보이게 2초 → 걷거나(조수석이면 차가 움직일 때) 숫자가 올라가는 것 5초
3. **Gauge** 눌러 바늘 화면 → **Digits** 로 돌아오기
4. **HUD** → 반전된 숫자 → 화면 탭 → **Exit HUD**
5. **Alert off** 눌러 경고 켜기(삐 소리) → 숫자를 낮게(−5 몇 번) → **Done** → 넘으면 빨간 화면
6. 위쪽 **Run** 눌러 페이스 화면 → **Car** 로 돌아오기 → ⚙ 설정 열고 **Done**

---

Hello App Review team, thank you for reviewing Glance Speed: GPS Speedometer. A screen recording from a physical iPhone is attached.

1. Screen recording: attached. It starts at app launch and shows the one-time safety notice and location permission, the speedometer reading 0 while stopped and then the live GPS speed while moving, the analog gauge, the mirrored HUD mode, the user-set speed alert (screen turns red), Run mode (pace) and Settings.
   - The app has no account registration, login, or user-generated content.

2. Purpose and audience: A simple GPS speedometer for drivers, cyclists, runners and boaters who want to see their real speed at a glance, set their own speed alert, and see trip totals (top speed, average, distance, time). Speed comes from the iPhone's GPS only while the app is open (When In Use permission; no background location).

3. How to use: No setup or login. On first launch a short safety notice appears, then iOS asks for location permission. The big number is the current speed; tap the unit to switch MPH/km/h. Buttons: Alert (set your own speed limit), Gauge/Digits, HUD (mirrored for the windshield), and the mode bar at the top (Car / Bike / Run / Boat). To see speed, please move (walk or drive) — when stationary it correctly shows 0. If GPS is weak or lost, the app says so ("Weak GPS" / "No GPS signal") instead of showing a guessed number.

4. External services: Google AdMob banner ads only (no interstitial or video ads; no ads in HUD mode). No backend server, analytics, authentication, or AI services. The user's location never leaves the device and is not passed to the ad SDK.

5. Regional differences: None. The app works the same in all regions where it is available. English only.

6. Regulated industry / third-party content: Not applicable. The app does not show road speed limits or speed-camera data; the speed alert is a number the user chooses. A one-time safety notice asks users not to interact with the phone while driving. All art and the app icon are our own.

7. In-App Purchase: None. All features are free, with no subscription or trial.

Thank you!
