// Robot: real touch taps through all 3 rounds at three phone sizes.
// Run: node hidden_fresh/robot.cjs   (screenshots + report.json -> hidden_fresh/qa/)
const {chromium}=require('/opt/node-tools/node_modules/playwright-core');
const path=require('path'),fs=require('fs');
const QA=path.join(__dirname,'qa');fs.mkdirSync(QA,{recursive:true});
const URL='file://'+path.join(__dirname,'game','index.html');
const SIZES=[[390,844],[360,640],[320,568]];
const results=[];let fails=0;
function check(size,name,ok,detail=''){results.push({size,name,ok:!!ok,detail});if(!ok)fails++;console.log(`${ok?'PASS':'FAIL'} ${size} ${name} ${detail}`);}
(async()=>{
 const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--no-sandbox']});
 for(const [w,h] of SIZES){
  const S=`${w}x${h}`;
  const p=await b.newPage({viewport:{width:w,height:h},hasTouch:true,isMobile:true,deviceScaleFactor:2});
  const errs=[];p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});p.on('pageerror',e=>errs.push(e.message));
  await p.goto(URL);await p.waitForTimeout(500);
  const shot=n=>p.screenshot({path:path.join(QA,`${S}_${n}.png`)});
  const visible=sel=>p.evaluate(sel=>{const e=document.querySelector(sel);const r=e.getBoundingClientRect();
    const t=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2);
    return r.width>0&&r.top>=0&&r.left>=0&&r.bottom<=innerHeight&&r.right<=innerWidth&&(t===e||e.contains(t));},sel);
  const tapSel=async sel=>{const r=await p.evaluate(sel=>{const q=document.querySelector(sel).getBoundingClientRect();return{x:q.left+q.width/2,y:q.top+q.height/2}},sel);await p.touchscreen.tap(r.x,r.y);};
  await shot('r1_intro');
  check(S,'intro: target picture shown large',await p.evaluate(()=>document.getElementById('introPic').getBoundingClientRect().width>=140));
  check(S,'intro: Start button on screen',await visible('#start'));
  const roundTargets=[];
  for(let r=0;r<3;r++){
   if(r>0){await shot(`r${r+1}_intro`);check(S,`r${r+1} intro shown`,await visible('#start'));}
   await tapSel('#start');await p.waitForTimeout(400);
   check(S,`r${r+1} playing after Start`,await p.evaluate(()=>HF.playing));
   const geo=await p.evaluate(()=>{const br=document.getElementById('boardWrap').getBoundingClientRect();let out=0;
     document.querySelectorAll('#crowd .c').forEach(c=>{const q=c.getBoundingClientRect();if(q.left<br.left-1||q.right>br.right+1||q.top<br.top-1||q.bottom>br.bottom+1)out++;});
     return{out,n:document.querySelectorAll('#crowd .c').length,board:[br.top,br.bottom],vh:innerHeight,
       minW:Math.min(...[...document.querySelectorAll('#crowd .c')].map(c=>c.getBoundingClientRect().width))};});
   check(S,`r${r+1} whole board on one screen (no scroll)`,geo.out===0&&geo.board[1]<=geo.vh&&geo.board[0]>=0,`${geo.n} capybaras, ${geo.out} outside`);
   check(S,`r${r+1} characters big enough (>=40px)`,geo.minW>=40,`smallest ${geo.minW.toFixed(0)}px`);
   check(S,`r${r+1} hint button visible & not covered`,await visible('#hint'));
   await shot(`r${r+1}_board`);
   const T=await p.evaluate(()=>HF.targets());roundTargets.push(T.map(t=>[Math.round(t.x),Math.round(t.y)]));
   check(S,`r${r+1} target count`,T.length===(r===2?2:1),`${T.length}`);
   // wrong tap
   const d=await p.evaluate(()=>HF.decoy());
   await p.touchscreen.tap(d.x,d.y);await p.waitForTimeout(120);
   const wr=await p.evaluate(()=>({found:HF.found,marks:document.getElementById('marks').childElementCount}));
   check(S,`r${r+1} wrong tap: no credit + red X feedback`,wr.found===0&&wr.marks>0);
   await shot(`r${r+1}_wrong`);
   await p.waitForTimeout(600);
   // hint, 3 presses -> tighter each time, target always inside
   let prevR=1e9,hintOk=true,det=[];
   for(let k=1;k<=3;k++){await tapSel('#hint');await p.waitForTimeout(350);
     const hs=await p.evaluate(()=>{const s=window.__hintShown;const t=HF.targets().find(t=>!t.found);const br=document.getElementById('board').getBoundingClientRect();
       const sc=br.width/document.getElementById('board').viewBox.baseVal.width;
       const dist=Math.hypot(t.x-(br.left+s.cx*sc),t.y-(br.top+s.cy*sc));const op=+getComputedStyle(document.getElementById('dim')).opacity;return{...s,dist,rr:s.r*sc,op};});
     det.push(`L${hs.level} r=${hs.rr.toFixed(0)} d=${hs.dist.toFixed(0)}`);
     if(!(hs.level===k&&hs.dist<=hs.rr&&hs.rr<prevR&&hs.op>0.5))hintOk=false;prevR=hs.rr;
     if(r===0||k===1)await shot(`r${r+1}_hint${k}`);}
   check(S,`r${r+1} hint works (spotlight tightens, target inside)`,hintOk,det.join(' '));
   await p.waitForTimeout(2400);
   // correct taps
   for(let k=0;k<T.length;k++){const t=(await p.evaluate(()=>HF.targets())).filter(t=>!t.found)[0];
     await p.touchscreen.tap(t.x,t.y);await p.waitForTimeout(450);await shot(`r${r+1}_found${k+1}_action`);
     await p.waitForTimeout(700);}
   const st=await p.evaluate(()=>({found:HF.found,rings:document.querySelectorAll('.foundRing').length,left:document.getElementById('left').textContent}));
   check(S,`r${r+1} correct tap(s) counted + ring`,st.found===T.length&&st.rings===T.length,`${st.left}`);
   await p.waitForTimeout(1500);
   check(S,`r${r+1} round-done sheet with button on screen`,await visible('#next'));
   await shot(`r${r+1}_done`);
   if(r===0){ // restart check: new layout and new target position
     await tapSel('#next');await p.waitForTimeout(300);await tapSel('#start');await p.waitForTimeout(300);
     const before=await p.evaluate(()=>JSON.stringify(HF.targets()));
     await tapSel('#restart');await p.waitForTimeout(400);
     const after=await p.evaluate(()=>({t:JSON.stringify(HF.targets()),found:HF.found,playing:HF.playing}));
     check(S,'restart: fresh board, target moved, still playing',after.t!==before&&after.found===0&&after.playing);
     // finish round 2 quickly to keep flow; then continue loop at r=1 with intro already passed
     const T2=await p.evaluate(()=>HF.targets());
     // put state back to the intro of round 2 by playing it in the loop: emulate by not tapping start again
     await p.evaluate(()=>{});
     r++; // we are in round 2 now
     check(S,`r2 hint button visible & not covered`,await visible('#hint'));
     await shot('r2_board');
     const d2=await p.evaluate(()=>HF.decoy());await p.touchscreen.tap(d2.x,d2.y);await p.waitForTimeout(150);await shot('r2_wrong');
     check(S,'r2 wrong tap: no credit',await p.evaluate(()=>HF.found===0));
     await p.waitForTimeout(500);await tapSel('#hint');await p.waitForTimeout(350);await shot('r2_hint1');
     check(S,'r2 hint shows',await p.evaluate(()=>+getComputedStyle(document.getElementById('dim')).opacity>0.5));
     await p.waitForTimeout(2400);
     await p.touchscreen.tap(T2[0].x,T2[0].y);await p.waitForTimeout(450);await shot('r2_found1_action');
     await p.waitForTimeout(2300);
     check(S,'r2 correct tap counted, sheet shown',await p.evaluate(()=>HF.found===1)&&await visible('#next'));
     await shot('r2_done');
     await tapSel('#next');await p.waitForTimeout(400);
   } else if(r===2){
     const txt=await p.evaluate(()=>document.getElementById('next').textContent);
     check(S,'final sheet offers Play again',txt==='Play again');
     await tapSel('#next');await p.waitForTimeout(400);
     check(S,'Play again -> back to round 1 intro',await p.evaluate(()=>HF.round===0&&document.getElementById('introVeil').classList.contains('on')));
   } else {await tapSel('#next');await p.waitForTimeout(400);}
  }
  // randomness across fresh loads
  const pos=new Set();
  for(let k=0;k<5;k++){await p.goto(URL);await p.waitForTimeout(250);pos.add(JSON.stringify(await p.evaluate(()=>HF.targets().map(t=>[Math.round(t.x/20),Math.round(t.y/20)]))));}
  check(S,'target position random each load',pos.size>=4,`${pos.size}/5 distinct`);
  check(S,'console errors 0',errs.length===0,errs.join(' | '));
  await p.close();
 }
 await b.close();
 fs.writeFileSync(path.join(QA,'report.json'),JSON.stringify({date:new Date().toISOString(),pass:results.filter(r=>r.ok).length,fail:fails,results},null,1));
 console.log(`\n${results.length-fails}/${results.length} pass`);process.exit(fails?1:0);
})();
