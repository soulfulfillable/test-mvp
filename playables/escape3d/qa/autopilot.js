// Escape 3D — QA autopilot. Injected by robot.cjs into the page. It plays the course through the REAL touch
// controls: it dispatches TouchEvents on the joystick zone (analog: knob offset = wanted speed) and on the jump
// button, exactly like a thumb would. It reads only the public, read-only window.__game state.
(() => {
  const g = window.__game;
  const zone = document.getElementById('stick-zone'), jumpEl = document.getElementById('jump');
  let stickOn = false, ox = 0, oy = 0, jumpDown = false;
  const T = (target, x, y, id) => new Touch({ identifier: id, target, clientX: x, clientY: y, radiusX: 6, radiusY: 6, force: 1 });
  function fire(el, type, t) {
    const live = type === 'touchend' || type === 'touchcancel' ? [] : [t];
    el.dispatchEvent(new TouchEvent(type, { cancelable: true, bubbles: true, touches: live, targetTouches: live, changedTouches: [t] }));
  }
  function stick(ix, iz) { // wanted velocity / max, world axes (stick up = −z)
    const a = Math.hypot(ix, iz);
    if (a < 0.03) { if (stickOn) { fire(zone, 'touchend', T(zone, ox, oy, 7)); stickOn = false; } return; }
    if (!stickOn) { const r = zone.getBoundingClientRect(); ox = r.left + 110; oy = r.bottom - 120; fire(zone, 'touchstart', T(zone, ox, oy, 7)); stickOn = true; }
    const m = 0.12 + Math.min(1, a) * 0.6, d = m * 52;
    fire(zone, 'touchmove', T(zone, ox + (ix / a) * d, oy + (iz / a) * d, 7));
  }
  function jump(on) {
    if (on === jumpDown) return; jumpDown = on;
    const r = jumpEl.getBoundingClientRect(); const t = T(jumpEl, r.left + r.width / 2, r.top + r.height / 2, 9);
    fire(jumpEl, on ? 'touchstart' : 'touchend', t);
  }
  function steer([tx, tz], gain = 2.4) {
    const p = g.pos; let vx = (tx - p.x) * gain, vz = (tz - p.z) * gain;
    const v = Math.hypot(vx, vz); if (v > 6) { vx *= 6 / v; vz *= 6 / v; }
    stick(vx / 6, vz / 6);
  }
  const near = ([x, z], r = 0.35) => Math.hypot(g.pos.x - x, g.pos.z - z) < r;
  const mv = (i, dt = 0) => g.moverAt(i, g.t + dt);
  const M = () => g.movers();
  const trapPhase = () => ((g.t % g.trapPeriod) + g.trapPeriod) % g.trapPeriod;

  // legs: walk to `to`, or (jump legs) wait at `hold` until `ready`, then jump and steer at `aim` until landed near it
  const L = [
    { cp: 0, to: [2, -6] }, { to: [2, -10.4] }, { to: [-2, -11.4] }, { to: [-2, -14.3] },
    { hold: () => [-2, -14.3], ready: () => trapPhase() < 0.55, to: [-2, -18.6] },
    { to: [-2, -21.0] }, { to: [0, -21.6] },
    { cp: 1, to: [0, -22.1] },
    { jump: true, hold: () => [0, -22.1], ready: () => Math.abs(mv(0, 0.6).x) < 0.5, aim: () => { const m = mv(0, 0.25); return [m.x, m.z]; }, land: () => Math.abs(g.pos.z - M()[0].z) < 1.2 && g.pos.y > -0.2 },
    { jump: true, hold: () => { const m = M()[0]; return [m.x, m.z - 0.6]; }, ready: () => mv(1, 0.55).z > -28.9 && Math.abs(M()[0].x) < 1.2, aim: () => { const m = mv(1, 0.25); return [m.x, m.z]; }, land: () => Math.abs(g.pos.z - M()[1].z) < 1.2 && g.pos.y > -0.2 },
    { jump: true, hold: () => { const m = M()[1]; return [m.x, m.z - 0.6]; }, ready: () => M()[1].z < -30.4 && Math.abs(mv(2, 0.55).x) < 0.6, aim: () => { const m = mv(2, 0.25); return [m.x, m.z]; }, land: () => Math.abs(g.pos.z - M()[2].z) < 1.2 && g.pos.y > -0.2 },
    { jump: true, hold: () => { const m = M()[2]; return [m.x, m.z - 0.6]; }, ready: () => Math.abs(M()[2].x) < 1.4, aim: () => [0, -38.2], land: () => g.pos.z < -37.2 },
    { to: [0, -38.6] },
    { cp: 2, to: [-1.2, -39.9] },
    { jump: true, hold: () => [-1.2, -39.9], ready: () => true, aim: () => [-1.2, -42.1], land: () => g.pos.y > 0.45 },
    { to: [-0.7, -42.6] },
    { jump: true, hold: () => [-0.7, -42.6], ready: () => true, aim: () => [1.1, -44.9], land: () => g.pos.y > 0.95 },
    { to: [0.8, -45.4] },
    { jump: true, hold: () => [0.8, -45.4], ready: () => true, aim: () => [-0.6, -47.7], land: () => g.pos.y > 1.4 },
    { to: [-0.5, -48.3] },
    { jump: true, hold: () => [-0.5, -48.3], ready: () => true, aim: () => [0, -51.0], land: () => g.pos.y > 1.85 && g.pos.z < -50 },
    { to: [0, -56] }, { to: [0, -61] },
  ];
  const cpStart = {}; L.forEach((l, i) => { if (l.cp !== undefined) cpStart[l.cp] = i; });

  const A = { i: 0, phase: 'go', deaths: 0, log: [], running: false, legStart: 0 };
  function tick() {
    if (!A.running) return;
    requestAnimationFrame(tick);
    if (g.finished) { stick(0, 0); jump(false); A.running = false; A.log.push(['finished', g.runTime]); return; }
    if (g.state !== 'play') { stick(0, 0); jump(false); return; }
    if (g.deaths !== A.deaths) { A.deaths = g.deaths; A.log.push(['death', A.i, g.cp]); A.i = cpStart[g.cp]; A.phase = 'go'; stick(0, 0); jump(false); return; }
    const l = L[A.i]; if (!l) { stick(0, 0); return; }
    if (A.phase === 'go') {
      if (l.hold) {
        steer(l.hold());
        if (near(l.hold(), 0.4) && g.grounded && l.ready()) {
          if (l.jump) { A.phase = 'air'; jump(true); A.jumpT = g.t; steer(l.aim()); return; }
          A.phase = 'walk';
        }
        return;
      }
      A.phase = 'walk';
    }
    if (A.phase === 'walk') {
      steer(l.to); if (near(l.to, 0.4)) { A.i++; A.phase = 'go'; }
      return;
    }
    if (A.phase === 'air') {
      steer(l.aim(), 3.2);
      if (g.grounded && g.t - A.jumpT > 0.15) { jump(false); if (l.land()) { A.i++; A.phase = 'go'; } else { A.phase = 'go'; } }
    }
  }
  window.__auto = { stop() { A.running = false; stick(0, 0); jump(false); }, start() { A.running = true; A.deaths = g.deaths; requestAnimationFrame(tick); }, get leg() { return A.i; }, get log() { return A.log; }, get running() { return A.running; }, stick, jump };
})();
