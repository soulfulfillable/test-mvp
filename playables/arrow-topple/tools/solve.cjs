// Solver: for every level, fires every angle × power once (no drawing), reports how forgiving the level is,
// and writes one known-good solution per level to qa/solutions.json for the robot.
// Run: NODE_PATH=<dir with planck> node playables/arrow-topple/tools/solve.cjs
const path = require('path'), fs = require('fs');
const { Sim, C, LEVELS } = require(path.join(__dirname, '../../../docs/arrow-topple/sim.js'));
const R = d => d * Math.PI / 180;
function run(level, shots, maxT = 40) {       // next arrow only when everything has come to rest (same rule the robot uses)
  const s = new Sim(level); let i = 0, t = 0;
  while (s.state === 'play' && t < maxT) {
    if (i < shots.length && s.canFire() && (i === 0 || s.asleep())) { s.fire(shots[i][0], shots[i][1]); i++; }
    else if (i >= shots.length && s.asleep()) break;
    s.step(); t += C.DT;
  }
  return { state: s.state, down: s.wolves.filter(w => w.down).length, touched: !!s.touched, fp: s.fingerprint() };
}
const solutions = [];
LEVELS.forEach((lv, li) => {
  { const s = new Sim(li); for (let i = 0; i < 1200; i++) s.step();
    const drift = Math.max(...s.items.map(it => { const p = it.body.getPosition(); return Math.hypot(p.x - it.x0, p.y - it.y0); }));
    console.log(`\n=== level ${li + 1}: ${s.wolves.length} wolves · rest drift ${drift.toFixed(4)} · ${s.state}`); }
  const grid = [], rows = [];
  for (let deg = 0; deg <= 80; deg += 2) { let row = '';
    for (let p = 0.1; p <= 1.0001; p += 0.05) { const r = run(li, [[R(deg), p]]); grid.push({ deg, p, ...r }); row += r.state === 'won' ? 'W' : r.down ? String(r.down) : r.touched ? '.' : ' '; }
    rows.push(String(deg).padStart(2) + '° ' + row); }
  console.log(rows.reverse().join('\n'));
  const tower = grid.filter(g => g.touched), win = grid.filter(g => g.state === 'won'), one = grid.filter(g => g.down >= 1);
  console.log(`shots ${grid.length} · touch ${tower.length} · one-arrow win ${win.length} (${(100 * win.length / grid.length).toFixed(1)}%) · ≥1 wolf ${one.length} (${(100 * one.length / grid.length).toFixed(1)}%)`);
  let seed = 12345 + li; const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  let w3 = 0; const N = 120;
  for (let k = 0; k < N; k++) { const sh = [0, 0, 0].map(() => { const g = tower[Math.floor(rnd() * tower.length)]; return [R(g.deg), g.p]; }); if (run(li, sh).state === 'won') w3++; }
  console.log(`3 random tower-touching arrows win ${w3}/${N}`);
  const nb = (set, g) => set.filter(o => Math.abs(o.deg - g.deg) <= 4 && Math.abs(o.p - g.p) <= 0.1001).length;
  let sol = null;
  if (win.length) { const b = win.map(g => ({ g, n: nb(win, g) })).sort((x, y) => y.n - x.n)[0]; sol = { shots: [[R(b.g.deg), +b.g.p.toFixed(2)]], neighbours: b.n }; }
  else { const firsts = one.map(g => ({ g, n: nb(one, g) })).sort((x, y) => y.g.down - x.g.down || y.n - x.n).slice(0, 6);
    outer: for (const f of firsts) for (const g2 of tower) { const sh = [[R(f.g.deg), f.g.p], [R(g2.deg), g2.p]]; if (run(li, sh).state === 'won') { sol = { shots: sh.map(x => [x[0], +x[1].toFixed(2)]) }; break outer; } } }
  console.log('solution', sol && JSON.stringify(sol.shots.map(x => [Math.round(x[0] * 180 / Math.PI) + '°', x[1]])), sol && sol.neighbours ? 'neighbours ' + sol.neighbours : '');
  if (sol) { const a = run(li, sol.shots), b = run(li, sol.shots); console.log('replay wins', a.state === 'won', '· deterministic', a.fp === b.fp); }
  solutions.push({ level: li + 1, oneArrowPct: +(100 * win.length / grid.length).toFixed(1), anyWolfPct: +(100 * one.length / grid.length).toFixed(1), random3: `${w3}/${N}`, shots: sol ? sol.shots : null });
});
fs.writeFileSync(path.join(__dirname, '../qa/solutions.json'), JSON.stringify(solutions, null, 1));
