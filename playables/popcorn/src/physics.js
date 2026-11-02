// Pop & Topple — physics (Planck.js = Box2D port, MIT). No renderer, no DOM, no random numbers: the solver and the
// robot run this very file in node, and the same pull always ends the same way (fixed 1/120 s step).
import * as planck from 'planck';
import { LEVELS, MATS, DT, GRAVITY, SEED_R, POP_R, POP_STEPS, POP_MASS, POP_IMPULSE, CORN_LIFE, FUSE, MAX_PULL, PULL_K, SLING, WORLD, FLOOR_DOWN } from './levels.js';

const { Vec2, Box, Circle, World } = planck;

export class Sim {
  constructor(levelIndex) {
    this.levelIndex = levelIndex;
    this.level = LEVELS[levelIndex];
    this.world = new World({ gravity: new Vec2(0, GRAVITY) });
    this.bodies = new Map();   // id → body
    this.meta = new Map();     // body → {id, kind, mat, w, h, target, down}
    this.events = [];          // drained by the game each frame (sounds, particles)
    this.seedsLeft = this.level.seeds;
    this.targetsLeft = this.level.bodies.filter((b) => b.target).length;
    this.corns = [];           // popped kernels still in the world
    this.seed = null;          // the kernel in flight (or fusing)
    this.phase = 'aim';        // aim | flying | fuse | settling | won | lost
    this.time = 0; this.shotAt = 0; this.touchedAt = -1; this.restT = 0; this.fuseT = 0; this.settleT = 0;
    this.popsDone = 0; this.shots = 0;
    this.build();
    this.world.on('begin-contact', (c) => this.onContact(c));
    this.world.on('post-solve', (c, imp) => this.onPostSolve(c, imp));
  }

  box(id, kind, mat, x, y, w, h, isStatic, extra = {}) {
    const m = MATS[mat];
    const b = this.world.createBody({ type: isStatic ? 'static' : 'dynamic', position: new Vec2(x, y), linearDamping: 0.03, angularDamping: 0.08 });
    if (w > 0 && h > 0) b.createFixture(new Box(w / 2, h / 2), { density: extra.density ?? m.density, friction: m.friction, restitution: m.restitution });
    const meta = { id, kind, mat, w, h, x0: x, y0: y, ...extra };
    this.bodies.set(id, b); this.meta.set(b, meta);
    return b;
  }

  build() {
    const g = MATS.static;
    const floor = this.world.createBody({ type: 'static', position: new Vec2((WORLD.x0 + WORLD.x1) / 2, -0.5) });
    floor.createFixture(new Box((WORLD.x1 - WORLD.x0) / 2 + 2, 0.5), { friction: g.friction, restitution: g.restitution });
    this.meta.set(floor, { id: 'floor', kind: 'floor', mat: 'static' });
    for (const x of [WORLD.x0, WORLD.x1]) {
      const wall = this.world.createBody({ type: 'static', position: new Vec2(x, 4) });
      wall.createFixture(new Box(0.1, 5), { friction: 0.3, restitution: 0.1 });
      this.meta.set(wall, { id: 'wall', kind: 'wall', mat: 'static' });
    }
    for (const d of this.level.bodies) this.box(d.id, d.kind, d.mat, d.x, d.y, d.w, d.h, !!d.static, { target: !!d.target, down: false, density: d.density });
  }

  onContact(c) {
    const a = c.getFixtureA().getBody(), b = c.getFixtureB().getBody();
    for (const [s, o] of [[a, b], [b, a]]) {
      const ms = this.meta.get(s), mo = this.meta.get(o);
      if (ms?.kind === 'seed' && mo && mo.kind !== 'wall' && this.touchedAt < 0) this.touchedAt = this.time;
    }
  }

  onPostSolve(c, imp) {
    const strength = Math.max(...imp.normalImpulses, 0);
    if (strength < 0.12) return;
    const a = c.getFixtureA().getBody(), b = c.getFixtureB().getBody();
    const ma = this.meta.get(a), mb = this.meta.get(b);
    const p = c.getWorldManifold(null).points[0] || a.getPosition();
    this.events.push({ type: 'hit', t: this.time, strength, kinds: [ma?.kind, mb?.kind], x: p.x, y: p.y });
  }

  // ---- the kernel ----
  pouch(dx, dy) { // where the kernel sits while being pulled (dx,dy = pull vector, metres)
    const len = Math.hypot(dx, dy); const k = len > MAX_PULL ? MAX_PULL / len : 1;
    return { x: SLING.x - dx * k, y: SLING.y - dy * k, k, len: len * k };
  }
  shoot(dx, dy) { // pull vector in metres: the kernel flies the opposite way
    const p = this.pouch(dx, dy);
    if (this.phase !== 'aim' || this.seed || this.seedsLeft <= 0 || p.len < 0.001) return false;
    dx *= p.k; dy *= p.k;
    const m = MATS.seed;
    const b = this.world.createBody({ type: 'dynamic', position: new Vec2(p.x, p.y), bullet: true, linearDamping: 0.01, angularDamping: 0.3 });
    b.createFixture(new Circle(SEED_R), { density: m.density, friction: m.friction, restitution: m.restitution });
    b.setLinearVelocity(new Vec2(dx * PULL_K, dy * PULL_K));
    this.seed = b; this.meta.set(b, { id: 'seed', kind: 'seed', mat: 'seed', r: SEED_R, fuse: 0 });
    this.seedsLeft--; this.shots++;
    this.phase = 'flying'; this.shotAt = this.time; this.touchedAt = -1; this.restT = 0;
    this.events.push({ type: 'shoot', t: this.time });
    return true;
  }
  // gravity-only preview of the first part of the flight (the dotted line)
  preview(dx, dy, n = 14, dt = 0.055) {
    const p = this.pouch(dx, dy); dx *= p.k; dy *= p.k;
    const out = [];
    for (let i = 1; i <= n; i++) { const t = i * dt; out.push({ x: p.x + dx * PULL_K * t, y: p.y + dy * PULL_K * t + 0.5 * GRAVITY * t * t }); }
    return out;
  }

  // ---- popping ----
  startFuse() { this.phase = 'fuse'; this.fuseT = 0; this.events.push({ type: 'fuse', t: this.time, x: this.seed.getPosition().x, y: this.seed.getPosition().y }); }
  pop() {
    const b = this.seed; const m = this.meta.get(b);
    const c = b.getPosition();
    // shove everything the corn will touch: impulse away from the centre, applied at the nearest point (so tall things tip)
    const shoved = [];
    for (let o = this.world.getBodyList(); o; o = o.getNext()) {
      if (o === b || !o.isDynamic()) continue;
      const mo = this.meta.get(o); if (!mo) continue;
      const q = o.getPosition();
      // nearest point of the (unrotated-ish) box to the pop centre, in world space
      const lp = o.getLocalPoint(c);
      const cx = Math.max(-mo.w / 2, Math.min(mo.w / 2, lp.x)), cy = Math.max(-mo.h / 2, Math.min(mo.h / 2, lp.y));
      const wp = o.getWorldPoint(new Vec2(cx, cy));
      const d = Math.hypot(wp.x - c.x, wp.y - c.y);
      if (d > POP_R + 0.12) continue;
      let nx = wp.x - c.x, ny = wp.y - c.y; const nl = Math.hypot(nx, ny);
      if (nl < 1e-4) { nx = q.x - c.x; ny = q.y - c.y; } const nn = Math.hypot(nx, ny) || 1; nx /= nn; ny /= nn;
      const f = POP_IMPULSE * (1 - d / (POP_R + 0.12)) * Math.min(o.getMass(), 1.2);
      o.applyLinearImpulse(new Vec2(nx * f, ny * f), wp, true);
      shoved.push(mo.id);
    }
    b.setBullet(false); b.setLinearVelocity(new Vec2(0, 0)); b.setAngularVelocity(0);
    m.kind = 'corn'; m.id = 'corn' + this.popsDone; m.r = SEED_R; m.grow = 0; m.popAt = this.time;
    this.corns.push(b); this.seed = null; this.popsDone++;
    this.phase = 'settling'; this.settleT = 0;
    this.events.push({ type: 'pop', t: this.time, x: c.x, y: c.y, shoved });
  }
  grow(b, m) { // radius ramp, mass kept constant
    m.grow++;
    const r = SEED_R + (POP_R - SEED_R) * Math.min(1, m.grow / POP_STEPS);
    for (let f = b.getFixtureList(); f; f = f.getNext()) b.destroyFixture(f);
    b.createFixture(new Circle(r), { density: POP_MASS / (Math.PI * r * r), friction: MATS.corn.friction, restitution: MATS.corn.restitution });
    m.r = r;
  }

  // ---- rules ----
  maxSpeed() {
    let v = 0;
    for (let o = this.world.getBodyList(); o; o = o.getNext()) if (o.isDynamic() && o.isAwake()) v = Math.max(v, o.getLinearVelocity().length() + Math.abs(o.getAngularVelocity()) * 0.6);
    return v;
  }
  checkTargets() {
    for (const [b, m] of this.meta) {
      if (!m.target || m.down) continue;
      const p = b.getPosition(), a = b.getAngle();
      const half = Math.abs(Math.cos(a)) * m.h / 2 + Math.abs(Math.sin(a)) * m.w / 2;
      if (p.y - half < FLOOR_DOWN || p.y < -0.3 || p.x < WORLD.x0 || p.x > WORLD.x1) {
        m.down = true; this.targetsLeft--;
        this.events.push({ type: 'down', t: this.time, id: m.id, x: p.x, y: p.y, left: this.targetsLeft });
      }
    }
  }

  step() {
    this.world.step(DT, 8, 3);
    this.time += DT;
    for (const b of this.corns) { const m = this.meta.get(b); if (m.grow < POP_STEPS) this.grow(b, m); m.age = this.time - m.popAt; }
    const gone = this.corns.filter((b) => this.meta.get(b).age >= CORN_LIFE);
    if (gone.length) { this.corns = this.corns.filter((b) => !gone.includes(b)); for (const b of gone) { this.meta.delete(b); this.world.destroyBody(b); } this.events.push({ type: 'corn-gone', t: this.time }); }
    if (this.seed) {
      const p = this.seed.getPosition(), v = this.seed.getLinearVelocity();
      if (p.y < -0.3 || p.x < WORLD.x0 - 0.5 || p.x > WORLD.x1 + 0.5) { // lost
        this.meta.delete(this.seed); this.world.destroyBody(this.seed); this.seed = null;
        this.phase = 'settling'; this.settleT = 0; this.events.push({ type: 'lost', t: this.time });
      } else if (this.phase === 'flying') {
        const slow = v.length() < 0.5;
        this.restT = slow ? this.restT + DT : 0;
        const since = this.touchedAt >= 0 ? this.time - this.touchedAt : -1;
        if ((this.touchedAt >= 0 && this.restT >= 0.12) || since > 1.4 || this.time - this.shotAt > 4) this.startFuse();
      } else if (this.phase === 'fuse') {
        this.fuseT += DT; this.meta.get(this.seed).fuse = this.fuseT / FUSE;
        if (this.fuseT >= FUSE) this.pop();
      }
    }
    this.checkTargets();
    if (this.targetsLeft <= 0 && this.phase !== 'won') { this.phase = 'won'; this.events.push({ type: 'won', t: this.time }); }
    if (this.phase === 'settling') {
      const calm = this.maxSpeed() < 0.06;
      this.settleT = calm ? this.settleT + DT : 0;
      if (this.settleT >= 0.5 || this.time - this.shotAt > 9) {
        if (this.seedsLeft > 0) { this.phase = 'aim'; this.events.push({ type: 'ready', t: this.time, left: this.seedsLeft }); }
        else { this.phase = 'lost'; this.events.push({ type: 'lost-level', t: this.time }); }
      }
    }
  }
  run(seconds) { const n = Math.round(seconds / DT); for (let i = 0; i < n; i++) this.step(); }
  // run until the shot is resolved (aim again, won or lost), with a safety cap
  resolve(maxSeconds = 12) { const n = Math.round(maxSeconds / DT); for (let i = 0; i < n && !['aim', 'won', 'lost'].includes(this.phase); i++) this.step(); return this.phase; }

  // fingerprint of every dynamic body (determinism test)
  hash() {
    let h = 2166136261;
    const mix = (v) => { const s = Math.round(v * 1000) | 0; h ^= s; h = Math.imul(h, 16777619) >>> 0; };
    for (let o = this.world.getBodyList(); o; o = o.getNext()) { if (!o.isDynamic()) continue; const p = o.getPosition(); mix(p.x); mix(p.y); mix(o.getAngle()); }
    return h.toString(16);
  }
  // snapshot for the renderer
  snapshot() {
    const out = [];
    for (let o = this.world.getBodyList(); o; o = o.getNext()) {
      const m = this.meta.get(o); if (!m || m.kind === 'floor' || m.kind === 'wall') continue;
      const p = o.getPosition();
      out.push({ ...m, x: p.x, y: p.y, angle: o.getAngle(), awake: o.isAwake(), body: o });
    }
    return out;
  }
}
