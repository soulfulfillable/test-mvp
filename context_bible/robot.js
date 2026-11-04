// Context Bible web preview robot: opens every marker, every step, every linked passage and every
// "Check what you heard" example on phone / iPhone 13 / desktop (+ dark mode), counts console errors,
// checks layout overflow and the load-error state, and saves screenshots.
// Run: node context_bible/robot.js   (serves docs/ on a local port)
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');

const DOCS = path.resolve(__dirname, '../docs');
const OUT = path.resolve(DOCS, 'context-bible/qa');
fs.mkdirSync(OUT, { recursive: true });
const types = { '.html': 'text/html', '.json': 'application/json', '.png': 'image/png' };
const server = http.createServer((q, s) => {
  const f = path.join(DOCS, decodeURIComponent(q.url.split('?')[0].split('#')[0]));
  fs.readFile(f, (e, b) => { if (e) { s.writeHead(404); s.end(); } else { s.writeHead(200, { 'content-type': types[path.extname(f)] || 'text/plain' }); s.end(b); } });
});

const log = []; let pass = 0, fail = 0;
const ok = (c, msg) => { (c ? pass++ : fail++); log.push(`${c ? 'PASS' : 'FAIL'} ${msg}`); };

async function run(browser, base, name, ctxOpts, shots) {
  const ctx = await browser.newContext(ctxOpts);
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  const touch = !!ctxOpts.hasTouch;
  const press = async (loc) => { await loc.scrollIntoViewIfNeeded(); touch ? await loc.tap() : await loc.click(); };
  const W = ctxOpts.viewport.width;
  const noOverflow = async (what) => {
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    ok(sw <= W, `[${name}] no sideways scroll ${what} (scrollWidth ${sw} ≤ ${W})`);
  };
  const tapped = [];

  await page.goto(base + 'context-bible/index.html');
  await page.waitForSelector('.mark');
  const markers = await page.locator('.mark').count();
  ok(markers === 3, `[${name}] 3 markers visible on first screen (found ${markers})`);
  const firstMarkTop = await page.locator('.mark').first().boundingBox();
  ok(firstMarkTop && firstMarkTop.y < ctxOpts.viewport.height, `[${name}] first marker is above the fold (y=${firstMarkTop && Math.round(firstMarkTop.y)})`);
  await noOverflow('on load');
  if (shots.first) await page.screenshot({ path: path.join(OUT, `${name}-1-first.png`) });


  // Real pointer/touch at actual coordinates (no JS click): each line of a wrapped underlined phrase,
  // the union bounding-box centre (what a plain locator.click aims at), and a plain spot in the verse.
  const tapAt = async (x, y) => { touch ? await page.touchscreen.tap(x, y) : await page.mouse.click(x, y); };
  for (const id of ['v46', 'v47', 'v51']) {
    const anc = page.locator(`.mark[data-note="${id}"] .anc`);
    await anc.scrollIntoViewIfNeeded();
    await page.evaluate(id => document.querySelector(`.mark[data-note="${id}"]`).scrollIntoView({ block: 'center' }), id);
    const geo = await page.evaluate(id => {
      const a = document.querySelector(`.mark[data-note="${id}"] .anc`);
      const rs = [...a.getClientRects()].filter(r => r.width > 4);
      const b = a.getBoundingClientRect();
      const v = a.closest('.v').getBoundingClientRect();
      return { lines: rs.map(r => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 })), centre: { x: b.left + b.width / 2, y: b.top + b.height / 2 }, plain: { x: v.left + 4, y: v.top + 12 } };
    }, id);
    const targets = [['first line', geo.lines[0]], ['last line', geo.lines[geo.lines.length - 1]], ['box centre', geo.centre], ['verse start', geo.plain]];
    log.push(`      [${name}] ${id}: phrase spans ${geo.lines.length} line(s)`);
    for (const [label, pt] of targets) {
      await tapAt(pt.x, pt.y); tapped.push(`${id} real ${touch ? 'touch' : 'pointer'} @${label}`);
      const opened = await page.locator(`#note-${id}`).count() === 1;
      ok(opened, `[${name}] ${id}: real ${touch ? 'touch' : 'pointer'} on ${label} (${Math.round(pt.x)},${Math.round(pt.y)}) opens the note`);
      if (opened) {
        // close with the same real input on the same spot (toggle), then confirm closed
        await tapAt(pt.x, pt.y);
        ok(await page.locator(`#note-${id}`).count() === 0, `[${name}] ${id}: second real tap on ${label} closes it`);
      }
    }
  }
  // a verse without a note must not open anything
  const v45 = await page.locator('#verse-45').boundingBox();
  await page.locator('#verse-45').scrollIntoViewIfNeeded();
  const b45 = await page.locator('#verse-45').boundingBox();
  await tapAt(b45.x + b45.width / 2, b45.y + b45.height / 2);
  ok(await page.locator('.note').count() === 0, `[${name}] tapping unmarked verse 45 opens nothing`);

  for (const id of ['v46', 'v47', 'v51']) {
    const mk = page.locator(`.mark[data-note="${id}"]`);
    await press(mk); tapped.push(`marker ${id}`);
    ok(await page.locator(`#note-${id}`).isVisible(), `[${name}] ${id}: note opens`);
    ok((await mk.getAttribute('aria-expanded')) === 'true', `[${name}] ${id}: marker shows open state`);
    const rows = page.locator(`#note-${id} .row`);
    const n = await rows.count();
    ok(n === 5, `[${name}] ${id}: 5 steps (found ${n})`);
    for (let k = 0; k < n; k++) {
      await press(rows.nth(k)); tapped.push(`${id} step ${k + 1}`);
      const panel = page.locator(`#panel-${id}-${k}`);
      ok(await panel.isVisible() && (await panel.innerText()).trim().length > 20, `[${name}] ${id}: step ${k + 1} opens with content`);
      const h = (await rows.nth(k).boundingBox()).height;
      ok(h >= 44, `[${name}] ${id}: step ${k + 1} row tap height ${Math.round(h)} ≥ 44`);
    }
    const links = page.locator(`#note-${id} .open-btn`);
    const ln = await links.count();
    for (let k = 0; k < ln; k++) {
      const b = links.nth(k);
      await press(b); tapped.push(`${id} link ${k + 1} open`);
      const ex = page.locator(`#ex-${id}-${k}`);
      await page.waitForTimeout(700);
      const on = await ex.locator('mark.hl.on').count();
      const verses = await ex.locator('p:not(.src)').count();
      ok(await ex.isVisible() && verses >= 1 && on >= 1, `[${name}] ${id}: link ${k + 1} opens passage (${verses} verses, ${on} highlighted phrases)`);
      const srcHl = await page.locator(`#verse-${id.slice(1)} mark.hl.on`).count();
      log.push(`      source verse highlights after link ${k + 1}: ${srcHl}`);
      if (shots.link && id === 'v46' && k === 0) await (await page.locator(`#note-${id}`)).screenshot({ path: path.join(OUT, `${name}-2-note46-link.png`) });
      if (shots.link && id === 'v51' && k === 0) await page.locator(`#note-${id}`).screenshot({ path: path.join(OUT, `${name}-3-note51-link.png`) });
      await press(b); tapped.push(`${id} link ${k + 1} close`);
      ok(await ex.isHidden(), `[${name}] ${id}: link ${k + 1} closes`);
    }
    await noOverflow(`with ${id} fully open`);
    // close: × on first, marker re-tap on others
    if (id === 'v46') { await press(page.locator(`#note-${id} .x`)); tapped.push(`${id} × close`); }
    else { await press(mk); tapped.push(`${id} marker re-tap close`); }
    ok(await page.locator(`#note-${id}`).count() === 0, `[${name}] ${id}: note closes`);
  }

  // Check what you heard
  const checks = page.locator('.heard');
  const cn = await checks.count();
  ok(cn === 3, `[${name}] 3 "Check what you heard" examples (found ${cn})`);
  for (let k = 0; k < cn; k++) {
    const c = checks.nth(k);
    await press(c); tapped.push(`check ${k + 1}`);
    const res = page.locator(`#check-c${k + 1}`);
    ok(await res.isVisible() && await res.locator('.claim').count() >= 2, `[${name}] check ${k + 1}: verdict shows graded lines`);
    if (shots.check && k === 0) await page.locator('.checks').screenshot({ path: path.join(OUT, `${name}-4-check.png`) });
    const go = res.locator('.go');
    const target = await go.getAttribute('data-go');
    await press(go); tapped.push(`check ${k + 1} go → ${target}`);
    await page.waitForTimeout(500);
    if (target.startsWith('verse:')) ok(await page.locator(`#verse-${target.slice(6)}.flash`).count() === 1, `[${name}] check ${k + 1}: jumps to verse ${target.slice(6)}`);
    else ok(await page.locator(`#note-${target}`).isVisible(), `[${name}] check ${k + 1}: opens note ${target}`);
    await press(c); tapped.push(`check ${k + 1} close`);
    ok(await res.isHidden(), `[${name}] check ${k + 1}: closes`);
  }
  await page.keyboard.press('Escape');
  ok(await page.locator('.note').count() === 0, `[${name}] Escape closes the open note`);
  if (shots.full) await page.screenshot({ path: path.join(OUT, `${name}-5-full.png`), fullPage: true });

  // deep link
  await page.goto(base + 'context-bible/index.html#v51');
  await page.waitForSelector('#note-v51');
  ok(true, `[${name}] deep link #v51 opens the note`);

  ok(errors.length === 0, `[${name}] console errors: ${errors.length}${errors.length ? ' — ' + errors.join(' | ') : ''}`);
  log.push(`      [${name}] pressed ${tapped.length}: ${tapped.join(', ')}`);
  await ctx.close();
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  const phone = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true };
  await run(browser, base, 'phone390', phone, {});
  await run(browser, base, 'iphone13', { ...phone, deviceScaleFactor: 3 }, { first: true, link: true, check: true });
  await run(browser, base, 'iphone13-dark', { ...phone, deviceScaleFactor: 3, colorScheme: 'dark' }, { first: true, link: true });
  await run(browser, base, 'small320', { ...phone, viewport: { width: 320, height: 568 }, deviceScaleFactor: 2 }, {});
  await run(browser, base, 'desktop', { viewport: { width: 1280, height: 900 } }, { first: true });
  for (const w of [700, 900, 1024]) await run(browser, base, `desktop${w}`, { viewport: { width: w, height: 800 } }, {});
  await run(browser, base, 'phone375', { ...phone, viewport: { width: 375, height: 667 }, deviceScaleFactor: 2 }, {});

  // load-error state + retry
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  let fail404 = true;
  await page.route('**/data.json', r => fail404 ? r.fulfill({ status: 404, body: '' }) : r.continue());
  await page.goto(base + 'context-bible/index.html');
  await page.waitForSelector('#retry');
  ok(await page.locator('.err').isVisible(), '[error] load failure shows a message with Try again');
  await page.screenshot({ path: path.join(OUT, 'error-state.png') });
  fail404 = false;
  await page.click('#retry');
  await page.waitForSelector('.mark');
  ok(true, '[error] Try again recovers');
  await ctx.close();

  await browser.close(); server.close();
  log.push(`\nTOTAL ${pass} pass / ${fail} fail`);
  fs.writeFileSync(path.join(OUT, 'robot-result.txt'), log.join('\n') + '\n');
  console.log(log.filter(l => !l.startsWith('PASS')).join('\n'));
  process.exit(fail ? 1 : 0);
})();
