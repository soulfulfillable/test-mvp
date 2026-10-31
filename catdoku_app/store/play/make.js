// Google Play 스토어 그래픽. 실행: node make.js  (Playwright 내장 Chromium)
//  - icon-512.png        : assets/icon/icon-1024.png 축소 (PIL 로 따로; 아래 참고)
//  - feature-1024x500.png: 피처 그래픽 (아이콘 + 이름 + 한 줄)
//  - phone-NN.png        : 폰 스크린샷 1080×2160 (Play 규격: 가로세로 비 2:1 이하, 320~3840px) — raw/(1170×2532) 를 제목과 함께 틀에 넣음
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs');
const RAW = __dirname + '/../screenshots/raw/';
const SHOTS = [
  ['1-play.png', 'phone-01-play.png', 'One cat in every color', 'Row, column & color — cats can’t touch'],
  ['5-big.png', 'phone-02-levels.png', '500 levels', 'From quick 5×5 to brain-bending 9×9'],
  ['6-home.png', 'phone-03-daily.png', 'A new puzzle every day', 'Keep your streak going'],
  ['3-win.png', 'phone-04-solved.png', 'Purr-fect!', 'Relaxing logic puzzles with cats'],
  ['4-levels.png', 'phone-05-all-levels.png', 'Replay any level', 'See how many you’ve solved'],
];
(async () => {
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  // 폰 스크린샷 1080×2160: 위 제목 영역 420px, 아래 폰 화면(1170×2532 → 폭 860 → 높이 1861, 아래쪽은 잘림)
  const p = await b.newPage({ viewport: { width: 1080, height: 2160 } });
  for (const [src, dst, title, sub] of SHOTS) {
    const img = fs.readFileSync(RAW + src).toString('base64');
    await p.setContent(`<html><body style="margin:0;width:1080px;height:2160px;background:#4A3B28;font-family:Roboto,Arial,sans-serif;overflow:hidden">
      <div style="text-align:center;padding-top:96px;color:#FFD98A;font-size:78px;font-weight:900;letter-spacing:-1px">${title}</div>
      <div style="text-align:center;margin-top:18px;color:#F6EFE4;font-size:42px;font-weight:600">${sub}</div>
      <div style="position:absolute;left:110px;top:400px;width:860px;height:1900px;border-radius:60px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.45);border:12px solid #2a2117">
        <img src="data:image/png;base64,${img}" style="width:100%;display:block"></div></body></html>`);
    await p.waitForTimeout(200);
    await p.screenshot({ path: __dirname + '/' + dst });
    console.log('made', dst);
  }
  // 피처 그래픽 1024×500
  const icon = fs.readFileSync(__dirname + '/../../flutter/assets/icon/icon-1024.png').toString('base64');
  const f = await b.newPage({ viewport: { width: 1024, height: 500 } });
  await f.setContent(`<html><body style="margin:0;width:1024px;height:500px;background:linear-gradient(135deg,#4A3B28,#2a2117);font-family:Roboto,Arial,sans-serif;overflow:hidden;color:#F6EFE4">
    <img src="data:image/png;base64,${icon}" style="position:absolute;left:72px;top:90px;width:320px;height:320px;border-radius:72px;box-shadow:0 16px 40px rgba(0,0,0,.5)">
    <div style="position:absolute;left:440px;top:132px;font-size:76px;font-weight:900;color:#FFD98A;letter-spacing:-1px;line-height:1">Kitty Queens</div>
    <div style="position:absolute;left:442px;top:222px;font-size:38px;font-weight:600;white-space:nowrap">Cat Sudoku · Daily Logic Puzzle</div>
    <div style="position:absolute;left:442px;top:300px;font-size:30px;opacity:.85;white-space:nowrap;line-height:1.35">One cat in every color.<br>Every board has exactly one solution.</div>
  </body></html>`);
  await f.waitForTimeout(200);
  await f.screenshot({ path: __dirname + '/feature-1024x500.png' });
  console.log('made feature-1024x500.png');
  await b.close();
})();
