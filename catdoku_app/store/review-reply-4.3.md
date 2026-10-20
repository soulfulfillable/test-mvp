# App Review 답장 — Guideline 4.3 / 4.2.6 (2026-10-19 반려, 1.1.0 빌드 37)
재제출하지 말고 ASC 메시지 "Reply to App Review" 에 아래 영어 부분만 붙여 넣는다.

---

Hello App Review team, thank you for the detailed questions. Answers below.

1. What the app does / problem it solves
Kitty Queens is a logic placement puzzle. Each board is a grid split into color regions; the player places one cat in every region so that every row and column has exactly one cat and no two cats touch, even diagonally. All boards are generated on the device by our own generator, and every board is checked to have exactly one solution, so it can always be solved by reasoning, never by guessing. The app solves a simple problem: a few minutes of calm, offline, fair brain exercise. When the player gets stuck it explains why in plain words (for example "No spot left in row 3 — try moving a cat") instead of only showing an error, and cells ruled out by a placed cat are marked automatically, which keeps it approachable for people new to this kind of puzzle.

2. Intended user
Adults and families who enjoy short logic puzzles (sudoku, crosswords, daily word games) in short breaks such as a commute or a lunch break, including people who have never played a "Queens / Star Battle" style puzzle before. No account, no internet needed to play.

3. Need or gap
Many puzzle apps either give a single daily board or a short fixed pack, and players who get stuck often have no idea why a move is wrong. Kitty Queens combines (a) one shared Daily Puzzle that is the same for every player that day, (b) 500 progressive levels from 5×5 up to 9×9, each verified to have a unique solution, and (c) explanations of rule breaks and dead ends written for beginners. It works fully offline and needs no sign-in.

4. Beta testing
We tested through TestFlight on a physical iPhone across about 20 builds, plus an automated test suite that taps every button on every screen (32 tests) at real device sizes. Feedback from beta that changed the production build:
- "It says there's no spot left, but I can see empty squares" → the message now names the exact row/column/region that is blocked.
- The dead-end warning felt too loud and alarming → replaced with a calm one-line hint.
- Players wanted to replay solved levels and see how many remain → added the Levels screen with progress and replay.
- Fast double taps could skip the win screen or cost two hearts at once → fixed.
- When no reward video was available, players were stuck → the reward is now given anyway.

5. Standalone or suite
Standalone. It is the only game on this developer account. The other apps on the account are unrelated utilities (for example a currency converter and a tide chart); none of them contains puzzles or shares any content with this app.

6. Could it be an in-app purchase of another app?
No. None of the other apps on the account is a game, so this puzzle would not fit as a feature of any of them.

7. Shared code/assets with other apps on the account
No shared puzzle code, art, or content. The puzzle generator, solver, board and screens were written for this app. Like most apps, it uses standard third-party frameworks only: Flutter, Google Mobile Ads, Apple In-App Purchase (in_app_purchase) and shared_preferences. Our own build/upload script is reused across our apps, but it is not part of the app binary.

8. Shared codebase/SDK/content with third-party apps
No, beyond the standard frameworks listed above. The app is not built from a template or an app generation service.

9. Created for a client or third party?
No. I am an individual developer; the concept, code, art and app icon are my own, and I submit it under my own account.

Thank you for your time.
