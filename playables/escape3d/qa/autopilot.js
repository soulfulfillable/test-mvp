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
  function steer([tx, tz], gain = 2.4, cap = 6) {
    const p = g.pos; let vx = (tx - p.x) * gain, vz = (tz - p.z) * gain;
    const v = Math.hypot(vx, vz); if (v > cap) { vx *= cap / v; vz *= cap / v; }
    // world wish → camera-relative stick (the stick is turned by the camera yaw)
    const y = g.camYaw, c = Math.cos(y), s = Math.sin(y);
    stick((vx * c - vz * s) / 6, (vx * s + vz * c) / 6);
  }
  const near = ([x, z], r = 0.35) => Math.hypot(g.pos.x - x, g.pos.z - z) < r;
  const mv = (i, dt = 0) => g.moverAt(i, g.t + dt);
  const M = () => g.movers();
  const trapPhase = () => ((g.t % g.trapPeriod) + g.trapPeriod) % g.trapPeriod;

  // legs: walk to `to`, or (jump legs) wait at `hold` until `ready`, then jump and steer at `aim` until landed near it
  const P = (i, dt = 0) => g.moverAt(i, g.t + dt);
  const L = [
    { cp: 0, to: [3.5, 1.2] },                                   // to the foot of the stairs
    { to: [3.5, -6.5] },                                          // walk up the steps
    { to: [6.2, -6.5] },                                          // onto the catwalk
    { to: [6.2, -10.1] },
    { jump: true, hold: () => [6.2, -10.1], ready: () => true, aim: () => [6.2, -13.4], land: () => g.pos.y > 3.4 && g.pos.z < -12.6 }, // the broken gap
    { to: [6.2, -14.0] },
    { cp: 1, to: [6.2, -16.3] },
    { to: [9.8, -16.3] },                                         // through the hole onto the landing
    { slow: true, to: [11.2, -16.3], until: () => g.pos.y < 0.2 }, // step off, drop to the floor
    { to: [10.6, -16.3] },
    { hold: () => [10.6, -16.3], ready: () => trapPhase() < 0.4, to: [12.7, -16.3] }, // time the steam strip
    { jump: true, hold: () => [12.7, g.pos.z], ready: () => Math.abs(P(0, 0.55).z - g.pos.z) < 0.5, aim: () => { const m = P(0, 0.2); return [m.x, m.z]; }, land: () => g.pos.y < -0.3 && g.pos.y > -0.8 && Math.abs(g.pos.x - 14.3) < 0.9 },
    { jump: true, hold: () => { const m = M()[0]; return [m.x + 0.3, m.z]; }, ready: () => Math.abs(P(1, 0.5).z - P(0, 0.5).z) < 0.5, aim: () => { const m = P(1, 0.2); return [m.x, m.z]; }, land: () => g.pos.y < -0.3 && g.pos.y > -0.8 && Math.abs(g.pos.x - 16.7) < 0.9 },
    { jump: true, hold: () => { const m = M()[1]; return [m.x + 0.3, m.z]; }, ready: () => true, aim: () => [19.2, g.pos.z], land: () => g.pos.y > -0.05 && g.pos.x > 18.1 },
    { to: [19.6, -21.6] },
    { cp: 2, to: [19.1, -23.0] }, { to: [19.1, -26.3] },
    { cp: 3, to: [19.0, -29.5] }, { to: [14.5, -33.6] }, { to: [9.0, -33.6] },
    { runjump: true, to: [0.6, -33.6], at: () => g.pos.x < 5.7, land: () => g.pos.x < 2.0 }, // run-up jump over the live puddle
    { to: [-6.0, -33.6] }, { to: [-6.0, -38.0] }, { to: [0, -38.0] }, { to: [0, -42] },
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
    if (l.runjump && A.phase !== 'air') { // run at full speed, take off at the edge
      steer(l.to, 6, 6); if (g.grounded && l.at()) { A.phase = 'air'; jump(true); A.jumpT = g.t; } return;
    }
    if (A.phase === 'air' && l.runjump) {
      steer(l.to, 6, 6); if (g.grounded && g.t - A.jumpT > 0.15) { jump(false); if (l.land()) A.i++; A.phase = 'go'; } return;
    }
    if (A.phase === 'walk') {
      if (l.slow) { steer(l.to, 2.4, 1.6); if (l.until()) { A.i++; A.phase = 'go'; } return; }
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
