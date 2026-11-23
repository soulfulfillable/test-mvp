# itch.io 업로드 안내 — Mole Mash · Cozy Coloring

같은 안내를 휴대폰에서도 볼 수 있게 웹에 올려 두었다: https://soulfulfillable.github.io/test-mvp/itch/
(zip·커버·스크린샷 다운로드 버튼과 문구 복사 버튼이 거기 있다.)

## 받을 파일

| 게임 | zip | 커버 630×500 | 스크린샷 |
|---|---|---|---|
| Mole Mash | https://soulfulfillable.github.io/test-mvp/itch/molemash.zip (12 MB) | `itch/molemash/cover-630x500.png` | `itch/molemash/screenshot-1~5.png` |
| Cozy Coloring | https://soulfulfillable.github.io/test-mvp/itch/coloring.zip (1.9 MB) | `itch/coloring/cover-630x500.png` | `itch/coloring/screenshot-1~5.png` |

zip 은 Playgama 에 올린 것과 같은 빌드다. itch 에서는 Playgama 가 아니므로 Bridge 가 "mock" 으로 동작한다:
광고 버튼은 안 보이고, 저장은 브라우저(localStorage)에, 월드 랭킹·로그인 버튼은 숨는다.
`check.js` 가 itch 와 같은 다른 출처 iframe 안에서 확인했다(13/13, 콘솔 에러 0, `check-report.json`).

## 순서 (컴퓨터 브라우저에서. 게임 하나당 약 10분)

1. https://itch.io/register 에서 계정 만들기. 사용자 이름은 `treasurefieldstudio`(실명·회사명 쓰지 않기). 이메일 인증.
2. 오른쪽 위 계정 메뉴 → **Upload new project** (또는 https://itch.io/game/new).
3. **Title**: 아래 표의 제목. **Project URL** 은 자동으로 채워진다.
4. **Short description or tagline**: 아래 "한 줄".
5. **Classification**: Games. **Kind of project**: **HTML**.
6. **Release status**: Released. **Pricing**: No payments.
7. **Uploads** → **Upload files** → zip 선택 → 올라가면 그 파일 옆 **"This file will be played in the browser"** 체크.
8. **Embed options** (zip 을 올리면 나타남):
   - Viewport dimensions: **450 × 800**
   - **Mobile friendly** 체크, Orientation **Portrait**
   - **Automatically start on page load** 체크(Mole Mash 만. 컬러링은 체크 안 해도 됨)
   - **Fullscreen button** 체크
   - "Click to launch in fullscreen" 은 체크하지 않기
9. **Details → Description**: 아래 "본문" 붙여넣기.
10. **Genre**: 아래 표. **Tags**: 아래 10개를 하나씩 입력.
   - **AI generation disclosure**(2026-11-23 실제 화면에서 확인된 칸, 처음 안내에 빠져 있었음): **Yes** 를 고르고 **Code · Graphics · Text** 를 체크, **Sound 는 체크하지 않는다**(코드·코드로 그린 그림·문구는 AI 로 만들었고, 소리·음악은 사람이 만든 CC0 음원). 사실대로 적는다 — 숨기면 itch 규정 위반으로 내려갈 수 있다.
11. **Cover image**: `cover-630x500.png`. **Screenshots**: `screenshot-1~5.png` 다섯 장.
12. 맨 아래 **Visibility & access**: 처음엔 **Draft** 로 저장 → 페이지 미리보기에서 게임이 뜨는지 확인 → **Public** 으로 바꾸고 다시 Save.
13. 공개 주소(예: `https://treasurefieldstudio.itch.io/mole-mash`)를 게시판 `board/playables.md` 에 적어 주면 끝.

## 페이지 문구

### Mole Mash
- 제목: `Mole Mash`
- 한 줄: `Whack moles, dodge bombs, and see how many levels you can last.`
- 장르: Action
- 태그(10): `whack-a-mole`, `arcade`, `casual`, `mobile`, `score-attack`, `reflex`, `cute`, `2d`, `short`, `html5`
- 본문:

> Moles pop out of nine holes. Tap them before they sink back down.
> Each level lasts 30 seconds, and the next one is faster with more bombs. Hit a bomb or let a mole get away and you lose a heart; clear a level and you get one back.
> Golden moles are worth extra, alarm clocks give you more time, and a full gift box hands you a new hammer.
> Controls: tap or click the moles, or press 1–9 on the keyboard. P pauses.
> Made by Treasurefield Studio. Sounds and music are CC0 (credits are in the game files).

### Cozy Coloring
- 제목: `Cozy Coloring`
- 한 줄: `A calm color-by-number book: 20 low-poly pictures to fill in.`
- 장르: Puzzle
- 태그(10): `coloring`, `color-by-number`, `relaxing`, `cozy`, `casual`, `mobile`, `art`, `cute`, `2d`, `html5`
- 본문:

> Pick a number from the palette and tap the matching pieces to paint them. Every finished picture opens the next one, from a little ladybug to a big sunflower.
> Pinch or use the + and − buttons to zoom in on small pieces, and hold the eye button to peek at the finished picture.
> Your colors are saved in the browser, so you can stop and come back any time.
> Controls: tap to paint, pinch or scroll to zoom. Works on phones and computers.
> Made by Treasurefield Studio. Sounds and music are CC0 (credits are in the game files).

## 다시 만들 때
`playables/itch/build.sh` → `node playables/itch/check.js` (커버도 다시 그림) → `docs/itch/` 커밋·main 푸시.
