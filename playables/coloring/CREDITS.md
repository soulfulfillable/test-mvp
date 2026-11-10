# Cozy Coloring (Playgama build) — third-party assets and licenses

All sound in this build ships as compressed audio files (OGG Vorbis + MP3, one of each per sound; Safari cannot
decode Vorbis). Nothing is synthesized in code (Playgama rule 3.3.2). Every file below is **CC0 1.0 (public
domain dedication)** — no attribution required, credited anyway.

## Sound effects — CC0 1.0

The effect files are the same encodes used in our Kitty Sudoku / Kitty Queens / Mole Mash builds
(`playables/molemash/CREDITS.md` has the full provenance); only the file names and the use changed.

| In game (`audio/`) | Source | Used for |
|---|---|---|
| `dab.*` | UI SFX by Romain Simon (https://uisfx.com, npm `uisfx@0.4.0`, `sounds/dreamy/snap.mp3`, audio CC0) | a piece is colored (pitch varies a little per tap) |
| `pick.*` | uisfx `sounds/mechanical/press.mp3` (CC0) | color picked in the palette, zoom buttons, mode switch, wrong-number tap (lower pitch) |
| `color-done.*` | Kenney (https://www.kenney.nl) `coin.ogg` via npm `@netforge/asset-library-files@0.2.0` (CC0) | every piece of one color is done, picture unlocked |
| `finish.*` | Kenney `level_up.ogg` (same package, CC0) | picture complete |
| `swoosh.*` | Kenney `dash.ogg` (same package, CC0) | rewarded "fill this color" |
| `mute-on.*` / `mute-off.*` | uisfx `sounds/arcade/toggle-on.mp3` / `toggle-off.mp3` (CC0) | sound on / off |

## Music — CC0 1.0 (FreePD, via the public mirror github.com/SoundSafari/CC0-1.0-Music)

| In game (`audio/`) | Track | Author | Original page | Processing |
|---|---|---|---|---|
| `bgm-guitar.*` | "Still Pickin" | Kevin MacLeod | https://freepd.com (FreePD: "Free Of Attribution, Creative Commons 0") — mirror file `freepd.com/Still Pickin.mp3` | 64 s excerpt from 0:14, 2.5 s crossfade loop seam, mono, about −20 LUFS; OGG q3 + MP3 112 kbps |

FreePD closed in 2025; CC0 is irrevocable, and the SoundSafari mirror keeps the files as published.

## SDK

`playgama-bridge.js` — Playgama Bridge SDK 2.4.0, from npm `@playgama/bridge@2.4.0` (`dist/playgama-bridge.js`),
license in the package. Refresh it with `npm pack @playgama/bridge` before each upload.

## Everything else

Code (`index.html`, `coloring-pics.js`, `gen-data.js`), the 20 pictures, the stroked tool icons and all text:
© 2026 Soulfulfill / Treasurefield Studio. Every picture is drawn by our own code: we outline each subject with a few
polygons, our generator scatters points, triangulates them (Bowyer-Watson Delaunay), shades each facet from a fixed light
direction and merges facets into tappable pieces. `coloring-data.js` is that output, precomputed so phones load fast.
No image files, no generated-AI artwork. Fonts: system fonts only, nothing bundled.
