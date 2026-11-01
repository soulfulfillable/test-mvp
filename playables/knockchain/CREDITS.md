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

## Sound effects (stage 2, in the game) — Kenney, CC0 1.0

From `@netforge/asset-library-files@0.2.0` → `library/audio/sfx/*.ogg` (Kenney Impact / Interface / RPG / Digital
Audio packs, each archive's License.txt "Creative Commons Zero, CC0"; see `art/assets/NOTICE-netforge.txt`).
Re-encoded to mono OGG (q4) + MP3 (q5) with ffmpeg, no edits. Nothing is synthesized in code.

| In game (`audio/`) | Source file | Used for |
|---|---|---|
| `shoot` | `dash.ogg` | ball released |
| `wood` | `hit.ogg` | ball hits wood |
| `stone` | `impact.ogg` | stone/ball hits stone |
| `glass` | `big_kill.ogg` | glass hit / shatter |
| `tumble` | `land.ogg` | blocks tumbling, ground contact |
| `switch` | `confirm.ogg` | button pressed |
| `open` | `revive.ogg` | crate opens |
| `win` | `level_up.ogg` | cat freed |
| `fail` | `downed.ogg` | out of balls |
| `ui` | `ui.ogg` | HUD taps |

## Code libraries (stage 2)

| Library | License | Use |
|---|---|---|
| three.js 0.170.0 (`three`) | MIT | rendering, GLTF + meshopt loaders, RoundedBoxGeometry |
| Planck.js 1.5.1 (`planck`) | MIT | 2D rigid-body physics (Box2D port), fixed timestep |
| esbuild 0.24.2 | MIT | bundling only (dev) |
