// Knock Chain — brute-force shot solver: proves every level is clearable with one ball and prints the launch
// vectors that win (so levels.js `solution` can be set and the robot can replay it).
// Usage: node playables/knockchain/tools/solve.js [levelId]
import { LEVELS, MAX_PULL } from '../src/levels.js';
import { playShot } from '../src/physics.js';

const only = process.argv[2] ? +process.argv[2] : null;
for (const L of LEVELS) {
  if (only && L.id !== only) continue;
  const wins = [];
  let tried = 0;
  for (let ang = 5; ang <= 85; ang += 2.5) {
    for (let pull = 0.3; pull <= MAX_PULL + 1e-9; pull += 0.05) {
      const dx = Math.cos(ang * Math.PI / 180) * pull, dy = Math.sin(ang * Math.PI / 180) * pull;
      tried++;
      const r = playShot(L, dx, dy);
      if (r.win) wins.push({ ang, pull, dx: +dx.toFixed(3), dy: +dy.toFixed(3), t: +r.t.toFixed(2) });
    }
  }
  const sol = playShot(L, L.solution.dx, L.solution.dy);
  console.log(`Level ${L.id}: ${wins.length}/${tried} shots win (${(100 * wins.length / tried).toFixed(1)}%). levels.js solution (${L.solution.dx}, ${L.solution.dy}) → ${sol.win ? 'WIN' : 'miss'} in ${sol.t.toFixed(2)}s`);
  if (wins.length) {
    // the most "central" win: median angle/pull among wins, so a slightly-off replay still wins
    const byAng = {}; for (const w of wins) (byAng[w.ang] ||= []).push(w);
    const best = Object.entries(byAng).sort((a, b) => b[1].length - a[1].length)[0];
    const mid = best[1][Math.floor(best[1].length / 2)];
    console.log(`  widest angle ${best[0]}° (${best[1].length} pulls win) → suggested solution dx=${mid.dx} dy=${mid.dy}`);
    console.log('  sample wins:', wins.slice(0, 6).map(w => `${w.ang}°/${w.pull.toFixed(2)}`).join(' '));
  } else console.log('  NO SOLUTION — redesign this level');
}
