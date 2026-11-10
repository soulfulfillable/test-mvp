/* Cozy Coloring — picture data and seeded piece generators.
   UMD-ish: the page uses window.ColoringPics, the robot requires it in node.
   Every picture is a list of pieces (circle / ellipse / rect / path) with a palette color number (1-based).
   Generators are seeded, so every load produces the same pieces and saved piece indexes stay valid. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.ColoringPics = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ── primitives ─────────────────────────────────────────────
  // t: c=circle e=ellipse r=rect p=path / c: palette color (1-based)
  // lx,ly: forced label position, rot: rotation (ellipses only), rx: rect corner radius
  function C(cx, cy, r, c, o)      { return Object.assign({ t: 'c', cx: cx, cy: cy, r: r, c: c }, o); }
  function E(cx, cy, rx, ry, c, o) { return Object.assign({ t: 'e', cx: cx, cy: cy, rx: rx, ry: ry, c: c }, o); }
  function R(x, y, w, h, c, o)     { return Object.assign({ t: 'r', x: x, y: y, w: w, h: h, c: c }, o); }
  function P(d, c, o)              { return Object.assign({ t: 'p', d: d, c: c }, o); }

  function rad(a) { return a * Math.PI / 180; }
  function f1(v) { return Math.round(v * 10) / 10; }
  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function pt(cx, cy, a, r) { return f1(cx + r * Math.cos(rad(a))) + ',' + f1(cy + r * Math.sin(rad(a))); }
  function rot2(x, y, cx, cy, a) { var s = Math.sin(rad(a)), c = Math.cos(rad(a)), dx = x - cx, dy = y - cy; return [f1(cx + dx * c - dy * s), f1(cy + dx * s + dy * c)]; }

  // ── generators ─────────────────────────────────────────────
  // jittered grid mosaic (background) — seeded, so pieces are stable between loads
  function mosaic(x0, y0, x1, y1, nx, ny, shades, seed, opt) {
    opt = opt || {};
    var r = rng(seed), pts = [], i, j, jit = opt.jitter == null ? 0.5 : opt.jitter;
    for (j = 0; j <= ny; j++) {
      pts.push([]);
      for (i = 0; i <= nx; i++) {
        var px = x0 + (x1 - x0) * i / nx, py = y0 + (y1 - y0) * j / ny;
        if (i > 0 && i < nx) px += (r() - 0.5) * (x1 - x0) / nx * jit;
        if (j > 0 && j < ny) py += (r() - 0.5) * (y1 - y0) / ny * jit;
        pts[j].push([f1(px), f1(py)]);
      }
    }
    var out = [];
    for (j = 0; j < ny; j++) {
      for (i = 0; i < nx; i++) {
        var pick;
        if (opt.rows) {
          var rj = j;
          if (r() < 0.25) rj = Math.min(opt.rows.length - 1, Math.max(0, j + (r() < 0.5 ? -1 : 1)));
          pick = opt.rows[rj];
        } else {
          pick = shades[(i + 2 * j + ((r() * 2) | 0)) % shades.length];
        }
        var ccx = x0 + (x1 - x0) * (i + 0.5) / nx, ccy = y0 + (y1 - y0) * (j + 0.5) / ny;
        var a = pts[j][i], b = pts[j][i + 1], c2 = pts[j + 1][i + 1], d2 = pts[j + 1][i];
        if (opt.skip && opt.skip(ccx, ccy, [a, b, c2, d2])) continue;
        if (opt.tri) {   // split each cell into two triangles, diagonal picked by the seed
          var t2 = shades[(i * 3 + j + ((r() * 2) | 0)) % shades.length];
          if (r() < 0.5) { out.push(P('M' + a + ' L' + b + ' L' + c2 + ' Z', pick)); out.push(P('M' + a + ' L' + c2 + ' L' + d2 + ' Z', t2)); }
          else { out.push(P('M' + a + ' L' + b + ' L' + d2 + ' Z', pick)); out.push(P('M' + b + ' L' + c2 + ' L' + d2 + ' Z', t2)); }
        } else {
          out.push(P('M' + a + ' L' + b + ' L' + c2 + ' L' + d2 + ' Z', pick));
        }
      }
    }
    return out;
  }
  // circle skip helper for mosaics: skip cells fully covered by a disc
  // (a convex cell is inside a disc exactly when its four real corners are)
  function coveredBy(cx0, cy0, rr, hw, hh) {
    return function (cx, cy, corners) {
      var r2 = rr * rr, k;
      if (corners) { for (k = 0; k < corners.length; k++) { var ex = corners[k][0] - cx0, ey = corners[k][1] - cy0; if (ex * ex + ey * ey > r2) return false; } return true; }
      for (var sx = -1; sx <= 1; sx += 2) for (var sy = -1; sy <= 1; sy += 2) {
        var dx = cx + sx * hw - cx0, dy = cy + sy * hh - cy0;
        if (dx * dx + dy * dy > r2) return false;
      }
      return true;
    };
  }
  // skip cells whose center falls in a box (cells hidden under a big shape)
  function inBox(x0, y0, x1, y1) { return function (cx, cy) { return cx > x0 && cx < x1 && cy > y0 && cy < y1; }; }
  // petals around a center (long axis pointing out)
  function ringPetals(cx, cy, n, dist, rx, ry, c, rot0) {
    var out = [];
    for (var k = 0; k < n; k++) {
      var a = (rot0 || 0) + k * 360 / n;
      out.push(E(f1(cx + dist * Math.cos(rad(a))), f1(cy + dist * Math.sin(rad(a))), rx, ry, c, { rot: Math.round(a + 90) }));
    }
    return out;
  }
  function ringDots(cx, cy, n, dist, r, c, rot0) {
    var out = [];
    for (var k = 0; k < n; k++) {
      var a = (rot0 || 0) + k * 360 / n;
      out.push(C(f1(cx + dist * Math.cos(rad(a))), f1(cy + dist * Math.sin(rad(a))), r, c));
    }
    return out;
  }
  // annular sector (r0 may be 0 → full sector)
  function arcBand(cx, cy, r0, r1, a0, a1, c, o) {
    var la = (a1 - a0) > 180 ? 1 : 0;
    if (r0 <= 0) return P('M' + f1(cx) + ',' + f1(cy) + ' L' + pt(cx, cy, a0, r1) + ' A' + r1 + ',' + r1 + ' 0 ' + la + ',1 ' + pt(cx, cy, a1, r1) + ' Z', c, o);
    return P('M' + pt(cx, cy, a0, r1) + ' A' + r1 + ',' + r1 + ' 0 ' + la + ',1 ' + pt(cx, cy, a1, r1) +
      ' L' + pt(cx, cy, a1, r0) + ' A' + r0 + ',' + r0 + ' 0 ' + la + ',0 ' + pt(cx, cy, a0, r0) + ' Z', c, o);
  }
  // n sectors of a ring, colors cycling
  function wedges(cx, cy, r0, r1, n, rot0, cols, gap) {
    var out = [], step = 360 / n, g = gap || 0;
    for (var k = 0; k < n; k++) {
      var a0 = (rot0 || 0) + k * step;
      out.push(arcBand(cx, cy, r0, r1, a0 + g, a0 + step - g, cols[k % cols.length]));
    }
    return out;
  }
  // triangles pointing outward between r0 and r1
  function spikes(cx, cy, r0, r1, n, rot0, hw, cols) {
    var out = [];
    for (var k = 0; k < n; k++) {
      var a = (rot0 || 0) + k * 360 / n;
      out.push(P('M' + pt(cx, cy, a - hw, r0) + ' L' + pt(cx, cy, a, r1) + ' L' + pt(cx, cy, a + hw, r0) + ' Z', cols[k % cols.length]));
    }
    return out;
  }
  function rays(cx, cy, r0, r1, as, hw, c) {
    return as.map(function (a) { return P('M' + pt(cx, cy, a - hw, r0) + ' L' + pt(cx, cy, a, r1) + ' L' + pt(cx, cy, a + hw, r0) + ' Z', c); });
  }
  function poly(pts, c, o) { return P('M' + pts.map(function (p) { return p.join(','); }).join(' L') + ' Z', c, o); }
  function star(cx, cy, n, r0, r1, rot0, c) {
    var pts = [];
    for (var k = 0; k < 2 * n; k++) { var a = (rot0 || -90) + k * 180 / n, rr = k % 2 ? r0 : r1; pts.push([f1(cx + rr * Math.cos(rad(a))), f1(cy + rr * Math.sin(rad(a)))]); }
    return poly(pts, c);
  }
  // leaf: two curves tip to tip, rotated by a degrees
  function leaf(cx, cy, len, wid, a, c) {
    var t0 = rot2(cx - len / 2, cy, cx, cy, a), t1 = rot2(cx + len / 2, cy, cx, cy, a);
    var q0 = rot2(cx, cy - wid, cx, cy, a), q1 = rot2(cx, cy + wid, cx, cy, a);
    return P('M' + t0 + ' Q' + q0 + ' ' + t1 + ' Q' + q1 + ' ' + t0 + ' Z', c);
  }
  // soft wave band from x0..x1 at height y with amplitude amp, closed down to `bottom`
  function wave(y, amp, n, bottom, c, phase) {
    var w = 360 / n, d = 'M0,' + f1(y + amp * Math.sin(rad(phase || 0)));
    for (var i = 0; i < n; i++) {
      var xa = i * w, xb = (i + 1) * w, xm = (xa + xb) / 2;
      var ym = y + amp * Math.sin(rad((phase || 0) + (i + 0.5) * 180)), yb = y + amp * Math.sin(rad((phase || 0) + (i + 1) * 180));
      d += ' Q' + f1(xm) + ',' + f1(ym + (ym - y) * 0.6) + ' ' + f1(xb) + ',' + f1(yb);
    }
    return P(d + ' L360,' + bottom + ' L0,' + bottom + ' Z', c);
  }
  function cloud(cx, cy, c, s) {
    s = s || 1;
    var q = [[-42, 14], [-44, -8], [-22, -12], [-16, -30], [6, -28], [28, -32], [34, -14], [54, -12], [52, 4], [50, 16], [32, 16], [-30, 16], [-42, 16]];
    function p(k) { return (cx + q[k][0] * s) + ',' + (cy + q[k][1] * s); }
    return P('M' + p(0) + ' Q' + p(1) + ' ' + p(2) + ' Q' + p(3) + ' ' + p(4) + ' Q' + p(5) + ' ' + p(6) + ' Q' + p(7) + ' ' + p(8) + ' Q' + p(9) + ' ' + p(10) + ' L' + p(11) + ' Q' + p(12) + ' ' + p(0) + ' Z', c);
  }
  function gores(cx, ty, by, xs, cols) {
    var out = [], y1 = ty + (by - ty) * 0.18, y2 = by - (by - ty) * 0.18;
    for (var i = 0; i < xs.length - 1; i++) {
      var xa = f1(cx + 1.34 * xs[i]), xb = f1(cx + 1.34 * xs[i + 1]);
      out.push(P('M' + cx + ',' + ty + ' C' + xa + ',' + y1 + ' ' + xa + ',' + y2 + ' ' + cx + ',' + by + ' C' + xb + ',' + y2 + ' ' + xb + ',' + y1 + ' ' + cx + ',' + ty + ' Z', cols[i % cols.length], { lx: cx + (xs[i] + xs[i + 1]) / 2, ly: (ty + by) / 2 }));
    }
    return out;
  }
  // pointy-top hexagon tiling inside a box (only hexes whose center is inside the margin)
  function hexGrid(x0, y0, x1, y1, r, cols, seed, margin, skip) {
    var out = [], rr = rng(seed), h = Math.sqrt(3) * r, m = margin || 0;
    for (var j = 0; ; j++) {
      var cy = y0 + r + j * 1.5 * r; if (cy > y1 - m) break;
      for (var i = 0; ; i++) {
        var cx = x0 + h / 2 + i * h + (j % 2 ? h / 2 : 0); if (cx > x1 - m) break;
        if (cx < x0 + m || cy < y0 + m) continue;
        if (skip && skip(cx, cy)) continue;
        var pts = [];
        for (var k = 0; k < 6; k++) { var a = -90 + k * 60; pts.push([f1(cx + r * Math.cos(rad(a))), f1(cy + r * Math.sin(rad(a)))]); }
        out.push(poly(pts, cols[(i + 2 * j + ((rr() * 2) | 0)) % cols.length]));
      }
    }
    return out;
  }
  // rhombus (diamond) tiling, w × h per rhombus, rows offset by half
  function diamondGrid(x0, y0, x1, y1, w, h, pick) {
    var out = [];
    for (var j = 0; ; j++) {
      var cy = y0 + j * h / 2; if (cy > y1) break;
      for (var i = 0; ; i++) {
        var cx = x0 + i * w + (j % 2 ? w / 2 : 0); if (cx > x1) break;
        if (cx + w / 2 <= x0 || cy + h / 2 <= y0) continue;
        out.push(poly([[f1(cx), f1(cy - h / 2)], [f1(cx + w / 2), f1(cy)], [f1(cx), f1(cy + h / 2)], [f1(cx - w / 2), f1(cy)]], pick(i, j, cx, cy), { mx: cx, my: cy }));
      }
    }
    return out;
  }
  // sunflower seeds: circles on a phyllotaxis spiral
  function phyllo(cx, cy, n, r0, step, rad0, cols) {
    var out = [];
    for (var i = 0; i < n; i++) {
      var a = i * 137.508, d = r0 + step * Math.sqrt(i), rr = rad0 * (0.65 + 0.35 * Math.sqrt(i / n));
      out.push(C(f1(cx + d * Math.cos(rad(a))), f1(cy + d * Math.sin(rad(a))), f1(rr), cols[i % cols.length]));
    }
    return out;
  }
  function mirror(pts) { return pts.map(function (p) { return [360 - p[0], p[1]]; }); }

  // ── low-poly ("poly art") generator ─────────────────────────
  // Regions are polygons in z-order. Points: a jittered grid + points along every region edge.
  // Delaunay triangles take the region of the topmost polygon under their centroid, then a fake light
  // (dome normal or vertical gradient) picks one of the region's shades. Slivers merge into a neighbor,
  // and same-shade neighbors merge into convex quads, so pieces stay tappable and look faceted.
  function delaunay(P) {
    var big = 1e5, n = P.length;
    var pts = P.concat([[-big, -big], [big, -big], [0, big]]);
    function circ(a, b, c) {
      var ax = pts[a][0], ay = pts[a][1], bx = pts[b][0], by = pts[b][1], cx = pts[c][0], cy = pts[c][1];
      var d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
      var ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d;
      var uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;
      return { x: ux, y: uy, r2: (ax - ux) * (ax - ux) + (ay - uy) * (ay - uy) };
    }
    var tris = [{ v: [n, n + 1, n + 2], c: circ(n, n + 1, n + 2) }];
    for (var i = 0; i < n; i++) {
      var px = pts[i][0], py = pts[i][1], bad = [], keep = [];
      tris.forEach(function (t) { var dx = px - t.c.x, dy = py - t.c.y; (dx * dx + dy * dy < t.c.r2 ? bad : keep).push(t); });
      var edges = {};
      bad.forEach(function (t) { for (var k = 0; k < 3; k++) { var a = t.v[k], b = t.v[(k + 1) % 3], key = a < b ? a + ',' + b : b + ',' + a; edges[key] = edges[key] ? null : [a, b]; } });
      Object.keys(edges).forEach(function (key) { var e = edges[key]; if (e) keep.push({ v: [e[0], e[1], i], c: circ(e[0], e[1], i) }); });
      tris = keep;
    }
    // every triangle in one winding, so two neighbors always run their shared edge in opposite directions
    return tris.filter(function (t) { return t.v[0] < n && t.v[1] < n && t.v[2] < n; }).map(function (t) {
      var a = pts[t.v[0]], b = pts[t.v[1]], c = pts[t.v[2]], cr = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
      return cr < 0 ? [t.v[0], t.v[2], t.v[1]] : t.v;
    });
  }
  function inPoly(x, y, poly) {
    var c = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) c = !c;
    }
    return c;
  }
  function circlePoly(cx, cy, r, n) { var out = []; for (var k = 0; k < n; k++) { var a = k * 2 * Math.PI / n; out.push([f1(cx + r * Math.cos(a)), f1(cy + r * Math.sin(a))]); } return out; }
  function polyArt(spec) {
    var W = spec.w, H = spec.h, s = spec.step, r = rng(spec.seed), PT = [];
    var edgePts = [];
    function addEdge(poly, sp) {
      for (var i = 0; i < poly.length; i++) {
        var a = poly[i], b = poly[(i + 1) % poly.length], L = Math.hypot(b[0] - a[0], b[1] - a[1]), m = Math.max(1, Math.round(L / sp));
        for (var k = 0; k < m; k++) { var t = k / m; edgePts.push([f1(a[0] + (b[0] - a[0]) * t), f1(a[1] + (b[1] - a[1]) * t)]); }
      }
    }
    addEdge([[0, 0], [W, 0], [W, H], [0, H]], s);
    spec.regions.forEach(function (rg) { if (rg.poly.length && !rg.base) addEdge(rg.poly, rg.edge || (rg.bg || !spec.dense ? s : spec.dense.step) * 0.75); });
    // de-duplicate edge points closer than 3px
    edgePts = edgePts.map(function (p) { return [Math.min(W, Math.max(0, p[0])), Math.min(H, Math.max(0, p[1]))]; });   // shapes may poke past the canvas
    edgePts.forEach(function (p) { for (var q = 0; q < PT.length; q++) if (Math.hypot(PT[q][0] - p[0], PT[q][1] - p[1]) < 3) return; PT.push(p); });
    var nEdge = PT.length;
    var D = spec.dense, sd = D ? D.step : s;
    function inDense(x, y) { return D && x > D.x0 && x < D.x1 && y > D.y0 && y < D.y1; }
    function grid(st, keep) {
      for (var y = st * 0.5; y < H; y += st * 0.87) for (var x = st * 0.5 + ((Math.round(y / (st * 0.87)) % 2) ? st / 2 : 0); x < W; x += st) {
        var px = f1(Math.min(W - 2, Math.max(2, x + (r() - 0.5) * st * 0.5))), py = f1(Math.min(H - 2, Math.max(2, y + (r() - 0.5) * st * 0.5)));
        if (!keep(px, py)) continue;
        var ok = true;
        for (var q = 0; q < PT.length; q++) if (Math.hypot(PT[q][0] - px, PT[q][1] - py) < st * 0.5) { ok = false; break; }
        if (ok) PT.push([px, py]);
      }
    }
    grid(s, function (x, y) { return !inDense(x, y); });
    if (D) grid(sd, inDense);
    // exact co-circular points (any circle drawn as a polygon) break Bowyer-Watson: nudge inner points by < 0.4 px
    PT = PT.map(function (p) { var onEdge = p[0] <= 0 || p[0] >= W || p[1] <= 0 || p[1] >= H; return onEdge ? p : [f1(p[0] + (r() - 0.5) * 0.8), f1(p[1] + (r() - 0.5) * 0.8)]; });
    var tris = delaunay(PT);
    var L = spec.light || [-0.55, -0.65, 0.52], ll = Math.hypot(L[0], L[1], L[2]); L = [L[0] / ll, L[1] / ll, L[2] / ll];
    function regionAt(x, y) { for (var k = spec.regions.length - 1; k >= 0; k--) { var rg = spec.regions[k]; if (rg.base || inPoly(x, y, rg.poly)) return k; } return 0; }
    function area(v) { var a = PT[v[0]], b = PT[v[1]], c = PT[v[2]]; return Math.abs((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])) / 2; }
    var pieces = tris.map(function (v) {
      var cx = (PT[v[0]][0] + PT[v[1]][0] + PT[v[2]][0]) / 3, cy = (PT[v[0]][1] + PT[v[1]][1] + PT[v[2]][1]) / 3, k = regionAt(cx, cy), rg = spec.regions[k];
      var lit;
      if (rg.mode === 'y') lit = 1 - (cy - (rg.y0 || 0)) / ((rg.y1 || H) - (rg.y0 || 0));
      else {
        var bb = rg.bb, nx = (cx - bb.cx) / bb.rx, ny = (cy - bb.cy) / bb.ry, d = Math.min(0.95, nx * nx + ny * ny), nz = Math.sqrt(1 - d);
        lit = (nx * L[0] + ny * L[1] + nz * L[2]) * 0.5 + 0.5;
      }
      lit += (r() - 0.5) * (rg.noise == null ? 0.16 : rg.noise);
      var sh = rg.shades, idx = Math.max(0, Math.min(sh.length - 1, Math.floor((1 - lit) * sh.length)));
      var e = [Math.hypot(PT[v[1]][0] - PT[v[0]][0], PT[v[1]][1] - PT[v[0]][1]), Math.hypot(PT[v[2]][0] - PT[v[1]][0], PT[v[2]][1] - PT[v[1]][1]), Math.hypot(PT[v[0]][0] - PT[v[2]][0], PT[v[0]][1] - PT[v[2]][1])];
      return { v: v.slice(), reg: k, c: sh[idx], thin: 2 * area(v) / Math.max(e[0], e[1], e[2]), alive: true };
    });
    spec.regions.forEach(function (rg) { if (rg.bb) return; var xs = rg.poly.map(function (p) { return p[0]; }), ys = rg.poly.map(function (p) { return p[1]; }); });
    // adjacency by shared edge
    function edgeMap() { var m = {}; pieces.forEach(function (pc, i) { if (!pc.alive) return; var v = pc.v; for (var k = 0; k < v.length; k++) { var a = v[k], b = v[(k + 1) % v.length], key = a < b ? a + ',' + b : b + ',' + a; (m[key] = m[key] || []).push(i); } }); return m; }
    function merge(i, j, a, b) { // pieces i and j share edge a-b; i absorbs j
      var A = pieces[i].v, B = pieces[j].v;
      var ia = A.indexOf(a); if (A[(ia + 1) % A.length] !== b) { var t = a; a = b; b = t; ia = A.indexOf(a); }
      // A runs a→b, so B (same winding) runs b→a: splice in B's vertices after a, up to b
      var ja = B.indexOf(a), seq = [], k = (ja + 1) % B.length, guard = 0;
      while (B[k] !== b && guard++ < B.length) { seq.push(B[k]); k = (k + 1) % B.length; }
      var out = A.slice(0, ia + 1).concat(seq).concat(A.slice(ia + 1));
      var seen = {}; for (var q2 = 0; q2 < out.length; q2++) { if (seen[out[q2]]) return false; seen[out[q2]] = 1; }   // shared more than one edge: would self-cross
      pieces[i].v = out; pieces[j].alive = false; return true;
    }
    function convex(v) { var sign = 0; for (var k = 0; k < v.length; k++) { var a = PT[v[k]], b = PT[v[(k + 1) % v.length]], c = PT[v[(k + 2) % v.length]]; var cr = (b[0] - a[0]) * (c[1] - b[1]) - (b[1] - a[1]) * (c[0] - b[0]); if (Math.abs(cr) < 1e-6) continue; if (sign === 0) sign = cr > 0 ? 1 : -1; else if ((cr > 0 ? 1 : -1) !== sign) return false; } return true; }
    function tryMerge(i, pred) {
      var m = edgeMap(), v = pieces[i].v, best = null;
      for (var k = 0; k < v.length; k++) {
        var a = v[k], b = v[(k + 1) % v.length], key = a < b ? a + ',' + b : b + ',' + a, nb = (m[key] || []).filter(function (x) { return x !== i; })[0];
        if (nb == null || !pred(pieces[nb])) continue;
        var L2 = Math.hypot(PT[a][0] - PT[b][0], PT[a][1] - PT[b][1]);
        if (!best || L2 > best.L) best = { nb: nb, a: a, b: b, L: L2 };
      }
      if (!best) return false;
      var pc = pieces[i]; if (!merge(best.nb, i, best.a, best.b)) return false; if (pc.c !== pieces[best.nb].c && pieces[best.nb].reg === pc.reg) { /* keep neighbor's shade */ }
      return true;
    }
    // 1. slivers (thinner than 5px) melt into the same-region neighbor across their longest edge
    pieces.forEach(function (pc, i) { if (pc.alive && pc.v.length === 3 && pc.thin < 5) tryMerge(i, function (o) { return o.reg === pc.reg; }); });
    // 2. pair up same-shade neighbors into convex quads (fewer, chunkier facets)
    var order = pieces.map(function (_, i) { return i; }).sort(function () { return r() - 0.5; });
    order.forEach(function (i) {
      var pc = pieces[i]; if (!pc.alive || pc.v.length !== 3 || r() > (spec.mergeRate || 0.55)) return;
      var m = edgeMap(), v = pc.v, cands = [];
      for (var k = 0; k < 3; k++) { var a = v[k], b = v[(k + 1) % 3], key = a < b ? a + ',' + b : b + ',' + a, nb = (m[key] || []).filter(function (x) { return x !== i; })[0]; if (nb != null && pieces[nb].alive && pieces[nb].v.length === 3 && pieces[nb].reg === pc.reg && pieces[nb].c === pc.c) cands.push({ nb: nb, a: a, b: b }); }
      for (var q = 0; q < cands.length; q++) { var save = pieces[cands[q].nb].v.slice(); if (!merge(cands[q].nb, i, cands[q].a, cands[q].b)) continue; if (convex(pieces[cands[q].nb].v)) break; pieces[cands[q].nb].v = save; pc.alive = true; }
    });
    function inr(v) { var a = 0, per = 0; for (var k = 0; k < v.length; k++) { var p0 = PT[v[k]], p1 = PT[v[(k + 1) % v.length]]; a += p0[0] * p1[1] - p1[0] * p0[1]; per += Math.hypot(p1[0] - p0[0], p1[1] - p0[1]); } return Math.abs(a) / per; }
    for (var pass = 0; pass < 2; pass++) pieces.forEach(function (pc, i) { if (pc.alive && inr(pc.v) < (spec.minIn || 3.2)) tryMerge(i, function (o) { return o.alive && o.reg === pc.reg; }); });
    var rgOut = [];
    spec.regions.forEach(function (_, k) { pieces.forEach(function (pc) { if (pc.alive && pc.reg === k) rgOut.push(P_(pc)); }); });
    function P_(pc) { return P('M' + pc.v.map(function (q) { return PT[q].join(','); }).join(' L') + ' Z', pc.c); }
    return rgOut;
  }

  // ── poly-art pictures ───────────────────────────────────────
  function bbOf(poly) { var xs = poly.map(function (p) { return p[0]; }), ys = poly.map(function (p) { return p[1]; }); var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs), y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys); return { cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, rx: Math.max(10, (x1 - x0) / 2), ry: Math.max(10, (y1 - y0) / 2), x0: x0, y0: y0, x1: x1, y1: y1 }; }
  function mirrorX(poly, cx) { return poly.map(function (p) { return [2 * cx - p[0], p[1]]; }).reverse(); }
  // ellipse polygon (n points, rotated by rot degrees)
  function EP(cx, cy, rx, ry, n, rot) {
    n = n || 14; var out = [], ca = Math.cos(rad(rot || 0)), sa = Math.sin(rad(rot || 0));
    for (var k = 0; k < n; k++) { var a = k * 2 * Math.PI / n, x = rx * Math.cos(a), y = ry * Math.sin(a); out.push([f1(cx + x * ca - y * sa), f1(cy + x * sa + y * ca)]); }
    return out;
  }
  // upper half of an ellipse closed by its baseline
  function dome(cx, cy, rx, ry, n) { var out = []; n = n || 10; for (var k = 0; k <= n; k++) { var a = Math.PI + k * Math.PI / n; out.push([f1(cx + rx * Math.cos(a)), f1(cy + ry * Math.sin(a))]); } return out; }
  // leaf / petal: pointed at both ends, from A to B, half-width w
  function lens(ax, ay, bx, by, w, n) {
    n = n || 6; var dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L, side1 = [], side2 = [];
    for (var k = 0; k <= n; k++) { var t = k / n, o = Math.sin(Math.PI * t) * w; side1.push([f1(ax + dx * t + nx * o), f1(ay + dy * t + ny * o)]); side2.push([f1(ax + dx * t - nx * o), f1(ay + dy * t - ny * o)]); }
    return side1.concat(side2.slice(1, n).reverse());
  }
  function petalRing(cx, cy, n, r0, r1, w, rot0) { var out = []; for (var k = 0; k < n; k++) { var a = rad((rot0 || -90) + k * 360 / n); out.push(lens(cx + r0 * Math.cos(a), cy + r0 * Math.sin(a), cx + r1 * Math.cos(a), cy + r1 * Math.sin(a), w)); } return out; }
  function waveTop(y, amp, n, bottom, phase) { var out = []; for (var k = 0; k <= n; k++) { var x = 360 * k / n; out.push([f1(x), f1(y + amp * Math.sin(rad((phase || 0) + k * 140)))]); } return out.concat([[360, bottom], [0, bottom]]); }
  function slice(poly, xa, xb) { return poly; }
  // a picture from named color ramps and regions (z-order: first = back)
  function polyPic(id, name, ramps, regions, opt) {
    var pal = [], idx = {};
    regions.forEach(function (rg) { if (!(rg.ramp in idx)) { idx[rg.ramp] = []; ramps[rg.ramp].forEach(function (hex) { pal.push(hex); idx[rg.ramp].push(pal.length); }); } rg.shades = idx[rg.ramp]; if (!rg.base) rg.bb = bbOf(rg.poly); });
    var hero = regions.filter(function (rg) { return !rg.base && !rg.bg; }), box = null;
    if (hero.length) { box = { x0: 1e9, y0: 1e9, x1: -1e9, y1: -1e9 }; hero.forEach(function (rg) { box.x0 = Math.min(box.x0, rg.bb.x0); box.y0 = Math.min(box.y0, rg.bb.y0); box.x1 = Math.max(box.x1, rg.bb.x1); box.y1 = Math.max(box.y1, rg.bb.y1); }); box.x0 -= 10; box.y0 -= 10; box.x1 += 10; box.y1 += 10; box.step = opt.d; }
    return { id: id, name: name, w: 360, h: 440, pal: pal, deco: opt.deco || [],
      rg: polyArt({ w: 360, h: 440, step: opt.c || Math.round(opt.d * 1.8), seed: opt.seed || 7, regions: regions, mergeRate: opt.merge == null ? 0.6 : opt.merge, dense: box, light: opt.light }) };
  }
  function eyeDot(x, y, r) { return { d: 'M' + x + ',' + (y - r) + ' a' + r + ',' + r + ' 0 1 0 0.1,0', s: '#FFFFFF', w: 2.6 }; }
  var BG = true;

  // the page loads coloring-data.js (built by build.sh from this same code) so phones skip ~3 s of geometry
  var PRE = typeof self !== 'undefined' && self.ColoringData && self.ColoringData.PICS;
  var PICS = PRE || [
    // 1 ─ ladybug on a leaf
    polyPic('ladybug', 'Ladybug Leaf', {
      bg: ['#D6EEC0', '#BFE2A4', '#A6D48A'], leaf: ['#7CC36B', '#5AA64F', '#3F8A3A'], red: ['#F25C54', '#D93B35', '#B0221F'], black: ['#3A3A3A', '#1E1E1E'], white: ['#FFFFFF']
    }, [
      { base: true, poly: [], ramp: 'bg', mode: 'y', y0: 0, y1: 440, noise: 0.5 },
      { poly: [[30, 410], [70, 290], [150, 170], [270, 70], [335, 60], [325, 140], [270, 260], [180, 360], [90, 420]], ramp: 'leaf', bg: BG },
      { poly: EP(252, 150, 42, 34, 12, -30), ramp: 'black', edge: 18 },
      { poly: EP(200, 245, 82, 98, 18, -30), ramp: 'red', edge: 26 },
      { poly: EP(172, 215, 17, 17, 8), ramp: 'black', edge: 10, noise: 0 }, { poly: EP(232, 228, 15, 15, 8), ramp: 'black', edge: 10, noise: 0 },
      { poly: EP(160, 283, 15, 15, 8), ramp: 'black', edge: 10, noise: 0 }, { poly: EP(218, 300, 16, 16, 8), ramp: 'black', edge: 10, noise: 0 },
      { poly: EP(243, 140, 8, 8, 7), ramp: 'white', edge: 8, noise: 0 }, { poly: EP(268, 158, 8, 8, 7), ramp: 'white', edge: 8, noise: 0 }
    ], { d: 46, seed: 11, deco: [{ d: 'M247,161 L153,322', s: '#1E1E1E', w: 3 }, { d: 'M262,122 q8,-26 30,-30 M276,132 q18,-16 40,-12', s: '#1E1E1E', w: 2.6 }] }),

    // 2 ─ sailboat at sunset
    polyPic('sail', 'Sunset Sail', {
      sky: ['#9C7BC4', '#E88AA0', '#FFB98A'], sun: ['#FFE29A', '#FFD166'], sea: ['#5E7FC0', '#3F5FA0', '#2C467F'], hull: ['#8A5A3C', '#6B4128'], sail: ['#FFF6E5', '#F0E0C4'], jib: ['#FF8A65', '#E8664A'], flag: ['#E5484D']
    }, [
      { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 300, noise: 0.35 },
      { poly: EP(180, 300, 70, 70, 16), ramp: 'sun', bg: BG, noise: 0.5 },
      { poly: waveTop(300, 3, 6, 440), ramp: 'sea', bg: BG, mode: 'y', y0: 300, y1: 440, noise: 0.5 },
      { poly: [[105, 330], [265, 330], [242, 364], [128, 364]], ramp: 'hull', edge: 22 },
      { poly: [[182, 120], [182, 322], [96, 322]], ramp: 'sail', edge: 24 },
      { poly: [[194, 150], [194, 322], [272, 322]], ramp: 'jib', edge: 24 },
      { poly: [[182, 120], [214, 130], [182, 142]], ramp: 'flag', edge: 10 }
    ], { d: 42, seed: 12, deco: [{ d: 'M60,120 q9,-9 18,0 q9,-9 18,0 M280,90 q7,-7 14,0 q7,-7 14,0', s: '#6B4F8A', w: 2.4 }, { d: 'M188,118 L188,330', s: '#6B4128', w: 3 }] }),

    // 3 ─ hot air balloon
    polyPic('balloon', 'Hot Air Balloon', {
      sky: ['#BEE3F8', '#9CD1F2', '#7ABDE8'], cloud: ['#FFFFFF', '#E8F1F8'], hills: ['#9ED36A', '#7BB84E', '#5E9A3A'], red: ['#F2545B', '#D63C45'], gold: ['#FFD95A', '#F4C02C'], teal: ['#3FC1C9', '#2A9FA7'], basket: ['#A86F3D', '#87552C']
    }, (function () {
      function w(y) { return y <= 190 ? 112 * Math.sqrt(Math.max(0, 1 - Math.pow((y - 190) / 125, 2))) : 112 - (y - 190) * (82 / 110); }
      var bands = [], ramps = ['red', 'gold', 'teal', 'red', 'gold', 'teal'];
      for (var b = 0; b < 6; b++) {
        var u0 = -1 + b / 3, u1 = -1 + (b + 1) / 3, L = [], Rr = [];
        for (var k = 0; k <= 12; k++) { var y = 65 + (300 - 65) * k / 12, ww = w(y); L.push([f1(180 + u0 * ww), f1(y)]); Rr.push([f1(180 + u1 * ww), f1(y)]); }
        bands.push({ poly: L.concat(Rr.reverse()), ramp: ramps[b], edge: 22 });
      }
      return [
        { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 380, noise: 0.45 },
        { poly: EP(70, 110, 48, 22, 10), ramp: 'cloud', bg: BG }, { poly: EP(300, 70, 42, 20, 10), ramp: 'cloud', bg: BG }, { poly: EP(310, 250, 36, 16, 10), ramp: 'cloud', bg: BG },
        { poly: waveTop(375, 14, 4, 440, 30), ramp: 'hills', bg: BG, mode: 'y', y0: 360, y1: 440 }
      ].concat(bands).concat([
        { poly: [[150, 300], [210, 300], [206, 314], [154, 314]], ramp: 'basket', edge: 12 },
        { poly: [[158, 342], [202, 342], [198, 376], [162, 376]], ramp: 'basket', edge: 14 }
      ]);
    })(), { d: 40, seed: 13, deco: [{ d: 'M156,314 L162,342 M204,314 L198,342 M180,314 L180,342', s: '#6B4128', w: 2 }] }),

    // 4 ─ mushroom cottage
    polyPic('mushroom', 'Mushroom Cottage', {
      sky: ['#D8EEF9', '#BFE1F3', '#A3D2EC'], grass: ['#8ACB6A', '#6DB050', '#52923D'], cap: ['#F25C54', '#D93B35', '#A92522'], dot: ['#FFF8F0'], stem: ['#F6E6C8', '#E3CBA4'], door: ['#8A5A3C', '#6B4128'], window: ['#FFD166', '#F4B740'], stone: ['#BDB6AA', '#9C958A']
    }, [
      { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 360, noise: 0.45 },
      { poly: waveTop(362, 10, 4, 440, 60), ramp: 'grass', bg: BG, mode: 'y', y0: 350, y1: 440 },
      { poly: [[160, 382], [200, 382], [236, 440], [124, 440]], ramp: 'stone', edge: 18 },
      { poly: [[118, 186], [242, 186], [252, 384], [108, 384]], ramp: 'stem', edge: 22 },
      { poly: dome(180, 194, 140, 112, 14), ramp: 'cap', edge: 24 },
      { poly: EP(112, 160, 15, 12, 8), ramp: 'dot', edge: 10 }, { poly: EP(180, 118, 18, 14, 8), ramp: 'dot', edge: 10 }, { poly: EP(248, 160, 15, 12, 8), ramp: 'dot', edge: 10 }, { poly: EP(150, 168, 9, 8, 7), ramp: 'dot', edge: 8 }, { poly: EP(212, 170, 10, 8, 7), ramp: 'dot', edge: 8 },
      { poly: dome(180, 306, 26, 26, 8).concat([[206, 384], [154, 384]]).slice(0, 9).concat([[206, 384], [154, 384]]), ramp: 'door', edge: 14 },
      { poly: EP(138, 252, 17, 17, 10), ramp: 'window', edge: 10 }, { poly: EP(222, 252, 17, 17, 10), ramp: 'window', edge: 10 }
    ], { d: 38, seed: 14, deco: [{ d: 'M197,344 a2.5,2.5 0 1 0 0.1,0', s: '#FFD166', w: 3 }] }),

    // 5 ─ desert cactus
    polyPic('cactus', 'Desert Noon', {
      sky: ['#FFE9B8', '#FFD38A', '#FFBE6B'], sun: ['#FFF3C4', '#FFE27A'], dune: ['#F2B872', '#E09A55', '#C77D3D'], cactus: ['#5FB37F', '#3F9A66', '#2E7B50'], flower: ['#FF7BA0', '#E85A82'], rock: ['#B08968', '#8C6A4E']
    }, [
      { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 330, noise: 0.45 },
      { poly: EP(288, 84, 42, 42, 14), ramp: 'sun', bg: BG, noise: 0.5 },
      { poly: [[0, 300], [90, 276], [200, 300], [300, 280], [360, 290], [360, 440], [0, 440]], ramp: 'dune', bg: BG, mode: 'y', y0: 280, y1: 440, noise: 0.5 },
      { poly: [[0, 370], [120, 350], [250, 372], [360, 352], [360, 440], [0, 440]], ramp: 'dune', bg: BG, mode: 'y', y0: 300, y1: 440, noise: 0.5 },
      { poly: dome(182, 150, 24, 24, 8).concat([[206, 392], [158, 392]]), ramp: 'cactus', edge: 22 },
      { poly: dome(132, 196, 13, 13, 6).concat([[145, 262], [160, 262], [160, 286], [119, 286]]), ramp: 'cactus', edge: 16 },
      { poly: dome(247, 178, 13, 13, 6).concat([[260, 256], [204, 256], [204, 232], [234, 232]]), ramp: 'cactus', edge: 16 },
      { poly: EP(182, 126, 15, 11, 10), ramp: 'flower', edge: 10 },
      { poly: EP(66, 372, 32, 34, 12), ramp: 'cactus', edge: 18 }, { poly: EP(66, 340, 9, 7, 7), ramp: 'flower', edge: 8 },
      { poly: EP(292, 400, 34, 18, 10), ramp: 'rock', edge: 18 }
    ], { d: 36, seed: 15 }),

    // 6 ─ sleepy kitten
    polyPic('kitten', 'Sleepy Kitten', {
      bg: ['#E6DDF5', '#D6C9EE', '#C4B3E4'], moon: ['#FFE8A3', '#FFD873'], rug: ['#9BB7D4', '#7F9EC4', '#6283B0'], cat: ['#F7B267', '#F08C42', '#D06A2A'], cream: ['#FFF1DE', '#F5DDBE'], pink: ['#F7A8B8']
    }, [
      { base: true, poly: [], ramp: 'bg', mode: 'y', y0: 0, y1: 440, noise: 0.45 },
      { poly: EP(296, 86, 34, 34, 12), ramp: 'moon', bg: BG },
      { poly: EP(180, 336, 160, 62, 18), ramp: 'rug', bg: BG },
      { poly: [[278, 300], [318, 286], [338, 252], [326, 232], [306, 244], [304, 270], [276, 282]], ramp: 'cat', edge: 14 },
      { poly: EP(204, 300, 98, 56, 16), ramp: 'cat', edge: 24 },
      { poly: [[76, 256], [80, 198], [118, 234]], ramp: 'cat', edge: 16 }, { poly: [[166, 256], [162, 198], [124, 234]], ramp: 'cat', edge: 16 },
      { poly: [[84, 244], [87, 212], [108, 234]], ramp: 'pink', edge: 10 }, { poly: [[158, 244], [155, 212], [134, 234]], ramp: 'pink', edge: 10 },
      { poly: EP(121, 276, 54, 46, 14), ramp: 'cat', edge: 20 },
      { poly: EP(121, 298, 24, 15, 10), ramp: 'cream', edge: 10 },
      { poly: EP(152, 338, 22, 12, 10), ramp: 'cream', edge: 10 }, { poly: EP(196, 348, 22, 12, 10), ramp: 'cream', edge: 10 }
    ], { d: 34, seed: 16, deco: [{ d: 'M96,272 q9,8 18,0 M128,272 q9,8 18,0', s: '#5A3A22', w: 2.6 }, { d: 'M116,288 L126,288 L121,294 Z', s: '#E87A93', w: 2.4 }, { d: 'M60,140 l14,0 l-14,14 l14,0 M86,110 l10,0 l-10,10 l10,0', s: '#8E7BBF', w: 2.6 }] }),

    // 7 ─ bluebird on a branch
    polyPic('bluebird', 'Bluebird Morning', {
      sky: ['#EAF4FB', '#D6EAF6', '#C2DEF0'], branch: ['#9C6B43', '#7A5030'], leaf: ['#86C56A', '#5FA84E'], blossom: ['#FFB3C7', '#F78CA8'], bird: ['#5B9BE0', '#3C7CC6', '#2A5FA0'], navy: ['#2D4F8F', '#1F3A6E'], belly: ['#FFA45B', '#F2852F'], beak: ['#FFD166'], eye: ['#1E1E1E']
    }, [
      { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 440, noise: 0.5 },
      { poly: [[0, 330], [200, 300], [360, 248], [360, 270], [200, 322], [0, 354]], ramp: 'branch', edge: 16 },
      { poly: lens(70, 326, 40, 270, 13), ramp: 'leaf', edge: 12 }, { poly: lens(290, 270, 330, 220, 13), ramp: 'leaf', edge: 12 }, { poly: lens(250, 290, 270, 340, 12), ramp: 'leaf', edge: 12 }, { poly: lens(120, 332, 110, 380, 12), ramp: 'leaf', edge: 12 }
    ].concat(petalRing(40, 270, 5, 4, 20, 8).map(function (p) { return { poly: p, ramp: 'blossom', edge: 10 }; }))
     .concat(petalRing(332, 216, 5, 4, 20, 8).map(function (p) { return { poly: p, ramp: 'blossom', edge: 10 }; })).concat([
      { poly: [[124, 236], [58, 214], [68, 258], [128, 262]], ramp: 'navy', edge: 16 },
      { poly: EP(186, 240, 72, 52, 16), ramp: 'bird', edge: 22 },
      { poly: EP(198, 264, 44, 30, 12), ramp: 'belly', edge: 16 },
      { poly: [[128, 218], [202, 212], [218, 258], [150, 270]], ramp: 'navy', edge: 16 },
      { poly: EP(242, 196, 40, 37, 14), ramp: 'bird', edge: 18 },
      { poly: [[274, 190], [304, 199], [274, 210]], ramp: 'beak', edge: 10 },
      { poly: EP(252, 188, 7, 7, 8), ramp: 'eye', edge: 8, noise: 0 }
    ]), { d: 32, seed: 17, deco: [eyeDot(254, 186, 2), { d: 'M190,292 L186,304 M206,292 L210,302', s: '#5A3A22', w: 2.6 }] }),

    // 8 ─ owl under the moon
    polyPic('owl', 'Moonlit Owl', {
      night: ['#2B3566', '#222A55', '#181E40'], moon: ['#FFF1C1', '#FFE08A'], branch: ['#6B4A34', '#4E3424'], body: ['#B07F55', '#8F6440', '#6E4A2C'], belly: ['#F1DDBC', '#DCC29C'], wing: ['#7A5536', '#5E4029'], eyew: ['#FFFFFF', '#EDE6DA'], iris: ['#FFC93C'], pupil: ['#1E1E1E'], beak: ['#F29E4C']
    }, [
      { base: true, poly: [], ramp: 'night', mode: 'y', y0: 0, y1: 440, noise: 0.5 },
      { poly: EP(292, 88, 44, 44, 14), ramp: 'moon', bg: BG, noise: 0.5 },
      { poly: [[0, 380], [360, 360], [360, 388], [0, 408]], ramp: 'branch', edge: 22 },
      { poly: EP(180, 272, 86, 106, 18), ramp: 'body', edge: 24 },
      { poly: EP(180, 300, 52, 70, 14), ramp: 'belly', edge: 18 },
      { poly: lens(112, 210, 128, 350, 26), ramp: 'wing', edge: 18 }, { poly: lens(248, 210, 232, 350, 26), ramp: 'wing', edge: 18 },
      { poly: EP(180, 170, 76, 60, 16), ramp: 'body', edge: 20 },
      { poly: [[112, 140], [104, 96], [142, 124]], ramp: 'body', edge: 14 }, { poly: [[248, 140], [256, 96], [218, 124]], ramp: 'body', edge: 14 },
      { poly: EP(148, 170, 28, 28, 14), ramp: 'eyew', edge: 12 }, { poly: EP(212, 170, 28, 28, 14), ramp: 'eyew', edge: 12 },
      { poly: EP(150, 172, 16, 16, 10), ramp: 'iris', edge: 10, noise: 0 }, { poly: EP(210, 172, 16, 16, 10), ramp: 'iris', edge: 10, noise: 0 },
      { poly: EP(151, 173, 8, 8, 8), ramp: 'pupil', edge: 8, noise: 0 }, { poly: EP(209, 173, 8, 8, 8), ramp: 'pupil', edge: 8, noise: 0 },
      { poly: [[170, 196], [190, 196], [180, 218]], ramp: 'beak', edge: 10 },
      { poly: EP(160, 376, 14, 8, 8), ramp: 'beak', edge: 9 }, { poly: EP(200, 376, 14, 8, 8), ramp: 'beak', edge: 9 }
    ], { d: 32, seed: 18, deco: [eyeDot(154, 169, 2.2), eyeDot(213, 169, 2.2), { d: 'M50,60 l0,8 M46,64 l8,0 M110,40 l0,8 M106,44 l8,0 M60,200 l0,8 M56,204 l8,0 M320,220 l0,8 M316,224 l8,0 M230,40 l0,8 M226,44 l8,0', s: '#FFF1C1', w: 2 }] }),

    // 9 ─ whale
    polyPic('whale', 'Whale Song', {
      sky: ['#CFE9F7', '#B7DDF2', '#9DD0EC'], cloud: ['#FFFFFF', '#EAF5FB'], sea: ['#4F8FD0', '#3A73B5', '#2B5A93'], whale: ['#5D78B0', '#46609A', '#334A7C'], belly: ['#DDE7F3', '#BFD0E6'], spout: ['#FFFFFF', '#E5F2FA'], eye: ['#1F2A44']
    }, [
      { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 230, noise: 0.45 },
      { poly: EP(80, 70, 46, 20, 10), ramp: 'cloud', bg: BG }, { poly: EP(300, 110, 38, 17, 10), ramp: 'cloud', bg: BG },
      { poly: waveTop(232, 6, 6, 440, 0), ramp: 'sea', bg: BG, mode: 'y', y0: 232, y1: 440, noise: 0.55 },
      { poly: [[52, 300], [14, 246], [32, 240], [54, 272], [68, 236], [86, 246], [74, 300]], ramp: 'whale', edge: 14 },
      { poly: [[60, 300], [100, 252], [180, 236], [262, 250], [304, 282], [294, 322], [232, 346], [140, 346], [80, 332]], ramp: 'whale', edge: 22 },
      { poly: [[86, 322], [150, 332], [230, 330], [288, 310], [294, 322], [232, 346], [140, 346], [80, 332]], ramp: 'belly', edge: 14 },
      { poly: [[170, 322], [148, 366], [198, 336]], ramp: 'whale', edge: 14 },
      { poly: EP(256, 284, 6, 6, 8), ramp: 'eye', edge: 7, noise: 0 },
      { poly: [[250, 236], [238, 184], [226, 152], [252, 172], [262, 138], [272, 174], [294, 150], [282, 188], [272, 238]], ramp: 'spout', edge: 14 }
    ], { d: 30, seed: 19, deco: [{ d: 'M266,300 q16,12 32,-2', s: '#1F2A44', w: 2.2 }] }),

    // 10 ─ fox at dusk
    (function () {
      var earL = [[118, 158], [104, 66], [162, 122]], earInL = [[124, 142], [112, 88], [151, 124]], cheekL = [[112, 182], [146, 174], [170, 206], [180, 252], [146, 226]], eyeL = [[132, 170], [148, 159], [166, 167], [150, 180]];
      return polyPic('fox', 'Autumn Fox', {
        sky: ['#2F4B7C', '#3E6096', '#557BB0'], moon: ['#FFF1C1', '#FFE08A'], meadow: ['#3F5E3A', '#2F4A2D', '#22361F'], fox: ['#FF9A4D', '#F0742B', '#C9541A'], white: ['#FFF8EE', '#E6D8C6'], dark: ['#4A3428', '#22160F']
      }, [
        { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 360, noise: 0.45 },
        { poly: EP(296, 78, 34, 34, 12), ramp: 'moon', bg: BG, noise: 0.5 },
        { poly: [[0, 340], [70, 322], [150, 334], [230, 318], [300, 328], [360, 312], [360, 440], [0, 440]], ramp: 'meadow', bg: BG, mode: 'y', y0: 318, y1: 440, noise: 0.5 },
        { poly: [[226, 372], [290, 384], [334, 352], [350, 300], [340, 250], [316, 214], [288, 204], [268, 222], [290, 250], [302, 292], [286, 326], [246, 340]], ramp: 'fox', edge: 22 },
        { poly: [[316, 214], [288, 204], [268, 222], [280, 240], [300, 232], [324, 232]], ramp: 'white', edge: 9 },
        { poly: [[128, 388], [242, 388], [252, 330], [236, 268], [206, 236], [154, 236], [124, 268], [108, 330]], ramp: 'fox', edge: 22 },
        { poly: [[150, 248], [210, 248], [222, 292], [202, 342], [180, 356], [158, 342], [138, 292]], ramp: 'white', edge: 18 },
        { poly: [[143, 330], [167, 330], [170, 388], [140, 388]], ramp: 'dark', edge: 14 }, { poly: [[193, 330], [217, 330], [220, 388], [190, 388]], ramp: 'dark', edge: 14 },
        { poly: earL, ramp: 'fox', edge: 18 }, { poly: mirrorX(earL, 180), ramp: 'fox', edge: 18 },
        { poly: earInL, ramp: 'dark', edge: 14 }, { poly: mirrorX(earInL, 180), ramp: 'dark', edge: 14 },
        { poly: [[108, 150], [128, 118], [180, 106], [232, 118], [252, 150], [248, 186], [216, 226], [180, 254], [144, 226], [112, 186]], ramp: 'fox', edge: 20 },
        { poly: cheekL, ramp: 'white', edge: 15 }, { poly: mirrorX(cheekL, 180), ramp: 'white', edge: 15 },
        { poly: eyeL, ramp: 'dark', edge: 9, noise: 0 }, { poly: mirrorX(eyeL, 180), ramp: 'dark', edge: 9, noise: 0 },
        { poly: [[166, 226], [194, 226], [180, 246]], ramp: 'dark', edge: 10, noise: 0 }
      ], { d: 34, c: 62, seed: 4242, deco: [eyeDot(153, 166, 2.6), eyeDot(213, 166, 2.6), { d: 'M180,246 q-7,9 -15,5 M180,246 q7,9 15,5', s: '#22160F', w: 2.4 }] });
    })(),

    // 11 ─ butterfly garden
    (function () {
      var upL = [[176, 190], [122, 108], [62, 98], [44, 150], [80, 210], [172, 216]], loL = [[176, 214], [92, 230], [70, 290], [110, 322], [160, 292], [178, 240]];
      var regs = [
        { base: true, poly: [], ramp: 'bg', mode: 'y', y0: 0, y1: 440, noise: 0.5 },
        { poly: waveTop(380, 10, 5, 440, 20), ramp: 'grass', bg: BG, mode: 'y', y0: 370, y1: 440 },
        { poly: upL, ramp: 'up', edge: 20 }, { poly: mirrorX(upL, 180), ramp: 'up', edge: 20 },
        { poly: loL, ramp: 'lo', edge: 20 }, { poly: mirrorX(loL, 180), ramp: 'lo', edge: 20 },
        { poly: EP(104, 150, 25, 18, 10, -20), ramp: 'patch', edge: 12 }, { poly: EP(256, 150, 25, 18, 10, 20), ramp: 'patch', edge: 12 },
        { poly: EP(126, 272, 18, 16, 10), ramp: 'patch', edge: 12 }, { poly: EP(234, 272, 18, 16, 10), ramp: 'patch', edge: 12 },
        { poly: EP(70, 125, 9, 9, 8), ramp: 'white', edge: 8 }, { poly: EP(290, 125, 9, 9, 8), ramp: 'white', edge: 8 },
        { poly: EP(180, 216, 11, 62, 12), ramp: 'body', edge: 12 }
      ];
      [[60, 400], [300, 405], [180, 418]].forEach(function (c) {
        petalRing(c[0], c[1], 8, 6, 28, 7).forEach(function (p) { regs.push({ poly: p, ramp: 'white', edge: 10 }); });
        regs.push({ poly: EP(c[0], c[1], 9, 9, 8), ramp: 'center', edge: 8 });
      });
      return polyPic('butterfly', 'Butterfly Garden', {
        bg: ['#E3F4E8', '#CDEBD6', '#B5E0C3'], grass: ['#7FC46A', '#5FA84E'], up: ['#9B6BD3', '#7D4FB8', '#5F3A96'], lo: ['#FF8FB1', '#F06A95', '#D44C7A'], patch: ['#FFD166', '#F4B740'], white: ['#FFFFFF', '#EEF2F5'], body: ['#3A2E3F', '#251C29'], center: ['#FFC93C']
      }, regs, { d: 34, seed: 20, deco: [{ d: 'M176,158 q-10,-30 -26,-40 M184,158 q10,-30 26,-40', s: '#251C29', w: 2.6 }] });
    })(),

    // 12 ─ koi pond
    (function () {
      function fish(cx, cy, ang, len, body, spot) {
        var a = rad(ang), tx = cx - Math.cos(a) * len * 0.95, ty = cy - Math.sin(a) * len * 0.95, nx = -Math.sin(a), ny = Math.cos(a);
        var tail = [[f1(cx - Math.cos(a) * len * 0.7), f1(cy - Math.sin(a) * len * 0.7)], [f1(tx - Math.cos(a) * 22 + nx * 22), f1(ty - Math.sin(a) * 22 + ny * 22)], [f1(tx + Math.cos(a) * 4), f1(ty + Math.sin(a) * 4)], [f1(tx - Math.cos(a) * 22 - nx * 22), f1(ty - Math.sin(a) * 22 - ny * 22)]];
        return [
          { poly: tail, ramp: body, edge: 12 },
          { poly: EP(cx, cy, len, len * 0.42, 16, ang), ramp: body, edge: 18 },
          { poly: EP(cx - Math.cos(a) * len * 0.15 + nx * 6, cy - Math.sin(a) * len * 0.15 + ny * 6, len * 0.3, len * 0.2, 10, ang + 20), ramp: spot, edge: 10 },
          { poly: EP(cx + Math.cos(a) * len * 0.45, cy + Math.sin(a) * len * 0.45, len * 0.2, len * 0.17, 8, ang), ramp: spot, edge: 9 },
          { poly: lens(cx + nx * len * 0.3, cy + ny * len * 0.3, cx + nx * len * 0.62 - Math.cos(a) * 14, cy + ny * len * 0.62 - Math.sin(a) * 14, 8), ramp: body, edge: 9 }
        ];
      }
      var regs = [
        { base: true, poly: [], ramp: 'water', mode: 'y', y0: 0, y1: 440, noise: 0.6 },
        { poly: EP(60, 360, 50, 46, 14), ramp: 'pad', bg: BG }, { poly: EP(300, 90, 46, 42, 14), ramp: 'pad', bg: BG }, { poly: EP(320, 400, 38, 34, 12), ramp: 'pad', bg: BG }, { poly: EP(40, 70, 32, 30, 12), ramp: 'pad', bg: BG }
      ];
      petalRing(60, 360, 6, 6, 30, 9).forEach(function (p) { regs.push({ poly: p, ramp: 'lotus', edge: 10 }); });
      petalRing(300, 90, 6, 6, 28, 9).forEach(function (p) { regs.push({ poly: p, ramp: 'lotus', edge: 10 }); });
      regs = regs.concat(fish(150, 170, 35, 72, 'koiO', 'white'), fish(232, 300, -140, 68, 'white', 'koiO'));
      return polyPic('koi', 'Koi Pond', {
        water: ['#3AA5C0', '#2C8BA6', '#1F6F88'], pad: ['#6DBE6A', '#4FA14E'], lotus: ['#FFB3C7', '#F78CA8'], koiO: ['#FF8A3D', '#E8682A', '#C44F1A'], white: ['#FFFFFF', '#E8EEF2']
      }, regs, { d: 30, seed: 21, deco: [{ d: 'M200,200 a2.5,2.5 0 1 0 0.1,0 M180,268 a2.5,2.5 0 1 0 0.1,0', s: '#1E1E1E', w: 3 }] });
    })(),

    // 13 ─ mountain lake
    polyPic('lake', 'Mountain Lake', {
      sky: ['#CDE3F5', '#A9CCEB', '#86B4E0'], far: ['#8FA6C9', '#7189B3', '#566E99'], snow: ['#FFFFFF', '#E3EBF5'], near: ['#5C7A6B', '#465F52', '#33473C'], lake: ['#6FB3DE', '#4E95C6', '#3876A6'], pine: ['#2F6B4A', '#22513A'], meadow: ['#8CC56E', '#6FA855']
    }, [
      { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 260, noise: 0.45 },
      { poly: [[0, 250], [70, 140], [130, 200], [200, 90], [280, 190], [330, 130], [360, 170], [360, 280], [0, 280]], ramp: 'far', bg: BG },
      { poly: [[52, 168], [70, 140], [88, 166], [76, 162], [70, 172], [62, 162]], ramp: 'snow', edge: 10 },
      { poly: [[174, 128], [200, 90], [226, 128], [212, 122], [200, 136], [188, 122]], ramp: 'snow', edge: 10 },
      { poly: [[316, 150], [330, 130], [346, 152], [336, 148], [330, 156], [322, 148]], ramp: 'snow', edge: 10 },
      { poly: [[0, 300], [90, 210], [160, 270], [250, 200], [360, 290], [360, 310], [0, 310]], ramp: 'near', edge: 26 },
      { poly: [[0, 306], [360, 306], [360, 380], [0, 380]], ramp: 'lake', bg: BG, mode: 'y', y0: 306, y1: 380, noise: 0.6 },
      { poly: waveTop(378, 6, 5, 440, 40), ramp: 'meadow', bg: BG, mode: 'y', y0: 372, y1: 440 }
    ].concat([[34, 300, 50], [64, 306, 62], [292, 300, 56], [326, 308, 68], [96, 304, 44]].map(function (t) { return { poly: [[t[0] - 15, t[1]], [t[0], t[1] - t[2]], [t[0] + 15, t[1]]], ramp: 'pine', edge: 12 }; })), { d: 30, seed: 22 }),

    // 14 ─ lighthouse
    (function () {
      function tx(y) { return [160 - (y - 140) * (15 / 190), 200 + (y - 140) * (15 / 190)]; }
      function band(ya, yb) { var a = tx(ya), b = tx(yb); return [[f1(a[0]), ya], [f1(a[1]), ya], [f1(b[1]), yb], [f1(b[0]), yb]]; }
      return polyPic('lighthouse', 'Lighthouse Cove', {
        sky: ['#FCD9B8', '#F6B38F', '#E88E7A'], beam: ['#FFF4C4', '#FFE9A0'], sea: ['#4D7FB8', '#3A659A', '#2A4D7A'], rock: ['#8E8A85', '#6E6A66', '#55514D'], tower: ['#FFFFFF', '#E5E1DA'], red: ['#E5484D', '#C2333A'], dark: ['#3A3F4A', '#2A2E36'], lamp: ['#FFE07A', '#FFC93C']
      }, [
        { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 300, noise: 0.45 },
        { poly: [[162, 112], [10, 66], [10, 150]], ramp: 'beam', bg: BG }, { poly: [[198, 112], [350, 76], [350, 158]], ramp: 'beam', bg: BG },
        { poly: waveTop(300, 4, 6, 440, 10), ramp: 'sea', bg: BG, mode: 'y', y0: 300, y1: 440, noise: 0.55 },
        { poly: [[90, 340], [130, 318], [240, 314], [290, 340], [310, 380], [250, 396], [120, 396], [70, 380]], ramp: 'rock', edge: 22 },
        { poly: band(140, 330), ramp: 'tower', edge: 20 },
        { poly: band(176, 204), ramp: 'red', edge: 14 }, { poly: band(246, 274), ramp: 'red', edge: 14 },
        { poly: [[168, 296], [192, 296], [192, 330], [168, 330]], ramp: 'dark', edge: 10 },
        { poly: [[150, 128], [210, 128], [210, 140], [150, 140]], ramp: 'dark', edge: 10 },
        { poly: [[162, 100], [198, 100], [198, 128], [162, 128]], ramp: 'lamp', edge: 10 },
        { poly: [[154, 100], [206, 100], [180, 70]], ramp: 'red', edge: 12 }
      ], { d: 30, seed: 23, deco: [{ d: 'M60,220 q8,-8 16,0 q8,-8 16,0 M260,230 q7,-7 14,0 q7,-7 14,0', s: '#7A4E5E', w: 2.4 }] });
    })(),

    // 15 ─ tulip field
    (function () {
      function tulip(cx, y, ramp) { return { poly: [[cx - 30, y], [cx - 34, y - 40], [cx - 18, y - 56], [cx - 8, y - 38], [cx, y - 62], [cx + 8, y - 38], [cx + 18, y - 56], [cx + 34, y - 40], [cx + 30, y], [cx, y + 12]], ramp: ramp, edge: 14 }; }
      var T = [[96, 236, 'red'], [184, 196, 'pink'], [274, 244, 'yellow']], regs = [
        { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 300, noise: 0.45 },
        { poly: EP(70, 80, 46, 20, 10), ramp: 'cloud', bg: BG }, { poly: EP(290, 60, 40, 18, 10), ramp: 'cloud', bg: BG },
        { poly: waveTop(300, 10, 4, 440, 0), ramp: 'hill', bg: BG, mode: 'y', y0: 290, y1: 440 },
        { poly: waveTop(350, 8, 5, 440, 90), ramp: 'grass', bg: BG, mode: 'y', y0: 340, y1: 440 }
      ];
      T.forEach(function (t) { regs.push({ poly: [[t[0] - 6, t[1]], [t[0] + 6, t[1]], [t[0] + 6, 440], [t[0] - 6, 440]], ramp: 'stem', edge: 14 }); });
      regs.push({ poly: lens(90, 420, 50, 300, 18), ramp: 'grass', edge: 14 }, { poly: lens(190, 420, 230, 300, 18), ramp: 'grass', edge: 14 }, { poly: lens(280, 420, 330, 320, 18), ramp: 'grass', edge: 14 });
      T.forEach(function (t) { regs.push(tulip(t[0], t[1], t[2])); });
      return polyPic('tulips', 'Tulip Field', {
        sky: ['#E7F3FB', '#D2E8F7', '#BCDCF2'], cloud: ['#FFFFFF', '#F0F6FA'], hill: ['#A6D785', '#8CC56E'], grass: ['#7CB95E', '#5E9C45', '#477D35'], stem: ['#3E8A3A', '#2E6E2C'], red: ['#F2545B', '#D63C45', '#AD2731'], pink: ['#FF9EBB', '#F27BA0', '#D45E86'], yellow: ['#FFD95A', '#F4C02C', '#D9A31A']
      }, regs, { d: 28, seed: 24 });
    })(),

    // 16 ─ penguin
    polyPic('penguin', 'Penguin Pal', {
      sky: ['#DDF1FB', '#C4E6F8', '#A8DAF4'], ice: ['#F2F9FD', '#D6E9F5'], sea: ['#7FB8DE', '#5E9CCB'], snow: ['#FFFFFF', '#E6F0F7', '#CFE0EC'], black: ['#2E3440', '#20252F', '#151920'], white: ['#FFFFFF', '#E9EEF2'], orange: ['#FFA94D', '#F08A24'], scarf: ['#E5484D', '#C2333A']
    }, [
      { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 300, noise: 0.45 },
      { poly: [[0, 300], [30, 230], [80, 210], [110, 260], [130, 300]], ramp: 'ice', bg: BG }, { poly: [[240, 300], [270, 190], [320, 170], [350, 230], [360, 300]], ramp: 'ice', bg: BG },
      { poly: [[0, 296], [360, 296], [360, 336], [0, 336]], ramp: 'sea', bg: BG },
      { poly: waveTop(330, 6, 4, 440, 30), ramp: 'snow', bg: BG, mode: 'y', y0: 326, y1: 440 },
      { poly: lens(126, 210, 100, 312, 18), ramp: 'black', edge: 14 }, { poly: lens(234, 210, 260, 312, 18), ramp: 'black', edge: 14 },
      { poly: EP(180, 266, 70, 104, 18), ramp: 'black', edge: 22 },
      { poly: EP(184, 286, 46, 80, 14), ramp: 'white', edge: 18 },
      { poly: EP(180, 152, 54, 48, 14), ramp: 'black', edge: 18 },
      { poly: EP(163, 158, 15, 19, 10), ramp: 'white', edge: 10 }, { poly: EP(197, 158, 15, 19, 10), ramp: 'white', edge: 10 },
      { poly: [[170, 172], [190, 172], [180, 188]], ramp: 'orange', edge: 9 },
      { poly: [[124, 190], [236, 190], [238, 210], [122, 210]], ramp: 'scarf', edge: 14 }, { poly: [[206, 206], [226, 206], [232, 250], [212, 250]], ramp: 'scarf', edge: 12 },
      { poly: EP(158, 368, 22, 10, 10), ramp: 'orange', edge: 10 }, { poly: EP(206, 368, 22, 10, 10), ramp: 'orange', edge: 10 }
    ], { d: 28, seed: 25, deco: [{ d: 'M166,154 a3,3 0 1 0 0.1,0 M194,154 a3,3 0 1 0 0.1,0', s: '#151920', w: 4 }, { d: 'M40,60 l0,10 M35,65 l10,0 M310,50 l0,10 M305,55 l10,0 M200,30 l0,10 M195,35 l10,0', s: '#FFFFFF', w: 2.4 }] }),

    // 17 ─ sea turtle
    (function () {
      var regs = [
        { base: true, poly: [], ramp: 'sea', mode: 'y', y0: 0, y1: 440, noise: 0.55 },
        { poly: waveTop(392, 8, 5, 440, 0), ramp: 'sand', bg: BG, mode: 'y', y0: 385, y1: 440 },
        { poly: lens(40, 440, 50, 300, 14), ramp: 'weed', bg: BG }, { poly: lens(320, 440, 300, 320, 14), ramp: 'weed', bg: BG }, { poly: lens(340, 440, 350, 360, 10), ramp: 'weed', bg: BG },
        { poly: lens(124, 196, 50, 150, 22), ramp: 'skin', edge: 14 }, { poly: lens(236, 196, 310, 150, 22), ramp: 'skin', edge: 14 },
        { poly: lens(130, 270, 80, 320, 16), ramp: 'skin', edge: 12 }, { poly: lens(230, 270, 280, 320, 16), ramp: 'skin', edge: 12 },
        { poly: EP(180, 126, 26, 30, 12), ramp: 'skin', edge: 12 },
        { poly: EP(180, 222, 96, 76, 18), ramp: 'shell', edge: 22 }
      ];
      var hex = function (cx, cy, r) { var o = []; for (var k = 0; k < 6; k++) { var a = rad(-90 + k * 60); o.push([f1(cx + r * Math.cos(a)), f1(cy + r * Math.sin(a))]); } return o; };
      regs.push({ poly: hex(180, 222, 30), ramp: 'plate', edge: 14 });
      for (var k = 0; k < 6; k++) { var a = rad(-90 + k * 60 + 30); regs.push({ poly: hex(180 + 56 * Math.cos(a) * 1.15, 222 + 56 * Math.sin(a) * 0.82, 20), ramp: 'plate', edge: 12 }); }
      return polyPic('turtle', 'Sea Turtle', {
        sea: ['#4FB8D6', '#3A9EBE', '#2A80A0'], sand: ['#F2D7A6', '#E3C08A'], weed: ['#4FA36B', '#3A8655'], skin: ['#B7C77A', '#9AAE5E', '#7E9246'], shell: ['#7A9A4A', '#5F7E37', '#4A6629'], plate: ['#A9BE62', '#8DA44C']
      }, regs, { d: 28, seed: 26, deco: [{ d: 'M170,118 a2.5,2.5 0 1 0 0.1,0 M190,118 a2.5,2.5 0 1 0 0.1,0', s: '#1E1E1E', w: 3 }, { d: 'M60,90 a6,6 0 1 0 0.1,0 M76,60 a4,4 0 1 0 0.1,0 M300,100 a5,5 0 1 0 0.1,0 M286,74 a3,3 0 1 0 0.1,0', s: '#E8F7FC', w: 2 }] });
    })(),

    // 18 ─ hummingbird and hibiscus
    (function () {
      var regs = [
        { base: true, poly: [], ramp: 'bg', mode: 'y', y0: 0, y1: 440, noise: 0.5 },
        { poly: lens(330, 440, 220, 340, 40), ramp: 'leaf', bg: BG }, { poly: lens(360, 300, 260, 250, 30), ramp: 'leaf', bg: BG }, { poly: lens(0, 200, 70, 120, 26), ramp: 'leaf', bg: BG }
      ];
      petalRing(250, 320, 5, 10, 92, 38, -70).forEach(function (p) { regs.push({ poly: p, ramp: 'petal', edge: 18 }); });
      regs.push({ poly: EP(250, 320, 22, 22, 10), ramp: 'center', edge: 10 });
      regs.push(
        { poly: lens(110, 180, 60, 70, 24), ramp: 'wing', edge: 14 }, { poly: lens(126, 178, 120, 66, 20), ramp: 'wing', edge: 14 },
        { poly: [[92, 204], [40, 236], [58, 246], [44, 262], [100, 216]], ramp: 'dark', edge: 12 },
        { poly: EP(124, 196, 46, 26, 14, -20), ramp: 'bird', edge: 16 },
        { poly: EP(170, 172, 22, 20, 12), ramp: 'bird', edge: 12 },
        { poly: EP(160, 192, 14, 10, 8, -20), ramp: 'throat', edge: 9 }
      );
      return polyPic('hummingbird', 'Hummingbird', {
        bg: ['#FFF4E6', '#FFE6CC', '#FFD8B3'], leaf: ['#5FB37F', '#3F9A66'], petal: ['#FF5C8A', '#E63E6D', '#C22A55'], center: ['#FFD166', '#F4B740'], wing: ['#9FE0CB', '#76CBB0'], dark: ['#1F6B52', '#174F3D'], bird: ['#3FBF8F', '#2A9E72', '#1F7D59'], throat: ['#FF4D6D', '#D9304F']
      }, regs, { d: 27, seed: 27, deco: [{ d: 'M188,174 L240,196', s: '#2A2A2A', w: 3 }, { d: 'M176,166 a2.5,2.5 0 1 0 0.1,0', s: '#1E1E1E', w: 3.4 }, { d: 'M250,320 L236,280 M250,320 L262,282 M250,320 L248,276', s: '#FFD166', w: 2.4 }] });
    })(),

    // 19 ─ forest deer
    (function () {
      var regs = [
        { base: true, poly: [], ramp: 'bg', mode: 'y', y0: 0, y1: 360, noise: 0.45 }
      ];
      [[30, 360, 230], [90, 360, 170], [300, 360, 210], [340, 360, 150], [250, 360, 130]].forEach(function (t) { regs.push({ poly: [[t[0] - 36, t[1]], [t[0], t[1] - t[2]], [t[0] + 36, t[1]]], ramp: 'tree', bg: BG }); });
      regs.push({ poly: waveTop(358, 6, 4, 440, 0), ramp: 'ground', bg: BG, mode: 'y', y0: 350, y1: 440 });
      [[150, 400], [176, 404], [236, 400], [262, 404]].forEach(function (l) { regs.push({ poly: [[l[0] - 7, 300], [l[0] + 7, 300], [l[0] + 6, l[1]], [l[0] - 6, l[1]]], ramp: 'deer', edge: 14 }); });
      regs.push(
        { poly: [[284, 270], [306, 250], [300, 276]], ramp: 'deer', edge: 10 },
        { poly: EP(206, 290, 88, 46, 16), ramp: 'deer', edge: 22 },
        { poly: EP(206, 308, 60, 20, 12), ramp: 'belly', edge: 14 },
        { poly: [[120, 290], [150, 270], [146, 180], [118, 190]], ramp: 'deer', edge: 16 },
        { poly: [[136, 136], [124, 92], [110, 104], [130, 140], [122, 70], [108, 74], [116, 112], [100, 84], [92, 92]], ramp: 'antler', edge: 10 },
        { poly: [[154, 136], [172, 94], [184, 104], [162, 142], [184, 72], [196, 78], [182, 112], [204, 88], [210, 96]], ramp: 'antler', edge: 10 },
        { poly: [[110, 156], [80, 140], [96, 166]], ramp: 'deer', edge: 10 }, { poly: [[170, 152], [200, 136], [188, 164]], ramp: 'deer', edge: 10 },
        { poly: EP(140, 176, 30, 26, 12, -10), ramp: 'deer', edge: 14 },
        { poly: EP(124, 194, 16, 11, 8, -20), ramp: 'belly', edge: 10 }
      );
      [[220, 262], [244, 270], [196, 268], [260, 288], [232, 286]].forEach(function (p) { regs.push({ poly: EP(p[0], p[1], 7, 6, 7), ramp: 'spot', edge: 8 }); });
      return polyPic('deer', 'Forest Deer', {
        bg: ['#E3EFDA', '#CFE3C3', '#B8D5A9'], tree: ['#7FAE7A', '#6A9A66', '#55855A'], ground: ['#9CC07A', '#7FA45F'], deer: ['#C68A52', '#A86F3D', '#87552C'], belly: ['#EDD3AE', '#DABD93'], antler: ['#E6D2B0', '#CDB58E'], spot: ['#FFF4E6']
      }, regs, { d: 30, seed: 28, deco: [{ d: 'M136,170 a2.5,2.5 0 1 0 0.1,0', s: '#1E1E1E', w: 3.4 }, { d: 'M112,198 a3,3 0 1 0 0.1,0', s: '#3A2A1E', w: 4 }] });
    })(),

    // 20 ─ sunflower
    (function () {
      var regs = [
        { base: true, poly: [], ramp: 'sky', mode: 'y', y0: 0, y1: 360, noise: 0.45 },
        { poly: EP(60, 70, 44, 18, 10), ramp: 'cloud', bg: BG }, { poly: EP(310, 90, 40, 17, 10), ramp: 'cloud', bg: BG },
        { poly: waveTop(360, 10, 4, 440, 60), ramp: 'grass', bg: BG, mode: 'y', y0: 350, y1: 440 },
        { poly: [[172, 250], [188, 250], [190, 440], [170, 440]], ramp: 'stem', edge: 16 },
        { poly: lens(180, 360, 90, 300, 26), ramp: 'stem', edge: 16 }, { poly: lens(180, 330, 280, 290, 24), ramp: 'stem', edge: 16 }
      ];
      petalRing(180, 186, 14, 50, 132, 20, -90).forEach(function (p) { regs.push({ poly: p, ramp: 'petalB', edge: 16 }); });
      petalRing(180, 186, 14, 46, 118, 18, -77).forEach(function (p) { regs.push({ poly: p, ramp: 'petal', edge: 16 }); });
      regs.push({ poly: EP(180, 186, 62, 62, 18), ramp: 'seed', edge: 16 });
      regs.push({ poly: EP(180, 186, 30, 30, 12), ramp: 'core', edge: 12 });
      return polyPic('sunflower', 'Sunflower', {
        sky: ['#BFE3F8', '#A3D5F3', '#86C6EE'], cloud: ['#FFFFFF', '#EEF6FB'], grass: ['#7DBA5A', '#5F9B43', '#487C32'], stem: ['#4E9A3A', '#3A7A2A'], petalB: ['#F8A616', '#E08A0C'], petal: ['#FFD43B', '#FFC21A', '#F5AA0A'], seed: ['#7A4A24', '#5C3519', '#3F2410'], core: ['#4A2C14', '#2F1B0C']
      }, regs, { d: 28, seed: 29 });
    })()
  ];

  // level order: fewest pieces first (the player grows into the big ones)
  var ORDER = PICS.slice().sort(function (a, b) { return a.rg.length - b.rg.length || (a.id < b.id ? -1 : 1); });

  return { PICS: PICS, ORDER: ORDER, SAMPLES: [], polyArt: polyArt, version: 1 };
});
