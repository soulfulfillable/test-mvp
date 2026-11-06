const {chromium}=require('/opt/node-tools/node_modules/playwright-core');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--no-sandbox']});
const [w,h]=(process.argv[2]||'390x844').split('x').map(Number);
const p=await b.newPage({viewport:{width:w,height:h},hasTouch:true,isMobile:true,deviceScaleFactor:1});
const errs=[];p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+__dirname+'/game/index.html');await p.waitForTimeout(400);
for(let r=0;r<3;r++){await p.tap('#start');await p.waitForTimeout(400);
 await p.screenshot({path:`${__dirname}/qa/_r${r+1}_${w}.png`});
 console.log('count',await p.evaluate(()=>HF.count()));
 const t=await p.evaluate(()=>HF.targets());
 for(const q of t){await p.touchscreen.tap(q.x,q.y);}
 for(const ms of [250,450,500]){await p.waitForTimeout(ms);await p.screenshot({path:`${__dirname}/qa/_r${r+1}_act${ms}.png`,clip:{x:Math.max(0,t[0].x-90),y:Math.max(0,t[0].y-110),width:180,height:180}});}
 await p.waitForTimeout(1500);await p.screenshot({path:`${__dirname}/qa/_r${r+1}_done.png`});await p.tap('#next');await p.waitForTimeout(300);}
console.log(errs);await b.close();})();
