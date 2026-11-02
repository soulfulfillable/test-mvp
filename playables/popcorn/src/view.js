// Pop & Topple — Canvas 2D renderer. One palette, one light (upper-left), one ground shadow for everything.
// World → screen: x right, y up, table top at y = 0. Everything here is drawing only; physics lives in physics.js.
import { SLING, MAX_PULL, SEED_R, POP_R, WORLD } from './levels.js';

export const PAL = {
  wall: '#f4ece0', wallDeep: '#ebe1d1', tile: '#f9f5ee', tileLine: '#e6dccb',
  table: '#d8a86c', tableDeep: '#c58f52', tableEdge: '#a46f36', tableFront: '#8f5e2d',
  wood: '#dcae70', woodSide: '#b7853f', woodLine: '#7d5224', woodGrain: 'rgba(125,82,36,.18)',
  card: '#dcbd8c', cardSide: '#c3a06b', cardLine: '#8e6b3a', tape: '#c89a5a',
  cab: '#f6f1e6', cabSide: '#ddd3c1', cabLine: '#b9ab93', cabInset: '#ece5d6', handle: '#8b8578',
  cupWhite: '#fbf8f2', cupLine: '#9a2f24', rim: '#7d241b',
  acc: '#e2452f', accSoft: 'rgba(226,69,47,.18)',
  kernel: '#f2b134', kernelDark: '#c97d12', kernelLine: '#8a5208',
  corn: '#fffaf0', cornShade: '#f1dfb8', cornLine: '#c9a96c',
  ink: '#2b2520', shadow: 'rgba(60,40,20,.22)', steam: 'rgba(255,255,255,.85)',
  band: '#6b4a2e', pouch: '#8a5a33',
};

export class View {
  constructor(canvas) {
    this.canvas = canvas; this.ctx = canvas.getContext('2d');
    this.scale = 70; this.offX = 0; this.floorY = 0; this.w = 0; this.h = 0; this.dpr = 1; this.mode = 'portrait';
    this.particles = []; this.puffs = []; this.rings = []; this.t = 0;
    this.cornLobes = new Map();
  }
  resize(w, h, dpr, cam = {}) {
    this.w = w; this.h = h; this.dpr = dpr; this.cam = cam;
    this.canvas.width = Math.round(w * dpr); this.canvas.height = Math.round(h * dpr);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    const portrait = h >= w * 1.15, square = !portrait && h >= w * 0.8;
    this.mode = portrait ? 'portrait' : square ? 'square' : 'landscape';
    const bottomPad = portrait ? 118 : square ? 84 : 28;
    const topPad = portrait ? 150 : 90;
    const X0 = cam.x0 ?? 0.15, X1 = cam.x1 ?? 4.9;                        // world width we must show (sling to the far cabinet)
    const tall = 4.3;                                 // tallest thing + air for the arc
    this.scale = Math.min(w / (X1 - X0), (h - bottomPad - topPad) / (tall + 1.3));
    this.scale = Math.max(this.scale, 40);
    this.offX = w / 2 - ((X0 + X1) / 2) * this.scale;
    this.floorY = h - bottomPad - 1.3 * this.scale;
    if (this.floorY < topPad + tall * this.scale) this.floorY = Math.min(h - bottomPad - 0.6 * this.scale, topPad + tall * this.scale);
  }
  sx(x) { return this.offX + x * this.scale; }
  sy(y) { return this.floorY - y * this.scale; }
  toWorld(px, py) { return { x: (px - this.offX) / this.scale, y: (this.floorY - py) / this.scale }; }

  // ---------- scene ----------
  draw(sim, ui, dt) {
    const c = this.ctx, S = this.scale; this.t += dt;
    c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.background();
    const snap = sim.snapshot();
    const statics = snap.filter((b) => b.kind === 'cabinet' || b.kind === 'shelf' || b.kind === 'ledge' || b.kind === 'wall');
    const dyn = snap.filter((b) => !statics.includes(b));
    // ground shadows (one light, one shadow for every body)
    for (const b of dyn) this.groundShadow(b);
    for (const g of sim.level.gaps) this.gap(g);
    for (const b of statics) this.body(b, sim);
    this.slingBack();
    for (const b of dyn) if (b.kind !== 'seed' && b.kind !== 'corn') this.body(b, sim);
    for (const b of dyn) if (b.kind === 'corn') this.corn(b);
    this.markers(sim, snap);
    // the kernel: in flight, fusing, or sitting in the pouch
    const seed = dyn.find((b) => b.kind === 'seed');
    if (seed) this.kernel(seed.x, seed.y, seed.angle, seed.fuse || 0, sim.phase === 'fuse');
    const pouch = ui.pull ? sim.pouch(ui.pull.dx, ui.pull.dy) : { x: SLING.x, y: SLING.y, len: 0 };
    if (sim.phase === 'aim' && sim.seedsLeft > 0) this.kernel(pouch.x, pouch.y, 0, 0, false);
    this.slingFront(pouch, ui.pull);
    if (ui.pull && sim.phase === 'aim') { this.trajectory(sim.preview(ui.pull.dx, ui.pull.dy)); this.gauge(pouch); }
    if (ui.ghost && sim.phase === 'aim' && !ui.pull) this.ghost(sim, ui.ghost);
    this.effects(dt);
  }

  background() {
    const c = this.ctx, S = this.scale, w = this.w, h = this.h, fy = this.floorY;
    c.fillStyle = PAL.wall; c.fillRect(0, 0, w, h);
    // tiled backsplash from the table up to ~2.9 m
    const tileTop = fy - 2.9 * S;
    c.fillStyle = PAL.tile; c.fillRect(0, tileTop, w, fy - tileTop);
    c.strokeStyle = PAL.tileLine; c.lineWidth = 1;
    const ts = 0.5 * S; c.beginPath();
    for (let y = fy; y > tileTop; y -= ts) { c.moveTo(0, Math.round(y) + .5); c.lineTo(w, Math.round(y) + .5); }
    const row0 = this.offX % ts;
    for (let y = fy, i = 0; y > tileTop; y -= ts, i++) for (let x = row0 + (i % 2 ? ts / 2 : 0) - ts; x < w; x += ts) { c.moveTo(Math.round(x) + .5, y); c.lineTo(Math.round(x) + .5, y - ts); }
    c.stroke();
    // a shelf line with a trim above the tiles
    c.fillStyle = PAL.wallDeep; c.fillRect(0, tileTop - 0.08 * S, w, 0.08 * S);
    // table top (seen slightly from above), then its front edge
    const band = 1.3 * S;
    const g = c.createLinearGradient(0, fy, 0, fy + band); g.addColorStop(0, PAL.table); g.addColorStop(1, PAL.tableDeep);
    c.fillStyle = g; c.fillRect(0, fy, w, band);
    c.strokeStyle = 'rgba(125,82,36,.25)'; c.lineWidth = 1; c.beginPath();
    for (let i = 1; i < 5; i++) { const y = fy + band * (0.18 + i * 0.17); c.moveTo(0, y + .5); c.lineTo(w, y + .5); } c.stroke();
    c.fillStyle = PAL.tableEdge; c.fillRect(0, fy + band, w, 0.16 * S);
    c.fillStyle = PAL.tableFront; c.fillRect(0, fy + band + 0.16 * S, w, h - fy - band);
    c.fillStyle = 'rgba(125,82,36,.35)'; c.fillRect(0, fy, w, 2);
  }

  gap(g) { // the pocket: a soft darkening at the bottom so the hole reads as a hole
    const c = this.ctx, S = this.scale;
    const x = this.sx(g.x), y = this.sy(g.y + g.h), w = g.w * S, h = g.h * S;
    const gr = c.createLinearGradient(0, y, 0, y + h); gr.addColorStop(0, 'rgba(60,40,20,0)'); gr.addColorStop(1, 'rgba(60,40,20,.28)');
    c.fillStyle = gr; c.fillRect(x, y, w, h);
  }

  groundShadow(b) {
    const c = this.ctx, S = this.scale;
    const r = (b.kind === 'seed' || b.kind === 'corn') ? b.r : Math.max(b.w, b.h) / 2;
    const bottom = (b.kind === 'seed' || b.kind === 'corn') ? b.y - b.r : b.y - (Math.abs(Math.cos(b.angle)) * b.h / 2 + Math.abs(Math.sin(b.angle)) * b.w / 2);
    const height = Math.max(0, bottom);
    const a = Math.max(0.05, 0.3 - height * 0.12);
    const wpx = (b.kind === 'seed' || b.kind === 'corn' ? b.r * 2 : (Math.abs(Math.cos(b.angle)) * b.w + Math.abs(Math.sin(b.angle)) * b.h)) * S;
    c.save(); c.fillStyle = `rgba(60,40,20,${a.toFixed(3)})`;
    c.beginPath(); c.ellipse(this.sx(b.x) + 0.12 * S + height * 0.05 * S, this.sy(0) + 0.1 * S, Math.max(wpx * 0.62, 6), Math.max(0.09 * S, 4), 0, 0, Math.PI * 2); c.fill(); c.restore();
  }

  // a box with a lit top, a darker right side (2.5D), outline, and a material-specific face
  body(b, sim) {
    const c = this.ctx, S = this.scale;
    c.save(); c.translate(this.sx(b.x), this.sy(b.y)); c.rotate(-b.angle);
    const w = b.w * S, h = b.h * S;
    if (b.kind === 'cup') { this.cup(b, w, h); c.restore(); return; }
    let face = PAL.wood, side = PAL.woodSide, line = PAL.woodLine;
    if (b.kind === 'crate') { face = PAL.card; side = PAL.cardSide; line = PAL.cardLine; }
    if (b.kind === 'cabinet' || b.kind === 'wall') { face = PAL.cab; side = PAL.cabSide; line = PAL.cabLine; }
    if (b.kind === 'shelf' || b.kind === 'ledge') { face = PAL.wood; side = PAL.woodSide; line = PAL.woodLine; }
    const d = Math.min(0.09 * S, w * 0.35, h * 0.35);
    // right side face (depth)
    c.fillStyle = side; c.beginPath(); c.moveTo(w / 2, -h / 2); c.lineTo(w / 2 + d, -h / 2 - d * 0.6); c.lineTo(w / 2 + d, h / 2 - d * 0.6); c.lineTo(w / 2, h / 2); c.closePath(); c.fill();
    // top face
    c.fillStyle = this.lighten(face); c.beginPath(); c.moveTo(-w / 2, -h / 2); c.lineTo(-w / 2 + d, -h / 2 - d * 0.6); c.lineTo(w / 2 + d, -h / 2 - d * 0.6); c.lineTo(w / 2, -h / 2); c.closePath(); c.fill();
    // front face
    c.fillStyle = face; c.fillRect(-w / 2, -h / 2, w, h);
    c.strokeStyle = line; c.lineWidth = Math.max(1, 0.018 * S); c.strokeRect(-w / 2, -h / 2, w, h);
    c.beginPath(); c.moveTo(w / 2, -h / 2); c.lineTo(w / 2 + d, -h / 2 - d * 0.6); c.lineTo(w / 2 + d, h / 2 - d * 0.6); c.lineTo(w / 2, h / 2); c.moveTo(-w / 2, -h / 2); c.lineTo(-w / 2 + d, -h / 2 - d * 0.6); c.lineTo(w / 2 + d, -h / 2 - d * 0.6); c.stroke();
    if (b.kind === 'column' || b.kind === 'plank' || b.kind === 'shelf' || b.kind === 'ledge') { // grain
      c.strokeStyle = PAL.woodGrain; c.lineWidth = 1; c.beginPath();
      const n = Math.max(2, Math.round((b.w > b.h ? h : w) / (0.12 * S)));
      for (let i = 1; i < n; i++) { if (b.w > b.h) { const y = -h / 2 + h * i / n; c.moveTo(-w / 2 + 3, y); c.lineTo(w / 2 - 3, y); } else { const x = -w / 2 + w * i / n; c.moveTo(x, -h / 2 + 3); c.lineTo(x, h / 2 - 3); } }
      c.stroke();
    }
    if (b.kind === 'crate') { c.fillStyle = PAL.tape; c.fillRect(-w / 2, -0.05 * h, w, 0.1 * h); }
    if (b.kind === 'cabinet') { // a cupboard door with a handle
      const m = Math.min(0.1 * S, w * 0.12);
      c.fillStyle = PAL.cabInset; c.fillRect(-w / 2 + m, -h / 2 + m, w - 2 * m, h - 2 * m);
      c.strokeStyle = PAL.cabLine; c.lineWidth = 1; c.strokeRect(-w / 2 + m, -h / 2 + m, w - 2 * m, h - 2 * m);
      c.fillStyle = PAL.handle; c.fillRect(-w / 2 + m * 1.6, -0.08 * S, Math.max(2, 0.035 * S), 0.16 * S);
    }
    c.restore();
  }
  lighten(hex) { const n = parseInt(hex.slice(1), 16); const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255; return `rgb(${Math.min(255, r + 26)},${Math.min(255, g + 26)},${Math.min(255, b + 22)})`; }

  cup(b, w, h) { // a striped popcorn bucket, slightly wider at the top
    const c = this.ctx, S = this.scale, flare = 0.08 * w;
    const tl = -w / 2 - flare, tr = w / 2 + flare, bl = -w / 2 + flare * 0.3, br = w / 2 - flare * 0.3;
    c.beginPath(); c.moveTo(tl, -h / 2); c.lineTo(tr, -h / 2); c.lineTo(br, h / 2); c.lineTo(bl, h / 2); c.closePath();
    c.fillStyle = PAL.cupWhite; c.fill();
    c.save(); c.clip();
    c.fillStyle = PAL.acc; const n = 5;
    for (let i = 0; i < n; i += 2) { const x0 = tl + (tr - tl) * i / n, x1 = tl + (tr - tl) * (i + 1) / n; c.fillRect(x0, -h / 2, x1 - x0, h); }
    c.fillStyle = 'rgba(0,0,0,.08)'; c.fillRect(w * 0.2, -h / 2, w, h);
    c.restore();
    c.strokeStyle = PAL.cupLine; c.lineWidth = Math.max(1, 0.018 * S); c.stroke();
    // rim
    c.fillStyle = PAL.rim; c.fillRect(tl - 1, -h / 2 - 0.05 * S, tr - tl + 2, 0.07 * S);
    // popcorn heap on top
    const lobes = [[-0.22, -0.62, 0.17], [0.05, -0.7, 0.2], [0.3, -0.6, 0.16], [-0.05, -0.52, 0.14], [0.18, -0.5, 0.12]];
    for (const [lx, ly, lr] of lobes) { c.beginPath(); c.arc(lx * w, ly * h, lr * w, 0, Math.PI * 2); c.fillStyle = PAL.corn; c.fill(); c.strokeStyle = PAL.cornLine; c.lineWidth = 1; c.stroke(); }
  }

  kernel(x, y, angle, fuse, fusing) {
    const c = this.ctx, S = this.scale, r = SEED_R * S;
    let dx = 0, dy = 0;
    if (fusing) { const k = 0.05 * S * (0.5 + fuse); dx = Math.sin(this.t * 70) * k; dy = Math.cos(this.t * 93) * k * 0.6; }
    c.save(); c.translate(this.sx(x) + dx, this.sy(y) + dy); c.rotate(-angle);
    if (fusing) { // warning ring that closes in + steam
      c.strokeStyle = PAL.acc; c.lineWidth = 2; c.globalAlpha = 0.35 + 0.5 * fuse;
      c.beginPath(); c.arc(0, 0, r * (2.6 - 1.4 * fuse), 0, Math.PI * 2); c.stroke(); c.globalAlpha = 1;
    }
    const g = c.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r * 1.1); g.addColorStop(0, '#ffd66b'); g.addColorStop(1, PAL.kernel);
    c.fillStyle = g; c.beginPath(); c.ellipse(0, 0, r * 0.95, r * 1.05, 0, 0, Math.PI * 2); c.fill();
    c.strokeStyle = PAL.kernelLine; c.lineWidth = Math.max(1, 0.016 * S); c.stroke();
    c.fillStyle = PAL.kernelDark; c.beginPath(); c.ellipse(0, r * 0.55, r * 0.5, r * 0.3, 0, 0, Math.PI * 2); c.fill();
    c.restore();
    if (fusing && Math.random() < 0.5) this.puffs.push({ x: this.sx(x) + (Math.random() - 0.5) * r, y: this.sy(y) - r, vx: (Math.random() - 0.5) * 18, vy: -45 - Math.random() * 25, r: 3 + Math.random() * 4, a: 0.8, life: 0.7 });
  }

  corn(b) {
    const c = this.ctx, S = this.scale, R = b.r * S;
    let lobes = this.cornLobes.get(b.id);
    if (!lobes) { lobes = []; for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2 + 0.4; lobes.push([Math.cos(a) * 0.48, Math.sin(a) * 0.48, 0.5 + ((i * 37) % 5) * 0.05]); } lobes.push([0, 0, 0.62]); this.cornLobes.set(b.id, lobes); }
    c.save(); c.translate(this.sx(b.x), this.sy(b.y)); c.rotate(-b.angle);
    for (const [lx, ly, lr] of lobes) {
      const g = c.createRadialGradient(lx * R - lr * R * 0.4, ly * R - lr * R * 0.4, lr * R * 0.1, lx * R, ly * R, lr * R); g.addColorStop(0, PAL.corn); g.addColorStop(1, PAL.cornShade);
      c.fillStyle = g; c.beginPath(); c.arc(lx * R, ly * R, lr * R, 0, Math.PI * 2); c.fill();
      c.strokeStyle = PAL.cornLine; c.lineWidth = Math.max(1, 0.012 * S); c.stroke();
    }
    c.restore();
  }

  // the slingshot: back arm behind the kernel, front arm + bands in front
  slingBack() {
    const c = this.ctx, S = this.scale, x = this.sx(SLING.x), y0 = this.sy(0);
    c.save(); c.lineCap = 'round'; c.lineJoin = 'round';
    c.strokeStyle = PAL.woodLine; c.lineWidth = 0.13 * S + 3; this.armPath(x, y0, S, +1); c.stroke();
    c.strokeStyle = PAL.woodSide; c.lineWidth = 0.13 * S; this.armPath(x, y0, S, +1); c.stroke();
    c.restore();
  }
  armPath(x, y0, S, side) {
    const c = this.ctx; c.beginPath(); c.moveTo(x, y0 + 0.02 * S); c.lineTo(x, y0 - 0.55 * S); c.quadraticCurveTo(x + side * 0.02 * S, y0 - 0.85 * S, x + side * 0.2 * S, y0 - 1.12 * S);
  }
  slingFront(pouch, pull) {
    const c = this.ctx, S = this.scale, x = this.sx(SLING.x), y0 = this.sy(0);
    const px = this.sx(pouch.x), py = this.sy(pouch.y);
    const tipB = { x: x + 0.2 * S, y: y0 - 1.12 * S }, tipF = { x: x - 0.2 * S, y: y0 - 1.12 * S };
    c.save(); c.lineCap = 'round'; c.lineJoin = 'round';
    // band from the back tip
    c.strokeStyle = PAL.band; c.lineWidth = Math.max(2, 0.05 * S); c.beginPath(); c.moveTo(tipB.x, tipB.y); c.lineTo(px + 0.1 * S, py); c.stroke();
    // pouch
    c.fillStyle = PAL.pouch; c.beginPath(); c.ellipse(px, py + 0.03 * S, 0.16 * S, 0.09 * S, 0, 0, Math.PI * 2); c.fill();
    // front arm
    c.strokeStyle = PAL.woodLine; c.lineWidth = 0.15 * S + 3; this.armPath(x, y0, S, -1); c.stroke();
    c.strokeStyle = PAL.wood; c.lineWidth = 0.15 * S; this.armPath(x, y0, S, -1); c.stroke();
    c.strokeStyle = PAL.band; c.lineWidth = Math.max(2, 0.05 * S); c.beginPath(); c.moveTo(tipF.x, tipF.y); c.lineTo(px - 0.1 * S, py); c.stroke();
    c.restore();
  }
  trajectory(pts) {
    const c = this.ctx, S = this.scale; c.save();
    pts.forEach((p, i) => { const r = Math.max(2, (0.05 - i * 0.0025) * S); c.globalAlpha = 1 - i / pts.length * 0.8; c.fillStyle = '#fff'; c.beginPath(); c.arc(this.sx(p.x), this.sy(p.y), r, 0, Math.PI * 2); c.fill(); c.strokeStyle = PAL.ink; c.lineWidth = 1; c.stroke(); });
    c.restore();
  }
  gauge(pouch) { // pull strength ring around the rest position
    const c = this.ctx, S = this.scale, k = Math.min(1, pouch.len / MAX_PULL);
    c.save(); c.lineWidth = Math.max(3, 0.06 * S); c.lineCap = 'round';
    c.strokeStyle = 'rgba(43,37,32,.15)'; c.beginPath(); c.arc(this.sx(SLING.x), this.sy(SLING.y), 0.42 * S, 0, Math.PI * 2); c.stroke();
    c.strokeStyle = PAL.acc; c.beginPath(); c.arc(this.sx(SLING.x), this.sy(SLING.y), 0.42 * S, -Math.PI / 2, -Math.PI / 2 + k * Math.PI * 2); c.stroke();
    c.restore();
  }
  // first-time hint: a hand pulls the pouch back along the level's known shot, with the dotted arc
  ghost(sim, g) {
    const c = this.ctx, S = this.scale;
    const ph = (this.t % 2.6) / 2.6;                      // 0..1 loop
    const k = ph < 0.55 ? Math.sin((ph / 0.55) * Math.PI / 2) : ph < 0.8 ? 1 : 0;
    const pull = { dx: g.dx * k, dy: g.dy * k };
    const p = sim.pouch(pull.dx, pull.dy);
    if (k > 0.98) this.trajectory(sim.preview(g.dx, g.dy, 16));
    const hx = this.sx(p.x) + 0.06 * S, hy = this.sy(p.y) + 0.12 * S;
    if (ph < 0.8) this.hand(hx, hy, S, ph < 0.55 ? 1 : 0.9);
  }
  hand(x, y, S, a) { // a pointing hand, drawn (no emoji)
    const c = this.ctx; c.save(); c.translate(x, y); c.globalAlpha = a; c.scale(S / 70, S / 70);
    c.fillStyle = '#fff'; c.strokeStyle = PAL.ink; c.lineWidth = 2.2; c.lineJoin = 'round';
    c.beginPath(); c.moveTo(0, -6); c.lineTo(0, -34); c.quadraticCurveTo(0, -42, 7, -42); c.quadraticCurveTo(14, -42, 14, -34); c.lineTo(14, -14);
    c.lineTo(26, -10); c.quadraticCurveTo(34, -8, 36, 0); c.lineTo(38, 10); c.quadraticCurveTo(40, 30, 22, 34); c.lineTo(6, 34); c.quadraticCurveTo(-8, 34, -10, 20); c.lineTo(-12, 4); c.quadraticCurveTo(-13, -6, -5, -6); c.closePath(); c.fill(); c.stroke();
    c.beginPath(); c.moveTo(14, -14); c.lineTo(14, 0); c.moveTo(24, -8); c.lineTo(24, 4); c.moveTo(32, -2); c.lineTo(32, 8); c.stroke();
    c.restore();
  }
  // target flag above the marked cup + a drop marker on the table under it
  markers(sim, snap) {
    const c = this.ctx, S = this.scale;
    for (const b of snap) {
      if (!b.target) continue;
      const x = this.sx(b.x), y = this.sy(b.y);
      c.save();
      if (!b.down) { // glow outline
        c.translate(x, y); c.rotate(-b.angle);
        c.strokeStyle = PAL.acc; c.lineWidth = Math.max(2, 0.04 * S); c.globalAlpha = 0.55 + 0.3 * Math.sin(this.t * 4);
        c.strokeRect(-b.w / 2 * S - 0.06 * S, -b.h / 2 * S - 0.1 * S, b.w * S + 0.12 * S, b.h * S + 0.16 * S);
        c.setTransform(this.dpr, 0, 0, this.dpr, 0, 0); c.globalAlpha = 1;
        // flag pin bobbing above
        const top = y - (Math.abs(Math.cos(b.angle)) * b.h / 2 + Math.abs(Math.sin(b.angle)) * b.w / 2) * S - 0.22 * S + Math.sin(this.t * 3) * 0.04 * S;
        c.strokeStyle = PAL.ink; c.lineWidth = Math.max(2, 0.03 * S); c.beginPath(); c.moveTo(x, top); c.lineTo(x, top - 0.42 * S); c.stroke();
        c.fillStyle = PAL.acc; c.beginPath(); c.moveTo(x, top - 0.42 * S); c.lineTo(x + 0.34 * S, top - 0.33 * S); c.lineTo(x, top - 0.22 * S); c.closePath(); c.fill();
        c.strokeStyle = PAL.ink; c.lineWidth = 1.5; c.stroke();
        // drop marker on the table: chevron pointing down at the landing line
        const fx = this.sx(b.x0 ?? b.x), fy = this.sy(0) + 0.5 * S;
        c.strokeStyle = PAL.acc; c.lineWidth = Math.max(2, 0.035 * S); c.lineCap = 'round'; c.globalAlpha = 0.9;
        c.beginPath(); c.moveTo(fx - 0.16 * S, fy - 0.12 * S); c.lineTo(fx, fy); c.lineTo(fx + 0.16 * S, fy - 0.12 * S); c.stroke();
        c.setLineDash([0.08 * S, 0.08 * S]); c.lineWidth = Math.max(1.5, 0.02 * S); c.globalAlpha = 0.6;
        c.beginPath(); c.ellipse(fx, fy + 0.12 * S, 0.55 * S, 0.14 * S, 0, 0, Math.PI * 2); c.stroke();
      }
      c.restore();
    }
  }

  // ---------- effects ----------
  burst(x, y) {
    const px = this.sx(x), py = this.sy(y), S = this.scale;
    for (let i = 0; i < 22; i++) { const a = Math.random() * Math.PI * 2, v = (0.9 + Math.random() * 1.8) * S; this.particles.push({ x: px, y: py, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 0.6 * S, r: 2 + Math.random() * 4, life: 0.6 + Math.random() * 0.4, t: 0, col: Math.random() < 0.3 ? PAL.kernel : PAL.corn }); }
    this.rings.push({ x: px, y: py, t: 0 });
  }
  dust(x, y, n = 6) { const px = this.sx(x), py = this.sy(y), S = this.scale; for (let i = 0; i < n; i++) this.puffs.push({ x: px, y: py, vx: (Math.random() - 0.5) * 0.8 * S, vy: -(0.2 + Math.random() * 0.5) * S, r: 3 + Math.random() * 5, a: 0.45, life: 0.5 }); }
  effects(dt) {
    const c = this.ctx, S = this.scale;
    for (const p of this.particles) { p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 9 * S * dt; }
    this.particles = this.particles.filter((p) => p.t < p.life);
    for (const p of this.particles) { c.globalAlpha = 1 - p.t / p.life; c.fillStyle = p.col; c.beginPath(); c.arc(p.x, p.y, p.r, 0, Math.PI * 2); c.fill(); c.strokeStyle = PAL.cornLine; c.lineWidth = 1; c.stroke(); }
    for (const p of this.puffs) { p.life -= dt; p.x += p.vx * dt; p.y += p.vy * dt; p.r += 14 * dt; }
    this.puffs = this.puffs.filter((p) => p.life > 0);
    for (const p of this.puffs) { c.globalAlpha = p.a * Math.max(0, p.life / 0.7); c.fillStyle = '#fff'; c.beginPath(); c.arc(p.x, p.y, p.r, 0, Math.PI * 2); c.fill(); }
    for (const r of this.rings) r.t += dt;
    this.rings = this.rings.filter((r) => r.t < 0.45);
    for (const r of this.rings) { c.globalAlpha = 1 - r.t / 0.45; c.strokeStyle = PAL.acc; c.lineWidth = Math.max(2, 0.06 * S * (1 - r.t)); c.beginPath(); c.arc(r.x, r.y, (0.3 + r.t * 2.4) * S, 0, Math.PI * 2); c.stroke(); }
    c.globalAlpha = 1;
  }
}
