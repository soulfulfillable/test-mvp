# Soulfulfill Games — Playables pitch (English)

Use this text for the Google Playables interest form, partner consoles (Playgama etc.) and emails.
Catalog page with screenshots and play links: https://soulfulfillable.github.io/test-mvp/games.html
Publisher channel: Peblit — https://www.youtube.com/@peblit

## Studio (one line)

Soulfulfill is a one-person studio making short, tap-only HTML5 games for the phone browser: each game is a single file, portrait, works offline, and a round takes 30 seconds to a few minutes.

## Studio (short paragraph)

Soulfulfill builds small games the way casual players actually play them: one thumb, in portrait, for a minute on the bus. Every title is a self-contained HTML file under 100 KB with no engine runtime, no fonts, no CDN and no third-party analytics, so it loads instantly and runs offline. Daily puzzles are seeded by the date, so everyone gets the same board and the leaderboard is fair. Each game has a friend-challenge link that puts your friend's record on the screen while you play.

## Games (one line each)

| # | Game | Genre | One line | Play |
|---|---|---|---|---|
| 1 | Catdoku | Puzzle | One cat per color, row and column, and no two cats may touch. A new 7×7 board every day. | https://soulfulfillable.github.io/test-mvp/catdoku.html |
| 2 | Cats vs Dogs | Puzzle | Fill the 6×6 grid with three cats and three dogs per line, never three of a kind in a row. | https://soulfulfillable.github.io/test-mvp/cats-vs-dogs.html |
| 3 | Mole Mash | Arcade | 45 seconds of county-fair whack-a-mole. Moles sink while you watch, so hit them before they're gone. | https://soulfulfillable.github.io/test-mvp/mole-mash.html |
| 4 | Why Did the Chicken Cross the Road? | Arcade | Tap to hop one lane at a time. A combine harvester is right behind you, so don't stop. | https://soulfulfillable.github.io/test-mvp/chicken-cross.html |
| 5 | Daily Stairs | Arcade | Tap left or right to climb. Everyone gets the same staircase today, so the ranking is fair. | https://soulfulfillable.github.io/test-mvp/daily-stairs.html |
| 6 | Ice Cream Tower | Arcade | Drop scoops onto a swaying tower. Only the overlap stays, and hesitation melts the scoop. | https://soulfulfillable.github.io/test-mvp/icecream-stack.html |
| 7 | Climb or Burn | Arcade | Jump platform to platform while the fire climbs below you. Catch water drops to cool it down. | https://soulfulfillable.github.io/test-mvp/firechase.html |
| 8 | Poop Dodge | Arcade | Slide left and right and survive the falling poop. Seconds survived is your score. | https://soulfulfillable.github.io/test-mvp/poop-dodge.html |
| 9 | Cozy Coloring | Relax | Paint by number: pick a color, tap the matching pieces. Six pictures, a free mode, pinch to zoom. | https://soulfulfillable.github.io/test-mvp/coloring-book.html |

Suggested first two for a partner submission: **Catdoku** (daily puzzle, high replay) and **Mole Mash** (simplest loop, 45-second rounds).

## Why these fit YouTube Playables

- **Single file per game.** No build step, no asset bundle, no engine runtime. Largest game is 59 KB before compression (limit is 30 MiB per file).
- **Portrait, one-thumb, tap only.** No hold, no drag-to-aim, no keyboard. Designed for the in-app sheet on iPhone and Android.
- **Zero external calls.** No fonts, no CDN scripts, no analytics, no remote config. Verified by loading each game in a headless browser and logging every network request: none.
- **Offline after first load.** All state is local. Progress, best scores and daily boards live in local storage (will move to the Playables save API when the SDK is available).
- **One natural ad slot per game.** Every game already has a single interstitial-shaped moment (game over / round end). Ads will use only the Playables SDK; there is no AdMob or other ad code in the web builds.
- **Short rounds, immediate readability.** Each game is understood in the first three seconds without a tutorial, and a round ends in 30 seconds to a few minutes.
- **Fair daily competition.** Puzzle and stairs boards are generated from the date (KST), so the leaderboard compares the same board for everyone.
- **English UI throughout.** All nine games are in English.

## Suggested answers for an interest form

- **Studio / developer name:** Soulfulfill
- **YouTube channel:** Peblit (https://www.youtube.com/@peblit)
- **Portfolio:** https://soulfulfillable.github.io/test-mvp/games.html
- **Engine:** Hand-written HTML5 Canvas / DOM, vanilla JavaScript (no framework)
- **Number of titles ready today:** 9
- **Genres:** Puzzle (2), Arcade (6), Relax / coloring (1)
- **Orientation:** Portrait only
- **Monetization:** Playables SDK ads only (one slot per game at round end). No IAP in the web builds.
- **Timeline:** SDK integration for the first two games within a week of receiving SDK access; the remaining seven follow the same template.

## Do not include

Company names, real names, personal email addresses. Brand is Soulfulfill; the contact is the account that submits the form.
