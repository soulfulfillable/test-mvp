#!/usr/bin/env bash
# Builds the Playgama archive: playables/sudoku/dist/kitty-sudoku.zip (index.html at the root, rule 1.3.2)
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p dist
rm -f dist/kitty-sudoku.zip
zip -q -r -X dist/kitty-sudoku.zip index.html sudoku-core.js playgama-bridge.js playgama-bridge-config.json CREDITS.md audio
unzip -l dist/kitty-sudoku.zip | tail -1
# GitHub Pages copy (plays with the Bridge mock platform: saves work, no ads) → https://soulfulfillable.github.io/test-mvp/sudoku-playables/
rm -rf ../../docs/sudoku-playables && mkdir -p ../../docs/sudoku-playables
cp -r index.html sudoku-core.js playgama-bridge.js playgama-bridge-config.json CREDITS.md audio ../../docs/sudoku-playables/
