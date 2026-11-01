#!/usr/bin/env bash
# Builds the Playgama archive: playables/molemash/dist/molemash.zip (index.html at the root, rule 1.3.2)
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p dist
rm -f dist/molemash.zip
zip -q -r -X dist/molemash.zip index.html playgama-bridge.js playgama-bridge-config.json CREDITS.md audio
unzip -l dist/molemash.zip | tail -1
