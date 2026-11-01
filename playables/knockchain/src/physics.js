// Knock Chain — physics (Planck.js, Box2D port, MIT). Renderer-independent so the solver and the robot can run it
// in node. Fixed timestep, no random numbers → the same shot always ends the same way.
import * as planck from 'planck';
import { MATS, BALL_R, GRAVITY, DT, SWITCH_MIN_MASS, MAX_PULL, PULL_K } from './levels.js';

const { Vec2, Box, Circle, World, RevoluteJoint } = planck;

export class Sim {
  constructor(level) {
    this.level = level;
    this.world = new World({ gravity: new Vec2(0, GRAVITY) });
    this.bodies = new Map();        // id → planck body
    this.meta = new Map();          // body → {id, mat, w, h, kind}
    this.events = [];               // drained by the game each frame
    this.pressed = false;
    this.ball = null; this.ballsLeft = level.balls; this.restTimer = 0;
    this.time = 0;
    this.toDestroy = [];
    this.build();
    this.world.on('begin-contact', (c) => this.onContact(c));
    this.world.on('post-solve', (c, imp) => this.onPostSolve(c, imp));
  }

  box(id, mat, x, y, w, h, isStatic, extra = {}) {
    const m = MATS[mat];
    const b = this.world.createBody({ type: isStatic ? 'static' : 'dynamic', position: new Vec2(x, y), angle: extra.angle || 0, linearDamping: 0.02, angularDamping: 0.05 });
    b.createFixture(new Box(w / 2, h / 2), { density: m.density, friction: m.friction, restitution: m.restitution });
    const meta = { id, mat, w, h, kind: 'box', ...extra };
    this.bodies.set(id, b); this.meta.set(b, meta);
    return b;
  }

  build() {
    const L = this.level, g = MATS.ground;
    // deck top (y=0) and the island top (y=-0.35) either side; the void beyond swallows the ball
    this.box('deck', 'ground', (L.deck.x0 + L.deck.x1) / 2, -0.3, L.deck.x1 - L.deck.x0, 0.6, true);
    this.box('islandL', 'ground', L.deck.x0 - 0.3, -0.7, 0.6, 0.7, true);
    this.box('islandR', 'ground', L.deck.x1 + 0.3, -0.7, 0.6, 0.7, true);
    for (const d of L.bodies) {
      const b = this.box(d.id, d.mat, d.x, d.y, d.w, d.h, !!d.static, { stone: !!d.stone, seesaw: d.seesaw });
      if (d.seesaw) {
        const pivot = this.world.createBody({ type: 'static', position: new Vec2(d.seesaw.px, d.seesaw.py) });
        this.world.createJoint(new RevoluteJoint({ enableLimit: true, lowerAngle: -0.55, upperAngle: 0.55 }, pivot, b, new Vec2(d.seesaw.px, d.seesaw.py)));
      }
    }
    // switch: static base + sensor "button" above it
    const sw = this.world.createBody({ type: 'static', position: new Vec2(L.switch.x, 0) });
    sw.createFixture(new Box(0.45, 0.11, new Vec2(0, 0.11)), { density: 0, friction: 0.6 });
    sw.createFixture(new Box(0.3, 0.14, new Vec2(0, 0.36)), { isSensor: true });
    this.bodies.set('switch', sw); this.meta.set(sw, { id: 'switch', mat: 'slate', kind: 'switch' });
  }

  onContact(c) {
    const fa = c.getFixtureA(), fb = c.getFixtureB();
    for (const [sensor, other] of [[fa, fb], [fb, fa]]) {
      if (sensor.isSensor() && this.meta.get(sensor.getBody())?.kind === 'switch') {
        const ob = other.getBody();
        if (ob.isDynamic() && ob.getMass() >= SWITCH_MIN_MASS && !this.pressed) {
          this.pressed = true; this.events.push({ type: 'switch', t: this.time, by: this.meta.get(ob)?.id });
        }
      }
    }
  }

  onPostSolve(c, imp) {
    const strength = Math.max(...imp.normalImpulses, 0);
    if (strength < 0.15) return;
    const a = c.getFixtureA().getBody(), b = c.getFixtureB().getBody();
    const ma = this.meta.get(a), mb = this.meta.get(b);
    for (const [m, body] of [[ma, a], [mb, b]]) {
      if (m && m.mat === 'glass' && strength >= MATS.glass.breakImpulse && !m.broken) {
        m.broken = true; this.toDestroy.push(body);
        const p = body.getPosition();
        this.events.push({ type: 'break', t: this.time, id: m.id, x: p.x, y: p.y, angle: body.getAngle(), w: m.w, h: m.h });
      }
    }
    const mats = [ma?.mat, mb?.mat].filter(Boolean);
    const p = c.getWorldManifold(null).points[0] || a.getPosition();
    this.events.push({ type: 'hit', t: this.time, strength, mats, x: p.x, y: p.y });
  }

  // ---- ball ----
  anchor() { return { x: this.level.sling.x - 0.3, y: 0.95 }; }
  shoot(dx, dy) { // launch vector in world units (pull), clamped like the input does
    const len = Math.hypot(dx, dy); const k = len > MAX_PULL ? MAX_PULL / len : 1;
    dx *= k; dy *= k;
    if (this.ball || this.ballsLeft <= 0) return false;
    const a = this.anchor();
    const b = this.world.createBody({ type: 'dynamic', position: new Vec2(a.x - dx, a.y - dy), bullet: true, linearDamping: 0.01, angularDamping: 0.1 });
    b.createFixture(new Circle(BALL_R), { density: 2, friction: 0.4, restitution: 0.3 });
    b.setLinearVelocity(new Vec2(dx * PULL_K, dy * PULL_K));
    this.ball = b; this.ballsLeft--; this.restTimer = 0;
    this.meta.set(b, { id: 'ball', mat: 'ball', kind: 'ball' });
    this.events.push({ type: 'shoot', t: this.time, vx: dx * PULL_K, vy: dy * PULL_K });
    return true;
  }
  // gravity-only preview (what the dotted line shows); matches the first part of the real flight
  preview(dx, dy, n = 18, dt = 0.07) {
    const len = Math.hypot(dx, dy); const k = len > MAX_PULL ? MAX_PULL / len : 1; dx *= k; dy *= k;
    const a = this.anchor(); const out = [];
    for (let i = 1; i <= n; i++) { const t = i * dt; out.push({ x: a.x - dx + dx * PULL_K * t, y: a.y - dy + dy * PULL_K * t + 0.5 * GRAVITY * t * t }); }
    return out;
  }

  step() {
    this.world.step(DT, 8, 3);
    this.time += DT;
    for (const b of this.toDestroy) { this.meta.delete(b); this.world.destroyBody(b); }
    this.toDestroy.length = 0;
    if (this.ball) {
      const p = this.ball.getPosition(), v = this.ball.getLinearVelocity();
      const slow = v.length() < 0.25;
      this.restTimer = slow ? this.restTimer + DT : 0;
      if (p.y < -6 || this.restTimer > 0.6 || this.time - this.shotAt > 8) {
        this.meta.delete(this.ball); this.world.destroyBody(this.ball); this.ball = null;
        this.events.push({ type: 'ballDone', t: this.time, left: this.ballsLeft });
      }
    }
  }
  get shotAt() { return this._shotAt ?? 0; }
  set shotAt(v) { this._shotAt = v; }

  // everything the renderer needs: positions of dynamic bodies, ball, switch state
  snapshot() {
    const out = { bodies: [], ball: null, pressed: this.pressed, ballsLeft: this.ballsLeft, t: this.time };
    for (const [id, b] of this.bodies) {
      const m = this.meta.get(b); if (!m || m.kind !== 'box' || m.broken) continue;
      const p = b.getPosition(); out.bodies.push({ id, x: p.x, y: p.y, angle: b.getAngle(), mat: m.mat, w: m.w, h: m.h, awake: b.isAwake() });
    }
    if (this.ball) { const p = this.ball.getPosition(); out.ball = { x: p.x, y: p.y, angle: this.ball.getAngle() }; }
    return out;
  }
  // is everything at rest (nothing in flight, no ball)?
  settled() {
    if (this.ball) return false;
    for (const [, b] of this.bodies) if (b.isDynamic() && b.isAwake() && b.getLinearVelocity().length() > 0.05) return false;
    return true;
  }
  hash() { // deterministic fingerprint for the robot's "same shot twice" check
    let h = 2166136261;
    const mix = (v) => { const s = Math.round(v * 1000) | 0; h ^= s; h = Math.imul(h, 16777619) >>> 0; };
    for (const b of this.snapshot().bodies) { mix(b.x); mix(b.y); mix(b.angle); }
    mix(this.pressed ? 1 : 0); return h >>> 0;
  }
}

// Run one shot to its end: returns {win, t, events}. Used by the solver and the robot (headless).
export function playShot(level, dx, dy, maxT = 14) {
  const sim = new Sim(level);
  sim.shoot(dx, dy); sim.shotAt = 0;
  const events = [];
  while (sim.time < maxT) {
    sim.step(); events.push(...sim.events); sim.events.length = 0;
    if (sim.pressed) return { win: true, t: sim.time, events };
    if (!sim.ball && sim.settled() && sim.time > 1) break;
  }
  return { win: sim.pressed, t: sim.time, events };
}
