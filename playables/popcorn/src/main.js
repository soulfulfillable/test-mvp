// Pop & Topple — game loop, input, HUD. Physics in physics.js (deterministic), drawing in view.js, sounds in audio.js.
import { Sim } from './physics.js';
import { View } from './view.js';
import { Audio } from './audio.js';
import { LEVELS, DT, MAX_PULL, MIN_PULL } from './levels.js';

const $ = (s) => document.querySelector(s);
const KEY_LEVEL = 'pc.level';
const GHOST = { dx: 0.3825, dy: 0.6625 }; // level 1's proven shot (tools/solve.js) — the hand shows this pull

const canvas = $('#game');
const view = new View(canvas);
const audio = new Audio('audio/');
let sim = null, level = 0, ui = { pull: null, ghost: null }, drag = null, acc = 0, last = 0, shotsThisLevel = 0, firstShotEver = true;
let bannerT = 0;
try { level = Math.min(LEVELS.length - 1, Math.max(0, parseInt(localStorage.getItem(KEY_LEVEL) || '0', 10) || 0)); } catch (e) { /* ignore */ }
try { firstShotEver = localStorage.getItem('pc.shot') !== '1'; } catch (e) { /* ignore */ }

function resize() {
  const w = innerWidth, h = innerHeight; view.resize(w, h, Math.min(devicePixelRatio || 1, 2), sim ? sim.level.cam || {} : {});
  document.body.dataset.mode = view.mode;
}
addEventListener('resize', resize);

function start(i) {
  level = i; sim = new Sim(i); shotsThisLevel = 0; ui.pull = null; drag = null; view.particles.length = 0; view.puffs.length = 0; view.rings.length = 0; view.cornLobes.clear();
  try { localStorage.setItem(KEY_LEVEL, String(i)); } catch (e) { /* ignore */ }
  ui.ghost = (i === 0 && firstShotEver) ? GHOST : null;
  resize();
  $('#lnum').textContent = `Level ${i + 1} of ${LEVELS.length}`;
  $('#lname').textContent = LEVELS[i].name;
  $('#hint').textContent = LEVELS[i].hint;
  $('#hintwrap').classList.toggle('hidden', false);
  $('#panel').classList.add('hidden'); $('#banner').classList.add('hidden');
  hud();
}
function hud() {
  const seeds = $('#seeds'); seeds.innerHTML = '';
  for (let k = 0; k < sim.level.seeds; k++) { const s = document.createElement('i'); s.className = 'kernel' + (k < sim.seedsLeft ? '' : ' used'); seeds.appendChild(s); }
  $('#tcount').textContent = String(sim.targetsLeft);
  $('#tword').textContent = sim.targetsLeft === 1 ? 'target' : 'targets';
}
function panel(title, body, btn, onBtn) {
  $('#panel-title').textContent = title; $('#panel-body').textContent = body;
  const b = $('#panel-btn'); b.textContent = btn; b.onclick = () => { audio.play('ui'); onBtn(); };
  $('#panel').classList.remove('hidden');
}
function banner(text) { const b = $('#banner'); b.textContent = text; b.classList.remove('hidden'); bannerT = 2.2; }

// ---- events from the physics ----
function handle(e) {
  switch (e.type) {
    case 'shoot': audio.play('shoot', 0.8); shotsThisLevel++; ui.ghost = null; if (firstShotEver) { firstShotEver = false; try { localStorage.setItem('pc.shot', '1'); } catch (x) { /* */ } } $('#hintwrap').classList.add('hidden'); break;
    case 'fuse': audio.play('fuse', 0.9); break;
    case 'pop': audio.play('pop', 1); view.burst(e.x, e.y); if (navigator.vibrate) navigator.vibrate(18); break;
    case 'hit': {
      const k = e.kinds; const s = Math.min(1, e.strength / 1.5);
      if (k.includes('cup')) audio.play('cup', 0.4 + s * 0.6, 90);
      else if (k.includes('column') || k.includes('plank') || k.includes('crate')) audio.play('wood', 0.3 + s * 0.7, 60);
      else if (e.strength > 0.5) audio.play('tumble', 0.3 + s * 0.6, 120);
      if (e.strength > 0.6 && !k.includes('seed')) view.dust(e.x, e.y, 4);
      break; }
    case 'down': audio.play('down', 0.9); banner('Target down!'); hud(); break;
    case 'won': audio.play('win', 0.9); setTimeout(showWin, 1100); break;
    case 'lost-level': audio.play('fail', 0.8); setTimeout(() => panel('Out of seeds', 'The target is still up.', 'Try again', () => start(level)), 500); break;
    case 'ready': hud(); break;
    case 'lost': hud(); break;
  }
}
function showWin() {
  if (level + 1 < LEVELS.length) panel('Target down!', `Level ${level + 1} cleared with ${shotsThisLevel} ${shotsThisLevel === 1 ? 'seed' : 'seeds'}.`, 'Next level', () => start(level + 1));
  else panel('All five toppled!', 'Every target is on the table.', 'Play again', () => start(0));
}

// ---- input: pull anywhere, release to shoot ----
function pointerPos(ev) { const r = canvas.getBoundingClientRect(); return { x: ev.clientX - r.left, y: ev.clientY - r.top }; }
function pullFrom(p) { const a = view.toWorld(drag.x, drag.y), b = view.toWorld(p.x, p.y); let dx = a.x - b.x, dy = a.y - b.y; const len = Math.hypot(dx, dy); if (len > MAX_PULL) { dx *= MAX_PULL / len; dy *= MAX_PULL / len; } return { dx: Math.round(dx * 1e4) / 1e4, dy: Math.round(dy * 1e4) / 1e4, len: Math.min(len, MAX_PULL) }; }
canvas.addEventListener('pointerdown', (ev) => {
  audio.unlock();
  if (!sim || sim.phase !== 'aim' || sim.seedsLeft <= 0 || !$('#panel').classList.contains('hidden')) return;
  drag = pointerPos(ev); ui.pull = { dx: 0, dy: 0, len: 0 }; canvas.setPointerCapture(ev.pointerId);
});
canvas.addEventListener('pointermove', (ev) => { if (!drag) return; ui.pull = pullFrom(pointerPos(ev)); });
function release(ev) {
  if (!drag) return; const p = ui.pull = pullFrom(pointerPos(ev)); drag = null;
  if (p.len >= MIN_PULL && sim.phase === 'aim') sim.shoot(p.dx, p.dy);
  ui.pull = null;
}
canvas.addEventListener('pointerup', release); canvas.addEventListener('pointercancel', () => { drag = null; ui.pull = null; });
// iOS in-app sheet: keep the page scrollable (240px buffer) and eat the drag ourselves while aiming
canvas.addEventListener('touchmove', (ev) => { if (drag) ev.preventDefault(); }, { passive: false });
$('#btn-restart').addEventListener('click', () => { audio.unlock(); audio.play('ui'); start(level); });
$('#btn-sound').addEventListener('click', () => { audio.unlock(); audio.setMuted(!audio.muted); $('#btn-sound').classList.toggle('off', audio.muted); audio.play('ui'); });
$('#btn-sound').classList.toggle('off', audio.muted);
$('#panel').addEventListener('pointerdown', (ev) => { if (ev.target === $('#panel')) { $('#panel-btn').click(); } });

// ---- loop ----
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - (last || now)) / 1000); last = now;
  if (sim && sim.phase !== 'won' && sim.phase !== 'lost') {
    acc += dt; let n = 0;
    while (acc >= DT && n < 8) { sim.step(); acc -= DT; n++; }
    if (n === 8) acc = 0;
  } else if (sim) { // keep settling the scene a little after the result so the fall finishes on screen
    acc += dt; let n = 0; while (acc >= DT && n < 8 && sim.time - sim.shotAt < 14) { sim.world.step(DT, 8, 3); sim.time += DT; acc -= DT; n++; }
  }
  if (sim) { for (const e of sim.events) handle(e); sim.events.length = 0; view.draw(sim, ui, dt); }
  if (bannerT > 0) { bannerT -= dt; if (bannerT <= 0) $('#banner').classList.add('hidden'); }
}

// ---- robot / debug API ----
window.PC = {
  get state() { return sim ? sim.phase : 'loading'; }, get level() { return level; }, get seedsLeft() { return sim.seedsLeft; }, get targetsLeft() { return sim.targetsLeft; },
  get shots() { return shotsThisLevel; },
  start, shoot: (dx, dy) => sim.shoot(dx, dy), hash: () => sim.hash(), settled: () => sim.maxSpeed() < 0.06, pxPerUnit: () => view.scale,
  pouchPx: () => ({ x: view.sx(sim.pouch(0, 0).x), y: view.sy(sim.pouch(0, 0).y) }), levels: LEVELS.length, view, sim: () => sim,
};

resize(); start(level); document.body.classList.add('ready'); requestAnimationFrame(frame);
scrollTo(0, 120);
