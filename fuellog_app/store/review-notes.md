# App Review 메모 (Guideline 2.1 대비 7항목 — 공용 규칙 2026-10-05)

`ios-metadata.json` 의 reviewNotes 와 같다 (`App Store 등록 정보 채우기` 가 처음 한 번 API 로 넣는다).
화면 녹화는 사용자 결정(10-06 "확인하지 말고 그냥 진행")으로 첨부하지 않고 "요청하면 제공" + 1분 체험 순서로 대신했다.
2.1 정보 요청이 오면: 사용자 폰으로 30초 녹화(아래 순서) → Reply to App Review 에 이 글 + 영상.

## 녹화 순서 (필요해지면)
1. 앱 켜기 → 차 이름 입력 → Start logging
2. Fill-up → 주행거리 10000, 갤런 12, 단가 3.25 → Save
3. Fill-up → 10300, 10, 총액 35 → "This tank: 30.0 MPG" 보이고 Save → 기록 탭 30.0
4. Charts → Reminders → Add reminder → Oil change → Save (알림 허용) → More → Export CSV (공유 시트) 닫기

---

Hello App Review team, thank you for reviewing Glance MPG: Gas Mileage Log.

1. Screen recording: available on request. To try the core flow in under a minute: type any car name and tap Start logging, tap Fill-up, enter odometer 10000, gallons 12, price 3.25 and tap Save; tap Fill-up again and enter odometer 10300, gallons 10, total 35, then Save. The Log tab now shows 30.0 MPG.
   - The app has no account registration, login, or user-generated content shared with others.

2. Purpose and audience: A simple fuel and car maintenance log for drivers who want to know their real gas mileage (MPG), what they spend on gas and service each month, and when the next oil change or other service is due. All numbers are calculated on the device from what the user enters.

3. How to use: No setup or login. Log tab: Fill-up (odometer, gallons, price, full or partial tank) and Service (oil change, tires, insurance, etc.). Charts tab: MPG trend and spending by month. Reminders tab: maintenance reminders by distance and/or months, with local notifications (permission is asked when the first reminder is saved). More tab: vehicles, units (miles/km, gallons/liters), road trip cost split, CSV export and import.

4. External services: Google AdMob banner ads only (no interstitial or video ads, and no ads on the fill-up or service entry screens). No backend server, analytics, authentication, or AI services. The user's log is stored only on the device; CSV export uses the iOS share sheet and import uses the iOS file picker.

5. Regional differences: None. The app works the same in all regions where it is available. English only; US units by default, metric units available.

6. Regulated industry / third-party content: Not applicable. The app does not connect to vehicles, does not provide financial or mechanical advice, and does not show third-party content. Suggested service intervals are labeled as common intervals with a note to check the owner's manual. All artwork is original.

7. In-App Purchase: None. All features are free, with no subscription or trial.

Thank you!
