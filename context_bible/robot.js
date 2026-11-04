// Context Bible preview robot (simplified UI): verse tap → plain explanation → View sources open/close → next verse.
// Real touch/mouse at real coordinates only (no JS clicks). Console errors must be 0.
// Run: node context_bible/robot.js   (serves docs/ on a local port)
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');

const DOCS = path.resolve(__dirname, '../docs');
const OUT = path.resolve(DOCS, 'context-bible/qa');
fs.mkdirSync(OUT, { recursive: true });
const types = { '.html': 'text/html', '.json': 'application/json' };
const server = http.createServer((q, s) => {
  const f = path.join(DOCS, decodeURIComponent(q.url.split('?')[0].split('#')[0]));
  fs.readFile(f, (e, b) => { if (e) { s.writeHead(404); s.end(); } else { s.writeHead(200, { 'content-type': types[path.extname(f)] || 'text/plain' }); s.end(b); } });
});
const log = []; let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : fail++; log.push(`${c ? 'PASS' : 'FAIL'} ${m}`); };

async function run(browser, base, name, opts, shots) {
  const ctx = await browser.newContext(opts);
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  const touch = !!opts.hasTouch;
  const tapAt = (x, y) => touch ? page.touchscreen.tap(x, y) : page.mouse.click(x, y);
  const tapEl = async sel => {
    await page.evaluate(s => document.querySelector(s).scrollIntoView({ block: 'center' }), sel);
    const b = await page.locator(sel).boundingBox();
    await tapAt(b.x + b.width / 2, b.y + b.height / 2);
  };
  const lines = id => page.evaluate(id => {
    const a = document.querySelector(`.mark[data-note="${id}"] .anc`);
    a.scrollIntoView({ block: 'center' });
    return [...a.getClientRects()].filter(r => r.width > 4).map(r => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 }));
  }, id);

  await page.goto(base + 'context-bible/index.html');
  await page.waitForSelector('.mark');
  ok(await page.locator('.legend, .checks, .steps').count() === 0, `[${name}] removed UI is gone (legend, 5 steps, sermon checks)`);
  if (shots) await page.screenshot({ path: path.join(OUT, `${name}-1-first.png`) });

  // lead question → See why → explanation → View sources (with checked commentaries) → hide
  ok(await page.locator('#q').isVisible() && (await page.locator('#q').innerText()).endsWith('?'), `[${name}] first screen starts with a question`);
  await tapEl('.lead .see');
  ok(await page.locator('#note-v46').isVisible(), `[${name}] lead: See why opens the explanation`);
  const leadEasy = await page.locator('#note-v46 .easy').innerText();
  ok(leadEasy.length > 80 && leadEasy.length < 560, `[${name}] lead: one short paragraph (${leadEasy.length} chars)`);
  if (shots) { await page.waitForTimeout(400); await page.screenshot({ path: path.join(OUT, `${name}-2-explanation.png`) }); }
  await tapEl('#note-v46 .src-btn'); await page.waitForTimeout(1600);
  const cited = await page.locator('#src-v46 .excerpt p').count(), coms = await page.locator('#src-v46 .com').count();
  ok(cited >= 2 && coms === 0, `[${name}] lead: View sources shows the cited verses (${cited}) and no unchecked commentary`);
  if (shots) await page.locator('#note-v46').screenshot({ path: path.join(OUT, `${name}-3-sources.png`) });
  await tapEl('#note-v46 .src-btn');
  ok(await page.locator('#src-v46').isHidden(), `[${name}] lead: Hide sources closes`);
  await tapEl('.lead .see');
  ok(await page.locator('#note-v46').count() === 0, `[${name}] lead: Hide closes the explanation`);
  ok(await page.locator('.mark[data-note="v46"]').count() === 0, `[${name}] verse 46 isn't marked twice`);

  let prev = null;
  for (const id of ['v47', 'v51']) {
    const ls = await lines(id);
    // every line of the underlined phrase opens and closes the note with a real tap
    for (let k = 0; k < ls.length; k++) {
      let pt = (await lines(id))[k];
      await tapAt(pt.x, pt.y);
      ok(await page.locator(`#note-${id}`).count() === 1, `[${name}] ${id}: real ${touch ? 'touch' : 'click'} on line ${k + 1}/${ls.length} opens`);
      pt = (await lines(id))[k]; // re-measure: closing another note above can shift the text
      await tapAt(pt.x, pt.y);
      ok(await page.locator(`#note-${id}`).count() === 0, `[${name}] ${id}: same spot again closes`);
    }
    // open, read, view sources
    const p0 = (await lines(id))[0];
    await tapAt(p0.x, p0.y);
    if (prev) ok(await page.locator(`#note-${prev}`).count() === 0, `[${name}] opening ${id} closes ${prev}`);
    const easy = (await page.locator(`#note-${id} .easy`).innerText()).trim();
    ok(easy.length > 80 && easy.length < 520, `[${name}] ${id}: one short explanation (${easy.length} chars)`);
    ok(await page.locator(`#note-${id} button`).count() === 2, `[${name}] ${id}: only Close + View sources buttons`);
    if (shots && id === 'v51') { await page.waitForTimeout(400); await page.screenshot({ path: path.join(OUT, `${name}-4-verse51.png`) }); }
    await tapEl(`#note-${id} .src-btn`);
    await page.waitForTimeout(1600);
    const box = page.locator(`#src-${id}`);
    const ex = await box.locator('.excerpt p').count(), hl = await box.locator('mark.hl.on').count();
    ok(await box.isVisible() && ex >= 2 && (id !== 'v51' || hl >= 1) && await box.locator('.com').count() === 0,
      `[${name}] ${id}: View sources shows passages (${ex} verses, ${hl} highlighted) + what the text does/doesn't say`);
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    ok(sw <= opts.viewport.width, `[${name}] ${id}: no sideways scroll (${sw})`);
    await tapEl(`#note-${id} .src-btn`);
    ok(await box.isHidden(), `[${name}] ${id}: Hide sources closes`);
    prev = id;
  }
  await tapEl(`#note-${prev} .x`);
  ok(await page.locator('.note').count() === 0, `[${name}] × closes`);
  await page.evaluate(() => document.getElementById('verse-45').scrollIntoView({ block: 'center' }));
  const b45 = await page.locator('#verse-45').boundingBox();
  await tapAt(b45.x + b45.width / 2, b45.y + b45.height / 2);
  ok(await page.locator('.note').count() === 0, `[${name}] unmarked verse 45 opens nothing`);
  ok(errors.length === 0, `[${name}] console errors: ${errors.length}${errors.length ? ' — ' + errors.join(' | ') : ''}`);
  await ctx.close();
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  const phone = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true };
  await run(browser, base, 'phone390', phone, true);
  await run(browser, base, 'phone390-dark', { ...phone, colorScheme: 'dark' }, false);
  await run(browser, base, 'desktop1280', { viewport: { width: 1280, height: 900 } }, false); // v47 wraps here: the reported click bug
  await browser.close(); server.close();
  log.push(`\nTOTAL ${pass} pass / ${fail} fail`);
  fs.writeFileSync(path.join(OUT, 'robot-result.txt'), log.join('\n') + '\n');
  console.log(log.filter(l => !l.startsWith('PASS')).join('\n'));
  process.exit(fail ? 1 : 0);
})();
