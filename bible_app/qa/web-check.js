// 웹 미리보기 실제 터치 점검 — docs/bible-reading-app 을 폰 크기 헤드리스 크롬으로 띄워 버튼을 손가락(tap)으로 누른다.
// 실행: (docs 를 /test-mvp 로 띄운 뒤) NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt node bible_app/qa/web-check.js http://localhost:8765/test-mvp/bible-reading-app/index.html <스크린샷폴더>
const { open } = require('../../catdoku_app/qa/flutter-web-harness.js');
const fs = require('fs'), path = require('path');
const [url, out] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });
const log = (s) => { fs.appendFileSync(path.join(out, 'log.txt'), s + '\n'); };
const results = [];
const ok = (name, cond) => { results.push([name, !!cond]); log(`${cond ? 'PASS' : 'FAIL'} ${name}`); };
const CK = path.resolve(__dirname, '../flutter/build/web/canvaskit');

async function text(p) {
  return p.evaluate(() => [...document.querySelectorAll('flt-semantics, span')].map(e => (e.getAttribute('aria-label') || '') + ' ' + (e.textContent || '')).join(' | '));
}
async function tapBtn(p, name) {
  const b = p.getByRole('button', { name }).first();
  await b.waitFor({ timeout: 8000 });
  await b.tap();
  await p.waitForTimeout(1300);
}
async function tapText(p, re) {
  // 글자가 맞는 것 중 가장 작은 상자를 누른다 (부모 상자 오탐 방지 — 경로 퍼즐 세션 교훈)
  const box = await p.evaluate((src) => {
    const re = new RegExp(src);
    let best = null;
    for (const e of document.querySelectorAll('flt-semantics')) {
      const t = (e.getAttribute('aria-label') || '') + ' ' + e.textContent;
      if (!re.test(t)) continue;
      const r = e.getBoundingClientRect();
      if (r.width === 0) continue;
      if (!best || r.width * r.height < best.w * best.h) best = { x: r.x + r.width / 2, y: r.y + r.height / 2, w: r.width, h: r.height };
    }
    return best;
  }, re.source);
  if (!box) throw new Error('not found ' + re);
  await p.touchscreen.tap(box.x, box.y);
  await p.waitForTimeout(1300);
}

(async () => {
  fs.writeFileSync(path.join(out, 'log.txt'), '');
  let { browser, page: p, errs } = await open({ url, canvaskit: CK, scale: 2 });
  try {
    let t = await text(p);
    ok('first screen shows Genesis 1–3', /Genesis 1–3/.test(t));
    ok('no ad on Today', !/\bAd\b/.test(t.replace(/Adjust/g, '')));
    await p.screenshot({ path: path.join(out, 'w1-today.png') });

    await tapBtn(p, /Mark as Read/);
    t = await text(p);
    ok('after tap: 3 of 1,189 chapters', /3 of 1,189 chapters/.test(t));
    ok('after tap: next is Genesis 4–6', /Next: Genesis 4–6/.test(t));
    await p.screenshot({ path: path.join(out, 'w2-read.png') });

    await p.reload();
    await p.getByRole('button').first().waitFor({ timeout: 30000 });
    await p.waitForTimeout(1500);
    t = await text(p);
    ok('saved across reload', /3 of 1,189 chapters/.test(t));

    await tapText(p, /^\s*Map/);
    t = await text(p);
    ok('Map tab shows Old Testament', /OLD TESTAMENT/i.test(t));
    ok('Map shows Genesis 3 of 50', /Genesis, 3 of 50 chapters read/.test(t));
    await p.screenshot({ path: path.join(out, 'w3-map.png') });

    await tapText(p, /^\s*Plan/);
    await p.screenshot({ path: path.join(out, 'w4-plan.png') });
    await tapText(p, /New Testament\s+260 chapters/);
    t = await text(p);
    ok('new plan asks first', /Start a New Plan\?/.test(t));
    await tapBtn(p, /Start New Plan/);
    await tapText(p, /^\s*Today/);
    t = await text(p);
    ok('NT plan starts at Matthew 1', /Matthew 1/.test(t));
    ok('NT: 0 of 260', /0 of 260 chapters/.test(t));

    // 밀린 상태 예시 링크 + 일정 조정 시트
    await p.goto(url + '?demo=40&behind=3');
    await p.getByRole('button').first().waitFor({ timeout: 30000 });
    await p.waitForTimeout(1500);
    t = await text(p);
    ok('demo link: pick up where you left off', /PICK UP WHERE YOU LEFT OFF/i.test(t));
    await p.screenshot({ path: path.join(out, 'w5-demo-behind.png') });
    await tapBtn(p, /Adjust Schedule/);
    t = await text(p);
    ok('adjust sheet has two choices', /Spread the Rest/.test(t) && /Continue From Today/.test(t));
    await p.screenshot({ path: path.join(out, 'w6-adjust.png') });
    await tapBtn(p, /Spread the Rest/);
    t = await text(p);
    ok('after spread: no longer behind', !/PICK UP WHERE YOU LEFT OFF/i.test(t));

    // 세로로 끌어도 앱이 그대로 (페이지가 밀리지 않음)
    const cdp = await p.context().newCDPSession(p);
    const drag = async (x, y0, y1) => {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y: y0 }] });
      for (let i = 1; i <= 8; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y0 + (y1 - y0) * i / 8 }] });
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      await p.waitForTimeout(600);
    };
    await drag(195, 300, 700);
    t = await text(p);
    ok('vertical drag keeps the app on screen', /Mark as Read|Read Ahead/.test(t));

    ok('console errors 0', errs.length === 0);
    if (errs.length) log('errors: ' + errs.join('\n'));
  } catch (e) {
    log('CRASH ' + e.stack);
    ok('no crash', false);
  }
  await browser.close();
  const pass = results.filter(r => r[1]).length;
  log(`RESULT ${pass}/${results.length}`);
  process.exit(pass === results.length ? 0 : 1);
})();
