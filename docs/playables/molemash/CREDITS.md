# Mole Mash (Playgama build) — third-party assets and licenses

All sound in this build ships as compressed audio files (OGG Vorbis / MP3). Nothing is synthesized in code
(Playgama rule 3.3.2). Every file below is **CC0 1.0 (public domain dedication)** — no attribution required,
credited anyway. Where we got them: the npm registry (the only external source reachable from the build
environment), via packages that redistribute the original CC0 packs unchanged.

## Sound effects — Kenney (https://www.kenney.nl), CC0 1.0

Obtained from the npm package `@netforge/asset-library-files@0.2.0` (MIT package; its `NOTICE` lists the
Kenney packs — Impact Sounds, Interface Sounds, RPG Audio, Digital Audio — with "License: Creative Commons
Zero, CC0" in each archive's License.txt). We re-encoded to mono OGG and matched loudness; names map as:

| In game (`audio/`) | Source file in the package | Used for |
|---|---|---|
| `bonk.ogg` | `library/audio/sfx/hit.ogg` | mole hit |
| `bonk2.ogg` | `library/audio/sfx/impact.ogg` | mole hit (layer) |
| `gold.ogg` | `library/audio/sfx/coin.ogg` | gold mole |
| `skunk.ogg` | `library/audio/sfx/hurt.ogg` | hit the skunk |
| `miss.ogg` | `library/audio/sfx/downed.ogg` | mole escaped |
| `tick.ogg` | `library/audio/sfx/ui.ogg` | last-5-seconds tick |
| `heart.ogg` | `library/audio/sfx/revive.ogg` | heart restored / continue |
| `best.ogg` | `library/audio/sfx/level_up.ogg` | new best |
| `over.ogg` | `library/audio/sfx/boss.ogg` | round over |
| `whiff.ogg` | `library/audio/sfx/dash.ogg` | swing at nothing |

## Interface sounds — UI SFX by Romain Simon (https://uisfx.com), audio CC0 1.0

Obtained from the npm package `uisfx@0.4.0` (`LICENSE-AUDIO`: "The audio files under sounds/ are dedicated to
the public domain under CC0 1.0"). Pack `arcade`:

| In game | Source | Used for |
|---|---|---|
| `start.ogg` | `sounds/arcade/start.mp3` | round start |
| `mute-on.ogg` | `sounds/arcade/toggle-on.mp3` | sound turned on |
| `mute-off.ogg` | `sounds/arcade/toggle-off.mp3` | sound turned off |

## Music — "Battle Theme A" by cynicmusic (Alexandr Zhelanov), CC0 1.0

https://opengameart.org/content/battle-theme-a — License listed on the page: CC0 (verified by the
`@netforge/asset-library-files` NOTICE on 2026-10-16). Obtained from that package
(`library/audio/music/battle_theme_a.mp3`). We trimmed the trailing silence, lowered it under the effects
(about −19 LUFS), and added a short fade at the loop seam → `audio/bgm.mp3` (95 s loop, 112 kbps).

Known gap: a county-fair / calliope tune would fit the theme better; this is the only CC0 music that could be
sourced offline. Swap `audio/bgm.mp3` for a better loop when one is available (keep the file name).

## SDK

`playgama-bridge.js` — Playgama Bridge SDK 2.4.0, from npm `@playgama/bridge@2.4.0` (`dist/playgama-bridge.js`),
license in the package. Refresh it with `npm pack @playgama/bridge` before each upload.

## Everything else

Code, art (canvas drawings) and text: © 2026 Soulfulfill. Fonts: system fonts only, nothing bundled.

## Hit-sound styles (v1.4.0) — UI SFX by Romain Simon, audio CC0 1.0

From the same `uisfx@0.4.0` package: `hit-cute` = `dreamy/snap`, `hit2-cute` = `dreamy/reaction`; `hit-pop` = `rubber/press`,
`hit2-pop` = `rubber/reaction`; `hit-arcade` = `arcade/snap`, `hit2-arcade` = `arcade/success`; `hit-chime` = `glass/press`,
`hit2-chime` = `glass/reaction`. Re-encoded to mono OGG/MP3, loudness matched. "Classic thump" stays the Kenney pair above.
