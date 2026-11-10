// Escape 3D — hero: CC0 animated model (Kenney Mini Characters) + a kinematic capsule controller.
// Controller: fixed 120 Hz steps, horizontal move then circle-vs-box push-out, vertical move then land/bump.
import * as THREE from 'three';

export const R = 0.3;        // capsule radius
export const H = 1.05;       // capsule height
const SPEED = 6.0, ACC_G = 55, ACC_A = 22, GRAV = 28, JUMP_V = 10.2, COYOTE = 0.1, BUFFER = 0.14, MAX_FALL = 30;

// A rig = one dressed model + how its clips map to our moves. All rigs share the same collider (fair play).
export const RIGS = {
  dog: { file: 'dog.glb', height: 0.95, clips: { idle: 'Idle', walk: 'Walk', sprint: 'Run', jump: 'Jump_Start', fall: 'Jump_Loop' }, runRate: 1.0 },
  cat: { file: 'cat.glb', height: 0.85, clips: { idle: 'Idle', walk: 'Walk', sprint: 'Run', jump: 'Jump_Start', fall: 'Jump_Loop' }, runRate: 1.0 },
  kid: { file: 'hero.glb', height: 1.15, clips: { idle: 'idle', walk: 'walk', sprint: 'sprint', jump: 'jump', fall: 'fall', cheer: 'emote-yes' }, runRate: 1.15 },
};

export function createPlayer(scene) {
  const root = new THREE.Group(); scene.add(root);
  const pivot = new THREE.Group(); root.add(pivot);
  let mixer = null, act = {}, cur = null, rig = null, model = null, cheerT = -1;
  function play(name, fade = 0.12) {
    const a = act[name]; if (!a || cur === a) return;
    a.reset(); a.enabled = true; a.setEffectiveWeight(1); a.play();
    if (cur) cur.crossFadeTo(a, fade, false);
    cur = a; P.anim = name;
  }

  const P = {
    root, pivot, anim: '', rigName: '',
    pos: new THREE.Vector3(), vel: new THREE.Vector3(), grounded: null, groundTime: 0, airTime: 0,
    jumpBuf: 0, coyote: 0, facing: Math.PI, squash: 0, lastFallSpeed: 0, landed: false, jumped: false, frozen: false,
  };
  // swap the body (keeps position/velocity)
  P.setRig = (name, gltf) => {
    if (model) pivot.remove(model);
    rig = RIGS[name]; P.rigName = name; model = gltf.scene;
    model.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; o.frustumCulled = false; if (o.material && !o.material.vertexColors) { o.material.metalness = 0; o.material.roughness = Math.max(0.8, o.material.roughness || 0); } } });
    model.position.set(0, 0, 0); model.scale.setScalar(1); model.updateMatrixWorld(true);
    const bb = new THREE.Box3().setFromObject(model); const h = bb.max.y - bb.min.y;
    const scale = rig.height / h; model.scale.setScalar(scale); model.position.y = -bb.min.y * scale; model.rotation.y = rig.yaw || 0;
    pivot.add(model);
    mixer = new THREE.AnimationMixer(model); act = {}; cur = null; cheerT = -1;
    for (const [k, clipName] of Object.entries(rig.clips)) {
      const clip = gltf.animations.find((a) => a.name === clipName || a.name.endsWith('|' + clipName)); if (clip) act[k] = mixer.clipAction(clip);
    }
    if (act.jump) { act.jump.setLoop(THREE.LoopOnce, 1); act.jump.clampWhenFinished = true; }
    play('idle', 0);
  };
  P.reset = (p) => { if (mixer) mixer.stopAllAction(); cur = null; cheerT = -1; P.pos.copy(p); P.vel.set(0, 0, 0); P.grounded = null; P.facing = Math.PI; P.squash = 0; P.jumpBuf = 0; P.frozen = false; pivot.position.y = 0; play('idle', 0); };

  const _c = new THREE.Vector3();
  function pushOut(solids) {
    for (const b of solids) {
      if (P.pos.y + 0.05 >= b.max.y || P.pos.y + H <= b.min.y) continue;
      const cx = Math.max(b.min.x, Math.min(P.pos.x, b.max.x));
      const cz = Math.max(b.min.z, Math.min(P.pos.z, b.max.z));
      let dx = P.pos.x - cx, dz = P.pos.z - cz; const d2 = dx * dx + dz * dz;
      if (d2 >= R * R) continue;
      if (d2 > 1e-8) { const d = Math.sqrt(d2), k = (R - d) / d; P.pos.x += dx * k; P.pos.z += dz * k; }
      else { // centre inside the box: leave along the shortest axis
        const opts = [[b.min.x - R - P.pos.x, 0], [b.max.x + R - P.pos.x, 0], [0, b.min.z - R - P.pos.z], [0, b.max.z + R - P.pos.z]];
        opts.sort((a, c) => Math.abs(a[0] + a[1]) - Math.abs(c[0] + c[1]));
        P.pos.x += opts[0][0]; P.pos.z += opts[0][1];
      }
    }
  }
  function overlapsXZ(b, r) {
    const cx = Math.max(b.min.x, Math.min(P.pos.x, b.max.x)), cz = Math.max(b.min.z, Math.min(P.pos.z, b.max.z));
    const dx = P.pos.x - cx, dz = P.pos.z - cz; return dx * dx + dz * dz < r * r;
  }

  // one fixed step. input: {x, z} in world space (|v| ≤ 1), jumpPressed (edge), jumpHeld
  P.step = (dt, input, solids) => {
    P.landed = false; P.jumped = false;
    if (P.frozen) return;
    // ride the platform we stand on
    if (P.grounded && P.grounded.mover) P.pos.add(P.grounded.delta);
    // horizontal velocity toward the stick
    const acc = P.grounded ? ACC_G : ACC_A;
    const tx = input.x * SPEED, tz = input.z * SPEED;
    const k = Math.min(1, acc * dt / Math.max(0.001, Math.hypot(tx - P.vel.x, tz - P.vel.z)));
    P.vel.x += (tx - P.vel.x) * k; P.vel.z += (tz - P.vel.z) * k;
    // jump: buffered press + coyote time; short hop on early release
    if (input.jumpPressed) P.jumpBuf = BUFFER; else P.jumpBuf = Math.max(0, P.jumpBuf - dt);
    P.coyote = P.grounded ? COYOTE : Math.max(0, P.coyote - dt);
    if (P.jumpBuf > 0 && P.coyote > 0) {
      P.vel.y = JUMP_V; P.grounded = null; P.coyote = 0; P.jumpBuf = 0; P.jumped = true; P.squash = -0.18;
    }
    if (!input.jumpHeld && P.vel.y > 3.5) P.vel.y -= GRAV * 1.6 * dt; // variable height
    P.vel.y = Math.max(-MAX_FALL, P.vel.y - GRAV * dt);

    P.pos.x += P.vel.x * dt; P.pos.z += P.vel.z * dt;
    pushOut(solids);
    const prevY = P.pos.y;
    P.pos.y += P.vel.y * dt;
    let ground = null;
    for (const b of solids) {
      if (!overlapsXZ(b, R * 0.8)) continue;
      const tol = 0.02 + (b.mover ? Math.abs(b.delta.y) : 0);
      if (P.vel.y <= 0 && prevY >= b.top - tol - 0.001 && P.pos.y <= b.top + 0.001) {
        if (!ground || b.top > ground.top) ground = b;
      } else if (P.vel.y > 0 && prevY + H <= b.min.y + 0.001 && P.pos.y + H > b.min.y) {
        P.pos.y = b.min.y - H; P.vel.y = 0; // head bump
      }
    }
    if (ground) {
      if (!P.grounded) { P.landed = true; P.lastFallSpeed = -P.vel.y; if (P.lastFallSpeed > 6) P.squash = Math.min(0.28, P.lastFallSpeed * 0.018); }
      P.pos.y = ground.top; P.vel.y = 0; P.grounded = ground;
    } else if (P.grounded) {
      // walked off an edge? keep ground only if still over it
      if (!overlapsXZ(P.grounded, R * 0.8) || P.pos.y > P.grounded.top + 0.01) P.grounded = null;
      else { P.pos.y = P.grounded.top; P.vel.y = 0; }
    }
    if (P.grounded) { P.groundTime += dt; P.airTime = 0; } else { P.airTime += dt; P.groundTime = 0; }
  };

  // visuals each frame
  P.render = (dt) => {
    P.root.position.copy(P.pos);
    const hs = Math.hypot(P.vel.x, P.vel.z);
    if (hs > 0.4 && !P.frozen) {
      const target = Math.atan2(P.vel.x, P.vel.z);
      let d = target - P.facing; d = Math.atan2(Math.sin(d), Math.cos(d));
      P.facing += d * Math.min(1, dt * 14);
    }
    P.pivot.rotation.y = P.facing;
    // squash & stretch (land / take-off), springs back
    P.squash += (0 - P.squash) * Math.min(1, dt * 12);
    P.pivot.scale.set(1 + P.squash * 0.6, 1 - P.squash, 1 + P.squash * 0.6);
    if (!P.frozen && cheerT < 0) {
      if (!P.grounded) {
        if (P.vel.y > 0.5 && P.airTime < 0.5) play('jump', 0.05); else if (P.airTime > 0.12) play('fall', 0.2);
      } else if (hs > 3.2) { play('sprint', 0.12); if (act.sprint) act.sprint.timeScale = hs / SPEED * rig.runRate; }
      else if (hs > 0.5) { play('walk', 0.12); if (act.walk) act.walk.timeScale = 0.8 + hs / 3; }
      else play('idle', 0.2);
    }
    // victory: the clip if the rig has one, otherwise happy hops with a little spin
    if (cheerT >= 0) {
      cheerT += dt;
      if (!act.cheer) { const k = (cheerT * 2.6) % 1; pivot.position.y = Math.sin(k * Math.PI) * 0.32; pivot.rotation.y = P.facing + Math.sin(cheerT * 5) * 0.35; }
    }
    if (mixer) mixer.update(dt);
  };
  P.cheer = () => { mixer.stopAllAction(); cur = null; cheerT = 0; if (act.cheer) play('cheer', 0); else play('idle', 0); P.anim = 'cheer'; };
  P.SPEED = SPEED;
  return P;
}
