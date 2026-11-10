#!/usr/bin/env bash
# Bundles the trial (three.js + our modules) into docs/escape-3d/ for GitHub Pages.
# https://soulfulfillable.github.io/test-mvp/escape-3d/
set -euo pipefail
cd "$(dirname "$0")"
[ -d node_modules/three ] || npm install --silent
OUT=../../docs/escape-3d
rm -rf "$OUT"; mkdir -p "$OUT/audio"
node_modules/esbuild/bin/esbuild src/main.js --bundle --format=esm --minify --target=es2020 --outfile="$OUT/game.js" --log-level=warning
cp index.html "$OUT/index.html"
cp audio/*.ogg audio/*.mp3 "$OUT/audio/"
cp CREDITS.md "$OUT/CREDITS.md"
du -sh "$OUT" | sed 's#\s.*##' | xargs echo "total:"
du -k "$OUT/game.js" | cut -f1 | xargs echo "game.js KB:"
