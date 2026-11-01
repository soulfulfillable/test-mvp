# Knock Chain — asset sources and licenses

Stage 1 (2026-11-01): one still of Level 1, two candidate looks. Everything here is either drawn by us in code or
**CC0 1.0** (public domain dedication, no attribution required — credited anyway). No company names, no personal names.

## Variant A — procedural 2.5D (`playables/knockchain/art/render-a.html`)

Drawn entirely by us on Canvas 2D at render time. No third-party art. Rules baked into the code: one light
(upper-left, world vector (-1, 2, 0.6)), three face shades (top / +z / +x), the same projected-and-blurred ground
shadow for every object, contact AO at every base, one line weight, one palette. The cat and the slingshot are
vector drawings in the same file. Reproducible: open the file, screenshot.

## Variant B — three.js 3D (`playables/knockchain/art/render-b.html`)

| What | Source | License | Note |
|---|---|---|---|
| `art/assets/cat.glb` (animated cat, 8 clips: Idle, Walk, Run, Jump, Headbutt, Death…) | Quaternius — https://quaternius.com (via Poly Pizza, model listed Public Domain) | CC0 1.0 | obtained through the npm package `@netforge/asset-library-files@0.2.0` (`library/lowpoly/cat.glb`, meshopt-compressed copy); provenance in `art/assets/NOTICE-netforge.txt`. Its colour atlas is dark grey in the cat's UV region, so B renders it with a flat orange material (eyes, nose, whiskers are geometry) |
| Kenney `crate.glb` (Space Kit) | Kenney — https://kenney.nl | CC0 1.0 | **tried and dropped** — it is a purple sci-fi crate, wrong material for a wooden level. File removed; the crate is now wood primitives |
| everything else in B (island, deck planks, rails, wood/glass/stone blocks, crate, switch, slingshot, ball, dots) | three.js primitives + a procedural wood texture drawn on a canvas | ours | three.js itself is MIT (npm `three@0.170.0`) |

CC0 legal text: `art/assets/CC0-1.0.txt`. The package that redistributes the packs is MIT (`NOTICE-netforge.txt`
lists each pack and where its license was verified).

## Variant C — generated "target look" reference

Not produced: Everygen answered **402 No active subscription** (2026-11-01), same as for Mole Mash audio. No other image
site is reachable from this environment. A generated image is never shipped in the game (unclear rights, not reproducible frame to frame).

## Sound effects (criterion 5 — list only in stage 1; files come in stage 2)

Candidates, all CC0, reachable from this environment through npm: Kenney *Impact Sounds* / *Interface Sounds*
(`@netforge/asset-library-files`, see `playables/molemash/CREDITS.md` for the exact file mapping we already use), UI
sounds from `uisfx` (audio CC0).

| Action | Sound |
|---|---|
| pull the band | stretch creak (rising) |
| release | snap + whoosh |
| ball hits wood | thud (impactWood) |
| ball hits glass | glass crack + shatter |
| ball hits stone | dull knock (impactStone) |
| block falls / tumbles | wood tumble, short |
| switch pressed | click + mechanical thunk |
| crate opens | lid creak + pop |
| cat freed (success) | happy meow + chime |
| last ball lost (fail) | sad meow + soft "wah" |
| UI tap | soft click (uisfx arcade) |
