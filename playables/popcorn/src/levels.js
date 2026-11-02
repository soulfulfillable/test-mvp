// Pop & Topple — level data + physics constants. Pure data: no DOM, no renderer (the solver runs this in node).
// World units are metres, y points UP, the table top is y = 0. The screen flips y when drawing.

export const DT = 1 / 120;            // fixed physics step → deterministic (same pull = same result)
export const GRAVITY = -10;
export const SEED_R = 0.13;           // raw kernel
export const POP_R = 0.6;             // popped corn (≈4.5× the kernel)
export const POP_STEPS = 14;          // the kernel grows to POP_R over this many physics steps
export const POP_MASS = 0.45;         // mass of the popped corn (kept constant while it grows)
export const POP_IMPULSE = 3.0;       // radial shove to everything the corn is touching when it bursts
export const CORN_LIFE = 2.2;         // popped corn is cleared this long after the burst (so it never plugs a path)
export const FUSE = 0.5;              // seconds of shaking + steam before the burst
export const MAX_PULL = 0.9;          // metres of pull-back
export const MIN_PULL = 0.15;         // shorter pulls cancel the shot
export const PULL_K = 9.6;            // launch speed per metre of pull
export const SLING = { x: 0.8, y: 1.4 };  // pouch rest position (the kernel sits here)
export const WORLD = { x0: -0.3, x1: 6.8 }; // walls; anything beyond is lost
export const FLOOR_DOWN = 0.45;       // a target whose bottom is this close to the table counts as down

export const MATS = {
  wood:  { density: 0.9, friction: 0.55, restitution: 0.08 },
  card:  { density: 0.45, friction: 0.5, restitution: 0.1 },
  cup:   { density: 3.5, friction: 0.5, restitution: 0.12 },
  static:{ density: 0, friction: 0.55, restitution: 0.1 },
  seed:  { density: 1.2, friction: 0.35, restitution: 0.22 },
  corn:  { friction: 0.65, restitution: 0.25 },
};

// Body kinds (for the renderer): column (wood block), plank, crate (cardboard), cup (popcorn bucket), cabinet (static
// kitchen cabinet), wall, shelf, ledge. `target` cups must reach the table top.
const cup = (id, x, bottom, target = true, density) => ({ id, kind: 'cup', mat: 'cup', x, y: bottom + 0.3, w: 0.46, h: 0.6, target, density });
// column on a pedestal: the usual "thing that topples" (pedestal narrower than the column so a sideways shove tips it off)
const stand = (x, w = 0.4, h = 1.4, idc = 'col', idp = 'ped') => [
  { id: idp, kind: 'ledge', mat: 'static', static: true, x, y: 0.15, w: w - 0.1, h: 0.3 },
  { id: idc, kind: 'column', mat: 'wood', x, y: 0.3 + h / 2, w, h },
];

export const LEVELS = [
  {
    name: 'Open Gap', seeds: 3,
    hint: 'Pull back. Drop the kernel into the gap.',
    bodies: [
      ...stand(2.6), cup('cup', 2.6, 1.7),
      { id: 'cab', kind: 'cabinet', mat: 'static', static: true, x: 3.98, y: 1.5, w: 1.0, h: 3.0 },
    ],
    gaps: [{ x: 2.8, y: 0, w: 0.68, h: 1.7 }],
    cam: { x1: 4.6 },
  },
  {
    name: 'Side Push', seeds: 3,
    hint: 'The front is closed. Slide in from the side.',
    bodies: [
      // a low tunnel under a cabinet: the kernel has to come in flat, under the shelf, to the foot of the column
      { id: 'roof', kind: 'shelf', mat: 'static', static: true, x: 2.45, y: 0.78, w: 1.1, h: 0.16 },
      { id: 'cab', kind: 'cabinet', mat: 'static', static: true, x: 2.45, y: 1.88, w: 1.1, h: 2.04 },
      ...stand(3.47), cup('cup', 3.47, 1.7),
      { id: 'kerb', kind: 'ledge', mat: 'static', static: true, x: 5.45, y: 0.175, w: 0.3, h: 0.35 },
    ],
    gaps: [{ x: 1.9, y: 0, w: 1.37, h: 0.7 }],
    cam: { x1: 5.9 },
  },
  {
    name: 'Narrow Slot', seeds: 3,
    hint: 'A thin slot. Not too hard, not too soft.',
    bodies: [
      ...stand(2.75), cup('cup', 2.75, 1.7),
      { id: 'cab', kind: 'cabinet', mat: 'static', static: true, x: 4.1, y: 1.5, w: 1.1, h: 3.0 },
      { id: 'lip', kind: 'ledge', mat: 'static', static: true, x: 3.41, y: 1.67, w: 0.28, h: 0.26 },
    ],
    gaps: [{ x: 2.95, y: 0, w: 0.6, h: 1.54 }],
    cam: { x1: 4.75 },
  },
  {
    name: 'Chain Collapse', seeds: 3,
    hint: 'Pop one end. Let the rest fall.',
    bodies: [
      { id: 'shelf', kind: 'shelf', mat: 'static', static: true, x: 3.3, y: 0.35, w: 2.6, h: 0.7 },
      { id: 'end', kind: 'ledge', mat: 'static', static: true, x: 2.1, y: 1.2, w: 0.2, h: 1.0 },
      { id: 'step', kind: 'ledge', mat: 'static', static: true, x: 2.41, y: 0.85, w: 0.42, h: 0.3 },
      { id: 'd1', kind: 'plank', mat: 'wood', x: 2.75, y: 1.3, w: 0.26, h: 1.2 },
      { id: 'd2', kind: 'plank', mat: 'wood', x: 3.4, y: 1.3, w: 0.26, h: 1.2 },
      { id: 'd3', kind: 'plank', mat: 'wood', x: 4.05, y: 1.3, w: 0.26, h: 1.2 },
      cup('cup', 4.52, 0.7, true, 1.6),
      { id: 'hood', kind: 'cabinet', mat: 'static', static: true, x: 4.55, y: 2.3, w: 0.7, h: 0.5 },
    ],
    gaps: [{ x: 2.2, y: 1.0, w: 0.42, h: 0.9 }, { x: 2.88, y: 0.7, w: 0.39, h: 1.2 }, { x: 3.53, y: 0.7, w: 0.39, h: 1.2 }],
    cam: { x1: 5.0 },
  },
  {
    name: 'Two Seeds', seeds: 4,
    hint: 'Two pops: clear the door, then the tunnel.',
    bodies: [
      ...stand(2.1, 0.4, 1.4, 'col1', 'ped1'),
      { id: 'cab', kind: 'cabinet', mat: 'static', static: true, x: 3.25, y: 1.75, w: 0.9, h: 2.1 },
      { id: 'hood', kind: 'cabinet', mat: 'static', static: true, x: 4.3, y: 2.85, w: 1.2, h: 0.5 },
      ...stand(3.92, 0.4, 1.4, 'col2', 'ped2'), cup('cup', 3.92, 1.7),
    ],
    gaps: [{ x: 2.3, y: 0, w: 0.5, h: 1.7 }, { x: 2.8, y: 0, w: 0.92, h: 0.7 }],
    cam: { x1: 5.6 },
  },
];
