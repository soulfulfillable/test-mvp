#!/usr/bin/env bash
# Bundles the game (planck + our modules) into docs/popcorn/ for GitHub Pages.
# https://soulfulfillable.github.io/test-mvp/popcorn/
set -euo pipefail
cd "$(dirname "$0")"
[ -d node_modules/planck ] || npm install --silent
OUT=../../docs/popcorn
mkdir -p "$OUT/audio"
node_modules/esbuild/bin/esbuild src/main.js --bundle --format=esm --minify --target=es2020 --outfile="$OUT/game.js" --log-level=warning
cp index.html "$OUT/index.html"
cp audio/*.ogg audio/*.mp3 "$OUT/audio/"
cp CREDITS.md "$OUT/CREDITS.md"
du -sh "$OUT/game.js" | sed 's#.*/##'
ls "$OUT"
