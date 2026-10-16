{
/* 5. Pin tumbler lock */
const PX = [92, 120, 148, 176, 204];          // pin centers
const KL = [30, 40, 26, 42, 34];              // key pin lengths
const DL = 24, REST = 150, SHEAR = 104;       // driver length, key pin tip at rest, shear line y
const KP = (() => {                           // top edge of the key blade (key coords, fully inserted)
  const P = [[44, 128]];
  PX.forEach((x, i) => P.push([x - 8, 128], [x - 2, SHEAR + KL[i]], [x + 2, SHEAR + KL[i]], [x + 8, 128]));
  P.push([218, 156], [218, 164]);
  return P;
})();
const kTop = x => {
  if (x < 44 || x > 218) return Infinity;
  for (let i = 0; i < KP.length - 1; i++) {
    const [x1, y1] = KP[i], [x2, y2] = KP[i + 1];
    if (x >= x1 && x <= x2) return x2 === x1 ? Math.min(y1, y2) : y1 + (y2 - y1) * (x - x1) / (x2 - x1);
  }
  return Infinity;
};
LESSONS.push({
  key: 'lock', title: 'Pin Tumbler Lock', cat: 'Home', mins: 3, vb: [360, 260],
  summary: 'Stacks of spring-loaded pins jam the turning plug. The right key lifts every stack by exactly the right amount, so all the gaps between pins line up with the edge of the plug — and it turns.',
  parts: [
    { n: 1, name: 'Key', at: [26, 176], num: [22, 222], desc: 'The cuts along the top of the blade are a code: each valley sets how high one pin stack gets lifted.' },
    { n: 2, name: 'Plug', at: [120, 168], num: [120, 222], desc: 'The cylinder you turn. Its top edge, where it meets the housing, is the shear line — the plug can only turn when nothing sticks across it.' },
    { n: 3, name: 'Housing', at: [52, 52], num: [26, 34], desc: 'The fixed outer shell. The pin holes are drilled through it and the plug in one line, so pins can slide between the two.' },
    { n: 4, name: 'Key pins', at: [176, 146], num: [176, 222], desc: 'The lower pins, cut to different lengths. They ride on the key, so the right key lifts each one until its top is exactly at the shear line.' },
    { n: 5, name: 'Driver pins & springs', at: [204, 60], num: [204, 16], desc: 'Springs push the upper pins down. With no key, each driver pin straddles the shear line and locks the plug to the housing.' },
    { n: 6, name: 'Cam', at: [310, 150], num: [344, 150], desc: 'A lobe fixed to the back of the plug. When the plug turns, the cam turns with it and slides the bolt in or out.' },
  ],
  steps: [
    { text: 'Slide the key in. Its ridges push the pin stacks up and down as they pass, compressing the springs.', parts: [1, 5], t: [0, 2.4] },
    { text: 'Fully in, each valley holds its key pin at just the right height.', parts: [4], t: [2.4, 3.6] },
    { text: 'Now every gap between key pin and driver pin sits exactly on the shear line. Nothing crosses it.', parts: [2, 3], t: [3.6, 5] },
    { text: 'The plug turns freely inside the housing, and the cam on its back swings around to move the bolt.', parts: [2, 6], t: [5, 8] },
  ],
  dur: 8,
  why: 'Why split each pin in two? One solid pin would only need to be pushed out of the way. Splitting it means the key has to put the break at one exact height, and with five or six stacks of different lengths, the right combination is very hard to guess.',
  fact: 'The idea is about 4,000 years old: ancient Egyptians used wooden locks whose pins dropped into the bolt and were lifted by a wooden key. Linus Yale Jr. shrank it into the compact metal cylinder with a flat, notched key in the 1860s.',
  quiz: {
    q: 'What has to happen for the plug to turn?',
    opts: ['Every pin must be pushed all the way up into the housing', 'The gap in each pin stack must line up with the shear line', 'The springs must be fully compressed'],
    a: 1,
    why: 'Push a stack too high and the key pin jams the shear line; too low and the driver pin does. Only when every split lands exactly on the line can the plug turn.'
  },
  sources: [
    ['Pin tumbler lock — Wikipedia', 'https://en.wikipedia.org/wiki/Pin_tumbler_lock'],
    ['Linus Yale Jr. — Lemelson-MIT', 'https://lemelson.mit.edu/resources/linus-yale'],
    ['How do Yale locks work? — Explain that Stuff', 'https://www.explainthatstuff.com/yalelock.html'],
    ['Chapter 2: How a Key Opens a Lock — MIT Guide to Lock Picking', 'https://www.lysator.liu.se/mit-guide/chapter2.html'],
  ],
  art(p) {
    let holes = '', ghole = '';
    PX.forEach(x => { holes += `M${x - 5},42H${x + 5}V104H${x - 5}Z`; ghole += `<rect x="${x - 5}" y="42" width="10" height="84"/>`; });
    let plugHoles = 'M50,126H220V164H50Z';
    PX.forEach(x => plugHoles += `M${x - 5},104H${x + 5}V126H${x - 5}Z`);
    let keyD = `M${KP[0][0]},${KP[0][1]}` + KP.slice(1).map(([x, y]) => `L${x},${y}`).join('') + 'L44,164Z';
    let pins = '', drv = '', spr = '';
    PX.forEach((x, i) => {
      pins += `<path id="${p}kp${i}" class="ink fw"/>`;
      drv += `<rect id="${p}dp${i}" x="${x - 4.5}" width="9" height="${DL}" rx="1" class="ink" fill="#c9ccd1"/>`;
      spr += `<path id="${p}sp${i}" class="ink thin"/>`;
    });
    return `
    <g class="shell"><g fill="url(#${p}grid)">${ghole}<rect x="50" y="126" width="170" height="38"/></g>
      <text x="4" y="100" class="hand">shear line</text>
      <text x="304" y="182" class="hand" text-anchor="middle">plug, seen from the back</text></g>
    <g data-part="3"><path d="M50,34H236V186H50Z M50,104H224V172H50Z ${holes}" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/></g>
    <g data-part="2"><path d="M50,104H224V172H50Z ${plugHoles}" fill-rule="evenodd" class="ink fm"/>
      <path d="M50,104H242" class="ink thin" stroke-dasharray="3 2.5"/>
      <path id="${p}shear" d="M50,104H242" class="energy" opacity="0"/></g>
    <g data-part="1"><g id="${p}key"><path d="M8,124Q6,112 18,112H38Q46,112 46,124V164Q46,178 38,178H18Q6,178 8,166Z" class="ink fm"/>
      <circle cx="22" cy="145" r="6" class="ink fw"/><path d="${keyD}" class="ink fm"/>
      <path d="M50,150H210" class="ink thin"/></g></g>
    <g data-part="4">${pins}</g>
    <g data-part="5">${spr}${drv}</g>
    <path id="${p}turn" d="M10,184Q27,202 44,184M37,183L44,184L42,191M326,72A44,44 0 0 1 347.3,117.6M352,112L347.3,117.6L344.4,111" class="energy" opacity="0"/>
    <g class="endview"><path d="M304,74A36,36 0 1 1 303.9,74Z M304,88A22,22 0 1 0 304.1,88Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="299.5" y="74" width="9" height="14" fill="url(#${p}grid)" class="ink thin"/>
      <rect x="300" y="74" width="8" height="14" fill="#c9ccd1" class="ink thin"/></g>
    <g data-part="2"><g id="${p}eplug"><circle cx="304" cy="110" r="22" class="ink fm"/>
      <rect x="300.5" y="98" width="7" height="30" fill="url(#${p}grid)" class="ink thin"/>
      <rect x="302" y="99" width="4" height="26" fill="#9aa0a8"/>
      <rect x="300" y="88" width="8" height="9" class="ink thin fw"/></g></g>
    <g data-part="6"><rect x="236" y="128" width="10" height="22" class="ink fm"/>
      <g id="${p}cam"><path d="M296,118L300,159Q304,163 308,159L312,118Z" class="ink" fill="#c9ccd1"/></g></g>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const off = t == null ? 0 : -168 * (1 - seg(t, 0, 2.4));
    const ang = t == null ? 0 : 90 * seg(t, 5, 6.6);
    q('key').setAttribute('transform', `translate(${f1(off)},0)`);
    PX.forEach((x, i) => {
      const bot = Math.min(REST, kTop(x - off)), top = bot - KL[i], dTop = top - DL;
      q('kp' + i).setAttribute('d', `M${x - 4.5},${f1(top)}H${x + 4.5}V${f1(bot - 4)}L${x},${f1(bot)}L${x - 4.5},${f1(bot - 4)}Z`);
      q('dp' + i).setAttribute('y', f1(dTop));
      let d = '', n = 7, h = dTop - 42;
      for (let k = 0; k <= n; k++) d += (k ? 'L' : 'M') + (k % 2 ? x + 3.5 : x - 3.5) + ',' + f1(42 + h * k / n);
      q('sp' + i).setAttribute('d', d);
    });
    q('shear').setAttribute('opacity', t == null ? 0 : f1(seg(t, 3.5, 3.9) - seg(t, 7.4, 8)));
    q('turn').setAttribute('opacity', t == null ? 0 : f1(seg(t, 4.9, 5.3) - seg(t, 7.4, 8)));
    q('eplug').setAttribute('transform', `rotate(${f1(ang)} 304 110)`);
    q('cam').setAttribute('transform', `rotate(${f1(ang)} 304 110)`);
    const [cx, cy] = rot(310, 150, 304, 110, ang);
    return { 6: [f1(cx), f1(cy)] };
  }
});
}
