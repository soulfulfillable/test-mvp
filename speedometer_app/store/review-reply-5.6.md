# App Review 답장 — Guideline 5.6 Developer Code of Conduct (2026-10-08 수신)

Apple 문구: "a pattern of unusual behavior … commonly associated with fraudulent activity. Specifically, the app contains features that appear to have been intentionally hidden during the review process."

판단(추정): 빌드 32 에 숨긴 기능은 없다(원격 설정·서버·지역/날짜 분기 없음, 웹 전용 데모 코드는 kIsWeb 상수로 막힘). 정지·실내에선 속도·경고·기록이 안 변해 심사자가 기능을 못 봤거나, 새 개인 계정에서 비슷한 앱이 연달아 제출된 패턴이 걸렸을 수 있다. → 앱 수정 없이 사실대로 답장 + 구체적으로 어떤 기능인지 묻기.
다시 거절되면: ① 정지 중 "Start moving to see your speed" 안내 ② Info.plist 의 쓰지 않는 Always 위치 문구 제거(ITMS-90683 여부 확인) ③ 웹 전용 데모 코드를 별도 진입점으로 → 새 빌드 + App Review Board 이의 제기.

---

Hello App Review team,

Thank you for your message. We take the Developer Code of Conduct seriously, and we want to clearly confirm that Glance Speed: GPS Speedometer has no hidden, dormant, or undocumented features. The build under review, 1.0.0 (32), is exactly what customers will receive.

- No remote configuration, feature flags, server, or downloaded code. The only network traffic is the Google Mobile Ads SDK banner.
- Nothing depends on region, locale, date, IP address, device, or whether the app is being reviewed.
- Location is requested only "While Using the App". The app never asks for "Always" or background location, and location data never leaves the device.
- Every feature is on the main screen at all times: the speed number (tap the unit to switch MPH / km/h), the mode bar (Car / Bike / Run / Boat), Alert (a speed limit the user sets), Gauge / Digits, HUD (mirrored display for the windshield), Reset trip, and Settings (units, display, HUD mirror, driving safety notice, privacy policy).

The only thing that changes is the GPS reading itself. When the iPhone is stationary or indoors, the app correctly shows 0 or "No GPS signal", so the red speed alert and the trip totals change only while the device is actually moving. That is why our screen recording was made while walking outdoors. To see it on your device: walk outside (or ride as a passenger), tap Alert, turn it on and lower the limit to 3 MPH with the −5 / −1 buttons — the screen turns red as soon as walking speed goes above it.

If a specific screen or behavior looked hidden to you, could you please tell us which one? We will gladly explain it or change it in the next build.

Thank you for your time.
