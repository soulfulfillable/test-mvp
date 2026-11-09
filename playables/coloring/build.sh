#!/usr/bin/env bash
# Builds the Playgama archive: playables/coloring/dist/cozy-coloring.zip (index.html at the root, rule 1.3.2)
set -euo pipefail
cd "$(dirname "$0")"
node gen-data.js
mkdir -p dist
rm -f dist/cozy-coloring.zip
zip -q -r -X dist/cozy-coloring.zip index.html coloring-data.js coloring-pics.js playgama-bridge.js playgama-bridge-config.json CREDITS.md audio
unzip -l dist/cozy-coloring.zip | tail -1
# GitHub Pages copy (plays with the Bridge mock platform: saves work, no ads) → https://soulfulfillable.github.io/test-mvp/coloring-playables/
rm -rf ../../docs/coloring-playables && mkdir -p ../../docs/coloring-playables
cp -r index.html coloring-data.js coloring-pics.js playgama-bridge.js playgama-bridge-config.json CREDITS.md audio ../../docs/coloring-playables/
