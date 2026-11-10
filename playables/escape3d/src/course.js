// Escape 3D — the one course. Forward is −Z. Floor top of the start is y = 0.
// Everything solid is an axis-aligned box collider; spikes are hazard boxes; moving platforms are boxes whose
// position is a pure function of time (so the controller can carry the hero exactly and a robot can predict them).
import * as THREE from 'three';
import { plasticTexture, glowTexture, shaftTexture, worldBox, brickTexture, roofTexture, facadeTexture, grateTexture, streetTexture } from './textures.js';

export const GOLD = new THREE.Color('#ffc93c');
const HALF_W = 3; // course half width (walkable)
const WALL_T = 1;
const PIT_Y = -12;

export function buildCourse(scene) {
  const C = { solids: [], hazards: [], movers: [], traps: [], checkpoints: [], walls: [], exit: null, update: null };
  // city rooftops at golden hour: tar roofs, brick parapets, window facades; hot steam vents = danger, gold = goal
  const STD = (o) => new THREE.MeshStandardMaterial({ roughness: 0.9, metalness: 0, ...o });
  const fac = ['#8c6f5a', '#a38d76', '#6f7b86', '#9b5e45', '#7d8a7a', '#b7a58c'].map((c, i) => STD({ map: facadeTexture(c, i + 2) }));
  const M = {
    roof: STD({ map: roofTexture() }),
    brick: STD({ map: brickTexture() }), brickD: STD({ map: brickTexture('#7b3a28') }),
    pillar: STD({ map: brickTexture('#8a4d36') }), wall: STD({ map: brickTexture('#86412d') }),
    facade: fac,
    grate: STD({ map: grateTexture(), roughness: 0.6, metalness: 0.4 }),
    kill: new THREE.MeshStandardMaterial({ color: '#ff6a1a', emissive: '#ff4a10', emissiveIntensity: 1.2, roughness: 0.4 }),
    steam: new THREE.MeshBasicMaterial({ map: glowTexture(), color: '#ffffff', transparent: true, opacity: 0.0, depthWrite: false }),
    steel: STD({ color: '#8d969e', roughness: 0.5, metalness: 0.5 }),
    stripe: STD({ color: '#f2c230', roughness: 0.6 }),
    metal: STD({ color: '#5d656c', roughness: 0.5, metalness: 0.6 }),
    ac: STD({ color: '#c7cbcf', roughness: 0.6, metalness: 0.2 }),
    gold: new THREE.MeshStandardMaterial({ color: '#c99a1a', emissive: GOLD, emissiveIntensity: 0.9, roughness: 0.4 }),
    goldDim: new THREE.MeshStandardMaterial({ color: '#8d8a84', emissive: GOLD, emissiveIntensity: 0.08, roughness: 0.6 }),
    trim: STD({ color: '#6e6963' }),
    wood: STD({ color: '#7a5537' }), woodD: STD({ color: '#4e3523' }),
  };
  const STREET_Y = -40;
  const facadeFor = (k) => M.facade[((k % M.facade.length) + M.facade.length) % M.facade.length];

  // ---------- helpers ----------
  function solid(x0, x1, y0, y1, z0, z1, mat, opts = {}) {
    const min = new THREE.Vector3(Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1));
    const max = new THREE.Vector3(Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1));
    const size = max.clone().sub(min), mid = min.clone().add(max).multiplyScalar(0.5);
    const mesh = new THREE.Mesh(worldBox(size.x, size.y, size.z, opts.tileU || 2, opts.tileV || 2), mat);
    mesh.position.copy(mid); mesh.castShadow = opts.cast !== false; mesh.receiveShadow = true;
    scene.add(mesh);
    if (opts.collide !== false) {
      const box = { min, max, mesh, top: max.y };
      C.solids.push(box);
      if (opts.wall) C.walls.push(mesh);
    }
    return mesh;
  }
  const floor = (z0, z1, k, top = 0) => {
    solid(-HALF_W, HALF_W, top - 0.4, top, z0, z1, M.roof, { cast: false });
    solid(-HALF_W - 0.3, HALF_W + 0.3, STREET_Y, top - 0.4, z0, z1, facadeFor(k), { collide: false, cast: false, tileU: 4, tileV: 4 });
    // brick parapets on both sides (you can still hop over them)
    for (const s of [-1, 1]) solid(s * (HALF_W + 0.3), s * (HALF_W - 0.3), top, top + 0.5, z0, z1, M.brick, { tileV: 1 });
  };
  const column = (x0, x1, z0, z1, top, k) => { // a narrow brick tower with a tar cap and a coping lip
    solid(x0, x1, STREET_Y, top - 0.15, z0, z1, k === undefined ? M.pillar : facadeFor(k), { tileU: k === undefined ? 2 : 4, tileV: k === undefined ? 1 : 4 });
    solid(x0 - 0.06, x1 + 0.06, top - 0.15, top, z0 + (z0 > z1 ? 0.06 : -0.06), z1 + (z0 > z1 ? -0.06 : 0.06), M.trim, { cast: false });
  };

  // steam vent: a metal grate with a hot orange glow underneath and steam rising (touch = back to checkpoint).
  // The trap is a row of vents that blasts a tall steam wall every 2.6 s.
  function spikes(x0, x1, z0, z1, y = 0, trap = null) {
    const w = Math.abs(x1 - x0), d = Math.abs(z1 - z0), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const g = new THREE.Group(); g.position.set(cx, y, cz); scene.add(g);
    const glow = new THREE.Mesh(new THREE.BoxGeometry(w, 0.1, d), M.kill); glow.position.y = 0.05; g.add(glow);
    const grate = new THREE.Mesh(worldBox(w + 0.12, 0.18, d + 0.12, 1, 1), M.grate); grate.position.y = 0.11;
    grate.material = M.grate; grate.castShadow = true; grate.receiveShadow = true;
    const frame = new THREE.Group(); g.add(frame);
    // the grate is see-through slats: draw it as thin bars so the orange glow shows between them
    const nb = Math.max(2, Math.round(Math.max(w, d) / 0.22)); const alongX = w >= d;
    for (let i = 0; i < nb; i++) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(alongX ? 0.07 : w, 0.16, alongX ? d : 0.07), M.metal);
      if (alongX) bar.position.set(-w / 2 + (i + 0.5) * (w / nb), 0.12, 0); else bar.position.set(0, 0.12, -d / 2 + (i + 0.5) * (d / nb));
      bar.castShadow = true; frame.add(bar);
    }
    const rim = new THREE.Mesh(new THREE.BoxGeometry(w + 0.16, 0.12, d + 0.16), M.metal); rim.position.y = 0.06; rim.scale.set(1, 1, 1); g.add(rim); rim.visible = false;
    // steam puffs (sprites) — updated in C.visual
    const puffs = [];
    const n = Math.max(3, Math.round(w * d * 2));
    for (let i = 0; i < n; i++) {
      const sp = new THREE.Sprite(M.steam.clone()); sp.userData = { x: (Math.random() - 0.5) * w, z: (Math.random() - 0.5) * d, o: Math.random() };
      g.add(sp); puffs.push(sp);
    }
    const hz = { min: new THREE.Vector3(cx - w / 2, y, cz - d / 2), max: new THREE.Vector3(cx + w / 2, y + 0.42, cz + d / 2), active: true, group: g, puffs, trap: !!trap, w, d };
    C.hazards.push(hz);
    if (trap) { trap.hz = hz; trap.group = g; trap.baseY = y; trap.h = 0; C.traps.push(trap); }
    return hz;
  }
  const deco = (x0, x1, y0, y1, z0, z1, mat) => solid(x0, x1, y0, y1, z0, z1, mat, { tileU: 1, tileV: 1 });

  // ---------- course ----------
  const Z_START = 9, Z_END = -64;
  solid(-HALF_W - 0.3, HALF_W + 0.3, 0, 0.5, Z_START, Z_START - 0.3, M.brick, { wall: true, tileV: 1 }); // back parapet

  // A — the first roof: AC units at the edges
  floor(Z_START, -6, 0);
  deco(1.6, 2.6, 0, 0.9, 7.6, 5.8, M.ac); deco(1.75, 2.45, 0.9, 1.0, 7.4, 6.0, M.metal);
  deco(-2.6, -1.8, 0, 1.3, -2.6, -4.2, M.ac);
  C.checkpoints.push(checkpoint(0, 0, 1.6, true));

  // B — the vent roof: go round the hot vents, time the steam blast
  floor(-6, -22.5, 1);
  spikes(-2.7, 0.9, -8.6, -9.8);         // gap on the right
  spikes(-0.9, 2.7, -12.0, -13.2);       // gap on the left
  spikes(-2.7, 2.7, -15.6, -17.0, 0, { period: 2.6, phase: 0 }); // steam wall: time it or jump it
  spikes(-1.4, 1.4, -19.6, -20.6);       // centre vent — pass either side
  C.checkpoints.push(checkpoint(1, 0, -21.6));

  // C — the street gap: window-washer gondolas
  mover(new THREE.Vector3(0, 0, -24.8), new THREE.Vector3(1, 0, 0), 1.7, 3.6, 0);
  mover(new THREE.Vector3(0, 0, -29.6), new THREE.Vector3(0, 0, 1), 1.45, 3.2, 0.25);
  mover(new THREE.Vector3(0, 0, -34.6), new THREE.Vector3(1, 0, 0), 1.7, 3.6, 0.5);
  floor(-37.0, -40.2, 2);
  C.checkpoints.push(checkpoint(2, 0, -38.6));

  // D — hop up three chimney stacks / narrow towers
  column(-2.2, -0.2, -41.2, -43.0, 0.5);
  column(0.1, 2.1, -44.0, -45.8, 1.0);
  column(-1.6, 0.4, -46.8, -48.6, 1.45);

  // E — the last roof and the stair door (with a water tower on top)
  floor(-49.8, -60, 3, 1.9);
  C.exit = exitDoor(-58.2, 1.9);

  // ---------- the city around ----------
  const streetTex = streetTexture(); streetTex.repeat.set(1, 40);
  const street = new THREE.Mesh(new THREE.PlaneGeometry(12, 400), new THREE.MeshStandardMaterial({ map: streetTex, roughness: 0.95 }));
  street.rotation.x = -Math.PI / 2; street.position.set(0, STREET_Y, -30); scene.add(street);
  const cross = new THREE.Mesh(new THREE.PlaneGeometry(400, 14), new THREE.MeshStandardMaterial({ map: (() => { const t = streetTexture(); t.rotation = Math.PI / 2; t.repeat.set(1, 30); return t; })(), roughness: 0.95 }));
  cross.rotation.x = -Math.PI / 2; cross.position.set(0, STREET_Y + 0.01, -30); scene.add(cross);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(800, 800), STD({ color: '#6d6a66' })); ground.rotation.x = -Math.PI / 2; ground.position.y = STREET_Y - 0.05; scene.add(ground);
  let seed = 5; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const addBlock = (x, z, w, d, top, k) => {
    const m = new THREE.Mesh(worldBox(w, top - STREET_Y, d, 4, 4), facadeFor(k)); m.position.set(x, (top + STREET_Y) / 2, z); m.receiveShadow = true; scene.add(m);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.4, d + 0.3), M.trim); cap.position.set(x, top + 0.2, z); scene.add(cap);
    if (rnd() < 0.35) { // a little water tower on some roofs
      const wt = waterTower(); wt.position.set(x + (rnd() - 0.5) * w * 0.5, top, z + (rnd() - 0.5) * d * 0.5); wt.scale.setScalar(0.8 + rnd() * 0.5); scene.add(wt);
    }
  };
  // two rows of buildings along the course, lower near the route (so the view stays open), taller far out
  for (const side of [-1, 1]) {
    for (let z = 14; z > -110; z -= 9 + rnd() * 5) {
      const w = 6 + rnd() * 5, d = 7 + rnd() * 3;
      addBlock(side * (9 + w / 2 + rnd() * 2), z, w, d, -8 + rnd() * 10, Math.floor(rnd() * 6));
      const w2 = 8 + rnd() * 8; addBlock(side * (24 + w2 / 2 + rnd() * 6), z - 4, w2, 9 + rnd() * 4, 6 + rnd() * 22, Math.floor(rnd() * 6));
    }
  }
  // skyline ahead, past the door (silhouettes in the haze)
  for (let i = 0; i < 16; i++) addBlock(-60 + i * 8 + rnd() * 3, -100 - rnd() * 40, 6 + rnd() * 5, 6 + rnd() * 5, 10 + rnd() * 45, Math.floor(rnd() * 6));

  // ---------- pieces ----------
  function checkpoint(i, x, z, lit = false) {
    const g = new THREE.Group(); g.position.set(x, 0.005, z); scene.add(g);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.86, 40), lit ? M.gold : M.goldDim.clone());
    ring.rotation.x = -Math.PI / 2; g.add(ring);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.62, 40), new THREE.MeshStandardMaterial({ color: '#d5dae1', roughness: 0.6 }));
    disc.rotation.x = -Math.PI / 2; disc.position.y = -0.002; disc.receiveShadow = true; g.add(disc);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 3, 24, 1, true),
      new THREE.MeshBasicMaterial({ map: shaftTexture(), color: GOLD, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    beam.position.y = 1.5; g.add(beam);
    return { i, pos: new THREE.Vector3(x, 0, z), group: g, ring, beam, lit, flash: 0 };
  }

  function mover(base, axis, amp, period, phase) {
    const W = 2.4, H = 0.5, D = 2.4;
    const g = new THREE.Group();
    const body = new THREE.Mesh(worldBox(W, 0.2, D, 1, 1), M.grate); body.position.y = -0.1; body.castShadow = body.receiveShadow = true; g.add(body);
    const under = new THREE.Mesh(new THREE.BoxGeometry(W, 0.3, D), M.steel); under.position.y = -0.35; under.castShadow = true; g.add(under);
    for (const [sx, sz, w, d] of [[0, 1, W, 0.12], [0, -1, W, 0.12], [1, 0, 0.12, D], [-1, 0, 0.12, D]]) { // yellow safety edge
      const e = new THREE.Mesh(new THREE.BoxGeometry(w + 0.02, 0.05, d + 0.02), M.stripe); e.position.set(sx * (W / 2 - 0.06), 0.005, sz * (D / 2 - 0.06)); g.add(e);
    }
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { // cables up to the roof davits
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 14, 4), M.metal); c.position.set(sx * (W / 2 - 0.1), 7, sz * (D / 2 - 0.1)); g.add(c);
    }
    const winch = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.4), M.stripe); winch.position.set(-W / 2 + 0.35, 0.18, -D / 2 + 0.3); g.add(winch);
    scene.add(g);
    const box = { min: new THREE.Vector3(), max: new THREE.Vector3(), top: 0, mesh: body, mover: true, delta: new THREE.Vector3() };
    const mv = { base, axis, amp, period, phase, g, box, W, H, D, pos: new THREE.Vector3() };
    mv.at = (t, out = new THREE.Vector3()) => out.copy(base).addScaledVector(axis, amp * Math.sin((t / period + phase) * Math.PI * 2));
    C.movers.push(mv); C.solids.push(box);
    setMover(mv, 0, true);
    return mv;
  }

  function waterTower() {
    const g = new THREE.Group();
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.6, 0.12), M.woodD); l.position.set(sx * 0.7, 0.8, sz * 0.7); g.add(l); }
    const tank = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 1.8, 14), M.wood); tank.position.y = 2.5; tank.castShadow = true; g.add(tank);
    for (const y of [1.9, 2.5, 3.1]) { const band = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, 0.06, 14), M.metal); band.position.y = y; g.add(band); }
    const top = new THREE.Mesh(new THREE.ConeGeometry(1.1, 0.8, 14), M.woodD); top.position.y = 3.8; top.castShadow = true; g.add(top);
    return g;
  }

  function exitDoor(z, y) {
    const g = new THREE.Group(); scene.add(g);
    const DW = 2.6, DH = 3.1, T = 0.8;
    // the end wall with a doorway; tall so it reads from the start line
    const wy0 = y, wy1 = y + 4.6;
    solid(-HALF_W - WALL_T, -DW / 2, wy0 - 1.6, wy1, z + T / 2, z - T / 2, M.wall, { wall: true });
    solid(DW / 2, HALF_W + WALL_T, wy0 - 1.6, wy1, z + T / 2, z - T / 2, M.wall, { wall: true });
    solid(-DW / 2, DW / 2, wy0 + DH, wy1, z + T / 2, z - T / 2, M.wall, { wall: true });
    // gold frame (visible from far away)
    for (const [x0, x1, y0, y1] of [[-DW / 2 - 0.18, -DW / 2, wy0, wy0 + DH + 0.18], [DW / 2, DW / 2 + 0.18, wy0, wy0 + DH + 0.18], [-DW / 2 - 0.18, DW / 2 + 0.18, wy0 + DH, wy0 + DH + 0.18]]) {
      const f = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, y1 - y0, 0.12), M.gold);
      f.position.set((x0 + x1) / 2, (y0 + y1) / 2, z + T / 2 + 0.06); g.add(f);
    }
    // two sliding steel leaves
    const leafMat = new THREE.MeshStandardMaterial({ color: '#3f6a55', roughness: 0.55, metalness: 0.3 });
    const leaves = [-1, 1].map((s) => {
      const m = new THREE.Mesh(worldBox(DW / 2, DH, 0.2, 1.3, 1.5), leafMat);
      m.position.set(s * DW / 4, wy0 + DH / 2, z); m.castShadow = true; g.add(m); return m;
    });
    const doorBox = { min: new THREE.Vector3(-DW / 2, wy0, z - 0.2), max: new THREE.Vector3(DW / 2, wy0 + DH, z + 0.2), top: wy0 + DH, mesh: leaves[0] };
    C.solids.push(doorBox);
    // daylight beyond: an emissive back plane, a big glow sprite and light shafts
    const lightMat = new THREE.MeshBasicMaterial({ color: '#fff3dc', fog: false });
    const back = new THREE.Mesh(new THREE.PlaneGeometry(DW + 0.2, DH + 0.2), lightMat); back.position.set(0, wy0 + DH / 2, z - 1.6); g.add(back);
    for (const s of [-1, 1]) { const side = new THREE.Mesh(new THREE.PlaneGeometry(1.6, DH + 0.2), lightMat); side.rotation.y = s * Math.PI / 2; side.position.set(-s * (DW / 2 + 0.1), wy0 + DH / 2, z - 0.8); g.add(side); }
    const floorGlow = new THREE.Mesh(new THREE.PlaneGeometry(DW + 0.2, 1.8), lightMat); floorGlow.rotation.x = -Math.PI / 2; floorGlow.position.set(0, wy0 + 0.01, z - 0.8); g.add(floorGlow);
    const seam = new THREE.Mesh(new THREE.PlaneGeometry(0.07, DH), new THREE.MeshBasicMaterial({ color: '#fff0cc', fog: false })); seam.position.set(0, wy0 + DH / 2, z + 0.11); g.add(seam);
    const glowMap = glowTexture();
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowMap, color: '#ffd896', transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    glow.scale.set(12, 12, 1); glow.position.set(0, wy0 + DH * 0.55, z - 1.4); g.add(glow);
    const shafts = [];
    const shaftMat = new THREE.MeshBasicMaterial({ map: shaftTexture(), color: '#ffe2a8', transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false });
    for (let i = 0; i < 3; i++) {
      const p = new THREE.Mesh(new THREE.PlaneGeometry(DW * (1 + i * 0.35), 9), shaftMat);
      p.rotation.x = -Math.PI / 2 + 0.12; p.rotation.z = (i - 1) * 0.08; p.position.set(0, wy0 + 0.6 + i * 0.5, z + 4.5); g.add(p); shafts.push(p);
    }
    const wt = waterTower(); wt.position.set(1.6, wy1, z - 0.2); wt.scale.setScalar(1.15); g.add(wt);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(2 * HALF_W + 2.3, 0.3, 1.1), M.trim); cap.position.set(0, wy1 + 0.15, z); g.add(cap);
    const lamp = new THREE.PointLight('#ffcf8a', 30, 16, 1.6); lamp.position.set(0, wy0 + 2.2, z + 1.4); g.add(lamp);
    return { z, y: wy0, leaves, doorBox, glow, shafts, shaftMat, seam, lamp, DW, open: 0, opening: false, trigger: { z: z - 0.1, x: DW / 2 - 0.2 } };
  }

  // ---------- time update (deterministic: everything is a function of t) ----------
  function setMover(mv, t, first) {
    const prev = mv.pos.clone(); mv.at(t, mv.pos);
    mv.g.position.copy(mv.pos);
    const b = mv.box;
    b.min.set(mv.pos.x - mv.W / 2, mv.pos.y - mv.H, mv.pos.z - mv.D / 2);
    b.max.set(mv.pos.x + mv.W / 2, mv.pos.y, mv.pos.z + mv.D / 2);
    b.top = mv.pos.y;
    b.delta.copy(first ? new THREE.Vector3() : mv.pos.clone().sub(prev));
  }
  C.trapHeight = (tr, t) => { // 0 = hidden in the floor, 1 = fully up
    const p = ((t / tr.period + tr.phase) % 1 + 1) % 1 * tr.period;
    if (p < 1.15) return 0;                       // safe
    if (p < 1.5) return 0.18 + 0.05 * Math.sin(p * 60); // warning rattle (tips poke out)
    if (p < 1.58) return 0.18 + (p - 1.5) / 0.08 * 0.82; // snap up
    if (p < 2.3) return 1;                        // up
    return Math.max(0, 1 - (p - 2.3) / 0.3);      // retract
  };
  C.step = (t) => { for (const mv of C.movers) setMover(mv, t, false); };
  C.visual = (t, dt) => {
    M.kill.emissiveIntensity = 1.0 + 0.35 * Math.sin(t * 7);
    for (const tr of C.traps) { const h = C.trapHeight(tr, t); tr.hz.active = h > 0.45; tr.h = h; }
    for (const hz of C.hazards) { // steam: soft puffs always; the trap row blasts a tall white column when active
      const tall = hz.trap ? (C.traps.find((q) => q.hz === hz).h || 0) : 0;
      for (const sp of hz.puffs) {
        const u = sp.userData; const k = (t * (hz.trap && tall > 0.3 ? 1.6 : 0.55) + u.o) % 1;
        const rise = hz.trap ? 0.25 + tall * 2.6 : 0.9;
        sp.position.set(u.x, 0.2 + k * rise, u.z);
        const size = (hz.trap ? 0.5 + tall * 0.9 : 0.45) * (0.6 + k);
        sp.scale.set(size, size, 1);
        sp.material.opacity = (1 - k) * (hz.trap ? 0.25 + tall * 0.6 : 0.35);
      }
    }
    for (const cp of C.checkpoints) {
      cp.flash = Math.max(0, cp.flash - dt);
      cp.beam.material.opacity = cp.flash > 0 ? Math.min(1, cp.flash * 1.6) * 0.9 : 0;
      cp.beam.scale.set(1 + (1 - cp.flash) * 0.3, 1, 1 + (1 - cp.flash) * 0.3);
      if (!cp.lit) cp.ring.material.emissiveIntensity = 0.12 + 0.1 * (0.5 + 0.5 * Math.sin(t * 3 + cp.i));
    }
    const E = C.exit;
    if (E.opening) E.open = Math.min(1, E.open + dt / 0.9);
    const o = E.open * E.open * (3 - 2 * E.open);
    E.leaves[0].position.x = -E.DW / 4 - o * (E.DW / 2); E.leaves[1].position.x = E.DW / 4 + o * (E.DW / 2);
    E.doorBox.max.y = o > 0.6 ? E.doorBox.min.y : E.y + 3.1; // passable once mostly open
    const pulse = 0.5 + 0.5 * Math.sin(t * 2.2);
    E.glow.material.opacity = 0.7 + 0.2 * pulse;
    E.glow.scale.setScalar(11 + pulse * 1.2 + o * 6);
    E.shaftMat.opacity = 0.10 + 0.06 * pulse + o * 0.35;
    E.lamp.intensity = 25 + 10 * pulse + o * 15;
    E.seam.visible = o < 0.05;
  };
  C.unlight = (cp) => { cp.lit = false; cp.ring.material = M.goldDim.clone(); cp.flash = 0; };
  C.light = (cp) => { cp.lit = true; cp.ring.material = M.gold; cp.flash = 1.2; };
  C.HALF_W = HALF_W;
  return C;
}
