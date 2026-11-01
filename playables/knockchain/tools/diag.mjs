import { LEVELS } from '../src/levels.js';
import { Sim } from '../src/physics.js';
const L = LEVELS.find(l => l.id === +process.argv[2]);
const dx = +process.argv[3], dy = +process.argv[4];
const sim = new Sim(L); sim.shoot(dx, dy);
let last = 0;
while (sim.time < 8) {
  sim.step();
  for (const e of sim.events) if (e.type !== 'hit' || e.strength > 0.6) console.log(sim.time.toFixed(2), e.type, e.mats ? e.mats.join('+') + ' ' + e.strength.toFixed(2) : e.id || e.by || '');
  sim.events.length = 0;
  if (sim.time - last >= 1) { last = sim.time; const s = sim.snapshot(); console.log('t=' + sim.time.toFixed(1), s.bodies.filter(b => /d\d|stone|plank/.test(b.id)).map(b => `${b.id}(${b.x.toFixed(2)},${b.y.toFixed(2)},${(b.angle * 57.3).toFixed(0)}°)`).join(' '), 'ball', s.ball ? `${s.ball.x.toFixed(2)},${s.ball.y.toFixed(2)}` : '-'); }
  if (sim.pressed) { console.log('WIN at', sim.time.toFixed(2)); break; }
}
