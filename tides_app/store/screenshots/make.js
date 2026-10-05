// App Store 6.7형(1290×2796) 스크린샷: 웹 빌드(docs/tides-app, ?ads=shots)를 iPhone 13 크기로 띄워 raw/ 에 찍고, 위에 제목을 얹는다.
// 화면 숫자는 Actions 로 받은 NOAA 실제 예보(샌프란시스코 9414290, 2026-10-02 12:00 PDT 기준) — 가짜 데이터 없음.
// 실행: docs 를 :8765/test-mvp/ 로 띄운 뒤 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node tides_app/store/screenshots/make.js
const H = require('../../qa/web-harness.js');
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'), path = require('path');
const RAW = path.join(__dirname, 'raw');
const URL = 'http://localhost:8765/test-mvp/tides-app/index.html?ads=shots';
const NOW = Date.UTC(2026, 9, 2, 19, 0);
const SHOTS = [
  ['1-home.png', '01-today.png', 'Open the app. See the tide.', 'Rising or falling, height now, next high & low'],
  ['2-readout.png', '02-chart.png', 'Read any time on the chart', 'Drag across the NOAA tide curve'],
  ['3-week.png', '03-week.png', '7 days free', 'Highs, lows, sunrise & moon phase'],
  ['4-stations.png', '04-stations.png', '3,499 NOAA stations', 'Nearest to you, favorites & search'],
  ['5-month.png', '05-30-days.png', '30 days for your next trip', 'Watch one short video, open it for 24 hours'],
];
const btn = (p, name) => p.getByRole('button', { name });
(async () => {
  const { browser, page } = await H.open({ url: URL, geolocation: { latitude: 37.8063, longitude: -122.4659 }, clock: NOW });
  const snap = async n => { await page.waitForTimeout(700); await page.screenshot({ path: path.join(RAW, n) }); };
  await btn(page, /Use My Location/).click();
  await page.getByText(/Rising|Falling/).first().waitFor({ timeout: 10000 });
  await snap('1-home.png');
  const t = await page.getByText(/Today · Fri, Oct 2/).first().boundingBox();
  await page.mouse.click(t.x + 250, t.y + 110);
  await snap('2-readout.png');
  await page.getByRole('button', { name: /^Sat/ }).first().click();
  await snap('3-week.png');
  await btn(page, 'Change station').click();
  await page.getByRole('textbox').click();
  await page.keyboard.type('santa', { delay: 30 });
  await page.keyboard.press('Enter');
  await snap('4-stations.png');
  await btn(page, 'Back').click();
  await page.mouse.move(195, 600);
  for (let i = 0; i < 12 && !(await btn(page, /^Watch/).count()); i++) await page.mouse.wheel(0, 300);
  await btn(page, /^Watch/).first().click();
  await page.getByText('30-day tides').waitFor({ timeout: 8000 });
  await snap('5-month.png');
  await browser.close();

  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const p = await b.newPage({ viewport: { width: 1290, height: 2796 } });
  for (const [src, dst, title, sub] of SHOTS) {
    const img = fs.readFileSync(path.join(RAW, src)).toString('base64');
    await p.setContent(`<html><body style="margin:0;width:1290px;height:2796px;background:linear-gradient(#0B3A66,#1677C9);font-family:Roboto,Arial,sans-serif;overflow:hidden">
      <div style="text-align:center;padding-top:120px;color:#fff;font-size:92px;font-weight:900;letter-spacing:-1px">${title}</div>
      <div style="text-align:center;margin-top:24px;color:#D6EBFA;font-size:52px;font-weight:600">${sub}</div>
      <div style="position:absolute;left:105px;top:520px;width:1080px;height:2337px;border-radius:72px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.4);border:14px solid #0B2A44">
        <img src="data:image/png;base64,${img}" style="width:100%;display:block"></div></body></html>`);
    await p.waitForTimeout(300);
    await p.screenshot({ path: path.join(__dirname, dst) });
    console.log('made', dst);
  }
  await b.close();
})();
