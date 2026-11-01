// Knock Chain — hand-made levels (stage 2: three). Units = world units (1 = one block). x right, y up; the physics
// plane is the lane z = LANE in the 3D view. Every level: slingshot on the left, a stone that must land on the
// button, something between. `solution` is a launch vector that the solver (tools/solve.js) verified clears the
// level; the robot replays it as a real drag.
export const LANE = 1.3;      // z of the physics plane
export const DEPTH = 0.8;     // visual depth of physics boxes along z
export const BALL_R = 0.26;
export const GRAVITY = -14;
export const DT = 1 / 120;    // fixed physics step (determinism)
export const MAX_PULL = 1.3;  // world units
export const PULL_K = 9;      // launch speed = pull × K

export const MATS = {
  wood:   { density: 0.6, friction: 0.5, restitution: 0.10 },
  stone:  { density: 2.0, friction: 0.6, restitution: 0.05 },
  glass:  { density: 0.5, friction: 0.3, restitution: 0.10, breakImpulse: 1.6 },
  bumper: { density: 0,   friction: 0.1, restitution: 0.95 },
  ground: { density: 0,   friction: 0.6, restitution: 0.15 },
};
export const SWITCH_MIN_MASS = 0.8; // the ball (≈0.42) is too light: only the stone presses it

export const LEVELS = [
  {
    id: 1, name: 'Level 1', goal: 'Drop the stone on the button', hint: 'Pull to aim',
    deck: { x0: 0, x1: 6.4 }, sling: { x: 1.1 }, balls: 3,
    // two posts carry a glass bridge; the stone sits on the glass; the button is between the posts
    bodies: [
      { id: 'postL', mat: 'wood', x: 3.4, y: 0.5, w: 0.8, h: 1.0, static: true },
      { id: 'postR', mat: 'wood', x: 5.2, y: 0.5, w: 0.8, h: 1.0, static: true },
      { id: 'glass', mat: 'glass', x: 4.3, y: 1.25, w: 2.3, h: 0.5 },
      { id: 'stone', mat: 'stone', x: 4.3, y: 1.85, w: 0.8, h: 0.7, stone: true },
    ],
    switch: { x: 4.3 }, crate: { x: 5.2, z: 2.75 },
    view: { x0: -0.2, x1: 6.6, y0: -1.0, y1: 3.4 },
    solution: { dx: 0.942, dy: 0.66 },
  },
  {
    id: 2, name: 'Level 2', goal: 'No straight shot — go over the wall', hint: 'Lob it high',
    deck: { x0: 0, x1: 6.4 }, sling: { x: 0.9 }, balls: 3,
    bodies: [
      { id: 'wall', mat: 'stone', x: 2.7, y: 1.2, w: 0.5, h: 2.4, static: true },
      { id: 'postL', mat: 'wood', x: 3.9, y: 0.4, w: 0.6, h: 0.8, static: true },
      { id: 'postR', mat: 'wood', x: 5.5, y: 0.4, w: 0.6, h: 0.8, static: true },
      { id: 'glass', mat: 'glass', x: 4.7, y: 1.05, w: 2.2, h: 0.5 },
      { id: 'stone', mat: 'stone', x: 4.7, y: 1.65, w: 0.8, h: 0.7, stone: true },
      { id: 'bumper', mat: 'bumper', x: 6.55, y: 1.2, w: 0.3, h: 2.4, static: true },
    ],
    switch: { x: 4.7 }, crate: { x: 5.1, z: 2.75 },
    view: { x0: -0.2, x1: 6.8, y0: -1.0, y1: 4.0 },
    solution: { dx: 0.376, dy: 1.034 },
  },
  {
    id: 3, name: 'Level 3', goal: 'Knock the dominoes into the stone', hint: 'Hit the first domino',
    deck: { x0: 0, x1: 6.4 }, sling: { x: 0.9 }, balls: 3,
    // a stone ledge carries four wooden dominoes and the stone at its right edge; the button waits below
    bodies: [
      { id: 'ledge', mat: 'stone', x: 4.1, y: 0.45, w: 3.0, h: 0.9, static: true },
      { id: 'd1', mat: 'wood', x: 3.0, y: 1.6, w: 0.26, h: 1.4 },
      { id: 'd2', mat: 'wood', x: 3.75, y: 1.6, w: 0.26, h: 1.4 },
      { id: 'd3', mat: 'wood', x: 4.5, y: 1.6, w: 0.26, h: 1.4 },
      { id: 'stone', mat: 'stone', x: 5.5, y: 1.25, w: 0.7, h: 0.7, stone: true },
    ],
    switch: { x: 5.9 }, crate: { x: 1.9, z: 2.6 },
    view: { x0: -0.2, x1: 6.6, y0: -1.0, y1: 3.8 },
    solution: { dx: 0.919, dy: 0.771 },
  },
];
