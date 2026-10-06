# 심사 메모 (App Review Notes, 2.1 대비 7항목)

`ios-metadata.json` 의 `reviewNotes` 와 같은 내용. 화면 녹화는 TestFlight 때 사용자에게 부탁(아래 순서).

## 녹화 순서 (30초 안팎)
1. 앱 열기 → 첫 화면(큰 마을)
2. Use My Location → 다이얼·오늘 점수
3. Hunting 누르기 → 허용 시간 카운트다운
4. 주간 띠에서 다른 날 누르기
5. 지도핀 버튼 → 마을 검색(예: bozeman) → 고르기

## 영문 원문

Hello App Review team, thank you for reviewing Glance Solunar: Fishing Times.

1. Screen recording: available on request. To try the core flow in under a minute: open the app (it shows the biggest town in the phone's time zone right away), tap Use My Location (or the map-pin button → search any US/Canadian town), read today's score and the Major/Minor periods on the 24-hour dial, switch to Hunting to see the legal shooting light countdown, and tap another day in the week row.
   - The app has no account registration, login, or user-generated content shared with others.

2. Purpose and audience: Free solunar times for anglers and hunters in the US and Canada: a daily score, Major periods (moon overhead/underfoot, ±1 hour) and Minor periods (moonrise/moonset, ±30 minutes), sunrise, sunset, moon times and phase, and a legal shooting light countdown. It is a planning guide based on sun and moon cycles; the app says plainly that it does not promise fish or game.

3. How to use: No setup. Main screen: week row, 24-hour dial (score in Fishing view, shooting-light countdown in Hunting view), period list, legal shooting light, sun & moon, "How Is This Scored?" (shows the three parts of the score), 30-Day Calendar. Map-pin button: use location, saved places, offline town search. Sliders button: minutes before sunrise / after sunset for shooting light, privacy policy.

4. External services: Google AdMob only (a banner, and an optional rewarded video that opens the 30-day calendar for 24 hours; if no video is available the calendar opens anyway). No backend server, analytics, accounts or AI services. All times are calculated on the device (sun: NOAA solar equations; moon: Meeus, Astronomical Algorithms); location ("When In Use") is used only on the device and never sent anywhere.

5. Regional differences: Works anywhere with location; the bundled town search covers the US and Canada (GeoNames, CC BY 4.0). Times are shown in the place's own time zone. English only.

6. Regulated or third-party content: Hunting rules are set by each state. The app does not state any state's rules; the user sets the minutes before sunrise / after sunset, and every screen that shows shooting light says "Rules differ by state and species — check your regulations." No third-party copyrighted content.

7. In-app purchases: None. No subscriptions; everything is free with ads.
