/* Kitty Sudoku — puzzle core: seeded generator (unique solution, graded difficulty) + solver.
   Plain ES5, no dependencies. Loaded by index.html in the browser and required by robot.js in node, so the robot
   verifies every level with the exact code the game runs. © 2026 Soulfulfill / Treasurefield Studio. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.SudokuCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ---------- seeded random (xorshift32; same seed = same board everywhere) ----------
  function Rng(seed) { seed = seed >>> 0; this.x = seed === 0 ? 0x9E3779B9 : seed; for (var i = 0; i < 8; i++) this.next(); }
  Rng.prototype.next = function () { var x = this.x; x = (x ^ (x << 13)) >>> 0; x = (x ^ (x >>> 17)) >>> 0; x = (x ^ (x << 5)) >>> 0; this.x = x; return x; };
  Rng.prototype.nextDouble = function () { return this.next() / 4294967296; };
  Rng.prototype.nextInt = function (n) { return Math.floor(this.nextDouble() * n); };
  Rng.prototype.shuffle = function (a) { for (var i = a.length - 1; i > 0; i--) { var j = this.nextInt(i + 1); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  Rng.seedOf = function (s) { var h = 7; for (var i = 0; i < s.length; i++) h = ((h * 31) + s.charCodeAt(i)) >>> 0; return h; };

  // ---------- geometry ----------
  // boxes: 4×4 → 2×2, 6×6 → 2 rows × 3 columns, 9×9 → 3×3
  function boxDims(n) { return n === 4 ? [2, 2] : n === 6 ? [2, 3] : [3, 3]; }
  function boxOf(n, r, c) { var d = boxDims(n); return Math.floor(r / d[0]) * (n / d[1]) + Math.floor(c / d[1]); }
  var PEERS = {};
  function peers(n) {
    if (PEERS[n]) return PEERS[n];
    var out = [], d = boxDims(n);
    for (var i = 0; i < n * n; i++) {
      var r = Math.floor(i / n), c = i % n, br = Math.floor(r / d[0]) * d[0], bc = Math.floor(c / d[1]) * d[1], set = {}, list = [];
      for (var k = 0; k < n; k++) { set[r * n + k] = 1; set[k * n + c] = 1; }
      for (var rr = br; rr < br + d[0]; rr++) for (var cc = bc; cc < bc + d[1]; cc++) set[rr * n + cc] = 1;
      delete set[i];
      for (var key in set) list.push(parseInt(key, 10));
      out.push(list);
    }
    PEERS[n] = out;
    return out;
  }

  // ---------- full solution ----------
  function fullSolution(n, rng) {
    var g = [], P = peers(n);
    for (var i = 0; i < n * n; i++) g.push(0);
    function bt(i) {
      if (i === n * n) return true;
      var used = {}, j;
      for (j = 0; j < P[i].length; j++) used[g[P[i][j]]] = 1;
      var cand = [];
      for (var v = 1; v <= n; v++) if (!used[v]) cand.push(v);
      rng.shuffle(cand);
      for (j = 0; j < cand.length; j++) { g[i] = cand[j]; if (bt(i + 1)) return true; }
      g[i] = 0;
      return false;
    }
    bt(0);
    return g;
  }

  // ---------- solution counter (backtracking, fewest-candidates-first), stops at cap ----------
  function candidatesOf(g, n, i, P) {
    var used = {}, out = [];
    for (var j = 0; j < P[i].length; j++) used[g[P[i][j]]] = 1;
    for (var v = 1; v <= n; v++) if (!used[v]) out.push(v);
    return out;
  }
  function countSolutions(grid, n, cap) {
    var g = grid.slice(), P = peers(n), count = 0;
    function bt() {
      if (count >= cap) return;
      var best = -1, bestC = null;
      for (var i = 0; i < n * n; i++) {
        if (g[i]) continue;
        var c = candidatesOf(g, n, i, P);
        if (c.length === 0) return;
        if (bestC === null || c.length < bestC.length) { best = i; bestC = c; if (c.length === 1) break; }
      }
      if (best < 0) { count++; return; }
      for (var k = 0; k < bestC.length; k++) { g[best] = bestC[k]; bt(); if (count >= cap) return; }
      g[best] = 0;
    }
    bt();
    return count;
  }

  // ---------- human-style grader: naked singles, then hidden singles; anything beyond = 'hard' ----------
  function unitsOf(n) {
    var d = boxDims(n), units = [], r, c;
    for (r = 0; r < n; r++) { var row = []; for (c = 0; c < n; c++) row.push(r * n + c); units.push(row); }
    for (c = 0; c < n; c++) { var col = []; for (r = 0; r < n; r++) col.push(r * n + c); units.push(col); }
    for (var br = 0; br < n; br += d[0]) for (var bc = 0; bc < n; bc += d[1]) {
      var box = [];
      for (r = br; r < br + d[0]; r++) for (c = bc; c < bc + d[1]; c++) box.push(r * n + c);
      units.push(box);
    }
    return units;
  }
  function grade(grid, n) {
    var g = grid.slice(), P = peers(n), units = unitsOf(n), usedHidden = false, progress = true, filled = 0, i;
    for (i = 0; i < g.length; i++) if (g[i]) filled++;
    while (progress && filled < n * n) {
      progress = false;
      // naked singles
      for (i = 0; i < n * n; i++) {
        if (g[i]) continue;
        var c = candidatesOf(g, n, i, P);
        if (c.length === 1) { g[i] = c[0]; filled++; progress = true; }
      }
      if (progress) continue;
      // hidden singles: a value with exactly one home in a unit
      for (var u = 0; u < units.length && !progress; u++) {
        var unit = units[u];
        for (var v = 1; v <= n; v++) {
          var spot = -1, cnt = 0, present = false;
          for (var k = 0; k < unit.length; k++) {
            var cell = unit[k];
            if (g[cell] === v) { present = true; break; }
            if (!g[cell] && candidatesOf(g, n, cell, P).indexOf(v) >= 0) { cnt++; spot = cell; }
          }
          if (present || cnt !== 1) continue;
          g[spot] = v; filled++; progress = true; usedHidden = true;
        }
      }
    }
    if (filled < n * n) return 'hard';
    return usedHidden ? 'medium' : 'easy';
  }

  // ---------- generator: dig symmetric pairs out of a full solution while the puzzle stays unique ----------
  // target givens per size and difficulty (standard ranges: 9×9 easy ≈ 38–42, medium ≈ 30–34, hard ≈ 24–28)
  var TARGETS = { 4: { easy: 8, medium: 6, hard: 5 }, 6: { easy: 20, medium: 15, hard: 12 }, 9: { easy: 40, medium: 32, hard: 27 } };
  function generate(n, difficulty, seed) {
    var rng = new Rng(seed), target = (TARGETS[n] || TARGETS[9])[difficulty] || TARGETS[n].easy, fallback = null;
    for (var attempt = 0; attempt < 40; attempt++) {
      var sol = fullSolution(n, rng), g = sol.slice(), givens = n * n;
      var order = [];
      for (var i = 0; i < n * n; i++) order.push(i);
      rng.shuffle(order);
      var seen = {};
      for (var k = 0; k < order.length && givens > target; k++) {
        var a = order[k], b = n * n - 1 - a;      // 180° partner (the classic symmetric look)
        if (seen[a]) continue;
        seen[a] = seen[b] = 1;
        var va = g[a], vb = g[b];
        g[a] = 0; if (b !== a) g[b] = 0;
        if (countSolutions(g, n, 2) === 1) givens -= (b === a ? 1 : 2);
        else { g[a] = va; g[b] = vb; }
      }
      var gr = grade(g, n);
      var ok = difficulty === 'easy' ? gr === 'easy' : difficulty === 'medium' ? gr !== 'hard' : true;
      if (difficulty === 'medium' && gr === 'easy' && attempt < 20) ok = false;  // medium should need a hidden single somewhere
      if (difficulty === 'hard' && gr === 'easy' && attempt < 20) ok = false;    // hard should at least need hidden singles
      var puzzle = { n: n, difficulty: difficulty, givens: g, solution: sol, grade: gr, clues: givens, unique: true, attempts: attempt + 1 };
      if (ok) return puzzle;
      if (!fallback || (difficulty === 'easy' && gr === 'medium' && fallback.grade === 'hard')) fallback = puzzle;
    }
    return fallback;   // never reached for levels 1..300 and dailies 2026–2027 (robot verifies); still a valid unique puzzle
  }

  // ---------- levels: the ladder is 9×9 only (player 11-08: the first board must look like the sudoku everyone knows) ----------
  var MAX_LEVEL = 300;
  function levelSpec(level) {
    if (level <= 100) return { n: 9, difficulty: 'easy' };
    if (level <= 200) return { n: 9, difficulty: 'medium' };
    return { n: 9, difficulty: 'hard' };
  }
  function genLevel(level) {
    var s = levelSpec(level), p = generate(s.n, s.difficulty, Rng.seedOf('kitty-sudoku-level-' + level));
    p.level = level;
    return p;
  }
  // small boards: 4×4 and 6×6, outside the ladder, any order (All levels → "Small boards")
  var MAX_SMALL = 25;
  function smallSpec(i) {
    if (i <= 3) return { n: 4, difficulty: 'easy' };
    if (i <= 5) return { n: 4, difficulty: 'medium' };
    if (i <= 15) return { n: 6, difficulty: 'easy' };
    if (i <= 20) return { n: 6, difficulty: 'medium' };
    return { n: 6, difficulty: 'hard' };
  }
  function genSmall(i) {
    var s = smallSpec(i), p = generate(s.n, s.difficulty, Rng.seedOf('kitty-sudoku-small-' + i));
    p.small = i;
    return p;
  }
  // daily: 6×6 medium, same board for everyone on the same KST day
  function genDaily(dayKey) { var p = generate(6, 'medium', Rng.seedOf('kitty-sudoku-daily-' + dayKey)); p.day = dayKey; return p; }

  return { Rng: Rng, boxDims: boxDims, boxOf: boxOf, peers: peers, unitsOf: unitsOf, fullSolution: fullSolution, countSolutions: countSolutions, grade: grade, generate: generate, levelSpec: levelSpec, genLevel: genLevel, smallSpec: smallSpec, genSmall: genSmall, genDaily: genDaily, MAX_LEVEL: MAX_LEVEL, MAX_SMALL: MAX_SMALL, TARGETS: TARGETS };
});
