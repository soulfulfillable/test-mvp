# Escape 3D (trial) — asset sources and licenses

Everything here is either made by us in code or **CC0 1.0** (public domain dedication — no attribution required,
credited anyway). No company names, no personal names.

## Characters — made by us in code (since 2026-11-10, block "obby" style)

Pup (the default, after the developer's own dog), Kitty (after their orange cat) and Runner are built from rounded
boxes in `src/blocky.js` and animated in code (rigid limb swings). No model files are shipped.
Earlier trial builds used Kenney Mini Characters and Quaternius cartoon animals (both CC0); those files remain in
`assets/` for reference only and are not deployed.

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

Course geometry, plastic tile texture (drawn on a canvas at start), kill bricks, scenery blocks, light glow and shafts,
particles, camera, character controller, UI. The course is original — the genre (3D obstacle escape) is common;
no level, character or art is taken from another game.

## Code libraries

| Library | License | Use |
|---|---|---|
| three.js 0.170.0 (`three`) | MIT | rendering, GLTF + meshopt loaders |
| esbuild 0.24.2 | MIT | bundling only (dev) |
