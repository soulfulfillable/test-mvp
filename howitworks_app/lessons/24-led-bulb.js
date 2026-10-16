{
/* 24. LED light bulb */
const LB_Z = [284, 116];                         // zoom center (one LED chip, cut open)
// phosphor grains in the zoom (fixed)
const LB_GR = [[244, 146], [240, 136], [248, 124], [258, 112], [270, 106], [284, 104], [298, 107], [310, 113], [322, 124], [326, 138], [322, 148], [274, 108], [292, 109], [318, 118], [250, 140]];
// emission events: x on the junction, where the light goes, and (optionally) the grain it hits
const LB_EV = [
  { x: 270, to: [236, 70], grain: 3 },           // converted by a grain -> yellow
  { x: 286, to: [284, 50] },                     // stays blue
  { x: 300, to: [338, 60], grain: 7 },           // converted -> yellow
];
LESSONS.push({
  key: 'led-bulb', title: 'LED Light Bulb', cat: 'Home', mins: 3, vb: [360, 256],
  summary: 'Tiny chips of semiconductor make light directly: electrons crossing a junction drop into holes and give off blue light. A yellow phosphor coating turns part of it yellow, and blue plus yellow looks white.',
  parts: [
    { n: 1, name: 'LED chips', at: [314, 146], num: [336, 194], desc: 'Each chip is a sandwich of n-type and p-type semiconductor (gallium nitride). Where they meet, electrons drop into holes, and every drop releases a little packet of blue light.' },
    { n: 2, name: 'Phosphor coating', at: [246, 116], num: [228, 46], desc: 'A yellow coating over the chips. It absorbs some of the blue light and glows yellow; the mix of blue and yellow looks white to your eye.' },
    { n: 3, name: 'Driver', at: [110, 160], num: [32, 164], desc: 'A small circuit board that turns the 120-volt alternating current from the socket into the steady, low-voltage direct current LEDs need.' },
    { n: 4, name: 'Heat sink', at: [84, 136], num: [32, 132], desc: 'A metal (usually aluminum) body with fins. LEDs waste far less power than old bulbs, but the heat they do make collects at the chips and shortens their life, so it is drawn away and out into the air.' },
    { n: 5, name: 'Diffuser dome', at: [80, 60], num: [32, 48], desc: 'A frosted plastic or glass dome that spreads the light from a few bright points into a soft, even glow.' },
    { n: 6, name: 'Base', at: [112, 218], num: [32, 220], desc: 'The standard screw base (E26 in the U.S.). The threaded shell and the tip at the bottom are the two contacts that carry current from the socket.' },
  ],
  steps: [
    { text: 'Current comes in through the base as 120-volt AC. The driver turns it into low-voltage DC for the chips.', parts: [6, 3], t: [0, 2] },
    { text: 'In each LED chip, electrons cross the junction and drop into holes. Each drop gives off a flash of blue light.', parts: [1], t: [2, 4.5] },
    { text: 'Some of the blue hits the phosphor and comes back out as yellow. Blue and yellow together look white.', parts: [2], t: [4.5, 7] },
    { text: 'The dome spreads the light evenly, while the heat sink pulls heat away from the chips.', parts: [5, 4], t: [7, 9] },
  ],
  dur: 9,
  why: 'Why LEDs at all? An old bulb makes light by heating a wire until it glows, so most of its power ends up as heat. An LED makes light straight from electrons, so household LEDs use at least 75% less energy and last up to 25 times longer, per the U.S. Department of Energy.',
  fact: 'White LED bulbs had to wait for a bright blue LED. Red and green ones existed for decades before Isamu Akasaki, Hiroshi Amano and Shuji Nakamura cracked blue in the late 1980s and early 1990s — work that won the 2014 Nobel Prize in Physics.',
  quiz: {
    q: 'How does a typical LED bulb make white light?',
    opts: ['It heats a tiny wire until it glows white', 'It shines red light through a white filter', 'A blue LED shines through a yellow phosphor'],
    a: 2,
    why: 'The chips give off blue light. The phosphor coating turns part of it yellow, and your eye sees the blue-plus-yellow mix as white.'
  },
  sources: [
    ['LED lamp — Wikipedia', 'https://en.wikipedia.org/wiki/LED_lamp'],
    ['Light-emitting diode — Wikipedia', 'https://en.wikipedia.org/wiki/Light-emitting_diode'],
    ['LED Lighting — U.S. Department of Energy, Energy Saver', 'https://www.energy.gov/energysaver/led-lighting'],
    ['The Nobel Prize in Physics 2014 — Royal Swedish Academy of Sciences', 'https://kva.se/en/news/nobelpriset-i-fysik-2014-2'],
  ],
  art(p) {
    const [zx, zy] = LB_Z;
    let fins = '';
    [[132, 86.4], [146, 88.4], [160, 92], [174, 97.4]].forEach(([y, x]) => {
      fins += `<rect x="${x - 7}" y="${y - 1.6}" width="7" height="3.2" fill="url(#${p}hatch)" class="ink thin"/><rect x="${260 - x}" y="${y - 1.6}" width="7" height="3.2" fill="url(#${p}hatch)" class="ink thin"/>`;
    });
    let thr = '';
    for (let y = 202; y <= 230; y += 6) thr += `M110,${y}Q130,${y + 3} 150,${y + 4}`;
    let grains = '';
    LB_GR.forEach(([x, y], i) => grains += `<circle id="${p}gr${i}" cx="${x}" cy="${y}" r="1.8" class="ink thin" fill="#9aa0a8"/>`);
    return `
    <clipPath id="${p}zc"><circle cx="${zx}" cy="${zy}" r="61"/></clipPath>
    <g class="shell">
      <circle cx="152" cy="114" r="7" class="ink thin" stroke-dasharray="2 2"/>
      <path d="M158,110L226,84 M158,118L230,146" class="ink thin" stroke-dasharray="2 2"/>
      <path d="M122,140V124 M138,140V124 M124,186L126,236 M136,186L148,206" class="ink thin"/>
      <circle cx="${zx}" cy="${zy}" r="62" class="fw"/>
    </g>
    <g data-part="5"><path d="M90,122A58,58 0 1 1 170,122L165.5,122A55,55 0 1 0 94.5,122Z" fill="url(#${p}hatch)" class="ink thin"/>
      <path id="${p}rays" class="energy"/></g>
    <g data-part="4"><path d="M86,124Q90,170 106,194L112,194Q98,170 94,124Z M174,124Q170,170 154,194L148,194Q162,170 166,124Z" fill="url(#${p}hatch)" class="ink"/>
      ${fins}<rect x="88" y="118" width="84" height="6" class="ink fm"/>
      <path id="${p}heat" class="energy"/></g>
    <g data-part="3"><rect x="110" y="140" width="40" height="46" rx="2" class="ink fw"/>
      <rect x="114" y="146" width="10" height="22" rx="3" class="ink thin fm"/><path d="M114,150H124" class="ink thin"/>
      <rect x="130" y="148" width="15" height="12" class="ink thin fm"/><path d="M133,148V160M136,148V160M139,148V160M142,148V160" class="ink thin"/>
      <rect x="130" y="168" width="12" height="8" class="ink thin" fill="#5c6168"/>
      <path d="M115,176h8M115,180h8" class="ink thin"/>
      <g id="${p}dc"></g></g>
    <g data-part="6"><rect x="108" y="194" width="44" height="7" class="ink fm"/>
      <path d="M110,201L109,233H151L150,201Z" class="ink fw"/><path d="${thr}" class="ink thin"/>
      <path d="M109,233Q112,240 120,240H140Q148,240 151,233" class="ink" fill="#5c6168"/>
      <rect x="125" y="240" width="10" height="5" rx="1.5" class="ink fm"/>
      <g id="${p}ac"></g></g>
    <g data-part="2"><path d="M100,114a4,3 0 0 1 8,0M116,114a4,3 0 0 1 8,0M136,114a4,3 0 0 1 8,0M152,114a4,3 0 0 1 8,0" class="ink thin" fill="#d4d7dc"/>
      <g clip-path="url(#${p}zc)"><path d="M232,152A52,52 0 0 1 336,152Z" class="ink" fill="#f1f2f4"/>${grains}<g id="${p}lightY"></g></g>
      <text id="${p}ty" x="250" y="86" class="hand" style="font-size:8px">yellow</text></g>
    <g data-part="1"><rect x="100" y="114" width="8" height="4" class="ink thin" fill="#5c6168"/><rect x="116" y="114" width="8" height="4" class="ink thin" fill="#5c6168"/>
      <rect x="136" y="114" width="8" height="4" class="ink thin" fill="#5c6168"/><rect x="152" y="114" width="8" height="4" class="ink thin" fill="#5c6168"/>
      <g clip-path="url(#${p}zc)">
        <rect x="222" y="152" width="124" height="30" fill="url(#${p}hatch)"/><path d="M222,152H346" class="ink"/>
        <rect x="254" y="118" width="60" height="12" class="ink thin" fill="#eceef1"/>
        <rect x="254" y="134" width="60" height="18" class="ink thin" fill="#d4d7dc"/>
        <rect x="254" y="130" width="60" height="4" fill="#fff"/><path d="M254,132H314" class="ink thin" stroke-dasharray="3 2"/>
        <rect x="279" y="114" width="10" height="4" class="ink thin fm"/>
        <text x="257" y="127" class="hand" style="font-size:7px">p</text><text x="257" y="147" class="hand" style="font-size:7px">n</text>
        <g id="${p}eh"></g><g id="${p}lightB"></g></g>
      <text id="${p}tb" x="290" y="68" class="hand" style="font-size:8px">blue</text></g>
    <g class="shell"><circle cx="${zx}" cy="${zy}" r="62" class="ink"/></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const S = t == null;
    // electrons rise through n, holes sink through p; they meet at the junction and light leaves
    let eh = '', lb = '', ly = '';
    LB_EV.forEach((ev, k) => {
      // repeating cycle per event
      let c;
      if (S) c = k === 1 ? .8 : k === 0 ? .9 : .3;
      else { if (t < 2) return; c = ((t - 2 + k * .55) / 1.6) % 1; }
      const meet = Math.min(1, c / .4);                    // 0..1 approach
      const ex = ev.x - 3, hx = ev.x + 3;
      if (c < .42) {
        eh += `<circle cx="${ex}" cy="${f1(150 - 17 * meet)}" r="2.4" fill="#D63A2A"/>`;
        eh += `<circle cx="${hx}" cy="${f1(120 + 11 * meet)}" r="2.4" class="ink thin fw"/>`;
      }
      if (c >= .4) {
        const u = Math.min(1, (c - .4) / .45);
        const g = ev.grain != null && (S || t >= 4.5) ? LB_GR[ev.grain] : null;
        const start = [ev.x, 130];
        if (g) {
          const v1 = Math.min(1, u * 2), v2 = Math.max(0, u * 2 - 1);
          const a = [start[0] + (g[0] - start[0]) * v1, start[1] + (g[1] - start[1]) * v1];
          if (Math.hypot(a[0] - start[0], a[1] - start[1]) > 6) lb += `<path d="${wave([start, a], 2.2, 5, S ? 0 : t * 14)}" class="energy"/>`;
          if (v2 > .08) {
            const b = [g[0] + (ev.to[0] - g[0]) * v2, g[1] + (ev.to[1] - g[1]) * v2];
            ly += `<path d="${wave([g, b], 3, 11, S ? 0 : t * 14)}" class="energy"/>`;
            ly += `<circle cx="${g[0]}" cy="${g[1]}" r="3.4" class="energy"/>`;
          }
        } else {
          const b = [start[0] + (ev.to[0] - start[0]) * u, start[1] + (ev.to[1] - start[1]) * u];
          if (u > .1) lb += `<path d="${wave([start, b], 2.2, 5, S ? 0 : t * 14)}" class="energy"/>`;
        }
      }
    });
    q('eh').innerHTML = eh; q('lightB').innerHTML = lb; q('lightY').innerHTML = ly;
    q('tb').setAttribute('opacity', S || t >= 2.5 ? 1 : 0);
    q('ty').setAttribute('opacity', S || t >= 5.2 ? 1 : 0);
    // AC in the base: dots shake back and forth; DC up to the chips: dots march
    const acOn = S ? 1 : 1 - seg(t, 8.6, 9), dcOn = S ? 1 : seg(t, .8, 1.3);
    const o = S ? 0 : 3 * Math.sin(t * 16);
    let ac = '', dc = '';
    for (let y = 206; y <= 230; y += 8) ac += `<circle cx="${f1(124.6 + (y - 186) * .04)}" cy="${f1(y + o)}" r="1.8" fill="#D63A2A" opacity="${f1(acOn)}"/>`;
    const sh = S ? 0 : (t * 14) % 8;
    for (let d = sh; d < 16; d += 8) dc += `<circle cx="122" cy="${f1(140 - d)}" r="1.8" fill="#D63A2A" opacity="${f1(dcOn)}"/><circle cx="138" cy="${f1(124 + d)}" r="1.8" fill="#D63A2A" opacity="${f1(dcOn)}"/>`;
    q('ac').innerHTML = ac; q('dc').innerHTML = dc;
    // glow through the dome, heat off the fins
    let r = '';
    for (let k = 0; k < 9; k++) { const a = (-200 + k * 27.5) * Math.PI / 180; r += `M${f1(130 + 63 * Math.cos(a))},${f1(80 + 63 * Math.sin(a))}L${f1(130 + 71 * Math.cos(a))},${f1(80 + 71 * Math.sin(a))}`; }
    q('rays').setAttribute('d', r);
    q('rays').setAttribute('opacity', f1(S ? 1 : seg(t, 2.6, 3.2)));
    const hp = S ? 0 : t * 8;
    q('heat').setAttribute('d', wave([[78, 150], [62, 150]], 2, 8, hp) + wave([[182, 150], [198, 150]], 2, 8, hp) + wave([[84, 172], [68, 176]], 2, 8, hp) + wave([[176, 172], [192, 176]], 2, 8, hp));
    q('heat').setAttribute('opacity', f1(S ? 0 : seg(t, 7, 7.5)));
  }
});
}
