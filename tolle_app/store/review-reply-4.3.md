# App Review 답장 — Guideline 4.3 / 4.2.6 (2026-10-19 반려, 1.0 빌드 36)
재제출하지 말고 ASC 메시지 "Reply to App Review" 에 아래 영어 부분만 붙여 넣는다. (Kitty Queens 4.3 답장과 같은 방식, `catdoku_app/store/review-reply-4.3.md`)
사실 확인: 7번(공유 코드)은 정직하게 — 알림·광고 래퍼와 작은 UI 부품 몇 개는 우리 다른 앱에서 가져왔다(`lib/core/notify.dart` 는 연비 앱, `BackLink` 등은 소음 앱).

---

Hello App Review team, thank you for the detailed questions. Answers below.

1. What the app does / problem it solves
Tolle helps a person read the whole Bible (or the New Testament, or Psalms and Proverbs) on a schedule they choose, and keeps track of exactly where they are. It shows one reading per day, for example "Genesis 1–3, about 10 minutes", and the user checks it off with one tap after reading it in their own Bible; the app contains no Bible text. Each check-off fills squares on a map of all 1,189 chapters. The daily portions are not split by chapter count: our own plan generator divides the chapters by verse count (Psalm 117 has 2 verses, Psalm 119 has 176), so no day is suddenly three times longer than the day before. When the user falls behind, the app does not show red warnings or reset a streak; it offers two choices: spread the remaining chapters over the days left and still finish on the original date, or continue from today and finish later. Separately from the plan, the user can open any book on the map and check off chapters they have already read on their own. The main problem it solves: people who start a reading plan often quit once they fall behind or lose track, and many existing tools make that worse with guilt, uneven days, or accounts and feeds they don't want.

2. Intended user
Christians in the U.S. who want to read through the Bible in a year (or faster) on their own, often for the first time, and who read from a printed Bible or a separate Bible app. Many of them have started a plan before and stopped after falling behind. They want something quiet: no account, no social feed, no daily streak pressure, works offline.

3. Need or gap
Before building it we read reviews of the existing reading plan apps and trackers. The repeated complaints were: daily readings that swing from very short to very long, streak counts that make people feel guilty and quit, no gentle way to get back on schedule, a start date that cannot be changed, required accounts, ads covering the check-off button, and tracker-only apps that record chapters but give no daily plan. Tolle addresses each of these directly: verse-balanced daily portions (15 plan variants, all automatically verified to cover every chapter exactly once with at least one chapter per day), two catch-up options that keep finished days untouched, any start date, no account, no ads on the Today screen, and both a daily plan and a free chapter log in one place. It also offers a chronological order (Job after Genesis 11, Psalms placed alongside David's life, prophets with their kings, letters within Acts), arranged by us at the chapter level.

4. Beta testing
We tested through TestFlight on a physical iPhone (builds 35 and 36) and with an automated test suite that taps every button on every screen at three iPhone sizes, in light and dark mode and with large text (47 tests). Feedback from beta that changed the production build:
- "The plan always starts from Genesis, which is fine, but I also need to check off chapters I've already read." → In build 36, tapping a book on the Map opens its chapters, and the user can mark chapters read; these are stored separately from the plan, so the plan itself is not changed.
- Testing with large text showed plan names and catch-up choices being cut off → those rows were redesigned so nothing is truncated.
- On days with two books, the large title broke in the middle of a book name ("2 / Samuel") → each book now gets its own line.
A further beta request — a per-book reset with a confirmation step, because a full reset felt too risky — is implemented for the next update.

5. Standalone or suite
Standalone. It is the only Bible or faith app on this developer account. The other apps on the account are unrelated (for example a currency converter, a tide chart, a decibel meter, and puzzle games); none of them deals with Bible reading or shares any content with this app.

6. Could it be an in-app purchase or feature of another app?
No. None of the other apps on the account is related to Bible reading or reading plans, so this would not fit as a feature of any of them.

7. Shared code/assets with other apps on the account
The core of the app was written for it: the plan generator and verse balancing, the chronological order, the chapter map, the book screens, the catch-up logic, and all screens and text. A few small generic helpers are reused from my other apps: a wrapper that schedules local notifications, a wrapper around the banner ad, and small interface pieces such as a back button and list section headers. No content, artwork, or app-specific features are shared. Like most apps it uses standard third-party frameworks: Flutter, Google Mobile Ads, flutter_local_notifications, shared_preferences, share_plus and url_launcher. Our own build and upload scripts are reused across our apps, but they are not part of the app binary.

8. Shared codebase/SDK/content with third-party apps
No, beyond the standard frameworks listed above. The only outside data is the number of chapters and verses in each book of the Bible, taken from an open-source (MIT-licensed) dataset; it contains no Bible text. The app is not built from a template or an app generation service.

9. Created for a client or third party?
No. I am an individual developer; the concept, code, plan design and app icon are my own, and I submit it under my own account.

Thank you for your time.
