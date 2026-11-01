#!/usr/bin/env bash
# Bundles the game (three.js + planck + our modules) into docs/knockchain/ for GitHub Pages.
# https://soulfulfillable.github.io/test-mvp/knockchain/
set -euo pipefail
cd "$(dirname "$0")"
[ -d node_modules/three ] || npm install --silent
OUT=../../docs/knockchain
mkdir -p "$OUT/assets" "$OUT/audio"
node_modules/esbuild/bin/esbuild src/main.js --bundle --format=esm --minify --target=es2020 --outfile="$OUT/game.js" --log-level=warning
cp index.html "$OUT/index.html"
cp art/assets/cat.glb "$OUT/assets/cat.glb"
cp audio/*.ogg audio/*.mp3 "$OUT/audio/"
cp CREDITS.md "$OUT/CREDITS.md"
du -sh "$OUT/game.js" | sed 's#.*/##'
ls "$OUT"
