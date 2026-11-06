# Hidden Little Friends — credits and licenses

## Art
All scene and character art is **drawn in code by this project** (SVG shapes in `game/index.html`) — no third-party images,
no AI-generated images, no emoji. Same owner as the game (soulfulfill). No external license applies.

## Sound — UI SFX by Romain Simon (https://uisfx.com), audio CC0 1.0
Obtained from the npm package `uisfx@0.4.0` (`LICENSE-AUDIO`: "The audio files under `sounds/` are dedicated to the public
domain under the Creative Commons CC0 1.0 Universal Public Domain Dedication"). Re-encoded to mono MP3, loudness-matched,
and (for the notes) pitch-shifted by `tools/make_audio.sh`.

| In game (`game/audio/`) | Source (`sounds/…`) | Used for |
|---|---|---|
| `found.mp3` | `organic/reaction.ogg` | a friend is found |
| `miss.mp3` | `soft/deselect.ogg` | tap on nothing |
| `hint.mp3` | `dreamy/notification.ogg` | hint glow |
| `done.mp3` | `dreamy/achievement.ogg` | scene complete |
| `card.mp3` | `dreamy/reward.ogg` | postcard appears |
| `tap.mp3` | `soft/press.ogg` | buttons |
| `pond-n0..7.mp3` | `rubber/press.ogg`, pitch-shifted to C-major pentatonic | frog choir notes |
| `spring-n0..7.mp3` | `organic/press.ogg`, pitch-shifted | capybara hum notes |
| `night-n0..7.mp3` | `glass/press.ogg`, pitch-shifted | lantern chime notes |

## Code
No libraries. Plain HTML/CSS/JS.
