// Escape 3D — trial build: one 3D obstacle course. three.js, own kinematic controller, CC0 hero + sounds.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { buildCourse, GOLD } from './course.js';
import { createPlayer, R as PR, H as PH } from './player.js';
import { createInput } from './input.js';
import { createAudio } from './audio.js';
import { glowTexture, blobTexture } from './textures.js';

const $ = (id) => document.getElementById(id);
const STEP = 1 / 120;
const params = new URLSearchParams(location.search);
const FIXED_DT = params.get('dt') ? 1 / Math.max(10, +params.get('dt')) : 0;

// ---------- renderer / scene ----------
const app = $('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
let pixelRatio = Math.min(devicePixelRatio || 1, 2);
renderer.setPixelRatio(pixelRatio);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
app.prepend(renderer.domElement);

const scene = new THREE.Scene();
const SKY_TOP = new THREE.Color('#7e95a8'), SKY_BOT = new THREE.Color('#c9c3b8');
scene.fog = new THREE.Fog('#b9b4ab', 28, 95);
{ // sky dome: vertical gradient, unaffected by fog
  const geo = new THREE.SphereGeometry(200, 24, 12); const col = [];
  const p = geo.attributes.position; for (let i = 0; i < p.count; i++) { const t = Math.max(0, Math.min(1, p.getY(i) / 120 + 0.25)); const c = SKY_BOT.clone().lerp(SKY_TOP, t); col.push(c.r, c.g, c.b); }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  scene.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false })));
}
scene.add(new THREE.HemisphereLight('#e4ecf2', '#6e655b', 1.35));
const sun = new THREE.DirectionalLight('#fff1dc', 2.3);
sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -11, right: 11, top: 11, bottom: -11, near: 1, far: 40 });
sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.03;
scene.add(sun, sun.target);
const SUN_OFF = new THREE.Vector3(3.5, 14, -6); // light comes from the exit side, shadows fall toward the camera

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 260);
const C = buildCourse(scene);

// ---------- fx: dust puffs, gold sparkles ----------
const glowMap = glowTexture();
const parts = [];
const partGeo = new THREE.PlaneGeometry(1, 1);
function puff(pos, n, color, opts = {}) {
  for (let i = 0; i < n; i++) {
    const mat = new THREE.SpriteMaterial({ map: glowMap, color, transparent: true, opacity: opts.alpha || 0.5, depthWrite: false, blending: opts.add ? THREE.AdditiveBlending : THREE.NormalBlending });
    const s = new THREE.Sprite(mat); const a = Math.random() * Math.PI * 2, sp = (opts.speed || 1.6) * (0.5 + Math.random() * 0.7);
    s.position.copy(pos).add(new THREE.Vector3(Math.cos(a) * 0.2, 0.08, Math.sin(a) * 0.2));
    const size = (opts.size || 0.45) * (0.7 + Math.random() * 0.6); s.scale.setScalar(size);
    scene.add(s);
    parts.push({ s, v: new THREE.Vector3(Math.cos(a) * sp, (opts.up || 0.6) * (0.5 + Math.random()), Math.sin(a) * sp), life: opts.life || 0.5, t: 0, size, grow: opts.grow ?? 1.6, g: opts.g || 0 });
  }
}
function updateParts(dt) {
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i]; p.t += dt; const k = p.t / p.life;
    if (k >= 1) { scene.remove(p.s); p.s.material.dispose(); parts.splice(i, 1); continue; }
    p.v.multiplyScalar(1 - dt * 3); p.v.y -= p.g * dt; p.s.position.addScaledVector(p.v, dt);
    p.s.scale.setScalar(p.size * (1 + k * p.grow)); p.s.material.opacity = (1 - k) * (1 - k) * 0.55;
  }
}
const blob = new THREE.Mesh(partGeo, new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false }));
blob.rotation.x = -Math.PI / 2; blob.renderOrder = 2; scene.add(blob);

// ---------- state ----------
const G = {
  state: 'loading', t: 0, acc: 0, cp: 0, deaths: 0, falls: 0, spikes: 0, runTime: 0, running: false, finished: false, best: null,
  dieT: 0, finishT: 0, introT: 0, stepT: 0, shake: 0, frames: [], introDone: false, cpTimes: [],
};
try { const b = parseFloat(localStorage.getItem('escape3d.best')); if (b > 0) G.best = b; } catch (e) { /* storage blocked */ }
const audio = createAudio('./audio/');
try { if (localStorage.getItem('escape3d.muted') === '1') { audio.setMuted(true); $('btn-sound').classList.add('off'); } } catch (e) { /* */ }

const input = createInput({
  stickZone: $('stick-zone'), stickBase: $('stick'), stickKnob: $('knob'), jumpBtn: $('jump'),
  onFirst: () => { audio.unlock(); document.body.classList.add('moved'); },
});
addEventListener('touchstart', () => audio.unlock(), { passive: true });
addEventListener('mousedown', () => audio.unlock());

$('btn-sound').addEventListener('click', (e) => {
  e.stopPropagation(); const m = !audio.muted; audio.setMuted(m); $('btn-sound').classList.toggle('off', m);
  try { localStorage.setItem('escape3d.muted', m ? '1' : '0'); } catch (err) { /* */ }
});
$('btn-again').addEventListener('click', () => restart());
addEventListener('keydown', (e) => { if (G.state === 'finish' && G.finishT > 1.2 && (e.code === 'Enter' || e.code === 'Space')) restart(); });

// ---------- load hero ----------
let P;
const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
loader.load('./assets/hero.glb', (gltf) => {
  P = createPlayer(gltf, scene);
  P.reset(C.checkpoints[0].pos);
  P.facing = Math.PI;
  G.state = params.has('nointro') ? 'play' : 'intro';
  if (G.state === 'play') G.introDone = true;
  resize(); scene.updateMatrixWorld(true); placeCamera(1, true);
  document.title = 'Escape 3D';
  document.body.classList.add('ready');
  requestAnimationFrame(frame);
}, undefined, (err) => { console.error('hero failed to load', err); $('loading').textContent = 'Could not load. Pull to refresh.'; });

// ---------- camera ----------
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
const ray = new THREE.Raycaster();
let camYLevel = 0;
function desiredCamera(outPos, outLook) {
  const p = P.pos;
  // follow height smoothly; don't dive into a pit after a fall
  const groundY = P.grounded ? P.pos.y : Math.max(camYLevel - 1.5, Math.min(camYLevel, p.y));
  camYLevel += (groundY - camYLevel) * 0.08;
  const portrait = innerHeight > innerWidth * 1.1;
  const back = portrait ? 8.2 : 7.0, up = portrait ? 4.9 : 3.8;
  outLook.set(p.x * 0.55, camYLevel + (portrait ? -1.4 : 0.2), p.z - 6.5);
  outPos.set(p.x * 0.55, camYLevel + up, p.z + back);
}
function placeCamera(dt, snap) {
  const tp = new THREE.Vector3(), tl = new THREE.Vector3();
  desiredCamera(tp, tl);
  if (snap) { camPos.copy(tp); camLook.copy(tl); }
  else { const k = 1 - Math.exp(-dt * 7); camPos.lerp(tp, k); camLook.lerp(tl, 1 - Math.exp(-dt * 9)); }
  // keep walls out of the view line: if anything solid sits between the hero and the camera, put the camera in front of it
  const head = P.pos.clone(); head.y += PH * 0.8;
  const dir = camPos.clone().sub(head); const dist = dir.length(); dir.normalize();
  ray.set(head, dir); ray.far = dist;
  const hit = ray.intersectObjects(C.walls, false)[0];
  if (hit) camPos.copy(head).addScaledVector(dir, Math.max(0.6, hit.distance - 0.35));
  camera.position.copy(camPos);
  if (G.shake > 0) camera.position.add(new THREE.Vector3((Math.random() - 0.5) * G.shake, (Math.random() - 0.5) * G.shake, 0));
  camera.lookAt(camLook);
}
// intro: open on the glowing exit, then glide back to the hero (any input skips)
const INTRO_LEN = 2.4;
function introCamera(t) {
  const tp = new THREE.Vector3(), tl = new THREE.Vector3(); desiredCamera(tp, tl);
  const k = Math.min(1, Math.max(0, (t - 0.7) / (INTRO_LEN - 0.7))); const e = k * k * (3 - 2 * k);
  const fromPos = new THREE.Vector3(0, 5.2, -42), fromLook = new THREE.Vector3(0, 3.2, -58);
  camera.position.lerpVectors(fromPos, tp, e); camLook.lerpVectors(fromLook, tl, e); camera.lookAt(camLook);
  camPos.copy(camera.position);
}

// ---------- game flow ----------
function startClock() { if (!G.running && !G.finished) { G.running = true; } }
function die(kind) {
  if (G.state !== 'play') return;
  G.state = 'dying'; G.dieT = 0; G.deaths++; if (kind === 'spike') G.spikes++; else G.falls++;
  P.frozen = true; input.release();
  audio.play(kind === 'spike' ? 'spike' : 'land', { vol: kind === 'spike' ? 0.9 : 0.5, rate: kind === 'spike' ? 1 : 0.6 });
  if (kind === 'spike') { G.shake = 0.18; flash('hurt'); puff(P.pos.clone().add(new THREE.Vector3(0, 0.5, 0)), 10, '#ffffff', { speed: 2.4, alpha: 0.6, life: 0.4 }); }
  else flash('fall');
  vibrate(kind === 'spike' ? [30, 40, 30] : 25);
}
function respawn() {
  const cp = C.checkpoints[G.cp];
  P.reset(cp.pos); camYLevel = cp.pos.y;
  G.state = 'play';
  puff(cp.pos.clone(), 14, GOLD, { speed: 2.2, add: true, alpha: 0.9, life: 0.6, size: 0.35, up: 1.6 });
  audio.play('respawn', { vol: 0.45 });
  P.squash = 0.25;
  $('flash').className = '';
}
function reachCheckpoint(cp) {
  G.cp = cp.i; C.light(cp); G.cpTimes.push(G.runTime);
  audio.play('checkpoint', { vol: 0.8 }); vibrate(15);
  puff(cp.pos.clone(), 18, GOLD, { speed: 3, add: true, alpha: 0.9, life: 0.8, size: 0.32, up: 2.2 });
  updateDots();
}
function finish() {
  G.state = 'finish'; G.finished = true; G.running = false; G.finishT = 0; P.frozen = true; input.release();
  P.vel.set(0, 0, 0); P.facing = 0; P.cheer();
  audio.play('exit', { vol: 0.9 }); vibrate([20, 60, 40]);
  const newBest = !G.best || G.runTime < G.best; if (newBest) { G.best = G.runTime; try { localStorage.setItem('escape3d.best', String(G.best)); } catch (e) { /* */ } }
  G.newBest = newBest;
  for (let i = 0; i < 3; i++) setTimeout(() => puff(P.pos.clone().add(new THREE.Vector3(0, 1.2, 0)), 22, i === 1 ? '#ffffff' : GOLD, { speed: 4.5, add: true, alpha: 1, life: 1.1, size: 0.3, up: 4, g: 5, grow: 0.4 }), i * 260);
  $('flash').className = 'win';
  updateDots();
}
function restart() {
  G.cp = 0; G.deaths = G.falls = G.spikes = 0; G.runTime = 0; G.running = false; G.finished = false; G.cpTimes = [];
  for (const cp of C.checkpoints) if (cp.i > 0) C.unlight(cp);
  C.exit.open = 0; C.exit.opening = false;
  $('panel').classList.add('hidden'); $('flash').className = ''; document.body.classList.remove('done');
  P.reset(C.checkpoints[0].pos); camYLevel = 0; placeCamera(1, true);
  G.state = 'play'; updateDots(); audio.play('respawn', { vol: 0.4 });
}
function vibrate(p) { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* */ } }
function flash(kind) { const f = $('flash'); f.className = ''; void f.offsetWidth; f.className = kind; }

function fmt(t) { const m = Math.floor(t / 60), s = t - m * 60; return m + ':' + (s < 10 ? '0' : '') + s.toFixed(1); }
function updateDots() {
  const dots = $('dots').children;
  for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', i < 2 ? G.cp >= i + 1 : G.finished);
}

// ---------- per-step simulation ----------
const _in = { x: 0, z: 0, jumpPressed: false, jumpHeld: false };
function simStep(inp) {
  G.t += STEP;
  C.step(G.t);
  if (G.state !== 'play') { P.step(STEP, { x: 0, z: 0, jumpPressed: false, jumpHeld: false }, C.solids); return; }
  if (!G.running && (Math.abs(inp.x) + Math.abs(inp.z) > 0.05 || inp.jumpPressed)) startClock();
  if (G.running) G.runTime += STEP;
  P.step(STEP, inp, C.solids);
  if (P.jumped) { audio.play('jump', { vol: 0.35, rate: 1.1 }); puff(P.pos, 4, '#d9d2c7', { speed: 1.2, alpha: 0.4, life: 0.35 }); }
  if (P.landed) {
    const v = P.lastFallSpeed; if (v > 3) { audio.play('land', { vol: Math.min(0.8, 0.25 + v * 0.04) }); puff(P.pos, v > 9 ? 9 : 5, '#d9d2c7', { speed: 1.4 + v * 0.08, alpha: 0.5, life: 0.45 }); }
  }
  // footsteps
  const hs = Math.hypot(P.vel.x, P.vel.z);
  if (P.grounded && hs > 1.2) { G.stepT -= STEP * (hs / P.SPEED); if (G.stepT <= 0) { G.stepT = 0.3; audio.play('step', { vol: 0.22, rate: 0.9 + Math.random() * 0.25, minGap: 0.12 }); if (hs > 4 && Math.random() < 0.5) puff(P.pos, 1, '#d9d2c7', { speed: 0.5, alpha: 0.3, life: 0.35, size: 0.3 }); } }
  else G.stepT = 0.05;
  // hazards
  for (const hz of C.hazards) {
    if (!hz.active) continue;
    if (P.pos.y > hz.max.y || P.pos.y + PH < hz.min.y) continue;
    const cx = Math.max(hz.min.x, Math.min(P.pos.x, hz.max.x)), cz = Math.max(hz.min.z, Math.min(P.pos.z, hz.max.z));
    const r = PR * 0.75; if ((P.pos.x - cx) ** 2 + (P.pos.z - cz) ** 2 < r * r) { die('spike'); return; }
  }
  if (P.pos.y < -4) { die('fall'); return; }
  // checkpoints
  for (const cp of C.checkpoints) {
    if (cp.i <= G.cp) continue;
    if (Math.hypot(P.pos.x - cp.pos.x, P.pos.z - cp.pos.z) < 1.0 && Math.abs(P.pos.y - cp.pos.y) < 0.6) reachCheckpoint(cp);
  }
  // exit: the door opens as you get close; walk through to finish
  const E = C.exit;
  if (!E.opening && P.pos.z < E.z + 7 && P.pos.y > E.y - 0.5) { E.opening = true; audio.play('door', { vol: 0.7, rate: 0.8 }); }
  if (P.pos.z < E.trigger.z - 0.3 && Math.abs(P.pos.x) < E.trigger.x + 0.3) finish();
}

// ---------- frame ----------
let last = performance.now();
const fpsWin = [];
function frame(now) {
  requestAnimationFrame(frame);
  let dt = (now - last) / 1000; last = now; if (dt > 0.1) dt = 0.1;
  if (FIXED_DT) dt = FIXED_DT; // test switch (?dt=60): every frame advances exactly 1/60 s, so a slow headless run is deterministic
  const cpu0 = performance.now();
  G.frames.push(dt); if (G.frames.length > 600) G.frames.shift();

  if (G.state === 'intro') {
    G.introT += dt;
    const inp = input.read();
    if (G.introT >= INTRO_LEN || inp.jumpPressed || Math.abs(inp.x) + Math.abs(inp.z) > 0.1) { G.state = 'play'; G.introDone = true; placeCamera(1, true); }
    else introCamera(G.introT);
  }
  if (G.state !== 'intro') {
    const inp = (G.state === 'play') ? input.read() : (input.read(), { x: 0, z: 0, jumpPressed: false, jumpHeld: false });
    G.acc += dt;
    // a press is kept until a physics step consumes it (a 144 Hz screen can have frames with no step)
    if (inp.jumpPressed) G.pendingJump = true;
    let n = 0;
    while (G.acc >= STEP && n < 12) {
      _in.x = inp.x; _in.z = inp.z; _in.jumpHeld = inp.jumpHeld || G.pendingJump; _in.jumpPressed = G.pendingJump; G.pendingJump = false;
      simStep(_in); G.acc -= STEP; n++;
    }
    if (n === 12) G.acc = 0;
    if (G.state === 'dying') { G.dieT += dt; if (G.dieT > 0.45) respawn(); }
    if (G.state === 'finish') {
      G.finishT += dt;
      if (G.finishT > 1.3 && $('panel').classList.contains('hidden')) showPanel();
    }
    placeCamera(dt, false);
  }
  C.visual(G.t, dt);
  P.render(dt);
  updateParts(dt);
  G.shake = Math.max(0, G.shake - dt * 0.6);
  // blob shadow: on the highest surface under the hero
  let top = -Infinity;
  for (const b of C.solids) { if (b.top <= P.pos.y + 0.05 && P.pos.x > b.min.x && P.pos.x < b.max.x && P.pos.z > b.min.z && P.pos.z < b.max.z && b.top > top) top = b.top; }
  blob.visible = top > -Infinity;
  if (blob.visible) { const h = P.pos.y - top; blob.position.set(P.pos.x, top + 0.02, P.pos.z); const s = 0.9 * Math.max(0.45, 1 - h * 0.12); blob.scale.set(s, s, 1); blob.material.opacity = Math.max(0.25, 1 - h * 0.15); }
  // light follows the hero (tight shadow box = crisp shadows on phones)
  sun.target.position.set(P.pos.x * 0.5, P.pos.y, P.pos.z - 3); sun.position.copy(sun.target.position).add(SUN_OFF);
  // HUD
  $('time').textContent = fmt(G.runTime);
  renderer.render(scene, camera);
  G.cpu = performance.now() - cpu0;
  adapt(dt);
}

// drop resolution if the phone can't keep up (checked every 2 s)
let adaptT = 0, adaptN = 0, adaptSum = 0;
function adapt(dt) {
  adaptT += dt; adaptN++; adaptSum += dt;
  if (adaptT < 2) return;
  const avg = adaptSum / adaptN; adaptT = adaptN = adaptSum = 0;
  if (avg > 1 / 45 && pixelRatio > 1) { pixelRatio = Math.max(1, pixelRatio - 0.25); renderer.setPixelRatio(pixelRatio); resize(); }
}

function showPanel() {
  $('p-time').textContent = fmt(G.runTime);
  $('p-sub').textContent = G.newBest ? (G.deaths ? `New best · ${G.deaths} ${G.deaths === 1 ? 'retry' : 'retries'}` : 'New best · no retries') : `Best ${fmt(G.best)} · ${G.deaths} ${G.deaths === 1 ? 'retry' : 'retries'}`;
  $('panel').classList.remove('hidden'); document.body.classList.add('done');
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false); camera.aspect = w / h;
  camera.fov = w / h < 0.75 ? 62 : 52; camera.updateProjectionMatrix();
  document.body.dataset.mode = w / h < 0.9 ? 'portrait' : 'landscape';
}
addEventListener('resize', resize);
resize();
const coarse = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
document.body.classList.toggle('touch', coarse);
// keep the scroll buffer engaged (in-app browser sheets)
addEventListener('touchend', () => { if (scrollY !== 120) scrollTo(0, 120); }, { passive: true });
scrollTo(0, 120);

// ---------- test hooks (read-only state for the QA robot) ----------
window.__game = {
  get state() { return G.state; }, get t() { return G.t; }, get runTime() { return G.runTime; }, get cp() { return G.cp; },
  get deaths() { return G.deaths; }, get falls() { return G.falls; }, get spikes() { return G.spikes; }, get finished() { return G.finished; },
  get pos() { return P ? { x: P.pos.x, y: P.pos.y, z: P.pos.z } : null; }, get grounded() { return !!(P && P.grounded); },
  get anim() { return P && P.anim; }, get doorOpen() { return C.exit.open; }, get pixelRatio() { return pixelRatio; },
  movers: () => C.movers.map((m) => ({ x: m.pos.x, y: m.pos.y, z: m.pos.z, W: m.W, D: m.D })),
  moverAt: (i, t) => { const v = C.movers[i].at(t); return { x: v.x, z: v.z }; },
  trap: (t) => C.trapHeight(C.traps[0], t ?? G.t), trapPeriod: C.traps[0].period,
  frames: () => G.frames.slice(), cpu: () => G.cpu, calls: () => renderer.info.render.calls, tris: () => renderer.info.render.triangles,
  camera: () => ({ x: camera.position.x, y: camera.position.y, z: camera.position.z }),
  project: (x, y, z) => { const v = new THREE.Vector3(x, y, z).project(camera); return { x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight, inFront: v.z < 1 }; },
};
