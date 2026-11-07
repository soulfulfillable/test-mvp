#!/usr/bin/env bash
# Builds the Playgama archive: playables/catdoku/dist/kitty-queens.zip (index.html at the root, rule 1.3.2)
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p dist
rm -f dist/kitty-queens.zip
zip -q -r -X dist/kitty-queens.zip index.html playgama-bridge.js playgama-bridge-config.json CREDITS.md audio
unzip -l dist/kitty-queens.zip | tail -1
# GitHub Pages copy (plays with the Bridge mock platform: saves work, no ads) → https://soulfulfillable.github.io/test-mvp/catdoku-playables/
rm -rf ../../docs/catdoku-playables && mkdir -p ../../docs/catdoku-playables
cp -r index.html playgama-bridge.js playgama-bridge-config.json CREDITS.md audio ../../docs/catdoku-playables/
