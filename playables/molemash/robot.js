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
// the results panel can arrive up to ~2.6 s late when the run beat a record (the celebration plays first)
async function waitPanel(page) { await page.waitForFunction(() => window.__game.state === 2 && !document.getElementById('over-panel').classList.contains('hidden'), null, { timeout: 5000 }).catch(() => {}); }
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
    await page.click('#sfx-btn');
    await page.waitForTimeout(100);
    check('hit-sound button cycles the style and saves it', await page.evaluate(() => window.__game.store.settings.sfx === 'cute' && /Cute/.test(document.getElementById('sfx-btn').textContent)));
    await page.click('#sfx-btn'); await page.click('#sfx-btn'); await page.click('#sfx-btn'); await page.click('#sfx-btn');
    check('five styles wrap around', await page.evaluate(() => window.__game.store.settings.sfx === 'classic'));
    check('music button shows the default track', await page.evaluate(() => window.__game.store.settings.bgm === 'chiptune' && /Chiptune/.test(document.getElementById('bgm-btn').textContent)));
    check('only the chosen music track is downloaded', await page.evaluate(() => window.__game.bufs.filter((k) => k.indexOf('bgm_') === 0).join(',') === 'bgm_chiptune'), await page.evaluate(() => window.__game.bufs.filter((k) => k.indexOf('bgm_') === 0).join(',')));
    await page.click('#bgm-btn');
    await page.waitForFunction(() => window.__game.bgmKey === 'bgm_rush', null, { timeout: 8000 }).catch(() => {});
    check('music button switches the track mid-play and saves it', await page.evaluate(() => window.__game.store.settings.bgm === 'rush' && window.__game.bgmPlaying && window.__game.bgmKey === 'bgm_rush' && /rush/.test(document.getElementById('bgm-btn').textContent)), await page.evaluate(() => window.__game.bgmKey + ' ' + window.__game.store.settings.bgm));
    for (let i = 0; i < 5; i++) await page.click('#bgm-btn');
    await page.waitForFunction(() => window.__game.bgmKey === 'bgm_chiptune', null, { timeout: 8000 }).catch(() => {});
    check('six music tracks wrap around to the first', await page.evaluate(() => window.__game.store.settings.bgm === 'chiptune' && window.__game.bgmKey === 'bgm_chiptune'));
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
    check('sound files decoded (effects + music)', audio.bufs.length >= 12 && audio.bufs.includes('bgm_chiptune'), audio.bufs.join(','));
    check('music looping', audio.bgm);
    await page.waitForTimeout(2600);  // let the tutorial mole come up
    await shot(page, 'phone-390x844-play-tutorial');
    const whacks = await playUntilOver(page, 12000);
    const mid = await page.evaluate(() => ({ score: window.__game.score, lives: window.__game.lives, state: window.__game.state, tut: window.__game.tutorial }));
    check('scored by whacking moles', mid.score > 0, `score ${mid.score}, whacks ${whacks}, lives ${mid.lives}`);
    await shot(page, 'phone-390x844-play-hit');
    await shot(page, 'phone-390x844-play');
    // a bomb costs exactly one heart: the moles that were up get scared back down, no extra misses
    await page.evaluate(() => { window.__game.spawnMole('mole'); window.__game.spawnMole('bomb'); });
    await page.waitForTimeout(250);
    const livesBefore = await page.evaluate(() => window.__game.lives);
    const bc = await page.evaluate(() => { const g = window.__game; return g.holeCenter(g.moles.find((m) => m.kind === 'bomb').hole); });
    await page.mouse.click(bc.x, bc.y);
    await page.waitForTimeout(600);   // before any newly spawned mole could sink on its own
    const afterBomb = await page.evaluate(() => ({ lives: window.__game.lives, state: window.__game.state }));
    check('one bomb = one heart (the other moles duck, no second miss)', afterBomb.lives === livesBefore - 1 && afterBomb.state === 1, JSON.stringify({ livesBefore, afterBomb }));
    await page.evaluate(() => { window.__game.lives = 3; });   // give the heart back so the rest of the session plays out as before
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
    // last-ten-seconds countdown, then let the clock run out (time bonuses would extend it if we kept whacking)
    await page.evaluate(() => { window.__game.timeLeft = 7.3; });
    await page.waitForTimeout(350);
    await shot(page, 'phone-390x844-countdown');
    await page.evaluate(() => { window.__game.timeLeft = 0.6; });
    await page.waitForTimeout(1500);
    await page.waitForTimeout(300);
    const over = await page.evaluate(() => ({ state: window.__game.state, score: window.__game.score, panel: !document.getElementById('over-panel').classList.contains('hidden'), title: document.getElementById('over-title-text').textContent, best: window.__game.store.progress.best, ranks: window.__game.store.progress.ranks.length, msgs: window.__msgs.slice() }));
    check('round ends at 0 s with the game-over panel', over.state === 2 && over.panel, JSON.stringify({ title: over.title, score: over.score }));
    check('best and rank recorded', over.best === over.score && over.ranks === 1, `best ${over.best}`);
    check('level_completed message on time-up', over.msgs.includes('level_completed'), over.msgs.join(','));
    await shot(page, 'phone-390x844-over');
    await page.click('#share-btn');
    await page.waitForTimeout(300);
    const sh = await page.evaluate(() => document.getElementById('share-note').textContent);
    check('Share my score copies or shares the score text', /Copied|Shared|moles/.test(sh), sh.slice(0, 60));
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
    await page.evaluate(() => window.__game.onRewardedState('closed'));   // closed without reward → nothing granted (after a short grace)
    await page.waitForTimeout(1800);
    const notGranted = await page.evaluate(() => ({ state: window.__game.state, note: document.getElementById('ad-note').textContent, used: window.__game.continueUsed }));
    check("ad closed early: no reward, game stays on the panel", notGranted.state === 2 && !notGranted.used && notGranted.note.length > 0, JSON.stringify(notGranted));
    await page.click('#continue-btn');
    await page.evaluate(() => window.__game.onRewardedState('opened'));
    await page.evaluate(() => window.__game.onRewardedState('rewarded'));
    const underAd = await page.evaluate(() => ({ state: window.__game.state, earned: window.__game.rewardEarned, frozen: window.__game.frozen }));
    check('reward earned but the round waits until the ad closes', underAd.state === 2 && underAd.earned === 'continue' && underAd.frozen, JSON.stringify(underAd));
    await page.evaluate(() => window.__game.onRewardedState('closed'));
    await page.waitForTimeout(150);
    check('after the ad closes the round runs, no pause panel in the way', await page.evaluate(() => window.__game.state === 1 && !window.__game.userPaused && document.getElementById('pause-panel').classList.contains('hidden')));
    const granted = await page.evaluate(() => ({ state: window.__game.state, lives: window.__game.lives, timeLeft: window.__game.timeLeft, used: window.__game.continueUsed, ranks: window.__game.store.progress.ranks.length }));
    check('rewarded: round continues with hearts back and +10 s', granted.state === 1 && granted.lives === 3 && granted.timeLeft > 9 && granted.used, JSON.stringify(granted));
    check('SECOND WIND count-in holds the moles for a moment', await page.evaluate(() => window.__game.countIn > 2 && window.__game.moles.length === 0));
    // a platform pause flag left behind by the ad (no un-pause event) must not freeze the count-in forever (player report 11-07)
    await page.evaluate(() => { window.__game.setReason('paused', true); });
    const frozenNow = await page.evaluate(() => window.__game.frozen);
    await page.waitForTimeout(2200);
    const thawed = await page.evaluate(() => ({ frozen: window.__game.frozen, paused: window.__game.reasons.paused, state: window.__game.state, countIn: window.__game.countIn }));
    check('stale platform pause during the count-in is cleared by the watchdog within ~2 s (3-2-1 runs on its own)', frozenNow && !thawed.frozen && !thawed.paused && thawed.state === 1, JSON.stringify({ frozenNow, thawed }));
    // live NEW BEST: the HUD and a shout the moment the score passes the saved record
    await page.evaluate(() => { window.__game.store.progress.best = Math.max(1, window.__game.score); window.__game.countIn = 0; });
    for (let i = 0; i < 4; i++) {
      await page.evaluate(() => { window.__game.spawnMole('mole'); });
      await page.waitForTimeout(300);
      const hcBest = await page.evaluate(() => { const m = window.__game.moles.filter((x) => x.phase !== 'whacked'); return m.length ? window.__game.holeCenter(m[m.length - 1].hole) : null; });
      if (hcBest) { await page.mouse.click(hcBest.x, hcBest.y); await page.waitForTimeout(120); }
      if (await page.evaluate(() => window.__game.bestShown)) break;
    }
    check('passing the saved best mid-round fires the NEW BEST! shout once', await page.evaluate(() => window.__game.bestShown && window.__game.score > window.__game.store.progress.best), await page.evaluate(() => JSON.stringify({ score: window.__game.score, best: window.__game.store.progress.best })));
    await shot(page, 'phone-390x844-new-best-live');
    await page.waitForTimeout(400);
    await shot(page, 'phone-390x844-second-wind');
    // a platform pause blip right after the ad must not raise the pause panel
    await page.evaluate(() => { window.__game.pauseGame(true); });
    check('platform pause during the count-in shows no pause panel', await page.evaluate(() => !window.__game.userPaused && document.getElementById('pause-panel').classList.contains('hidden')));
    await page.evaluate(() => { window.__game.countIn = 0; });
    await page.evaluate(() => { window.__game.timeLeft = 0.2; });
    await page.waitForTimeout(600); await waitPanel(page);
    const o3 = await page.evaluate(() => ({ state: window.__game.state, btn: !document.getElementById('continue-btn').classList.contains('hidden') }));
    check('no second continue in the same attempt', o3.state === 2 && !o3.btn, JSON.stringify(o3));
    // ad states in the other order (closed before rewarded): the reward must still land, and nothing restarts
    await page.waitForTimeout(700);
    await playAgain(page);
    await page.waitForTimeout(2400);
    await page.evaluate(() => { window.__game.timeLeft = 0.2; });
    await page.waitForTimeout(900); await waitPanel(page);
    const sc0 = await page.evaluate(() => ({ state: window.__game.state, btn: !document.getElementById('continue-btn').classList.contains('hidden') }));
    if (sc0.btn) {
      const scoreBefore = await page.evaluate(() => window.__game.score);
      await page.click('#continue-btn');
      await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('closed'); });
      await page.waitForTimeout(300);
      const mid = await page.evaluate(() => ({ state: window.__game.state, pending: !!window.__game.rewardEarned }));
      await page.evaluate(() => { window.__game.onRewardedState('rewarded'); });
      await page.waitForTimeout(200);
      const after = await page.evaluate(() => ({ state: window.__game.state, score: window.__game.score, lives: window.__game.lives, used: window.__game.continueUsed, countIn: window.__game.countIn }));
      check('closed-then-rewarded order still continues the same run (score kept)', mid.state === 2 && after.state === 1 && after.score === scoreBefore && after.lives === 3 && after.used, JSON.stringify({ mid, after, scoreBefore }));
      await page.evaluate(() => { window.__game.countIn = 0; window.__game.timeLeft = 0.2; });
      await page.waitForTimeout(900);
    } else check('closed-then-rewarded order test reachable', false, JSON.stringify(sc0));
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
    await page.waitForTimeout(1800);
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
    // a run interrupted by an ad (page reload) comes back on the results screen with continue still offered
    await page.evaluate(() => { window.__game.store.progress.pendingRun = { ts: Date.now(), score: 23, timeLeft: 0, whacked: 20, playT: 60, reason: 'time', round: 4, bestCombo: 6 }; window.__game.saveStore(['progress']); });
    await page.waitForTimeout(400);
    await page.reload({ waitUntil: 'load' });
    await page.waitForFunction(() => window.__game && window.__game.state !== undefined);
    await page.evaluate(() => { window.__forceRewarded = true; window.__game.showOverPanel(); });   // the mock platform has no rewarded ads; re-render with the test flag
    const rr = await page.evaluate(() => ({ state: window.__game.state, score: window.__game.score, panel: !document.getElementById('over-panel').classList.contains('hidden'), line: document.getElementById('rank-line').textContent, btn: !document.getElementById('continue-btn').classList.contains('hidden') }));
    check('interrupted run restored after reload, continue still available', rr.state === 2 && rr.score === 23 && rr.panel && rr.btn, JSON.stringify(rr));
    await shot(page, 'phone-390x844-restored');
    await page.click('#continue-btn');
    await page.evaluate(() => { window.__game.onRewardedState('opened'); window.__game.onRewardedState('rewarded'); window.__game.onRewardedState('closed'); });
    await page.waitForTimeout(200);
    check('continue from the restored run keeps the score and clears the saved run', await page.evaluate(() => window.__game.state === 1 && window.__game.score === 23 && !window.__game.store.progress.pendingRun));
    await page.evaluate(() => { window.__game.countIn = 0; window.__game.timeLeft = 0.2; });
    await page.waitForTimeout(900);
    // all five collected → bar says so, no box screen
    await page.evaluate(() => { const p = window.__game.store.progress; p.hammers = window.__game.hammers.slice(); p.boxesReady = 0; p.boxFill = 0; window.__game.saveStore(['progress']); });
    await page.waitForTimeout(700);
    if (await page.evaluate(() => window.__game.state === 2)) await playAgain(page); else await page.tap('#game');
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

  // ── 1b. the big celebration: beat a real record → cheering moles, count-up, fireworks, party panel ──
  {
    const { context, page } = await newPage(browser, 390, 844, base + '#debug', { touch: true });
    await page.tap('#game'); await page.waitForTimeout(300);
    await page.evaluate(() => { window.__game.setScore(12); window.__game.gameOver('time'); });   // round 1: a first record, no party
    await page.waitForTimeout(300);
    check('first record is not a party (no old best to beat)', await page.evaluate(() => !window.__game.celeb && !document.getElementById('over-panel').classList.contains('hidden')));
    await playAgain(page); await page.waitForTimeout(300);
    await page.evaluate(() => { window.__game.setScore(41); window.__game.gameOver('time'); });   // round 2: beats 12 → the party
    await page.waitForTimeout(250);
    const c0 = await page.evaluate(() => ({ c: window.__game.celeb, panel: document.getElementById('over-panel').classList.contains('hidden') }));
    check('new best starts the celebration before the panel', !!c0.c && c0.c.kind === 'best' && c0.panel, JSON.stringify(c0));
    check('every hole has a cheering mole', !!c0.c && c0.c.cheering === 9, JSON.stringify(c0.c));
    await page.waitForTimeout(1000);
    const c1 = await page.evaluate(() => window.__game.celeb);
    check('fireworks and confetti on the overlay', !!c1 && c1.fxOn && c1.fx > 50, JSON.stringify(c1));
    await shot(page, 'phone-390x844-newbest');
    await page.tap('#game'); await page.waitForTimeout(100);
    check('a tap during the celebration does not start the next round', await page.evaluate(() => window.__game.state === 2 && !!window.__game.celeb));
    await page.waitForTimeout(1700);
    const c2 = await page.evaluate(() => ({ c: window.__game.celeb, panel: !document.getElementById('over-panel').classList.contains('hidden'), party: document.getElementById('over-panel').classList.contains('party'), title: document.getElementById('over-title-text').textContent, line: document.getElementById('rank-line').textContent, best: window.__game.store.progress.best }));
    check('party panel arrives with NEW BEST! and the trophy', c2.panel && c2.party && c2.title === 'NEW BEST!' && /over your old record/.test(c2.line) && c2.best === 41, JSON.stringify(c2));
    await shot(page, 'phone-390x844-newbest-panel');
    await playAgain(page); await page.waitForTimeout(300);
    check('Play again clears the party', await page.evaluate(() => window.__game.state === 1 && !window.__game.celeb && !document.getElementById('fx').classList.contains('on')));
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
    await page.evaluate(() => { window.__game.spawnMole('mole'); window.__game.spawnMole('gold'); window.__game.spawnMole('bomb'); window.__game.spawnMole('clock'); });
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
      await page.evaluate(() => window.__game.celebrate('best'));
      await page.waitForTimeout(1100);
      const cel = await page.evaluate(() => { const c = window.__game.celeb; const r = document.getElementById('fx').getBoundingClientRect(); return { c, fxFits: r.width === innerWidth && r.height === innerHeight, panelHidden: document.getElementById('over-panel').classList.contains('hidden') }; });
      check(`celebration runs at ${name}`, !!cel.c && cel.c.cheering === 9 && cel.fxFits && cel.panelHidden, JSON.stringify(cel));
      await shot(page, name + '-newbest');
      await page.waitForTimeout(1700);
      const pp = await page.evaluate(() => { const r = document.getElementById('over-panel').getBoundingClientRect(); return { party: document.getElementById('over-panel').classList.contains('party'), fits: r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth }; });
      check(`party panel fits at ${name}`, pp.party && pp.fits, JSON.stringify(pp));
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
