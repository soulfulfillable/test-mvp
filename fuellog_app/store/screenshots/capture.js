// 스토어 스크린샷 원본 찍기: 웹 미리보기(?demo=1 예시 기록, ?shots=1 광고 자리 숨김)를 아이폰 13 크기·3배율로 → raw/*.png (1170×2532)
// 준비: docs 를 http://localhost:8765/test-mvp/ 로 띄우기 (fuellog_app/qa/web-check.js 머리말과 같다)
// 실행: NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node capture.js → node make.js
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'), path = require('path');
const URL = 'http://localhost:8765/test-mvp/fuel-log-app/index.html?demo=1&shots=1';
const CK = path.resolve(__dirname, '../../flutter/build/web/canvaskit');
const OUT = path.join(__dirname, 'raw');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, hasTouch: true, isMobile: true });
  const p = await ctx.newPage();
  await p.route(/^https:\/\//, async route => {
    const u = route.request().url();
    const m = /flutter-canvaskit\/[0-9a-f]+\/(.*)$/.exec(u);
    if (m && fs.existsSync(path.join(CK, m[1]))) {
      const f = path.join(CK, m[1]);
      return route.fulfill({ status: 200, body: fs.readFileSync(f), headers: { 'content-type': f.endsWith('.wasm') ? 'application/wasm' : 'text/javascript', 'access-control-allow-origin': '*' } });
    }
    try {
      const r = await fetch(u);
      await route.fulfill({ status: r.status, body: Buffer.from(await r.arrayBuffer()), headers: { 'content-type': r.headers.get('content-type') || 'application/octet-stream', 'access-control-allow-origin': '*' } });
    } catch (e) { await route.abort(); }
  });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto(URL);
  await p.getByRole('button').first().waitFor({ timeout: 40000 });
  await p.waitForTimeout(1500);
  const shot = async (name) => { await p.waitForTimeout(600); await p.screenshot({ path: path.join(OUT, name) }); console.log('raw', name); };
  const tap = async (name) => { await p.getByRole('button', { name }).first().click(); await p.waitForTimeout(700); };
  // 탭은 손가락으로(tap) — 마우스로 누르면 말풍선(tooltip)이 떠서 찍힌다
  const tab = async (name) => { await p.getByRole('tab', { name }).or(p.getByRole('button', { name })).first().tap(); await p.mouse.move(1, 1); await p.waitForTimeout(1200); };
  const texts = async () => (await p.locator('flt-semantics').evaluateAll(es => es.map(e => (e.getAttribute('aria-label') || '') + ' ' + (e.textContent || '')))).join(' | ');

  await shot('log.png');

  // 주유 입력: 지난 주행거리 + 356 mi, 10.62 gal, $3.459 → 이번 탱크 연비 미리보기
  await tap(/^Fill-up$/);
  const last = Number((/Last: ([\d,]+) mi/.exec(await texts()) || [, '0'])[1].replace(/,/g, ''));
  const type = async (label, v) => { await p.getByRole('textbox', { name: label }).first().click(); await p.waitForTimeout(200); await p.keyboard.type(v); await p.waitForTimeout(200); };
  await type(/Odometer/, String(last + 356));
  await type(/Gallons/, '10.62');
  await type(/Price per gallon/, '3.459');
  await p.mouse.click(40, 299); // 'Gallons' 글자(입력 칸 밖)를 눌러 커서 치우기
  await p.mouse.move(195, 500);
  await p.mouse.wheel(0, 260);
  await shot('fill.png');
  await tap(/Close/);
  await tap(/^Discard$/);

  await tab(/^Charts/);
  await shot('charts.png');
  await tab(/Reminders/);
  await shot('reminders.png');
  await tab(/^More/);
  await shot('more.png');
  console.log('page errors:', errs.length, errs.join(' / '));
  await b.close();
})().catch(e => { console.error('FAILED', e); process.exit(1); });
