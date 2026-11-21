// Escape 3D — chunky block characters (obby style): every part is a slightly rounded plastic box, limbs swing
// rigidly from their top like a classic block avatar. Built in code, so no model files and instant loading.
// Each maker returns { root, animate(pose, dt) } — pose = { mode: idle|walk|run|jump|fall|cheer, speed, t }.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const geoCache = new Map();
function geo(w, h, d) {
  const k = [w, h, d].map((v) => v.toFixed(3)).join('x');
  if (!geoCache.has(k)) geoCache.set(k, new RoundedBoxGeometry(w, h, d, 2, Math.min(w, h, d) * 0.14));
  return geoCache.get(k);
}
const matCache = new Map();
function mat(c) {
  if (!matCache.has(c)) matCache.set(c, new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0 }));
  return matCache.get(c);
}
// a box whose local origin is at (ox, oy, oz) relative to its centre (so a limb can hang from its top)
function part(parent, w, h, d, color, x, y, z, pivotTop = false) {
  const m = new THREE.Mesh(geo(w, h, d), mat(color)); m.castShadow = true;
  if (!pivotTop) { m.position.set(x, y, z); parent.add(m); return m; }
  const g = new THREE.Group(); g.position.set(x, y, z); m.position.y = -h / 2; g.add(m); parent.add(g); return g;
}
const flat = (parent, w, h, color, x, y, z) => { // face decals (eyes, nose): thin boxes
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.02), mat(color)); m.position.set(x, y, z); parent.add(m); return m;
};

// shared quadruped motion: diagonal legs swing together, body bobs, tail wags
function quadAnimate(Q) {
  let ph = 0;
  return (pose, dt) => {
    const sp = pose.speed;
    if (pose.mode === 'walk' || pose.mode === 'run') ph += dt * (4 + sp * 2.2);
    const swing = pose.mode === 'run' ? 0.9 : pose.mode === 'walk' ? 0.55 : 0;
    const s = Math.sin(ph) * swing;
    if (pose.mode === 'jump' || pose.mode === 'fall') {
      const k = pose.mode === 'jump' ? 1 : -0.4;
      Q.fl.rotation.x = -0.9 * k; Q.fr.rotation.x = -0.9 * k; Q.bl.rotation.x = 0.8 * k; Q.br.rotation.x = 0.8 * k;
      Q.body.rotation.x = -0.18 * k;
    } else {
      Q.fl.rotation.x = s; Q.br.rotation.x = s; Q.fr.rotation.x = -s; Q.bl.rotation.x = -s;
      Q.body.rotation.x = 0;
    }
    const bob = pose.mode === 'run' ? Math.abs(Math.sin(ph)) * 0.05 : pose.mode === 'idle' ? Math.sin(pose.t * 2.2) * 0.012 : 0;
    Q.body.position.y = Q.bodyY + bob;
    Q.tail.rotation.z = Math.sin(pose.t * (pose.mode === 'cheer' ? 22 : 9)) * (pose.mode === 'idle' || pose.mode === 'cheer' ? 0.5 : 0.25);
    Q.head.rotation.x = pose.mode === 'idle' ? Math.sin(pose.t * 1.3) * 0.05 : pose.mode === 'cheer' ? -0.25 : 0;
    if (Q.ears) for (const [e, sgn] of Q.ears) e.rotation.z = sgn * (0.12 + (pose.mode === 'run' ? Math.abs(Math.sin(ph)) * 0.35 : pose.mode === 'fall' ? 0.9 : pose.mode === 'jump' ? 0.5 : 0));
  };
}

// the pup: apricot, cream face and paws, floppy ears, scruffy top tuft, orange harness (the developer's dog)
export function makeDog(pal = {}) {
  const root = new THREE.Group();
  const AP = pal.coat || '#e0a15e', APD = pal.ear || '#c98443', CR = pal.light || '#f6dfba', DK = '#2b1d16', OR = pal.harness || '#ff7a1a', BK = '#1d1d1f';
  const body = new THREE.Group(); const bodyY = 0.44; body.position.y = bodyY; root.add(body);
  part(body, 0.5, 0.42, 0.78, AP, 0, 0, -0.02);
  // harness
  part(body, 0.54, 0.46, 0.2, OR, 0, 0.0, 0.2);
  part(body, 0.56, 0.08, 0.22, BK, 0, 0.2, 0.2);
  // head
  const head = new THREE.Group(); head.position.set(0, 0.24, 0.42); body.add(head);
  part(head, 0.5, 0.46, 0.44, AP, 0, 0.08, 0.05);
  part(head, 0.42, 0.18, 0.06, CR, 0, 0.13, 0.28);          // face patch
  part(head, 0.3, 0.2, 0.22, CR, 0, -0.04, 0.33);            // snout
  part(head, 0.12, 0.08, 0.06, DK, 0, 0.03, 0.45);           // nose
  part(head, 0.22, 0.06, 0.08, CR, 0, -0.16, 0.38);          // beard
  flat(head, 0.075, 0.09, DK, -0.12, 0.16, 0.315); flat(head, 0.075, 0.09, DK, 0.12, 0.16, 0.315); // eyes
  part(head, 0.42, 0.14, 0.34, CR, 0, 0.34, 0.02);           // scruffy top tuft
  part(head, 0.2, 0.1, 0.18, CR, 0.1, 0.42, -0.02);
  part(head, 0.16, 0.08, 0.14, '#ead0a6', -0.11, 0.41, 0.06);
  const ears = [];
  for (const s of [-1, 1]) { const e = part(head, 0.1, 0.36, 0.24, APD, s * 0.28, 0.24, 0.02, true); ears.push([e, -s]); }
  // legs (hang from the hips)
  const leg = (x, z) => { const g = part(body, 0.15, 0.3, 0.15, AP, x, -0.12, z, true); part(g, 0.16, 0.08, 0.17, CR, 0, -0.27, 0.01); return g; };
  const fl = leg(-0.15, 0.25), fr = leg(0.15, 0.25), bl = leg(-0.15, -0.28), br = leg(0.15, -0.28);
  const tailPivot = new THREE.Group(); tailPivot.position.set(0, 0.14, -0.4); body.add(tailPivot);
  const tail = part(tailPivot, 0.1, 0.3, 0.1, CR, 0, 0.12, -0.05); tail.rotation.x = -0.5;
  const Q = { body, bodyY, head, fl, fr, bl, br, tail: tailPivot, ears };
  return { root, animate: quadAnimate(Q), height: 0.98 };
}

// the kitty: orange tabby with cream chest and paws, stripes, tall tail
export function makeCat() {
  const root = new THREE.Group();
  const OR = '#f0902f', ORD = '#cf6e1a', CR = '#fbe3c4', DK = '#2b1d16', PK = '#f2a3a3';
  const body = new THREE.Group(); const bodyY = 0.38; body.position.y = bodyY; root.add(body);
  part(body, 0.4, 0.36, 0.74, OR, 0, 0, 0);
  for (const z of [-0.2, 0, 0.2]) part(body, 0.42, 0.05, 0.08, ORD, 0, 0.17, z); // stripes
  part(body, 0.3, 0.06, 0.4, CR, 0, -0.17, 0.12);
  const head = new THREE.Group(); head.position.set(0, 0.2, 0.4); body.add(head);
  part(head, 0.44, 0.38, 0.38, OR, 0, 0.06, 0.04);
  part(head, 0.24, 0.14, 0.1, CR, 0, -0.04, 0.24);
  part(head, 0.07, 0.05, 0.04, PK, 0, 0.02, 0.29);
  flat(head, 0.07, 0.1, DK, -0.11, 0.1, 0.235); flat(head, 0.07, 0.1, DK, 0.11, 0.1, 0.235);
  for (const s of [-1, 1]) { const ear = part(head, 0.12, 0.14, 0.08, OR, s * 0.14, 0.3, 0.02); ear.rotation.z = -s * 0.25; part(head, 0.06, 0.08, 0.02, PK, s * 0.14, 0.29, 0.065); }
  for (const s of [-1, 1]) for (const y of [-0.02, 0.04]) { const w = part(head, 0.16, 0.015, 0.015, CR, s * 0.26, y, 0.18); w.rotation.z = s * (y > 0 ? -0.15 : 0.15); }
  const leg = (x, z) => { const g = part(body, 0.13, 0.28, 0.13, OR, x, -0.1, z, true); part(g, 0.14, 0.07, 0.15, CR, 0, -0.25, 0.01); return g; };
  const fl = leg(-0.12, 0.24), fr = leg(0.12, 0.24), bl = leg(-0.12, -0.26), br = leg(0.12, -0.26);
  const tailPivot = new THREE.Group(); tailPivot.position.set(0, 0.12, -0.36); body.add(tailPivot);
  const t1 = part(tailPivot, 0.09, 0.42, 0.09, OR, 0, 0.2, -0.04); t1.rotation.x = -0.25;
  part(tailPivot, 0.1, 0.1, 0.1, ORD, 0, 0.42, -0.1);
  const Q = { body, bodyY, head, fl, fr, bl, br, tail: tailPivot };
  return { root, animate: quadAnimate(Q), height: 0.9 };
}

// the inmate: a block avatar in an orange jumpsuit with a number patch
export function makeKid() {
  const root = new THREE.Group();
  const SK = '#f0c08e', OR = '#f47a1c', ORD = '#d9620e', HA = '#3a2a22', DK = '#2b1d16', SHOE = '#f1f1f1', WH = '#ffffff';
  const hip = new THREE.Group(); hip.position.y = 0.56; root.add(hip);
  const torso = part(hip, 0.5, 0.52, 0.26, OR, 0, 0.27, 0);
  part(hip, 0.2, 0.12, 0.02, WH, 0, 0.38, -0.135);            // number patch on the back
  part(hip, 0.12, 0.08, 0.02, WH, -0.12, 0.4, 0.135);          // name tag on the chest
  part(hip, 0.52, 0.06, 0.28, ORD, 0, 0.03, 0);                // waist seam
  const head = new THREE.Group(); head.position.set(0, 0.73, 0); hip.add(head);
  part(head, 0.36, 0.34, 0.34, SK, 0, 0, 0);
  part(head, 0.38, 0.1, 0.36, HA, 0, 0.16, 0);                 // buzz cut
  flat(head, 0.05, 0.08, DK, -0.08, 0.02, 0.172); flat(head, 0.05, 0.08, DK, 0.08, 0.02, 0.172);
  flat(head, 0.12, 0.03, '#c0563f', 0, -0.08, 0.172);
  const arm = (x) => { const g = part(hip, 0.2, 0.36, 0.22, OR, x, 0.52, 0, true); part(g, 0.19, 0.16, 0.21, SK, 0, -0.42, 0); return g; };
  const la = arm(-0.36), ra = arm(0.36);
  const legf = (x) => { const g = part(hip, 0.24, 0.52, 0.24, OR, x, 0.02, 0, true); part(g, 0.25, 0.1, 0.3, SHOE, 0, -0.48, 0.03); return g; };
  const ll = legf(-0.13), rl = legf(0.13);
  return { root, animate: bipedAnimate({ hip, hipY: 0.56, head, torso, la, ra, ll, rl }), height: 1.3 };
}
function bipedAnimate(B, rate = 1) {
  let ph = 0;
  return (pose, dt) => {
    const { hip, head, torso, la, ra, ll, rl } = B;
    if (pose.mode === 'walk' || pose.mode === 'run') ph += dt * (3.5 + pose.speed * 1.6) * rate;
    const sw = pose.mode === 'run' ? 1.0 : pose.mode === 'walk' ? 0.6 : 0;
    const s = Math.sin(ph) * sw;
    la.rotation.set(s, 0, 0); ra.rotation.set(-s, 0, 0); ll.rotation.set(-s, 0, 0); rl.rotation.set(s, 0, 0);
    hip.position.y = B.hipY + (pose.mode === 'run' ? Math.abs(Math.sin(ph)) * 0.05 : 0);
    head.rotation.set(0, 0, 0);
    if (pose.mode === 'jump') { la.rotation.set(-2.6, 0, -0.2); ra.rotation.set(-2.6, 0, 0.2); ll.rotation.x = -0.6; rl.rotation.x = 0.3; }
    if (pose.mode === 'fall') { la.rotation.set(-2.2 + Math.sin(pose.t * 18) * 0.4, 0, -0.5); ra.rotation.set(-2.2 - Math.sin(pose.t * 18) * 0.4, 0, 0.5); ll.rotation.x = 0.3; rl.rotation.x = -0.3; }
    if (pose.mode === 'idle') { la.rotation.z = -0.05; ra.rotation.z = 0.05; head.rotation.y = Math.sin(pose.t * 0.7) * 0.15; }
    if (pose.mode === 'cheer') { la.rotation.set(-2.9, 0, -0.3 + Math.sin(pose.t * 14) * 0.25); ra.rotation.set(-2.9, 0, 0.3 - Math.sin(pose.t * 14) * 0.25); }
    if (B.chaser && pose.mode === 'run') { la.rotation.set(-1.5 + s * 0.2, 0, 0.15); ra.rotation.set(-1.9 - s * 0.3, 0, -0.15); } // reaching for you, baton up
    torso.rotation.x = pose.mode === 'run' ? 0.08 : 0;
  };
}

// the guard: twice your size, dark green uniform, cap, shades, baton
export function makeGuard() {
  const root = new THREE.Group();
  const UNI = '#b59a5b', UNID = '#6b5a3a', SK = '#e3ad80', DK = '#1d1d1f', BADGE = '#e5352b';
  const hip = new THREE.Group(); hip.position.y = 1.0; root.add(hip);
  const torso = part(hip, 1.2, 1.0, 0.8, UNI, 0, 0.52, 0);
  part(hip, 1.24, 0.14, 0.84, DK, 0, 0.1, 0); part(hip, 0.2, 0.16, 0.06, BADGE, 0, 0.1, 0.42);     // belt + buckle
  part(hip, 0.16, 0.18, 0.04, BADGE, -0.34, 0.8, 0.41);                                             // badge
  part(hip, 0.5, 0.1, 0.5, UNID, 0, 1.03, 0);                                                       // collar
  const head = new THREE.Group(); head.position.set(0, 1.38, 0); hip.add(head);
  part(head, 0.62, 0.56, 0.58, SK, 0, 0, 0);
  part(head, 0.56, 0.16, 0.5, SK, 0, -0.3, 0.05);                                                   // heavy jaw
  part(head, 0.68, 0.2, 0.64, UNID, 0, 0.34, 0); part(head, 0.62, 0.06, 0.3, DK, 0, 0.25, 0.4);    // cap + brim
  part(head, 0.14, 0.12, 0.04, BADGE, 0, 0.36, 0.33);
  part(head, 0.58, 0.15, 0.06, DK, 0, 0.06, 0.29);                                                  // shades
  flat(head, 0.3, 0.05, '#6b2f25', 0, -0.2, 0.302);                                                 // frown
  const arm = (x) => { const g = part(hip, 0.34, 0.6, 0.36, UNI, x, 1.0, 0, true); part(g, 0.3, 0.42, 0.32, SK, 0, -0.75, 0); return g; };
  const la = arm(-0.78), ra = arm(0.78);
  // the net: a long pole with a hoop and a mesh bag
  const pole = part(ra, 0.08, 0.08, 1.7, '#8a6a3c', 0, -0.98, 0.75);
  const hoop = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.04, 6, 18), mat('#d9d9d9')); hoop.position.set(0, -0.98, 1.95); hoop.rotation.x = Math.PI / 2; ra.add(hoop);
  const bag = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.7, 10, 3, true), new THREE.MeshStandardMaterial({ color: '#f4f4f4', wireframe: true })); bag.position.set(0, -1.33, 1.95); bag.rotation.x = Math.PI; ra.add(bag);
  const legf = (x) => { const g = part(hip, 0.46, 0.84, 0.5, UNID, x, 0.02, 0, true); part(g, 0.48, 0.16, 0.62, DK, 0, -0.92, 0.05); return g; };
  const ll = legf(-0.3), rl = legf(0.3);
  return { root, animate: bipedAnimate({ hip, hipY: 1.0, head, torso, la, ra, ll, rl, chaser: true }, 0.7), height: 2.75 };
}

// a bunny friend: white, long ears, pink nose
export function makeBunny() {
  const root = new THREE.Group();
  const W = '#f7f4ee', G = '#d9d3c8', PK = '#f2a3a3', DK = '#2b1d16';
  const body = new THREE.Group(); const bodyY = 0.3; body.position.y = bodyY; root.add(body);
  part(body, 0.36, 0.34, 0.5, W, 0, 0, 0);
  const head = new THREE.Group(); head.position.set(0, 0.2, 0.28); body.add(head);
  part(head, 0.36, 0.32, 0.32, W, 0, 0.04, 0.02);
  part(head, 0.07, 0.05, 0.04, PK, 0, 0.0, 0.2);
  flat(head, 0.06, 0.09, DK, -0.09, 0.08, 0.185); flat(head, 0.06, 0.09, DK, 0.09, 0.08, 0.185);
  const ears = [];
  for (const s of [-1, 1]) { const e = part(head, 0.09, 0.4, 0.07, W, s * 0.09, 0.6, -0.02, true); part(e, 0.05, 0.3, 0.02, PK, 0, -0.2, 0.04); e.rotation.x = Math.PI; ears.push([e, 0]); }
  const leg = (x, z, h) => part(body, 0.12, h, 0.14, G, x, -0.1, z, true);
  const fl = leg(-0.1, 0.16, 0.2), fr = leg(0.1, 0.16, 0.2), bl = leg(-0.12, -0.16, 0.2), br = leg(0.12, -0.16, 0.2);
  const tailPivot = new THREE.Group(); tailPivot.position.set(0, 0.05, -0.27); body.add(tailPivot); part(tailPivot, 0.14, 0.14, 0.12, W, 0, 0, 0);
  const q = quadAnimate({ body, bodyY, head, fl, fr, bl, br, tail: tailPivot });
  let t = 0;
  return { root, height: 0.8, animate: (pose, dt) => { q(pose, dt); t += dt; if (pose.mode === 'run' || pose.mode === 'walk') body.position.y = bodyY + Math.abs(Math.sin(t * 11)) * 0.16; for (const [e] of ears) e.rotation.z = Math.sin(t * 3) * 0.06; } };
}

// the owner waiting outside: green sweater, holding a red leash and a LOST DOG poster
export function makeOwner() {
  const root = new THREE.Group();
  const SK = '#f0c9a0', SW = '#5c6b4a', PA = '#26262b', HA = '#1f1a17', DK = '#2b1d16', SHOE = '#3a3a40';
  const hip = new THREE.Group(); hip.position.y = 0.86; root.add(hip);
  const torso = part(hip, 0.62, 0.72, 0.34, SW, 0, 0.38, 0);
  const head = new THREE.Group(); head.position.set(0, 1.0, 0); hip.add(head);
  part(head, 0.42, 0.42, 0.4, SK, 0, 0, 0);
  part(head, 0.46, 0.16, 0.44, HA, 0, 0.2, -0.01); part(head, 0.46, 0.3, 0.12, HA, 0, 0.06, -0.18);
  flat(head, 0.06, 0.08, DK, -0.1, 0.02, 0.202); flat(head, 0.06, 0.08, DK, 0.1, 0.02, 0.202);
  const mouth = flat(head, 0.14, 0.03, '#b0553f', 0, -0.1, 0.202);
  const arm = (x) => { const g = part(hip, 0.2, 0.52, 0.24, SW, x, 0.72, 0, true); part(g, 0.18, 0.16, 0.2, SK, 0, -0.58, 0); return g; };
  const la = arm(-0.43), ra = arm(0.43);
  const leash = part(ra, 0.05, 0.6, 0.05, '#d92b2b', 0, -0.95, 0.02); leash.rotation.z = 0.15;
  // poster in the left hand: a white sheet with a little dog face (drawn here; no text needed)
  const c = document.createElement('canvas'); c.width = 96; c.height = 128; const g2 = c.getContext('2d');
  g2.fillStyle = '#fffdf6'; g2.fillRect(0, 0, 96, 128); g2.fillStyle = '#d92b2b'; g2.fillRect(8, 8, 80, 18);
  g2.fillStyle = '#e0a15e'; g2.fillRect(26, 44, 44, 40); g2.fillStyle = '#c98443'; g2.fillRect(18, 44, 10, 30); g2.fillRect(68, 44, 10, 30);
  g2.fillStyle = '#f6dfba'; g2.fillRect(36, 64, 24, 18); g2.fillStyle = '#2b1d16'; g2.fillRect(34, 54, 6, 7); g2.fillRect(56, 54, 6, 7); g2.fillRect(44, 66, 8, 6);
  g2.fillStyle = '#bbb'; for (let i = 0; i < 3; i++) g2.fillRect(14, 96 + i * 9, 68, 4);
  const pt = new THREE.CanvasTexture(c); pt.colorSpace = THREE.SRGBColorSpace;
  const poster = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.56), new THREE.MeshStandardMaterial({ map: pt, roughness: 0.9, side: THREE.DoubleSide })); poster.position.set(0, -0.72, 0.3); poster.rotation.x = 0.7; la.add(poster); // held up, upright, facing forward
  const legf = (x) => { const g = part(hip, 0.27, 0.8, 0.28, PA, x, 0.02, 0, true); part(g, 0.28, 0.1, 0.34, SHOE, 0, -0.76, 0.03); return g; };
  legf(-0.16); legf(0.16);
  const animate = (pose, dt) => {
    const t = pose.t;
    if (pose.mode === 'cheer') { // kneel a little, arms wide open
      hip.position.y = 0.86 - 0.22 + Math.abs(Math.sin(t * 6)) * 0.05; la.rotation.set(-1.1, 0, -0.9); ra.rotation.set(-1.1, 0, 0.9); head.rotation.x = 0.15; torso.rotation.x = 0.2; mouth.scale.set(1.3, 3, 1); poster.visible = false;
    } else { // waiting: looking around, poster held up, shoulders low
      hip.position.y = 0.86; la.rotation.set(-0.7, 0, 0.25); ra.rotation.set(0, 0, 0.06); head.rotation.y = Math.sin(t * 0.8) * 0.5; head.rotation.x = 0.12; torso.rotation.x = 0; mouth.scale.set(1, 1, 1); poster.visible = true;
    }
  };
  return { root, animate, height: 1.9 };
}

export const MAKERS = { dog: makeDog, cat: makeCat, kid: makeKid, bunny: makeBunny };
