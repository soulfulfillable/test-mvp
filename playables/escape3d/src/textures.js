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
