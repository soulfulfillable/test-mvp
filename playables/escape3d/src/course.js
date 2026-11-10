// Escape 3D — the one course. Forward is −Z. Floor top of the start is y = 0.
// Everything solid is an axis-aligned box collider; spikes are hazard boxes; moving platforms are boxes whose
// position is a pure function of time (so the controller can carry the hero exactly and a robot can predict them).
import * as THREE from 'three';
import { floorTexture, wallTexture, spikePlateTexture, steelTexture, glowTexture, shaftTexture, worldBox } from './textures.js';

export const GOLD = new THREE.Color('#ffc261');
const HALF_W = 3; // corridor half width (walkable)
const WALL_T = 1;
const PIT_Y = -12;

export function buildCourse(scene) {
  const C = { solids: [], hazards: [], movers: [], traps: [], checkpoints: [], walls: [], exit: null, update: null };
  const tex = { floor: floorTexture(), wall: wallTexture(), plate: spikePlateTexture(), steel: steelTexture() };
  const M = {
    floor: new THREE.MeshStandardMaterial({ map: tex.floor, roughness: 0.92, metalness: 0 }),
    wall: new THREE.MeshStandardMaterial({ map: tex.wall, roughness: 0.95, metalness: 0 }),
    pillar: new THREE.MeshStandardMaterial({ map: tex.wall, color: '#d8d2ca', roughness: 0.95, metalness: 0 }),
    plate: new THREE.MeshStandardMaterial({ map: tex.plate, roughness: 0.6, metalness: 0.3 }),
    spike: new THREE.MeshStandardMaterial({ color: '#d4d6d9', roughness: 0.32, metalness: 0.75, flatShading: true }),
    steel: new THREE.MeshStandardMaterial({ map: tex.steel, roughness: 0.55, metalness: 0.35 }),
    gold: new THREE.MeshStandardMaterial({ color: '#7a5a22', emissive: GOLD, emissiveIntensity: 1.1, roughness: 0.4 }),
    goldDim: new THREE.MeshStandardMaterial({ color: '#5d5750', emissive: GOLD, emissiveIntensity: 0.12, roughness: 0.6 }),
    dark: new THREE.MeshStandardMaterial({ color: '#57514a', roughness: 1 }),
    trim: new THREE.MeshStandardMaterial({ color: '#6e6963', roughness: 0.9 }),
  };

  // ---------- helpers ----------
  function solid(x0, x1, y0, y1, z0, z1, mat, opts = {}) {
    const min = new THREE.Vector3(Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1));
    const max = new THREE.Vector3(Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1));
    const size = max.clone().sub(min), mid = min.clone().add(max).multiplyScalar(0.5);
    const mesh = new THREE.Mesh(worldBox(size.x, size.y, size.z, opts.tileU || 2, opts.tileV || (mat === M.wall ? 1 : 2)), mat);
    mesh.position.copy(mid); mesh.castShadow = opts.cast !== false; mesh.receiveShadow = true;
    scene.add(mesh);
    if (opts.collide !== false) {
      const box = { min, max, mesh, top: max.y };
      C.solids.push(box);
      if (opts.wall) C.walls.push(mesh);
    }
    return mesh;
  }
  const floor = (z0, z1, top = 0, depth = 1.2) => solid(-HALF_W, HALF_W, top - depth, top, z0, z1, M.floor, { cast: false });
  const column = (x0, x1, z0, z1, top) => solid(x0, x1, PIT_Y, top, z0, z1, M.pillar, { tileV: 2 });

  // spike strip: a plate on the floor and an instanced grid of pyramids
  const spikeGeo = new THREE.ConeGeometry(0.15, 0.5, 4, 1); spikeGeo.translate(0, 0.25, 0); spikeGeo.rotateY(Math.PI / 4);
  function spikes(x0, x1, z0, z1, y = 0, trap = null) {
    const w = Math.abs(x1 - x0), d = Math.abs(z1 - z0), cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const plate = new THREE.Mesh(worldBox(w, 0.06, d, 1, 1), M.plate);
    plate.position.set(cx, y + 0.03, cz); plate.receiveShadow = true; scene.add(plate);
    const nx = Math.max(1, Math.round(w / 0.42)), nz = Math.max(1, Math.round(d / 0.42));
    const inst = new THREE.InstancedMesh(spikeGeo, M.spike, nx * nz);
    const m = new THREE.Matrix4(); let k = 0;
    for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) {
      const s = 0.85 + ((i * 7 + j * 13) % 5) * 0.06;
      m.makeScale(1, s, 1).setPosition(-w / 2 + (i + 0.5) * (w / nx), 0, -d / 2 + (j + 0.5) * (d / nz));
      inst.setMatrixAt(k++, m);
    }
    inst.castShadow = true; inst.receiveShadow = false;
    const g = new THREE.Group(); g.position.set(cx, y + 0.04, cz); g.add(inst); scene.add(g);
    const hz = { min: new THREE.Vector3(cx - w / 2, y, cz - d / 2), max: new THREE.Vector3(cx + w / 2, y + 0.42, cz + d / 2), active: true, group: g };
    C.hazards.push(hz);
    if (trap) { trap.hz = hz; trap.group = g; trap.baseY = y + 0.04; C.traps.push(trap); }
    return hz;
  }

  // ---------- course ----------
  // side walls run the whole length (from deep in the pit up to 3.6 m) — they keep you on the course
  const Z_START = 9, Z_END = -64;
  for (const s of [-1, 1]) {
    solid(s * HALF_W, s * (HALF_W + WALL_T), PIT_Y, 3.6, Z_START, Z_END, M.wall, { wall: true, tileU: 2, tileV: 1 });
    // pilasters + a cap line every 4 m (rhythm = sense of speed)
    for (let z = 2; z > Z_END + 2; z -= 4) solid(s * (HALF_W - 0.18), s * HALF_W, PIT_Y, 3.6, z - 0.35, z + 0.35, M.trim, { collide: false, cast: false });
    solid(s * (HALF_W - 0.1), s * (HALF_W + WALL_T), 3.6, 3.85, Z_START, Z_END, M.trim, { collide: false, cast: false });
  }
  solid(-HALF_W - WALL_T, HALF_W + WALL_T, PIT_Y, 3.6, Z_START, Z_START + 1, M.wall, { wall: true }); // back wall
  // pit bottom, far down, dark
  solid(-HALF_W, HALF_W, PIT_Y - 1, PIT_Y, Z_START, Z_END, M.dark, { collide: false, cast: false });

  // A — start room
  floor(Z_START, -6);
  C.checkpoints.push(checkpoint(0, 0, 1.6, true));

  // B — spike hall: go round the strips, time the popping trap
  floor(-6, -22.5);
  spikes(-3, 0.9, -8.6, -9.8);           // gap on the right
  spikes(-0.9, 3, -12.0, -13.2);         // gap on the left
  spikes(-3, 3, -15.6, -17.0, 0, { period: 2.6, phase: 0 }); // popping trap, full width (time it or jump it)
  spikes(-1.4, 1.4, -19.6, -20.6);       // centre block — pass either side
  C.checkpoints.push(checkpoint(1, 0, -21.6));

  // C — the pit, three moving platforms
  mover(new THREE.Vector3(0, 0, -24.8), new THREE.Vector3(1, 0, 0), 1.7, 3.6, 0);
  mover(new THREE.Vector3(0, 0, -29.6), new THREE.Vector3(0, 0, 1), 1.45, 3.2, 0.25);
  mover(new THREE.Vector3(0, 0, -34.6), new THREE.Vector3(1, 0, 0), 1.7, 3.6, 0.5);
  floor(-37.0, -40.2);
  C.checkpoints.push(checkpoint(2, 0, -38.6));

  // D — jump up three columns rising from the pit
  column(-2.2, -0.2, -41.2, -43.0, 0.5);
  column(0.1, 2.1, -44.0, -45.8, 1.0);
  column(-1.6, 0.4, -46.8, -48.6, 1.45);

  // E — exit plaza and the door
  solid(-HALF_W, HALF_W, PIT_Y, 1.9, -49.8, -60, M.pillar, { cast: false });
  C.exit = exitDoor(-58.2, 1.9);

  // ---------- pieces ----------
  function checkpoint(i, x, z, lit = false) {
    const g = new THREE.Group(); g.position.set(x, 0.005, z); scene.add(g);
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.62, 0.86, 40), lit ? M.gold : M.goldDim.clone());
    ring.rotation.x = -Math.PI / 2; g.add(ring);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(0.62, 40), new THREE.MeshStandardMaterial({ color: '#8d8780', roughness: 0.8 }));
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
    solid(-HALF_W - WALL_T, -DW / 2, PIT_Y, wy1, z + T / 2, z - T / 2, M.wall, { wall: true, tileV: 1 });
    solid(DW / 2, HALF_W + WALL_T, PIT_Y, wy1, z + T / 2, z - T / 2, M.wall, { wall: true, tileV: 1 });
    solid(-DW / 2, DW / 2, wy0 + DH, wy1, z + T / 2, z - T / 2, M.wall, { wall: true, tileV: 1 });
    // gold frame (visible from far away)
    for (const [x0, x1, y0, y1] of [[-DW / 2 - 0.18, -DW / 2, wy0, wy0 + DH + 0.18], [DW / 2, DW / 2 + 0.18, wy0, wy0 + DH + 0.18], [-DW / 2 - 0.18, DW / 2 + 0.18, wy0 + DH, wy0 + DH + 0.18]]) {
      const f = new THREE.Mesh(new THREE.BoxGeometry(x1 - x0, y1 - y0, 0.12), M.gold);
      f.position.set((x0 + x1) / 2, (y0 + y1) / 2, z + T / 2 + 0.06); g.add(f);
    }
    // two sliding steel leaves
    const leafMat = new THREE.MeshStandardMaterial({ map: tex.steel, color: '#8f8b85', roughness: 0.5, metalness: 0.4 });
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
    glow.scale.set(12, 12, 1); glow.position.set(0, wy0 + DH * 0.55, z + 0.6); g.add(glow);
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
    for (const tr of C.traps) {
      const h = C.trapHeight(tr, t);
      tr.group.position.y = tr.baseY - 0.5 + h * 0.5; tr.hz.active = h > 0.45; tr.h = h;
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
    E.glow.material.opacity = 0.65 + 0.2 * pulse + o * 0.3;
    E.glow.scale.setScalar(11 + pulse * 1.2 + o * 6);
    E.shaftMat.opacity = 0.10 + 0.06 * pulse + o * 0.35;
    E.lamp.intensity = 25 + 10 * pulse + o * 60;
    E.seam.visible = o < 0.05;
  };
  C.unlight = (cp) => { cp.lit = false; cp.ring.material = M.goldDim.clone(); cp.flash = 0; };
  C.light = (cp) => { cp.lit = true; cp.ring.material = M.gold; cp.flash = 1.2; };
  C.HALF_W = HALF_W;
  return C;
}
