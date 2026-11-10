#!/usr/bin/env node
// Kitty Sudoku (Playgama build) — headless play robot.
// Serves playables/sudoku over local http, plays the game in Chromium at the Playgama size matrix and writes
// screenshots + a JSON report. Run: node playables/sudoku/robot.js [outDir]
//   checks: generator (every level 1..300 + 400 dailies unique and graded, node = page), console errors 0,
//           no external requests, game_ready once, 4×4 / 6×6 / 9×9 three boards each solved by real taps
//           (cell tap + number tap), notes (+ auto-clear in peers), undo, erase, highlights, remaining counts,
//           wrong number → mistake + red, 3 mistakes → continue only on 'rewarded' and once, rewarded hint,
//           daily + challenge link (friend's time on screen and in the list), reload restores progress + mute,
//           pause/hidden/ad freeze, keyboard (digits/arrows/Backspace/N/Z), Esc unused, 14 sizes, covers.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const Core = require('./sudoku-core.js');

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

async function tapCell(page, i, touch) {
  const p = await page.evaluate((i) => window.__game.cellRect(i), i);
  if (touch) await page.touchscreen.tap(p.x, p.y); else await page.mouse.click(p.x, p.y);
  report.taps++;
}
async function tapNum(page, v, touch) {
  const p = await page.evaluate((v) => window.__game.numRect(v), v);
  if (touch) await page.touchscreen.tap(p.x, p.y); else await page.mouse.click(p.x, p.y);
  report.taps++;
}
// solve the whole board the way a player does: tap the cell, tap the number
async function solveBoard(page, touch, gapMs = 25) {
  const { sol, given, cells } = await page.evaluate(() => ({ sol: window.__game.solution.slice(), given: window.__game.given.slice(), cells: window.__game.cells.slice() }));
  for (let i = 0; i < sol.length; i++) {
    if (given[i] || cells[i] === sol[i]) continue;
    const st = await page.evaluate(() => window.__game.state);
    if (st !== 1) break;
    await tapCell(page, i, touch); await tapNum(page, sol[i], touch); await sleep(gapMs);
  }
}
async function openCell(page) { return page.evaluate(() => { const g = window.__game; for (let i = 0; i < g.N * g.N; i++) if (!g.given[i] && !g.cells[i]) return i; return -1; }); }
// a value that visibly clashes with a number already in the cell's row, column or box
async function wrongValue(page, i) { return page.evaluate((i) => { const g = window.__game, P = g.core.peers(g.N)[i]; for (const p of P) if (g.cells[p]) return g.cells[p]; return 1; }, i); }
// a value that breaks no visible rule but is not the answer (must NOT count as a mistake)
async function legalWrong(page) { return page.evaluate(() => { const g = window.__game, n = g.N, P = g.core.peers(n); for (let i = 0; i < n * n; i++) { if (g.given[i] || g.cells[i]) continue; for (let v = 1; v <= n; v++) { if (v === g.solution[i]) continue; if (P[i].every((p) => g.cells[p] !== v)) return [i, v]; } } return null; }); }
async function state(page) { return page.evaluate(() => { const g = window.__game; return { state: g.state, level: g.level, N: g.N, mistakes: g.mistakes, won: g.won, sel: g.sel, undo: g.undoLen, notesMode: g.notesMode, cleared: g.store.progress.cleared }; }); }

(async () => {
  // ── 0. generator in node: every level + 400 dailies unique, difficulty as labeled ──
  {
    const t0 = Date.now(); const bad = [], grades = {};
    for (let lv = 1; lv <= Core.MAX_LEVEL; lv++) {
      const p = Core.genLevel(lv);
      if (Core.countSolutions(p.givens, p.n, 2) !== 1) bad.push('u' + lv);
      const ok = p.difficulty === 'easy' ? p.grade === 'easy' : p.difficulty === 'medium' ? p.grade !== 'hard' : true;
      if (!ok) bad.push('g' + lv);
      const k = p.n + '-' + p.difficulty; grades[k] = grades[k] || {}; grades[k][p.grade] = (grades[k][p.grade] || 0) + 1;
    }
    check('levels 1..300: unique solution, difficulty matches the label (node, same code as the game)', bad.length === 0, bad.length ? bad.slice(0, 5).join(',') : (Date.now() - t0) + 'ms ' + JSON.stringify(grades));
    const s = [1, 100, 101, 200, 201, 300].map((l) => { const p = Core.levelSpec(l); return l + ':' + p.n + p.difficulty[0]; });
    check('level ladder is 9×9 only: easy 1–100, medium 101–200, hard 201–300', [1, 50, 150, 300].every((l) => Core.levelSpec(l).n === 9) && Core.levelSpec(100).difficulty === 'easy' && Core.levelSpec(101).difficulty === 'medium' && Core.levelSpec(201).difficulty === 'hard', s.join(' '));
    const sbad = [];
    for (let i = 1; i <= Core.MAX_SMALL; i++) { const p = Core.genSmall(i); if (Core.countSolutions(p.givens, p.n, 2) !== 1) sbad.push(i); }
    check('small boards 1..25 (4×4 ×5, 6×6 ×20): unique solution', sbad.length === 0 && Core.smallSpec(1).n === 4 && Core.smallSpec(6).n === 6 && Core.smallSpec(25).difficulty === 'hard', sbad.join(','));
    const dbad = [];
    const d = new Date(Date.UTC(2026, 10, 1));
    for (let k = 0; k < 400; k++, d.setUTCDate(d.getUTCDate() + 1)) {
      const key = d.toISOString().slice(0, 10).replace(/-/g, '');
      const p = Core.genDaily(key);
      if (p.n !== 6 || Core.countSolutions(p.givens, 6, 2) !== 1) dbad.push(key);
    }
    check('dailies Nov 2026 → Dec 2027 (400 days): 6×6, unique solution', dbad.length === 0, dbad.slice(0, 5).join(','));
  }

  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/index.html`;
  const browser = await chromium.launch({ args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] });

  // ── 1. page generator = node generator ──
  {
    const { context, page } = await newPage(browser, 390, 844, base + '#debug', { touch: true });
    const inPage = await page.evaluate(() => [1, 150, 300].map((l) => window.__game.core.genLevel(l).givens.join('')).concat([window.__game.core.genDaily('20261108').givens.join(''), window.__game.core.genSmall(7).givens.join('')]));
    const inNode = [1, 150, 300].map((l) => Core.genLevel(l).givens.join('')).concat([Core.genDaily('20261108').givens.join(''), Core.genSmall(7).givens.join('')]);
    check('same seed = same board in the page and in node', JSON.stringify(inPage) === JSON.stringify(inNode));
    await context.close();
  }

  // ── 2. full session on a phone (touch) ──
  {
    const { context, page } = await newPage(browser, 390, 844, base + '#debug', { touch: true });
    check('loading screen hidden before game_ready', await page.evaluate(() => document.getElementById('loading').classList.contains('hidden')));
    check('bridge initialized (mock platform outside Playgama)', await page.evaluate(() => window.__game.bridgeReady && window.bridge.platform.id), await page.evaluate(() => window.bridge.platform.id));
    const msgs = await page.evaluate(() => window.__msgs.slice());
    check('game_ready sent exactly once', msgs.filter((m) => m === 'game_ready').length === 1, JSON.stringify(msgs));
    check('title screen shows the game title (rule 3.5.1)', await page.evaluate(() => /Kitty Sudoku/.test(document.querySelector('#title-panel h1').textContent) && document.title === 'Kitty Sudoku'));
    check('no emoji anywhere in the page text (rule 4.3.2)', await page.evaluate(() => !/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(document.body.innerText)));
    check('no rules text or tutorial screen: the title has three buttons and nothing to read', await page.evaluate(() => document.querySelectorAll('#title-panel button.btn-main, #title-panel button.btn-ghost').length === 3 && document.querySelector('#title-panel').innerText.length < 260));
    await shot(page, 'phone-390x844-title');
    await page.tap('#bgm-pill'); await sleep(100);
    check('music button switches the track and saves it', await page.evaluate(() => window.__game.store.settings.bgm === 'ragtime' && /Ragtime/.test(document.getElementById('bgm-pill').textContent)));
    await page.tap('#bgm-pill'); await sleep(100);
    // level 1: 4×4
    await page.tap('#play-btn'); await sleep(400);
    let st = await state(page);
    const tip = await page.evaluate(() => document.getElementById('tip').textContent);
    check('Play starts level 1 (9×9 Easy, the board everyone knows), one-line tip under the board, nothing else to read', st.state === 1 && st.level === 1 && st.N === 9 && /Tap a cell/.test(tip), JSON.stringify(st) + ' tip=' + tip);
    check('level_started message after start', await page.evaluate(() => window.__msgs.includes('level_started')));
    await sleep(1200);
    const audio = await page.evaluate(() => ({ ctx: window.__game.ctxState, bufs: window.__game.bufs, bgm: window.__game.bgmPlaying, audible: window.__game.audible }));
    check('AudioContext running after first tap', audio.ctx === 'running', audio.ctx);
    check('sound files decoded (effects + music)', audio.bufs.length >= 10 && audio.bufs.includes('bgm_ukulele'), audio.bufs.join(','));
    check('music looping', audio.bgm);
    await shot(page, 'phone-390x844-level1');
    // select + highlights
    let i = await openCell(page);
    await tapCell(page, i, true); await sleep(80);
    const hl = await page.evaluate((i) => { const g = window.__game, n = g.N; const peers = g.core.peers(n)[i]; return { sel: g.sel, selCls: document.querySelectorAll('.cell.sel').length, peers: document.querySelectorAll('.cell.peer').length, expectPeers: peers.length }; }, i);
    check('tap a cell: it is selected and its row, column and box light up', hl.sel === i && hl.selCls === 1 && hl.peers === hl.expectPeers, JSON.stringify(hl));
    // same-number highlight from a given cell
    const gv = await page.evaluate(() => { const g = window.__game; for (let i = 0; i < g.N * g.N; i++) if (g.given[i]) return { i, v: g.cells[i], count: g.cells.filter((x) => x === g.cells[i]).length }; });
    await tapCell(page, gv.i, true); await sleep(80);
    check('tap a given number: every cell with the same number is highlighted', await page.evaluate((gv) => document.querySelectorAll('.cell.same').length === gv.count - 1, gv), JSON.stringify(gv));
    await shot(page, 'phone-390x844-highlight');
    // wrong number
    await tapCell(page, i, true);
    const wv = await wrongValue(page, i);
    await tapNum(page, wv, true); await sleep(150);
    const w1 = await page.evaluate((i) => ({ v: window.__game.cells[i], wrong: document.querySelectorAll('.cell.wrong').length, red: getComputedStyle(document.querySelectorAll('.cell')[i].querySelector('.v')).color, mistakes: window.__game.mistakes, cat: document.querySelector('#cat use').getAttribute('href'), tip: document.getElementById('tip').textContent, msg: document.getElementById('msg').textContent }), i);
    check('clashing number: stays in red with the number it clashes with, Mistakes 1/3, the cat grumbles, no text lecture', w1.v === wv && w1.wrong >= 2 && w1.mistakes === 1 && /209, 52, 42/.test(w1.red) && w1.cat === '#s-cat-mad' && w1.tip === '' && w1.msg === '', JSON.stringify(w1));
    await shot(page, 'phone-390x844-wrong');
    // undo
    await page.tap('#undo-btn'); await sleep(80);
    check('Undo takes the clashing number back (the mistake stays counted, as in every sudoku app)', await page.evaluate((i) => window.__game.cells[i] === 0 && window.__game.mistakes === 1 && document.querySelectorAll('.cell.wrong').length === 0, i));
    // a number that breaks no visible rule is never called wrong, even when it is not the answer (player 11-08: "that is not a mistake")
    const lw = await legalWrong(page);
    if (lw) {
      await tapCell(page, lw[0], true); await tapNum(page, lw[1], true); await sleep(120);
      const lwr = await page.evaluate((i) => ({ v: window.__game.cells[i], wrong: document.querySelectorAll('.cell.wrong').length, mistakes: window.__game.mistakes, cat: document.querySelector('#cat use').getAttribute('href') }), lw[0]);
      check('a legal but not-the-answer number: no red, no mistake counted', lwr.v === lw[1] && lwr.wrong === 0 && lwr.mistakes === 1 && lwr.cat === '#s-cat-happy', JSON.stringify(lwr));
      await page.tap('#undo-btn'); await sleep(60);
    } else check('a legal but not-the-answer number exists to test', false);
    // notes: pencil marks + auto-clear in peers
    await page.tap('#notes-btn'); await sleep(50);
    check('Notes ON: badge and number pad show note mode', await page.evaluate(() => window.__game.notesMode && document.getElementById('notes-badge').textContent === 'ON' && document.getElementById('app').classList.contains('notes')));
    const rv = await page.evaluate((i) => window.__game.solution[i], i);
    await tapCell(page, i, true); await tapNum(page, rv, true); await tapNum(page, wv, true); await sleep(80);
    const n1 = await page.evaluate((i) => ({ notes: window.__game.notes[i], on: document.querySelectorAll('.cell')[i].querySelectorAll('.notes i.on').length, v: window.__game.cells[i] }), i);
    check('two pencil marks in the cell, no value', n1.on === 2 && n1.v === 0 && n1.notes === ((1 << rv) | (1 << wv)), JSON.stringify(n1));
    await tapNum(page, wv, true); await sleep(50);
    check('tapping a mark again removes it', await page.evaluate((i) => document.querySelectorAll('.cell')[i].querySelectorAll('.notes i.on').length === 1, i));
    await shot(page, 'phone-390x844-notes');
    // a peer cell gets the same note, then the real number in the first cell clears it
    const peer = await page.evaluate((i) => { const g = window.__game; const P = g.core.peers(g.N)[i]; for (const p of P) if (!g.given[p] && !g.cells[p]) return p; return -1; }, i);
    await tapCell(page, peer, true); await tapNum(page, rv, true); await sleep(50);
    await page.tap('#notes-btn'); await sleep(50);
    await tapCell(page, i, true); await tapNum(page, rv, true); await sleep(150);
    const n2 = await page.evaluate(([i, p]) => ({ v: window.__game.cells[i], pn: window.__game.notes[p], cat: document.querySelector('#cat use').getAttribute('href'), tip: document.getElementById('tip').textContent, undo: window.__game.undoLen }), [i, peer]);
    check('right number: blue, the cat hops, the tip line is gone, the same pencil mark in a peer cell is cleared', n2.v === rv && n2.pn === 0 && n2.cat === '#s-cat-happy' && n2.tip === '', JSON.stringify(n2));
    await page.tap('#undo-btn'); await sleep(50);
    check('Undo restores the number and the cleared pencil mark', await page.evaluate(([i, p, rv]) => window.__game.cells[i] === 0 && window.__game.notes[p] === (1 << rv), [i, peer, rv]));
    // erase
    await tapCell(page, peer, true); await page.tap('#erase-btn'); await sleep(50);
    check('Erase clears the selected cell (its notes too)', await page.evaluate((p) => window.__game.cells[p] === 0 && window.__game.notes[p] === 0, peer));
    await tapCell(page, i, true); await tapNum(page, rv, true); await sleep(50);
    await page.tap('#erase-btn'); await sleep(50);
    check('Erase clears a placed number; a given cannot be erased', await page.evaluate(([i, g]) => { const G = window.__game; G.select(g); G.erase(); return G.cells[i] === 0 && G.cells[g] > 0; }, [i, gv.i]));
    // remaining counts on the pad
    const cnt = await page.evaluate(() => { const g = window.__game, c = g.counts; return Array.from(document.querySelectorAll('.num small')).map((s, k) => parseInt(s.textContent, 10) === g.N - c[k + 1]); });
    check('number pad shows how many of each number are left', cnt.every(Boolean), cnt.join(','));
    // solve level 1 by taps
    await solveBoard(page, true, 60);
    await sleep(300);
    const won = await page.evaluate(() => ({ won: document.getElementById('board').classList.contains('won'), msg: document.getElementById('msg').textContent, cat: document.getElementById('cat').classList.contains('dance'), done: document.querySelectorAll('.num.done').length }));
    check('level 1 solved by taps: SOLVED!, numbers wave, the cat dances, every pad number done', won.won && /SOLVED/.test(won.msg) && won.cat && won.done === 9, JSON.stringify(won));
    await shot(page, 'phone-390x844-level1-solved');
    await sleep(900);
    const w = await page.evaluate(() => ({ state: window.__game.state, won: window.__game.won, panel: !document.getElementById('over-panel').classList.contains('hidden'), cleared: window.__game.store.progress.cleared, tut: window.__game.store.progress.tut, title: document.getElementById('over-title').textContent, msgs: window.__msgs.slice(-2) }));
    check('results panel, progress saved, first-level flag set', w.state === 2 && w.won && w.panel && w.cleared === 1 && w.tut === 1 && /solved/i.test(w.title), JSON.stringify(w));
    check('level_completed message on win', w.msgs.includes('level_completed'), w.msgs.join(','));
    await shot(page, 'phone-390x844-level1-panel');
    // levels 2, 3 (9×9) via Next level
    for (let lv = 2; lv <= 3; lv++) {
      await sleep(600);
      await page.tap('#next-btn'); await sleep(300);
      st = await state(page);
      if (!(st.state === 1 && st.level === lv && st.N === 9)) { check(`level ${lv} starts`, false, JSON.stringify(st)); break; }
      if (lv === 2) { check('no tip after the first level, hint button hidden on the mock platform (rewarded unsupported)', await page.evaluate(() => document.getElementById('tip').textContent === '' && document.getElementById('hint-btn').classList.contains('hidden'))); await tapCell(page, await openCell(page), true); await shot(page, 'phone-390x844-9x9'); }
      await solveBoard(page, true, 15); await sleep(1200);
      st = await state(page);
      check(`level ${lv} (9×9 ${await page.evaluate(() => window.__game.difficulty)}) solved by taps`, st.state === 2 && st.won && st.cleared === lv, JSON.stringify(st));
      if (lv === 3) await shot(page, 'phone-390x844-9x9-solved');
    }
    // small boards: 4×4 ×3 and 6×6 ×3 by taps (outside the ladder)
    for (const sm of [1, 2, 3, 6, 7, 8]) {
      await page.evaluate((sm) => window.__game.startSmall(sm), sm); await sleep(200);
      st = await state(page);
      const expectN = sm < 6 ? 4 : 6;
      const smState = await page.evaluate(() => ({ mode: window.__game.mode, small: window.__game.small, label: document.getElementById('mode-main').textContent }));
      if (!(st.state === 1 && st.N === expectN && smState.mode === 'small' && /Small board/.test(smState.label))) { check(`small board ${sm} starts as ${expectN}×${expectN}`, false, JSON.stringify(st) + JSON.stringify(smState)); continue; }
      if (sm === 1) { await tapCell(page, await openCell(page), true); await shot(page, 'phone-390x844-small-4x4'); }
      if (sm === 6) { await tapCell(page, await openCell(page), true); await shot(page, 'phone-390x844-small-6x6'); }
      await solveBoard(page, true, 25); await sleep(1200);
      st = await state(page);
      const done = await page.evaluate((sm) => !!window.__game.store.progress.small[sm], sm);
      check(`small board ${sm} (${expectN}×${expectN} ${await page.evaluate(() => window.__game.difficulty)}) solved by taps, marked done`, st.state === 2 && st.won && st.mistakes === 0 && done, JSON.stringify(st));
      if (sm === 1) { await sleep(600); check('after a small board: "Next small board" button', await page.evaluate(() => /Next small board/.test(document.getElementById('next-btn').textContent))); }
    }
    // level 80 (9×9): hint (rewarded) + three mistakes → continue once
    await sleep(600);
    await page.evaluate(() => { window.__forceRewarded = true; window.__game.startLevel(80); }); await sleep(200);
    check('level 80 is 9×9 with the hint button (rewarded supported)', await page.evaluate(() => window.__game.level === 80 && window.__game.N === 9 && !document.getElementById('hint-btn').classList.contains('hidden')));
    // pause (P), timer frozen, hidden, ad
    await page.keyboard.press('KeyP'); await sleep(150);
    const paused = await page.evaluate(() => ({ p: window.__game.userPaused, vis: !document.getElementById('pause-panel').classList.contains('hidden'), frozen: window.__game.frozen, cat: document.querySelector('#cat use').getAttribute('href') }));
    check('P pauses: pause panel, the cat naps', paused.p && paused.vis && paused.frozen && paused.cat === '#s-cat-sleep', JSON.stringify(paused));
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
    // hint
    i = await openCell(page); await tapCell(page, i, true);
    await page.tap('#hint-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('closed'); }); await sleep(1800);
    check('hint ad closed early: nothing filled, hint still available', await page.evaluate((i) => window.__game.cells[i] === 0 && !window.__game.hintUsed && !document.getElementById('hint-btn').classList.contains('hidden'), i));
    await page.tap('#hint-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); window.__game.onRewardedState('closed'); }); await sleep(300);
    const hinted = await page.evaluate((i) => ({ v: window.__game.cells[i] === window.__game.solution[i], used: window.__game.hintUsed, btn: !document.getElementById('hint-btn').classList.contains('hidden') }), i);
    check('hint rewarded: the selected cell gets its number, button gone (one hint per puzzle)', hinted.v && hinted.used && !hinted.btn, JSON.stringify(hinted));
    await shot(page, 'phone-390x844-hint');
    // three mistakes
    for (let k = 0; k < 3; k++) { const c = await openCell(page); await tapCell(page, c, true); await tapNum(page, await wrongValue(page, c), true); await sleep(200); }
    await sleep(800);
    const oh = await page.evaluate(() => ({ state: window.__game.state, mistakes: window.__game.mistakes, won: window.__game.won, title: document.getElementById('over-title').textContent, cont: !document.getElementById('continue-btn').classList.contains('hidden'), wrong: document.querySelectorAll('.cell.wrong').length, msgs: window.__msgs.slice(-1) }));
    check('three clashing numbers → Out of mistakes, continue offered, numbers kept on the board', oh.state === 2 && oh.mistakes === 3 && !oh.won && /mistakes/i.test(oh.title) && oh.cont && oh.wrong >= 3 && oh.msgs[0] === 'level_failed', JSON.stringify(oh));
    await shot(page, 'phone-390x844-out-of-mistakes');
    await page.tap('#continue-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('closed'); }); await sleep(1800);
    const ng = await page.evaluate(() => ({ state: window.__game.state, used: window.__game.continueUsed, note: document.getElementById('ad-note').textContent }));
    check('continue ad closed early: no reward, panel stays', ng.state === 2 && !ng.used && ng.note.length > 0, JSON.stringify(ng));
    await page.tap('#continue-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); });
    const underAd = await page.evaluate(() => ({ state: window.__game.state, earned: window.__game.rewardEarned, frozen: window.__game.frozen }));
    check('reward earned but the game waits until the ad closes', underAd.state === 2 && underAd.earned === 'continue' && underAd.frozen, JSON.stringify(underAd));
    await page.evaluate(() => window.__game.onRewardedState('closed')); await sleep(200);
    const cont = await page.evaluate(() => ({ state: window.__game.state, mistakes: window.__game.mistakes, wrong: document.querySelectorAll('.cell.wrong').length, used: window.__game.continueUsed, frozen: window.__game.frozen, right: window.__game.cells.filter((v, i) => v && v === window.__game.solution[i]).length }));
    check('rewarded: play continues, mistakes back to 0, clashing numbers removed, the rest kept', cont.state === 1 && cont.mistakes === 0 && cont.wrong === 0 && cont.used && !cont.frozen && cont.right > 20, JSON.stringify(cont));
    await shot(page, 'phone-390x844-continued');
    for (let k = 0; k < 3; k++) { const c = await openCell(page); await tapCell(page, c, true); await tapNum(page, await wrongValue(page, c), true); await sleep(150); }
    await sleep(800);
    check('no second continue in the same attempt', await page.evaluate(() => window.__game.state === 2 && document.getElementById('continue-btn').classList.contains('hidden')));
    await sleep(600);
    await page.tap('#retry-btn'); await sleep(300);
    check('Try again restarts level 80 with a clean board', await page.evaluate(() => window.__game.state === 1 && window.__game.level === 80 && window.__game.mistakes === 0 && window.__game.undoLen === 0));
    await page.evaluate(() => window.__game.quitToTitle()); await sleep(100);
    check('title shows progress: Play · Level 4 (levels 1–3 cleared; level 80 was left unfinished)', await page.evaluate(() => /Level 4/.test(document.getElementById('play-main').textContent) && /of 300/.test(document.getElementById('levels-sub').textContent)), await page.evaluate(() => document.getElementById('play-main').textContent + ' / ' + document.getElementById('levels-sub').textContent));
    // daily
    await page.tap('#daily-btn'); await sleep(300);
    const d0 = await page.evaluate(() => ({ state: window.__game.state, mode: window.__game.mode, N: window.__game.N, practice: window.__game.practice, label: document.getElementById('mode-main').textContent, chip: document.getElementById('ch-chip').classList.contains('hidden') }));
    check('Today\'s puzzle starts (6×6, not practice, no friend chip without a link)', d0.state === 1 && d0.mode === 'daily' && d0.N === 6 && !d0.practice && d0.chip, JSON.stringify(d0));
    await tapCell(page, await openCell(page), true);
    await shot(page, 'phone-390x844-daily');
    await solveBoard(page, true, 25); await sleep(1300);
    const dw = await page.evaluate(() => ({ state: window.__game.state, won: window.__game.won, solved: window.__game.store.progress.daily.solved, ranks: window.__game.store.progress.daily.ranks.length, day: window.__game.store.progress.daily.day, rankVis: !document.getElementById('rank-board').classList.contains('hidden'), share: !document.getElementById('share-btn').classList.contains('hidden'), label: document.getElementById('share-label').textContent }));
    check('daily solved by taps: time recorded, rank list and "Challenge a friend" shown (web build)', dw.state === 2 && dw.won && dw.solved > 0 && dw.ranks === 1 && dw.day.length === 8 && dw.rankVis && dw.share && /Challenge/.test(dw.label), JSON.stringify(dw));
    await page.fill('#name-input', 'Robo'); await sleep(100);
    const txt = await page.evaluate(() => window.__game.shareText);
    check('share text carries a challenge link with the time, name and day', /sudoku-playables\/#c=\d+&n=Robo&d=\d{8}/.test(txt), txt.slice(0, 140));
    await page.tap('#share-btn'); await sleep(300);
    const sh = await page.evaluate(() => document.getElementById('share-note').textContent);
    check('Challenge a friend copies or shares the text', /copied|Shared|Kitty/i.test(sh), sh.slice(0, 60));
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
    check('reload restores levels, name, daily time, first-level flag, mute (Bridge storage)', re.cleared >= 3 && re.name === 'Robo' && re.muted === true && re.attr === '1' && !re.audible && re.solved > 0 && re.tut === 1 && /Solved today/.test(re.sub), JSON.stringify(re));
    await page.tap('#daily-btn'); await sleep(300);
    check('second daily run is practice (first time is the record)', await page.evaluate(() => window.__game.practice && /practice/.test(document.getElementById('mode-sub').textContent)));
    await page.evaluate(() => window.__game.quitToTitle());
    // levels screen
    await page.tap('#levels-btn'); await sleep(200);
    const lv = await page.evaluate(() => { const g = document.getElementById('levels-grid'), n = document.querySelector('.lvl.next'), gr = g.getBoundingClientRect(), nr = n.getBoundingClientRect(); return { state: window.__game.state, done: document.querySelectorAll('.lvl.done:not(.small)').length, next: n.dataset.level, locked: document.querySelectorAll('.lvl.locked').length, total: document.querySelectorAll('.lvl:not(.small)').length, small: document.querySelectorAll('.lvl.small').length, smallDone: document.querySelectorAll('.lvl.small.done').length, smallLocked: document.querySelectorAll('.lvl.small.locked').length, scrolls: g.scrollHeight > g.clientHeight + 100, nextVisible: nr.top >= gr.top && nr.bottom <= gr.bottom, heads: document.querySelectorAll('.lvl-head').length }; });
    check('levels: 25 small boards (6 done, none locked) + 300 levels in one scrolling list, next level in view, headers', lv.state === 3 && lv.total === 300 && lv.small === 25 && lv.smallDone === 6 && lv.smallLocked === 0 && lv.scrolls && lv.nextVisible && lv.heads === 4 && lv.done + 1 + lv.locked === 300, JSON.stringify(lv));
    await shot(page, 'phone-390x844-levels');
    await page.evaluate(() => { const g = document.getElementById('levels-grid'); g.scrollTop = g.scrollHeight; }); await sleep(150);
    check('scrolling to the bottom shows level 300', await page.evaluate(() => { const g = document.getElementById('levels-grid').getBoundingClientRect(), r = document.querySelector('.lvl[data-level="300"]').getBoundingClientRect(); return r.top >= g.top - 1 && r.bottom <= g.bottom + 1 && document.getElementById('levels-panel').getBoundingClientRect().bottom <= innerHeight; }));
    await page.evaluate(() => { document.getElementById('levels-grid').scrollTop = 0; }); await sleep(150);
    await page.tap('.lvl[data-level="2"]'); await sleep(300);
    check('a cleared level can be replayed from the grid', await page.evaluate(() => window.__game.state === 1 && window.__game.level === 2 && window.__game.N === 9));
    await page.evaluate(() => window.__game.showLevels()); await sleep(150);
    await page.tap('.lvl[data-small="10"]'); await sleep(300);
    check('any small board opens from the grid (no lock)', await page.evaluate(() => window.__game.state === 1 && window.__game.mode === 'small' && window.__game.small === 10 && window.__game.N === 6));
    await context.close();
  }

  // ── 3. challenge link: a friend's time on the title, in the HUD and in the list ──
  {
    const today = (() => { const t = new Date(Date.now() + 9 * 3600 * 1000); return '' + t.getUTCFullYear() + String(t.getUTCMonth() + 1).padStart(2, '0') + String(t.getUTCDate()).padStart(2, '0'); })();
    const { context, page } = await newPage(browser, 390, 844, base + '#debug&c=95&n=Robo&d=' + today, { touch: true });
    const t0 = await page.evaluate(() => ({ ch: window.__game.challenge, sub: document.getElementById('daily-sub').textContent }));
    check('challenge link read: Robo 1:35 for today, shown under Today\'s puzzle', t0.ch.time === 95 && t0.ch.name === 'Robo' && t0.ch.today && /Robo did it in 1:35/.test(t0.sub), JSON.stringify(t0));
    await page.tap('#daily-btn'); await sleep(300);
    const chip = await page.evaluate(() => ({ vis: !document.getElementById('ch-chip').classList.contains('hidden'), text: document.getElementById('ch-text').textContent, beat: document.getElementById('ch-chip').classList.contains('beat') }));
    check('friend\'s time sits in the HUD while playing today\'s puzzle', chip.vis && chip.text === 'Robo 1:35', JSON.stringify(chip));
    await sleep(300);
    check('chip turns green while you are still ahead of the friend\'s time', await page.evaluate(() => document.getElementById('ch-chip').classList.contains('beat')));
    await shot(page, 'phone-390x844-challenge');
    await solveBoard(page, true, 20); await sleep(1300);
    const res = await page.evaluate(() => ({ sub: document.getElementById('over-sub').textContent, rows: Array.from(document.querySelectorAll('.rank-row')).map((r) => r.textContent.replace(/\s+/g, ' ')), friend: document.querySelectorAll('.rank-name small').length }));
    check('results: "You beat Robo", friend row in the list', /beat Robo/.test(res.sub) && res.friend === 1 && res.rows.length === 2, JSON.stringify(res));
    await shot(page, 'phone-390x844-challenge-won');
    await context.close();
  }

  // ── 4. desktop: mouse + keyboard, Esc unused ──
  {
    const { context, page } = await newPage(browser, 1280, 720, base + '#debug');
    check('desktop detected', await page.evaluate(() => window.__game.isDesktop));
    await page.keyboard.press('Space'); await sleep(300);
    check('Space starts the next level', await page.evaluate(() => window.__game.state === 1));
    await page.evaluate(() => { window.__game.store.progress.tut = 1; window.__game.startSmall(7); });
    await sleep(100);
    const i = await openCell(page);
    const v = await page.evaluate((i) => window.__game.solution[i], i);
    await tapCell(page, i, false); await tapNum(page, v, false); await sleep(100);
    check('mouse: click a cell, click a number', await page.evaluate((i) => window.__game.cells[i] === window.__game.solution[i], i));
    await page.keyboard.press('Backspace'); await sleep(50);
    check('Backspace erases', await page.evaluate((i) => window.__game.cells[i] === 0, i));
    await page.keyboard.press('Digit' + v); await sleep(50);
    check('digit key enters a number in the selected cell', await page.evaluate((i) => window.__game.cells[i] === window.__game.solution[i], i));
    await page.keyboard.press('KeyZ'); await sleep(50);
    check('Z undoes', await page.evaluate((i) => window.__game.cells[i] === 0, i));
    await page.keyboard.press('ArrowRight'); await sleep(50);
    check('arrow keys move the selection', await page.evaluate((i) => { const n = window.__game.N; return window.__game.sel === (Math.floor(i / n) * n + (i % n + 1) % n); }, i));
    await page.keyboard.press('KeyN'); await sleep(50);
    check('N toggles Notes', await page.evaluate(() => window.__game.notesMode));
    await page.keyboard.press('KeyN');
    await page.keyboard.press('Escape'); await sleep(100);
    check('Esc does nothing (1.5.2)', await page.evaluate(() => window.__game.state === 1 && !window.__game.userPaused));
    await solveBoard(page, false, 15); await sleep(300);
    check('6×6 small board solved with the mouse', await page.evaluate(() => window.__game.state === 2 && window.__game.won));
    await shot(page, 'iframe-1280x720-solved');
    await sleep(900);
    await page.evaluate(() => window.__game.startLevel(130)); await sleep(100);
    await tapCell(page, await openCell(page), false);
    await shot(page, 'iframe-1280x720-play');
    await context.close();
  }

  // ── 5. size matrix: 9×9 play state, layout sanity; results panel + levels at a few sizes ──
  for (const [name, w, h] of SIZES) {
    const { context, page } = await newPage(browser, w, h, base + '#debug', { touch: w < 700 });
    await page.evaluate(() => { window.__game.store.progress.tut = 1; window.__game.startLevel(80); const g = window.__game; let k = 0; for (let i = 0; i < 81 && k < 6; i++) if (!g.given[i]) { g.select(i); g.enter(g.solution[i]); k++; } g.select(40); });
    await sleep(250);
    const lay = await page.evaluate(() => {
      const g = window.__game, W = innerWidth, H = innerHeight;
      const b = g.boardRect(), hud = g.hudRect(), foot = g.footRect();
      const ov = (a, c) => !(a.right <= c.left + 1 || c.right <= a.left + 1 || a.bottom <= c.top + 1 || c.bottom <= a.top + 1);
      const inside = (r) => r.left >= -1 && r.top >= -1 && r.right <= W + 1 && r.bottom <= H + 1;
      const cellPx = g.cellRect(0).w, num = g.numRect(9);
      return { W, H, land: document.body.classList.contains('land'), boardW: Math.round(b.w), cellPx: Math.round(cellPx), numW: Math.round(num.w), numH: Math.round(num.h), hudOverBoard: ov(hud, b), footOverBoard: ov(foot, b), hudOverFoot: ov(hud, foot), inside: inside(b) && inside(hud) && inside(foot), fill: b.w / Math.min(W, H), scroll: document.documentElement.scrollHeight <= H + 1 };
    });
    check(`layout ${name} (${lay.land ? 'landscape' : 'portrait'}): board ${lay.boardW}px, cells ${lay.cellPx}px, pad keys ${lay.numW}×${lay.numH}, no overlap, on screen, fills ≥ 55% of the short side`, !lay.hudOverBoard && !lay.footOverBoard && !lay.hudOverFoot && lay.inside && lay.cellPx >= 28 && lay.numW >= 30 && lay.numH >= 40 && lay.fill >= 0.55 && lay.scroll, JSON.stringify({ fill: lay.fill.toFixed(2), hudOverBoard: lay.hudOverBoard, footOverBoard: lay.footOverBoard, hudOverFoot: lay.hudOverFoot, inside: lay.inside }));
    await shot(page, name + '-play');
    if (name === 'square-640x640' || name === 'land-844x390' || name === 'phone-360x640') {
      await page.evaluate(() => { window.__game.mistakes = 2; });
      const c = await openCell(page);
      await page.evaluate(([c, v]) => { window.__game.select(c); window.__game.enter(v); }, [c, await wrongValue(page, c)]); await sleep(800);
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

  // ── 6. covers (still frame) ──
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
