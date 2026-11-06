# Hidden Little Friends (working title) — cute hidden-animal finding game (Head, 2026-11-06)

## Approval (user, via Codex) — build a prototype
Separate worker session under Head. Keep Mole Mash and the Bible app separate. Isolated paths `hidden_friends/` + `docs/hidden-friends/`, branch `claude/hidden-friends`. No changes to existing games.

## Reference (unconfirmed)
User sent 6 screenshots of a YouTube Playables hidden-animal game — **exact title not identified**, nobody on our side has played it. Seen in screenshots: "Find 10 Different Capybaras" — dense black-and-white crowd of near-identical capybaras, 10 subtly different costumes/poses; tap correct → colored, progress 0–10, countdown, Hint, rewarded +20s and Skip; completion: colored found characters, 3 stars, Next/Home; hint modal (consumable Show hint, rewarded Show answer); kitten loading icon, level grid, 7-day rewards. User: next level had frogs and a different feel. **Do not copy art/UI/layout or reskin.** Try to identify the original; report uncertainty.

## Core (keep)
Very intuitive SEARCH + TAP. Varied scenes/animals, consistent core. No mandatory drag puzzles, no complicated mechanics.

## Differentiation hypothesis (not proven)
Found animals **join a tiny scene and complete it together** — e.g. frogs form a pond choir, capybaras fill a bath/picnic, sleepy little animals light a night garden. Each correct find: color + modest satisfying motion/sound. Scene complete: short payoff + collectible postcard.

## Prototype scope
- **3 polished mobile-portrait scenes**, varied hiding patterns/difficulty. Scene 1 = easy success in seconds.
- Start directly in game with one short clear task. Clear remaining count. Readable targets, comfortable tap hitboxes. Optional zoom only if needed. Gentle hints (never required), restart/next, local progress.
- Original, consistent cute art — **no emoji scatter** as stand-in art. Targets never hidden behind overlays.
- Not now: login, currency shop, daily rewards, real ads (a future optional reward hint may be shown as a placeholder only if needed), paid services/assets, moderation submission, campaigns.
- Lessons: PLAYBOOK 6장 (Knock Chain 11-02: target/controls/hero big and readable on the first frame, no text instructions). Popcorn & Knock Chain were rejected — don't repeat their patterns.

## Done = 
Reviewable Pages link, real-tap tests at 390px + desktop, report: what was tested, art source/license, limitations, reference-title research result.
