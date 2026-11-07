#!/usr/bin/env node
// Kitty Queens: Cat Sudoku (Playgama build) — headless play robot.
// Serves playables/catdoku over local http, plays the game in Chromium at the Playgama size matrix and writes
// screenshots + a JSON report. Run: node playables/catdoku/robot.js [outDir]
//   checks: console errors 0, no external requests, game_ready once, level 1 onboarding (hand only) + levels 1..10
//           cleared by real taps, daily cleared, rule break → red cats + tinted line and nothing else (no text, no
//           lives), Undo / Notes / Clear / Hint bar, Auto-X off by default and switchable, rewarded hint only on
//           'rewarded' (free where ads are unsupported), reload restores progress + mute (Bridge storage),
//           pause/hidden/ad freeze, Esc unused, generator uniqueness (daily + levels 1..60 in-page, 1..500 in node),
//           layout at 14 sizes: HUD, board and foot never overlap and stay on screen.
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

const report = { startedAt: new Date().toISOString(), consoleErrors: [], pageErrors: [], externalRequests: [], checks: [], screenshots: [], taps: 0 };
function check(name, ok, detail) { report.checks.push({ name, ok: !!ok, detail: detail === undefined ? '' : String(detail) }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? '  — ' + detail : '')); }

async function newPage(browser, w, h, url, opts = {}) {
  const context = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, hasTouch: !!opts.touch, isMobile: !!opts.touch });
  const page = await context.newPage();
  page.on('console', (m) => { if (m.type() === 'error') report.consoleErrors.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => report.pageErrors.push(String(e).slice(0, 300)));
  page.on('request', (r) => { const u = r.url(); if (!u.startsWith('http://127.0.0.1') && !u.startsWith('data:')) report.externalRequests.push(u); });
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__game && window.__game.state !== undefined, null, { timeout: 15000 });
  return { context, page };
}
async function shot(page, name) { const file = path.join(OUT, name + '.png'); await page.screenshot({ path: file }); report.screenshots.push(name + '.png'); return file; }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// tap a cell by its screen position (touch when the context has it, mouse otherwise)
async function tapCell(page, r, c, touch) {
  const p = await page.evaluate(([r, c]) => window.__game.cellRect(r, c), [r, c]);
  if (touch) await page.touchscreen.tap(p.x, p.y); else await page.mouse.click(p.x, p.y);
  report.taps++;
}
// place every cat of the solution with one tap each; returns when the board is solved
async function solveBoard(page, touch, gapMs = 40) {
  const sol = await page.evaluate(() => window.__game.solution.slice());
  for (let r = 0; r < sol.length; r++) {
    const st = await page.evaluate(() => window.__game.state);
    if (st !== 1) break;
    const already = await page.evaluate(([r, c]) => window.__game.cell[r][c] === 2, [r, sol[r]]);
    if (already) continue;
    await tapCell(page, r, sol[r], touch); await sleep(gapMs);
  }
}
// a cell that breaks a rule against the cats already placed (same row as a placed cat, not the solution cell)
async function wrongCell(page) {
  return page.evaluate(() => {
    const g = window.__game, n = g.N;
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      if (g.cell[r][c] === 2) continue;
      if (g.solution[r] === c) continue;
      // conflicts with a placed cat?
      for (let r2 = 0; r2 < n; r2++) for (let c2 = 0; c2 < n; c2++) if (g.cell[r2][c2] === 2 && (r2 === r || c2 === c || (Math.abs(r2 - r) <= 1 && Math.abs(c2 - c) <= 1) || g.region[r2][c2] === g.region[r][c])) return [r, c];
    }
    return null;
  });
}

(async () => {
  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/index.html`;
  const browser = await chromium.launch({ args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });

  // ── 0. generator: daily + levels are unique (same functions the game uses) ──
  {
    const { context, page } = await newPage(browser, 390, 844, base + '#debug', { touch: true });
    const gen = await page.evaluate(() => {
      const g = window.__game, out = { daily: null, levels: [], sizes: {} };
      const d = g.genDaily(g.puzzleDay || '20261107'); out.daily = { unique: d.unique, n: d.n, count: g.countSolutions(d.n, d.region, 3) };
      for (let lv = 1; lv <= 60; lv++) { const p = g.genLevel(lv); out.levels.push({ lv, n: p.n, unique: p.unique, count: g.countSolutions(p.n, p.region, 3) }); out.sizes[p.n] = (out.sizes[p.n] || 0) + 1; }
      return out;
    });
    check('daily board has exactly one solution', gen.daily.count === 1 && gen.daily.unique, JSON.stringify(gen.daily));
    const bad = gen.levels.filter((l) => l.count !== 1 || !l.unique);
    check('levels 1..60 each have exactly one solution', bad.length === 0, bad.length ? JSON.stringify(bad.slice(0, 3)) : 'sizes ' + JSON.stringify(gen.sizes));
    check('level sizes grow 5→6→7→8→9', gen.levels[0].n === 5 && gen.levels[3].n === 6 && gen.levels[10].n === 7 && gen.levels[25].n === 8 && gen.levels[50].n === 9);
    await context.close();
  }

  // ── 1. full session on a phone (touch) ──
  {
    const { context, page } = await newPage(browser, 390, 844, base + '#debug', { touch: true });
    check('loading screen hidden before game_ready', await page.evaluate(() => document.getElementById('loading').classList.contains('hidden')));
    check('bridge initialized (mock platform outside Playgama)', await page.evaluate(() => window.__game.bridgeReady && window.bridge.platform.id), await page.evaluate(() => window.bridge.platform.id));
    const msgs = await page.evaluate(() => window.__msgs.slice());
    check('game_ready sent exactly once', msgs.filter((m) => m === 'game_ready').length === 1, JSON.stringify(msgs));
    check('title cat is an inline drawing with blinking eyes', await page.evaluate(() => !!document.querySelector('#title-logo .eyes')));
    check('Horangi is the default cat (title pill, HUD icon)', await page.evaluate(() => window.__game.skin === 'horangi' && /Horangi/.test(document.getElementById('skin-pill').textContent) && document.querySelector('#progress use').getAttribute('href') === '#s-h-cat'));
    check('title screen shows the game title (rule 3.5.1)', await page.evaluate(() => /Kitty Queens/.test(document.querySelector('#title-panel h1').textContent) && document.title === 'Kitty Queens: Cat Sudoku'));
    check('no emoji anywhere in the page text (rule 4.3.2)', await page.evaluate(() => !/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(document.body.innerText)));
    await shot(page, 'phone-390x844-title');
    await page.tap('#bgm-pill'); await sleep(100);
    check('effects default to Calm and the pill says so', await page.evaluate(() => window.__game.store.settings.fx === 'calm' && /Calm/.test(document.getElementById('fx-pill').textContent)));
    check('music button switches the track and saves it', await page.evaluate(() => window.__game.store.settings.bgm === 'ragtime' && /Ragtime/.test(document.getElementById('bgm-pill').textContent)));
    await page.tap('#bgm-pill'); await sleep(100);
    check('two music tracks wrap around', await page.evaluate(() => window.__game.store.settings.bgm === 'ukulele'));
    // level 1 with onboarding: a hand on the first solution cell, no text anywhere under the board
    await page.tap('#play-btn'); await sleep(400);
    const l1 = await page.evaluate(() => ({ state: window.__game.state, level: window.__game.level, N: window.__game.N, tut: window.__game.tutorial, step: window.__game.tutStep, guide: window.__game.guideCell, hand: !document.getElementById('hand').classList.contains('hidden'), footText: document.getElementById('foot').innerText.replace(/\s+/g, ' ').trim() }));
    check('Play starts level 1 (5×5) with the finger guide on a solution cell', l1.state === 1 && l1.level === 1 && l1.N === 5 && l1.tut && l1.step === 1 && l1.guide && l1.hand, JSON.stringify(l1));
    check('no helper text: the foot holds only the four tool buttons', l1.footText === 'Undo Notes Hint Clear', l1.footText);
    check('level_started message after start', await page.evaluate(() => window.__msgs.includes('level_started')));
    await sleep(1200);
    const audio = await page.evaluate(() => ({ ctx: window.__game.ctxState, bufs: window.__game.bufs, bgm: window.__game.bgmPlaying, audible: window.__game.audible }));
    check('AudioContext running after first tap', audio.ctx === 'running', audio.ctx);
    check('sound files decoded (effects + music)', audio.bufs.length >= 8 && audio.bufs.includes('bgm_ukulele'), audio.bufs.join(','));
    check('music looping', audio.bgm);
    await shot(page, 'phone-390x844-tutorial-1');
    const g1 = l1.guide;
    await tapCell(page, g1[0], g1[1], true); await sleep(250);
    const t3 = await page.evaluate(() => ({ cats: window.__game.catCount, step: window.__game.tutStep, guide: window.__game.guideCell, hand: !document.getElementById('hand').classList.contains('hidden'), auto: document.querySelectorAll('.cell svg.ax').length, autox: window.__game.autox }));
    check('one tap places the cat; Auto-X is off by default so the board stays clean; the hand moves to the next cat', t3.cats === 1 && t3.step === 1 && t3.guide && t3.guide[0] !== g1[0] && t3.hand && t3.auto === 0 && !t3.autox, JSON.stringify(t3));
    check('the placed cat is Horangi', await page.evaluate(() => document.querySelector('.cell svg.cat use').getAttribute('href') === '#s-h-cat'));
    await shot(page, 'phone-390x844-tutorial-2');
    // a rule break: the cat lands, both cats turn red, the shared line is tinted, nothing is written, nothing is lost
    let wc = await wrongCell(page);
    await tapCell(page, wc[0], wc[1], true); await sleep(200);
    const tw = await page.evaluate(() => ({ cats: window.__game.catCount, conflicts: window.__game.conflicts, red: document.querySelectorAll('.cell.conflict').length, clash: document.querySelectorAll('.cell.clash').length, msg: document.getElementById('msg').textContent, footText: document.getElementById('foot').innerText.replace(/\s+/g, ' ').trim(), state: window.__game.state }));
    check('rule break: the cat is placed, the two clashing cats get a red frame, no text, no lives, game goes on', tw.cats === 2 && tw.conflicts === 2 && tw.red === 2 && tw.msg === '' && tw.footText === 'Undo Notes Hint Clear' && tw.state === 1, JSON.stringify(tw));
    await shot(page, 'phone-390x844-conflict');
    await page.tap('#undo-btn'); await sleep(150);
    const un = await page.evaluate(() => ({ cats: window.__game.catCount, conflicts: window.__game.conflicts, red: document.querySelectorAll('.cell.conflict, .cell.clash').length, hist: window.__game.history }));
    check('Undo takes the clashing cat back and the red goes away', un.cats === 1 && un.conflicts === 0 && un.red === 0, JSON.stringify(un));
    await solveBoard(page, true, 60);
    check('after the second cat the hand is gone (onboarding is two pointers, no words)', await page.evaluate(() => document.getElementById('hand').classList.contains('hidden') && window.__game.tutStep === 0));
    await sleep(350);
    const burst = await page.evaluate(() => ({ fx: window.__game.fxCount, won: document.getElementById('board').classList.contains('won'), msg: document.getElementById('msg').textContent, canvas: !document.getElementById('fx').classList.contains('hidden') }));
    check('win in calm mode: SOLVED! text and one small cat hop, no confetti canvas', burst.fx === 0 && burst.won && /SOLVED/.test(burst.msg) && !burst.canvas, JSON.stringify(burst));
    await shot(page, 'phone-390x844-win-calm');
    await sleep(600);
    const w1 = await page.evaluate(() => ({ state: window.__game.state, won: window.__game.won, panel: !document.getElementById('over-panel').classList.contains('hidden'), cleared: window.__game.store.progress.cleared, tut: window.__game.store.progress.tut, title: document.getElementById('over-title').textContent, msgs: window.__msgs.slice(-2) }));
    check('level 1 solved by taps → results panel, progress saved, tutorial done', w1.state === 2 && w1.won && w1.panel && w1.cleared === 1 && w1.tut === 1 && /solved/i.test(w1.title), JSON.stringify(w1));
    check('level_completed message on win', w1.msgs.includes('level_completed'), w1.msgs.join(','));
    await shot(page, 'phone-390x844-level1-solved');
    // levels 2..10 by real taps (Next level → interstitial request → next board)
    for (let lv = 2; lv <= 10; lv++) {
      await sleep(600);
      await page.tap('#next-btn'); await sleep(300);
      const st = await page.evaluate(() => ({ state: window.__game.state, level: window.__game.level, N: window.__game.N, tut: window.__game.tutorial, hintAd: !document.getElementById('hint-sub').classList.contains('hidden'), hintOn: !document.getElementById('hint-btn').disabled }));
      if (!(st.state === 1 && st.level === lv && !st.tut)) { check(`level ${lv} starts`, false, JSON.stringify(st)); break; }
      if (lv === 2) check('no tutorial; on the mock platform (no rewarded ads) the hint is free: button on, no "ad" tag', !st.tut && st.hintOn && !st.hintAd, JSON.stringify(st));
      if (lv === 2) {
        await page.tap('#hint-btn'); await sleep(200);
        const fh = await page.evaluate(() => ({ cats: window.__game.catCount, used: window.__game.hintUsed, off: document.getElementById('hint-btn').disabled, ok: window.__game.placed.every(([r, c]) => window.__game.solution[r] === c) }));
        check('free hint (no ads here) places one correct cat and is then used up for this puzzle', fh.cats === 1 && fh.used && fh.off && fh.ok, JSON.stringify(fh));
      }
      await solveBoard(page, true, 30);
      await sleep(1500);
      const w = await page.evaluate(() => ({ state: window.__game.state, won: window.__game.won, cleared: window.__game.store.progress.cleared }));
      check(`level ${lv} (${st.N}×${st.N}) cleared by taps`, w.state === 2 && w.won && w.cleared === lv, JSON.stringify(w));
      if (lv === 4) await shot(page, 'phone-390x844-level4-6x6');
    }
    await shot(page, 'phone-390x844-level10-solved');
    // level 11 (7×7): the tool bar — Notes, Clear, Undo, a row clash, Auto-X; rewarded hint only on 'rewarded'
    await sleep(600);
    await page.evaluate(() => { window.__forceRewarded = true; });
    await page.tap('#next-btn'); await sleep(300);
    check('level 11 is 7×7 and the hint button carries the "ad" tag (rewarded supported)', await page.evaluate(() => window.__game.level === 11 && window.__game.N === 7 && !document.getElementById('hint-sub').classList.contains('hidden') && !document.getElementById('hint-btn').disabled));
    const sol11 = await page.evaluate(() => window.__game.solution.slice());
    await tapCell(page, 0, sol11[0], true); await sleep(200);
    // Notes: taps become X marks, tap again removes; the cat is untouched
    await page.tap('#notes-btn'); await sleep(100);
    const nc = [3, (sol11[3] + 2) % 7];
    await tapCell(page, nc[0], nc[1], true); await sleep(120);
    const n1 = await page.evaluate(([r, c]) => ({ notes: window.__game.notes, on: document.getElementById('notes-btn').classList.contains('on'), v: window.__game.cell[r][c], glyph: !!document.querySelectorAll('.cell')[r * 7 + c].querySelector('svg.xm'), cats: window.__game.catCount }), nc);
    check('Notes on: a tap puts an X mark (no cat), the button shows the on state', n1.notes && n1.on && n1.v === 1 && n1.glyph && n1.cats === 1, JSON.stringify(n1));
    await shot(page, 'phone-390x844-notes');
    await tapCell(page, nc[0], nc[1], true); await sleep(120);
    check('Notes: tapping the X again clears it', await page.evaluate(([r, c]) => window.__game.cell[r][c] === 0, nc));
    await page.tap('#notes-btn'); await sleep(100);
    check('Notes off again', await page.evaluate(() => !window.__game.notes && !document.getElementById('notes-btn').classList.contains('on')));
    // a second cat in the same row: both red, the whole row tinted; a third clash does not end anything
    await tapCell(page, 0, (sol11[0] + 3) % 7, true); await sleep(150);
    const rowClash = await page.evaluate(() => ({ cats: window.__game.catCount, red: document.querySelectorAll('.cell.conflict').length, clash: document.querySelectorAll('.cell.clash').length, state: window.__game.state, msg: document.getElementById('msg').textContent }));
    check('two cats in one row: both framed red, the rest of the row tinted (plus the color area when they share one), play goes on', rowClash.cats === 2 && rowClash.red === 2 && rowClash.clash >= 5 && rowClash.state === 1, JSON.stringify(rowClash));
    await shot(page, 'phone-390x844-row-clash');
    wc = await wrongCell(page); await tapCell(page, wc[0], wc[1], true); await sleep(120);
    wc = await wrongCell(page); await tapCell(page, wc[0], wc[1], true); await sleep(120);
    check('more clashes: still playing (no lives, nothing refused)', await page.evaluate(() => window.__game.state === 1 && window.__game.catCount === 4 && window.__game.conflicts >= 2));
    // Clear empties the board in one step; Undo brings everything back
    await page.tap('#clear-btn'); await sleep(150);
    const cl = await page.evaluate(() => ({ cats: window.__game.catCount, red: document.querySelectorAll('.cell.conflict, .cell.clash').length, hist: window.__game.history, clearOff: document.getElementById('clear-btn').disabled }));
    check('Clear: board empty, red gone, Clear disabled, Undo available', cl.cats === 0 && cl.red === 0 && cl.hist > 0 && cl.clearOff, JSON.stringify(cl));
    await page.tap('#undo-btn'); await sleep(150);
    check('Undo after Clear restores all four cats', await page.evaluate(() => window.__game.catCount === 4));
    await page.tap('#clear-btn'); await sleep(100);
    await tapCell(page, 0, sol11[0], true); await sleep(150);
    // Auto-X (pause menu): marks appear for the cat on the board, and vanish when switched off
    await page.evaluate(() => window.__game.toggleAutoX()); await sleep(100);
    const ax = await page.evaluate(() => ({ on: window.__game.autox, saved: window.__game.store.settings.autox, marks: document.querySelectorAll('.cell svg.ax').length, label: document.getElementById('pause-autox-btn').textContent }));
    check('Auto-X on: the ruled-out cells of the placed cat get faint marks, setting saved, pause button says On', ax.on && ax.saved && ax.marks >= 12 && /On/.test(ax.label), JSON.stringify(ax));
    await shot(page, 'phone-390x844-autox');
    await page.evaluate(() => window.__game.toggleAutoX()); await sleep(100);
    check('Auto-X off: marks vanish', await page.evaluate(() => !window.__game.autox && document.querySelectorAll('.cell svg.ax').length === 0));
    await shot(page, 'phone-390x844-play-7x7');
    // keyboard P pause / resume, timer frozen
    await page.keyboard.press('KeyP'); await sleep(150);
    const paused = await page.evaluate(() => ({ p: window.__game.userPaused, vis: !document.getElementById('pause-panel').classList.contains('hidden'), frozen: window.__game.frozen }));
    check('P pauses and shows the pause panel', paused.p && paused.vis && paused.frozen, JSON.stringify(paused));
    const e1 = await page.evaluate(() => window.__game.elapsed); await sleep(700); const e2 = await page.evaluate(() => window.__game.elapsed);
    check('timer frozen while paused', Math.abs(e1 - e2) < 0.01, `${e1.toFixed(2)} → ${e2.toFixed(2)}`);
    await shot(page, 'phone-390x844-paused');
    await page.tap('#resume-btn'); await sleep(100);
    check('Resume continues the level', await page.evaluate(() => window.__game.state === 1 && !window.__game.userPaused));
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); }); await sleep(250);
    const hid = await page.evaluate(() => ({ hidden: window.__game.reasons.hidden, audible: window.__game.audible, ctx: window.__game.ctxState, frozen: window.__game.frozen }));
    check('hidden page: silent and frozen', hid.hidden && !hid.audible && hid.frozen && hid.ctx === 'suspended', JSON.stringify(hid));
    await page.evaluate(() => { Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true }); document.dispatchEvent(new Event('visibilitychange')); }); await sleep(200);
    const back = await page.evaluate(() => ({ hidden: window.__game.reasons.hidden, audible: window.__game.audible, paused: window.__game.userPaused }));
    check('back from hidden: sound allowed again, waits in pause panel', !back.hidden && back.audible && back.paused, JSON.stringify(back));
    await page.tap('#resume-btn');
    await page.evaluate(() => window.__game.adStateChanged('opened'));
    const ad = await page.evaluate(() => ({ frozen: window.__game.frozen, audible: window.__game.audible }));
    check('interstitial opened: frozen and silent', ad.frozen && !ad.audible, JSON.stringify(ad));
    await page.evaluate(() => window.__game.adStateChanged('closed'));
    check('interstitial closed: running again', await page.evaluate(() => !window.__game.frozen && window.__game.audible));
    // rewarded hint: closed early → nothing; rewarded → one correct cat appears (and a clashing cat is picked up)
    await tapCell(page, 1, sol11[1] === sol11[0] ? 0 : sol11[0], true); await sleep(120);   // a cat in column of cat 0 → red
    check('setup: a clashing cat is on the board before the hint', await page.evaluate(() => window.__game.conflicts === 2));
    await page.tap('#hint-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('closed'); }); await sleep(1800);
    check('hint ad closed early: no cat placed, hint still available', await page.evaluate(() => window.__game.catCount === 2 && !window.__game.hintUsed && !document.getElementById('hint-btn').disabled));
    await page.tap('#hint-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); });
    const underAd = await page.evaluate(() => ({ earned: window.__game.rewardEarned, frozen: window.__game.frozen, cats: window.__game.catCount }));
    check('reward earned but the game waits until the ad closes', underAd.earned === 'hint' && underAd.frozen && underAd.cats === 2, JSON.stringify(underAd));
    await page.evaluate(() => window.__game.onRewardedState('closed')); await sleep(300);
    const hinted = await page.evaluate(() => ({ cats: window.__game.catCount, used: window.__game.hintUsed, off: document.getElementById('hint-btn').disabled, conflicts: window.__game.conflicts, onSolution: window.__game.placed.every(([r, c]) => window.__game.solution[r] === c), frozen: window.__game.frozen }));
    check('hint rewarded: the clashing cat is picked up, the right cat appears, button used up, game running', hinted.cats === 2 && hinted.used && hinted.off && hinted.conflicts === 0 && hinted.onSolution && !hinted.frozen, JSON.stringify(hinted));
    await shot(page, 'phone-390x844-hint');
    // quit to title, mute, name
    await page.evaluate(() => window.__game.quitToTitle()); await sleep(100);
    check('title shows progress: Play · Level 11', await page.evaluate(() => /Level 11/.test(document.getElementById('play-main').textContent) && /10 of 500/.test(document.getElementById('levels-sub').textContent)));
    // daily puzzle
    await page.tap('#daily-btn'); await sleep(300);
    const d0 = await page.evaluate(() => ({ state: window.__game.state, mode: window.__game.mode, N: window.__game.N, practice: window.__game.practice, label: document.getElementById('mode-main').textContent }));
    check('Today\'s puzzle starts (7×7, not practice)', d0.state === 1 && d0.mode === 'daily' && d0.N === 7 && !d0.practice, JSON.stringify(d0));
    await solveBoard(page, true, 40); await sleep(1500);
    const dw = await page.evaluate(() => ({ state: window.__game.state, won: window.__game.won, solved: window.__game.store.progress.daily.solved, ranks: window.__game.store.progress.daily.ranks.length, day: window.__game.store.progress.daily.day, rankVis: !document.getElementById('rank-board').classList.contains('hidden'), share: !document.getElementById('share-btn').classList.contains('hidden') }));
    check('daily solved by taps: time recorded, rank list and share shown', dw.state === 2 && dw.won && dw.solved > 0 && dw.ranks === 1 && dw.day.length === 8 && dw.rankVis && dw.share, JSON.stringify(dw));
    await page.fill('#name-input', 'Robo'); await sleep(100);
    await page.tap('#share-btn'); await sleep(300);
    const sh = await page.evaluate(() => document.getElementById('share-note').textContent);
    check('Share my time copies or shares the text', /Copied|Shared|Kitty/.test(sh), sh.slice(0, 60));
    await shot(page, 'phone-390x844-daily-solved');
    await page.tap('#over-home-btn'); await sleep(200);
    check('Title button leaves the results panel', await page.evaluate(() => window.__game.state === 0 && !document.getElementById('title-panel').classList.contains('hidden')));
    await page.tap('#title-mute-btn'); await sleep(600);
    const muted = await page.evaluate(() => ({ user: window.__game.reasons.user, attr: document.getElementById('mute-btn').getAttribute('data-muted'), audible: window.__game.audible }));
    check('mute button silences and shows the off icon', muted.user && muted.attr === '1' && !muted.audible, JSON.stringify(muted));
    await sleep(900);
    // reload → progress, name, mute restored from Bridge storage
    await page.reload({ waitUntil: 'load' });
    await page.waitForFunction(() => window.__game && window.__game.state !== undefined);
    const re = await page.evaluate(() => ({ cleared: window.__game.store.progress.cleared, name: window.__game.store.progress.name, muted: window.__game.store.settings.muted, attr: document.getElementById('mute-btn').getAttribute('data-muted'), audible: window.__game.audible, solved: window.__game.store.progress.daily.solved, tut: window.__game.store.progress.tut, sub: document.getElementById('daily-sub').textContent, autox: window.__game.store.settings.autox }));
    check('reload restores levels, name, daily time, tutorial flag, mute, Auto-X (Bridge storage)', re.cleared === 10 && re.name === 'Robo' && re.muted === true && re.attr === '1' && !re.audible && re.solved > 0 && re.tut === 1 && /Solved today/.test(re.sub) && re.autox === false, JSON.stringify(re));
    await page.tap('#daily-btn'); await sleep(300);
    check('second daily run is practice (first time is the record)', await page.evaluate(() => window.__game.practice && /practice/.test(document.getElementById('mode-sub').textContent)));
    await page.evaluate(() => window.__game.quitToTitle());
    // levels screen
    await page.tap('#levels-btn'); await sleep(200);
    const lv = await page.evaluate(() => { const g = document.getElementById('levels-grid'), n = document.querySelector('.lvl.next'), gr = g.getBoundingClientRect(), nr = n.getBoundingClientRect(); return { state: window.__game.state, done: document.querySelectorAll('.lvl.done').length, next: n.dataset.level, locked: document.querySelectorAll('.lvl.locked').length, total: document.querySelectorAll('.lvl').length, scrolls: g.scrollHeight > g.clientHeight + 100, nextVisible: nr.top >= gr.top && nr.bottom <= gr.bottom, heads: document.querySelectorAll('.lvl-head').length }; });
    check('levels: all 500 in one scrolling list, 10 done, 11 next and in view, rest locked, size headers', lv.state === 3 && lv.total === 500 && lv.done === 10 && lv.next === '11' && lv.locked === 489 && lv.scrolls && lv.nextVisible && lv.heads === 5, JSON.stringify(lv));
    await shot(page, 'phone-390x844-levels');
    await page.evaluate(() => { const g = document.getElementById('levels-grid'); g.scrollTop = g.scrollHeight; }); await sleep(150);
    check('scrolling to the bottom shows level 500', await page.evaluate(() => { const g = document.getElementById('levels-grid').getBoundingClientRect(), r = document.querySelector('.lvl[data-level="500"]').getBoundingClientRect(); return r.top >= g.top - 1 && r.bottom <= g.bottom + 1 && document.getElementById('levels-panel').getBoundingClientRect().bottom <= innerHeight; }));
    await shot(page, 'phone-390x844-levels-bottom');
    await page.evaluate(() => { document.getElementById('levels-grid').scrollTop = 0; }); await sleep(150);
    await page.tap('.lvl[data-level="3"]'); await sleep(300);
    check('a cleared level can be replayed from the grid', await page.evaluate(() => window.__game.state === 1 && window.__game.level === 3 && window.__game.N === 5));
    // legal-but-wrong cats (off the hidden solution, breaking no rule) are never flagged: no red, no text, no change
    await page.evaluate(() => { window.__game.store.progress.tut = 1; window.__game.startLevel(8); });
    await sleep(200);
    const legal = await page.evaluate(() => {
      const g = window.__game, n = g.N; let placedWrong = 0;
      for (let r = 0; r < n && placedWrong < 3; r++) for (let c = 0; c < n && placedWrong < 3; c++) {
        if (g.cell[r][c] !== 0 || g.solution[r] === c) continue;
        if (g.conflictsWith(r, c).length) continue;
        g.tap(r, c); placedWrong++;
      }
      return { placedWrong, cats: g.catCount, conflicts: g.conflicts, red: document.querySelectorAll('.cell.conflict, .cell.clash').length, faces: [...document.querySelectorAll('.cell svg.cat use')].map(u => u.getAttribute('href')), footText: document.getElementById('foot').innerText.replace(/\s+/g, ' ').trim(), msg: document.getElementById('msg').textContent, state: g.state };
    });
    check('cats off the hidden solution that break no rule are never called wrong: no red, no grumpy face, no text (player feedback 11-08)', legal.placedWrong === 3 && legal.cats === 3 && legal.conflicts === 0 && legal.red === 0 && legal.faces.every(h => h === '#s-h-cat') && legal.footText === 'Undo Notes Hint Clear' && legal.msg === '' && legal.state === 1, JSON.stringify(legal));
    await shot(page, 'phone-390x844-legal-wrong');
    await context.close();
  }

  // ── 2. desktop: mouse + keyboard, Esc unused ──
  {
    const { context, page } = await newPage(browser, 1280, 720, base + '#debug');
    check('desktop detected', await page.evaluate(() => window.__game.isDesktop));
    await page.keyboard.press('Space'); await sleep(300);
    check('Space starts the next level', await page.evaluate(() => window.__game.state === 1));
    await page.evaluate(() => { window.__game.store.progress.tut = 1; window.__game.startLevel(2); });
    await sleep(100);
    const sol = await page.evaluate(() => window.__game.solution.slice());
    await tapCell(page, 0, sol[0], false); await sleep(100);
    check('mouse click places a cat', await page.evaluate(() => window.__game.catCount === 1));
    await page.keyboard.press('ArrowDown');   // first press shows the cursor at the top-left cell
    await page.keyboard.press('ArrowDown'); await page.keyboard.press('ArrowDown');
    for (let i = 0; i < sol[2]; i++) await page.keyboard.press('ArrowRight');
    await page.keyboard.press('Space'); await sleep(100);
    check('arrow keys + Space place a cat at the cursor', await page.evaluate(() => window.__game.cell[2][window.__game.solution[2]] === 2), `row 2 col ${sol[2]}`);
    await page.keyboard.press('Escape'); await sleep(100);
    check('Esc does nothing (1.5.2)', await page.evaluate(() => window.__game.state === 1 && !window.__game.userPaused));
    await page.keyboard.press('KeyZ'); await sleep(80);
    check('Z undoes the last cat', await page.evaluate(() => window.__game.catCount === 1));
    await page.keyboard.press('KeyX'); await sleep(50);
    await page.keyboard.press('Space'); await sleep(80);
    check('X toggles Notes: Space at the cursor now leaves an X mark', await page.evaluate(() => window.__game.notes && window.__game.cell[2][window.__game.solution[2]] === 1));
    await page.keyboard.press('KeyX'); await page.keyboard.press('Space'); await sleep(80);
    check('Notes off: Space replaces the X with a cat', await page.evaluate(() => !window.__game.notes && window.__game.cell[2][window.__game.solution[2]] === 2));
    await page.evaluate(() => window.__game.toggleSkin()); await sleep(50);
    check('Cat switch: classic orange cat on the board and the title, saved', await page.evaluate(() => window.__game.skin === 'classic' && window.__game.store.settings.skin === 'classic' && document.querySelector('.cell svg.cat use').getAttribute('href') === '#s-cat' && !document.querySelector('#title-logo .eyes') && /Classic/.test(document.getElementById('skin-pill').textContent)));
    await shot(page, 'iframe-1280x720-classic-cat');
    await page.evaluate(() => window.__game.toggleSkin()); await sleep(50);
    check('Cat switch back to Horangi restores the drawing and the blink', await page.evaluate(() => window.__game.skin === 'horangi' && document.querySelector('.cell svg.cat use').getAttribute('href') === '#s-h-cat' && !!document.querySelector('#title-logo .eyes')));
    await page.evaluate(() => window.__game.toggleFx());
    check('Effects toggle switches to Lively and saves it', await page.evaluate(() => !window.__game.calm && window.__game.store.settings.fx === 'lively' && !document.body.classList.contains('calm')));
    await page.evaluate(() => { if (!window.__game.autox) window.__game.toggleAutoX(); });
    const solL = await page.evaluate(() => window.__game.solution.slice());
    await tapCell(page, 1, solL[1], false); await sleep(60);
    check('lively + Auto-X: pink wave animation runs over the ruled-out cells', await page.evaluate(() => { const w = document.querySelector('.cell.wave .fx'); return w && getComputedStyle(w).animationName === 'wave'; }));
    await page.evaluate(() => window.__game.toggleAutoX());
    await solveBoard(page, false, 30); await sleep(350);
    const lively = await page.evaluate(() => ({ fx: window.__game.fxCount, canvas: !document.getElementById('fx').classList.contains('hidden'), won: document.getElementById('board').classList.contains('won') }));
    check('lively: win fires the confetti burst', lively.fx > 40 && lively.canvas && lively.won, JSON.stringify(lively));
    await shot(page, 'iframe-1280x720-win-lively');
    await sleep(1300);
    await page.evaluate(() => window.__game.toggleFx());
    await shot(page, 'iframe-1280x720-play');
    await context.close();
  }

  // ── 3. size matrix: play state (7×7 with a few cats), layout sanity; square + landscape results panel ──
  for (const [name, w, h] of SIZES) {
    const { context, page } = await newPage(browser, w, h, base + '#debug', { touch: w < 700 });
    await page.evaluate(() => { window.__game.store.progress.tut = 1; window.__game.startLevel(11); const s = window.__game.solution; [0, 3].forEach((r) => { window.__game.tap(r, s[r]); }); });
    await sleep(250);
    const lay = await page.evaluate(() => {
      const g = window.__game, W = innerWidth, H = innerHeight;
      const b = g.boardRect(), hud = g.hudRect(), foot = g.footRect();
      const ov = (a, c) => !(a.right <= c.left + 1 || c.right <= a.left + 1 || a.bottom <= c.top + 1 || c.bottom <= a.top + 1);
      const inside = (r) => r.left >= -1 && r.top >= -1 && r.right <= W + 1 && r.bottom <= H + 1;
      const cellPx = g.cellRect(0, 0).w;
      return { W, H, land: document.body.classList.contains('land'), boardW: Math.round(b.w), cellPx: Math.round(cellPx), hudOverBoard: ov(hud, b), footOverBoard: ov(foot, b), inside: inside(b) && inside(hud) && inside(foot), fill: b.w / Math.min(W, H) };
    });
    check(`layout ${name} (${lay.land ? 'landscape' : 'portrait'}): board ${lay.boardW}px, cells ${lay.cellPx}px, no overlap, on screen, fills ≥ 55% of the short side`, !lay.hudOverBoard && !lay.footOverBoard && lay.inside && lay.cellPx >= 28 && lay.fill >= 0.55, JSON.stringify({ fill: lay.fill.toFixed(2), hudOverBoard: lay.hudOverBoard, footOverBoard: lay.footOverBoard, inside: lay.inside }));
    await shot(page, name + '-play');
    if (name === 'square-640x640' || name === 'land-844x390' || name === 'phone-360x640') {
      await page.evaluate(() => { const g = window.__game, s = g.solution; for (let r = 0; r < g.N; r++) if (g.cell[r][s[r]] !== 2) g.tap(r, s[r]); }); await sleep(900);
      const panel = await page.evaluate(() => { const r = document.getElementById('over-panel').getBoundingClientRect(); return { fits: r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth, h: Math.round(r.height), state: window.__game.state }; });
      check(`results panel fits at ${name}`, panel.fits && panel.state === 2, `panel ${panel.h}px of ${h}`);
      await shot(page, name + '-over');
    }
    if (name === 'land-844x390' || name === 'square-640x640') {
      await page.evaluate(() => window.__game.showLevels()); await sleep(100);
      const grid = await page.evaluate(() => { const g = document.getElementById('levels-grid'), r = g.getBoundingClientRect(); const c = document.querySelector('.lvl').getBoundingClientRect(); return { fits: r.bottom <= innerHeight && r.top >= 0, scrolls: g.scrollHeight > g.clientHeight, cell: Math.round(c.width) }; });
      check(`levels list fits and scrolls at ${name}`, grid.fits && grid.scrolls && grid.cell >= 36, JSON.stringify(grid));
      await shot(page, name + '-levels');
    }
    await context.close();
  }

  // ── 4. covers (still frame) ──
  const coverDir = path.join(ROOT, 'covers');
  fs.mkdirSync(coverDir, { recursive: true });
  for (const [name, w, h] of [['cover-800x800', 800, 800], ['cover-1080x1920', 1080, 1920], ['cover-1920x1080', 1920, 1080]]) {
    const { context, page } = await newPage(browser, w, h, base + '#debug&cover');
    await sleep(300);
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
  console.log(`\n${report.passed} passed, ${report.failed} failed, ${report.taps} real taps → ${path.join(OUT, 'report.json')}`);
  process.exit(report.failed ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(2); });
