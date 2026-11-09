#!/usr/bin/env node
// Precomputes the poly-art pictures into coloring-data.js (the page loads it before coloring-pics.js).
// Run by build.sh; the robot checks that the page's pictures equal a fresh node build of coloring-pics.js.
'use strict';
const fs = require('fs'), path = require('path');
const P = require('./coloring-pics.js');
const out = 'self.ColoringData = ' + JSON.stringify({ PICS: P.PICS }) + ';\n';
fs.writeFileSync(path.join(__dirname, 'coloring-data.js'), out);
console.log('coloring-data.js', out.length, 'bytes,', P.PICS.length, 'pictures');
