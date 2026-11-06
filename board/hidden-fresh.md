# Hidden Friends — Fresh Start — worker board
## 🔁 Handoff
- Last saved: 2026-11-06 · branch `claude/hidden-fresh` (merged to main, live) · paths `hidden_fresh/`, `docs/hidden-fresh/`
- Live: https://soulfulfillable.github.io/test-mvp/hidden-fresh/
- Just finished: prototype "Odd Capy Out" — 3 rounds (wrong-way / disguise / 2 headstands), found actions, spotlight hint, robot 90/90 at 390×844, 360×640, 320×568 (real touch taps). Screenshots `hidden_fresh/qa/`.
- In progress: nothing.
- Next: ① user plays on phone, answers: R1 too easy? R2 disguise findable? R3 fair? are the found actions funny enough? ② tune by answer (disguise line weight, crowd count via `minStep` in ROUNDS, tilt range) ③ optional: tiny sound check on a real iPhone (Web Audio unlocks on first tap) ④ only then think about more rounds — keep this brief, don't add genres.
- User waiting: feel feedback on the live link.
- Handoff sentence: `soulfulfillable/test-mvp 의 board/hidden-fresh.md 와 plans/hidden-friends-fresh.md 를 읽고 "Next"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로.`

## Known limits
- Not tested on a real iPhone; safe-area insets can't be emulated in headless Chromium (CSS uses env(safe-area-inset-bottom) + 100dvh).
- Difficulty judged by eye from screenshots; no human has played yet. Haptics = navigator.vibrate (not on iOS Safari).

## User feedback
- 11-06 Little Hideaways(Codex) 폐기: 너무 쉽고 재미없고 의도와 다름. Fresh start 승인.
