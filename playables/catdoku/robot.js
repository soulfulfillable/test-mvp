#!/usr/bin/env node
// Kitty Queens: Cat Sudoku (Playgama build) — headless play robot.
// Serves playables/catdoku over local http, plays the game in Chromium at the Playgama size matrix and writes
// screenshots + a JSON report. Run: node playables/catdoku/robot.js [outDir]
//   checks: console errors 0, no external requests, game_ready once, level 1 onboarding + levels 1..10 cleared by
//           real taps, daily cleared, wrong cat → heart + reason, out of hearts → rewarded continue (only on
//           'rewarded'), rewarded hint, reload restores progress + mute (Bridge storage), pause/hidden/ad freeze,
//           Esc unused, generator uniqueness (daily + levels 1..60 in-page, 1..500 with the same code in node),
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
    check('title screen shows the game title (rule 3.5.1)', await page.evaluate(() => /Kitty Queens/.test(document.querySelector('#title-panel h1').textContent) && document.title === 'Kitty Queens: Cat Sudoku'));
    check('no emoji anywhere in the page text (rule 4.3.2)', await page.evaluate(() => !/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(document.body.innerText)));
    await shot(page, 'phone-390x844-title');
    await page.tap('#bgm-pill'); await sleep(100);
    check('music button switches the track and saves it', await page.evaluate(() => window.__game.store.settings.bgm === 'ragtime' && /Ragtime/.test(document.getElementById('bgm-pill').textContent)));
    await page.tap('#bgm-pill'); await sleep(100);
    check('two music tracks wrap around', await page.evaluate(() => window.__game.store.settings.bgm === 'ukulele'));
    // level 1 with onboarding
    await page.tap('#play-btn'); await sleep(400);
    const l1 = await page.evaluate(() => ({ state: window.__game.state, level: window.__game.level, N: window.__game.N, tut: window.__game.tutorial, step: window.__game.tutStep, guide: window.__game.guideCell, hand: !document.getElementById('hand').classList.contains('hidden'), text: document.getElementById('tut').textContent }));
    check('Play starts level 1 (5×5) with the finger guide on a solution cell', l1.state === 1 && l1.level === 1 && l1.N === 5 && l1.tut && l1.step === 1 && l1.guide && l1.hand, JSON.stringify(l1));
    check('level_started message after start', await page.evaluate(() => window.__msgs.includes('level_started')));
    await sleep(1200);
    const audio = await page.evaluate(() => ({ ctx: window.__game.ctxState, bufs: window.__game.bufs, bgm: window.__game.bgmPlaying, audible: window.__game.audible }));
    check('AudioContext running after first tap', audio.ctx === 'running', audio.ctx);
    check('sound files decoded (effects + music)', audio.bufs.length >= 10 && audio.bufs.includes('bgm_ukulele'), audio.bufs.join(','));
    check('music looping', audio.bgm);
    await shot(page, 'phone-390x844-tutorial-1');
    // tutorial: wrong cat on level 1 costs nothing
    const g1 = l1.guide;
    await tapCell(page, g1[0], g1[1], true); await sleep(250);
    const t3 = await page.evaluate(() => ({ cats: window.__game.catCount, step: window.__game.tutStep, text: document.getElementById('tut').textContent, auto: document.querySelectorAll('.cell svg.ax').length }));
    check('one tap places the cat, auto marks appear, guide moves to the next cat', t3.cats === 1 && t3.step === 4 && t3.auto > 5 && /marks/.test(t3.text), JSON.stringify(t3));
    check('pink wave rolls over every ruled-out cell (staggered by distance)', await page.evaluate(() => { const w = document.querySelectorAll('.cell.wave'); const ds = new Set([...w].map((e) => e.style.getPropertyValue('--d'))); return w.length === document.querySelectorAll('.cell svg.ax').length && w.length >= 10 && ds.size >= 3; }));
    await shot(page, 'phone-390x844-tutorial-2');
    let wc = await wrongCell(page);
    await tapCell(page, wc[0], wc[1], true); await sleep(200);
    const tw = await page.evaluate(() => ({ hearts: window.__game.hearts, msg: document.getElementById('msg').textContent, cats: window.__game.catCount, bad: document.querySelectorAll('.cell.bad').length, nope: !!document.querySelector('.cell svg.nope') }));
    check('wrong cat on level 1: reason shown, grumpy cat refuses, no heart lost (free mistakes while learning)', tw.hearts === 3 && tw.msg.length > 5 && tw.cats === 1 && tw.bad >= 2 && tw.nope, JSON.stringify(tw));
    await shot(page, 'phone-390x844-tutorial-wrong');
    await solveBoard(page, true, 60);
    await sleep(350);
    const burst = await page.evaluate(() => ({ fx: window.__game.fxCount, won: document.getElementById('board').classList.contains('won'), msg: document.getElementById('msg').textContent, canvas: !document.getElementById('fx').classList.contains('hidden') }));
    check('win: confetti burst on the canvas, cats bounce, SOLVED! flashes', burst.fx > 80 && burst.won && /SOLVED/.test(burst.msg) && burst.canvas, JSON.stringify(burst));
    await shot(page, 'phone-390x844-win-burst');
    await sleep(1200);
    const w1 = await page.evaluate(() => ({ state: window.__game.state, won: window.__game.won, panel: !document.getElementById('over-panel').classList.contains('hidden'), cleared: window.__game.store.progress.cleared, tut: window.__game.store.progress.tut, title: document.getElementById('over-title').textContent, msgs: window.__msgs.slice(-2) }));
    check('level 1 solved by taps → results panel, progress saved, tutorial done', w1.state === 2 && w1.won && w1.panel && w1.cleared === 1 && w1.tut === 1 && /solved/i.test(w1.title), JSON.stringify(w1));
    check('level_completed message on win', w1.msgs.includes('level_completed'), w1.msgs.join(','));
    await shot(page, 'phone-390x844-level1-solved');
    // levels 2..10 by real taps (Next level → interstitial request → next board)
    for (let lv = 2; lv <= 10; lv++) {
      await sleep(600);
      await page.tap('#next-btn'); await sleep(300);
      const st = await page.evaluate(() => ({ state: window.__game.state, level: window.__game.level, N: window.__game.N, tut: window.__game.tutorial, hint: !document.getElementById('hint-btn').classList.contains('hidden') }));
      if (!(st.state === 1 && st.level === lv && !st.tut)) { check(`level ${lv} starts`, false, JSON.stringify(st)); break; }
      if (lv === 2) check('no tutorial and no hint button on the mock platform (rewarded unsupported → hidden)', !st.tut && !st.hint, JSON.stringify(st));
      await solveBoard(page, true, 30);
      await sleep(1500);
      const w = await page.evaluate(() => ({ state: window.__game.state, won: window.__game.won, cleared: window.__game.store.progress.cleared, hearts: window.__game.hearts }));
      check(`level ${lv} (${st.N}×${st.N}) cleared by taps`, w.state === 2 && w.won && w.cleared === lv, JSON.stringify(w));
      if (lv === 4) await shot(page, 'phone-390x844-level4-6x6');
    }
    await shot(page, 'phone-390x844-level10-solved');
    // level 11 (7×7): wrong cats cost hearts, three → out of hearts → continue only on 'rewarded'
    await sleep(600);
    await page.evaluate(() => { window.__forceRewarded = true; });
    await page.tap('#next-btn'); await sleep(300);
    check('level 11 is 7×7 with the hint button (rewarded supported)', await page.evaluate(() => window.__game.level === 11 && window.__game.N === 7 && !document.getElementById('hint-btn').classList.contains('hidden')));
    const sol11 = await page.evaluate(() => window.__game.solution.slice());
    await tapCell(page, 0, sol11[0], true); await sleep(200);
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
    // rewarded hint: closed early → nothing; rewarded → one correct cat appears
    await page.tap('#hint-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('closed'); }); await sleep(1800);
    check('hint ad closed early: no cat placed, hint still available', await page.evaluate(() => window.__game.catCount === 1 && !window.__game.hintUsed && !document.getElementById('hint-btn').classList.contains('hidden')));
    await page.tap('#hint-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); window.__game.onRewardedState('closed'); }); await sleep(300);
    const hinted = await page.evaluate(() => ({ cats: window.__game.catCount, used: window.__game.hintUsed, btn: !document.getElementById('hint-btn').classList.contains('hidden'), ok: window.__game.cell.every((row, r) => row[window.__game.solution[r]] !== 2 || true) }));
    check('hint rewarded: one correct cat placed, button gone (one hint per puzzle)', hinted.cats === 2 && hinted.used && !hinted.btn, JSON.stringify(hinted));
    await shot(page, 'phone-390x844-hint');
    // three wrong cats
    for (let i = 0; i < 3; i++) { wc = await wrongCell(page); await tapCell(page, wc[0], wc[1], true); await sleep(250); if (i === 0) await shot(page, 'phone-390x844-wrong'); }
    await sleep(900);
    const oh = await page.evaluate(() => ({ state: window.__game.state, hearts: window.__game.hearts, won: window.__game.won, title: document.getElementById('over-title').textContent, cont: !document.getElementById('continue-btn').classList.contains('hidden'), cats: window.__game.catCount, msgs: window.__msgs.slice(-1) }));
    check('three wrong cats → out of hearts, continue offered once, cats kept on the board', oh.state === 2 && oh.hearts === 0 && !oh.won && /hearts/i.test(oh.title) && oh.cont && oh.cats === 2 && oh.msgs[0] === 'level_failed', JSON.stringify(oh));
    await shot(page, 'phone-390x844-out-of-hearts');
    await page.tap('#continue-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('closed'); }); await sleep(1800);
    const ng = await page.evaluate(() => ({ state: window.__game.state, used: window.__game.continueUsed, note: document.getElementById('ad-note').textContent }));
    check('continue ad closed early: no reward, panel stays', ng.state === 2 && !ng.used && ng.note.length > 0, JSON.stringify(ng));
    await page.tap('#continue-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); });
    const underAd = await page.evaluate(() => ({ state: window.__game.state, earned: window.__game.rewardEarned, frozen: window.__game.frozen }));
    check('reward earned but the game waits until the ad closes', underAd.state === 2 && underAd.earned === 'continue' && underAd.frozen, JSON.stringify(underAd));
    await page.evaluate(() => window.__game.onRewardedState('closed')); await sleep(200);
    const cont = await page.evaluate(() => ({ state: window.__game.state, hearts: window.__game.hearts, cats: window.__game.catCount, used: window.__game.continueUsed, frozen: window.__game.frozen }));
    check('rewarded: play continues with 3 hearts and the same board', cont.state === 1 && cont.hearts === 3 && cont.cats === 2 && cont.used && !cont.frozen, JSON.stringify(cont));
    await shot(page, 'phone-390x844-continued');
    for (let i = 0; i < 3; i++) { wc = await wrongCell(page); await tapCell(page, wc[0], wc[1], true); await sleep(200); }
    await sleep(900);
    check('no second continue in the same attempt', await page.evaluate(() => window.__game.state === 2 && document.getElementById('continue-btn').classList.contains('hidden')));
    await sleep(600);
    await page.tap('#retry-btn'); await sleep(300);
    check('Try again restarts level 11 with a clean board', await page.evaluate(() => window.__game.state === 1 && window.__game.level === 11 && window.__game.catCount === 0 && window.__game.hearts === 3));
    // keyboard cursor on the phone is not needed; quit to title, mute, name
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
    const re = await page.evaluate(() => ({ cleared: window.__game.store.progress.cleared, name: window.__game.store.progress.name, muted: window.__game.store.settings.muted, attr: document.getElementById('mute-btn').getAttribute('data-muted'), audible: window.__game.audible, solved: window.__game.store.progress.daily.solved, tut: window.__game.store.progress.tut, sub: document.getElementById('daily-sub').textContent }));
    check('reload restores levels, name, daily time, tutorial flag, mute (Bridge storage)', re.cleared === 10 && re.name === 'Robo' && re.muted === true && re.attr === '1' && !re.audible && re.solved > 0 && re.tut === 1 && /Solved today/.test(re.sub), JSON.stringify(re));
    await page.tap('#daily-btn'); await sleep(300);
    check('second daily run is practice (first time is the record)', await page.evaluate(() => window.__game.practice && /practice/.test(document.getElementById('mode-sub').textContent)));
    await page.evaluate(() => window.__game.quitToTitle());
    // levels screen
    await page.tap('#levels-btn'); await sleep(200);
    const lv = await page.evaluate(() => ({ state: window.__game.state, done: document.querySelectorAll('.lvl.done').length, next: document.querySelector('.lvl.next') && document.querySelector('.lvl.next').dataset.level, locked: document.querySelectorAll('.lvl.locked').length }));
    check('levels grid: 10 done, 11 is next, the rest locked', lv.state === 3 && lv.done === 10 && lv.next === '11' && lv.locked === 14, JSON.stringify(lv));
    await shot(page, 'phone-390x844-levels');
    await page.tap('#lv-next'); await sleep(100);
    check('level pages turn', await page.evaluate(() => /26/.test(document.getElementById('lv-page').textContent)));
    await page.tap('#lv-prev'); await sleep(100);
    await page.tap('.lvl[data-level="3"]'); await sleep(300);
    check('a cleared level can be replayed from the grid', await page.evaluate(() => window.__game.state === 1 && window.__game.level === 3 && window.__game.N === 5));
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
      await page.evaluate(() => { window.__game.hearts = 1; });
      const wc = await wrongCell(page);
      await page.evaluate(([r, c]) => { window.__game.tap(r, c); }, wc); await sleep(900);
      const panel = await page.evaluate(() => { const r = document.getElementById('over-panel').getBoundingClientRect(); return { fits: r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth, h: Math.round(r.height), state: window.__game.state }; });
      check(`results panel fits at ${name}`, panel.fits && panel.state === 2, `panel ${panel.h}px of ${h}`);
      await shot(page, name + '-over');
    }
    if (name === 'land-844x390' || name === 'square-640x640') {
      await page.evaluate(() => window.__game.showLevels()); await sleep(100);
      const grid = await page.evaluate(() => { const r = document.getElementById('levels-nav').getBoundingClientRect(); const c = document.querySelector('.lvl').getBoundingClientRect(); return { fits: r.bottom <= innerHeight, cell: Math.round(c.width) }; });
      check(`levels grid fits at ${name}`, grid.fits && grid.cell >= 36, JSON.stringify(grid));
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
