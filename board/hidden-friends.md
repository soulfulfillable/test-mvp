# Hidden Little Friends — worker board

## ⏸️ 재개하지 않음 (2026-11-06)
사용자 결정으로 이 세션·브리프는 재개하지 않는다. 후속은 `board/hidden-fresh.md`(Fresh Start). 파일은 보존.

## 🔁 Handoff
- Last saved: 2026-11-06 · branch `claude/hidden-friends` (merged to main, live)
- Live: https://soulfulfillable.github.io/test-mvp/hidden-friends/
- Just finished: **prototype built, robot-tested, deployed.** 3 scenes — Pond Choir (5 frogs, camouflage on lily pads, easy), Hot Spring (7 capybaras among lookalike stones, medium), Night Garden (8 sleepy animals peeking from cover, harder). Each find: ring burst + colour-in + its own note, then it hops along an arc to a seat in the stage area; seated friends sing their notes in turn every ~4 s, so **the song grows with every find** (signature). All found → group performance + finale (music notes / steam / lanterns+fireflies) → postcard. Built-in "tells" per scene (frogs blink, capybaras wiggle, sleepers puff a "z"). Free hint (soft glow near one friend, 5 s cooldown). Menu = postcard collection, restart scene, sound toggle. Local progress (localStorage `hlf.v1`).
- Robot: `NODE_PATH=/opt/node-tools/node_modules node hidden_friends/robot.cjs` → **69/69 pass** at 390×844 & 375×667 (real touchscreen taps) and 1366×768 (mouse). Screenshots + `qa/report.json` in `hidden_friends/qa/`. Build: `hidden_friends/build.sh` → `docs/hidden-friends/`. Audio: `hidden_friends/tools/make_audio.sh <uisfx package dir>`.
- Reference title: **not identified** (3 web searches; no match for a YouTube Playables "Find 10 Different Capybaras"). Closest genre neighbours: Hidden Folks, Find The Capybara: Seek & Spy (iOS), Hidden Capybaras with Orange (Steam). Unconfirmed.
- In progress: nothing.
- **Next**: ① user plays ~1 min and answers: is the first frame clear? does the "choir grows" moment feel good or annoying? is scene 2/3 too easy/hard? ② by answer: tune difficulty (move friends deeper into cover, more lookalikes) or the choir loop (volume/interval, or only sing on a find) ③ then candidates (only with approval): scenes 4–6, a pinch-zoom if scenes get denser, postcard share image, a 'found' animation polish per animal (frog hop vs capybara waddle).
- User waiting: feel feedback on the live link.
- Handoff sentence: `soulfulfillable/test-mvp 의 board/hidden-friends.md 와 plans/hidden-little-friends.md 를 읽고 "Next"부터 이어서 해줘. CLAUDE.md·DESIGN.md·PLAYBOOK.md 규칙대로.`

## Known limits (not hidden)
- Sounds were chosen by name/pitch analysis, not by ear (sandbox can't listen). Notes are CC0 pings pitch-shifted to a pentatonic scale.
- Not tested on a real iPhone (in-app sheet gesture guard is in, untested). No zoom — targets are ≥ 44 px even on 375×667.
- Difficulty set by eye only; no human has played it yet. Scene 1 is intentionally very easy.
- Haptics: `navigator.vibrate` only (works on Android, not iOS Safari).

## User feedback
- 11-06 (via Codex) new project approved: cute hidden-animal finding game, 3 scenes, differentiated (found animals complete a scene together).
