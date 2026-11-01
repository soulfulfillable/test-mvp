#!/usr/bin/env node
// Mole Mash (Playgama build) — headless play robot.
// Serves playables/molemash over local http, plays the game in Chromium at the Playgama size matrix and
// writes screenshots + a JSON report. Run: node playables/molemash/robot.js [outDir]
//   checks: console errors 0, no external requests, game_ready sent once, round reaches game over, score > 0,
//           progress + mute survive a reload (Bridge storage), pause/resume, hidden page freezes,
//           rewarded continue grants only on 'rewarded', layout: HUD and grid never overlap and stay on screen.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = __dirname;
const OUT = process.argv[2] || path.join(ROOT, 'qa');
fs.mkdirSync(OUT, { recursive: true });
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg', '.png': 'image/png', '.md': 'text/markdown' };

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
      if (p === '/') p = '/index.html';
      const file = path.join(ROOT, p);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nope'); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}

const SIZES = [
  ['phone-360x640', 360, 640], ['phone-390x844', 390, 844], ['phone-430x932', 430, 932],
  ['land-844x390', 844, 390], ['land-915x412', 915, 412],
  ['tablet-768x1024', 768, 1024], ['tablet-1024x768', 1024, 768],
  ['square-640x640', 640, 640],
  ['iframe-800x450', 800, 450], ['iframe-1280x720', 1280, 720],
  ['desk-1366x768', 1366, 768], ['desk-1920x1080', 1920, 1080],
  ['tall-9x21-390x910', 390, 910], ['wide-21x9-910x390', 910, 390]
];

const report = { startedAt: new Date().toISOString(), consoleErrors: [], pageErrors: [], externalRequests: [], checks: [], screenshots: [] };
function check(name, ok, detail) { report.checks.push({ name, ok: !!ok, detail: detail === undefined ? '' : String(detail) }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? '  — ' + detail : '')); }

async function newPage(browser, w, h, url, opts = {}) {
  const context = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: !!opts.touch, isMobile: !!opts.touch, storageState: opts.storageState });
  const page = await context.newPage();
  page.on('console', (m) => { if (m.type() === 'error') report.consoleErrors.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => report.pageErrors.push(String(e).slice(0, 300)));
  page.on('request', (r) => { const u = r.url(); if (!u.startsWith('http://127.0.0.1') && !u.startsWith('data:')) report.externalRequests.push(u); });
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__game && window.__game.state !== undefined, null, { timeout: 15000 });
  return { context, page };
}

async function shot(page, name) {
  const file = path.join(OUT, name + '.png');
  await page.screenshot({ path: file });
  report.screenshots.push(name + '.png');
  return file;
}

// whack every mole that is up until the round ends (or maxMs passes)
async function playUntilOver(page, maxMs) {
  const t0 = Date.now();
  let whacks = 0;
  while (Date.now() - t0 < maxMs) {
    const st = await page.evaluate(() => {
      const g = window.__game;
      const targets = g.moles.filter((m) => m.phase !== 'whacked' && m.kind !== 'bomb' && m.p > 0.35).map((m) => g.holeCenter(m.hole));
      return { state: g.state, targets, timeLeft: g.timeLeft };
    });
    if (st.state !== 1) break;
    for (const t of st.targets) { await page.mouse.click(t.x, t.y); whacks++; }
    await page.waitForTimeout(90);
  }
  return whacks;
}


// Play again; when a gift box is ready the box screen comes first — keep it for later and go on
async function playAgain(page) {
  await page.click('#retry-btn');
  await page.waitForTimeout(200);
  if (await page.evaluate(() => !document.getElementById('box-panel').classList.contains('hidden'))) { await page.click('#later-btn'); await page.waitForTimeout(150); }
}

(async () => {
  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/index.html`;
  const browser = await chromium.launch({ args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });

  // ── 1. full session on a phone (touch) ──
  {
    const { context, page } = await newPage(browser, 390, 844, base + '#debug', { touch: true });
    check('loading screen hidden before game_ready', await page.evaluate(() => document.getElementById('loading').classList.contains('hidden')));
    check('bridge initialized (mock platform outside Playgama)', await page.evaluate(() => window.__game.bridgeReady && window.bridge.platform.id), await page.evaluate(() => window.bridge.platform.id));
    const msgs = await page.evaluate(() => window.__msgs.slice());
    check('game_ready sent exactly once', msgs.filter((m) => m === 'game_ready').length === 1, JSON.stringify(msgs));
    await shot(page, 'phone-390x844-title');
    check('title state before first tap', await page.evaluate(() => window.__game.state === 0));
    check('tutorial on for a new player', await page.evaluate(() => window.__game.store.progress.played === 0));
    await page.tap('#game');
    await page.waitForTimeout(400);
    check('tap starts the round', await page.evaluate(() => window.__game.state === 1));
    check('level_started message after start', await page.evaluate(() => window.__msgs.includes('level_started')));
    // audio unlocked on the first gesture; files decode after game_ready
    await page.waitForTimeout(1500);
    const audio = await page.evaluate(() => ({ ctx: window.__game.ctxState, bufs: window.__game.bufs, bgm: window.__game.bgmPlaying, audible: window.__game.audible }));
    check('AudioContext running after first tap', audio.ctx === 'running', audio.ctx);
    check('sound files decoded (effects + music)', audio.bufs.length >= 12 && audio.bufs.includes('bgm'), audio.bufs.join(','));
    check('music looping', audio.bgm);
    await page.waitForTimeout(2600);  // let the tutorial mole come up
    await shot(page, 'phone-390x844-play-tutorial');
    const whacks = await playUntilOver(page, 12000);
    const mid = await page.evaluate(() => ({ score: window.__game.score, lives: window.__game.lives, state: window.__game.state, tut: window.__game.tutorial }));
    check('scored by whacking moles', mid.score > 0, `score ${mid.score}, whacks ${whacks}, lives ${mid.lives}`);
    await shot(page, 'phone-390x844-play');
    // pause / resume by keyboard and button
    await page.keyboard.press('KeyP');
    await page.waitForTimeout(150);
    const paused = await page.evaluate(() => ({ p: window.__game.userPaused, vis: !document.getElementById('pause-panel').classList.contains('hidden'), frozen: window.__game.frozen }));
    check('P pauses and shows the pause panel', paused.p && paused.vis && paused.frozen, JSON.stringify(paused));
    const tl1 = await page.evaluate(() => window.__game.timeLeft);
    await page.waitForTimeout(700);
    const tl2 = await page.evaluate(() => window.__game.timeLeft);
    check('timer frozen while paused', Math.abs(tl1 - tl2) < 0.01, `${tl1.toFixed(2)} → ${tl2.toFixed(2)}`);
    await shot(page, 'phone-390x844-paused');
    await page.click('#resume-btn');
    await page.waitForTimeout(100);
    check('Resume continues the round', await page.evaluate(() => window.__game.state === 1 && !window.__game.userPaused));
    // page hidden → frozen + silent, back → pause panel waits for the player
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
    await page.waitForTimeout(250);
    const hid = await page.evaluate(() => ({ hidden: window.__game.reasons.hidden, audible: window.__game.audible, ctx: window.__game.ctxState, frozen: window.__game.frozen }));
    check('hidden page: silent and frozen', hid.hidden && !hid.audible && hid.frozen && hid.ctx === 'suspended', JSON.stringify(hid));
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); });
    await page.waitForTimeout(200);
    const back = await page.evaluate(() => ({ hidden: window.__game.reasons.hidden, audible: window.__game.audible, paused: window.__game.userPaused }));
    check('back from hidden: sound allowed again, waits in pause panel', !back.hidden && back.audible && back.paused, JSON.stringify(back));
    await page.click('#resume-btn');
    // ad opened by the platform → frozen + silent; closed → resumes
    await page.evaluate(() => window.__game.adStateChanged('opened'));
    const ad = await page.evaluate(() => ({ frozen: window.__game.frozen, audible: window.__game.audible }));
    check('interstitial opened: frozen and silent', ad.frozen && !ad.audible, JSON.stringify(ad));
    await page.evaluate(() => window.__game.adStateChanged('closed'));
    check('interstitial closed: running again', await page.evaluate(() => !window.__game.frozen && window.__game.audible));
    // finish the round fast
    await page.evaluate(() => { window.__game.timeLeft = 2.5; });
    await playUntilOver(page, 6000);
    await page.waitForTimeout(300);
    const over = await page.evaluate(() => ({ state: window.__game.state, score: window.__game.score, panel: !document.getElementById('over-panel').classList.contains('hidden'), title: document.getElementById('over-title-text').textContent, best: window.__game.store.progress.best, ranks: window.__game.store.progress.ranks.length, msgs: window.__msgs.slice() }));
    check('round ends at 0 s with the game-over panel', over.state === 2 && over.panel, JSON.stringify({ title: over.title, score: over.score }));
    check('best and rank recorded', over.best === over.score && over.ranks === 1, `best ${over.best}`);
    check('level_completed message on time-up', over.msgs.includes('level_completed'), over.msgs.join(','));
    await shot(page, 'phone-390x844-over');
    // name, mute → saved through the Bridge
    await page.fill('#name-input', 'Robo');
    await page.click('#mute-btn');
    await page.waitForTimeout(900);
    const muted = await page.evaluate(() => ({ user: window.__game.reasons.user, attr: document.getElementById('mute-btn').getAttribute('data-muted'), audible: window.__game.audible }));
    check('mute button silences and shows the off icon', muted.user && muted.attr === '1' && !muted.audible, JSON.stringify(muted));
    // Play again → interstitial requested (Bridge decides), new round
    await playAgain(page);
    await page.waitForTimeout(300);
    check('Play again starts a new round', await page.evaluate(() => window.__game.state === 1 && window.__game.score === 0));
    check('tutorial off after the first round', await page.evaluate(() => !window.__game.tutorial));
    // reload → progress and mute restored from Bridge storage
    const storageState = await context.storageState();
    await page.reload({ waitUntil: 'load' });
    await page.waitForFunction(() => window.__game && window.__game.state !== undefined);
    const re = await page.evaluate(() => ({ best: window.__game.store.progress.best, name: window.__game.store.progress.name, muted: window.__game.store.settings.muted, attr: document.getElementById('mute-btn').getAttribute('data-muted'), audible: window.__game.audible, played: window.__game.store.progress.played }));
    check('reload restores best, name, mute (Bridge storage)', re.best === over.score && re.name === 'Robo' && re.muted === true && re.attr === '1' && !re.audible, JSON.stringify(re));
    check('reload while muted stays silent from the first frame', !re.audible);
    // rewarded continue (simulated states): grant only on 'rewarded'
    await page.evaluate(() => { window.__forceRewarded = true; });
    await page.tap('#game');
    await page.waitForTimeout(200);
    await page.evaluate(() => { window.__game.timeLeft = 0.2; });
    await page.waitForTimeout(600);
    const o2 = await page.evaluate(() => ({ state: window.__game.state, btn: !document.getElementById('continue-btn').classList.contains('hidden') }));
    check('continue (rewarded) button offered once per attempt', o2.state === 2 && o2.btn, JSON.stringify(o2));
    await shot(page, 'phone-390x844-over-continue');
    await page.click('#continue-btn');
    await page.evaluate(() => window.__game.onRewardedState('opened'));
    await page.evaluate(() => window.__game.onRewardedState('closed'));   // closed without reward → nothing granted
    await page.waitForTimeout(100);
    const notGranted = await page.evaluate(() => ({ state: window.__game.state, note: document.getElementById('ad-note').textContent, used: window.__game.continueUsed }));
    check("ad closed early: no reward, game stays on the panel", notGranted.state === 2 && !notGranted.used && notGranted.note.length > 0, JSON.stringify(notGranted));
    await page.click('#continue-btn');
    await page.evaluate(() => window.__game.onRewardedState('opened'));
    await page.evaluate(() => window.__game.onRewardedState('rewarded'));
    await page.evaluate(() => window.__game.onRewardedState('closed'));
    await page.waitForTimeout(150);
    const granted = await page.evaluate(() => ({ state: window.__game.state, lives: window.__game.lives, timeLeft: window.__game.timeLeft, used: window.__game.continueUsed, ranks: window.__game.store.progress.ranks.length }));
    check('rewarded: round continues with hearts back and +10 s', granted.state === 1 && granted.lives === 3 && granted.timeLeft > 9 && granted.used, JSON.stringify(granted));
    await page.evaluate(() => { window.__game.timeLeft = 0.2; });
    await page.waitForTimeout(600);
    const o3 = await page.evaluate(() => ({ state: window.__game.state, btn: !document.getElementById('continue-btn').classList.contains('hidden') }));
    check('no second continue in the same attempt', o3.state === 2 && !o3.btn, JSON.stringify(o3));
    // out of hearts path
    await page.waitForTimeout(700);   // the panel ignores taps for 600 ms after game over (mis-tap guard)
    await playAgain(page);
    await page.waitForTimeout(2300);
    const t0 = Date.now();
    while (Date.now() - t0 < 20000) {
      const s = await page.evaluate(() => window.__game.state);
      if (s !== 1) break;
      await page.waitForTimeout(200);
    }
    const hearts = await page.evaluate(() => ({ state: window.__game.state, lives: window.__game.lives, title: document.getElementById('over-title-text').textContent, msgs: window.__msgs.slice(-3) }));
    check('ignoring moles loses 3 hearts → OUT OF HEARTS', hearts.state === 2 && hearts.lives === 0 && /HEARTS/.test(hearts.title), JSON.stringify(hearts));
    await shot(page, 'phone-390x844-over-hearts');

    // ── gift box / hammer loop (v1.1, method A) ──
    const box0 = await page.evaluate(() => ({ p: window.__game.store.progress, label: document.getElementById('box-label').textContent, strip: document.querySelectorAll('#hammer-strip canvas').length, eq: document.querySelectorAll('#hammer-strip canvas.equipped').length }));
    check('results panel shows the gift box bar and 5 hammer slots', /Gift box/.test(box0.label) && box0.strip === 5 && box0.eq === 1, JSON.stringify({ label: box0.label, fill: box0.p.boxFill, ready: box0.p.boxesReady, hammers: box0.p.hammers }));
    await shot(page, 'phone-390x844-over-box');
    await page.evaluate(() => { window.__game.store.progress.boxesReady = 1; });
    await page.waitForTimeout(700);
    await page.click('#retry-btn');
    await page.waitForTimeout(200);
    const bp = await page.evaluate(() => ({ open: !document.getElementById('box-panel').classList.contains('hidden'), adBtn: !document.getElementById('open-box-btn').classList.contains('hidden'), state: window.__game.state }));
    check('Play again with a ready box opens the box screen first (not next to the continue offer)', bp.open && bp.adBtn && bp.state === 2, JSON.stringify(bp));
    await shot(page, 'phone-390x844-box');
    await page.click('#later-btn');
    await page.waitForTimeout(150);
    check('Later keeps the box and starts the round', await page.evaluate(() => window.__game.state === 1 && window.__game.store.progress.boxesReady === 1));
    await page.evaluate(() => { window.__game.timeLeft = 0.2; });
    await page.waitForTimeout(900);
    await page.click('#retry-btn');
    await page.waitForTimeout(200);
    await page.evaluate(() => { window.__forceRewarded = true; });
    await page.click('#open-box-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('closed'); });
    await page.waitForTimeout(100);
    const kept = await page.evaluate(() => ({ ready: window.__game.store.progress.boxesReady, note: document.getElementById('box-note').textContent, open: !document.getElementById('box-panel').classList.contains('hidden'), hammers: window.__game.store.progress.hammers.length }));
    check('ad closed early: box kept, nothing granted', kept.ready === 1 && kept.hammers === 1 && kept.open && /safe/.test(kept.note), JSON.stringify(kept));
    await page.click('#open-box-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); window.__game.onRewardedState('closed'); });
    await page.waitForTimeout(150);
    const rev = await page.evaluate(() => ({ open: !document.getElementById('reveal-panel').classList.contains('hidden'), name: document.getElementById('reveal-name').textContent, hammers: window.__game.store.progress.hammers.slice(), ready: window.__game.store.progress.boxesReady }));
    check('rewarded: box opens, a new hammer is revealed, box count drops', rev.open && rev.hammers.length === 2 && rev.ready === 0 && rev.name.length > 3, JSON.stringify(rev));
    await shot(page, 'phone-390x844-reveal');
    await page.click('#equip-btn');
    await page.waitForTimeout(150);
    const eq = await page.evaluate(() => ({ state: window.__game.state, equipped: window.__game.store.progress.equipped }));
    check('Equip and play: new hammer equipped, round starts', eq.state === 1 && eq.equipped !== 'classic', JSON.stringify(eq));
    await page.waitForTimeout(2600);
    await page.evaluate(() => { window.__game.spawnMole('mole'); });
    await page.waitForTimeout(250);
    const hc = await page.evaluate(() => window.__game.holeCenter(window.__game.moles[window.__game.moles.length - 1].hole));
    await page.mouse.click(hc.x, hc.y);
    await page.waitForTimeout(60);
    await shot(page, 'phone-390x844-play-new-hammer');
    await page.reload({ waitUntil: 'load' });
    await page.waitForFunction(() => window.__game && window.__game.state !== undefined);
    const re2 = await page.evaluate(() => ({ equipped: window.__game.store.progress.equipped, hammers: window.__game.store.progress.hammers.length, fill: window.__game.store.progress.boxFill }));
    check('reload keeps owned hammers, the equipped one and the box fill', re2.equipped !== 'classic' && re2.hammers === 2, JSON.stringify(re2));
    // all five collected → bar says so, no box screen
    await page.evaluate(() => { const p = window.__game.store.progress; p.hammers = window.__game.hammers.slice(); p.boxesReady = 0; p.boxFill = 0; window.__game.saveStore(['progress']); });
    await page.tap('#game');
    await page.waitForTimeout(200);
    await page.evaluate(() => { window.__game.timeLeft = 0.2; });
    await page.waitForTimeout(700);
    const done = await page.evaluate(() => ({ label: document.getElementById('box-label').textContent, state: window.__game.state }));
    check('all hammers collected: bar reads so', /All hammers collected/.test(done.label) && done.state === 2, JSON.stringify(done));
    await page.waitForTimeout(700);
    await page.click('#retry-btn');
    await page.waitForTimeout(200);
    check('no box screen once everything is collected', await page.evaluate(() => window.__game.state === 1 && document.getElementById('box-panel').classList.contains('hidden')));
    await context.close();
  }

  // ── 2. desktop: keyboard only ──
  {
    const { context, page } = await newPage(browser, 1280, 720, base + '#debug');
    check('desktop detected (keyboard hints)', await page.evaluate(() => window.__game.isDesktop));
    await page.keyboard.press('Space');
    await page.waitForTimeout(2600);
    await page.evaluate(() => { window.__game.spawnMole('mole'); });
    await page.waitForTimeout(250);
    const hole = await page.evaluate(() => window.__game.moles[window.__game.moles.length - 1].hole);
    await page.keyboard.press('Digit' + (hole + 1));
    await page.waitForTimeout(100);
    check('number key whacks the matching hole', await page.evaluate(() => window.__game.score >= 1), `hole ${hole + 1}`);
    await shot(page, 'iframe-1280x720-play');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(100);
    check('Esc does nothing (1.5.2)', await page.evaluate(() => window.__game.state === 1 && !window.__game.userPaused));
    await context.close();
  }

  // ── 3. size matrix: play state with moles up, layout sanity ──
  for (const [name, w, h] of SIZES) {
    const { context, page } = await newPage(browser, w, h, base + '#debug', { touch: w < 700 });
    await page.evaluate(() => { window.__game.tryStart(); });
    await page.waitForTimeout(80);
    await page.evaluate(() => { window.__game.spawnMole('mole'); window.__game.spawnMole('gold'); window.__game.spawnMole('bomb'); });
    await page.waitForTimeout(400);
    const lay = await page.evaluate(() => {
      const g = window.__game, hud = g.hud, grid = g.grid, holes = g.holes;
      const W = innerWidth, H = innerHeight;
      const moleH = (holes[1].x - holes[0].x) / 1.12 * 0.82;
      const top = Math.min(...holes.map((h) => h.y)) - moleH - 26;
      const bottom = Math.max(...holes.map((h) => h.y + h.ry + 7));
      const left = Math.min(...holes.map((h) => h.x - h.rx - 7)), right = Math.max(...holes.map((h) => h.x + h.rx + 7));
      const btn = document.getElementById('pause-btn').getBoundingClientRect();
      const hudBox = { x: hud.x, y: hud.y, w: hud.w, h: hud.h };
      const gridBox = { x: grid.x, y: grid.y, w: grid.w, h: grid.h };
      const overlap = !(hudBox.x + hudBox.w <= gridBox.x || gridBox.x + gridBox.w <= hudBox.x || hudBox.y + hudBox.h <= gridBox.y || gridBox.y + gridBox.h <= hudBox.y);
      const btnOverGrid = btn.bottom > top && btn.left < right && btn.right > left;
      return { W, H, mode: hud.mode, overlap, inside: top >= 0 && bottom <= H && left >= 0 && right <= W, btnOverGrid, top, bottom, left, right, cell: holes[1].x - holes[0].x };
    });
    check(`layout ${name} (${lay.mode}): HUD and board separate, board on screen, buttons clear`, !lay.overlap && lay.inside && !lay.btnOverGrid, JSON.stringify({ cell: Math.round(lay.cell), top: Math.round(lay.top), bottom: Math.round(lay.bottom), btnOverGrid: lay.btnOverGrid }));
    await shot(page, name + '-play');
    if (name === 'square-640x640' || name === 'land-844x390') {
      await page.evaluate(() => window.__game.gameOver('time'));
      await page.waitForTimeout(200);
      const panel = await page.evaluate(() => { const r = document.getElementById('over-panel').getBoundingClientRect(); return { fits: r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth, h: Math.round(r.height) }; });
      check(`game-over panel fits at ${name}`, panel.fits, `panel ${panel.h}px of ${h}`);
      await shot(page, name + '-over');
    }
    await context.close();
  }

  // ── 4. covers (still frame) ──
  const coverDir = path.join(ROOT, 'covers');
  fs.mkdirSync(coverDir, { recursive: true });
  for (const [name, w, h] of [['cover-800x800', 800, 800], ['cover-1080x1920', 1080, 1920], ['cover-1920x1080', 1920, 1080]]) {
    const { context, page } = await newPage(browser, w, h, base + '#debug&cover');
    await page.waitForTimeout(300);
    await page.screenshot({ path: path.join(coverDir, name + '.png') });
    await context.close();
  }

  await browser.close();
  srv.close();

  check('console errors: 0', report.consoleErrors.length === 0, report.consoleErrors.join(' | ').slice(0, 400));
  check('page errors: 0', report.pageErrors.length === 0, report.pageErrors.join(' | ').slice(0, 400));
  check('external requests: 0 (everything ships in the archive)', report.externalRequests.length === 0, [...new Set(report.externalRequests)].slice(0, 5).join(' | '));
  report.passed = report.checks.filter((c) => c.ok).length;
  report.failed = report.checks.filter((c) => !c.ok).length;
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`\n${report.passed} passed, ${report.failed} failed → ${path.join(OUT, 'report.json')}`);
  process.exit(report.failed ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
