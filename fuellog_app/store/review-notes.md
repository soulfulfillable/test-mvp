# App Review 답장·메모 (Guideline 2.1 Information Needed — 2026-10-05 Apple, 1.0 (33) Rejected)

신규 개인 계정 첫 제출이라 오는 정형 요청(환율·대출·소음·속도계·물때와 같음). 앱 문제 지적 아님.
폰용 답장 페이지: `docs/fuel-log-review.html` (복사 버튼). 같은 글을 `ios-metadata.json` reviewNotes(=App Review Notes)에도 넣는다.

## 녹화 순서 (사용자 아이폰, 40~60초)
1. 녹화 전에: 아이폰에서 Glance MPG 를 한 번 길게 눌러 **앱 삭제** → TestFlight 앱 → Glance MPG → **설치**(빌드 1.0.0 (33)) — 첫 화면부터 찍히게
2. 제어 센터 → **화면 기록 ●** 시작
3. **앱 아이콘을 눌러 켜는 것부터** 찍기 (Apple 조건)
4. 차 이름에 `My Car` → **Start logging**
5. **Fill-up** → Odometer `10000`, Gallons `12`, Price `3.25` → **Save**
6. **Fill-up** → Odometer `10300`, Gallons `10`, Total `35` → 아래에 "This tank: 30.0 MPG" 가 보이면 **Save** → 위에 30.0 MPG
7. 아래 **Reminders** 탭 → **Add reminder** → **Oil change** → **Save reminder** → 알림 **허용**
8. **Charts** 탭 잠깐 → **More** 탭 → **Export CSV** → 공유 창이 뜨면 닫기 → 녹화 멈춤

## 보낸 뒤
- Reply 에 글 붙여넣기 + 녹화 첨부 → **Send**
- 버전 화면 **Update Review**(또는 **Resubmit to App Review**) → 상태가 **Waiting for Review** 인지 확인
  (Ready for Review 로 남으면 Add for Review → Submit — Tolle 세션 교훈)

---

Hello App Review team, thank you for reviewing Glance MPG: Gas Mileage Log. A screen recording from a physical iPhone (latest iOS, build 1.0.0 (33)) is attached.

1. Screen recording: attached. It starts at app launch and shows the first-run screen (name your car, choose units), logging a fill-up (odometer, gallons and price; the total fills in automatically), logging a second fill-up where the app shows "This tank: 30.0 MPG" before saving and then the 30.0 MPG average on the Log tab, adding an oil change reminder with the iOS notification permission, the Charts tab, and More > Export CSV with the iOS share sheet.
   - The app has no account registration, login, or user-generated content shared with others.

2. Purpose and audience: A free fuel and car maintenance log for drivers who want to know their real gas mileage (MPG), what they spend on gas and service each month, and when the next oil change or other service is due. It replaces paper logs and spreadsheets, and the user's data can be exported as CSV at any time.

3. How to use: No setup or login. On first launch, type a car name and tap Start logging. Log tab: Fill-up (odometer, gallons, price, full or partial tank) and Service (oil change, tires, insurance, etc.). MPG appears after two full fill-ups. Charts tab: MPG trend and spending by month. Reminders tab: maintenance reminders by distance and/or months, with local notifications. More tab: vehicles, units (miles/km, gallons/liters), road trip cost split, CSV export and import. No sample files or credentials are needed.

4. External services: Google AdMob banner ads only (no interstitial or video ads, and no ads on the fill-up or service entry screens). No backend server, analytics, authentication, payment processor, data provider, or AI services. All calculations run on the device and the log is stored only on the device; CSV export uses the iOS share sheet and import uses the iOS file picker. Reminders are local notifications scheduled on the device.

5. Regional differences: None. The app works the same in all regions where it is available. English only; US units by default, metric units available in More.

6. Regulated industry / third-party content: Not applicable. The app does not connect to vehicles, does not give financial or mechanical advice, and shows no third-party content. Suggested service intervals are labeled as common intervals with a note to check the owner's manual. The app icon and all artwork are our own.

7. In-App Purchase: None. All features are free, with no subscription or trial.

Thank you!
