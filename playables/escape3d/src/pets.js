// Escape 3D — turn the CC0 Quaternius cartoon animals into "our" pets.
// The models share one palette atlas, so we recolour per vertex: sample the atlas at each vertex UV, map the original
// palette colour to a new one (by brightness class), and write vertex colours. Then extra blocky parts are parented to
// bones (fur tufts, floppy ears, harness) so they animate with the body.
import * as THREE from 'three';

function atlasPixels(tex) {
  const img = tex.image; const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
  const g = c.getContext('2d'); g.drawImage(img, 0, 0); return { data: g.getImageData(0, 0, c.width, c.height).data, w: c.width, h: c.height };
}
const lum = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

// repaint the palette atlas: every texel goes through map([r,g,b]) → [r,g,b] (the UVs keep pointing at the same cells)
function recolour(root, map) {
  const done = new Map();
  root.traverse((m) => {
    if (!m.isMesh || !m.material || !m.material.map) return;
    const old = m.material.map;
    if (!done.has(old)) {
      const img = old.image; const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
      const g = c.getContext('2d'); g.drawImage(img, 0, 0); const id = g.getImageData(0, 0, c.width, c.height); const d = id.data;
      for (let i = 0; i < d.length; i += 4) { const o = map([d[i], d[i + 1], d[i + 2]]); d[i] = o[0]; d[i + 1] = o[1]; d[i + 2] = o[2]; }
      g.putImageData(id, 0, 0);
      const t = new THREE.CanvasTexture(c); t.flipY = old.flipY; t.colorSpace = THREE.SRGBColorSpace; t.magFilter = old.magFilter; t.minFilter = old.minFilter;
      done.set(old, new THREE.MeshStandardMaterial({ map: t, roughness: 0.85, metalness: 0 }));
    }
    m.material = done.get(old); m.castShadow = true;
  });
}
const near = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]) < 12;
const grey = (r, g, b) => Math.abs(r - g) < 14 && Math.abs(g - b) < 14;
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16)); // sRGB bytes, written straight into the sRGB canvas
const C = (hex) => new THREE.Color(hex);

// bounds of the vertices that belong (mostly) to one bone, in mesh space at bind pose
function boneVerts(root, boneName) {
  const out = []; root.traverse((m) => {
    if (!m.isSkinnedMesh) return; const g = m.geometry, si = g.attributes.skinIndex, sw = g.attributes.skinWeight, pos = g.attributes.position;
    const bi = m.skeleton.bones.findIndex((b) => b.name === boneName); if (bi < 0) return;
    for (let i = 0; i < pos.count; i++) { let best = 0, b = -1; for (let j = 0; j < 4; j++) { const w = sw.getComponent(i, j); if (w > best) { best = w; b = si.getComponent(i, j); } } if (b === bi) out.push({ m, i }); }
  }); return out;
}

// add a box to a bone, given its centre/size in the model's bind-pose world space
function addToBone(bone, mesh, worldCentre) {
  bone.updateWorldMatrix(true, false);
  const inv = bone.matrixWorld.clone().invert();
  mesh.position.copy(worldCentre).applyMatrix4(inv);
  // undo the bone's world rotation/scale so boxes stay axis-aligned to the model at bind pose
  const q = new THREE.Quaternion(), s = new THREE.Vector3(), t = new THREE.Vector3(); bone.matrixWorld.decompose(t, q, s);
  mesh.quaternion.copy(q).invert(); mesh.scale.set(1 / s.x, 1 / s.y, 1 / s.z);
  bone.add(mesh);
}

// world-space (model root) bounding box of a bone's vertices at bind pose
function boneBox(root, boneName) {
  root.updateMatrixWorld(true);
  const box = new THREE.Box3(); const v = new THREE.Vector3();
  for (const { m, i } of boneVerts(root, boneName)) { v.fromBufferAttribute(m.geometry.attributes.position, i); m.applyBoneTransform(i, v); v.applyMatrix4(m.matrixWorld); box.expandByPoint(v); }
  return box;
}

export function dressDog(gltf) {
  const root = gltf.scene;
  const NOSE = hex('#2a1a12'), APRICOT = hex('#d8a46a'), FACE = hex('#efd9b6');
  // the cartoon wolf's palette cells (as decoded): body 122 grey, light 159 grey, eyes/nose (69,67,59)
  recolour(root, ([r, g, b]) => {
    if (near([r, g, b], [122, 122, 122])) return APRICOT;
    if (near([r, g, b], [159, 159, 159])) return FACE;
    if (near([r, g, b], [69, 67, 59])) return NOSE;
    return [r, g, b];
  });
  const rnd = (() => { let x = 7; return () => ((x = (x * 1664525 + 1013904223) >>> 0) / 4294967296); })();
  const box = (w, h, d, mat) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); m.castShadow = true; return m; };
  const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.95 });
  const furL = mat('#f1dcb8'), furM = mat('#e2bd8a'), furD = mat('#c99158');
  const mb = new THREE.Box3().setFromObject(root), ms = mb.getSize(new THREE.Vector3());
  const zFwd = ms.z >= ms.x; // the cartoon animals face +z
  const head = root.getObjectByName('Head');
  const hb = boneBox(root, 'Head'), hs = hb.getSize(new THREE.Vector3());
  const P = (fx, fy, fz) => new THREE.Vector3(hb.min.x + hs.x * fx, hb.min.y + hs.y * fy, zFwd ? hb.min.z + hs.z * fz : 0);
  const S = Math.min(hs.x, hs.y);
  // scruffy crown: overlapping small tufts on the top and back of the head (hides the pointy ears)
  for (let i = 0; i < 14; i++) {
    const t = box(S * (0.22 + rnd() * 0.16), S * (0.16 + rnd() * 0.18), S * (0.22 + rnd() * 0.16), rnd() < 0.55 ? furL : furM);
    t.rotation.set((rnd() - 0.5) * 0.5, rnd() * 1.2, (rnd() - 0.5) * 0.5);
    addToBone(head, t, P(0.12 + rnd() * 0.76, 0.86 + rnd() * 0.16, 0.05 + rnd() * 0.5));
  }
  // fringe hanging over the brow (above the eyes)
  for (let i = 0; i < 6; i++) {
    const t = box(S * (0.14 + rnd() * 0.08), S * (0.2 + rnd() * 0.12), S * 0.12, rnd() < 0.5 ? furL : furM);
    t.rotation.z = (rnd() - 0.5) * 0.6;
    addToBone(head, t, P(0.18 + i * 0.13, 0.78, 0.62));
  }
  // beard + moustache around the snout
  for (let i = 0; i < 5; i++) {
    const t = box(S * (0.11 + rnd() * 0.05), S * (0.14 + rnd() * 0.08), S * 0.1, furL);
    t.rotation.z = (rnd() - 0.5) * 0.5;
    addToBone(head, t, P(0.3 + i * 0.1, 0.14, 0.86));
  }
  // floppy ears hanging down the sides
  for (const s of [0, 1]) {
    const e = box(S * 0.14, S * 0.62, S * 0.36, furD);
    e.rotation.z = (s ? -1 : 1) * 0.12;
    addToBone(head, e, P(s ? 1.02 : -0.02, 0.52, 0.32));
  }
  // orange harness around the chest + black strap
  const body = root.getObjectByName('Body');
  const bb = boneBox(root, 'Body'), bs = bb.getSize(new THREE.Vector3()), bc = bb.getCenter(new THREE.Vector3());
  const orange = mat('#f2781e'), black = mat('#1d1d1f');
  const chestZ = zFwd ? bb.min.z + bs.z * 0.72 : bc.z;
  const band = box(bs.x * 1.08, bs.y * 1.06, bs.z * 0.2, orange); addToBone(body, band, new THREE.Vector3(bc.x, bc.y + bs.y * 0.02, chestZ));
  const strap = box(bs.x * 1.1, bs.y * 0.18, bs.z * 0.22, black); addToBone(body, strap, new THREE.Vector3(bc.x, bb.max.y + bs.y * 0.0, chestZ));
  const tab = box(bs.x * 0.1, bs.y * 0.12, bs.z * 0.08, mat('#c8102e')); addToBone(body, tab, new THREE.Vector3(bc.x, bb.max.y + bs.y * 0.1, chestZ));
  return { root };
}

export function dressCat(gltf) {
  const root = gltf.scene;
  const ORANGE = hex('#d9843a'), ORANGE_D = hex('#b8642a'), CREAM = hex('#f2d8b4'), DARK = hex('#2a1a12');
  // the cartoon cat's cells: coat (104,111,109), light 159 grey, nose pink (207,130,130), eyes (52,52,52)
  recolour(root, ([r, g, b]) => {
    if (near([r, g, b], [104, 111, 109])) return ORANGE;
    if (near([r, g, b], [159, 159, 159])) return CREAM;
    if (near([r, g, b], [52, 52, 52])) return DARK;
    return [r, g, b];
  });
  return { root };
}
