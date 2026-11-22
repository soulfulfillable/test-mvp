// Arrow Topple — drawing, input, sound. Physics lives in sim.js.
// Flat cartoon rules: one outline weight (LW), one light (top-left), a handful of colours.
(function () {
  'use strict';
  var Sim = ATSim.Sim, C = ATSim.C, NLEV = ATSim.LEVELS.length;
  var OUT = '#3A2A22', SKY = '#BFE8F8', CREAM = '#FFF8EA', CREAM_S = '#EADFC8', GRASS = '#8FCB5B', GRASS_S = '#79B84A', HILL = '#B4DD88',
    WOOD = '#E2A85F', WOOD_S = '#C68A44', GREY = '#93A0B5', GREY_S = '#76839C', RED = '#EC5A46', RED_S = '#C9432F', SKIN = '#F6CDA4', DARK = '#54423A';
  var LW = 0.055, LIGHT = { x: -0.55, y: 0.83 };
  var cv = document.getElementById('c'), ctx = cv.getContext('2d');
  var muteBtn = document.getElementById('mute'), againBtn = document.getElementById('again');
  var W = 0, H = 0, DPR = 1, S = 40, OX = 0, GY = 0, fgScale = 1;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sim, T = 0, timeScale = 1, acc = 0, slowT = 0, zoom = 1, hitstop = 0, shake = 0;
  var aim = null, drag = null, ghost = null, parts = [], stringT = 9, recoil = 0;
  var demo = { t: -0.7, runs: 0, active: false, lastTouch: 0 }, endT = -1, cheer = 0, counts = { slowmo: 0, sticks: 0, demo: 0 };
  var sheep = [{ x: 0.75, j: 0, ph: 0 }, { x: 2.3, j: 0, ph: 1.7 }, { x: 3.75, j: 0, ph: 3.1 }], sheepRun = null;
  var fleeing = [], muted = false, steps = 0, fireStep = -1, level = 0, camX = 6;
  try { muted = localStorage.getItem('at_mute') === '1'; level = Math.max(0, Math.min(NLEV - 1, parseInt(localStorage.getItem('at_level') || '0', 10) || 0)); } catch (e) { }

  // ---------- sound: four tiny synth voices ----------
  var AC = null, lastKnock = 0;
  function audio() { if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { } } if (AC && AC.state === 'suspended') AC.resume(); return AC; }
  function tone(type, f0, f1, dur, vol, delay) {
    if (muted || !AC) return; var t = AC.currentTime + (delay || 0), o = AC.createOscillator(), g = AC.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur); o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + 0.02);
  }
  function sTwang(p) { tone('triangle', 240 + 160 * p, 90, 0.22, 0.25); tone('sawtooth', 900, 200, 0.06, 0.05); }
  function sKnock(s) { if (T - lastKnock < 0.05) return; lastKnock = T; var v = Math.min(0.3, 0.05 + s * 0.03); tone('sine', 190 + (s * 37 % 90), 70, 0.11, v); tone('square', 520 + (s * 53 % 200), 180, 0.035, v * 0.25); }
  function sYelp() { tone('sawtooth', 620, 240, 0.28, 0.07); }
  function sWin() { [523, 659, 784, 1047].forEach(function (f, i) { tone('triangle', f, f, 0.22, 0.16, i * 0.11); }); }
  function buzz(ms) { try { if (!muted && navigator.vibrate) navigator.vibrate(ms); } catch (e) { } }

  // ---------- layout ----------
  function resize() {
    var app = document.getElementById('app'); W = app.clientWidth; H = app.clientHeight; DPR = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    S = Math.min(W / 19.0, H / 11.5); OX = (W - 19.0 * S) / 2 - 0.3 * S;
    var spare = H - 11.5 * S; GY = spare * 0.56 + 9.9 * S;      // ground line; tall phones get sky above and a meadow below
    fgScale = 1;
  }
  function wx(x) { return OX + x * S; } function wy(y) { return GY - y * S; }
  function maxPull() { return Math.max(96, Math.min(210, Math.min(W, H) * 0.36)); }

  // ---------- drawing helpers (world units, y up) ----------
  function world(z, cx, cy, sx, sy) { // camera
    var k = S * z * DPR, tx = (wx(cx) - cx * S * z + (sx || 0)) * DPR, ty = (wy(cy) + cy * S * z + (sy || 0)) * DPR;
    ctx.setTransform(k, 0, 0, -k, tx, ty); ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.lineWidth = LW;
  }
  function ink(path, fill, shade, ang) {   // fill + world-fixed shade on the side away from the light + outline
    ctx.beginPath(); path();
    if (shade) {
      ctx.save(); ctx.fillStyle = shade; ctx.fill(); ctx.clip();
      var a = -(ang || 0), lx = LIGHT.x * Math.cos(a) - LIGHT.y * Math.sin(a), ly = LIGHT.x * Math.sin(a) + LIGHT.y * Math.cos(a);
      ctx.translate(lx * 0.085, ly * 0.085); ctx.beginPath(); path(); ctx.fillStyle = fill; ctx.fill(); ctx.restore(); ctx.beginPath(); path();
    } else { ctx.fillStyle = fill; ctx.fill(); }
    ctx.strokeStyle = OUT; ctx.lineWidth = LW; ctx.stroke();
  }
  function rr(x, y, w, h, r) { return function () { var x0 = x - w / 2, y0 = y - h / 2; r = Math.min(r, w / 2, h / 2); ctx.moveTo(x0 + r, y0); ctx.arcTo(x0 + w, y0, x0 + w, y0 + h, r); ctx.arcTo(x0 + w, y0 + h, x0, y0 + h, r); ctx.arcTo(x0, y0 + h, x0, y0, r); ctx.arcTo(x0, y0, x0 + w, y0, r); ctx.closePath(); }; }
  function el(x, y, rx, ry, rot) { return function () { ctx.ellipse(x, y, rx, ry, rot || 0, 0, 6.2832); }; }
  function limb(x0, y0, x1, y1, w, col) { ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.strokeStyle = OUT; ctx.lineWidth = w + LW * 2; ctx.stroke(); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke(); ctx.lineWidth = LW; }
  function dot(x, y, r, col) { ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fillStyle = col; ctx.fill(); }
  function line(pts, w, col) { ctx.beginPath(); ctx.moveTo(pts[0], pts[1]); for (var i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]); ctx.strokeStyle = col || OUT; ctx.lineWidth = w || LW; ctx.stroke(); ctx.lineWidth = LW; }
  function shadow(x, w) { ctx.beginPath(); ctx.ellipse(x + 0.12, -0.03, w, 0.09, 0, 0, 6.2832); ctx.fillStyle = GRASS_S; ctx.fill(); }
  function star(x, y, r, col) { ctx.beginPath(); for (var i = 0; i < 10; i++) { var a = i * 0.6283 + 1.5708, q = i % 2 ? r * 0.45 : r; ctx.lineTo(x + Math.cos(a) * q, y + Math.sin(a) * q); } ctx.closePath(); ctx.fillStyle = col; ctx.fill(); ctx.strokeStyle = OUT; ctx.lineWidth = LW * 0.8; ctx.stroke(); ctx.lineWidth = LW; }

  // ---------- scenery ----------
  function scenery() {
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.fillStyle = SKY; ctx.fillRect(0, 0, W, H);
    var sx = Math.max(wx(0.3), 0) + S * 1.5, sy = Math.max(S * 1.3, GY - S * 9.4);
    ctx.beginPath(); ctx.arc(sx, sy, S * 0.62, 0, 6.2832); ctx.fillStyle = CREAM; ctx.fill();   // sun = the light, top-left
    for (var i = 0; i < 4; i++) {
      var cxp = ((i * 0.31 + T * 0.004 * (1 + i * 0.3)) % 1.3 - 0.15) * W, cyp = GY - S * (5.3 + (i % 2) * 1.2 + (i > 1 ? Math.max(0, GY / S - 8) * 0.6 : 0)), r = S * (0.42 + (i % 3) * 0.1);
      if (cyp < S * 0.4) continue;
      ctx.fillStyle = CREAM; ctx.beginPath(); ctx.arc(cxp, cyp, r, 0, 6.2832); ctx.arc(cxp + r * 0.95, cyp + r * 0.12, r * 0.78, 0, 6.2832); ctx.arc(cxp - r * 0.9, cyp + r * 0.18, r * 0.66, 0, 6.2832); ctx.rect(cxp - r * 1.4, cyp + r * 0.2, r * 2.9, r * 0.62); ctx.fill();
    }
    ctx.fillStyle = HILL;
    ctx.beginPath(); ctx.ellipse(W * 0.22, GY + S * 0.4, Math.max(W * 0.5, S * 5), S * 1.9, 0, 0, 6.2832); ctx.fill();
    ctx.beginPath(); ctx.ellipse(W * 0.86, GY + S * 0.4, Math.max(W * 0.42, S * 4), S * 1.3, 0, 0, 6.2832); ctx.fill();
    ctx.fillStyle = GRASS; ctx.fillRect(0, GY, W, H - GY);
    ctx.strokeStyle = OUT; ctx.lineWidth = LW * S; ctx.beginPath(); ctx.moveTo(0, GY); ctx.lineTo(W, GY); ctx.stroke();
    ctx.strokeStyle = GRASS_S; ctx.lineWidth = LW * S; ctx.lineCap = 'round';
    for (var k = 0; k < 26; k++) {   // grass ticks + a few flowers, fixed pattern
      var gx = ((k * 0.381966) % 1) * W, gy = GY + S * 0.3 + ((k * 0.7548) % 1) * (H - GY - S * 0.4);
      ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(gx - S * 0.07, gy - S * 0.16); ctx.moveTo(gx + S * 0.1, gy); ctx.lineTo(gx + S * 0.14, gy - S * 0.2); ctx.stroke();
      if (k % 5 === 0) { ctx.fillStyle = CREAM; ctx.beginPath(); ctx.arc(gx + S * 0.4, gy - S * 0.05, S * 0.07, 0, 6.2832); ctx.fill(); }
    }
  }

  // ---------- blocks ----------
  function drawItem(it) {
    var p = it.body.getPosition(), a = it.body.getAngle(), w = it.w, h = it.h;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(a);
    if (it.kind === 'plank') {
      ink(rr(0, 0, w, h, 0.04), WOOD, WOOD_S, a); line([-w * 0.3, 0.02, -w * 0.05, 0.02], LW * 0.7, WOOD_S); line([w * 0.12, -0.02, w * 0.36, -0.02], LW * 0.7, WOOD_S);
    } else if (it.kind === 'log') {
      ink(rr(0, 0, w, h, 0.1), WOOD, WOOD_S, a); line([-w * 0.12, h * 0.2, -w * 0.12, h * 0.05], LW * 0.7, WOOD_S); line([w * 0.1, -h * 0.1, w * 0.1, -h * 0.28], LW * 0.7, WOOD_S);
      ctx.beginPath(); ctx.ellipse(0, h * 0.34, w * 0.2, 0.05, 0, 0, 6.2832); ctx.strokeStyle = WOOD_S; ctx.lineWidth = LW * 0.7; ctx.stroke(); ctx.lineWidth = LW;
    } else if (it.kind === 'stone') {
      ink(function () { ctx.moveTo(-w / 2 + 0.1, -h / 2); ctx.lineTo(w / 2 - 0.06, -h / 2); ctx.lineTo(w / 2, -h * 0.1); ctx.lineTo(w / 2 - 0.14, h / 2); ctx.lineTo(-w / 2 + 0.2, h / 2); ctx.lineTo(-w / 2, h * 0.05); ctx.closePath(); }, GREY, GREY_S, a);
      line([-0.2, 0.08, -0.05, -0.04, 0.1, 0.02], LW * 0.7, GREY_S);
    } else if (it.kind === 'basket') {
      dot(-0.1, h / 2 + 0.06, 0.13, RED); dot(0.12, h / 2 + 0.05, 0.12, RED); dot(0.01, h / 2 + 0.15, 0.12, RED);
      ctx.strokeStyle = OUT; ctx.lineWidth = LW; ctx.beginPath(); ctx.arc(-0.1, h / 2 + 0.06, 0.13, 0, 6.2832); ctx.stroke(); ctx.beginPath(); ctx.arc(0.12, h / 2 + 0.05, 0.12, 0, 6.2832); ctx.stroke(); ctx.beginPath(); ctx.arc(0.01, h / 2 + 0.15, 0.12, 0, 6.2832); ctx.stroke();
      ink(function () { ctx.moveTo(-w / 2, h / 2); ctx.lineTo(w / 2, h / 2); ctx.lineTo(w / 2 - 0.07, -h / 2); ctx.lineTo(-w / 2 + 0.07, -h / 2); ctx.closePath(); }, WOOD, WOOD_S, a);
      line([-w / 2 + 0.03, 0.1, w / 2 - 0.03, 0.1], LW * 0.7, WOOD_S); line([-w / 2 + 0.05, -0.08, w / 2 - 0.05, -0.08], LW * 0.7, WOOD_S);
    }
    ctx.restore();
  }
  function drawArrowShape(len) {  // local: tail at 0, nose at len. Rubber cup on the nose, cream feathers.
    limb(0.04, 0, len - 0.12, 0, 0.05, WOOD);
    ink(function () { ctx.moveTo(0, 0); ctx.lineTo(-0.06, 0.11); ctx.lineTo(0.16, 0.11); ctx.lineTo(0.24, 0); ctx.lineTo(0.16, -0.11); ctx.lineTo(-0.06, -0.11); ctx.closePath(); }, CREAM);
    ink(function () { ctx.moveTo(len - 0.17, 0.06); ctx.quadraticCurveTo(len - 0.02, 0.07, len, 0.16); ctx.lineTo(len, -0.16); ctx.quadraticCurveTo(len - 0.02, -0.07, len - 0.17, -0.06); ctx.closePath(); }, RED);
  }
  function drawArrow(ar) { var p = ar.body.getPosition(); ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(ar.body.getAngle()); ctx.translate(-0.5, 0); drawArrowShape(1.12); ctx.restore(); }

  // ---------- wolves ----------
  function wolfFace(mood, t, look) {
    var ex = look || 0;
    if (mood === 'dazed') { [[-0.17, 0.3], [0.06, 0.3]].forEach(function (e) { line([e[0] - 0.06, e[1] - 0.06, e[0] + 0.06, e[1] + 0.06], LW); line([e[0] - 0.06, e[1] + 0.06, e[0] + 0.06, e[1] - 0.06], LW); }); }
    else {
      var big = (mood === 'scared' || mood === 'fall') ? 0.115 : 0.09;
      ink(el(-0.17, 0.3, big, big), CREAM); ink(el(0.06, 0.3, big, big), CREAM);
      dot(-0.2 + ex, 0.29, 0.04, OUT); dot(0.03 + ex, 0.29, 0.04, OUT);
      if (mood === 'taunt') { line([-0.28, 0.44, -0.1, 0.38], LW); line([-0.04, 0.38, 0.15, 0.44], LW); }
    }
    ink(el(-0.3, 0.1, 0.2, 0.13), CREAM); dot(-0.47, 0.16, 0.05, OUT);
    if (mood === 'taunt') { ink(rr(-0.3, -0.03 - 0.02 * Math.sin(t * 9), 0.11, 0.17 + 0.03 * Math.sin(t * 9), 0.05), RED); line([-0.42, 0.05, -0.2, 0.04], LW); }
    else if (mood === 'scared' || mood === 'fall') ink(el(-0.3, 0.03, 0.07, 0.085), DARK);
    else line([-0.4, 0.03, -0.32, 0.06, -0.24, 0.03], LW);
  }
  function drawWolfBody(mood, t, ph, ang, holdApple, plunger) {
    var wag = Math.sin(t * (mood === 'taunt' ? 7 : 16) + ph), fl = (mood === 'fall' || mood === 'run') ? 1 : 0;
    var tailDown = mood === 'run' || mood === 'dazed';
    ink(function () { ctx.moveTo(0.22, -0.3); if (tailDown) { ctx.quadraticCurveTo(0.62, -0.3, 0.6, -0.62); ctx.quadraticCurveTo(0.36, -0.52, 0.22, -0.42); } else { ctx.quadraticCurveTo(0.7 + wag * 0.06, -0.34, 0.66 + wag * 0.12, 0.16); ctx.quadraticCurveTo(0.42, -0.02, 0.24, -0.14); } ctx.closePath(); }, GREY, GREY_S, ang);
    var lg = fl ? Math.sin(t * 22 + ph) * 0.16 : 0, hop = mood === 'taunt' ? Math.abs(Math.sin(t * 7 + ph)) * 0.03 : 0;
    limb(-0.16, -0.36, -0.18 - lg, -0.53 + hop, 0.12, GREY); limb(0.17, -0.36, 0.19 + lg, -0.53, 0.12, GREY);
    var a1, a2;   // arm angles from straight down
    if (mood === 'taunt') { a1 = 2.5 + Math.sin(t * 9 + ph) * 0.35; a2 = holdApple ? 2.0 : 2.6 + Math.cos(t * 9 + ph) * 0.35; }
    else if (mood === 'scared') { a1 = 2.9; a2 = 2.9; } else if (mood === 'dazed') { a1 = 0.5; a2 = 0.5; }
    else { a1 = 2.2 + Math.sin(t * 24 + ph) * 0.9; a2 = 2.2 + Math.cos(t * 21 + ph) * 0.9; }
    limb(-0.27, -0.03, -0.27 - Math.sin(a1) * 0.3, -0.03 - Math.cos(a1) * 0.3, 0.11, GREY);
    var hx = 0.29 + Math.sin(a2) * 0.3, hy = -0.03 - Math.cos(a2) * 0.3; limb(0.29, -0.03, hx, hy, 0.11, GREY);
    ink(el(0, -0.15, 0.34, 0.35), GREY, GREY_S, ang); ctx.beginPath(); ctx.ellipse(-0.07, -0.2, 0.19, 0.22, 0, 0, 6.2832); ctx.fillStyle = CREAM; ctx.fill();
    ink(function () { ctx.moveTo(-0.3, 0.38); ctx.lineTo(-0.24, 0.7); ctx.lineTo(-0.05, 0.46); ctx.closePath(); }, GREY, GREY_S, ang);
    ink(function () { ctx.moveTo(0.06, 0.47); ctx.lineTo(0.25, 0.7); ctx.lineTo(0.31, 0.36); ctx.closePath(); }, GREY, GREY_S, ang);
    ink(el(-0.02, 0.21, 0.36, 0.29), GREY, GREY_S, ang);
    wolfFace(mood === 'run' ? 'scared' : mood, t, mood === 'run' ? 0.03 : 0);
    if (plunger) { ctx.save(); ctx.translate(0.02, 0.48); ctx.rotate(1.9); ctx.translate(1.12, 0); ctx.scale(-1, 1); drawArrowShape(1.12); ctx.restore(); }
    return { hx: hx, hy: hy };
  }
  function wolfMood(it) { if (it.down) return 'dazed'; if (it.dislodged) return 'fall'; if (sim.state === 'lost') return 'taunt'; if (sim.flying && sim.flying.mode === 'fly') return 'scared'; return 'taunt'; }
  function drawWolf(it, i) {
    var p = it.body.getPosition(), a = it.body.getAngle(), mood = wolfMood(it), ph = i * 2.1;
    var bob = mood === 'taunt' ? Math.abs(Math.sin(T * 7 + ph)) * 0.05 * (sim.state === 'lost' ? 2 : 1) : 0;
    ctx.save(); ctx.translate(p.x, p.y + bob); ctx.rotate(a);
    var hand = drawWolfBody(mood, T, ph, a, i === 0, 0);
    if (i === 0 && mood === 'taunt') { var up = Math.abs(Math.sin(T * 3.2)) * 0.5; ink(el(hand.hx + 0.02, hand.hy + 0.14 + up, 0.12, 0.12), RED, RED_S, a); line([hand.hx + 0.02, hand.hy + 0.25 + up, hand.hx + 0.06, hand.hy + 0.32 + up], LW); }
    if (i === 0 && mood === 'scared') ink(el(hand.hx + 0.02, hand.hy + 0.14, 0.12, 0.12), RED, RED_S, a);
    ctx.restore();
    if (mood === 'dazed') for (var k = 0; k < 3; k++) { var q = T * 5 + k * 2.094; star(p.x + Math.cos(q) * 0.42, p.y + 0.72 + Math.sin(q) * 0.1, 0.11, CREAM); }
  }
  function drawFleeing() {
    for (var i = 0; i < fleeing.length; i++) {
      var f = fleeing[i], dt = T - f.t0, x = f.x + dt * 5.2, y = 0.5 + Math.abs(Math.sin(dt * 14)) * 0.16;
      if (wx(x) > W + 2 * S) continue;
      shadow(x, 0.34); ctx.save(); ctx.translate(x, y); ctx.scale(-1, 1); ctx.rotate(0.22); drawWolfBody('run', T, i, 0, false, f.plunger); ctx.restore();
      if (Math.floor(dt * 14) !== Math.floor((dt - 0.016) * 14) && dt < 2) puff(x - 0.4, 0.08, 1, CREAM, 0.5);
    }
  }

  // ---------- shepherd ----------
  var AX = 1.25;
  function drawShepherd() {
    var o = C.ORIGIN, ang, pull, br = Math.sin(T * 2.2) * 0.02;
    if (aim) { ang = aim.a; pull = 0.12 + aim.p * 0.5; }
    else if (demo.active && demo.aim) { ang = demo.aim.a; pull = 0.12 + demo.aim.p * 0.5; }
    else { ang = 0.42 + Math.sin(T * 1.3) * 0.03; pull = 0.1; }
    var won = sim.state === 'won', hop = won ? Math.abs(Math.sin(T * 6)) * 0.22 : 0, rc = Math.max(0, recoil) * 0.08;
    if (won) ang = 1.1;
    var gx = o.x - rc, gy = o.y + br + hop, dx = Math.cos(ang), dy = Math.sin(ang);
    var wob = stringT < 0.35 ? Math.sin(stringT * 90) * 0.05 * (1 - stringT / 0.35) : 0;
    var nx = gx - dx * (0.22 + pull - wob), ny = gy - dy * (0.22 + pull - wob);
    shadow(AX, 0.5);
    ctx.save(); ctx.translate(AX - rc, hop);
    limb(-0.15, 0.5, -0.17, 0.07, 0.17, WOOD_S); limb(0.13, 0.5, 0.17, 0.07, 0.17, WOOD_S);
    limb(-0.2, 0.05, -0.08, 0.05, 0.1, DARK); limb(0.14, 0.05, 0.27, 0.05, 0.1, DARK);
    ink(function () { ctx.moveTo(-0.38, 0.42); ctx.quadraticCurveTo(-0.36, 1.2, -0.24, 1.46 + br); ctx.lineTo(0.24, 1.46 + br); ctx.quadraticCurveTo(0.38, 1.2, 0.4, 0.42); ctx.quadraticCurveTo(0, 0.34, -0.38, 0.42); ctx.closePath(); }, CREAM, CREAM_S, 0);
    var fl = Math.sin(T * 5) * 0.06;
    ink(function () { ctx.moveTo(-0.2, 1.42 + br); ctx.quadraticCurveTo(-0.55, 1.36 + fl, -0.72, 1.12 + fl * 2); ctx.lineTo(-0.56, 1.06 + fl * 2); ctx.quadraticCurveTo(-0.42, 1.24 + fl, -0.16, 1.3 + br); ctx.closePath(); }, RED, RED_S, 0);
    ink(rr(0, 1.42 + br, 0.56, 0.17, 0.08), RED, RED_S, 0);
    ink(el(0.03, 1.8 + br, 0.34, 0.33), SKIN, '#E2B185', 0);
    if (aim || demo.active) line([0.12, 1.84 + br, 0.25, 1.82 + br], LW); else dot(0.19, 1.83 + br, 0.045, OUT);
    if (won) { ctx.beginPath(); ctx.arc(0.17, 1.72 + br, 0.09, 3.4, 6.0); ctx.strokeStyle = OUT; ctx.stroke(); } else line([0.14, 1.67 + br, 0.25, 1.68 + br], LW);
    dot(0.02, 1.7 + br, 0.05, '#EFAF8E');
    ink(el(0, 2.03 + br, 0.56, 0.1), WOOD, WOOD_S, 0);
    ink(function () { ctx.moveTo(-0.3, 2.05 + br); ctx.quadraticCurveTo(-0.28, 2.42 + br, 0, 2.42 + br); ctx.quadraticCurveTo(0.28, 2.42 + br, 0.3, 2.05 + br); ctx.quadraticCurveTo(0, 1.98 + br, -0.3, 2.05 + br); ctx.closePath(); }, WOOD, WOOD_S, 0);
    line([-0.29, 2.12 + br, 0, 2.08 + br, 0.29, 2.12 + br], LW * 1.6, RED);
    ctx.restore();
    // back arm → string hand, then bow, arrow, front arm
    limb(AX - rc - 0.12, 1.36 + br + hop, nx, ny, 0.14, CREAM);
    ctx.save(); ctx.translate(gx, gy); ctx.rotate(ang);
    ctx.beginPath(); ctx.moveTo(-0.22, 0.8); ctx.quadraticCurveTo(0.36, 0, -0.22, -0.8); ctx.strokeStyle = OUT; ctx.lineWidth = 0.1 + LW * 2; ctx.stroke(); ctx.strokeStyle = WOOD; ctx.lineWidth = 0.1; ctx.stroke();
    var sx = -(0.22 + pull - wob); line([-0.22, 0.8, sx, 0, -0.22, -0.8], LW * 0.6);
    if (sim.arrowsLeft > 0 && !won && (sim.canFire() || aim)) { ctx.translate(sx, 0); drawArrowShape(1.12); }
    ctx.restore();
    dot(nx, ny, 0.09, SKIN); ctx.beginPath(); ctx.arc(nx, ny, 0.09, 0, 6.2832); ctx.strokeStyle = OUT; ctx.lineWidth = LW; ctx.stroke();
    limb(AX - rc + 0.14, 1.34 + br + hop, gx - dx * 0.02, gy - dy * 0.02, 0.14, CREAM);
    dot(gx + dx * 0.05, gy + dy * 0.05, 0.1, SKIN); ctx.beginPath(); ctx.arc(gx + dx * 0.05, gy + dy * 0.05, 0.1, 0, 6.2832); ctx.strokeStyle = OUT; ctx.stroke();
  }

  // ---------- sheep (foreground, cheering) ----------
  function sheepX(i) { return 1.0 + i * 1.2; }
  function drawSheep(s, i) {
    var mood = sim.state === 'won' ? 'joy' : sim.state === 'lost' ? 'sad' : 'stomp';
    var j = 0, tilt = 0;
    if (mood === 'joy') j = Math.abs(Math.sin(T * 6.5 + s.ph)) * 0.55; else if (s.j > 0) j = Math.sin(Math.min(1, s.j) * 3.1416) * 0.5;
    else if (mood === 'stomp') { j = Math.abs(Math.sin(T * 5 + s.ph)) * 0.06; tilt = Math.sin(T * 5 + s.ph) * 0.04; }
    var x = sheepX(i);
    if (sheepRun && sheepRun.i === i) { var k = Math.min(1, (T - sheepRun.t0) / 0.9); k = k * k * (3 - 2 * k); x = x + (sheepRun.to - x) * k; if (k < 1) j = Math.abs(Math.sin(T * 16)) * 0.15; s.cx = x; }
    ctx.save(); ctx.translate(x, -(0.36 + 0.55 * fgScale)); ctx.scale(fgScale, fgScale); ctx.translate(0, j); ctx.rotate(tilt);
    ctx.beginPath(); ctx.ellipse(0.05, -0.5 - j, 0.5, 0.08, 0, 0, 6.2832); ctx.fillStyle = GRASS_S; ctx.fill();
    var st = mood === 'stomp' ? Math.sin(T * 10 + s.ph) * 0.05 : 0;
    limb(-0.26, -0.2, -0.27, -0.46 + Math.max(0, st), 0.09, DARK); limb(-0.08, -0.2, -0.08, -0.46, 0.09, DARK); limb(0.14, -0.2, 0.14, -0.46 + Math.max(0, -st), 0.09, DARK); limb(0.3, -0.2, 0.31, -0.46, 0.09, DARK);
    var fluff = [[0, 0, 0.36], [-0.34, 0.02, 0.27], [0.32, 0.0, 0.27], [-0.18, 0.24, 0.25], [0.16, 0.26, 0.26], [-0.02, -0.17, 0.3], [-0.3, -0.16, 0.2], [0.26, -0.17, 0.2]];
    ctx.beginPath(); fluff.forEach(function (c) { ctx.moveTo(c[0] + c[2], c[1]); ctx.arc(c[0], c[1], c[2], 0, 6.2832); }); ctx.strokeStyle = OUT; ctx.lineWidth = LW * 2; ctx.stroke(); ctx.lineWidth = LW;
    ctx.fillStyle = CREAM_S; ctx.beginPath(); fluff.forEach(function (c) { ctx.moveTo(c[0] + c[2], c[1]); ctx.arc(c[0], c[1], c[2] - 0.01, 0, 6.2832); }); ctx.fill();
    ctx.fillStyle = CREAM; ctx.beginPath(); fluff.forEach(function (c) { ctx.moveTo(c[0] + c[2], c[1]); ctx.arc(c[0] - 0.035, c[1] + 0.05, c[2] - 0.045, 0, 6.2832); }); ctx.fill();
    var hy = mood === 'sad' ? -0.02 : 0.2, hr = mood === 'sad' ? -0.5 : 0.25;
    ctx.save(); ctx.translate(0.5, hy); ctx.rotate(hr);
    ink(el(-0.14, 0.12, 0.12, 0.06, 0.5), DARK); ink(el(0.0, 0.0, 0.2, 0.25), DARK);
    dot(0.07, 0.07, 0.06, CREAM); dot(0.09, 0.08 + (mood === 'sad' ? -0.02 : 0.01), 0.03, OUT);
    if (mood === 'stomp') line([-0.02, 0.17, 0.14, 0.12], LW, CREAM);
    ctx.beginPath(); ctx.arc(-0.06, 0.22, 0.11, 0, 6.2832); ctx.fillStyle = CREAM; ctx.fill(); ctx.strokeStyle = OUT; ctx.stroke();
    ctx.restore(); ctx.restore();
  }

  // ---------- particles ----------
  function puff(x, y, n, col, sp) { if (parts.length > 120) return; for (var i = 0; i < n; i++) { var a = i * 2.399 + x * 3, v = (sp || 1) * (0.8 + (i % 3) * 0.5); parts.push({ k: 'puff', x: x, y: y, vx: Math.cos(a) * v, vy: Math.abs(Math.sin(a)) * v + 0.4, t: 0, life: 0.45, r: 0.1 + (i % 2) * 0.05, col: col }); } }
  function confetti() { if (reduced) return; for (var i = 0; i < 36; i++) { var a = 0.5 + (i / 36) * 2.1; parts.push({ k: 'conf', x: 4 + Math.cos(a) * 0.4 + (i % 5) * 0.3 - 0.6, y: 2.4, vx: Math.cos(a) * (3 + i % 4), vy: 5 + (i % 6) * 0.9, t: 0, life: 2.2, r: 0.09, col: [RED, CREAM, WOOD, GRASS_S][i % 4], rot: i }); } }
  function drawParts(dt) {
    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i]; p.t += dt; if (p.t > p.life) { parts.splice(i, 1); continue; }
      p.x += p.vx * dt; p.y += p.vy * dt; var k = p.t / p.life;
      if (p.k === 'puff') { p.vx *= 0.92; p.vy *= 0.92; ctx.globalAlpha = 1 - k; ink(el(p.x, p.y, p.r * (1 + k), p.r * (1 + k)), p.col); ctx.globalAlpha = 1; }
      else if (p.k === 'conf') { p.vy -= 9 * dt; p.vx *= 0.985; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot + p.t * 7); ctx.globalAlpha = Math.min(1, (1 - k) * 3); ink(rr(0, 0, 0.16, 0.1, 0.02), p.col); ctx.restore(); ctx.globalAlpha = 1; }
      else if (p.k === 'apple') { p.vy -= 10 * dt; ink(el(p.x, p.y, 0.12, 0.12), RED, RED_S, 0); }
      else if (p.k === 'star') { p.vy -= 6 * dt; ctx.globalAlpha = 1 - k; star(p.x, p.y, 0.14, CREAM); ctx.globalAlpha = 1; }
    }
  }
  function dots(pts, col, r0, r1, alpha, skip) {
    ctx.globalAlpha = alpha; var n = pts.length / 2;
    for (var i = skip || 0; i < n; i++) { var r = r0 + (r1 - r0) * (i / Math.max(1, n - 1)); ctx.beginPath(); ctx.arc(pts[i * 2], pts[i * 2 + 1], r, 0, 6.2832); ctx.fillStyle = col; ctx.fill(); if (alpha > 0.6) { ctx.strokeStyle = OUT; ctx.lineWidth = LW * 0.6; ctx.stroke(); } }
    ctx.globalAlpha = 1; ctx.lineWidth = LW;
  }

  // ---------- HUD + demo hand (screen pixels) ----------
  function hudRect() { var sl = 12, st = 12; try { st += parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sat')) || 0; } catch (e) { } return { x: sl, y: st, w: 112, h: 40 }; }
  function drawHud() {
    var r = hudRect(); ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    for (var i = 0; i < C.ARROWS; i++) {
      var used = i >= sim.arrowsLeft, k = 27;
      ctx.save(); ctx.translate(r.x + 10 + i * 36, r.y + r.h - 6); ctx.scale(k, -k); ctx.rotate(0.9); ctx.globalAlpha = used ? 0.22 : 1; drawArrowShape(1.25); ctx.restore();
    }
    ctx.globalAlpha = 1;
    for (var j = 0; j < NLEV; j++) {   // progress dots: done = red, now = ring, later = faint
      var dx = W / 2 + (j - (NLEV - 1) / 2) * 16, dy = r.y + 20; ctx.beginPath(); ctx.arc(dx, dy, j === level ? 5.5 : 4, 0, 6.2832);
      ctx.globalAlpha = j > level ? 0.35 : 1; ctx.fillStyle = j < level || (j === level && sim.state === 'won') ? RED : CREAM; ctx.fill(); ctx.strokeStyle = OUT; ctx.lineWidth = 2; ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  function drawHand(px, py, press, alpha) {
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.save(); ctx.globalAlpha = alpha; ctx.translate(px, py); var k = Math.max(30, S * 0.8) * (press ? 0.92 : 1); ctx.scale(k, k); ctx.rotate(-0.35);
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    if (press) { ctx.beginPath(); ctx.arc(0, 0, 0.42, 0, 6.2832); ctx.strokeStyle = CREAM; ctx.lineWidth = 0.09; ctx.stroke(); }
    ctx.beginPath();   // pointing hand: fingertip at 0,0
    ctx.moveTo(-0.13, 0.02); ctx.quadraticCurveTo(-0.13, -0.14, 0, -0.14); ctx.quadraticCurveTo(0.13, -0.14, 0.13, 0.02); ctx.lineTo(0.13, 0.42);
    ctx.quadraticCurveTo(0.5, 0.4, 0.52, 0.7); ctx.lineTo(0.5, 1.1); ctx.quadraticCurveTo(0.44, 1.4, 0.12, 1.4); ctx.quadraticCurveTo(-0.28, 1.4, -0.36, 1.05);
    ctx.quadraticCurveTo(-0.52, 0.8, -0.5, 0.62); ctx.quadraticCurveTo(-0.36, 0.52, -0.13, 0.74); ctx.closePath();
    ctx.fillStyle = CREAM; ctx.fill(); ctx.strokeStyle = OUT; ctx.lineWidth = 0.075; ctx.stroke();
    ctx.restore();
  }

  // ---------- demo: a hand pulls back once, shows the dotted path, lets go (no shot) ----------
  var PREVIEW_DOTS = 12;   // ≈0.55 s of flight, roughly the first third of the way
  var DEMO = { a: 0.42, p: 0.9 };
  function demoStep(dt) {
    if (level !== 0 || sim.shots > 0 || aim || sim.state !== 'play') { demo.active = false; return; }
    demo.t += dt;
    if (!demo.active && demo.t > 0 && (demo.runs === 0 || T - demo.lastTouch > 7 && demo.t > 7)) { demo.active = true; demo.t = 0; demo.runs++; counts.demo++; }
    if (!demo.active) return;
    var t = demo.t, k = t < 0.25 ? 0 : t < 1.25 ? (t - 0.25) / 1.0 : t < 2.0 ? 1 : Math.max(0, 1 - (t - 2.0) / 0.12);
    k = k * k * (3 - 2 * k);
    demo.aim = { a: DEMO.a, p: DEMO.p * k }; demo.k = k; demo.alpha = t < 0.25 ? t / 0.25 : t < 2.0 ? 1 : Math.max(0, 1 - (t - 2.0) / 0.4);
    if (t > 2.5) { demo.active = false; demo.t = 0; demo.aim = null; }
  }
  function demoDraw() {
    if (!demo.active) return;
    var mp = maxPull(), sx0 = wx(8.5), sy0 = wy(1.2), k = demo.k, d = DEMO.p * k * mp;
    var hx = sx0 - Math.cos(DEMO.a) * d, hy = sy0 + Math.sin(DEMO.a) * d;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.globalAlpha = demo.alpha * 0.9; ctx.strokeStyle = CREAM; ctx.lineWidth = Math.max(3, S * 0.09); ctx.lineCap = 'round'; ctx.setLineDash([1, S * 0.22]);
    ctx.beginPath(); ctx.moveTo(sx0, sy0); ctx.lineTo(hx, hy); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
    drawHand(hx, hy, demo.t > 0.2 && demo.t < 2.0, demo.alpha);
  }

  // ---------- frame ----------
  function frame(now) {
    requestAnimationFrame(frame);
    var real = Math.min(0.05, (now - (frame.last || now)) / 1000); frame.last = now; T += real;
    if (hitstop > 0) hitstop -= real;
    else {
      if (slowT > 0) slowT -= real; var tsT = slowT > 0 ? 0.2 : (nearHit() ? 0.28 : 1); timeScale += (tsT - timeScale) * Math.min(1, real * (tsT < timeScale ? 14 : 7));   // normal speed, then a short slow beat right before the hit
      acc += real * timeScale; var n = 0;
      while (acc >= C.DT && n < 12) { sim.step(); steps++; acc -= C.DT; n++; drain(); if (fireStep >= 0 && steps - fireStep === 600) counts.fp5 = sim.fingerprint(); if (hitstop > 0) break; }
      if (n === 12) acc = 0;
    }
    var fly = sim.flying && sim.flying.mode === 'fly' && !sim.flying.gone, busy = sim.shots > 0 && !drag && (sim.flying || !sim.asleep()) && !(endT > 1.2);
    var zt = busy && !reduced ? Math.max(1.1, Math.min(1.3, 30 / S)) * (slowT > 0 ? 1.1 : 1) : 1; zoom += (zt - zoom) * Math.min(1, real * (zt > zoom ? 3.5 : 3));
    var cxT = fly ? Math.max(C.ORIGIN.x + 1, Math.min(sim.focus, sim.flying.body.getPosition().x + 1.2)) : (busy ? sim.focus : camX); camX += (cxT - camX) * Math.min(1, real * 6);
    stringT += real; recoil -= real * 4; shake *= Math.pow(0.001, real); if (shake < 0.2) shake = 0;
    for (var i = 0; i < sheep.length; i++) if (sheep[i].j > 0) { sheep[i].j += real * 2.2; if (sheep[i].j >= 1) sheep[i].j = 0; }
    demoStep(real);
    if (endT >= 0) { endT += real; if (endT > (sim.state === 'won' ? 1.7 : 0.5)) { againBtn.classList.toggle('next', sim.state === 'won' && level < NLEV - 1); againBtn.classList.add('on'); } }
    draw(real);
  }
  function nearHit() {   // arrow still in the air, heading at a block or wolf less than ~1.8 m away
    var fl = sim.flying; if (reduced || !fl || fl.mode !== 'fly' || fl.gone) return false;
    var p = fl.body.getPosition(), v = fl.body.getLinearVelocity();
    for (var i = 0; i < sim.items.length; i++) { var it = sim.items[i]; if (it.gone) continue; var q = it.body.getPosition(), dx = q.x - p.x, dy = q.y - p.y; if (dx * dx + dy * dy < 4.8 && dx * v.x + dy * v.y > 0) { if (fl.near !== true) { fl.near = true; counts.preHit = (counts.preHit || 0) + 1; } return true; } }
    return false;
  }
  function draw(real) {
    scenery();
    var sx = shake ? Math.sin(T * 70) * shake : 0, sy = shake ? Math.cos(T * 83) * shake : 0;
    world(zoom, camX, 0, sx, sy);
    var i, it;
    for (i = 0; i < sim.items.length; i++) { it = sim.items[i]; if (!it.gone) { var p = it.body.getPosition(); if (p.y < 1.2) shadow(p.x, Math.max(it.w, it.h) * 0.42); } }
    if (ghost && sim.state === 'play') dots(ghost, CREAM, 0.045, 0.045, 0.55);
    for (i = 0; i < sim.items.length; i++) { it = sim.items[i]; if (!it.gone && it.kind !== 'wolf') drawItem(it); }
    for (i = 0; i < sim.wolves.length; i++) if (!sim.wolves[i].gone) drawWolf(sim.wolves[i], i);
    for (i = 0; i < sim.arrows.length; i++) if (!sim.arrows[i].gone) drawArrow(sim.arrows[i]);
    drawFleeing();
    drawShepherd();
    var pv = aim ? sim.preview(aim.a, aim.p) : (demo.active && demo.aim && demo.aim.p > 0.03 ? sim.preview(demo.aim.a, demo.aim.p) : null);
    if (pv) { if (pv.length > PREVIEW_DOTS * 2) pv.length = PREVIEW_DOTS * 2; dots(pv, CREAM, 0.11, 0.05, demo.active && !aim ? demo.alpha : 1, 2); }   // only the first stretch — the rest is yours to judge
    drawParts(real * timeScale);
    for (i = 0; i < sheep.length; i++) drawSheep(sheep[i], i);
    drawHud(); demoDraw();
  }
  function drain() {
    var ev = sim.events, e, i, j;
    for (i = 0; i < ev.length; i++) {
      e = ev[i];
      if (e.type === 'fire') { sTwang(e.power); stringT = 0; recoil = 1; if (sim.shots === 1) { fireStep = steps; counts.fp5 = ''; } }
      else if (e.type === 'stick') {
        counts.sticks++; puff(e.x, e.y, 6, CREAM, 1.4); sKnock(4); buzz(18);
        if (e.on !== 'ground') { hitstop = 0.055; shake = Math.min(5, S * 0.08); }
        var fl = sim.arrows[sim.arrows.length - 1]; if (fl) ghost = fl.path.slice();
      }
      else if (e.type === 'miss') { var f2 = sim.arrows[sim.arrows.length - 1]; if (f2) ghost = f2.path.slice(); }
      else if (e.type === 'hit') { if (e.s > 1.4) { sKnock(e.s); if (e.s > 3 && (e.a === 'ground' || e.b === 'ground')) puff(e.x, 0.06, 3, CREAM, 0.8); } }
      else if (e.type === 'loose') { if (e.id === 'wolfA') { var w = sim.wolves[0].body.getPosition(); parts.push({ k: 'apple', x: w.x + 0.4, y: w.y + 0.5, vx: 1.6, vy: 4.5, t: 0, life: 1.6 }); } }
      else if (e.type === 'topple') { slowT = 0.42; counts.slowmo++; }
      else if (e.type === 'wolfdown') { sYelp(); buzz(30); puff(e.x, 0.1, 7, CREAM, 1.6); for (j = 0; j < sheep.length; j++) sheep[j].j = 0.01 + j * 0.0001; }
      else if (e.type === 'flee') { var wf = null; for (j = 0; j < sim.wolves.length; j++) if (sim.wolves[j].id === e.id) wf = sim.wolves[j]; fleeing.push({ x: e.x, t0: T, plunger: wf && wf.plunger > 0 }); }
      else if (e.type === 'basketdown') { sheepRun = { i: 2, t0: T + 0.5, to: Math.max(4.6, Math.min(18.4, e.x - 0.3)) }; }
      else if (e.type === 'win') { endT = 0; sWin(); confetti(); buzz(60); }
      else if (e.type === 'lose') { endT = 0; tone('triangle', 300, 150, 0.4, 0.12); }
    }
    ev.length = 0;
  }

  // ---------- input: press anywhere, drag back, let go ----------
  function start(x, y) { audio(); demo.lastTouch = T; demo.active = false; demo.aim = null; demo.t = 0; if (sim.state === 'lost' || (sim.state === 'won' && endT > 1.7)) { advance(); return; } if (sim.state !== 'play') return; drag = { x: x, y: y }; aim = null; }
  function move(x, y) {
    if (!drag) return; var dx = x - drag.x, dy = y - drag.y, d = Math.sqrt(dx * dx + dy * dy);
    if (d < 14) { aim = null; return; }
    var a = Math.atan2(dy, -dx); if (a < -1.9) a = C.AMAX; a = Math.max(C.AMIN, Math.min(C.AMAX, a));
    aim = { a: a, p: Math.min(1, d / maxPull()) };
  }
  function end() { if (drag && aim && sim.canFire()) sim.fire(aim.a, aim.p); drag = null; aim = null; demo.lastTouch = T; pin(); }
  function advance() { if (sim.state === 'won') { level = (level + 1) % NLEV; try { localStorage.setItem('at_level', String(level)); } catch (e) { } } restart(); }
  function restart() { sim = new Sim(level); aim = drag = ghost = null; parts.length = 0; fleeing.length = 0; sheepRun = null; endT = -1; slowT = 0; acc = 0; zoom = 1; camX = C.ORIGIN.x + 1; againBtn.classList.remove('on'); for (var i = 0; i < sheep.length; i++) { sheep[i].j = 0; sheep[i].cx = undefined; } counts.restarts = (counts.restarts || 0) + 1; fireStep = -1; }
  function pin() { if (Math.abs(window.scrollY - 120) > 2) window.scrollTo(0, 120); }
  cv.addEventListener('touchstart', function (e) { e.preventDefault(); var t = e.changedTouches[0]; start(t.clientX, t.clientY); }, { passive: false });
  cv.addEventListener('touchmove', function (e) { e.preventDefault(); var t = e.changedTouches[0]; move(t.clientX, t.clientY); }, { passive: false });
  cv.addEventListener('touchend', function (e) { e.preventDefault(); end(); }, { passive: false });
  cv.addEventListener('touchcancel', function () { drag = null; aim = null; });
  cv.addEventListener('mousedown', function (e) { start(e.clientX, e.clientY); });
  window.addEventListener('mousemove', function (e) { move(e.clientX, e.clientY); });
  window.addEventListener('mouseup', function () { if (drag) end(); });
  muteBtn.addEventListener('click', function () { muted = !muted; muteBtn.classList.toggle('muted', muted); try { localStorage.setItem('at_mute', muted ? '1' : '0'); } catch (e) { } if (!muted) { audio(); tone('triangle', 520, 520, 0.08, 0.12); } });
  againBtn.addEventListener('click', function () { audio(); advance(); });
  muteBtn.classList.toggle('muted', muted);
  window.addEventListener('resize', resize); window.addEventListener('orientationchange', function () { setTimeout(resize, 200); });
  window.addEventListener('load', function () { setTimeout(pin, 50); });

  // ---------- for the test robot ----------
  function box(x0, y0, x1, y1) { return { x: wx(x0), y: wy(y1), w: (x1 - x0) * S, h: (y1 - y0) * S }; }
  window.__AT = {
    go: function (n) { level = n; restart(); },
    info: function () {
      var up = sim.wolves.filter(function (w) { return !w.down; }).length;
      var tb = { x0: 9, x1: 0, y1: 0 }; sim.items.forEach(function (it) { if (it.gone) return; var p = it.body.getPosition(); tb.x0 = Math.min(tb.x0, p.x - it.w / 2); tb.x1 = Math.max(tb.x1, p.x + it.w / 2); tb.y1 = Math.max(tb.y1, p.y + it.h / 2 + (it.kind === 'wolf' ? 0.2 : 0)); });
      return { level: level, levels: NLEV, wolves: sim.wolves.length, asleep: sim.asleep(), next: againBtn.classList.contains('next'), state: sim.state, arrowsLeft: sim.arrowsLeft, shots: sim.shots, wolvesUp: up, canFire: sim.canFire(), aiming: !!aim, maxPull: maxPull(), W: W, H: H, S: S,
        archer: box(AX - 0.75, 0, C.ORIGIN.x + 0.45, 2.45), tower: box(tb.x0, 0, tb.x1, tb.y1), hud: hudRect(), sheep: sheep.map(function (s) { var x = s.cx === undefined ? sheepX(sheep.indexOf(s)) : s.cx, b = -(0.36 + 0.55 * fgScale); return { x: wx(x - 0.62 * fgScale), y: wy(b + 0.5 * fgScale), w: 1.3 * fgScale * S, h: 1.0 * fgScale * S }; }),
        demo: counts.demo, demoActive: demo.active, slowmo: counts.slowmo, slowNow: slowT > 0, timeScale: timeScale, preHit: counts.preHit || 0, zoom: zoom, sticks: counts.sticks, ghost: ghost ? ghost.length / 2 : 0, preview: aim ? Math.min(PREVIEW_DOTS, sim.preview(aim.a, aim.p).length / 2) : 0, previewEndX: aim ? (function () { var q = sim.preview(aim.a, aim.p); if (q.length > PREVIEW_DOTS * 2) q.length = PREVIEW_DOTS * 2; return q[q.length - 2]; })() : 0, focus: sim.focus,
        again: againBtn.classList.contains('on'), muted: muted, fleeing: fleeing.length, restarts: counts.restarts || 0, fp: sim.fingerprint(), fp5: counts.fp5 || '', scrollY: window.scrollY, time: sim.time };
    }
  };

  resize(); sim = new Sim(level); requestAnimationFrame(frame);
})();
