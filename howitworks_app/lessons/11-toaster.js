{
/* 11. Pop-up toaster */
const TO_BREAD = 'M50,196V108Q50,93 64,93Q70,85 86,87Q110,81 134,87Q150,85 156,93Q170,93 170,108V196Z';
const TO_WIRE = (() => { let d = 'M38,86'; for (let i = 0, x = 38; x < 178; i++) { x += 7; d += `L${x},${i % 2 ? 86 : 192}`; } return d; })();
LESSONS.push({
  key: 'toaster', title: 'Toaster', cat: 'Kitchen', mins: 3, vb: [360, 270],
  summary: 'Push the lever and an electromagnet holds the bread down while thin nichrome wires glow red-hot, bathing it in infrared. When a timer cuts the power, the magnet lets go and a spring pops the toast up.',
  parts: [
    { n: 1, name: 'Nichrome wires', at: [178, 90], num: [190, 40], desc: 'A nickel-chromium alloy with high electrical resistance: current makes it glow red-hot without burning out or rusting, the way plain iron wire would.' },
    { n: 2, name: 'Mica sheets', at: [36, 84], num: [24, 40], desc: 'Thin sheets of mica, a heat-proof mineral that doesn’t conduct electricity. The wire is wound back and forth around them, on both sides of each slot.' },
    { n: 3, name: 'Carriage & lever', at: [244, 197], num: [300, 192], desc: 'The wire rack the bread sits on. It slides up and down a rod and is joined to the lever on the end of the toaster.' },
    { n: 4, name: 'Spring', at: [212, 100], num: [224, 40], desc: 'Stretched when you push the lever down. As soon as nothing holds the carriage, it yanks the toast back up.' },
    { n: 5, name: 'Electromagnet', at: [210, 226], num: [206, 258], desc: 'Holds a metal plate on the carriage — but only while current flows. That’s why the lever won’t stay down when the toaster is unplugged.' },
    { n: 6, name: 'Timer & browning knob', at: [248, 222], num: [302, 228], desc: 'A small circuit counts down — in many toasters, a capacitor charging through a resistor. The knob changes how fast it charges, so it sets how long you toast.' },
  ],
  steps: [
    { text: 'Push the lever: the carriage lowers the bread, stretches the spring and closes the power switch. The electromagnet grabs the carriage and holds it down.', parts: [3, 4, 5], t: [0, 1.8] },
    { text: 'Current flows through the nichrome wires. They glow red-hot and pour infrared onto both faces of the bread, browning it.', parts: [1, 2], t: [1.8, 4.6] },
    { text: 'Meanwhile the timer counts down. The browning knob sets how long; when time is up, it cuts the current to the electromagnet.', parts: [6, 5], t: [4.6, 6.2] },
    { text: 'The magnet lets go, the spring snaps the carriage up and the power switch opens. Toast!', parts: [4, 3], t: [6.2, 8] },
  ],
  dur: 8,
  why: 'Why hold the bread with a magnet instead of a hook? The magnet only holds while the circuit has power. Cut the power — when the timer ends, or if the plug is pulled — and the toast pops up and the heating stops.',
  fact: 'Charles Strite patented the pop-up toaster in 1921 for restaurants; the first home pop-up, the Toastmaster, followed in 1926. Sliced bread didn’t go on sale until 1928 — so the toaster came before “the best thing since sliced bread.”',
  quiz: {
    q: 'Why won’t the lever stay down when the toaster is unplugged?',
    opts: ['The latch is an electromagnet, and it needs current to hold', 'A safety lock blocks it until the wires are hot', 'The spring is too strong for the hook without the heat'],
    a: 0,
    why: 'Nothing mechanical holds the carriage down — an electromagnet does, and it only works while current flows. No power, no magnet, and the spring wins.'
  },
  sources: [
    ['How Toasters Work — HowStuffWorks', 'https://home.howstuffworks.com/toaster.htm'],
    ['Toaster — Wikipedia', 'https://en.wikipedia.org/wiki/Toaster'],
    ['Charles Strite — Wikipedia', 'https://en.wikipedia.org/wiki/Charles_Strite'],
    ['The History of Making Toast — Hagley Museum and Library', 'https://www.hagley.org/librarynews/history-making-toast'],
  ],
  art(p) {
    let zw = '';
    for (let y = 58; y <= 116; y += 7) zw += `<circle cx="268" cy="${y}" r="1.6" class="ink thin" fill="#6b7078"/><circle cx="276" cy="${y}" r="1.6" class="ink thin" fill="#6b7078"/><circle cx="324" cy="${y}" r="1.6" class="ink thin" fill="#6b7078"/><circle cx="332" cy="${y}" r="1.6" class="ink thin" fill="#6b7078"/>`;
    return `
    <g class="shell">
      <path d="M0,244H360" class="ink"/><rect x="0" y="244.7" width="360" height="26" fill="url(#${p}hatch)"/>
      <path d="M16,236V84Q16,68 32,68H44V76H184V68H216Q232,68 232,84V236Z M24,76V228H224V76Z" fill-rule="evenodd" fill="url(#${p}hatch)" class="ink"/>
      <rect x="24" y="76" width="200" height="152" fill="url(#${p}grid)"/>
      <path d="M190,80V228" class="ink thin"/><path d="M210,80V222" class="ink thin"/>
      <rect x="224.5" y="88" width="7" height="124" fill="url(#${p}grid)" class="ink thin"/>
      <path d="M24,236v8h14v-8M206,236v8h14v-8" class="ink"/>
      <path d="M16,214Q6,214 6,226V244" class="ink"/></g>
    <g class="bread"><path id="${p}bread" d="${TO_BREAD}" class="ink" fill="#f4f3f0"/>
      <path id="${p}crumb" d="M58,120h4M74,140h3M100,112h4M126,150h3M146,124h4M90,170h3M138,178h4M66,184h3" class="ink thin" opacity=".6"/></g>
    <g data-part="2"><rect x="34" y="82" width="150" height="114" rx="2" fill="#fff" fill-opacity=".38" class="ink thin"/></g>
    <g data-part="1"><path d="${TO_WIRE}" class="ink thin"/><path id="${p}glow" d="${TO_WIRE}" class="energy" stroke-width=".9"/></g>
    <g data-part="3"><path id="${p}rack" class="ink" stroke-width="2"/><rect id="${p}slider" x="203" width="14" height="20" rx="2" class="ink fm"/>
      <path id="${p}lever" class="ink fw"/></g>
    <g data-part="4"><path id="${p}spring" class="ink thin" stroke-width="1"/><path d="M204,80H216" class="ink"/></g>
    <g data-part="5"><path d="M199,212H221V227H199Z" class="ink fm"/><path d="M203,214V225M207,214V225M211,214V225M215,214V225M219,214V225" class="ink thin"/>
      <path id="${p}field" d="M198,214Q190,219 198,225M222,214Q230,219 222,225" class="energy" stroke-width="1"/></g>
    <g data-part="6"><rect x="30" y="206" width="150" height="8" rx="1.5" class="ink fm"/>
      <rect x="44" y="202" width="12" height="4" class="ink thin fw"/><rect x="66" y="202" width="8" height="4" class="ink thin fw"/>
      <rect x="112" y="200" width="50" height="5" rx="1" class="ink thin fw"/><rect id="${p}timer" x="112.5" y="200.5" width="0" height="4" fill="#D63A2A"/>
      <path d="M180,210H192V219H199" class="ink thin"/>
      <circle cx="244" cy="222" r="8" class="ink fw"/><path id="${p}knob" d="M244,222L244,215" class="ink"/></g>
    <g class="zoom" style="opacity:1"><circle cx="300" cy="86" r="50" class="fw"/>
      <g clip-path="url(#${p}zc)">
        <rect x="270" y="40" width="4" height="90" class="ink thin fw"/><rect x="326" y="40" width="4" height="90" class="ink thin fw"/>${zw}
        <path id="${p}zb" d="M290,30V140H310V30Z" class="ink" fill="#f4f3f0"/>
        <path id="${p}zt" d="M291.5,30V140M308.5,30V140" stroke="#6b7078" stroke-width="3" opacity="0"/>
        <path id="${p}ir0" class="energy"/><path id="${p}ir1" class="energy"/><path id="${p}ir2" class="energy"/><path id="${p}ir3" class="energy"/></g>
      <circle cx="300" cy="86" r="50" class="ink"/>
      <text x="300" y="149" class="hand" text-anchor="middle">one slot, end view</text></g>
    <clipPath id="${p}zc"><circle cx="300" cy="86" r="49"/></clipPath>`;
  },
  anim(svg, p, t) {
    const q = id => svg.querySelector('#' + p + id);
    let c = 0, on = 1, toast = .55, timer = .7;
    if (t != null) {
      const down = seg(t, .2, 1.1), up = seg(t, 6.25, 6.55);
      c = -40 * (1 - down) - 40 * up + 4 * Math.sin(Math.max(0, t - 6.55) * 18) * Math.exp(-Math.max(0, t - 6.55) * 6) * (t > 6.55 ? 1 : 0);
      on = seg(t, 1.1, 1.9) - seg(t, 6.15, 6.3);
      toast = seg(t, 2, 6.2);
      timer = t < 1.1 ? 0 : Math.min(1, (t - 1.1) / 5.05) * (t < 6.2 ? 1 : 0);
    }
    q('bread').setAttribute('transform', `translate(0 ${f1(c)})`); q('crumb').setAttribute('transform', `translate(0 ${f1(c)})`);
    const g = Math.round(244 - 100 * toast);
    q('bread').setAttribute('fill', `rgb(${g},${g - 2},${g - 6})`);
    q('glow').setAttribute('opacity', f1(on));
    const y = 197 + c;
    q('rack').setAttribute('d', `M46,${f1(y)}H205M54,${f1(y)}v-6M166,${f1(y)}v-6`);
    q('slider').setAttribute('y', f1(y - 7));
    q('lever').setAttribute('d', `M217,${f1(y - 2)}H232V${f1(y + 2)}H217Z M232,${f1(y - 5)}H254Q258,${f1(y - 5)} 258,${f1(y - 1)}V${f1(y + 3)}Q258,${f1(y + 7)} 254,${f1(y + 7)}H232Z`);
    // spring from the top anchor to the slider
    const top = 80, bot = y - 7, n = 14;
    let sp = `M210,${top}`;
    for (let i = 1; i < n; i++) sp += `L${i % 2 ? 205 : 215},${f1(top + (bot - top) * i / n)}`;
    q('spring').setAttribute('d', sp + `L210,${f1(bot)}`);
    q('field').setAttribute('opacity', f1(t == null ? 1 : on));
    q('timer').setAttribute('width', f1(49 * timer));
    // zoomed end view: infrared from both elements onto the slice
    const ph = t == null ? 0 : t * 9;
    q('ir0').setAttribute('d', wave([[279, 66], [288, 66]], 2, 6, ph));
    q('ir1').setAttribute('d', wave([[279, 104], [288, 104]], 2, 6, ph));
    q('ir2').setAttribute('d', wave([[321, 66], [312, 66]], 2, 6, ph));
    q('ir3').setAttribute('d', wave([[321, 104], [312, 104]], 2, 6, ph));
    ['ir0', 'ir1', 'ir2', 'ir3'].forEach(k => q(k).setAttribute('opacity', f1(on)));
    q('zb').setAttribute('transform', `translate(0 ${f1(c * .6)})`); q('zt').setAttribute('transform', `translate(0 ${f1(c * .6)})`);
    q('zt').setAttribute('opacity', f1(toast));
    return { 3: [246, f1(y + 1)] };
  }
});
}
