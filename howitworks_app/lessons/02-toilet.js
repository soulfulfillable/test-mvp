{
/* 2. Flush toilet */
const CAV = 'M46,122C50,168 80,200 112,208L130,210C146,204 160,188 168,178C172,172 178,170 180,178L180,240L196,240L196,166C196,148 176,146 168,158L148,188C145,193 138,192 140,184C150,164 172,146 182,122Z';
const TRAP = 'M124,209L130,210C146,204 160,188 168,178C172,172 178,170 180,178L180,240L196,240L196,166C196,148 176,146 168,158L148,188C145,192 136,198 124,209Z';
LESSONS.push({
  key: 'toilet', title: 'Flush Toilet', cat: 'Bathroom', mins: 3, vb: [360, 252],
  summary: 'The handle dumps a tank of water into the bowl so fast that the curved pipe below fills and becomes a siphon — it sucks the bowl empty. Then a float valve refills the tank.',
  parts: [
    { n: 1, name: 'Handle & chain', at: [204, 29], num: [184, 16], desc: 'Pushing the handle tips a lever inside the tank, and the chain pulls the flapper up.' },
    { n: 2, name: 'Flapper', at: [246, 106], num: [228, 76], desc: 'A rubber seal over the hole in the bottom of the tank. Lift it, and the tank empties into the bowl in a few seconds.' },
    { n: 3, name: 'Fill valve & float', at: [310, 50], num: [340, 62], desc: 'When the water drops, the float drops and opens the valve. As the tank refills, the float rises and shuts the water off.' },
    { n: 4, name: 'Overflow tube', at: [270, 80], num: [284, 90], desc: 'If the fill valve sticks open, extra water spills down this tube into the bowl instead of onto your floor. A thin refill tube also tops up the bowl through it.' },
    { n: 5, name: 'Rim holes', at: [35, 130], num: [14, 100], desc: 'Tank water flows through a hollow channel inside the rim and pours out of holes all around it, rinsing the bowl.' },
    { n: 6, name: 'Trapway', at: [190, 162], num: [232, 210], desc: 'A curved pipe molded into the porcelain. Its bend holds the water that blocks sewer gas — and when it fills completely, it becomes a siphon.' },
  ],
  steps: [
    { text: 'Push the handle: the chain lifts the flapper and the tank water drops into the bowl.', parts: [1, 2], t: [0, 1.2] },
    { text: 'Water floods in through the rim. The bowl level rises over the trapway’s bend and fills it.', parts: [5, 6], t: [1.2, 2.2] },
    { text: 'The full trapway is now a siphon: water falling down the drain pulls the whole bowl after it — until air gets in. That’s the gurgle.', parts: [6], t: [2.2, 4.4] },
    { text: 'The float drops, so the fill valve opens and refills the tank. The refill tube tops up the bowl so the trap holds water again.', parts: [3, 4], t: [4.4, 9] },
  ],
  dur: 9,
  why: 'Why the curved trapway? Its bend always keeps a plug of water in the pipe, which stops sewer gas from rising into your bathroom — with no moving parts. The same bend becomes the siphon that empties the bowl, so no pump is needed.',
  fact: 'Since 1994, U.S. law has capped new toilets at 1.6 gallons per flush. Older toilets could use as much as 6 gallons. Today’s WaterSense models use 1.28 or less.',
  quiz: {
    q: 'What actually pulls everything down the drain?',
    opts: ['A pump hidden under the bowl', 'Air pushed in from the tank', 'A siphon in the curved trapway'],
    a: 2,
    why: 'Once the trapway is completely full, the water falling down the drain side pulls the rest along — a siphon. When the bowl is empty, air breaks the siphon with a gurgle.'
  },
  sources: [
    ['Flush toilet — Wikipedia', 'https://en.wikipedia.org/wiki/Flush_toilet'],
    ['Energy Policy Act of 1992 — Wikipedia', 'https://en.wikipedia.org/wiki/Energy_Policy_Act_of_1992'],
    ['Residential Toilets — EPA WaterSense', 'https://www.epa.gov/watersense/residential-toilets'],
    ['How do toilets work? — Explain that Stuff', 'https://www.explainthatstuff.com/toilets.html'],
  ],
  art(p) {
    return `
    <g class="shell">
      <path d="M0,240H352" class="ink"/><rect x="0" y="240.7" width="352" height="11" fill="url(#${p}hatch)"/>
      <rect x="352.7" y="0" width="8" height="252" fill="url(#${p}hatch)"/><path d="M352,0V252" class="ink"/>
      <path d="M70,240C70,214 38,196 32,160L26,132Q24,122 36,122L276,122L276,140Q276,148 268,148L206,148C200,178 198,210 206,240Z" fill="url(#${p}hatch)" class="ink"/>
      <rect x="20" y="115" width="32" height="7" rx="3" class="ink fw"/><rect x="170" y="115" width="32" height="7" rx="3" class="ink fw"/>
      <path d="M210,16H322V118H210Z M216,22V112H316V22Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="206" y="10" width="120" height="6" rx="2" class="ink fw"/>
      <rect x="297" y="118" width="6" height="10" class="ink fw"/>
      <path d="M300,128V196H336" class="ink" stroke-width="2.4"/><circle cx="341" cy="196" r="5" class="ink fw"/><path d="M341,191V184M337,184H345M346,196H352" class="ink"/>
      <text x="70" y="250" class="hand" fill="#5a5f66"></text></g>
    <g data-part="6"><path d="${CAV}" fill="url(#${p}grid)" class="ink"/>
      <g clip-path="url(#${p}cav)"><rect id="${p}bw" x="30" y="174" width="144" height="60" class="water"/></g>
      <path id="${p}dw" d="${TRAP}" class="water" opacity="0"/>
      <path id="${p}bwl" d="" class="wline"/></g>
    <g data-part="5"><rect x="30" y="126" width="10" height="8" rx="2" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M186,127H240V111.5H256V135H186Z" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M236,112H240M256,112H260" class="ink"/></g>
    <g class="tankwater"><rect id="${p}tw" x="216.5" y="46" width="99" height="66" class="water"/><path id="${p}twl" d="M216.5,46H315.5" class="wline"/></g>
    <g data-part="4"><rect x="262" y="40" width="8" height="72" class="ink fw"/><path d="M300,30C300,18 266,20 266,40" class="ink thin"/></g>
    <g data-part="3"><rect x="296" y="34" width="8" height="78" class="ink fw"/><rect x="292" y="28" width="16" height="7" rx="1.5" class="ink fw"/>
      <rect id="${p}float" x="290" y="40" width="20" height="14" rx="2" class="ink fw"/></g>
    <g data-part="2"><g id="${p}flap"><path d="M238,112L262,112L262,108Q250,100 238,108Z" class="ink" fill="#6b7078"/></g></g>
    <g data-part="1"><rect x="196" y="26" width="14" height="6" rx="2" class="ink fw"/><path id="${p}arm" d="M216,29H250" class="ink" stroke-width="2"/>
      <path id="${p}chain" d="M249,30L245,105" class="ink thin" stroke-dasharray="2.5 1.6"/></g>
    <g id="${p}flow" opacity="0">
      <path d="M232,130H198M50,124H46M36,136l4,7M190,136l-4,7M168,176l8,-8" class="flow"/>
      <path d="M200,127l-3,3l3,3M38,143l4,1l1,-4M186,143l-4,1l-1,-4" class="flow"/></g>
    <g id="${p}rflow" opacity="0"><path d="M266,52V100" class="flow" stroke-dasharray="3 3"/></g>
    <clipPath id="${p}cav"><path d="${CAV}"/></clipPath>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    let arm = 0, flap = 0, L = 46, B = 174, siph = 0, flow = 0, rflow = 0;
    if (t != null) {
      arm = -14 * (seg(t, 0, .35) - seg(t, 1.3, 1.7));
      flap = -55 * (seg(t, 0, .35) - seg(t, 3.0, 3.4));
      L = 46 + 58 * (seg(t, .35, 3.0) - seg(t, 3.4, 8.6));
      B = 174 - 16 * seg(t, .5, 1.6) + 48 * seg(t, 2.0, 3.8) - 32 * seg(t, 4.6, 8.6);
      siph = seg(t, 1.4, 1.9) - seg(t, 3.7, 4.2);
      flow = seg(t, .4, .7) - seg(t, 2.8, 3.2);
      rflow = seg(t, 3.4, 3.7) - seg(t, 8.2, 8.6);
    }
    q('arm').setAttribute('transform', `rotate(${f1(arm)} 216 29)`);
    q('flap').setAttribute('transform', `rotate(${f1(flap)} 262 110)`);
    const [ax, ay] = rot(249, 29, 216, 29, arm), [fx, fy] = rot(245, 106, 262, 110, flap);
    q('chain').setAttribute('d', `M${f1(ax)},${f1(ay)}L${f1(fx)},${f1(fy)}`);
    q('tw').setAttribute('y', f1(L)); q('tw').setAttribute('height', f1(112 - L));
    q('twl').setAttribute('d', `M216.5,${f1(L)}H${L > 104 ? 216.5 : 315.5}`);
    q('float').setAttribute('y', f1(Math.min(L - 6, 94)));
    const bw = q('bw');
    bw.setAttribute('y', f1(B)); bw.setAttribute('width', B < 172 ? 170 : 144);
    q('dw').setAttribute('opacity', f1(siph));
    q('flow').setAttribute('opacity', f1(flow));
    q('rflow').setAttribute('opacity', f1(rflow));
  }
});
}
