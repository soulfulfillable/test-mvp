// Knock Chain — game loop, input, HUD. Pull anywhere to aim (slingshot), release to shoot. Three balls per level;
// the stone must land on the button; the crate opens and the cat is free.
import { LEVELS, DT, MAX_PULL } from './levels.js';
import { Sim } from './physics.js';
import { createView } from './view.js';
import { createAudio } from './audio.js';

const $ = (s) => document.querySelector(s);
const SAVE_KEY = 'kc.progress';
function loadSave() { try { return JSON.parse(localStorage.getItem(SAVE_KEY) || '{}'); } catch (e) { return {}; } }
function save(p) { try { localStorage.setItem(SAVE_KEY, JSON.stringify(p)); } catch (e) { /* private mode */ } }

const G = {
  level: null, sim: null, state: 'loading', // loading | aim | flying | won | lost | paused
  aim: null, timeScale: 1, slowUntil: 0, now: 0, acc: 0,
  progress: loadSave(), view: null, audio: createAudio(), lastSnap: null, endTimer: 0, pausedFrom: null,
};
const app = $('#app');
G.view = createView(app);
G.audio.setMuted(!!G.progress.muted);

// ---------- layout: three HUD modes (portrait / landscape / square) decide the safe area the level is fitted into ----------
function layout() {
  const W = app.clientWidth, H = app.clientHeight, r = W / H;
  const mode = r < 0.8 ? 'portrait' : r > 1.25 ? 'landscape' : 'square';
  document.body.dataset.mode = mode;
  const top = mode === 'portrait' ? 104 : mode === 'square' ? 72 : 64;
  const bottom = mode === 'portrait' ? 132 : mode === 'square' ? 96 : 84;
  G.view.setSafe({ top, bottom, left: mode === 'landscape' ? 32 : 14, right: mode === 'landscape' ? 32 : 14 });
}
window.addEventListener('resize', layout);

// ---------- HUD ----------
const hud = { balls: $('#balls'), level: $('#level'), goal: $('#goal'), hint: $('#hint'), hintSub: $('#hint-sub'), panel: $('#panel'), ptitle: $('#panel-title'), pbody: $('#panel-body'), pbtns: $('#panel-btns'), sound: $('#btn-sound'), pause: $('#btn-pause') };
const BALL = '<svg viewBox="0 0 20 20"><defs><radialGradient id="bg" cx="35%" cy="32%" r="70%"><stop offset="0" stop-color="#ff9a5c"/><stop offset=".7" stop-color="#e2552e"/><stop offset="1" stop-color="#a8371a"/></radialGradient></defs><circle cx="10" cy="10" r="8.5" fill="url(#bg)"/><circle cx="7" cy="6.5" r="2" fill="#fff" opacity=".7"/></svg>';
const BALL_OFF = '<svg viewBox="0 0 20 20"><circle cx="10" cy="10" r="8.5" fill="none" stroke="#1c1c1e" stroke-opacity=".28" stroke-width="2"/></svg>';
function hudBalls() { const n = G.sim ? G.sim.ballsLeft + (G.sim.ball ? 0 : 0) : 0; hud.balls.innerHTML = [0, 1, 2].map(i => i < n ? BALL : BALL_OFF).join(''); }
function setHint(main, sub) { hud.hint.textContent = main; hud.hintSub.textContent = sub || ''; hud.hint.parentElement.classList.toggle('hidden', !main); }
function panel(title, body, btns) {
  hud.ptitle.textContent = title; hud.pbody.textContent = body; hud.pbtns.innerHTML = '';
  for (const [label, fn, ghost] of btns) { const b = document.createElement('button'); b.textContent = label; if (ghost) b.className = 'ghost'; b.addEventListener('click', () => { G.audio.play('ui'); fn(); }); hud.pbtns.appendChild(b); }
  hud.panel.classList.remove('hidden');
}
function closePanel() { hud.panel.classList.add('hidden'); }
function soundIcon() { hud.sound.classList.toggle('off', G.audio.muted); }

// ---------- level flow ----------
async function startLevel(idx, replay) {
  G.state = 'loading'; closePanel();
  const level = LEVELS[Math.max(0, Math.min(LEVELS.length - 1, idx))];
  G.level = level; G.levelIndex = LEVELS.indexOf(level);
  G.sim = new Sim(level); G.aim = null; G.timeScale = 1; G.endTimer = 0;
  G.view.resetEffects();
  await G.view.loadLevel(level); layout();
  hud.level.textContent = level.name; hud.goal.textContent = level.goal; hudBalls();
  setHint(level.hint, 'Release to shoot');
  G.progress.level = G.levelIndex; save(G.progress);
  G.state = 'aim';
  window.KC && window.KC.onLevelStart && window.KC.onLevelStart(level.id);
}
function nextLevel() { if (G.levelIndex + 1 < LEVELS.length) startLevel(G.levelIndex + 1); else { G.progress.cleared = true; save(G.progress); startLevel(0); } }

function onWin() {
  G.state = 'won'; G.timeScale = 0.45; G.slowUntil = G.now + 0.7;
  G.audio.play('switch'); G.view.hitShake(2);
  setTimeout(() => { G.view.openCrate(); G.audio.play('open'); }, 350);
  setTimeout(() => { G.view.celebrate(); G.audio.play('win'); }, 800);
  G.progress.best = Math.max(G.progress.best || 0, G.level.id); save(G.progress);
  setTimeout(() => {
    const last = G.levelIndex + 1 >= LEVELS.length;
    panel(last ? 'All three cleared!' : 'Cat freed!', last ? 'That is the whole core test. Thanks for playing — tell us how it felt.' : `${G.level.name} done with ${G.sim.ballsLeft} ball${G.sim.ballsLeft === 1 ? '' : 's'} to spare.`,
      [[last ? 'Play again' : 'Next level', nextLevel], ['Replay', () => startLevel(G.levelIndex), true]]);
  }, 1500);
}
function onLose() {
  G.state = 'lost'; G.audio.play('fail');
  setHint('', '');
  setTimeout(() => panel('Out of balls', 'The stone never reached the button. Try a different angle or more pull.', [['Try again', () => startLevel(G.levelIndex)]]), 600);
}

// ---------- input: pull to aim ----------
const canvas = G.view.canvas;
function ptr(e) { const t = e.touches ? e.touches[0] || e.changedTouches[0] : e; const r = canvas.getBoundingClientRect(); return { x: t.clientX - r.left, y: t.clientY - r.top }; }
function aimStart(e) {
  G.audio.unlock();
  if (G.state !== 'aim' || G.sim.ball || G.sim.ballsLeft <= 0) return;
  G.aim = { start: ptr(e), pull: { dx: 0, dy: 0 }, ballPos: G.sim.anchor(), preview: [] };
  setHint('', '');
}
function aimMove(e) {
  if (!G.aim) return;
  const p = ptr(e), u = G.view.pxPerUnit();
  let dx = (G.aim.start.x - p.x) / u.x, dy = -(G.aim.start.y - p.y) / u.y;
  const len = Math.hypot(dx, dy); if (len > MAX_PULL) { dx *= MAX_PULL / len; dy *= MAX_PULL / len; }
  G.aim.pull = { dx, dy };
  const a = G.sim.anchor(); G.aim.ballPos = { x: a.x - dx, y: a.y - dy };
  G.aim.preview = len > 0.12 ? G.sim.preview(dx, dy) : [];
}
function aimEnd() {
  if (!G.aim) return;
  const { dx, dy } = G.aim.pull; const len = Math.hypot(dx, dy); G.aim = null;
  if (len < 0.2 || dx < 0.05) { setHint(G.level.hint, 'Release to shoot'); return; } // tiny or backwards pull: cancel
  shoot(dx, dy);
}
function shoot(dx, dy) {
  if (!G.sim.shoot(dx, dy)) return;
  G.sim.shotAt = G.sim.time; G.state = 'flying'; hudBalls(); G.audio.play('shoot', { rate: 0.95 + Math.hypot(dx, dy) * 0.2 });
  setHint('', '');
}
canvas.addEventListener('touchstart', (e) => { aimStart(e); }, { passive: true });
canvas.addEventListener('touchmove', (e) => { if (G.aim) { e.preventDefault(); aimMove(e); } }, { passive: false });
canvas.addEventListener('touchend', () => { aimEnd(); window.scrollTo(0, 120); }, { passive: true });
canvas.addEventListener('touchcancel', () => { G.aim = null; }, { passive: true });
canvas.addEventListener('mousedown', (e) => { if (e.button === 0) aimStart(e); });
window.addEventListener('mousemove', (e) => aimMove(e));
window.addEventListener('mouseup', () => aimEnd());
canvas.addEventListener('contextmenu', (e) => e.preventDefault());

// ---------- buttons ----------
hud.sound.addEventListener('click', () => { G.audio.unlock(); G.audio.setMuted(!G.audio.muted); G.progress.muted = G.audio.muted; save(G.progress); soundIcon(); G.audio.play('ui'); });
hud.pause.addEventListener('click', () => { if (G.state === 'paused' || G.state === 'loading') return; G.audio.play('ui'); pause(); });
function pause() {
  G.pausedFrom = G.state; G.state = 'paused'; G.aim = null;
  panel('Paused', '', [['Resume', resume], ['Restart level', () => startLevel(G.levelIndex), true]]);
}
function resume() { closePanel(); G.state = G.pausedFrom || 'aim'; G.last = performance.now(); }
document.addEventListener('visibilitychange', () => { if (document.hidden && (G.state === 'aim' || G.state === 'flying')) pause(); });

// ---------- loop ----------
G.last = performance.now();
function frame(nowMs) {
  requestAnimationFrame(frame);
  const real = Math.min(0.05, (nowMs - G.last) / 1000); G.last = nowMs; G.now += real;
  if (G.state === 'loading') return;
  const dtv = real; // view animations run in real time
  if (G.state !== 'paused') {
    if (G.slowUntil && G.now > G.slowUntil) { G.timeScale = 1; G.slowUntil = 0; }
    G.acc += real * G.timeScale; let steps = 0;
    while (G.acc >= DT && steps < 8) { G.sim.step(); G.acc -= DT; steps++; }
    for (const e of G.sim.events) handleEvent(e); G.sim.events.length = 0;
  }
  G.lastSnap = G.sim.snapshot();
  const aim = G.aim || ((G.state === 'aim' && !G.sim.ball && G.sim.ballsLeft > 0) ? { ballPos: G.sim.anchor(), preview: [] } : null);
  G.view.sync(G.lastSnap, aim, dtv);
  G.view.render();
}
function handleEvent(e) {
  if (e.type === 'hit') {
    const s = Math.min(1, e.strength / 3);
    if (e.mats.includes('glass')) G.audio.play('glass', { vol: 0.4 + s * 0.6 });
    else if (e.mats.includes('stone') && !e.mats.includes('ground')) G.audio.play('stone', { vol: 0.3 + s * 0.7, minGap: 0.08 });
    else if (e.mats.includes('wood')) G.audio.play(e.mats.includes('ball') ? 'wood' : 'tumble', { vol: 0.3 + s * 0.7, minGap: 0.08 });
    else if (e.mats.includes('ground')) G.audio.play('tumble', { vol: 0.2 + s * 0.4, rate: 0.9, minGap: 0.12 });
    if (e.strength > 1.8) G.view.hitShake(e.strength);
  } else if (e.type === 'break') {
    G.view.breakGlass(e); G.audio.play('glass', { vol: 1 }); G.timeScale = 0.35; G.slowUntil = G.now + 0.45;
  } else if (e.type === 'switch') {
    if (G.state !== 'won') onWin();
  } else if (e.type === 'ballDone') {
    hudBalls();
    if (G.state === 'won') return;
    if (e.left > 0) { G.state = 'aim'; setHint(G.level.hint, 'Release to shoot'); }
    else { G.state = 'ending'; G.endTimer = 0; waitThenLose(); }
  }
}
function waitThenLose() { // give the chain a moment to finish before calling it
  const t0 = G.now;
  const tick = () => { if (G.state !== 'ending') return; if (G.sim.pressed) return; if (G.sim.settled() || G.now - t0 > 3) onLose(); else setTimeout(tick, 120); };
  setTimeout(tick, 400);
}

// ---------- debug / robot hooks (no gameplay effect) ----------
window.KC = {
  get state() { return G.state; }, get level() { return G.level && G.level.id; }, get sim() { return G.sim; },
  shoot: (dx, dy) => { if (G.state === 'aim') shoot(dx, dy); }, start: (i) => startLevel(i), pxPerUnit: () => G.view.pxPerUnit(), anchorPx: () => { const a = G.sim.anchor(); return a; },
  hash: () => G.sim.hash(), settled: () => G.sim.settled(), levels: LEVELS.length,
};

// ---------- boot ----------
soundIcon(); layout();
window.scrollTo(0, 120);
startLevel(Math.min(G.progress.level || 0, LEVELS.length - 1)).then(() => { document.title = 'Knock Chain'; document.body.classList.add('ready'); });
requestAnimationFrame(frame);
