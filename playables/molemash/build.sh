#!/usr/bin/env bash
# Builds the Playgama archive: playables/molemash/dist/molemash.zip (index.html at the root, rule 1.3.2)
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p dist
rm -f dist/molemash.zip
zip -q -r -X dist/molemash.zip index.html playgama-bridge.js playgama-bridge-config.json CREDITS.md audio fonts
unzip -l dist/molemash.zip | tail -1
# GitHub Pages copy (plays with the Bridge mock platform: saves work, no ads) → https://soulfulfillable.github.io/test-mvp/playables/molemash/
rm -rf ../../docs/playables/molemash && mkdir -p ../../docs/playables/molemash
cp -r index.html playgama-bridge.js playgama-bridge-config.json CREDITS.md audio fonts ../../docs/playables/molemash/
