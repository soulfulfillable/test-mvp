{
/* 15. GPS */
const GPS_R = [180, 197];                                     // receiver (phone)
const GPS_SAT = [[34, 60], [112, 44], [250, 44], [328, 60]];  // on the orbit arc
const GPS_ARC = (c, r, spread) => {                           // arc of circle c,r centered on the direction to the phone
  const a0 = Math.atan2(GPS_R[1] - c[1], GPS_R[0] - c[0]), d = spread * Math.PI / 180;
  const p1 = [c[0] + r * Math.cos(a0 - d), c[1] + r * Math.sin(a0 - d)], p2 = [c[0] + r * Math.cos(a0 + d), c[1] + r * Math.sin(a0 + d)];
  return `M${f1(p1[0])},${f1(p1[1])}A${f1(r)},${f1(r)} 0 0 1 ${f1(p2[0])},${f1(p2[1])}`;
};
const GPS_DIST = c => Math.hypot(GPS_R[0] - c[0], GPS_R[1] - c[1]);
LESSONS.push({
  key: 'gps', title: 'GPS', cat: 'Digital', mins: 3, vb: [360, 270],
  summary: 'Each GPS satellite broadcasts the exact time from its atomic clocks. Your phone measures how late each signal arrives, turns that delay into a distance, and finds the one spot that fits four of those distances.',
  parts: [
    { n: 1, name: 'GPS satellite', at: [104, 42], num: [80, 18], desc: 'The U.S. flies about 31 working GPS satellites, roughly 12,550 miles up. Each circles Earth about twice a day, spaced so at least four are in view from nearly anywhere.' },
    { n: 2, name: 'Atomic clocks', at: [68, 180], num: [96, 206], desc: 'Each satellite carries atomic clocks — cesium and rubidium — far steadier than any watch. Every signal is stamped with that time and the satellite’s exact position.' },
    { n: 3, name: 'Time signal', at: [222, 124], num: [266, 118], desc: 'A radio signal saying, in effect, “I’m satellite X, and the time was T.” It travels at the speed of light, about 186,000 miles a second, and still needs about 1/15 of a second to reach you.' },
    { n: 4, name: 'Receiver in your phone', at: [184, 214], num: [216, 248], desc: 'The GPS chip only listens; it never transmits. It notes when each signal arrives and multiplies the delay by the speed of light to get a distance.' },
    { n: 5, name: 'Distance circles', at: [136, 178], num: [106, 150], desc: 'Each distance puts you somewhere on a sphere around that satellite (drawn here as circles). The point where the spheres cross is where you are.' },
    { n: 6, name: 'Fourth satellite', at: [330, 70], num: [342, 100], desc: 'Three distances would do if your phone had a perfect clock. A fourth lets the receiver solve for its own clock error, so all four spheres meet at a single point.' },
  ],
  steps: [
    { text: 'Atomic clocks on each satellite keep near-perfect time. Each satellite keeps broadcasting its position and the exact moment it sent the signal.', parts: [1, 2], t: [0, 2.2] },
    { text: 'The signals race down at the speed of light. Each one arrives a little late — later from satellites that are farther away.', parts: [3], t: [2.2, 4.4] },
    { text: 'Your phone turns each delay into a distance — a circle around that satellite. But its cheap clock is slightly off, so three circles miss each other.', parts: [4, 5], t: [4.4, 6.6] },
    { text: 'A fourth signal lets the phone find the one clock correction that makes all the circles meet at a single point: your position.', parts: [6, 5, 4], t: [6.6, 9] },
  ],
  dur: 9,
  why: 'Why four satellites, not three? A phone can’t carry an atomic clock, so its clock is a little off — and at the speed of light, a millionth of a second means about 1,000 feet. The fourth signal lets it solve for that error.',
  fact: 'GPS has to correct for Einstein. In weaker gravity, satellite clocks run fast by about 45 microseconds a day; their speed slows them by about 7. Uncorrected, the net 38 microseconds a day would throw positions off by miles.',
  quiz: {
    q: 'Why does your phone need signals from at least four satellites?',
    opts: ['To work out its own clock error as well as its position', 'Because each satellite covers only a quarter of Earth', 'To average out cloudy weather'],
    a: 0,
    why: 'Latitude, longitude and altitude are three unknowns, and the phone’s imperfect clock is a fourth. Four measured distances give four equations — enough to solve all four at once.'
  },
  sources: [
    ['Global Positioning System — Wikipedia', 'https://en.wikipedia.org/wiki/Global_Positioning_System'],
    ['Space Segment — GPS.gov', 'https://www.gps.gov/systems/gps/space/'],
    ['Putting Einstein to the Test With the World’s Most Accurate Clocks — NIST', 'https://www.nist.gov/blogs/taking-measure/putting-einstein-test-worlds-most-accurate-clocks'],
    ['How does GPS satellite navigation work? — Explain that Stuff', 'https://www.explainthatstuff.com/howgpsworks.html'],
  ],
  art(p) {
    const sat = ([x, y]) => {
      let cells = '';
      for (let k = 3; k < 15; k += 3) cells += `M${x - 22 + k},${y - 4}V${y + 4}M${x + 7 + k},${y - 4}V${y + 4}`;
      return `<path d="M${x - 7},${y}H${x - 5}M${x + 5},${y}H${x + 7}" class="ink thin"/>
        <rect x="${x - 22}" y="${y - 4}" width="15" height="8" class="ink thin fw"/><rect x="${x + 7}" y="${y - 4}" width="15" height="8" class="ink thin fw"/>
        <path d="${cells}" class="ink thin"/>
        <rect x="${x - 5}" y="${y - 6}" width="10" height="12" rx="1" class="ink fm"/>
        <path d="M${x - 3},${y + 6}L${x - 4},${y + 10}H${x + 4}L${x + 3},${y + 6}" class="ink thin fw"/>`;
    };
    return `
    <g class="shell">
      <path d="M0,255.5A480,480 0 0 1 360,255.5V270H0Z" fill="url(#${p}hatch)" class="ink"/>
      <clipPath id="${p}sky"><path d="M0,0H360V255.5A480,480 0 0 0 0,255.5Z"/></clipPath>
      <path d="M-4,63A580,580 0 0 1 364,63" class="ink thin" stroke-dasharray="4 4"/>
      <text x="181" y="30" class="hand" text-anchor="middle">orbit, about 12,550 miles up</text>
      <path d="M28,68L24,132M41,67L68,136" class="ink thin" stroke-dasharray="2 2"/>
      <text x="46" y="203" class="hand" text-anchor="middle">inside</text>
      ${sat(GPS_SAT[0])}${sat(GPS_SAT[2])}</g>
    <g data-part="1">${sat(GPS_SAT[1])}</g>
    <g data-part="6">${sat(GPS_SAT[3])}</g>
    <g data-part="2"><circle cx="46" cy="160" r="30" class="ink fw"/>
      <path d="M25,139H67V181H25Z M29,143V177H63V143Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="29.7" y="143.7" width="32.6" height="32.6" fill="url(#${p}grid)"/>
      <rect x="32" y="146" width="28" height="12" rx="1" class="ink thin fm"/><rect x="32" y="162" width="28" height="12" rx="1" class="ink thin fm"/>
      <text x="34" y="155.5" class="hand" style="font-size:8px">Cs</text><text x="34" y="171.5" class="hand" style="font-size:8px">Rb</text>
      <path id="${p}osc1" class="energy" stroke-width="1"/><path id="${p}osc2" class="energy" stroke-width="1"/>
      <path d="M40,181V186M46,181V187M52,181V186" class="ink thin"/></g>
    <g data-part="3" clip-path="url(#${p}sky)"><path id="${p}pulse" class="energy" stroke-width="1.1"/></g>
    <g data-part="5" clip-path="url(#${p}sky)"><path id="${p}rng" class="ink" stroke-width="1.1" stroke-dasharray="5 2.5"/><path id="${p}rng4" class="ink" stroke-width="1.1" stroke-dasharray="5 2.5"/><text id="${p}err" x="132" y="124" class="hand" text-anchor="middle" style="fill:#D63A2A">clock off: circles miss</text></g>
    <g data-part="4"><rect x="173" y="198" width="14" height="23" rx="2.5" class="ink fw"/>
      <rect x="175.5" y="201" width="9" height="14" class="ink thin fm"/><rect x="177.5" y="205" width="5" height="5" class="ink thin fw"/>
    <g id="${p}fix"><circle cx="${GPS_R[0]}" cy="${GPS_R[1]}" r="6" class="energy" stroke-width="1.6"/>
      <path d="M${GPS_R[0] - 10},${GPS_R[1]}h5M${GPS_R[0] + 5},${GPS_R[1]}h5M${GPS_R[0]},${GPS_R[1] - 10}v5M${GPS_R[0]},${GPS_R[1] + 5}v5" class="energy"/></g></g>
    `;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    const ph = t == null ? 0 : t * 14;
    const osc = y => { let d = ''; for (let x = 44; x <= 58; x += 1) d += (d ? 'L' : 'M') + x + ',' + f1(y + 3 * Math.sin((x - 44) * 1.4 - ph)); return d; };
    q('osc1').setAttribute('d', osc(152)); q('osc2').setAttribute('d', osc(168));
    // pulses: wavefront arcs travelling from each satellite toward the phone
    let pulse = '', show = [], e = 0, r4 = 1, fix = 1;
    if (t == null) show = [.55];
    else {
      if (t > .5 && t < 4.6) for (let k = 0; k < 3; k++) { const f = ((t - .5) / 1.5 + k / 3) % 1; if (t - .5 > k * .5) show.push(f); }
      e = -18 * seg(t, 4.4, 5.0) * (1 - seg(t, 7.0, 8.4));
      r4 = seg(t, 6.6, 7.0);
      fix = seg(t, 8.2, 8.6);
    }
    GPS_SAT.forEach(c => show.forEach(f => { if (f > .04) pulse += GPS_ARC(c, GPS_DIST(c) * f, 14); }));
    q('pulse').setAttribute('d', pulse);
    const rngOn = t == null ? 1 : seg(t, 4.4, 4.9);
    let rng = '';
    if (rngOn > 0) GPS_SAT.slice(0, 3).forEach(c => rng += GPS_ARC(c, GPS_DIST(c) + e, 24));
    q('rng').setAttribute('d', rng); q('rng').setAttribute('opacity', f1(rngOn));
    q('rng4').setAttribute('d', r4 > 0 ? GPS_ARC(GPS_SAT[3], GPS_DIST(GPS_SAT[3]) + e, 24) : '');
    q('rng4').setAttribute('opacity', f1(r4));
    q('fix').setAttribute('opacity', f1(fix));
    q('err').setAttribute('opacity', t == null ? 0 : f1(seg(t, 5.0, 5.5) * (1 - seg(t, 7.2, 7.8))));
  }
});
}
