#!/usr/bin/env bash
# Copies the game to docs/hidden-friends/ (GitHub Pages). Source of truth: hidden_friends/game/.
set -euo pipefail
cd "$(dirname "$0")"
rm -rf ../docs/hidden-friends && mkdir -p ../docs/hidden-friends
cp -r game/index.html game/audio ../docs/hidden-friends/
cp CREDITS.md ../docs/hidden-friends/
echo "built docs/hidden-friends"
