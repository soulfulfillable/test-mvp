const {chromium}=require('/opt/node-tools/node_modules/playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--no-sandbox']});
const [w,h,r]=(process.argv[2]||'390x844x0').split('x').map(Number);
const p=await b.newPage({viewport:{width:w,height:h},hasTouch:true,isMobile:true,deviceScaleFactor:2});
const errs=[];p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+__dirname+'/game/index.html');await p.waitForTimeout(400);
await p.screenshot({path:__dirname+'/qa/_intro.png'});
for(let i=0;i<r;i++){await p.tap('#start');await p.waitForTimeout(300);const t=await p.evaluate(()=>HF.targets());for(const q of t){await p.touchscreen.tap(q.x,q.y);await p.waitForTimeout(300)};await p.waitForTimeout(2200);await p.tap('#next');await p.waitForTimeout(300);}
await p.tap('#start');await p.waitForTimeout(500);
await p.screenshot({path:__dirname+'/qa/_board.png'});
console.log(errs);await b.close();})();
