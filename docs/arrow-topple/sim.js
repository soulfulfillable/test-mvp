// Arrow Topple — physics (Planck.js / Box2D, MIT). No drawing here, so the same file runs in node (solver)
// and in the browser. Fixed timestep, no random numbers: the same shot always ends the same way.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory(require('planck'));
  else root.ATSim = factory(root.planck);
})(typeof self !== 'undefined' ? self : this, function (planck) {
  var Vec2 = planck.Vec2;
  var C = {
    DT: 1 / 120, G: -10, VMIN: 4.5, VMAX: 13.5,
    AMIN: -0.15, AMAX: 1.45,          // aim angle limits (rad)
    ORIGIN: { x: 1.9, y: 1.6 },      // where the arrow leaves the bow
    ARROWS: 3, VIEW: { x0: 0, x1: 8, y0: -1.6, y1: 6.4 }
  };
  // One level only (stage 1). Tower stands on a single stone that is narrower than the deck above it.
  var TX = 6.0;
  var LEVEL = [
    { id: 'stone', kind: 'stone', x: TX, y: 0.3, w: 1.1, h: 0.6 },
    { id: 'deck0', kind: 'plank', x: TX, y: 0.7, w: 2.5, h: 0.2 },
    { id: 'logA', kind: 'log', x: TX - 0.95, y: 1.55, w: 0.3, h: 1.5 },
    { id: 'logB', kind: 'log', x: TX + 0.95, y: 1.55, w: 0.3, h: 1.5 },
    { id: 'deck1', kind: 'plank', x: TX, y: 2.4, w: 2.3, h: 0.2 },
    { id: 'wolfA', kind: 'wolf', x: TX + 0.05, y: 3.0, w: 0.78, h: 1.0 },
    { id: 'logC', kind: 'log', x: TX - 0.85, y: 3.15, w: 0.28, h: 1.3 },
    { id: 'logD', kind: 'log', x: TX + 0.85, y: 3.15, w: 0.28, h: 1.3 },
    { id: 'deck2', kind: 'plank', x: TX, y: 3.9, w: 2.1, h: 0.2 },
    { id: 'wolfB', kind: 'wolf', x: TX - 0.3, y: 4.5, w: 0.78, h: 1.0 },
    { id: 'basket', kind: 'basket', x: TX + 0.52, y: 4.26, w: 0.56, h: 0.52 }
  ];
  var MAT = {
    stone: { d: 2.6, f: 0.8, r: 0.02 }, plank: { d: 0.7, f: 0.6, r: 0.05 }, log: { d: 0.7, f: 0.6, r: 0.05 },
    wolf: { d: 0.8, f: 0.6, r: 0.12 }, basket: { d: 0.5, f: 0.6, r: 0.1 }
  };

  function Sim() {
    this.world = new planck.World({ gravity: Vec2(0, C.G) });
    this.time = 0; this.n = 0; this.events = []; this.items = []; this.wolves = []; this.arrows = [];
    this.arrowsLeft = C.ARROWS; this.state = 'play'; this.flying = null; this.slowmoDone = false;
    this.quiet = 0; this.lastImpactT = -1; this._pending = []; this.shots = 0;
    var g = this.world.createBody({ type: 'static', position: Vec2(0, 0) });
    g.createFixture(planck.Box(60, 1, Vec2(10, -1), 0), { friction: 0.85, restitution: 0.02 });
    g.setUserData({ id: 'ground', kind: 'ground' }); this.ground = g;
    for (var i = 0; i < LEVEL.length; i++) this._add(LEVEL[i]);
    var self = this;
    this.world.on('begin-contact', function (c) { self._begin(c); });
    this.world.on('post-solve', function (c, imp) { self._post(c, imp); });
    for (var k = 0; k < 240; k++) this.world.step(C.DT, 8, 3);   // let the stack settle before anyone sees it
    for (var j = 0; j < this.items.length; j++) {
      var it = this.items[j], p = it.body.getPosition();
      it.x0 = p.x; it.y0 = p.y; it.a0 = it.body.getAngle();
      it.body.setLinearVelocity(Vec2(0, 0)); it.body.setAngularVelocity(0); it.body.setAwake(false);   // fully at rest → same pull, same ending
    }
    this.events.length = 0; this.time = 0; this.n = 0;
  }
  Sim.prototype._add = function (d) {
    var m = MAT[d.kind];
    var b = this.world.createBody({ type: 'dynamic', position: Vec2(d.x, d.y), linearDamping: 0.02, angularDamping: 0.08 });
    b.createFixture(planck.Box(d.w / 2, d.h / 2), { density: m.d, friction: m.f, restitution: m.r });
    var it = { id: d.id, kind: d.kind, w: d.w, h: d.h, body: b, down: false, downT: 0, gone: false, lowT: 0, dislodged: false, plunger: 0 };
    b.setUserData(it); this.items.push(it);
    if (d.kind === 'wolf') this.wolves.push(it);
    if (d.kind === 'basket') this.basket = it;
    return it;
  };
  Sim.prototype.canFire = function () { return this.state === 'play' && this.arrowsLeft > 0 && !this.flying; };
  Sim.prototype.velocity = function (angle, power) {
    var a = Math.max(C.AMIN, Math.min(C.AMAX, angle)), p = Math.max(0, Math.min(1, power));
    var v = C.VMIN + p * (C.VMAX - C.VMIN);
    return { x: Math.cos(a) * v, y: Math.sin(a) * v, a: a };
  };
  Sim.prototype.fire = function (angle, power) {
    if (!this.canFire()) return false;
    var v = this.velocity(angle, power);
    var b = this.world.createBody({ type: 'dynamic', bullet: true, position: Vec2(C.ORIGIN.x, C.ORIGIN.y), angle: v.a, angularDamping: 0.6 });
    b.createFixture(planck.Box(0.45, 0.045), { density: 9, friction: 0.5, restitution: 0.05 });
    var tip = b.createFixture(planck.Circle(Vec2(0.5, 0), 0.13), { density: 9, friction: 0.9, restitution: 0.0 });
    b.setLinearVelocity(Vec2(v.x, v.y));
    var ar = { id: 'arrow' + this.shots, kind: 'arrow', body: b, tip: tip, mode: 'fly', hitT: -1, path: [], stuckTo: null, gone: false };
    b.setUserData(ar); this.arrows.push(ar); this.flying = ar; this.arrowsLeft--; this.shots++;
    this.events.push({ type: 'fire', power: power, angle: v.a });
    return true;
  };
  Sim.prototype._begin = function (c) {
    var fa = c.getFixtureA(), fb = c.getFixtureB(), a = fa.getBody().getUserData(), b = fb.getBody().getUserData();
    if (!a || !b) return;
    if (a.kind === 'arrow' && a.mode === 'fly') this._pending.push({ ar: a, other: b, tip: fa === a.tip });
    if (b.kind === 'arrow' && b.mode === 'fly') this._pending.push({ ar: b, other: a, tip: fb === b.tip });
  };
  Sim.prototype._post = function (c, imp) {
    var s = 0, n = imp.normalImpulses; for (var i = 0; i < n.length; i++) if (n[i] > s) s = n[i];
    if (s < 0.9) return;
    var a = c.getFixtureA().getBody().getUserData(), b = c.getFixtureB().getBody().getUserData();
    var wm = c.getWorldManifold(null), p = wm && wm.points && wm.points[0];
    if (!p) p = c.getFixtureA().getBody().getPosition();
    this.events.push({ type: 'hit', s: s, x: p.x, y: p.y, a: a ? a.kind : '', b: b ? b.kind : '' });
    if ((a && a.kind !== 'ground' && a.kind !== 'arrow') || (b && b.kind !== 'ground' && b.kind !== 'arrow')) this.lastImpactT = this.time;
  };
  Sim.prototype.step = function () {
    var w = this.world, i, it, p, v;
    var fl = this.flying;
    if (fl && fl.mode === 'fly') {           // nose follows the flight path until the first touch
      v = fl.body.getLinearVelocity();
      fl.body.setAngle(Math.atan2(v.y, v.x)); fl.body.setAngularVelocity(0);
      p = fl.body.getPosition();
      if (fl.path.length === 0 || this.n - fl.pathN >= 5) { fl.path.push(p.x, p.y); fl.pathN = this.n; }
    }
    w.step(C.DT, 8, 3); this.n++; this.time = this.n * C.DT;   // timers count whole steps, so results never depend on when you shoot
    // first touch: the rubber cup sticks to whatever it hit
    for (i = 0; i < this._pending.length; i++) {
      var pe = this._pending[i], ar = pe.ar;
      if (ar.mode !== 'fly') continue;
      ar.mode = 'hit'; ar.hitN = this.n;
      var tp = ar.body.getWorldPoint(Vec2(0.5, 0));
      if (pe.other.kind === 'ground') { ar.body.setType('static'); ar.mode = 'stuck'; }
      else if (pe.tip && pe.other.kind !== 'arrow' && pe.other.body && !pe.other.gone) {
        w.createJoint(planck.WeldJoint({ frequencyHz: 0, dampingRatio: 0 }, ar.body, pe.other.body, Vec2(tp.x, tp.y)));
        ar.mode = 'stuck'; ar.stuckTo = pe.other; pe.other.plunger++;
      }
      if (pe.other.kind !== 'ground') this.touched = true;
      this.events.push({ type: 'stick', x: tp.x, y: tp.y, on: pe.other.kind, id: pe.other.id });
    }
    this._pending.length = 0;
    if (fl) {
      p = fl.body.getPosition();
      var out = p.x > 22 || p.x < -8 || p.y < -3;
      if (out && !fl.gone) { fl.gone = true; w.destroyBody(fl.body); this.events.push({ type: 'miss' }); }
      if (fl.gone || (fl.mode !== 'fly' && this.n - fl.hitN > 54)) this.flying = null;
    }
    // wolves: shaken loose / on the ground / running away
    var up = 0, loose = 0;
    for (i = 0; i < this.wolves.length; i++) {
      it = this.wolves[i]; if (it.gone) continue;
      p = it.body.getPosition(); v = it.body.getLinearVelocity();
      if (!it.down) {
        var dx = p.x - it.x0, dy = p.y - it.y0, da = Math.abs(it.body.getAngle() - it.a0);
        if (!it.dislodged && (dx * dx + dy * dy > 0.16 || da > 0.5)) { it.dislodged = true; this.events.push({ type: 'loose', id: it.id }); }
        var sp = Math.sqrt(v.x * v.x + v.y * v.y);
        it.lowT = (p.y < 1.6 && sp < 0.6) ? it.lowT + 1 : 0;
        if (p.y < 0.95 || it.lowT > 36 || p.x > 20 || p.x < -6) {
          it.down = true; it.downN = this.n; this.events.push({ type: 'wolfdown', id: it.id, x: p.x, y: p.y });
        } else { up++; if (it.dislodged) loose++; }
      } else if (this.n - it.downN > 132) {
        it.gone = true; it.fleeX = p.x; it.fleeT = this.time;
        for (var k = 0; k < this.arrows.length; k++) if (this.arrows[k].stuckTo === it && !this.arrows[k].gone) { this.arrows[k].gone = true; w.destroyBody(this.arrows[k].body); }
        w.destroyBody(it.body); this.events.push({ type: 'flee', id: it.id, x: p.x });
      }
    }
    if (!this.slowmoDone && up > 0 && loose === up) { this.slowmoDone = true; this.events.push({ type: 'topple' }); }
    if (this.basket && !this.basket.down) {
      p = this.basket.body.getPosition();
      if (p.y < 0.9) { this.basket.down = true; this.events.push({ type: 'basketdown', x: p.x }); }
    }
    if (this.state === 'play') {
      if (up === 0) { this.state = 'won'; this.events.push({ type: 'win', shots: this.shots }); }
      else if (this.arrowsLeft === 0 && !this.flying) {
        var moving = false;
        for (i = 0; i < this.items.length; i++) {
          it = this.items[i]; if (it.gone) continue;
          v = it.body.getLinearVelocity();
          if (v.x * v.x + v.y * v.y > 0.04 || Math.abs(it.body.getAngularVelocity()) > 0.3) { moving = true; break; }
        }
        this.quiet = moving ? 0 : this.quiet + 1; this.endWait = (this.endWait || 0) + 1;
        if (this.quiet > 108 || this.endWait > 840) { this.state = 'lost'; this.events.push({ type: 'lose' }); }
      }
    }
  };
  // Dotted preview: pure ballistics from the bow, stops at the first block or the ground.
  Sim.prototype.preview = function (angle, power, maxT) {
    var v = this.velocity(angle, power), pts = [], t, x, y, i, it, p;
    for (t = 0; t <= (maxT || 1.6); t += 0.045) {
      x = C.ORIGIN.x + v.x * t; y = C.ORIGIN.y + v.y * t + 0.5 * C.G * t * t;
      if (y < 0.05) break;
      pts.push(x, y);
      var hit = false;
      for (i = 0; i < this.items.length && !hit; i++) {
        it = this.items[i]; if (it.gone) continue; p = it.body.getPosition();
        if (Math.abs(x - p.x) < it.w / 2 + 0.05 && Math.abs(y - p.y) < it.h / 2 + 0.05 && Math.abs(it.body.getAngle()) < 0.3) hit = true;
      }
      if (hit) break;
    }
    return pts;
  };
  Sim.prototype.fingerprint = function () {
    var s = '', i, p;
    for (i = 0; i < this.items.length; i++) {
      var it = this.items[i];
      if (it.gone) { s += it.id + ':gone;'; continue; }
      p = it.body.getPosition(); s += it.id + ':' + p.x.toFixed(3) + ',' + p.y.toFixed(3) + ',' + it.body.getAngle().toFixed(3) + ';';
    }
    return s;
  };
  return { Sim: Sim, C: C, LEVEL: LEVEL };
});
