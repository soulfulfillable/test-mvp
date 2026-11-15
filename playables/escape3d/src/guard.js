// Escape 3D — a patrolling guard. He walks between two points inside his zone (an obstacle-free rectangle);
// when he notices the hero inside the zone he chases (slower than the hero's sprint) and catches on touch.
// The hero is safe outside the zone (cell, stairs, behind wire) — he gives up after a moment and resumes patrol.
import * as THREE from 'three';
import { makeGuard } from './blocky.js';

const WALK = 2.4, RUN = 4.6, HEAR = 7.5, SEE = 11, CATCH = 0.95;

function alertSprite() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  g.fillStyle = '#e5352b'; g.beginPath(); g.arc(32, 32, 28, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#fff'; g.fillRect(27, 12, 10, 26); g.fillRect(27, 44, 10, 9);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false })); s.scale.set(0.7, 0.7, 1); return s;
}

export function createGuard(scene, def) { // def: { zone: {x0,x1,z0,z1}, a: [x,z], b: [x,z], y }
  const body = makeGuard(); scene.add(body.root);
  const bang = alertSprite(); bang.position.y = 3.1; bang.visible = false; body.root.add(bang);
  const Z = def.zone, y = def.y || 0, pts = [def.a, def.b];
  const G = { root: body.root, pos: new THREE.Vector3(), vx: 0, vz: 0, facing: 0, mode: 'patrol', target: 1, wait: 0, lost: 0, alerted: false };
  const pose = { mode: 'walk', speed: 0, t: 0 };
  const inZone = (p, pad) => p.x > Z.x0 - pad && p.x < Z.x1 + pad && p.z > Z.z0 - pad && p.z < Z.z1 + pad && Math.abs(p.y - y) < 1.2;
  G.reset = () => { G.pos.set(def.a[0], y, def.a[1]); G.mode = 'patrol'; G.target = 1; G.wait = 0; G.lost = 0; G.vx = G.vz = 0; G.facing = Math.atan2(def.b[0] - def.a[0], def.b[1] - def.a[1]); };
  G.reset();
  function moveTo(tx, tz, speed, dt) {
    const dx = tx - G.pos.x, dz = tz - G.pos.z, d = Math.hypot(dx, dz);
    if (d < 0.05) { G.vx = G.vz = 0; return true; }
    const s = Math.min(speed, d / dt); G.vx = dx / d * s; G.vz = dz / d * s;
    G.pos.x = Math.max(Z.x0, Math.min(Z.x1, G.pos.x + G.vx * dt)); G.pos.z = Math.max(Z.z0, Math.min(Z.z1, G.pos.z + G.vz * dt));
    const want = Math.atan2(dx, dz); let a = want - G.facing; a = Math.atan2(Math.sin(a), Math.cos(a)); G.facing += a * Math.min(1, dt * 10);
    return false;
  }
  // one fixed step; returns true when the hero is caught
  G.step = (dt, hero, heroActive) => {
    const dx = hero.x - G.pos.x, dz = hero.z - G.pos.z, d = Math.hypot(dx, dz);
    const reach = heroActive && inZone(hero, 0.35);
    const front = (Math.sin(G.facing) * dx + Math.cos(G.facing) * dz) / Math.max(d, 0.001);
    const sees = reach && (d < HEAR || (d < SEE && front > 0.3));
    if (G.mode === 'patrol') {
      if (sees) { G.mode = 'chase'; G.lost = 0; G.alerted = true; }
      else if (G.wait > 0) { G.wait -= dt; G.vx = G.vz = 0; }
      else if (moveTo(pts[G.target][0], pts[G.target][1], WALK, dt)) { G.target = 1 - G.target; G.wait = 0.8; }
    } else {
      if (reach && d < 14) { G.lost = 0; moveTo(hero.x, hero.z, RUN, dt); }
      else { // out of reach: stand at the edge glaring for a moment, then go back to work
        G.lost += dt; G.vx = G.vz = 0;
        if (heroActive) { const want = Math.atan2(dx, dz); let a = want - G.facing; a = Math.atan2(Math.sin(a), Math.cos(a)); G.facing += a * Math.min(1, dt * 6); }
        if (G.lost > 1.4) G.mode = 'patrol';
      }
    }
    return reach && d < CATCH;
  };
  G.render = (dt) => {
    body.root.position.copy(G.pos); body.root.rotation.y = G.facing;
    const sp = Math.hypot(G.vx, G.vz); pose.t += dt; pose.speed = sp;
    pose.mode = G.mode === 'chase' ? (sp > 0.3 ? 'run' : 'cheer') : (sp > 0.3 ? 'walk' : 'idle');
    bang.visible = G.mode === 'chase'; if (bang.visible) bang.position.y = 3.1 + Math.sin(pose.t * 10) * 0.06;
    body.animate(pose, dt);
  };
  return G;
}
