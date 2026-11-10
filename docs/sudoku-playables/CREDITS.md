# Kitty Sudoku (Playgama build) — third-party assets and licenses

All sound in this build ships as compressed audio files (OGG Vorbis + MP3, one of each per sound; Safari cannot
decode Vorbis). Nothing is synthesized in code (Playgama rule 3.3.2). Every file below is **CC0 1.0 (public
domain dedication)** — no attribution required, credited anyway. The files are the same encodes used in our
Mole Mash and Kitty Queens builds (`playables/molemash/CREDITS.md` has the full provenance); only the use changed.

## Sound effects — Kenney (https://www.kenney.nl), CC0 1.0

From the npm package `@netforge/asset-library-files@0.2.0` (MIT package; its `NOTICE` lists the Kenney packs —
Impact Sounds, Interface Sounds, RPG Audio, Digital Audio — with "License: Creative Commons Zero, CC0").
Re-encoded to mono OGG/MP3, loudness matched.

| In game (`audio/`) | Source file in the package | Used for |
|---|---|---|
| `wrong.*` | `library/audio/sfx/hurt.ogg` | a wrong number (mistake counted) |
| `win.*` | `library/audio/sfx/level_up.ogg` | puzzle solved |
| `lose.*` | `library/audio/sfx/boss.ogg` | three mistakes |
| `heart.*` | `library/audio/sfx/revive.ogg` | continue after an ad |
| `hint.*` | `library/audio/sfx/coin.ogg` | hint fills a cell |
| `clear.*` | `library/audio/sfx/dash.ogg` | erase, undo |

## Interface sounds — UI SFX by Romain Simon (https://uisfx.com), audio CC0 1.0

From the npm package `uisfx@0.4.0` (`LICENSE-AUDIO`: "The audio files under sounds/ are dedicated to the public
domain under CC0 1.0").

| In game | Source | Used for |
|---|---|---|
| `mark.*` | `sounds/mechanical/press.mp3` | note (pencil mark) toggled, Notes switch |
| `cat.*` | `sounds/dreamy/snap.mp3` | correct number placed |
| `start.*` | `sounds/arcade/start.mp3` | puzzle start |
| `mute-on.*` | `sounds/arcade/toggle-on.mp3` | sound turned on |
| `mute-off.*` | `sounds/arcade/toggle-off.mp3` | sound turned off |

## Music — CC0 1.0 (FreePD, via the public mirror github.com/SoundSafari/CC0-1.0-Music)

| In game (`audio/`) | Track | Author | Original page | Processing |
|---|---|---|---|---|
| `bgm-ukulele.*` (default) | "Happy Whistling Ukulele" | Rafael Krux | https://freepd.com/upbeat.php (FreePD: "Free Of Attribution, Creative Commons 0") | 48 s excerpt from 0:30, 1.5 s crossfade loop seam, about −19 LUFS |
| `bgm-ragtime.*` | "The Entertainer" (Scott Joplin, arr./performed by Kevin MacLeod) | Kevin MacLeod | same FreePD page | 42 s excerpt from 2:25, 2.5 s crossfade seam |

FreePD closed in 2025; CC0 is irrevocable, and the SoundSafari mirror keeps the files as published. Only the chosen
track is downloaded at run time (the player switches on the title screen or in the pause menu).

## SDK

`playgama-bridge.js` — Playgama Bridge SDK 2.4.0, from npm `@playgama/bridge@2.4.0` (`dist/playgama-bridge.js`),
license in the package. Refresh it with `npm pack @playgama/bridge` before each upload.

## Everything else

Code (`index.html`, `sudoku-core.js`: seeded generator with a unique-solution check and a singles-based difficulty
grader), art (inline SVG: the orange tabby in four moods, the stroked tool icons) and text: © 2026 Soulfulfill /
Treasurefield Studio. The cat is the same drawing as in our Kitty Queens. Fonts: system fonts only, nothing bundled.
Sudoku itself is a public-domain puzzle form; this game adds nothing to its rules.
