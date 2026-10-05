// raw/(1170×2532, capture.js 가 실제 측정으로 찍음) → App Store 6.7형(1290×2796) 홍보 이미지: 위에 큰 제목, 아래에 앱 화면.
// 실행: node make.js  (대출 계산기 mortgage_app/store/screenshots/make.js 와 같은 틀, 색만 앱에 맞춤)
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs');
const SHOTS = [
  ['meter.png', '01-meter.png', 'How loud is it?', 'Free decibel meter — no subscription'],
  ['report.png', '02-report.png', 'Free noise reports', 'Share with your landlord or neighbor'],
  ['guide.png', '03-guide.png', 'What does it sound like?', 'Every level in plain English'],
  ['history.png', '04-history.png', 'Every measurement saved', 'Make a report anytime'],
  ['settings.png', '05-settings.png', 'Everything is free', 'dBA · dBC · dBZ and calibration'],
];
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1290, height: 2796 } });
  for (const [src, dst, title, sub] of SHOTS) {
    const img = fs.readFileSync(__dirname + '/raw/' + src).toString('base64');
    await p.setContent(`<html><body style="margin:0;width:1290px;height:2796px;background:linear-gradient(#1B2638,#0B1019);font-family:Roboto,'Liberation Sans',Arial,sans-serif;overflow:hidden">
      <div style="text-align:center;padding-top:120px;color:#F2F5F9;font-size:92px;font-weight:900;letter-spacing:-1px">${title}</div>
      <div style="text-align:center;margin-top:24px;color:#4FC3F7;font-size:52px;font-weight:600">${sub}</div>
      <div style="position:absolute;left:105px;top:520px;width:1080px;height:2337px;border-radius:72px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.5);border:14px solid #2E3848">
        <img src="data:image/png;base64,${img}" style="width:100%;display:block"></div></body></html>`);
    await p.waitForTimeout(300);
    await p.screenshot({ path: __dirname + '/' + dst });
    console.log('made', dst);
  }
  await b.close();
})();
