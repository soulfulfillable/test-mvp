# Escape 3D (trial) — asset sources and licenses

Everything here is either made by us in code or **CC0 1.0** (public domain dedication — no attribution required,
credited anyway). No company names, no personal names.

## Hero character — Kenney "Mini Characters 1.0", CC0 1.0

| In game | Source | License |
|---|---|---|
| `assets/hero.glb` (rigged, 32 clips; we use `idle`, `walk`, `sprint`, `jump`, `fall`, `emote-yes`) | Kenney — https://kenney.nl/assets/mini-characters (character "female-b"); archive License.txt: "License: (Creative Commons Zero, CC0)" | CC0 1.0 |

Obtained through the npm package `@netforge/asset-library-files@0.2.0` (`library/lowpoly/mini_female_b.glb`,
a meshopt-compressed copy of the Kenney file; the package is MIT, its NOTICE lists each pack and where the license was
verified — copied to `assets/NOTICE-netforge.txt`). CC0 legal text: `assets/CC0-1.0.txt`.

## Pup and Kitty — Quaternius cartoon animals, CC0 1.0

| In game | Source | License |
|---|---|---|
| `assets/dog.glb` ("Pup", the default hero) | Quaternius cartoon **Wolf** — https://quaternius.com (Poly Pizza, listed Public Domain) | CC0 1.0 |
| `assets/cat.glb` ("Kitty") | Quaternius cartoon **Cat** | CC0 1.0 |

Same npm package (`library/lowpoly/wolf_cartoon.glb`, `cat.glb`). We change them in code at load time (`src/pets.js`):
the palette texture is repainted (apricot/cream pup, orange tabby kitty), and the pup gets blocky fur tufts, floppy ears,
a beard and an orange harness parented to its bones — made by us, inspired by the developer's own dog and cat.

## Sound effects — Kenney sound packs, CC0 1.0

From the same npm package (`library/audio/sfx/*.ogg`; Kenney Impact / Interface / RPG / Digital Audio packs, each
archive's License.txt "Creative Commons Zero, CC0"). Re-encoded to mono OGG (q4) + MP3 (q5) with ffmpeg, no edits.

| In game (`audio/`) | Source file | Used for |
|---|---|---|
| `step` | `step.ogg` | footsteps |
| `jump` | `dash.ogg` | take-off |
| `land` | `land.ogg` | landing, falling into the pit |
| `checkpoint` | `gem.ogg` | checkpoint reached |
| `spike` | `hurt.ogg` | touching spikes |
| `respawn` | `revive.ogg` | back at the checkpoint |
| `door` | `confirm.ogg` | exit door starts opening |
| `exit` | `level_up.ogg` | escaped |

## Made by us (code)

Course geometry, concrete / steel / spike-plate textures (drawn on a canvas at start), light glow and shafts,
particles, camera, character controller, UI. The course is original — the genre (3D obstacle escape) is common;
no level, character or art is taken from another game.

## Code libraries

| Library | License | Use |
|---|---|---|
| three.js 0.170.0 (`three`) | MIT | rendering, GLTF + meshopt loaders |
| esbuild 0.24.2 | MIT | bundling only (dev) |
