// raw/(1170×2532, capture.js 가 예시 기록으로 찍음) → App Store 6.7형(1290×2796) 홍보 이미지: 위에 큰 제목, 아래에 앱 화면.
// 실행: node make.js  (소음 측정기 make.js 와 같은 틀. DESIGN.md: 그라데이션·그림자 없이 iOS 회색 바탕 + 강조색 1개)
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs');
const SHOTS = [
  ['log.png', '01-mpg.png', 'Your real MPG', 'Every fill-up, full or partial'],
  ['fill.png', '02-fill-up.png', 'Log a fill-up in seconds', 'See this tank’s MPG before you save'],
  ['charts.png', '03-charts.png', 'Where your money goes', 'MPG trend & spending by month'],
  ['reminders.png', '04-reminders.png', 'Never miss an oil change', 'Reminders by miles or months'],
  ['more.png', '05-your-data.png', 'Your data is yours', 'Free CSV export · No account'],
];
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1290, height: 2796 } });
  for (const [src, dst, title, sub] of SHOTS) {
    const img = fs.readFileSync(__dirname + '/raw/' + src).toString('base64');
    await p.setContent(`<html><body style="margin:0;width:1290px;height:2796px;background:#F2F2F7;font-family:Roboto,'Liberation Sans',Arial,sans-serif;overflow:hidden">
      <div style="text-align:center;padding-top:120px;color:#1C1C1E;font-size:92px;font-weight:700;letter-spacing:-1px">${title}</div>
      <div style="text-align:center;margin-top:24px;color:#1665D8;font-size:52px;font-weight:600">${sub}</div>
      <div style="position:absolute;left:105px;top:520px;width:1080px;height:2337px;border-radius:72px;overflow:hidden;border:10px solid #D1D1D6">
        <img src="data:image/png;base64,${img}" style="width:100%;display:block"></div></body></html>`);
    await p.waitForTimeout(300);
    await p.screenshot({ path: __dirname + '/' + dst });
    console.log('made', dst);
  }
  await b.close();
})();
