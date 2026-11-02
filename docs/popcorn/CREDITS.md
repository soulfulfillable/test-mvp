# Pop & Topple — asset sources and licenses

A Treasurefield Studio prototype (2026-11). Everything on screen is drawn by us in code (Canvas 2D). Every sound is a
real recording/sample from a **CC0 1.0** (public domain dedication) pack — nothing is synthesized in code. No company
names, no personal names.

## Sound effects

Obtained from the npm registry (the only external source reachable from the build environment), through packages that
redistribute the original CC0 packs unchanged. Re-encoded to mono OGG Vorbis (q4) + MP3 (q5) with ffmpeg; `pop` is two
CC0 samples mixed together, everything else is a single sample with only a volume change.

| In game (`audio/`) | Source | Pack / license | Used for |
|---|---|---|---|
| `shoot` | `library/audio/sfx/dash.ogg` | Kenney (https://kenney.nl) sound packs via npm `@netforge/asset-library-files@0.2.0` — each archive's License.txt: "Creative Commons Zero, CC0" | kernel released |
| `pop` | `sounds/rubber/snap.ogg` + `library/audio/sfx/impact.ogg` (mixed) | UI SFX by Romain Simon (https://uisfx.com), npm `uisfx@0.4.0`, `LICENSE-AUDIO`: audio files are CC0 1.0 · Kenney (above) | the burst |
| `fuse` | `sounds/organic/warning.ogg` | UI SFX, CC0 1.0 | shaking kernel before it pops |
| `wood` | `library/audio/sfx/hit.ogg` | Kenney, CC0 1.0 | wood blocks hitting |
| `cup` | `sounds/rubber/drop.ogg` | UI SFX, CC0 1.0 | the bucket hitting things |
| `tumble` | `library/audio/sfx/land.ogg` | Kenney, CC0 1.0 | heavy landing |
| `down` | `sounds/arcade/achievement.ogg` | UI SFX, CC0 1.0 | target reaches the table |
| `win` | `library/audio/sfx/level_up.ogg` | Kenney, CC0 1.0 | level cleared |
| `fail` | `library/audio/sfx/downed.ogg` | Kenney, CC0 1.0 | out of seeds |
| `ui` | `sounds/arcade/press.ogg` | UI SFX, CC0 1.0 | buttons |

## Code libraries

| Library | License | Use |
|---|---|---|
| Planck.js 1.5.1 (`planck`) | MIT | 2D rigid-body physics (Box2D port), fixed 1/120 s step, no random numbers |
| esbuild 0.24.2 | MIT | bundling only (dev) |

Fonts: system fonts only, nothing bundled.
