#!/usr/bin/env bash
# Rebuilds hidden_friends/game/audio from the CC0 "uisfx" npm package (Romain Simon, sounds/ = CC0 1.0).
# Notes are single CC0 pings pitch-shifted onto a C-major pentatonic scale (one note per hidden friend).
# Usage: hidden_friends/tools/make_audio.sh <dir containing extracted uisfx package/>
set -euo pipefail
SRC="${1:?path to extracted uisfx package dir}/sounds"
OUT="$(cd "$(dirname "$0")/.." && pwd)/game/audio"
mkdir -p "$OUT"
enc() { ffmpeg -v error -y -i "$1" -ac 1 -ar 44100 $2 -c:a libmp3lame -b:a 96k "$OUT/$3.mp3"; }
# sfx
enc "$SRC/organic/reaction.ogg" "-af loudnorm=I=-18:TP=-2" found
enc "$SRC/soft/deselect.ogg"    "-af loudnorm=I=-24:TP=-2" miss
enc "$SRC/dreamy/notification.ogg" "-af loudnorm=I=-20:TP=-2" hint
enc "$SRC/dreamy/achievement.ogg"  "-af loudnorm=I=-17:TP=-2" done
enc "$SRC/soft/press.ogg"       "-af loudnorm=I=-22:TP=-2" tap
enc "$SRC/dreamy/reward.ogg"    "-af loudnorm=I=-19:TP=-2" card
# notes: scene instrument (file, measured base Hz)
NOTES="523.25 587.33 659.25 783.99 880.00 1046.5 1174.66 1318.51"
mk() { # scene src baseHz
  local i=0
  for f in $NOTES; do
    local rate; rate=$(python3 -c "print(round(44100*$f/$3/2))")   # one octave below the target
    ffmpeg -v error -y -i "$SRC/$2" -ac 1 -af "aresample=44100,asetrate=$rate,aresample=44100,loudnorm=I=-20:TP=-2" -c:a libmp3lame -b:a 96k "$OUT/$1-n$i.mp3"
    i=$((i+1))
  done
}
mk pond    rubber/press.ogg 277
mk spring  organic/press.ogg 287
mk night   glass/press.ogg 375
ls "$OUT" | wc -l
