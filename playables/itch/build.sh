#!/usr/bin/env bash
# itch.io packages: the same Playgama builds (Bridge falls back to its mock platform off Playgama:
# saves go to localStorage through the Bridge, no ads, no world board). Output goes to docs/itch/ so the
# user can download them from GitHub Pages: https://soulfulfillable.github.io/test-mvp/itch/
set -euo pipefail
cd "$(dirname "$0")"
OUT=../../docs/itch
mkdir -p "$OUT"
(cd ../molemash && ./build.sh >/dev/null) && cp ../molemash/dist/molemash.zip "$OUT/molemash.zip"
(cd ../coloring && ./build.sh >/dev/null) && cp ../coloring/dist/cozy-coloring.zip "$OUT/coloring.zip"
for z in "$OUT"/molemash.zip "$OUT"/coloring.zip; do
  printf '%s  %s bytes  %s files  root index.html: %s\n' "$(basename "$z")" "$(wc -c < "$z")" "$(unzip -Z1 "$z" | grep -vc '/$')" "$(unzip -Z1 "$z" | grep -qx index.html && echo yes || echo NO)"
  unzip -Z1 "$z" | LC_ALL=C grep -n '[^ -~]' && echo "  non-Latin file names above!" || true
done
