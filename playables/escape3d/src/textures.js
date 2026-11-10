// Escape 3D — procedural surface textures (drawn on a canvas once at start; no image files).
// One palette for everything: warm concrete greys, dark rust-red for danger, gold for "safe / go here".
import * as THREE from 'three';

function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

function canvas(size) { const c = document.createElement('canvas'); c.width = c.height = size; return [c, c.getContext('2d')]; }

function speckle(g, size, r, n, light, dark, alpha) {
  for (let i = 0; i < n; i++) {
    const x = r() * size, y = r() * size, s = 0.6 + r() * 1.8;
    g.fillStyle = (r() < 0.5 ? light : dark); g.globalAlpha = alpha * (0.4 + r() * 0.6);
    g.fillRect(x, y, s, s);
  }
  g.globalAlpha = 1;
}
function blotches(g, size, r, n, col, alpha) {
  for (let i = 0; i < n; i++) {
    const x = r() * size, y = r() * size, rad = size * (0.08 + r() * 0.22);
    const gr = g.createRadialGradient(x, y, 0, x, y, rad);
    gr.addColorStop(0, col.replace('A', String(alpha * (0.4 + r() * 0.6)))); gr.addColorStop(1, col.replace('A', '0'));
    g.fillStyle = gr; g.fillRect(x - rad, y - rad, rad * 2, rad * 2);
  }
}
function tex(c, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// floor: poured slabs, one 2×2 m slab per texture tile, saw-cut seams on the edges
export function floorTexture() {
  const S = 256, [c, g] = canvas(S), r = rng(7);
  g.fillStyle = '#a39d95'; g.fillRect(0, 0, S, S);
  blotches(g, S, r, 14, 'rgba(70,60,50,A)', 0.10);
  blotches(g, S, r, 8, 'rgba(255,250,240,A)', 0.10);
  speckle(g, S, r, 2600, '#c4beb6', '#6f6a64', 0.35);
  g.strokeStyle = 'rgba(40,36,32,.55)'; g.lineWidth = 3; g.strokeRect(1.5, 1.5, S - 3, S - 3);
  g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 1; g.strokeRect(4.5, 4.5, S - 9, S - 9);
  return tex(c);
}

// walls: board-formed concrete — horizontal form lines and tie holes, 2 m wide × 1 m tall per tile
export function wallTexture() {
  const S = 256, [c, g] = canvas(S), r = rng(11);
  g.fillStyle = '#8d8780'; g.fillRect(0, 0, S, S);
  blotches(g, S, r, 12, 'rgba(60,52,44,A)', 0.14);
  blotches(g, S, r, 6, 'rgba(255,248,236,A)', 0.08);
  speckle(g, S, r, 2200, '#aaa49c', '#5d5853', 0.3);
  for (let i = 0; i < 4; i++) { // board lines
    const y = i * (S / 4) + 0.5;
    g.fillStyle = 'rgba(30,28,25,.35)'; g.fillRect(0, y, S, 2);
    g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(0, y + 2, S, 1);
  }
  g.fillStyle = 'rgba(25,22,20,.55)'; // tie holes
  for (const [x, y] of [[S * 0.25, S * 0.5], [S * 0.75, S * 0.5]]) { g.beginPath(); g.arc(x, y, 4, 0, Math.PI * 2); g.fill(); }
  g.fillStyle = 'rgba(30,28,25,.35)'; g.fillRect(0, 0, 2, S); // panel joint
  return tex(c);
}

// spike base: dark rust plate with drilled holes — the only red-ish surface in the game (= danger)
export function spikePlateTexture() {
  const S = 128, [c, g] = canvas(S), r = rng(3);
  g.fillStyle = '#6b2a22'; g.fillRect(0, 0, S, S);
  speckle(g, S, r, 900, '#8c3a2e', '#3c1612', 0.5);
  g.fillStyle = 'rgba(20,8,6,.6)';
  for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.beginPath(); g.arc(16 + x * 32, 16 + y * 32, 5, 0, Math.PI * 2); g.fill(); }
  g.strokeStyle = 'rgba(0,0,0,.4)'; g.lineWidth = 2; g.strokeRect(1, 1, S - 2, S - 2);
  return tex(c);
}

// steel for the moving platforms: brushed light grey with a checker tread
export function steelTexture() {
  const S = 128, [c, g] = canvas(S), r = rng(5);
  g.fillStyle = '#b9b6b0'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 140; i++) { g.fillStyle = `rgba(${r() < 0.5 ? '255,255,255' : '60,60,60'},.06)`; g.fillRect(0, r() * S, S, 1); }
  g.fillStyle = 'rgba(80,78,74,.35)';
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
    g.save(); g.translate(8 + x * 16, 8 + y * 16); g.rotate((x + y) % 2 ? 0.7 : -0.7); g.fillRect(-4, -1, 8, 2); g.restore();
  }
  g.strokeStyle = 'rgba(40,38,35,.5)'; g.lineWidth = 3; g.strokeRect(1.5, 1.5, S - 3, S - 3);
  return tex(c);
}

// soft round glow (exit light, sparkles)
export function glowTexture() {
  const S = 128, [c, g] = canvas(S);
  const gr = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, S, S);
  return tex(c, false);
}

// a vertical light shaft: bright at the bottom-centre, fading up and to the sides
export function shaftTexture() {
  const W = 64, H = 128, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  const gx = g.createLinearGradient(0, 0, W, 0);
  gx.addColorStop(0, 'rgba(255,255,255,0)'); gx.addColorStop(0.5, 'rgba(255,255,255,1)'); gx.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gx; g.fillRect(0, 0, W, H);
  g.globalCompositeOperation = 'destination-in';
  const gy = g.createLinearGradient(0, 0, 0, H);
  gy.addColorStop(0, 'rgba(0,0,0,0)'); gy.addColorStop(1, 'rgba(0,0,0,1)');
  g.fillStyle = gy; g.fillRect(0, 0, W, H);
  return tex(c, false);
}

// blob shadow under the hero (helps judge landings over pits)
export function blobTexture() {
  const S = 64, [c, g] = canvas(S);
  const gr = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  gr.addColorStop(0, 'rgba(0,0,0,.55)'); gr.addColorStop(0.6, 'rgba(0,0,0,.25)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(0, 0, S, S);
  return tex(c, false);
}

// box with world-scaled UVs: one texture tile = `tile` metres on every face
export function worldBox(w, h, d, tileU = 2, tileV = 2) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const uv = geo.attributes.uv;
  // face order px, nx, py, ny, pz, nz — 4 verts each
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) {
    const i = f * 4 + k; uv.setXY(i, uv.getX(i) * dims[f][0] / tileU, uv.getY(i) * dims[f][1] / tileV);
  }
  return geo;
}

// plastic tile: white with a soft darker rim, so coloured parts show their size (one tile = 2 m) — tinted by material colour
export function plasticTexture() {
  const S = 128, [c, g] = canvas(S);
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, S, S);
  const gr = g.createLinearGradient(0, 0, 0, S); gr.addColorStop(0, 'rgba(255,255,255,0)'); gr.addColorStop(1, 'rgba(0,0,0,.05)');
  g.fillStyle = gr; g.fillRect(0, 0, S, S);
  g.strokeStyle = 'rgba(0,0,0,.16)'; g.lineWidth = 3; g.strokeRect(1.5, 1.5, S - 3, S - 3);
  g.strokeStyle = 'rgba(255,255,255,.5)'; g.lineWidth = 2; g.strokeRect(5, 5, S - 10, S - 10);
  return tex(c);
}

// ---- city rooftop theme ----
// red brick with mortar lines (one tile = 2 m wide × 1 m tall)
export function brickTexture(base = '#9a4a32') {
  const W = 256, H = 128, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d'); const r = rng(21);
  g.fillStyle = '#b9ab98'; g.fillRect(0, 0, W, H); // mortar
  const bh = H / 8, bw = W / 6;
  for (let row = 0; row < 8; row++) for (let i = -1; i < 7; i++) {
    const x = i * bw + (row % 2 ? bw / 2 : 0), y = row * bh;
    const v = (r() - 0.5) * 34; const col = new THREE.Color(base); col.offsetHSL((r() - 0.5) * 0.02, 0, v / 400);
    g.fillStyle = '#' + col.getHexString(); g.fillRect(x + 1.5, y + 1.5, bw - 3, bh - 3);
  }
  speckle(g, W, r, 1500, '#c98a6a', '#4a2418', 0.25);
  blotches(g, W, r, 6, 'rgba(40,30,25,A)', 0.12);
  const t = tex(c); return t;
}
// tar / gravel roof
export function roofTexture() {
  const S = 256, [c, g] = canvas(S), r = rng(9);
  g.fillStyle = '#5b5a58'; g.fillRect(0, 0, S, S);
  speckle(g, S, r, 5000, '#8a8986', '#2f2e2d', 0.45);
  blotches(g, S, r, 10, 'rgba(30,30,30,A)', 0.18);
  g.strokeStyle = 'rgba(20,20,20,.35)'; g.lineWidth = 2; g.strokeRect(1, 1, S - 2, S - 2); // membrane seams
  return tex(c);
}
// building facade: windows in a grid (some lit), one tile = 4 m × 4 m
export function facadeTexture(wall = '#8c6f5a', seed = 1) {
  const S = 256, [c, g] = canvas(S), r = rng(seed);
  g.fillStyle = wall; g.fillRect(0, 0, S, S);
  speckle(g, S, r, 1200, 'rgba(255,255,255,.4)', 'rgba(0,0,0,.4)', 0.2);
  const n = 4, cw = S / n;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const wx = x * cw + cw * 0.22, wy = y * cw + cw * 0.18, ww = cw * 0.56, wh = cw * 0.6;
    const lit = r() < 0.18;
    g.fillStyle = lit ? '#f7d58c' : (r() < 0.5 ? '#2c3a4a' : '#3b4c5e'); g.fillRect(wx, wy, ww, wh);
    g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(wx, wy, ww, wh * 0.18);
    g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(wx - 2, wy + wh, ww + 4, 4); // sill
    g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(wx + ww / 2 - 1, wy, 2, wh);
  }
  return tex(c);
}
// metal grate (vents)
export function grateTexture() {
  const S = 64, [c, g] = canvas(S);
  g.fillStyle = '#6d7277'; g.fillRect(0, 0, S, S);
  g.fillStyle = '#2a2d30'; for (let i = 0; i < 8; i++) g.fillRect(4, 4 + i * 7.5, S - 8, 3.5);
  g.strokeStyle = 'rgba(0,0,0,.4)'; g.lineWidth = 2; g.strokeRect(1, 1, S - 2, S - 2);
  return tex(c);
}
// asphalt street with lane marks
export function streetTexture() {
  const S = 256, [c, g] = canvas(S), r = rng(4);
  g.fillStyle = '#3a3b3d'; g.fillRect(0, 0, S, S);
  speckle(g, S, r, 3000, '#5a5b5d', '#222', 0.4);
  g.fillStyle = '#e8c547'; g.fillRect(S / 2 - 3, 0, 2, S); g.fillRect(S / 2 + 1, 0, 2, S);
  g.fillStyle = '#d9d9d9'; for (let y = 0; y < S; y += 64) { g.fillRect(S * 0.25, y, 3, 32); g.fillRect(S * 0.75, y, 3, 32); }
  return tex(c);
}
