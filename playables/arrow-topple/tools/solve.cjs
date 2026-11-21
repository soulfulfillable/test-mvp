// Solver: fires every angle × power once (no drawing) and reports how forgiving the level is.
// Run: NODE_PATH=<dir with planck> node playables/arrow-topple/tools/solve.cjs
const path = require('path');
const { Sim, C } = require(path.join(__dirname, '../../../docs/arrow-topple/sim.js'));
function run(shots, maxT = 14) {
  const s = new Sim(); let i = 0, t = 0;
  while (s.state === 'play' && t < maxT) {
    if (s.canFire() && i < shots.length) { s.fire(shots[i][0], shots[i][1]); i++; }
    if (i >= shots.length && !s.flying && shots.length < C.ARROWS && s.time - (s.lastShotEnd ?? (s.lastShotEnd = s.time)) > 5) break;
    s.step(); t += C.DT;
  }
  const down = s.wolves.filter(w => w.down).length;
  const hitTower = !!s.touched;
  return { state: s.state, down, hitTower, fp: s.fingerprint(), time: s.time };
}
// rest check
{ const s = new Sim(); for (let i = 0; i < 1200; i++) s.step();
  const moved = s.items.map(it => { const p = it.body.getPosition(); return Math.hypot(p.x - it.x0, p.y - it.y0); });
  console.log('rest 10s max drift', Math.max(...moved).toFixed(4), 'state', s.state); }
const grid = []; let rows = [];
for (let deg = 0; deg <= 80; deg += 2) { let row = '';
  for (let p = 0.1; p <= 1.0001; p += 0.05) {
    const r = run([[deg * Math.PI / 180, p]]); grid.push({ deg, p, ...r });
    row += r.state === 'won' ? 'W' : r.down ? String(r.down) : r.hitTower ? '.' : ' ';
  } rows.push(String(deg).padStart(2) + '° ' + row); }
console.log('power 0.1 → 1.0 (W = one arrow wins, 1 = one wolf down, . = touched tower, blank = miss)');
console.log(rows.reverse().join('\n'));
const tower = grid.filter(g => g.hitTower), win = grid.filter(g => g.state === 'won'), one = grid.filter(g => g.down >= 1);
console.log(`shots ${grid.length} · touch tower ${tower.length} · one-arrow win ${win.length} (${(100 * win.length / grid.length).toFixed(1)}% of all, ${(100 * win.length / tower.length).toFixed(1)}% of tower hits) · ≥1 wolf ${one.length}`);
// sloppy player: 3 arrows picked from "touches the tower" aims with a fixed pseudo-random sequence
let seed = 12345; const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
let w3 = 0, N = 200;
for (let k = 0; k < N; k++) { const sh = [0, 0, 0].map(() => { const g = tower[Math.floor(rnd() * tower.length)]; return [g.deg * Math.PI / 180, g.p]; }); if (run(sh, 30).state === 'won') w3++; }
console.log(`3 random tower-touching arrows win ${w3}/${N}`);
// same aim 3 times
let same = 0; for (const g of tower) if (run([0, 0, 0].map(() => [g.deg * Math.PI / 180, g.p]), 30).state === 'won') same++;
console.log(`same aim ×3 wins ${same}/${tower.length}`);
const a = run([[0.5, 0.7]]), b = run([[0.5, 0.7]]); console.log('deterministic', a.fp === b.fp);
const best = win.map(g => ({ ...g, n: win.filter(o => Math.abs(o.deg - g.deg) <= 4 && Math.abs(o.p - g.p) <= 0.1001).length })).sort((x, y) => y.n - x.n)[0];
console.log('most forgiving one-arrow aim', best && { deg: best.deg, p: +best.p.toFixed(2), neighbours: best.n });
