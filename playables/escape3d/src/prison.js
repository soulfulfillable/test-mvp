// Escape 3D — one connected prison you explore (not a linear course). Forward is −Z (north).
//  Cell hall (start) ─ the main gate is barred, but you can SEE the exit through it.
//  The way out: up the stairs → along the upper catwalk (a broken gap to jump) → through a hole in the wall into the
//  laundry → past the steam-press vents → across the drain on floating pallets → out to the yard → around the
//  fence and razor wire, past the live puddle → the gate with daylight behind it.
// Same interface as before: solids / hazards / movers / traps / checkpoints / exit + step() / visual().
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { createGuard } from './guard.js';
import { MAKERS, makeDog, makeOwner } from './blocky.js';
import { floorTexture, wallTexture, grateTexture, glowTexture, shaftTexture, worldBox } from './textures.js';

export const GOLD = new THREE.Color('#ffc93c');

// ---------- textures drawn once on canvases ----------
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
function cnv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return [c, c.getContext('2d')]; }
function T(c, repeat = true) { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping; return t; }
// painted cinder-block wall (2 m × 2 m tile, blocks 0.4 × 0.2)
function blockTex(paint) {
  const [c, g] = cnv(256, 256), r = rng(17);
  g.fillStyle = paint; g.fillRect(0, 0, 256, 256);
  for (let row = 0; row < 10; row++) for (let i = -1; i < 6; i++) {
    const x = i * 51.2 + (row % 2 ? 25.6 : 0), y = row * 25.6;
    g.fillStyle = `rgba(0,0,0,${0.03 + r() * 0.04})`; g.fillRect(x + 2, y + 2, 47, 21.6);
    g.fillStyle = 'rgba(0,0,0,.16)'; g.fillRect(x, y, 51.2, 2); g.fillRect(x, y, 2, 25.6);
    g.fillStyle = 'rgba(255,255,255,.10)'; g.fillRect(x + 2, y + 2, 47, 1.5);
  }
  for (let i = 0; i < 900; i++) { g.fillStyle = r() < 0.5 ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.08)'; g.fillRect(r() * 256, r() * 256, 1.5, 1.5); }
  return T(c);
}
// white glazed wall tile (laundry), 1 m tile
function tileTex() {
  const [c, g] = cnv(128, 128); g.fillStyle = '#e9ecea'; g.fillRect(0, 0, 128, 128);
  g.strokeStyle = 'rgba(80,90,90,.35)'; g.lineWidth = 2;
  for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(i * 16, 0); g.lineTo(i * 16, 128); g.stroke(); g.beginPath(); g.moveTo(0, i * 16); g.lineTo(128, i * 16); g.stroke(); }
  return T(c);
}
// chain-link fence with alpha (2 m tile)
function fenceTex() {
  const [c, g] = cnv(128, 128); g.clearRect(0, 0, 128, 128);
  g.strokeStyle = 'rgba(190,196,200,1)'; g.lineWidth = 2.2;
  for (let i = -128; i < 256; i += 16) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 128, 128); g.stroke(); g.beginPath(); g.moveTo(i + 128, 0); g.lineTo(i, 128); g.stroke(); }
  return T(c);
}
// yard asphalt
function asphaltTex() {
  const [c, g] = cnv(256, 256), r = rng(8); g.fillStyle = '#6b6a66'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5000; i++) { g.fillStyle = r() < 0.5 ? 'rgba(255,255,255,.10)' : 'rgba(0,0,0,.14)'; g.fillRect(r() * 256, r() * 256, 1.6, 1.6); }
  for (let i = 0; i < 6; i++) { g.strokeStyle = 'rgba(30,30,30,.35)'; g.lineWidth = 1; g.beginPath(); let x = r() * 256, y = r() * 256; g.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 50; y += (r() - 0.5) * 50; g.lineTo(x, y); } g.stroke(); }
  return T(c);
}

export function buildCourse(scene) {
  const C = { solids: [], hazards: [], movers: [], traps: [], checkpoints: [], walls: [], buttons: [], doors: [], guards: [], friends: [], exit: null, killY: -1.0 };
  const STD = (o) => new THREE.MeshStandardMaterial({ roughness: 0.9, metalness: 0, ...o });
  const M = {
    floor: STD({ map: floorTexture(), color: '#c9c6c0', roughness: 0.55 }),          // polished concrete
    cream: STD({ map: blockTex('#d8d0bb') }), green: STD({ map: blockTex('#5f7469') }),
    concrete: STD({ map: wallTexture(), color: '#b5b0a8' }),
    tile: STD({ map: tileTex(), roughness: 0.4 }),
    asphalt: STD({ map: asphaltTex() }),
    steel: STD({ color: '#5a6066', roughness: 0.45, metalness: 0.6 }),
    bars: STD({ color: '#3b4046', roughness: 0.4, metalness: 0.7 }),
    rail: STD({ color: '#e4b51e', roughness: 0.5, metalness: 0.2 }),
    grate: STD({ map: grateTexture(), roughness: 0.6, metalness: 0.4 }),
    bunk: STD({ color: '#6d747a', roughness: 0.5, metalness: 0.5 }), mattress: STD({ color: '#8fa0ae' }),
    steelWhite: STD({ color: '#d7dadc', roughness: 0.3, metalness: 0.4 }),
    washer: STD({ color: '#eceeef', roughness: 0.35 }), washerDoor: STD({ color: '#2d3a44', roughness: 0.2, metalness: 0.3 }),
    wood: STD({ color: '#9b7a4f' }), woodD: STD({ color: '#6d5132' }),
    lamp: new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#fff6e0', emissiveIntensity: 1.4 }),
    kill: new THREE.MeshStandardMaterial({ color: '#ff7a1a', emissive: '#ff5a10', emissiveIntensity: 1.7, roughness: 0.4 }),
    water: new THREE.MeshStandardMaterial({ color: '#2f5a5c', roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.88 }),
    puddle: new THREE.MeshStandardMaterial({ color: '#3d6f8a', emissive: '#3aa0ff', emissiveIntensity: 0.35, roughness: 0.1, transparent: true, opacity: 0.9 }),
    fence: new THREE.MeshStandardMaterial({ map: fenceTex(), transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.5, metalness: 0.5 }),
    wire: STD({ color: '#9aa1a6', roughness: 0.35, metalness: 0.8 }),
    gold: new THREE.MeshStandardMaterial({ color: '#c99a1a', emissive: GOLD, emissiveIntensity: 0.9, roughness: 0.4 }),
    goldDim: new THREE.MeshStandardMaterial({ color: '#8d8a84', emissive: GOLD, emissiveIntensity: 0.08, roughness: 0.6 }),
    stripe: STD({ color: '#f2c230', roughness: 0.6 }),
    steam: new THREE.MeshBasicMaterial({ map: glowTexture(), color: '#fff4ea', transparent: true, opacity: 0, depthWrite: false }),
    live: new THREE.MeshStandardMaterial({ color: '#ffe14a', emissive: '#ffd21f', emissiveIntensity: 1.4, roughness: 0.4 }),
    grass: STD({ color: '#7fb069' }), path: STD({ color: '#d8c9a3' }), leaf: STD({ color: '#4f8f4a' }), leaf2: STD({ color: '#6aa85a' }), trunk: STD({ color: '#6d5132' }),
    house: STD({ color: '#f3e6c8' }), roof: STD({ color: '#c0503c' }), houseB: STD({ color: '#cfe0ea' }), roofB: STD({ color: '#4d6a86' }),
    spark: new THREE.MeshBasicMaterial({ map: glowTexture(), color: '#bfe3ff', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }),
  };

  // ---------- helpers ----------
  function solid(x0, x1, y0, y1, z0, z1, mat, opts = {}) {
    const min = new THREE.Vector3(Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1));
    const max = new THREE.Vector3(Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1));
    const size = max.clone().sub(min), mid = min.clone().add(max).multiplyScalar(0.5);
    let mesh = null;
    if (mat) {
      mesh = new THREE.Mesh(worldBox(size.x, size.y, size.z, opts.tileU || 2, opts.tileV || 2), mat);
      mesh.position.copy(mid); mesh.castShadow = opts.cast !== false; mesh.receiveShadow = true; scene.add(mesh);
    }
    if (opts.collide !== false) {
      const box = { min, max, mesh, top: max.y, seeThrough: !!opts.seeThrough, camBlock: !!opts.camBlock, noStep: !!opts.noStep };
      C.solids.push(box);
      if (opts.wall !== false && !opts.seeThrough) C.walls.push(box);
      return box;
    }
    return mesh;
  }
  const deco = (x0, x1, y0, y1, z0, z1, mat, o = {}) => solid(x0, x1, y0, y1, z0, z1, mat, { collide: false, ...o });
  // a wall along x or z with optional openings [a0, a1, yTop] (the gap runs from the floor y0 up to yTop)
  function wallX(x0, x1, z0, z1, y0, y1, mat, holes = []) { // wall running along x (thin in z)
    let x = x0; const hs = [...holes].sort((a, b) => a[0] - b[0]);
    for (const [a, b, yb, ya = y0] of hs) {
      if (a > x) solid(x, a, y0, y1, z0, z1, mat, { tileU: 2, noStep: true });
      if (ya > y0) solid(a, b, y0, ya, z0, z1, mat, { noStep: true });
      solid(a, b, yb, y1, z0, z1, mat, { noStep: true }); x = b;
    }
    if (x < x1) solid(x, x1, y0, y1, z0, z1, mat, { noStep: true });
  }
  function wallZ(z0, z1, x0, x1, y0, y1, mat, holes = []) { // wall running along z (thin in x); z0 > z1
    let z = z0; const hs = [...holes].sort((a, b) => b[0] - a[0]);
    for (const [a, b, yb, ya = y0] of hs) { // a > b
      if (a < z) solid(x0, x1, y0, y1, z, a, mat, { noStep: true });
      if (ya > y0) solid(x0, x1, y0, ya, a, b, mat, { noStep: true });
      solid(x0, x1, yb, y1, a, b, mat, { noStep: true }); z = b;
    }
    if (z > z1) solid(x0, x1, y0, y1, z, z1, mat, { noStep: true });
  }
  // green dado along the base of a painted wall (inside face)
  const dado = (x0, x1, z0, z1) => deco(x0, x1, 0, 1.3, z0, z1, M.green, { cast: false });
  // vertical bars (see-through collider)
  function bars(x0, x1, z0, z1, y0, y1, collide = true) {
    const alongX = Math.abs(x1 - x0) > Math.abs(z1 - z0); const len = alongX ? Math.abs(x1 - x0) : Math.abs(z1 - z0);
    const n = Math.max(2, Math.round(len / 0.16));
    for (let i = 0; i <= n; i++) {
      const t = i / n; const x = alongX ? x0 + (x1 - x0) * t : (x0 + x1) / 2, z = alongX ? (z0 + z1) / 2 : z0 + (z1 - z0) * t;
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, y1 - y0, 6), M.bars); b.position.set(x, (y0 + y1) / 2, z); b.castShadow = true; scene.add(b);
    }
    for (const y of [y0 + 0.05, (y0 + y1) / 2, y1 - 0.05]) deco(Math.min(x0, x1) - (alongX ? 0 : 0.04), Math.max(x0, x1) + (alongX ? 0 : 0.04), y - 0.04, y + 0.04, Math.max(z0, z1) + (alongX ? 0.04 : 0), Math.min(z0, z1) - (alongX ? 0.04 : 0), M.bars);
    if (collide) solid(x0, x1, y0, y1, z0, z1, null, { seeThrough: true, camBlock: true, noStep: true }); // the camera stays on the hero's side of bars
  }
  function railing(x0, x1, z0, z1, y) { // yellow pipe railing, 1 m (a collider you can hop over)
    const alongX = Math.abs(x1 - x0) > Math.abs(z1 - z0);
    deco(x0, x1, y + 0.95, y + 1.05, z0, z1, M.rail); deco(x0, x1, y + 0.48, y + 0.54, z0, z1, M.rail);
    const len = alongX ? Math.abs(x1 - x0) : Math.abs(z1 - z0); const n = Math.max(1, Math.round(len / 1.6));
    for (let i = 0; i <= n; i++) { const t = i / n; const x = alongX ? x0 + (x1 - x0) * t : (x0 + x1) / 2, z = alongX ? (z0 + z1) / 2 : z0 + (z1 - z0) * t; deco(x - 0.04, x + 0.04, y, y + 1.05, z - 0.04, z + 0.04, M.rail); }
    solid(x0, x1, y, y + 1.0, z0, z1, null, { seeThrough: true, noStep: true });
  }
  function ceilingLamp(x, y, z, len = 1.6) { deco(x - 0.12, x + 0.12, y - 0.08, y, z + len / 2, z - len / 2, M.lamp, { cast: false }); }

  // hazards ----------------------------------------------------------------
  function vents(x0, x1, z0, z1, trap) { // steam-press floor vents: orange glow between bars, steam; a trap blasts a wall
    const w = Math.abs(x1 - x0), d = Math.abs(z1 - z0), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const g = new THREE.Group(); g.position.set(cx, 0, cz); scene.add(g);
    const glow = new THREE.Mesh(new THREE.BoxGeometry(w, 0.16, d), M.kill); glow.position.y = 0.08; g.add(glow);
    const nb = Math.max(2, Math.round(Math.max(w, d) / 0.34)); const alongX = w >= d;
    for (let i = 0; i < nb; i++) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(alongX ? 0.06 : w, 0.12, alongX ? d : 0.06), M.steel);
      if (alongX) bar.position.set(-w / 2 + (i + 0.5) * (w / nb), 0.12, 0); else bar.position.set(0, 0.12, -d / 2 + (i + 0.5) * (d / nb)); g.add(bar);
    }
    const puffs = []; for (let i = 0; i < (trap ? 12 : 5); i++) { const sp = new THREE.Sprite(M.steam.clone()); sp.userData = { x: (Math.random() - 0.5) * w, z: (Math.random() - 0.5) * d, o: Math.random() }; g.add(sp); puffs.push(sp); }
    const hz = { kind: 'vent', min: new THREE.Vector3(cx - w / 2, 0, cz - d / 2), max: new THREE.Vector3(cx + w / 2, 0.42, cz + d / 2), active: true, group: g, puffs, trap: !!trap };
    C.hazards.push(hz);
    if (trap) { trap.hz = hz; trap.group = g; trap.h = 0; C.traps.push(trap); }
    return hz;
  }
  function livePuddle(x0, x1, z0, z1, y = 0) { // water with a sparking cable in it
    const w = Math.abs(x1 - x0), d = Math.abs(z1 - z0), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const g = new THREE.Group(); g.position.set(cx, y, cz); scene.add(g);
    const pool = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.02, 24), M.puddle); pool.scale.set(w, 1, d); pool.position.y = 0.012; g.add(pool);
    const cable = new THREE.Mesh(new THREE.TorusGeometry(Math.min(w, d) * 0.3, 0.035, 5, 20, 4.2), STD({ color: '#141414' })); cable.rotation.x = -Math.PI / 2; cable.position.y = 0.04; g.add(cable);
    const sparks = []; for (let i = 0; i < 8; i++) { const sp = new THREE.Sprite(M.spark.clone()); sp.userData = { x: (Math.random() - 0.5) * w * 0.7, z: (Math.random() - 0.5) * d * 0.7, o: Math.random() }; g.add(sp); sparks.push(sp); }
    const light = new THREE.PointLight('#7cc7ff', 0, 5, 2); light.position.y = 0.5; g.add(light);
    const hz = { kind: 'puddle', min: new THREE.Vector3(cx - w / 2 * 0.9, y, cz - d / 2 * 0.9), max: new THREE.Vector3(cx + w / 2 * 0.9, y + 0.3, cz + d / 2 * 0.9), active: true, group: g, sparks, light };
    C.hazards.push(hz); return hz;
  }
  function razorWire(x0, x1, z0, z1, y = 0) { // a low electric fence (two live wires): jump it or go round the end
    const alongX = Math.abs(x1 - x0) > Math.abs(z1 - z0); const len = alongX ? Math.abs(x1 - x0) : Math.abs(z1 - z0);
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const g = new THREE.Group(); g.position.set(cx, y, cz); scene.add(g);
    const n = Math.max(2, Math.round(len / 2.2));
    for (let i = 0; i <= n; i++) {
      const o = -len / 2 + len * i / n; const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.7, 0.12), i % 2 ? M.stripe : M.steel);
      post.position.set(alongX ? o : 0, 0.35, alongX ? 0 : o); post.castShadow = true; g.add(post);
    }
    for (const h of [0.28, 0.56]) { const w = new THREE.Mesh(new THREE.BoxGeometry(alongX ? len : 0.035, 0.035, alongX ? 0.035 : len), M.live); w.position.y = h; g.add(w); }
    const sparks = []; for (let i = 0; i < Math.min(10, Math.round(len / 2.5)); i++) { const sp = new THREE.Sprite(M.spark.clone()); const o = (Math.random() - 0.5) * len; sp.userData = { x: alongX ? o : 0, z: alongX ? 0 : o, o: Math.random() }; g.add(sp); sparks.push(sp); }
    const hz = { kind: 'wire', min: new THREE.Vector3(Math.min(x0, x1), y, Math.min(z0, z1)), max: new THREE.Vector3(Math.max(x0, x1), y + 0.62, Math.max(z0, z1)), active: true, group: g, sparks };
    C.hazards.push(hz); return hz;
  }
  // a small cage holding a friend; the bars sink into the floor when its button is pressed
  function friendCage(x, z, kind) {
    const S = 1.15, Hh = 1.15; const g = new THREE.Group(); g.position.set(x, 0, z); scene.add(g);
    const geos = [];
    const add = (geo, px, py, pz) => { geo.translate(px, py, pz); geos.push(geo.index ? geo.toNonIndexed() : geo); };
    for (let i = 0; i <= 6; i++) { const o = -S / 2 + S * i / 6; for (const [bx, bz] of [[o, -S / 2], [o, S / 2], [-S / 2, o], [S / 2, o]]) add(new THREE.CylinderGeometry(0.022, 0.022, Hh, 5), bx, Hh / 2, bz); }
    for (const yy of [0.03, Hh]) for (const [w, d, bx, bz] of [[S, 0.06, 0, -S / 2], [S, 0.06, 0, S / 2], [0.06, S, -S / 2, 0], [0.06, S, S / 2, 0]]) add(new THREE.BoxGeometry(w + 0.06, 0.06, d + 0.06), bx, yy, bz);
    const cage = new THREE.Mesh(mergeGeometries(geos.map((q) => { for (const k of Object.keys(q.attributes)) if (!['position', 'normal', 'uv'].includes(k)) q.deleteAttribute(k); return q; }), false), M.bars); cage.castShadow = true; g.add(cage);
    const box = { min: new THREE.Vector3(x - S / 2, 0, z - S / 2), max: new THREE.Vector3(x + S / 2, Hh, z + S / 2), top: Hh, seeThrough: true, noStep: true }; C.solids.push(box);
    const holder = new THREE.Group(); holder.position.set(x, 0, z); scene.add(holder);
    const f = { kind, home: new THREE.Vector3(x, 0, z), holder, body: null, cage, cageG: g, box, open: 0, free: false, order: -1, pos: new THREE.Vector3(x, 0, z), facing: Math.PI, pose: { mode: 'idle', speed: 0, t: Math.random() * 5 }, hop: 0 };
    f.setKind = (k) => { if (f.body) holder.remove(f.body.root); f.kind = k; f.body = MAKERS[k](k === 'dog' ? { coat: '#7a5638', ear: '#553a25', light: '#ead9c2', harness: '#3a7bd5' } : undefined); holder.add(f.body.root); };
    f.setKind(kind); C.friends.push(f); return f;
  }

  // checkpoints / movers / exit --------------------------------------------
  function checkpoint(i, x, y, z, lit = false) {
    const g = new THREE.Group(); g.position.set(x, y + 0.006, z); scene.add(g);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.78, 40), lit ? M.gold : M.goldDim.clone()); ring.rotation.x = -Math.PI / 2; g.add(ring);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 3, 24, 1, true),
      new THREE.MeshBasicMaterial({ map: shaftTexture(), color: GOLD, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    beam.position.y = 1.5; g.add(beam);
    const cp = { i, pos: new THREE.Vector3(x, y, z), group: g, ring, beam, lit, flash: 0 };
    C.checkpoints.push(cp); return cp;
  }
  function pallet(base, axis, amp, period, phase) { // a floating wooden pallet drifting in the drain
    const W = 1.8, H = 0.3, D = 1.8;
    const g = new THREE.Group();
    for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(W, 0.06, 0.28), M.wood); b.position.set(0, -0.03, -D / 2 + 0.14 + i * (D - 0.28) / 4); b.castShadow = b.receiveShadow = true; g.add(b); }
    for (const x of [-W / 2 + 0.1, 0, W / 2 - 0.1]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.18, D), M.woodD); b.position.set(x, -0.15, 0); g.add(b); }
    scene.add(g);
    const box = { min: new THREE.Vector3(), max: new THREE.Vector3(), top: 0, mover: true, delta: new THREE.Vector3(), noStep: true };
    const mv = { base, axis, amp, period, phase, g, box, W, H, D, pos: new THREE.Vector3() };
    mv.at = (t, out = new THREE.Vector3()) => out.copy(base).addScaledVector(axis, amp * Math.sin((t / period + phase) * Math.PI * 2));
    C.movers.push(mv); C.solids.push(box); setMover(mv, 0, true); return mv;
  }
  function exitDoor(cx, z, y, x0, x1, wallTop) { // the gate in the north perimeter wall, daylight beyond
    const g = new THREE.Group(); scene.add(g);
    const DW = 2.8, DH = 3.4, Tw = 0.8;
    solid(x0, cx - DW / 2, y, wallTop, z + Tw / 2, z - Tw / 2, M.concrete, { noStep: true, tileV: 2 });
    solid(cx + DW / 2, x1, y, wallTop, z + Tw / 2, z - Tw / 2, M.concrete, { noStep: true, tileV: 2 });
    solid(cx - DW / 2, cx + DW / 2, y + DH, wallTop, z + Tw / 2, z - Tw / 2, M.concrete, { noStep: true });
    for (const [a, b, c0, c1] of [[cx - DW / 2 - 0.2, cx - DW / 2, y, y + DH + 0.2], [cx + DW / 2, cx + DW / 2 + 0.2, y, y + DH + 0.2], [cx - DW / 2 - 0.2, cx + DW / 2 + 0.2, y + DH, y + DH + 0.2]]) {
      const f = new THREE.Mesh(new THREE.BoxGeometry(b - a, c1 - c0, 0.14), M.gold); f.position.set((a + b) / 2, (c0 + c1) / 2, z + Tw / 2 + 0.07); g.add(f);
    }
    const leafMat = STD({ color: '#55606a', roughness: 0.45, metalness: 0.6 });
    const leaves = [-1, 1].map((s) => { const m = new THREE.Mesh(worldBox(DW / 2, DH, 0.2, 1.4, 1.7), leafMat); m.position.set(cx + s * DW / 4, y + DH / 2, z); m.castShadow = true; g.add(m); return m; });
    const doorBox = { min: new THREE.Vector3(cx - DW / 2, y, z - 0.2), max: new THREE.Vector3(cx + DW / 2, y + DH, z + 0.2), top: y + DH, noStep: true };
    C.solids.push(doorBox);
    const seam = new THREE.Mesh(new THREE.PlaneGeometry(0.07, DH), new THREE.MeshBasicMaterial({ color: '#fff0cc', fog: false })); seam.position.set(cx, y + DH / 2, z + 0.11); g.add(seam);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: '#ffd896', transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    glow.scale.set(12, 12, 1); glow.position.set(cx, y + DH * 0.55, z - 1.4); g.add(glow);
    const shaftMat = new THREE.MeshBasicMaterial({ map: shaftTexture(), color: '#ffe2a8', transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    const shafts = [];
    for (let i = 0; i < 3; i++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(DW * (1 + i * 0.35), 9), shaftMat); p.rotation.x = -Math.PI / 2 + 0.12; p.rotation.z = (i - 1) * 0.08; p.position.set(cx, y + 0.6 + i * 0.5, z + 4.5); g.add(p); shafts.push(p); }
    // a tall soft beam of daylight above the gate: you can spot the way out from anywhere in the prison
    const beacon = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 2.2, 46, 20, 1, true), new THREE.MeshBasicMaterial({ map: shaftTexture(), color: '#ffe6b0', transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    beacon.rotation.x = Math.PI; beacon.position.set(cx, y + 23, z - 2.2); g.add(beacon);
    const lamp = new THREE.PointLight('#ffcf8a', 30, 16, 1.6); lamp.position.set(cx, y + 2.4, z + 1.4); g.add(lamp);
    return { g, x: cx, z, y, leaves, doorBox, glow, shafts, shaftMat, seam, lamp, beacon, DW, open: 0, opening: false };
  }
  function setMover(mv, t, first) {
    const prev = mv.pos.clone(); mv.at(t, mv.pos); mv.g.position.copy(mv.pos);
    const b = mv.box; b.min.set(mv.pos.x - mv.W / 2, mv.pos.y - mv.H, mv.pos.z - mv.D / 2); b.max.set(mv.pos.x + mv.W / 2, mv.pos.y, mv.pos.z + mv.D / 2); b.top = mv.pos.y;
    b.delta.copy(first ? new THREE.Vector3() : mv.pos.clone().sub(prev));
  }

  // a big green floor button with a bobbing arrow above it; stepping on it runs `onPress`
  function button(x, y, z, onPress) {
    const g = new THREE.Group(); g.position.set(x, y, z); scene.add(g);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.68, 0.08, 24), M.steel); base.position.y = 0.04; g.add(base);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.12, 24), new THREE.MeshStandardMaterial({ color: '#2fd15a', emissive: '#22c24c', emissiveIntensity: 1.3, roughness: 0.4 })); cap.position.y = 0.13; g.add(cap);
    const arrow = new THREE.Group(); arrow.position.y = 1.9; g.add(arrow);
    const am = new THREE.MeshStandardMaterial({ color: '#ffd21f', emissive: '#ffc400', emissiveIntensity: 0.9, roughness: 0.5 });
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.5, 0.22), am); shaft.position.y = 0.35; arrow.add(shaft);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.45, 4), am); tip.rotation.x = Math.PI; tip.position.y = -0.1; arrow.add(tip);
    const light = new THREE.PointLight('#3dff7a', 4, 5, 2); light.position.y = 0.6; g.add(light);
    const b = { pos: new THREE.Vector3(x, y, z), g, cap, arrow, light, pressed: false, onPress }; C.buttons.push(b); return b;
  }
  // a barred door across an opening in a wall along x; slides up when opened
  function barDoor(x0, x1, z, h) {
    const g = new THREE.Group(); scene.add(g);
    const n = Math.round((x1 - x0) / 0.18);
    for (let i = 0; i <= n; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, h, 6), M.bars); b.position.set(x0 + (x1 - x0) * i / n, h / 2, z); b.castShadow = true; g.add(b); }
    for (const yy of [0.08, h / 2, h - 0.08]) { const r = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, 0.1, 0.1), M.bars); r.position.set((x0 + x1) / 2, yy, z); g.add(r); }
    const lampMat = new THREE.MeshStandardMaterial({ color: '#ff3b30', emissive: '#ff2a20', emissiveIntensity: 1.6 });
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.12), lampMat); lamp.position.set((x0 + x1) / 2, h + 0.35, z + 0.36); scene.add(lamp);
    const box = { min: new THREE.Vector3(x0, 0, z - 0.15), max: new THREE.Vector3(x1, h, z + 0.15), top: h, seeThrough: true, noStep: true };
    C.solids.push(box);
    const d = { g, box, h, lamp, lampMat, open: 0, opening: false }; C.doors.push(d); return d;
  }

  // =====================================================================================
  // CELL HALL  x[-8, 8]  z[8, -20]  — 9 m tall, open roof trusses (sky above)
  // =====================================================================================
  const HY = 9;
  solid(-8.6, 8.6, -0.4, 0, 8.6, -20.6, M.floor, { cast: false, tileU: 2 });
  for (const x of [-1.3, 1.3]) deco(x - 0.07, x + 0.07, 0.002, 0.012, 8, -20, STD({ color: '#d9b43a' }), { cast: false }); // yellow lines either side of the walkway
  wallX(-8.6, 8.6, 8.6, 8.0, 0, HY, M.cream);                                    // south
  wallZ(8.6, -20.6, -8.6, -8.0, 0, HY, M.cream);                                 // west (behind the cells)
  wallZ(8.6, -20.6, 8.0, 8.6, 0, HY, M.cream, [[-15.0, -17.6, 6.3, 3.5]]);      // east: the broken hole at catwalk height → laundry
  wallX(-8.6, 8.6, -20.0, -20.6, 0, HY, M.cream, [[-2.6, 2.6, 4.6]]);           // north: the main gate opening…
  bars(-2.6, 2.6, -20.25, -20.35, 0, 4.6);                                      // …barred shut. You can see the exit through it.
  deco(-2.8, 2.8, 4.6, 4.9, -19.9, -20.7, M.steel);
  dado(-8, 8, 8.0, 7.95); dado(7.95, 8, 8, -20); dado(-8, 8, -19.95, -20);
  // a few broken-off chunks around the hole (it was knocked through — the way you'll find)
  deco(7.4, 8.0, 3.5, 3.75, -14.6, -15.2, M.cream); deco(7.5, 8.0, 3.5, 3.6, -17.4, -18.1, M.cream);
  // cells on the west side: 7 cells, bars on the front; the second from the south is open
  for (let k = 0; k < 7; k++) {
    const z0 = 8 - k * 4, z1 = z0 - 4;
    solid(-8.0, -4.6, 0, 3.2, z0, z0 - 0.15, M.cream, { noStep: true });          // divider
    deco(-8.0, -4.4, 3.2, 3.3, z0 - 0.02, z0 - 0.13, M.steel);                     // open-topped cells (the camera can look in from above)
    deco(-7.95, -7.0, 0, 0.45, z0 - 0.4, z0 - 2.4, M.bunk); deco(-7.95, -7.05, 0.45, 0.6, z0 - 0.45, z0 - 2.35, M.mattress); // bunk
    solid(-7.95, -7.0, 0, 0.6, z0 - 0.4, z0 - 2.4, null);
    deco(-7.9, -7.4, 0, 0.5, z1 + 0.9, z1 + 0.4, M.steelWhite); solid(-7.9, -7.4, 0, 0.5, z1 + 0.9, z1 + 0.4, null); // toilet
    if (k === 1) { bars(-4.5, -4.5, z0 - 1.85, z1 + 0.15, 0, 3.2); bars(-4.62, -4.62, z0 - 1.9, z1 + 0.5, 0, 3.2, false); } // your cell: the door is slid open
    else {
      bars(-4.5, -4.5, z0 - 0.15, z1 + 0.15, 0, 3.2);
      const pals = [{ coat: '#7a5638', ear: '#553a25', light: '#ead9c2', harness: '#3a7bd5' }, null, { coat: '#f1efe9', ear: '#cfc9bd', light: '#ffffff', harness: '#d92b2b' }, 'bunny', { coat: '#3a3532', ear: '#262220', light: '#b9aea0', harness: '#f2c230' }, 'cat', null];
      const pk = pals[k]; const a = pk === 'bunny' ? MAKERS.bunny() : pk === 'cat' || pk === null ? MAKERS.cat() : makeDog(pk);
      a.animate({ mode: 'idle', speed: 0, t: k * 1.7 }, 0); a.root.position.set(-5.4 - (k % 2) * 0.5, 0, z0 - 1.6 - (k % 3) * 0.4); a.root.rotation.y = Math.PI / 2 + (k % 2 ? 0.4 : -0.3); scene.add(a.root);
    }
  }
  // upper tier above the cells: barred windows high on the west wall (daylight in)
  for (let k = 0; k < 7; k++) { const z = 6 - k * 4; deco(-8.0, -7.95, 5.0, 7.4, z + 0.8, z - 0.8, new THREE.MeshBasicMaterial({ color: '#e9f1f5' }), { cast: false }); bars(-7.94, -7.94, z + 0.8, z - 0.8, 5.0, 7.4, false); }
  // stairs up the east side (0.5 m steps, walk up), then the catwalk at 3.5 m
  for (let i = 0; i < 7; i++) {
    solid(2.6, 4.5, 0, 0.5 * (i + 1), -i, -(i + 1), M.grate, { tileU: 1, tileV: 1 });
    deco(2.6, 4.5, 0.5 * (i + 1) - 0.04, 0.5 * (i + 1) + 0.01, -i, -i - 0.12, M.stripe, { cast: false });
  }
  solid(4.5, 8.0, 3.2, 3.5, 8.0, -10.6, M.grate, { tileU: 1, tileV: 1 });
  solid(4.5, 8.0, 3.2, 3.5, -12.6, -20.0, M.grate, { tileU: 1, tileV: 1 });     // the broken gap at z -10.6 … -12.6
  deco(4.5, 4.9, 3.0, 3.2, -10.6, -11.2, M.steel); deco(7.6, 8.0, 2.9, 3.2, -12.0, -12.6, M.steel); // bent beam ends
  railing(4.5, 4.6, 8.0, -5.8, 3.5); railing(4.5, 4.6, -7.2, -10.6, 3.5); railing(4.5, 4.6, -12.6, -20.0, 3.5);
  railing(4.6, 8.0, 8.0, 7.9, 3.5);
  for (const z of [6, 2, -2, -9.6, -14, -18.5]) solid(4.55, 4.75, 0, 3.2, z + 0.1, z - 0.1, M.steel, { noStep: true }); // posts
  // roof trusses + hanging lights (open sky between)
  for (let z = 6; z > -20; z -= 4) { deco(-8.6, 8.6, HY - 0.5, HY - 0.25, z + 0.12, z - 0.12, M.steel); ceilingLamp(0, HY - 0.6, z - 2, 2.2); }
  // a flooded corner with a live cable (south-west) — don't step in
  livePuddle(-3.8, -1.6, 7.4, 5.2);
  checkpoint(0, -5.6, 0, 3.0, true);                                              // you start inside your (open) cell
  checkpoint(1, 6.25, 3.5, -14.0);

  // =====================================================================================
  // LAUNDRY  x[8.6, 22]  z[-8, -24]  — tiled, a drain channel you cross on drifting pallets
  // =====================================================================================
  const LY = 7;
  wallX(8.6, 22.6, -7.4, -8.0, 0, LY, M.tile);                                   // south
  wallZ(-7.4, -24.6, 22.0, 22.6, 0, LY, M.tile);                                 // east
  wallZ(-20.6, -24.6, 8.0, 8.6, 0, LY, M.tile);                                  // west (south of here is the hall wall)
  wallX(8.0, 22.6, -24.0, -24.6, 0, LY, M.tile, [[17.6, 20.6, 3.2]]);           // north: the door out to the yard
  solid(8.6, 13.0, -3.0, 0, -8.0, -24.0, M.floor, { cast: false });             // west floor (with its body down to the drain bottom)
  solid(18.0, 22.0, -3.0, 0, -8.0, -24.0, M.floor, { cast: false });            // east floor
  solid(13.0, 18.0, -3.4, -3.0, -8.0, -24.0, M.concrete, { cast: false });      // drain bottom
  const water = new THREE.Mesh(new THREE.PlaneGeometry(5, 16), M.water); water.rotation.x = -Math.PI / 2; water.position.set(15.5, -1.2, -16); scene.add(water);
  deco(12.9, 13.0, -1.2, 0.005, -8, -24, STD({ color: '#3e4a4a' }), { cast: false }); deco(18.0, 18.1, -1.2, 0.005, -8, -24, STD({ color: '#3e4a4a' }), { cast: false });
  solid(8.6, 10.4, 3.2, 3.5, -13.4, -19.2, M.grate, { tileU: 1, tileV: 1 });     // landing inside the hole (drop down from here)
  for (const z of [-13.6, -19.0]) solid(10.2, 10.4, 0, 3.2, z + 0.1, z - 0.1, M.steel, { noStep: true });
  // washers and dryers along the east wall, folding tables on the west
  for (let k = 0; k < 6; k++) {
    const z = -9.2 - k * 1.5; solid(21.0, 22.0, 0, 1.1, z, z - 1.3, M.washer, { noStep: true });
    const d = new THREE.Mesh(new THREE.CircleGeometry(0.34, 20), M.washerDoor); d.rotation.y = -Math.PI / 2; d.position.set(20.99, 0.6, z - 0.65); scene.add(d);
  }
  solid(8.8, 10.0, 0, 0.85, -9.0, -12.2, M.steelWhite, { noStep: true });
  for (let z = -10; z > -24; z -= 4) ceilingLamp(15.5, LY - 0.3, z, 2.4);
  for (let z = -10; z > -24; z -= 4) deco(8.6, 22, LY - 0.25, LY, z + 0.1, z - 0.1, M.steel);
  vents(11.3, 12.2, -8.0, -24.0, { period: 2.6, phase: 0 });                     // the steam-press vent strip (time it or jump it)
  pallet(new THREE.Vector3(14.3, -0.6, -16), new THREE.Vector3(0, 0, 1), 3.5, 5.0, 0);
  pallet(new THREE.Vector3(16.7, -0.6, -16), new THREE.Vector3(0, 0, 1), 3.5, 6.4, 0.3);
  const laundryDoor = barDoor(17.6, 20.6, -24.3, 3.2);                          // the way out to the yard is barred…
  const pal1 = friendCage(18.9, -8.85, 'bunny');
  button(20.2, 0, -9.8, () => { laundryDoor.opening = true; C.free(pal1); });                 // …until you step on the green button
  checkpoint(2, 19.6, 0, -21.6);

  // =====================================================================================
  // YARD  x[-14, 22]  z[-20.6, -40]  — fence, razor wire, a live puddle; the gate in the north wall
  // =====================================================================================
  const YW = 6;
  solid(-14.6, 8.6, -0.4, 0, -20.0, -40.6, M.asphalt, { cast: false, tileU: 4, tileV: 4 });   // (stops at the laundry: its drain
  solid(8.6, 22.6, -0.4, 0, -24.6, -40.6, M.asphalt, { cast: false, tileU: 4, tileV: 4 });    //  runs right up to the north wall)
  wallZ(-20.0, -40.6, -14.6, -14.0, 0, YW, M.concrete);                         // west
  wallZ(-24.0, -40.6, 22.0, 22.6, 0, YW, M.concrete);                           // east
  wallX(-14.6, -8.6, -20.0, -20.6, 0, YW, M.concrete);                          // the bit south-west of the hall
  C.exit = exitDoor(0, -40.3, 0, -14.6, 22.6, YW);                              // north wall with the gate
  // chain-link fence across the yard (see-through), open only at the east end
  const fence = (x0, x1, z0, z1) => {
    const alongX = Math.abs(x1 - x0) > Math.abs(z1 - z0); const len = alongX ? Math.abs(x1 - x0) : Math.abs(z1 - z0);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(len, 4), M.fence); m.material.map.repeat.set(len / 2, 2);
    m.position.set((x0 + x1) / 2, 2, (z0 + z1) / 2); if (!alongX) m.rotation.y = Math.PI / 2; scene.add(m);
    const posts = Math.round(len / 3); for (let i = 0; i <= posts; i++) { const t = i / posts; const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t; deco(x - 0.05, x + 0.05, 0, 4.1, z + 0.05, z - 0.05, M.steel); }
    deco(Math.min(x0, x1), Math.max(x0, x1) + (alongX ? 0 : 0.03), 4.0, 4.06, Math.max(z0, z1) + (alongX ? 0.03 : 0), Math.min(z0, z1), M.steel);
    solid(Math.min(x0, x1) - (alongX ? 0 : 0.06), Math.max(x0, x1) + (alongX ? 0 : 0.06), 0, 4, Math.max(z0, z1) + (alongX ? 0.06 : 0), Math.min(z0, z1) - (alongX ? 0.06 : 0), null, { seeThrough: true, noStep: true });
  };
  fence(-14.0, 16.0, -28.0, -28.0);
  razorWire(-14.0, 12.0, -31.2, -32.0);   // pass it at the east end…
  razorWire(-4.0, 22.0, -35.2, -36.0);    // …and this one at the west end
  livePuddle(2.2, 4.8, -32.6, -34.6);     // jump over the live puddle in the middle lane
  const pal2 = friendCage(-12.6, -34.6, 'cat');
  button(-11.2, 0, -33.6, () => { C.exit.opening = true; C.free(pal2); });                    // the gate button, at the far west end of the yard
  // guards: one walks the cell hall floor, one walks the lane in front of the gate
  C.guards.push(createGuard(scene, { zone: { x0: -4.0, x1: 2.2, z0: -19.2, z1: 4.6 }, a: [-1, -18], b: [-1, 3.6] }));
  C.guards.push(createGuard(scene, { zone: { x0: -9.5, x1: 21, z0: -39.4, z1: -36.8 }, a: [15, -38.1], b: [4, -38.1] }));
  // guard tower (north-west corner) with a searchlight, floodlight poles, a basketball hoop — it's a real yard
  solid(-13.8, -10.8, 0, 6.5, -37.2, -40.0, M.concrete, { noStep: true });
  deco(-14.0, -10.6, 6.5, 6.8, -37.0, -40.2, M.steel);
  deco(-13.6, -11.0, 6.8, 8.6, -37.4, -39.8, new THREE.MeshStandardMaterial({ color: '#9fb6c2', roughness: 0.1, metalness: 0.3, transparent: true, opacity: 0.55 }), { cast: false });
  deco(-14.0, -10.6, 8.6, 8.9, -37.0, -40.2, M.steel);
  for (const [x, z] of [[-13.5, -22], [21.5, -27], [-13.5, -33]]) { deco(x - 0.1, x + 0.1, 0, 7.5, z + 0.1, z - 0.1, M.steel); deco(x - 0.5, x + 0.5, 7.3, 7.6, z + 0.25, z - 0.25, M.lamp); }
  deco(-9.2, -9.0, 0, 3.0, -23.0, -23.2, M.steel); deco(-9.6, -8.6, 3.0, 3.7, -23.2, -23.25, STD({ color: '#ffffff' }));
  checkpoint(3, 19.2, 0, -26.3);

  // =====================================================================================
  // OUTSIDE (north of the gate): grass, a path, trees, home — and your person, waiting with a LOST DOG poster
  // =====================================================================================
  solid(-60, 60, -0.4, 0, -40.6, -90, M.grass, { cast: false, wall: false, tileU: 4, tileV: 4 });
  deco(-1.6, 1.6, 0.0, 0.02, -40.7, -70, M.path, { cast: false });
  const tree = (x, z, sc = 1) => { deco(x - 0.2 * sc, x + 0.2 * sc, 0, 1.6 * sc, z + 0.2 * sc, z - 0.2 * sc, M.trunk); deco(x - 1.2 * sc, x + 1.2 * sc, 1.4 * sc, 3.4 * sc, z + 1.2 * sc, z - 1.2 * sc, (x + z) % 2 ? M.leaf : M.leaf2); deco(x - 0.8 * sc, x + 0.8 * sc, 3.3 * sc, 4.4 * sc, z + 0.8 * sc, z - 0.8 * sc, M.leaf2); };
  for (const [x, z, sc] of [[-6, -46, 1.1], [5.5, -48, 1.3], [-11, -52, 1.5], [10, -55, 1.2], [-4.5, -60, 1.4], [15, -45, 1], [-17, -46, 1.2], [20, -52, 1.5], [3, -66, 1.6], [-22, -58, 1.4]]) tree(x, z, sc);
  const house = (x, z, wm, rm) => {
    deco(x - 3, x + 3, 0, 3, z + 2.5, z - 2.5, wm);
    const r = new THREE.Mesh(new THREE.ConeGeometry(4.9, 2.4, 4), rm); r.rotation.y = Math.PI / 4; r.position.set(x, 4.2, z); r.castShadow = true; scene.add(r);
    deco(x - 0.5, x + 0.5, 0, 1.9, z + 2.56, z + 2.5, M.woodD); deco(x + 1.2, x + 2.2, 1.2, 2.1, z + 2.56, z + 2.5, STD({ color: '#bfe3ff' }));
  };
  house(0, -76, M.house, M.roof); house(-14, -70, M.houseB, M.roofB); house(13, -72, M.houseB, M.roofB);
  { // the sign over the gate, outside face
    const c = document.createElement('canvas'); c.width = 512; c.height = 128; const g2 = c.getContext('2d');
    g2.fillStyle = '#2d3a44'; g2.fillRect(0, 0, 512, 128); g2.strokeStyle = '#f2c230'; g2.lineWidth = 8; g2.strokeRect(6, 6, 500, 116);
    g2.fillStyle = '#ffffff'; g2.font = '700 64px -apple-system, Helvetica, Arial, sans-serif'; g2.textAlign = 'center'; g2.textBaseline = 'middle'; g2.fillText('DOG POUND', 256, 68);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 1.3), new THREE.MeshBasicMaterial({ map: t })); sign.rotation.y = Math.PI; sign.position.set(0, 4.6, -40.72); scene.add(sign);
  }
  const ownerBody = makeOwner(); ownerBody.root.position.set(0, 0, -44.2); scene.add(ownerBody.root);
  C.owner = { body: ownerBody, pos: new THREE.Vector3(0, 0, -44.2), cheer: false, pose: { mode: 'idle', speed: 0, t: 0 } };

  // ---------- time update (deterministic: everything is a function of t) ----------
  C.trapHeight = (tr, t) => {
    const p = ((t / tr.period + tr.phase) % 1 + 1) % 1 * tr.period;
    if (p < 1.15) return 0;
    if (p < 1.5) return 0.18 + 0.05 * Math.sin(p * 60);
    if (p < 1.58) return 0.18 + (p - 1.5) / 0.08 * 0.82;
    if (p < 2.3) return 1;
    return Math.max(0, 1 - (p - 2.3) / 0.3);
  };
  C.step = (t) => { for (const mv of C.movers) setMover(mv, t, false); };
  C.visual = (t, dt) => {
    M.kill.emissiveIntensity = 1.7 + 0.5 * Math.sin(t * 7);
    for (const tr of C.traps) { const h = C.trapHeight(tr, t); tr.hz.active = h > 0.45; tr.h = h; }
    for (const hz of C.hazards) {
      if (hz.kind === 'vent') {
        const tall = hz.trap ? (C.traps.find((q) => q.hz === hz).h || 0) : 0;
        for (const sp of hz.puffs) {
          const u = sp.userData; const k = (t * (hz.trap && tall > 0.3 ? 1.6 : 0.55) + u.o) % 1;
          sp.position.set(u.x, 0.2 + k * (hz.trap ? 0.25 + tall * 2.6 : 0.9), u.z);
          const size = (hz.trap ? 0.6 + tall * 1.0 : 0.6) * (0.6 + k); sp.scale.set(size, size, 1);
          sp.material.opacity = (1 - k) * (hz.trap ? 0.3 + tall * 0.65 : 0.55);
        }
      } else if (hz.kind === 'puddle') {
        let on = 0;
        for (const sp of hz.sparks) {
          const u = sp.userData; const k = (t * 3.1 + u.o) % 1; const lit = k < 0.18;
          sp.position.set(u.x + Math.sin(t * 37 + u.o * 9) * 0.1, 0.08 + k * 0.4, u.z); const s = lit ? 0.35 + Math.random() * 0.3 : 0.01; sp.scale.set(s, s, 1);
          sp.material.opacity = lit ? 0.9 : 0; if (lit) on++;
        }
        hz.light.intensity = on ? 3 + Math.random() * 3 : 0.3;
      }
    }
    for (const cp of C.checkpoints) {
      cp.flash = Math.max(0, cp.flash - dt);
      cp.beam.material.opacity = cp.flash > 0 ? Math.min(1, cp.flash * 1.6) * 0.9 : 0;
      cp.beam.scale.set(1 + (1 - cp.flash) * 0.3, 1, 1 + (1 - cp.flash) * 0.3);
      if (!cp.lit) cp.ring.material.emissiveIntensity = 0.12 + 0.1 * (0.5 + 0.5 * Math.sin(t * 3 + cp.i));
    }
    for (const b of C.buttons) {
      b.arrow.visible = !b.pressed; b.arrow.position.y = 1.9 + Math.sin(t * 4) * 0.15; b.arrow.rotation.y = t * 2;
      b.cap.position.y += ((b.pressed ? 0.06 : 0.13) - b.cap.position.y) * Math.min(1, dt * 14);
      b.cap.material.emissiveIntensity = b.pressed ? 0.15 : 1.1 + 0.4 * Math.sin(t * 5); b.light.intensity = b.pressed ? 0 : 4;
    }
    for (const d of C.doors) {
      if (d.opening) d.open = Math.min(1, d.open + dt / 0.8);
      const o = d.open * d.open * (3 - 2 * d.open); d.g.position.y = o * (d.h - 0.25);
      d.box.max.y = o > 0.6 ? d.box.min.y : d.h;
      const col = d.opening ? '#30d158' : '#ff3b30'; d.lampMat.color.set(col); d.lampMat.emissive.set(col);
    }
    for (const gd of C.guards) gd.render(dt);
    for (const hz of C.hazards) if (hz.kind === 'wire') for (const sp of hz.sparks) {
      const u = sp.userData; const k = (t * 2.3 + u.o) % 1; const lit = k < 0.12;
      sp.position.set(u.x, 0.3 + (u.o > 0.5 ? 0.26 : 0), u.z); const sz = lit ? 0.3 + Math.random() * 0.25 : 0.01; sp.scale.set(sz, sz, 1); sp.material.opacity = lit ? 0.95 : 0;
    }
    M.live.emissiveIntensity = 1.2 + 0.5 * Math.sin(t * 9);
    for (const f of C.friends) {
      if (f.free) f.open = Math.min(1, f.open + dt / 0.5);
      f.cageG.position.y = -f.open * 1.25; f.box.max.y = f.open > 0.5 ? f.box.min.y : 1.15;
      f.hop = Math.max(0, f.hop - dt);
      f.holder.position.set(f.pos.x, f.pos.y + (f.hop > 0 ? Math.abs(Math.sin(f.hop * 9)) * 0.35 : 0), f.pos.z); f.holder.rotation.y = f.facing;
      f.pose.t += dt; f.body.animate(f.pose, dt);
    }
    const O = C.owner; O.pose.t += dt; O.pose.mode = O.cheer ? 'cheer' : 'idle'; O.body.animate(O.pose, dt);
    const E = C.exit;
    if (E.opening) E.open = Math.min(1, E.open + dt / 0.9);
    const o = E.open * E.open * (3 - 2 * E.open);
    E.leaves[0].position.x = E.x - E.DW / 4 - o * (E.DW / 2); E.leaves[1].position.x = E.x + E.DW / 4 + o * (E.DW / 2);
    E.doorBox.max.y = o > 0.6 ? E.doorBox.min.y : E.y + 3.4;
    const pulse = 0.5 + 0.5 * Math.sin(t * 2.2);
    E.glow.material.opacity = (0.7 + 0.2 * pulse) * (1 - o * 0.9); E.glow.scale.setScalar(11 + pulse * 1.2);
    E.shaftMat.opacity = 0.10 + 0.06 * pulse + o * 0.35; E.lamp.intensity = 25 + 10 * pulse + o * 15;
    E.beacon.material.opacity = 0.22 + 0.08 * pulse; E.seam.visible = o < 0.05;
  };
  C.unlight = (cp) => { cp.lit = false; cp.ring.material = M.goldDim.clone(); cp.flash = 0; };
  C.light = (cp) => { cp.lit = true; cp.ring.material = M.gold; cp.flash = 1.2; };
  C.press = (b) => { b.pressed = true; b.onPress(); };
  // friends: once freed they follow the hero's footsteps (a trail of past positions), one behind the other
  const trail = []; const GAP = 0.15;
  C.free = (f) => { if (f.free) return; f.free = true; f.order = C.friends.filter((q) => q.free).length - 1; f.hop = 1.0; C.lastFreed = f; };
  C.trailReset = (p) => { trail.length = 0; trail.push(p.clone()); let i = 0; for (const f of C.friends) if (f.free) { f.pos.set(p.x - 0.7 - 0.6 * (i++), p.y, p.z + 0.5); } };
  C.followStep = (dt, hero, cheer) => {
    const last = trail[trail.length - 1];
    if (!last || last.distanceToSquared(hero) > GAP * GAP) { trail.push(hero.clone()); if (trail.length > 400) trail.shift(); }
    for (const f of C.friends) {
      if (!f.free) { f.pose.mode = 'idle'; continue; }
      const idx = trail.length - 1 - Math.round((1.0 + f.order * 0.9) / GAP);
      const target = trail[Math.max(0, idx)];
      const dx = target.x - f.pos.x, dz = target.z - f.pos.z, d = Math.hypot(dx, dz);
      const sp = Math.min(7.5, d * 6); if (d > 0.02) { f.pos.x += dx / d * sp * dt; f.pos.z += dz / d * sp * dt; f.facing = Math.atan2(dx, dz); }
      f.pos.y += (target.y - f.pos.y) * Math.min(1, dt * 14);
      f.pose.speed = sp; f.pose.mode = cheer ? 'cheer' : sp > 3 ? 'run' : sp > 0.4 ? 'walk' : 'idle';
      if (cheer && f.hop <= 0) f.hop = 0.7;
    }
  };
  C.resetProgress = () => {
    for (const b of C.buttons) b.pressed = false;
    for (const d of C.doors) { d.open = 0; d.opening = false; }
    C.exit.open = 0; C.exit.opening = false;
    for (const gd of C.guards) gd.reset();
    for (const f of C.friends) { f.free = false; f.open = 0; f.order = -1; f.pos.copy(f.home); f.facing = Math.PI; f.pose.mode = 'idle'; }
    trail.length = 0; C.owner.cheer = false;
  };
  C.start = { pos: C.checkpoints[0].pos.clone(), yaw: -Math.PI / 2 }; // camera west of the hero, looking east out of the cell

  // ---------- merge static meshes per material (draw calls) ----------
  const dyn = new Set([...C.movers.map((m) => m.g), C.exit.g, ...C.checkpoints.map((c) => c.group), ...C.hazards.filter((h) => h.group).map((h) => h.group), ...C.buttons.map((b) => b.g), ...C.doors.flatMap((d) => [d.g, d.lamp]), ...C.guards.map((g) => g.root), ...C.friends.flatMap((f) => [f.cageG, f.holder]), C.owner.body.root]);
  scene.updateMatrixWorld(true);
  const buckets = new Map(), victims = [];
  scene.traverse((o) => {
    if (!o.isMesh || o.material.isMeshBasicMaterial || o.material.transparent || o.material.vertexColors) return;
    for (let p = o; p; p = p.parent) if (dyn.has(p)) return;
    const key = o.material.uuid + (o.castShadow ? 'c' : '') + (o.receiveShadow ? 'r' : '');
    if (!buckets.has(key)) buckets.set(key, { mat: o.material, cast: o.castShadow, recv: o.receiveShadow, geos: [] });
    const gg = o.geometry.clone(); gg.applyMatrix4(o.matrixWorld);
    for (const k of Object.keys(gg.attributes)) if (!['position', 'normal', 'uv'].includes(k)) gg.deleteAttribute(k);
    buckets.get(key).geos.push(gg.index ? gg.toNonIndexed() : gg); victims.push(o);
  });
  for (const o of victims) o.parent.remove(o);
  for (const b of buckets.values()) { const merged = mergeGeometries(b.geos, false); if (!merged) continue; const m = new THREE.Mesh(merged, b.mat); m.castShadow = b.cast; m.receiveShadow = b.recv; m.matrixAutoUpdate = false; scene.add(m); }
  return C;
}
