// 스토어 스크린샷 원본: 웹 미리보기(?demo= 예시 진행, ?shots=1 광고 숨김)를 아이폰 13 크기·3배율로 → raw/*.png
// 준비: docs 를 http://localhost:8765/test-mvp/ 로 띄우기. 실행: NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node capture.js → node make.js
const { open } = require('../../../catdoku_app/qa/flutter-web-harness.js');
const fs = require('fs'), path = require('path');
const BASE = 'http://localhost:8765/test-mvp/bible-reading-app/index.html';
const CK = path.resolve(__dirname, '../../flutter/build/web/canvaskit');
const OUT = path.join(__dirname, 'raw');
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  let { browser, page: p } = await open({ url: BASE + '?demo=120&shots=1', canvaskit: CK, scale: 3 });
  const shot = async (n) => { await p.mouse.move(1, 1); await p.waitForTimeout(1500); await p.screenshot({ path: path.join(OUT, n) }); console.log('raw', n); };
  const tapBtn = async (name) => { await p.getByRole('button', { name }).first().tap(); await p.waitForTimeout(400); };
  const tapTab = async (re) => {
    const box = await p.evaluate((src) => { const re = new RegExp(src); let best = null;
      for (const e of document.querySelectorAll('flt-semantics')) { const t = (e.getAttribute('aria-label') || '') + ' ' + e.textContent; const r = e.getBoundingClientRect();
        if (re.test(t) && r.width && (!best || r.width * r.height < best.a)) best = { x: r.x + r.width / 2, y: r.y + r.height / 2, a: r.width * r.height }; } return best; }, re.source);
    await p.touchscreen.tap(box.x, box.y); await p.waitForTimeout(1200);
  };
  await shot('today.png');
  await tapBtn(/Mark as Read/);
  await shot('read.png');      // 칸 채워지는 애니메이션이 끝난 뒤
  await tapTab(/^\s*Map/);
  await shot('map.png');
  await tapTab(/^\s*Plan/);
  await shot('plan.png');
  await browser.close();
  ({ browser, page: p } = await open({ url: BASE + '?demo=120&behind=4&shots=1', canvaskit: CK, scale: 3 }));
  await tapBtn(/Adjust Schedule/);
  await shot('behind.png');
  await browser.close();
})().catch(e => { console.error('FAILED', e); process.exit(1); });
