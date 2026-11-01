// Knock Chain — 3D view (three.js). Theme (user, 2026-11-01): a Halloween night; a shepherd with a lantern looks
// for one lost sheep. Darkness vs warm lantern light is the signature. One cool moon light with a shadow map
// lights every object the same way; warm point lights (lantern, pumpkins, the thrown light) carve the dark.
// Physics boxes are RoundedBox meshes synced from the sim snapshot. Exposure level A: no names, verses or crosses.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { LANE, DEPTH, BALL_R } from './levels.js';

const C = { grass: 0x3f5a46, grassDark: 0x2f4536, earth: 0x3b2c22, stone: 0x6e7580, glass: 0x9fd9f0, slate: 0x3a3f4a, warm: 0xffb347, band: 0x5a3e2b, stem: 0x6b4423, accent: 0xf0a030, bumper: 0x8a2f2a, wool: 0xf3efe4, face: 0x2a2320, cloak: 0x3b4a8c, skin: 0xf0c9a0, pumpkin: 0xe8721c, roof: 0x4a2f25, hut: 0x5a3b2c };
let seed = 11; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

export function createView(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
  container.prepend(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -50, 100);
  const CAM_DIR = new THREE.Vector3(0.6124, 0.5, 0.6124);
  // moon: cool, low, from the upper left (same direction as the stage-1 stills) + a dim blue sky fill
  const hemi = new THREE.HemisphereLight(0x4a5a8a, 0x2a1e14, 1.1); scene.add(hemi);
  const moon = new THREE.DirectionalLight(0xaab8ff, 1.4); moon.castShadow = true; moon.shadow.mapSize.set(2048, 2048);
  Object.assign(moon.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 40 });
  moon.shadow.radius = 4; moon.shadow.bias = -0.0004; moon.shadow.normalBias = 0.02; scene.add(moon); scene.add(moon.target);

  const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...o });
  const texCache = {};
  function woodTex(base) {
    if (texCache[base]) return texCache[base];
    const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
    g.fillStyle = base; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 90; i++) { g.strokeStyle = `rgba(255,255,255,${0.05 + rnd() * 0.12})`; g.lineWidth = 1 + rnd() * 2; const y = rnd() * 256; g.beginPath(); g.moveTo(-10, y); g.bezierCurveTo(80, y + rnd() * 8 - 4, 180, y + rnd() * 8 - 4, 270, y + rnd() * 6 - 3); g.stroke(); }
    for (let i = 0; i < 60; i++) { g.strokeStyle = `rgba(60,30,8,${0.04 + rnd() * 0.1})`; g.lineWidth = 1 + rnd() * 1.5; const y = rnd() * 256; g.beginPath(); g.moveTo(-10, y); g.bezierCurveTo(80, y + rnd() * 6 - 3, 180, y + rnd() * 6 - 3, 270, y + rnd() * 6 - 3); g.stroke(); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
    return (texCache[base] = t);
  }
  const woodMat = (hex) => new THREE.MeshStandardMaterial({ map: woodTex(hex), roughness: 0.8 });
  const MATS = {
    wood: () => woodMat('#8d6238'),
    stone: () => mat(C.stone, { roughness: 0.95 }),
    glass: () => new THREE.MeshPhysicalMaterial({ color: C.glass, transparent: true, opacity: 0.4, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.05, side: THREE.DoubleSide }),
    bumper: () => mat(C.bumper, { roughness: 0.5 }),
  };

  function makeSky(W, H, dusk = 0) { // night gradient, moon, stars, a distant village silhouette with windows
    const c = document.createElement('canvas'); c.width = Math.max(4, W); c.height = Math.max(4, H); const g = c.getContext('2d');
    const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#0b1026'); gr.addColorStop(0.55, '#1a2050'); gr.addColorStop(1, '#2a2340'); g.fillStyle = gr; g.fillRect(0, 0, W, H);
    seed = 5;
    for (let i = 0; i < 90; i++) { g.fillStyle = `rgba(255,255,255,${0.25 + rnd() * 0.6})`; const r = 0.6 + rnd() * 1.1; g.beginPath(); g.arc(rnd() * W, rnd() * H * 0.55, r, 0, 7); g.fill(); }
    const mx = W * 0.78, my = H * (W > H ? 0.16 : 0.13), mr = Math.min(W, H) * 0.07;
    g.save(); g.filter = 'blur(18px)'; g.fillStyle = 'rgba(200,215,255,0.35)'; g.beginPath(); g.arc(mx, my, mr * 1.9, 0, 7); g.fill(); g.restore();
    g.fillStyle = '#e8ecff'; g.beginPath(); g.arc(mx, my, mr, 0, 7); g.fill();
    g.fillStyle = 'rgba(190,200,230,0.45)'; for (const [dx, dy, k] of [[-0.3, -0.2, 0.22], [0.25, 0.3, 0.16], [0.1, -0.45, 0.1]]) { g.beginPath(); g.arc(mx + dx * mr, my + dy * mr, mr * k, 0, 7); g.fill(); }
    // village silhouette along the horizon (hills + houses), windows warm up as the sheep is found (dusk→found)
    const hy = H * (W > H ? 0.58 : 0.47);
    g.fillStyle = '#121632'; g.beginPath(); g.moveTo(0, H); g.lineTo(0, hy + 30);
    for (let x = 0; x <= W + 40; x += 40) { const xx = Math.min(x, W); g.lineTo(xx, hy + 30 - Math.sin(xx * 0.013) * 22 - Math.sin(xx * 0.041) * 9); } g.lineTo(W, H); g.closePath(); g.fill();
    seed = 9; const houses = [];
    for (let x = 20; x < W - 30; x += 70 + rnd() * 60) { const w = 26 + rnd() * 22, h = 22 + rnd() * 18, y = hy + 26 - Math.sin(x * 0.013) * 22 - Math.sin(x * 0.041) * 9; houses.push([x, y, w, h]); }
    for (const [x, y, w, h] of houses) { g.fillStyle = '#0d1028'; g.fillRect(x, y - h, w, h); g.beginPath(); g.moveTo(x - 3, y - h); g.lineTo(x + w / 2, y - h - 12); g.lineTo(x + w + 3, y - h); g.closePath(); g.fill(); }
    V.houses = houses; V.horizon = hy;
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  }
  function lightWindows(frac) { // 0..1 of the village windows lit (called when the sheep is found)
    if (!V.houses) return;
    const c = scene.background.image, g = c.getContext('2d'); seed = 13;
    V.houses.forEach(([x, y, w, h], i) => { if (i / V.houses.length > frac) return; g.fillStyle = '#ffcf7a'; g.fillRect(x + 5, y - h + 6, 6, 7); if (w > 36) g.fillRect(x + w - 11, y - h + 6, 6, 7); g.save(); g.filter = 'blur(6px)'; g.fillStyle = 'rgba(255,190,100,0.35)'; g.fillRect(x + 2, y - h + 2, w - 4, h - 4); g.restore(); });
    scene.background.needsUpdate = true;
  }

  // ---------- per-level state ----------
  const V = { level: null, group: null, boxes: new Map(), ball: null, dots: [], bands: [], pouch: null, switchBtn: null, door: null, sheep: null, shepherd: null, lanternLight: null, ballLight: null, shards: [], confetti: [], shake: 0, W: 1, H: 1, safe: { top: 100, bottom: 130, left: 16, right: 16 }, fitPts: [], t: 0 };
  const dyn = new THREE.Group(); scene.add(dyn);

  function addBox(g, x, y, z, sx, sy, sz, m, r = 0.035) {
    const o = new THREE.Mesh(r ? new RoundedBoxGeometry(sx, sy, sz, 2, r) : new THREE.BoxGeometry(sx, sy, sz), m);
    o.position.set(x + sx / 2, y + sy / 2, z + sz / 2); o.castShadow = o.receiveShadow = true; g.add(o); return o;
  }
  function tubeMesh(r, m) { const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 1, 10), m); o.castShadow = true; return o; }
  function setTube(o, a, b) { const d = new THREE.Vector3().subVectors(b, a); o.position.copy(a).add(b).multiplyScalar(0.5); o.scale.set(1, Math.max(0.001, d.length()), 1); o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); }
  function warmLight(x, y, z, intensity, dist) { const l = new THREE.PointLight(C.warm, intensity, dist, 1.6); l.position.set(x, y, z); return l; }

  // ---- characters (procedural, one palette) ----
  function makeSheep() { // fluffy body = sphere cluster, dark face and legs; 4 states handled in sync()
    const g = new THREE.Group(); const wool = mat(C.wool, { roughness: 1 }), dark = mat(C.face, { roughness: 0.9 });
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.34, 18, 14), wool); body.scale.set(1.25, 1, 1); body.position.y = 0.46; body.castShadow = true; g.add(body);
    for (const [dx, dy, dz, r] of [[0.22, 0.12, 0.2, 0.2], [-0.25, 0.14, -0.18, 0.2], [0.05, 0.26, -0.05, 0.22], [-0.2, 0.05, 0.22, 0.18], [0.25, 0.05, -0.2, 0.17]]) { const b = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), wool); b.position.set(dx, 0.46 + dy, dz); b.castShadow = true; g.add(b); }
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 14, 12), dark); head.scale.set(1, 0.95, 1.2); head.position.set(0.42, 0.56, 0.02); head.castShadow = true; g.add(head);
    const tuft = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), wool); tuft.position.set(0.4, 0.7, 0.02); g.add(tuft);
    for (const s of [-1, 1]) { const ear = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), dark); ear.scale.set(1.8, 0.6, 1); ear.position.set(0.36, 0.6, s * 0.17); g.add(ear); const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), mat(0xffffff, { emissive: 0xfff3c0, emissiveIntensity: 0.6 })); eye.position.set(0.55, 0.6, s * 0.08); g.add(eye); }
    for (const [dx, dz] of [[0.2, 0.14], [0.2, -0.14], [-0.2, 0.14], [-0.2, -0.14]]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.3, 8), dark); leg.position.set(dx, 0.15, dz); leg.castShadow = true; g.add(leg); }
    const sl = warmLight(0.3, 0.9, 0.3, 0, 2.6); g.add(sl); g.userData.light = sl; // lit when found
    g.userData.head = head; return g;
  }
  function makeShepherd(x, z) { // a child in a cloak holding a lantern on a staff; the lantern is the warm light
    const g = new THREE.Group(); const cloak = mat(C.cloak, { roughness: 0.9 }), skin = mat(C.skin);
    const body = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.9, 14), cloak); body.position.y = 0.45; body.castShadow = true; g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 14, 12), skin); head.position.y = 1.0; head.castShadow = true; g.add(head);
    const hood = new THREE.Mesh(new THREE.SphereGeometry(0.21, 14, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), cloak); hood.position.y = 1.02; g.add(hood);
    const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.5, 8), mat(C.stem)); staff.position.set(0.38, 0.75, 0); g.add(staff);
    const lantern = new THREE.Group(); lantern.position.set(0.38, 1.35, 0);
    const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.2, 8), mat(0x2a2320, { roughness: 0.6, metalness: 0.3 })); lantern.add(cage);
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), new THREE.MeshBasicMaterial({ color: 0xffe2a8 })); lantern.add(glow);
    const l = warmLight(0, 0, 0, 3.2, 7); l.castShadow = false; lantern.add(l); V.lanternLight = l;
    g.add(lantern); g.userData.lantern = lantern;
    g.position.set(x, 0, z); g.rotation.y = -Math.PI * 0.15; g.scale.setScalar(1.15); return g;
  }
  function makePumpkin(x, z, s = 0.22) {
    const g = new THREE.Group(); const p = new THREE.Mesh(new THREE.SphereGeometry(s, 14, 10), mat(C.pumpkin, { roughness: 0.6 })); p.scale.set(1.15, 0.85, 1.15); p.position.y = s * 0.85; p.castShadow = true; g.add(p);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.12, 6), mat(0x4e6b2f)); stem.position.y = s * 1.75; g.add(stem);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(s * 1.2, s * 0.9), new THREE.MeshBasicMaterial({ color: 0xffd36b, transparent: true, opacity: 0.9, alphaMap: faceTex(), side: THREE.DoubleSide })); face.position.set(s * 0.82, s * 0.85, s * 0.82); face.rotation.y = Math.PI / 4; g.add(face);
    g.add(warmLight(0, s * 0.9, 0, 1.5, 3.2)); g.position.set(x, 0, z); return g;
  }
  function faceTex() { if (texCache.face) return texCache.face; const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); g.fillStyle = '#000'; g.fillRect(0, 0, 64, 64); g.fillStyle = '#fff'; g.beginPath(); g.moveTo(14, 26); g.lineTo(26, 18); g.lineTo(24, 30); g.closePath(); g.fill(); g.beginPath(); g.moveTo(50, 26); g.lineTo(38, 18); g.lineTo(40, 30); g.closePath(); g.fill(); g.beginPath(); g.moveTo(16, 40); g.lineTo(48, 40); g.lineTo(42, 50); g.lineTo(36, 44); g.lineTo(30, 50); g.lineTo(22, 44); g.closePath(); g.fill(); const t = new THREE.CanvasTexture(c); return (texCache.face = t); }

  async function loadLevel(level) {
    if (V.group) { scene.remove(V.group); dispose(V.group); }
    dyn.clear(); V.boxes.clear(); V.ball = null; V.shards = []; V.confetti = []; V.found = 0; V.doorOpen = 0;
    V.level = level;
    const g = new THREE.Group(); V.group = g; scene.add(g);
    const D = level.deck, G = { x: D.x0 - 0.6, z: -0.6, sx: D.x1 - D.x0 + 1.2, sz: 4.8 };
    addBox(g, G.x, -1.1, G.z, G.sx, 0.72, G.sz, mat(C.earth), 0.03);
    addBox(g, G.x, -0.38, G.z, G.sx, 0.04, G.sz, mat(C.grass), 0);
    const tuft = mat(C.grassDark);
    for (let i = 0; i < 70; i++) { const o = new THREE.Mesh(new THREE.SphereGeometry(0.07 + rnd() * 0.06, 8, 6), tuft); o.scale.y = 0.45; o.position.set(G.x + rnd() * G.sx, -0.34, G.z + rnd() * G.sz); o.receiveShadow = true; g.add(o); }
    const n = 8, sz = 3.6; for (let i = 0; i < n; i++) addBox(g, D.x0, -0.35, i * sz / n, D.x1 - D.x0, 0.35, sz / n - 0.012, woodMat(i % 2 ? '#7d5634' : '#73502f'), 0.02);
    const wood = woodMat('#8d6238');
    for (const z of [0.1, 1.7, 3.3]) addBox(g, D.x0 + 0.1, 0, z, 0.18, 0.55, 0.18, wood);
    for (const x of [2.1, 4.1, 6.1]) if (x < D.x1) addBox(g, x, 0, 0.1, 0.18, 0.55, 0.18, wood);
    addBox(g, D.x0 + 0.1, 0.42, 0.1, 0.18, 0.1, 3.38, wood); addBox(g, D.x0 + 0.1, 0.42, 0.1, D.x1 - D.x0 - 0.22, 0.1, 0.18, wood);
    // bare trees at the back (Halloween silhouettes), pumpkins on the deck
    const bark = mat(0x241a14);
    for (const [tx, tz, th] of [[D.x0 - 0.3, -0.3, 1.9], [D.x1 - 0.8, -0.35, 2.3], [D.x1 + 0.2, 1.2, 1.6]]) { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.12, th, 7), bark); t.position.set(tx, -0.36 + th / 2, tz); t.castShadow = true; g.add(t); for (let k = 0; k < 4; k++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.05, th * 0.5, 5), bark); b.position.set(tx + (rnd() - 0.5) * 0.5, -0.36 + th * (0.6 + rnd() * 0.35), tz + (rnd() - 0.5) * 0.5); b.rotation.set((rnd() - 0.5) * 1.6, rnd() * 3, (rnd() - 0.5) * 1.6); g.add(b); } }
    g.add(makePumpkin(D.x0 + 0.55, 3.15)); g.add(makePumpkin(D.x1 - 0.5, 0.5, 0.18));
    // switch: a wooden pressure plate with a warm lamp that lights when pressed
    const sx = level.switch.x;
    addBox(g, sx - 0.45, 0, LANE - 0.45, 0.9, 0.22, 0.9, mat(C.slate, { roughness: 0.6, metalness: 0.2 }));
    const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.22, 32), mat(C.accent, { roughness: 0.4, emissive: C.accent, emissiveIntensity: 0.15 })); btn.position.set(sx, 0.33, LANE); btn.castShadow = btn.receiveShadow = true; g.add(btn); V.switchBtn = btn;
    // hut with a door; the sheep hides inside and peeks out
    const hx = level.crate.x, hz = level.crate.z, hw = 1.35, hd = 1.25, hh = 1.1, hutM = woodMat('#7a5238'), roofM = mat(0x6b3a2a, { roughness: 0.95 });
    addBox(g, hx, 0, hz, hw, hh, hd, hutM, 0.02);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.05, 0.6, 4), roofM); roof.rotation.y = Math.PI / 4; roof.position.set(hx + hw / 2, hh + 0.3, hz + hd / 2); roof.castShadow = roof.receiveShadow = true; g.add(roof);
    const dw = 0.55, dh = 0.78; const frame = new THREE.Mesh(new THREE.BoxGeometry(dw + 0.1, dh + 0.06, 0.08), mat(0x1a120e)); frame.position.set(hx + hw / 2, dh / 2 + 0.02, hz + hd + 0.02); g.add(frame);
    const door = new THREE.Group(); door.position.set(hx + hw / 2 - dw / 2, 0, hz + hd + 0.05); door.rotation.y = -0.55; /* ajar: the sheep peeks out */ const dm = new THREE.Mesh(new RoundedBoxGeometry(dw, dh, 0.06, 2, 0.01), woodMat('#6b4a2f')); dm.position.set(dw / 2, dh / 2, 0); dm.castShadow = true; door.add(dm); g.add(door); V.door = door;
    const sheep = makeSheep(); sheep.scale.setScalar(0.8); sheep.position.set(hx + hw / 2 - 0.05, 0.02, hz + hd - 0.3); sheep.rotation.y = Math.PI * 0.45; g.add(sheep); V.sheep = sheep; V.sheepHome = sheep.position.clone();
    const inside = warmLight(hx + hw / 2, 0.6, hz + hd / 2, 0, 2.2); g.add(inside); V.insideLight = inside;
    const porch = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffe2a8 })); porch.position.set(hx + hw / 2 + dw / 2 + 0.2, dh + 0.15, hz + hd + 0.08); g.add(porch); g.add(warmLight(porch.position.x, porch.position.y, porch.position.z + 0.1, 1.6, 4));
    // shepherd (thrower) stands beside the sling anchor; the thrown "stone of light" is the ball
    const s = level.sling.x;
    V.shepherd = makeShepherd(s - 0.95, LANE + 0.75); g.add(V.shepherd);
    const stem = mat(C.stem);
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.95, 24), stem); st.position.set(s, 0.475, LANE); st.castShadow = st.receiveShadow = true; g.add(st);
    const top = new THREE.Vector3(s, 0.95, LANE); V.tips = [new THREE.Vector3(s, 1.5, LANE - 0.42), new THREE.Vector3(s, 1.5, LANE + 0.42)];
    for (const t of V.tips) { const p = tubeMesh(0.09, stem); setTube(p, top, t); g.add(p); const k = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), stem); k.position.copy(t); g.add(k); }
    V.bands = V.tips.map(() => { const b = tubeMesh(0.03, mat(C.band)); g.add(b); return b; });
    V.pouch = new THREE.Mesh(new THREE.SphereGeometry(0.27, 16, 12), mat(0x4e3524)); V.pouch.scale.set(0.45, 0.85, 1.0); V.pouch.castShadow = true; g.add(V.pouch);
    // physics boxes
    for (const d of level.bodies) {
      const m = (MATS[d.mat] || MATS.stone)();
      const o = new THREE.Mesh(new RoundedBoxGeometry(d.w, d.h, DEPTH, 2, Math.min(0.035, d.w / 4)), m);
      o.position.set(d.x, d.y, LANE); o.castShadow = d.mat !== 'glass'; o.receiveShadow = true; dyn.add(o); V.boxes.set(d.id, o);
    }
    // the thrown light: a glowing stone with its own warm light
    V.ball = new THREE.Mesh(new THREE.SphereGeometry(BALL_R, 32, 24), mat(0xffd27a, { roughness: 0.4, emissive: 0xffb347, emissiveIntensity: 0.9 })); V.ball.castShadow = true; dyn.add(V.ball);
    V.ballLight = warmLight(0, 0, 0, 2.0, 5); V.ball.add(V.ballLight);
    const dotM = new THREE.MeshBasicMaterial({ color: 0xffe2a8 });
    V.dots = []; for (let i = 0; i < 18; i++) { const d = new THREE.Mesh(new THREE.SphereGeometry(0.065 - i * 0.0012, 10, 8), dotM); d.visible = false; dyn.add(d); V.dots.push(d); }
    const lc = new THREE.Vector3((level.view.x0 + level.view.x1) / 2, 0, 1.8);
    moon.position.set(-6, 12, 3.6).add(lc); moon.target.position.copy(lc);
    V.fitPts = [];
    for (const x of [level.view.x0, level.view.x1]) for (const y of [level.view.y0, level.view.y1]) for (const z of [0.2, 3.8]) V.fitPts.push(new THREE.Vector3(x, y, z));
    resize();
  }
  function dispose(g) { g.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }

  // ---------- camera: fit the level's box into the safe area ----------
  function resize() {
    const W = container.clientWidth || window.innerWidth, H = container.clientHeight || window.innerHeight; V.W = W; V.H = H;
    renderer.setSize(W, H, false);
    scene.background = makeSky(W, H); if (V.found) lightWindows(V.found);
    if (!V.level) return;
    const S0 = 40; camera.left = -W / 2 / S0; camera.right = W / 2 / S0; camera.top = H / 2 / S0; camera.bottom = -H / 2 / S0; camera.zoom = 1;
    const c = new THREE.Vector3((V.level.view.x0 + V.level.view.x1) / 2, (V.level.view.y0 + V.level.view.y1) / 2, 1.8);
    camera.position.copy(c).add(CAM_DIR.clone().multiplyScalar(30)); camera.lookAt(c); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    const bb = ndcBox(); const s = V.safe;
    const sw = (W - s.left - s.right) / W * 2, sh = (H - s.top - s.bottom) / H * 2;
    camera.zoom = Math.min(sw / (bb.x1 - bb.x0), sh / (bb.y1 - bb.y0)) * 0.98; camera.updateProjectionMatrix();
    const bb2 = ndcBox();
    const scx = (s.left - s.right) / W, scy = (s.bottom - s.top) / H;
    const dx = (bb2.x0 + bb2.x1) / 2 - scx, dy = (bb2.y0 + bb2.y1) / 2 - scy;
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion), up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion);
    camera.position.add(right.multiplyScalar(dx * (camera.right - camera.left) / 2 / camera.zoom)).add(up.multiplyScalar(dy * (camera.top - camera.bottom) / 2 / camera.zoom));
    camera.updateMatrixWorld(); V.camBase = camera.position.clone();
  }
  function ndcBox() { let x0 = 9, x1 = -9, y0 = 9, y1 = -9; for (const p of V.fitPts) { const v = p.clone().project(camera); x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y); } return { x0, x1, y0, y1 }; }
  function pxPerUnit() {
    const o = new THREE.Vector3(3, 1, LANE).project(camera), px = new THREE.Vector3(4, 1, LANE).project(camera), py = new THREE.Vector3(3, 2, LANE).project(camera);
    return { x: Math.abs(px.x - o.x) * V.W / 2, y: Math.abs(py.y - o.y) * V.H / 2 };
  }
  function setSafe(s) { V.safe = s; resize(); }

  // ---------- per-frame sync ----------
  const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();
  function sync(snap, aim, dt) {
    V.t += dt;
    for (const b of snap.bodies) { const o = V.boxes.get(b.id); if (!o) continue; o.visible = true; o.position.set(b.x, b.y, LANE); o.rotation.z = b.angle; }
    for (const [id, o] of V.boxes) if (!snap.bodies.find(b => b.id === id)) o.visible = false;
    let bp;
    if (snap.ball) { bp = tmpA.set(snap.ball.x, snap.ball.y, LANE); V.ball.visible = true; V.ball.position.copy(bp); V.ball.rotation.z = snap.ball.angle; }
    else if (aim && aim.ballPos) { bp = tmpA.set(aim.ballPos.x, aim.ballPos.y, LANE); V.ball.visible = true; V.ball.position.copy(bp); }
    else { V.ball.visible = false; bp = null; }
    V.ballLight.intensity = V.ball.visible ? 2.0 + Math.sin(V.t * 9) * 0.3 : 0;
    const rest = snap.ball ? tmpB.set(V.level.sling.x - 0.3, 0.95, LANE) : bp;
    if (rest) { V.pouch.visible = true; V.pouch.position.copy(rest).add(new THREE.Vector3(-0.14, -0.02, 0)); for (let i = 0; i < 2; i++) setTube(V.bands[i], V.tips[i], rest.clone().add(new THREE.Vector3(-0.2, 0, (V.tips[i].z - LANE) * 0.5))); V.bands.forEach(b => b.visible = true); }
    const pts = aim && aim.preview ? aim.preview : [];
    V.dots.forEach((d, i) => { if (i < pts.length) { d.visible = true; d.position.set(pts[i].x, pts[i].y, LANE); } else d.visible = false; });
    const target = snap.pressed ? 0.2 : 0.33; V.switchBtn.position.y += (target - V.switchBtn.position.y) * Math.min(1, dt * 18);
    V.switchBtn.material.emissiveIntensity += ((snap.pressed ? 1.2 : 0.15) - V.switchBtn.material.emissiveIntensity) * Math.min(1, dt * 6);
    // lantern sway + flicker
    if (V.lanternLight) V.lanternLight.intensity = 3.2 + Math.sin(V.t * 7.3) * 0.2 + Math.sin(V.t * 13.1) * 0.1;
    if (V.shepherd) V.shepherd.userData.lantern.rotation.z = Math.sin(V.t * 1.6) * 0.08;
    // sheep: hidden (peeking, slight breathing) → found (door open, hops out, warm light inside)
    if (V.sheep) {
      const s = V.sheep;
      if (V.doorOpen > 0) {
        V.door.rotation.y += (-2.3 - V.door.rotation.y) * Math.min(1, dt * 5);
        V.insideLight.intensity += (1.8 - V.insideLight.intensity) * Math.min(1, dt * 3);
        s.userData.light.intensity += (1.6 - s.userData.light.intensity) * Math.min(1, dt * 3);
        V.hop = (V.hop || 0) + dt;
        const k = Math.min(1, V.hop / 1.2);
        s.position.z = V.sheepHome.z + k * 1.25; s.position.x = V.sheepHome.x + k * 0.55; s.position.y = 0.02 + Math.abs(Math.sin(V.hop * 9)) * (k < 1 ? 0.16 : 0.03);
        s.rotation.y = Math.PI * 0.45 - k * 0.7;
      } else { s.position.y = 0.02 + Math.sin(V.t * 2.2) * 0.01; s.userData.head.rotation.y = Math.sin(V.t * 0.9) * 0.25; }
    }
    for (const sh of V.shards) { sh.vy -= 14 * dt; sh.m.position.x += sh.vx * dt; sh.m.position.y += sh.vy * dt; sh.m.position.z += sh.vz * dt; sh.m.rotation.x += sh.rx * dt; sh.m.rotation.z += sh.rz * dt; sh.t -= dt; sh.m.material.opacity = Math.max(0, Math.min(0.6, sh.t)); if (sh.t <= 0 || sh.m.position.y < -2) { dyn.remove(sh.m); sh.dead = true; } }
    V.shards = V.shards.filter(s => !s.dead);
    for (const s of V.confetti) { s.vy -= 2.5 * dt; s.vx *= 0.995; s.m.position.x += s.vx * dt; s.m.position.y += s.vy * dt; s.m.rotation.x += s.rx * dt; s.m.rotation.y += s.rz * dt; s.t -= dt; s.m.material.opacity = Math.min(1, s.t); if (s.t <= 0 || s.m.position.y < -1.5) { dyn.remove(s.m); s.dead = true; } }
    V.confetti = V.confetti.filter(s => !s.dead);
    if (V.shake > 0) { V.shake -= dt; const k = Math.max(0, V.shake) * 0.5; camera.position.copy(V.camBase).add(new THREE.Vector3((rnd() - 0.5) * k, (rnd() - 0.5) * k, 0)); } else if (V.camBase) camera.position.copy(V.camBase);
  }

  // ---------- effects ----------
  function breakGlass(e) {
    const o = V.boxes.get(e.id); if (o) o.visible = false;
    const m = new THREE.MeshPhysicalMaterial({ color: C.glass, transparent: true, opacity: 0.6, roughness: 0.1, clearcoat: 1 });
    for (let i = 0; i < 12; i++) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.12 + rnd() * 0.18, 0.05, 0.12 + rnd() * 0.18), m.clone());
      s.position.set(e.x + (rnd() - 0.5) * e.w, e.y + (rnd() - 0.5) * e.h, LANE + (rnd() - 0.5) * DEPTH);
      dyn.add(s); V.shards.push({ m: s, vx: (rnd() - 0.5) * 4, vy: 1 + rnd() * 3, vz: (rnd() - 0.5) * 2, rx: (rnd() - 0.5) * 12, rz: (rnd() - 0.5) * 12, t: 0.9 + rnd() * 0.4 });
    }
    V.shake = Math.max(V.shake, 0.18);
  }
  function hitShake(strength) { V.shake = Math.max(V.shake, Math.min(0.25, strength * 0.05)); }
  function openDoor() { V.doorOpen = 1; V.hop = 0; }
  function found(frac = 1) { V.found = frac; lightWindows(frac); // fireflies / warm sparks rising around the hut
    const cx = V.level.crate.x + 0.7, cz = V.level.crate.z + 1.4;
    for (let i = 0; i < 40; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(0.035 + rnd() * 0.03, 6, 5), new THREE.MeshBasicMaterial({ color: i % 3 ? 0xffd27a : 0xffffff, transparent: true })); s.position.set(cx + (rnd() - 0.5) * 2, 0.2 + rnd() * 0.6, cz + (rnd() - 0.5) * 1.5); dyn.add(s); V.confetti.push({ m: s, vx: (rnd() - 0.5) * 0.6, vy: 0.8 + rnd() * 1.2, rx: 0, rz: 0, t: 2.5 + rnd() * 1.5 }); } }
  function deepen(k) { hemi.intensity = Math.max(0.3, 0.55 - k * 0.06); moon.intensity = Math.max(0.6, 0.9 - k * 0.08); } // the night deepens a little after each miss
  function resetEffects() { V.doorOpen = 0; V.hop = 0; if (V.door) V.door.rotation.y = -0.55; if (V.sheep) { V.sheep.position.copy(V.sheepHome); V.sheep.rotation.y = Math.PI * 0.45; } if (V.insideLight) V.insideLight.intensity = 0; if (V.sheep) V.sheep.userData.light.intensity = 0; for (const s of V.shards) dyn.remove(s.m); for (const s of V.confetti) dyn.remove(s.m); V.shards = []; V.confetti = []; V.boxes.forEach(o => o.visible = true); deepen(0); V.found = 0; }

  function render() { renderer.render(scene, camera); }
  window.addEventListener('resize', resize);
  return { loadLevel, sync, render, resize, setSafe, pxPerUnit, breakGlass, hitShake, openDoor, found, deepen, resetEffects, canvas: renderer.domElement, get size() { return { W: V.W, H: V.H }; } };
}
