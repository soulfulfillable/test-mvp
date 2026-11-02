// Brute-force level solver: every pull angle × strength → does the level clear? Writes qa/solutions.json (one proven
// solution per level + success %) that the robot replays with a real touch drag. Run: node tools/solve.js [level]
import fs from 'node:fs';
import { Sim } from '../src/physics.js';
import { LEVELS, MAX_PULL } from '../src/levels.js';

const ANGLES = []; for (let a = 10; a <= 85; a += 2.5) ANGLES.push(a);
const POWERS = []; for (let p = 0.3; p <= 1.0001; p += 0.05) POWERS.push(+p.toFixed(2));
const pull = (deg, pow) => { const r = (deg * Math.PI) / 180, L = pow * MAX_PULL; return { dx: +(Math.cos(r) * L).toFixed(4), dy: +(Math.sin(r) * L).toFixed(4) }; };

function shot(sim, p) { sim.shoot(p.dx, p.dy); const popsBefore = sim.popsDone; sim.events.length = 0; let ph = sim.resolve(); if (ph === 'aim') { sim.run(3); if (sim.phase === 'won') ph = 'won'; } const pop = sim.events.find((e) => e.type === 'pop'); const down = sim.events.find((e) => e.type === 'down');
  const g = sim.level.gaps[0]; const inGap = pop && pop.x >= g.x && pop.x <= g.x + g.w && pop.y >= g.y - 0.2 && pop.y <= g.y + g.h;
  return { ph, popped: sim.popsDone > popsBefore, downBeforePop: !!down && (!pop || down.t < pop.t), inGap: !!inGap }; }

function solveSingle(li) {
  const rows = []; let direct = 0, ok = 0;
  for (const a of ANGLES) for (const p of POWERS) {
    const s = new Sim(li); const v = pull(a, p); const r = shot(s, v);
    if (r.ph === 'won') { ok++; if (r.downBeforePop) direct++; }
    rows.push({ a, p, ...v, ph: r.ph, direct: r.downBeforePop, inGap: r.inGap, t: +s.time.toFixed(2) });
  }
  return { rows, ok, direct, total: rows.length };
}

const only = process.argv[2] !== undefined ? [+process.argv[2]] : LEVELS.map((_, i) => i);
const out = fs.existsSync('qa/solutions.json') ? JSON.parse(fs.readFileSync('qa/solutions.json', 'utf8')) : [];
for (const li of only) {
  const L = LEVELS[li]; const t0 = Date.now();
  if (li !== 4) {
    const r = solveSingle(li);
    const wins = r.rows.filter((x) => x.ph === 'won' && !x.direct && x.inGap).length ? r.rows.filter((x) => x.ph === 'won' && !x.direct && x.inGap) : r.rows.filter((x) => x.ph === 'won' && !x.direct);
    // prefer a solution in the middle of the largest cluster: pick the win with the most winning neighbours
    const key = (x) => x.a + '/' + x.p; const set = new Set(wins.map(key));
    let best = null, bestN = -1;
    for (const w of wins) { let n = 0; for (const da of [-2.5, 0, 2.5]) for (const dp of [-0.05, 0, 0.05]) if (set.has((w.a + da) + '/' + (+(w.p + dp).toFixed(2)))) n++; if (n > bestN) { bestN = n; best = w; } }
    const gap = r.rows.filter((x) => x.inGap); const gapWin = gap.filter((x) => x.ph === 'won').length;
    const map = ANGLES.map((a) => POWERS.map((p) => { const x = r.rows.find((y) => y.a === a && y.p === p); return x.ph === 'won' ? (x.direct ? 'D' : '#') : (x.inGap ? 'g' : '.'); }).join('')).join('\n');
    console.log(`L${li + 1} ${L.name}: ${r.ok}/${r.total} win (${(100 * r.ok / r.total).toFixed(1)}%), ${r.direct} by direct hit (no pop), pops in gap ${gap.length} of which won ${gapWin}, best ${JSON.stringify(best)} neighbours ${bestN}  [${Date.now() - t0} ms]\n${map}`);
    out[li] = { level: li, name: L.name, winPct: +(100 * r.ok / r.total).toFixed(1), directPct: +(100 * r.direct / r.total).toFixed(1), gapShots: gap.length, gapWins: gapWin, solution: best ? [{ dx: best.dx, dy: best.dy }] : null };
  } else {
    // two-stage: first shots that topple the door column (col1) without winning, then a full second sweep from the best few
    const firsts = [];
    for (const a of ANGLES) for (const p of POWERS) {
      const s = new Sim(li); const v = pull(a, p); const r = shot(s, v);
      if (r.ph !== 'aim') { if (r.ph === 'won') firsts.push({ a, p, ...v, oneShot: true }); continue; }
      const c1 = s.bodies.get('col1'); const q = c1.getPosition();
      const fallen = (Math.abs(c1.getAngle()) > 1.2 || q.y < 0.45) && q.x < 1.9; // fell LEFT, clear of the tunnel mouth
      firsts.push({ a, p, ...v, fallen, cx: +q.x.toFixed(2) });
    }
    const oneShot = firsts.filter((f) => f.oneShot).length;
    const opened = firsts.filter((f) => f.fallen);
    console.log(`L5 first shots: ${firsts.length} tried, ${oneShot} won in one shot, ${opened.length} toppled the door column`);
    // pick first shots spread over the opened set (every k-th) so we see how robust stage 2 is
    const picks = opened.filter((_, i) => i % Math.max(1, Math.floor(opened.length / 5)) === 0).slice(0, 5);
    let best = null;
    for (const f of picks) {
      let ok = 0, total = 0, pick = null, pickN = -1; const wins = new Set();
      for (const a of ANGLES) for (const p of POWERS) {
        const s = new Sim(li); s.shoot(f.dx, f.dy); s.resolve(); const v = pull(a, p); const r = shot(s, v); total++;
        if (r.ph === 'won') { ok++; wins.add(a + '/' + p); }
      }
      for (const w of wins) { const [a, p] = w.split('/').map(Number); let n = 0; for (const da of [-2.5, 0, 2.5]) for (const dp of [-0.05, 0, 0.05]) if (wins.has((a + da) + '/' + (+(p + dp).toFixed(2)))) n++; if (n > pickN) { pickN = n; pick = pull(a, p); } }
      console.log(`  first ${JSON.stringify({ a: f.a, p: f.p, cx: f.cx })} → second-shot wins ${ok}/${total} (${(100 * ok / total).toFixed(1)}%)`);
      if (pick && (!best || ok > best.ok)) best = { ok, total, first: { dx: f.dx, dy: f.dy }, second: pick };
    }
    out[li] = { level: li, name: L.name, oneShotPct: +(100 * oneShot / firsts.length).toFixed(1), openedPct: +(100 * opened.length / firsts.length).toFixed(1), secondWinPct: best ? +(100 * best.ok / best.total).toFixed(1) : 0, solution: best ? [best.first, best.second] : null };
    console.log(`L5 best ${JSON.stringify(out[li])} [${Date.now() - t0} ms]`);
  }
}
fs.mkdirSync('qa', { recursive: true });
fs.writeFileSync('qa/solutions.json', JSON.stringify(out, null, 1));
