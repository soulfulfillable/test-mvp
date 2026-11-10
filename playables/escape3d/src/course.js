// Escape 3D — the one course. Forward is −Z. Floor top of the start is y = 0.
// Everything solid is an axis-aligned box collider; spikes are hazard boxes; moving platforms are boxes whose
// position is a pure function of time (so the controller can carry the hero exactly and a robot can predict them).
import * as THREE from 'three';
import { plasticTexture, glowTexture, shaftTexture, worldBox } from './textures.js';

export const GOLD = new THREE.Color('#ffc93c');
const HALF_W = 3; // course half width (walkable)
const WALL_T = 1;
const PIT_Y = -12;

export function buildCourse(scene) {
  const C = { solids: [], hazards: [], movers: [], traps: [], checkpoints: [], walls: [], exit: null, update: null };
  const plastic = plasticTexture();
  const P = (color, extra = {}) => new THREE.MeshStandardMaterial({ map: plastic, color, roughness: 0.5, metalness: 0, ...extra });
  // obby palette: bright plastic parts floating in the sky, neon red = kill, gold = goal / checkpoint
  const M = {
    start: P('#e9edf2'), hall: P('#5dc761'), landing: P('#ffd23f'), plaza: P('#e9edf2'),
    rail: P('#3f9b45'), railY: P('#e0b21c'), railW: P('#c9ced6'),
    pillar: P('#4aa8ff'), wall: P('#2d3f6b'),
    kill: new THREE.MeshStandardMaterial({ color: '#ff3030', emissive: '#ff1a1a', emissiveIntensity: 0.9, roughness: 0.35 }),
    steel: P('#ff8a1f'),
    gold: new THREE.MeshStandardMaterial({ color: '#c99a1a', emissive: GOLD, emissiveIntensity: 0.9, roughness: 0.4 }),
    goldDim: new THREE.MeshStandardMaterial({ color: '#b9bec6', emissive: GOLD, emissiveIntensity: 0.08, roughness: 0.6 }),
    trim: P('#c9ced6'),
  };
  M.floor = M.hall;

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
  const floor = (z0, z1, mat, railMat, top = 0, depth = 1.2) => {
    solid(-HALF_W, HALF_W, top - depth, top, z0, z1, mat, { cast: false });
    // low bumper rails on both sides (an obby edge you can still hop over)
    for (const s of [-1, 1]) solid(s * HALF_W, s * (HALF_W - 0.3), top, top + 0.45, z0, z1, railMat, { tileV: 0.45, tileU: 2 });
  };
  const column = (x0, x1, z0, z1, top) => solid(x0, x1, top - 2.2, top, z0, z1, M.pillar, { tileV: 2 });

  // kill brick: a glowing red slab (touch = back to checkpoint). The popping trap is a red wall that shoots up.
  function spikes(x0, x1, z0, z1, y = 0, trap = null) {
    const w = Math.abs(x1 - x0), d = Math.abs(z1 - z0), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const h = trap ? 0.9 : 0.2;
    const g = new THREE.Group(); g.position.set(cx, y, cz); scene.add(g);
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M.kill); m.position.y = h / 2; m.castShadow = true; g.add(m);
    if (trap) { // a dark slot in the floor shows where it will come up
      const slot = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ color: '#3a1010' }));
      slot.rotation.x = -Math.PI / 2; slot.position.set(cx, y + 0.004, cz); scene.add(slot);
    }
    const hz = { min: new THREE.Vector3(cx - w / 2, y, cz - d / 2), max: new THREE.Vector3(cx + w / 2, y + 0.42, cz + d / 2), active: true, group: g, mesh: m };
    C.hazards.push(hz);
    if (trap) { trap.hz = hz; trap.group = g; trap.baseY = y; trap.h = 0; C.traps.push(trap); }
    return hz;
  }

  // ---------- course ----------
  const Z_START = 9, Z_END = -64;
  solid(-HALF_W, HALF_W, 0, 1.2, Z_START, Z_START - 0.4, M.railW, { wall: true }); // low back wall at the spawn

  // A — spawn
  floor(Z_START, -6, M.start, M.railW);
  C.checkpoints.push(checkpoint(0, 0, 1.6, true));

  // B — kill-brick run: go round the bricks, time the red wall
  floor(-6, -22.5, M.hall, M.rail);
  spikes(-3, 0.9, -8.6, -9.8);           // gap on the right
  spikes(-0.9, 3, -12.0, -13.2);         // gap on the left
  spikes(-2.7, 2.7, -15.6, -17.0, 0, { period: 2.6, phase: 0 }); // red wall that shoots up (time it or jump it)
  spikes(-1.4, 1.4, -19.6, -20.6);       // centre block — pass either side
  C.checkpoints.push(checkpoint(1, 0, -21.6));

  // C — the gap, three moving platforms
  mover(new THREE.Vector3(0, 0, -24.8), new THREE.Vector3(1, 0, 0), 1.7, 3.6, 0);
  mover(new THREE.Vector3(0, 0, -29.6), new THREE.Vector3(0, 0, 1), 1.45, 3.2, 0.25);
  mover(new THREE.Vector3(0, 0, -34.6), new THREE.Vector3(1, 0, 0), 1.7, 3.6, 0.5);
  floor(-37.0, -40.2, M.landing, M.railY);
  C.checkpoints.push(checkpoint(2, 0, -38.6));

  // D — hop up three floating blocks
  column(-2.2, -0.2, -41.2, -43.0, 0.5);
  column(0.1, 2.1, -44.0, -45.8, 1.0);
  column(-1.6, 0.4, -46.8, -48.6, 1.45);

  // E — finish platform and the door
  solid(-HALF_W, HALF_W, 1.9 - 1.6, 1.9, -49.8, -60, M.plaza, { cast: false });
  C.exit = exitDoor(-58.2, 1.9);
  { // checkered finish line in front of the door
    const c = document.createElement('canvas'); c.width = 64; c.height = 16; const g = c.getContext('2d');
    for (let i = 0; i < 16; i++) for (let j = 0; j < 4; j++) { g.fillStyle = (i + j) % 2 ? '#1d1d1f' : '#ffffff'; g.fillRect(i * 4, j * 4, 4, 4); }
    const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.5), new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 }));
    fl.rotation.x = -Math.PI / 2; fl.position.set(0, 1.905, -56.6); fl.receiveShadow = true; scene.add(fl);
  }

  // scenery: floating blocks around the course (depth + "sky obby" feel), a baseplate far below
  const deco = ['#ff6b6b', '#4aa8ff', '#ffd23f', '#5dc761', '#b57bff', '#ff9f1c'];
  let seed = 3; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 26; i++) {
    const side = i % 2 ? 1 : -1, s = 1 + rnd() * 3.5;
    const x = side * (8 + rnd() * 22), z = 10 - rnd() * 80, y = -6 + rnd() * 14;
    const b = new THREE.Mesh(worldBox(s, s * (0.4 + rnd() * 0.8), s, 2, 2), P(deco[i % deco.length]));
    b.position.set(x, y, z); b.rotation.y = rnd() * 0.6; b.castShadow = false; b.receiveShadow = true; scene.add(b);
  }
  const base = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.MeshStandardMaterial({ map: (() => { const t = plasticTexture(); t.repeat.set(150, 150); return t; })(), color: '#5fbf5a', roughness: 0.8 }));
  base.rotation.x = -Math.PI / 2; base.position.y = -30; scene.add(base);

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
    const body = new THREE.Mesh(worldBox(W, H, D, 2.4, 2.4), M.steel); body.position.y = -H / 2; body.castShadow = body.receiveShadow = true; g.add(body);
    for (const [sx, sz, w, d] of [[0, 1, W, 0.1], [0, -1, W, 0.1], [1, 0, 0.1, D], [-1, 0, 0.1, D]]) { // glowing gold rim = "stand here"
      const e = new THREE.Mesh(new THREE.BoxGeometry(w + 0.02, 0.06, d + 0.02), M.gold);
      e.position.set(sx * (W / 2 - 0.05), -0.02, sz * (D / 2 - 0.05)); g.add(e);
    }
    const under = new THREE.Mesh(new THREE.BoxGeometry(W * 0.6, 0.35, D * 0.6), M.trim); under.position.y = -H - 0.17; g.add(under);
    scene.add(g);
    const box = { min: new THREE.Vector3(), max: new THREE.Vector3(), top: 0, mesh: body, mover: true, delta: new THREE.Vector3() };
    const mv = { base, axis, amp, period, phase, g, box, W, H, D, pos: new THREE.Vector3() };
    mv.at = (t, out = new THREE.Vector3()) => out.copy(base).addScaledVector(axis, amp * Math.sin((t / period + phase) * Math.PI * 2));
    C.movers.push(mv); C.solids.push(box);
    setMover(mv, 0, true);
    return mv;
  }

  function exitDoor(z, y) {
    const g = new THREE.Group(); scene.add(g);
    const DW = 2.6, DH = 3.1, T = 0.8;
    // the end wall with a doorway; tall so it reads from the start line
    const wy0 = y, wy1 = y + 6.5;
    solid(-HALF_W - WALL_T, -DW / 2, wy0 - 1.6, wy1, z + T / 2, z - T / 2, M.wall, { wall: true });
    solid(DW / 2, HALF_W + WALL_T, wy0 - 1.6, wy1, z + T / 2, z - T / 2, M.wall, { wall: true });
    solid(-DW / 2, DW / 2, wy0 + DH, wy1, z + T / 2, z - T / 2, M.wall, { wall: true });
    // gold frame (visible from far away)
    for (const [x0, x1, y0, y1] of [[-DW / 2 - 0.18, -DW / 2, wy0, wy0 + DH + 0.18], [DW / 2, DW / 2 + 0.18, wy0, wy0 + DH + 0.18], [-DW / 2 - 0.18, DW / 2 + 0.18, wy0 + DH, wy0 + DH + 0.18]]) {
      const f = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, y1 - y0, 0.12), M.gold);
      f.position.set((x0 + x1) / 2, (y0 + y1) / 2, z + T / 2 + 0.06); g.add(f);
    }
    // two sliding steel leaves
    const leafMat = P('#4aa8ff');
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
    M.kill.emissiveIntensity = 0.75 + 0.25 * Math.sin(t * 6);
    for (const tr of C.traps) {
      const h = C.trapHeight(tr, t);
      tr.group.position.y = tr.baseY - 0.9 + h * 0.9; tr.hz.active = h > 0.45; tr.h = h;
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
