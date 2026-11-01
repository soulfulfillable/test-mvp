var Qp=Object.defineProperty;var tm=(n,t)=>{for(var e in t)Qp(n,e,{get:t[e],enumerable:!0})};var Is=.008333333333333333,Dn=1.3,Bs=9,ra={wood:{density:.6,friction:.5,restitution:.1},stone:{density:2,friction:.6,restitution:.05},glass:{density:.5,friction:.3,restitution:.1,breakImpulse:1.6},bumper:{density:0,friction:.1,restitution:.95},ground:{density:0,friction:.6,restitution:.15}},tf=.8,hs=[{id:1,name:"Night 1",goal:"Drop the stone on the plate to open the door",hint:"Pull to aim",missHints:["A bleat\u2026 from inside the hut","Break the glass \u2014 the stone will fall","Still searching. Try a little higher"],deck:{x0:0,x1:6.4},sling:{x:1.1},balls:999,bodies:[{id:"postL",mat:"wood",x:3.4,y:.5,w:.8,h:1,static:!0},{id:"postR",mat:"wood",x:5.2,y:.5,w:.8,h:1,static:!0},{id:"glass",mat:"glass",x:4.3,y:1.25,w:2.3,h:.5},{id:"stone",mat:"stone",x:4.3,y:1.85,w:.8,h:.7,stone:!0}],switch:{x:4.3},crate:{x:5.2,z:2.75},view:{x0:-.2,x1:6.6,y0:-1,y1:3.4},solution:{dx:.942,dy:.66}},{id:2,name:"Night 2",goal:"No straight path \u2014 lob the light over the wall",hint:"Lob it high",missHints:["The bleat comes from behind the wall","Higher\u2026 let it drop onto the glass","Still searching. Pull almost straight up"],deck:{x0:0,x1:6.4},sling:{x:.9},balls:999,bodies:[{id:"wall",mat:"stone",x:2.7,y:1.2,w:.5,h:2.4,static:!0},{id:"postL",mat:"wood",x:3.9,y:.4,w:.6,h:.8,static:!0},{id:"postR",mat:"wood",x:5.5,y:.4,w:.6,h:.8,static:!0},{id:"glass",mat:"glass",x:4.7,y:1.05,w:2.2,h:.5},{id:"stone",mat:"stone",x:4.7,y:1.65,w:.8,h:.7,stone:!0},{id:"bumper",mat:"bumper",x:6.55,y:1.2,w:.3,h:2.4,static:!0}],switch:{x:4.7},crate:{x:5.1,z:2.75},view:{x0:-.2,x1:6.8,y0:-1,y1:4},solution:{dx:.376,dy:1.034}},{id:3,name:"Night 3",goal:"Tip the dominoes \u2014 they push the stone off",hint:"Hit the first domino",missHints:["A faint bleat, far to the right","Hit the first domino near its top","Still searching. A bit more pull"],deck:{x0:0,x1:6.4},sling:{x:.9},balls:999,bodies:[{id:"ledge",mat:"stone",x:4.1,y:.45,w:3,h:.9,static:!0},{id:"d1",mat:"wood",x:3,y:1.6,w:.26,h:1.4},{id:"d2",mat:"wood",x:3.75,y:1.6,w:.26,h:1.4},{id:"d3",mat:"wood",x:4.5,y:1.6,w:.26,h:1.4},{id:"stone",mat:"stone",x:5.5,y:1.25,w:.7,h:.7,stone:!0}],switch:{x:5.9},crate:{x:1.9,z:2.6},view:{x0:-.2,x1:6.6,y0:-1,y1:3.8},solution:{dx:.919,dy:.771}}];var Fc={};tm(Fc,{AABB:()=>We,Body:()=>he,Box:()=>Tc,BoxShape:()=>Tc,BroadPhase:()=>Cc,Chain:()=>Js,ChainShape:()=>Js,Circle:()=>wn,CircleShape:()=>wn,ClipVertex:()=>ui,CollideCircles:()=>Dc,CollideEdgeCircle:()=>rl,CollideEdgePolygon:()=>al,CollidePolygonCircle:()=>Nc,CollidePolygons:()=>ol,Contact:()=>Xi,ContactEdge:()=>Va,ContactFeatureType:()=>se,ContactID:()=>nl,ContactImpulse:()=>Bc,DataDriver:()=>ad,Distance:()=>Tn,DistanceInput:()=>Bo,DistanceJoint:()=>Ha,DistanceOutput:()=>Po,DistanceProxy:()=>qn,DynamicTree:()=>ja,Edge:()=>on,EdgeShape:()=>on,Fixture:()=>Ir,FixtureProxy:()=>Na,FrictionJoint:()=>Ga,GearJoint:()=>qa,Joint:()=>Ze,JointEdge:()=>Fa,Manifold:()=>No,ManifoldPoint:()=>Ua,ManifoldType:()=>Ce,Mat22:()=>Ii,Mat33:()=>Sn,Math:()=>Xn,MotorJoint:()=>Xa,MouseJoint:()=>Ya,PointState:()=>Gn,Polygon:()=>an,PolygonShape:()=>an,PrismaticJoint:()=>Wa,PulleyJoint:()=>Ja,RevoluteJoint:()=>Mn,RopeJoint:()=>$a,Rot:()=>et,Serializer:()=>Fo,Settings:()=>Yt,SettingsInternal:()=>dt,Shape:()=>Yn,ShapeCast:()=>id,ShapeCastInput:()=>td,ShapeCastOutput:()=>ed,SimplexCache:()=>Lo,Solver:()=>il,Sweep:()=>Wn,TOIInput:()=>tl,TOIOutput:()=>el,TOIOutputState:()=>ci,Testbed:()=>Lc,TimeOfImpact:()=>Br,TimeStep:()=>Do,Transform:()=>ei,TreeNode:()=>Ec,Vec2:()=>g,Vec3:()=>ae,VelocityConstraintPoint:()=>ka,WeldJoint:()=>Za,WheelJoint:()=>Ka,World:()=>Pr,WorldManifold:()=>sl,clipSegmentToLine:()=>Ys,default:()=>p_,getPointStates:()=>Pc,internal:()=>od,mixFriction:()=>za,mixRestitution:()=>Oa,stats:()=>Me,testOverlap:()=>Qa,testbed:()=>sd});var wc=function(n,t){return wc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])},wc(n,t)};function si(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");wc(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var ni=function(){return ni=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++){e=arguments[i];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},ni.apply(this,arguments)};var Bi=function(n,t){(n===null||typeof n>"u")&&(n={});var e=ni({},n);for(var i in t)t.hasOwnProperty(i)&&typeof n[i]>"u"&&(e[i]=t[i]);if(typeof Object.getOwnPropertySymbols=="function")for(var s=Object.getOwnPropertySymbols(t),r=0;r<s.length;r++){var o=s[r];t.propertyIsEnumerable(o)&&typeof n[o]>"u"&&(e[o]=t[o])}return e},em=Math.random,hi=1e-9,im=Number.isFinite;function nm(n){return n|=n>>1,n|=n>>2,n|=n>>4,n|=n>>8,n|=n>>16,n+1}function sm(n){return n>0&&(n&n-1)===0}function qf(n,t,e){return typeof t>"u"?(e=1,t=0):typeof e>"u"&&(e=t,t=0),e>t?(n=(n-t)%(e-t),n+(n<0?e:t)):(n=(n-e)%(t-e),n+(n<=0?t:e))}function $e(n,t,e){return n<t?t:n>e?e:n}function rm(n,t){return typeof n>"u"?(t=1,n=0):typeof t>"u"&&(t=n,n=0),n===t?n:em()*(t-n)+n}var Xn=Object.create(Math);Xn.EPSILON=hi;Xn.isFinite=im;Xn.nextPowerOfTwo=nm;Xn.isPowerOfTwo=sm;Xn.mod=qf;Xn.clamp=$e;Xn.random=rm;var ef=Math.abs,oc=Math.sqrt,nf=Math.max,sf=Math.min,g=function(){function n(t,e){if(!(this instanceof n))return new n(t,e);typeof t>"u"?(this.x=0,this.y=0):typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}return n.prototype._serialize=function(){return{x:this.x,y:this.y}},n._deserialize=function(t){var e=Object.create(n.prototype);return e.x=t.x,e.y=t.y,e},n.zero=function(){var t=Object.create(n.prototype);return t.x=0,t.y=0,t},n.neo=function(t,e){var i=Object.create(n.prototype);return i.x=t,i.y=e,i},n.clone=function(t){return n.neo(t.x,t.y)},n.prototype.toString=function(){return JSON.stringify(this)},n.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.x)&&Number.isFinite(t.y)},n.assert=function(t){},n.prototype.clone=function(){return n.clone(this)},n.prototype.setZero=function(){return this.x=0,this.y=0,this},n.prototype.set=function(t,e){return typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e),this},n.prototype.setNum=function(t,e){return this.x=t,this.y=e,this},n.prototype.setVec2=function(t){return this.x=t.x,this.y=t.y,this},n.prototype.wSet=function(t,e,i,s){return typeof i<"u"||typeof s<"u"?this.setCombine(t,e,i,s):this.setMul(t,e)},n.prototype.setCombine=function(t,e,i,s){var r=t*e.x+i*s.x,o=t*e.y+i*s.y;return this.x=r,this.y=o,this},n.prototype.setMul=function(t,e){var i=t*e.x,s=t*e.y;return this.x=i,this.y=s,this},n.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},n.prototype.wAdd=function(t,e,i,s){return typeof i<"u"||typeof s<"u"?this.addCombine(t,e,i,s):this.addMul(t,e)},n.prototype.addCombine=function(t,e,i,s){var r=t*e.x+i*s.x,o=t*e.y+i*s.y;return this.x+=r,this.y+=o,this},n.prototype.addMul=function(t,e){var i=t*e.x,s=t*e.y;return this.x+=i,this.y+=s,this},n.prototype.wSub=function(t,e,i,s){return typeof i<"u"||typeof s<"u"?this.subCombine(t,e,i,s):this.subMul(t,e)},n.prototype.subCombine=function(t,e,i,s){var r=t*e.x+i*s.x,o=t*e.y+i*s.y;return this.x-=r,this.y-=o,this},n.prototype.subMul=function(t,e){var i=t*e.x,s=t*e.y;return this.x-=i,this.y-=s,this},n.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this},n.prototype.mul=function(t){return this.x*=t,this.y*=t,this},n.prototype.length=function(){return n.lengthOf(this)},n.prototype.lengthSquared=function(){return n.lengthSquared(this)},n.prototype.normalize=function(){var t=this.length();if(t<hi)return 0;var e=1/t;return this.x*=e,this.y*=e,t},n.normalize=function(t){var e=n.lengthOf(t);if(e<hi)return n.zero();var i=1/e;return n.neo(t.x*i,t.y*i)},n.lengthOf=function(t){return oc(t.x*t.x+t.y*t.y)},n.lengthSquared=function(t){return t.x*t.x+t.y*t.y},n.distance=function(t,e){var i=t.x-e.x,s=t.y-e.y;return oc(i*i+s*s)},n.distanceSquared=function(t,e){var i=t.x-e.x,s=t.y-e.y;return i*i+s*s},n.areEqual=function(t,e){return t===e||typeof e=="object"&&e!==null&&t.x===e.x&&t.y===e.y},n.skew=function(t){return n.neo(-t.y,t.x)},n.dot=function(t,e){return t.x*e.x+t.y*e.y},n.cross=function(t,e){return typeof e=="number"?n.neo(e*t.y,-e*t.x):typeof t=="number"?n.neo(-t*e.y,t*e.x):t.x*e.y-t.y*e.x},n.crossVec2Vec2=function(t,e){return t.x*e.y-t.y*e.x},n.crossVec2Num=function(t,e){return n.neo(e*t.y,-e*t.x)},n.crossNumVec2=function(t,e){return n.neo(-t*e.y,t*e.x)},n.addCross=function(t,e,i){if(typeof i=="number")return n.neo(i*e.y+t.x,-i*e.x+t.y);if(typeof e=="number")return n.neo(-e*i.y+t.x,e*i.x+t.y)},n.addCrossVec2Num=function(t,e,i){return n.neo(i*e.y+t.x,-i*e.x+t.y)},n.addCrossNumVec2=function(t,e,i){return n.neo(-e*i.y+t.x,e*i.x+t.y)},n.add=function(t,e){return n.neo(t.x+e.x,t.y+e.y)},n.wAdd=function(t,e,i,s){return typeof i<"u"||typeof s<"u"?n.combine(t,e,i,s):n.mulNumVec2(t,e)},n.combine=function(t,e,i,s){return n.zero().setCombine(t,e,i,s)},n.sub=function(t,e){return n.neo(t.x-e.x,t.y-e.y)},n.mul=function(t,e){if(typeof t=="object")return n.neo(t.x*e,t.y*e);if(typeof e=="object")return n.neo(t*e.x,t*e.y)},n.mulVec2Num=function(t,e){return n.neo(t.x*e,t.y*e)},n.mulNumVec2=function(t,e){return n.neo(t*e.x,t*e.y)},n.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this},n.neg=function(t){return n.neo(-t.x,-t.y)},n.abs=function(t){return n.neo(ef(t.x),ef(t.y))},n.mid=function(t,e){return n.neo((t.x+e.x)*.5,(t.y+e.y)*.5)},n.upper=function(t,e){return n.neo(nf(t.x,e.x),nf(t.y,e.y))},n.lower=function(t,e){return n.neo(sf(t.x,e.x),sf(t.y,e.y))},n.prototype.clamp=function(t){var e=this.x*this.x+this.y*this.y;if(e>t*t){var i=t/oc(e);this.x*=i,this.y*=i}return this},n.clamp=function(t,e){var i=n.neo(t.x,t.y);return i.clamp(e),i},n.clampVec2=function(t,e,i){return{x:$e(t.x,e?.x,i?.x),y:$e(t.y,e?.y,i?.y)}},n.scaleFn=function(t,e){return function(i){return n.neo(i.x*t,i.y*e)}},n.translateFn=function(t,e){return function(i){return n.neo(i.x+t,i.y+e)}},n}(),Vi=Math.max,zi=Math.min,We=function(){function n(t,e){if(!(this instanceof n))return new n(t,e);this.lowerBound=g.zero(),this.upperBound=g.zero(),typeof t=="object"&&this.lowerBound.setVec2(t),typeof e=="object"?this.upperBound.setVec2(e):typeof t=="object"&&this.upperBound.setVec2(t)}return n.prototype.isValid=function(){return n.isValid(this)},n.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.lowerBound)&&g.isValid(t.upperBound)&&g.sub(t.upperBound,t.lowerBound).lengthSquared()>=0},n.assert=function(t){},n.prototype.getCenter=function(){return g.neo((this.lowerBound.x+this.upperBound.x)*.5,(this.lowerBound.y+this.upperBound.y)*.5)},n.prototype.getExtents=function(){return g.neo((this.upperBound.x-this.lowerBound.x)*.5,(this.upperBound.y-this.lowerBound.y)*.5)},n.prototype.getPerimeter=function(){return 2*(this.upperBound.x-this.lowerBound.x+this.upperBound.y-this.lowerBound.y)},n.prototype.combine=function(t,e){e=e||this;var i=t.lowerBound,s=t.upperBound,r=e.lowerBound,o=e.upperBound,a=zi(i.x,r.x),l=zi(i.y,r.y),h=Vi(o.x,s.x),c=Vi(o.y,s.y);this.lowerBound.setNum(a,l),this.upperBound.setNum(h,c)},n.prototype.combinePoints=function(t,e){this.lowerBound.setNum(zi(t.x,e.x),zi(t.y,e.y)),this.upperBound.setNum(Vi(t.x,e.x),Vi(t.y,e.y))},n.prototype.set=function(t){this.lowerBound.setNum(t.lowerBound.x,t.lowerBound.y),this.upperBound.setNum(t.upperBound.x,t.upperBound.y)},n.prototype.contains=function(t){var e=!0;return e=e&&this.lowerBound.x<=t.lowerBound.x,e=e&&this.lowerBound.y<=t.lowerBound.y,e=e&&t.upperBound.x<=this.upperBound.x,e=e&&t.upperBound.y<=this.upperBound.y,e},n.prototype.extend=function(t){return n.extend(this,t),this},n.extend=function(t,e){return t.lowerBound.x-=e,t.lowerBound.y-=e,t.upperBound.x+=e,t.upperBound.y+=e,t},n.testOverlap=function(t,e){var i=e.lowerBound.x-t.upperBound.x,s=t.lowerBound.x-e.upperBound.x,r=e.lowerBound.y-t.upperBound.y,o=t.lowerBound.y-e.upperBound.y;return!(i>0||r>0||s>0||o>0)},n.areEqual=function(t,e){return g.areEqual(t.lowerBound,e.lowerBound)&&g.areEqual(t.upperBound,e.upperBound)},n.diff=function(t,e){var i=Vi(0,zi(t.upperBound.x,e.upperBound.x)-Vi(e.lowerBound.x,t.lowerBound.x)),s=Vi(0,zi(t.upperBound.y,e.upperBound.y)-Vi(e.lowerBound.y,t.lowerBound.y)),r=t.upperBound.x-t.lowerBound.x,o=t.upperBound.y-t.lowerBound.y,a=e.upperBound.x-e.lowerBound.x,l=e.upperBound.y-e.lowerBound.y;return r*o+a*l-i*s},n.prototype.rayCast=function(t,e){var i=-1/0,s=1/0,r=e.p1,o=g.sub(e.p2,e.p1),a=g.abs(o),l=g.zero();if(a.x<hi){if(r.x<this.lowerBound.x||this.upperBound.x<r.x)return!1}else{var h=1/o.x,c=(this.lowerBound.x-r.x)*h,d=(this.upperBound.x-r.x)*h,u=-1;if(c>d){var p=c;c=d,d=p,u=1}if(c>i&&(l.setZero(),l.x=u,i=c),s=zi(s,d),i>s)return!1}if(a.y<hi){if(r.y<this.lowerBound.y||this.upperBound.y<r.y)return!1}else{var h=1/o.y,c=(this.lowerBound.y-r.y)*h,d=(this.upperBound.y-r.y)*h,u=-1;if(c>d){var p=c;c=d,d=p,u=1}if(c>i&&(l.setZero(),l.y=u,i=c),s=zi(s,d),i>s)return!1}return i<0||e.maxFraction<i?!1:(t.fraction=i,t.normal=l,!0)},n.prototype.toString=function(){return JSON.stringify(this)},n.combinePoints=function(t,e,i){return t.lowerBound.x=zi(e.x,i.x),t.lowerBound.y=zi(e.y,i.y),t.upperBound.x=Vi(e.x,i.x),t.upperBound.y=Vi(e.y,i.y),t},n.combinedPerimeter=function(t,e){var i=zi(t.lowerBound.x,e.lowerBound.x),s=zi(t.lowerBound.y,e.lowerBound.y),r=Vi(t.upperBound.x,e.upperBound.x),o=Vi(t.upperBound.y,e.upperBound.y);return 2*(r-i+o-s)},n}(),oa=Math.PI,Yt=function(){function n(){}return Object.defineProperty(n,"polygonRadius",{get:function(){return 2*n.linearSlop},enumerable:!1,configurable:!0}),n.lengthUnitsPerMeter=1,n.maxManifoldPoints=2,n.maxPolygonVertices=12,n.aabbExtension=.1,n.aabbMultiplier=2,n.linearSlop=.005,n.angularSlop=2/180*oa,n.maxSubSteps=8,n.maxTOIContacts=32,n.maxTOIIterations=20,n.maxDistanceIterations=20,n.velocityThreshold=1,n.maxLinearCorrection=.2,n.maxAngularCorrection=8/180*oa,n.maxTranslation=2,n.maxRotation=.5*oa,n.baumgarte=.2,n.toiBaugarte=.75,n.timeToSleep=.5,n.linearSleepTolerance=.01,n.angularSleepTolerance=2/180*oa,n}(),dt=function(){function n(){}return Object.defineProperty(n,"maxManifoldPoints",{get:function(){return Yt.maxManifoldPoints},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxPolygonVertices",{get:function(){return Yt.maxPolygonVertices},enumerable:!1,configurable:!0}),Object.defineProperty(n,"aabbExtension",{get:function(){return Yt.aabbExtension*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"aabbMultiplier",{get:function(){return Yt.aabbMultiplier},enumerable:!1,configurable:!0}),Object.defineProperty(n,"linearSlop",{get:function(){return Yt.linearSlop*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"linearSlopSquared",{get:function(){return Yt.linearSlop*Yt.lengthUnitsPerMeter*Yt.linearSlop*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"angularSlop",{get:function(){return Yt.angularSlop},enumerable:!1,configurable:!0}),Object.defineProperty(n,"polygonRadius",{get:function(){return 2*Yt.linearSlop},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxSubSteps",{get:function(){return Yt.maxSubSteps},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxTOIContacts",{get:function(){return Yt.maxTOIContacts},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxTOIIterations",{get:function(){return Yt.maxTOIIterations},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxDistanceIterations",{get:function(){return Yt.maxDistanceIterations},enumerable:!1,configurable:!0}),Object.defineProperty(n,"velocityThreshold",{get:function(){return Yt.velocityThreshold*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxLinearCorrection",{get:function(){return Yt.maxLinearCorrection*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxAngularCorrection",{get:function(){return Yt.maxAngularCorrection},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxTranslation",{get:function(){return Yt.maxTranslation*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxTranslationSquared",{get:function(){return Yt.maxTranslation*Yt.lengthUnitsPerMeter*Yt.maxTranslation*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxRotation",{get:function(){return Yt.maxRotation},enumerable:!1,configurable:!0}),Object.defineProperty(n,"maxRotationSquared",{get:function(){return Yt.maxRotation*Yt.maxRotation},enumerable:!1,configurable:!0}),Object.defineProperty(n,"baumgarte",{get:function(){return Yt.baumgarte},enumerable:!1,configurable:!0}),Object.defineProperty(n,"toiBaugarte",{get:function(){return Yt.toiBaugarte},enumerable:!1,configurable:!0}),Object.defineProperty(n,"timeToSleep",{get:function(){return Yt.timeToSleep},enumerable:!1,configurable:!0}),Object.defineProperty(n,"linearSleepTolerance",{get:function(){return Yt.linearSleepTolerance*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"linearSleepToleranceSqr",{get:function(){return Yt.linearSleepTolerance*Yt.lengthUnitsPerMeter*Yt.linearSleepTolerance*Yt.lengthUnitsPerMeter},enumerable:!1,configurable:!0}),Object.defineProperty(n,"angularSleepTolerance",{get:function(){return Yt.angularSleepTolerance},enumerable:!1,configurable:!0}),Object.defineProperty(n,"angularSleepToleranceSqr",{get:function(){return Yt.angularSleepTolerance*Yt.angularSleepTolerance},enumerable:!1,configurable:!0}),n}(),Co=function(){function n(t){this._list=[],this._max=1/0,this._hasCreateFn=!1,this._createCount=0,this._hasAllocateFn=!1,this._allocateCount=0,this._hasReleaseFn=!1,this._releaseCount=0,this._hasDisposeFn=!1,this._disposeCount=0,this._list=[],this._max=t.max||this._max,this._createFn=t.create,this._hasCreateFn=typeof this._createFn=="function",this._allocateFn=t.allocate,this._hasAllocateFn=typeof this._allocateFn=="function",this._releaseFn=t.release,this._hasReleaseFn=typeof this._releaseFn=="function",this._disposeFn=t.dispose,this._hasDisposeFn=typeof this._disposeFn=="function"}return n.prototype.max=function(t){return typeof t=="number"?(this._max=t,this):this._max},n.prototype.size=function(){return this._list.length},n.prototype.allocate=function(){var t;return this._list.length>0?t=this._list.shift():(this._createCount++,this._hasCreateFn?t=this._createFn():t={}),this._allocateCount++,this._hasAllocateFn&&this._allocateFn(t),t},n.prototype.release=function(t){this._list.length<this._max?(this._releaseCount++,this._hasReleaseFn&&this._releaseFn(t),this._list.push(t)):(this._disposeCount++,this._hasDisposeFn&&(t=this._disposeFn(t)))},n.prototype.toString=function(){return" +"+this._createCount+" >"+this._allocateCount+" <"+this._releaseCount+" -"+this._disposeCount+" ="+this._list.length+"/"+this._max},n}(),rf=Math.abs,Ti=Math.max,Ec=function(){function n(t){this.aabb=new We,this.userData=null,this.parent=null,this.child1=null,this.child2=null,this.height=-1,this.id=t}return n.prototype.toString=function(){return this.id+": "+this.userData},n.prototype.isLeaf=function(){return this.child1==null},n}(),of=new Co({create:function(){return new Ec},release:function(n){n.userData=null,n.parent=null,n.child1=null,n.child2=null,n.height=-1,n.id=void 0}}),ja=function(){function n(){this.inputPool=new Co({create:function(){return{}},release:function(t){}}),this.stackPool=new Co({create:function(){return[]},release:function(t){t.length=0}}),this.iteratorPool=new Co({create:function(){return new om},release:function(t){t.close()}}),this.m_root=null,this.m_nodes={},this.m_lastProxyId=0}return n.prototype.getUserData=function(t){var e=this.m_nodes[t];return e.userData},n.prototype.getFatAABB=function(t){var e=this.m_nodes[t];return e.aabb},n.prototype.allocateNode=function(){var t=of.allocate();return t.id=++this.m_lastProxyId,this.m_nodes[t.id]=t,t},n.prototype.freeNode=function(t){delete this.m_nodes[t.id],of.release(t)},n.prototype.createProxy=function(t,e){var i=this.allocateNode();return i.aabb.set(t),We.extend(i.aabb,dt.aabbExtension),i.userData=e,i.height=0,this.insertLeaf(i),i.id},n.prototype.destroyProxy=function(t){var e=this.m_nodes[t];this.removeLeaf(e),this.freeNode(e)},n.prototype.moveProxy=function(t,e,i){var s=this.m_nodes[t];return s.aabb.contains(e)?!1:(this.removeLeaf(s),s.aabb.set(e),e=s.aabb,We.extend(e,dt.aabbExtension),i.x<0?e.lowerBound.x+=i.x*dt.aabbMultiplier:e.upperBound.x+=i.x*dt.aabbMultiplier,i.y<0?e.lowerBound.y+=i.y*dt.aabbMultiplier:e.upperBound.y+=i.y*dt.aabbMultiplier,this.insertLeaf(s),!0)},n.prototype.insertLeaf=function(t){if(this.m_root==null){this.m_root=t,this.m_root.parent=null;return}for(var e=t.aabb,i=this.m_root;!i.isLeaf();){var s=i.child1,r=i.child2,o=i.aabb.getPerimeter(),a=We.combinedPerimeter(i.aabb,e),l=2*a,h=2*(a-o),c=We.combinedPerimeter(e,s.aabb),d=c+h;if(!s.isLeaf()){var u=s.aabb.getPerimeter();d-=u}var p=We.combinedPerimeter(e,r.aabb),f=p+h;if(!r.isLeaf()){var u=r.aabb.getPerimeter();f-=u}if(l<d&&l<f)break;d<f?i=s:i=r}var v=i,_=v.parent,m=this.allocateNode();for(m.parent=_,m.userData=null,m.aabb.combine(e,v.aabb),m.height=v.height+1,_!=null?(_.child1===v?_.child1=m:_.child2=m,m.child1=v,m.child2=t,v.parent=m,t.parent=m):(m.child1=v,m.child2=t,v.parent=m,t.parent=m,this.m_root=m),i=t.parent;i!=null;){i=this.balance(i);var s=i.child1,r=i.child2;i.height=1+Ti(s.height,r.height),i.aabb.combine(s.aabb,r.aabb),i=i.parent}},n.prototype.removeLeaf=function(t){if(t===this.m_root){this.m_root=null;return}var e=t.parent,i=e.parent,s;if(e.child1===t?s=e.child2:s=e.child1,i!=null){i.child1===e?i.child1=s:i.child2=s,s.parent=i,this.freeNode(e);for(var r=i;r!=null;){r=this.balance(r);var o=r.child1,a=r.child2;r.aabb.combine(o.aabb,a.aabb),r.height=1+Ti(o.height,a.height),r=r.parent}}else this.m_root=s,s.parent=null,this.freeNode(e)},n.prototype.balance=function(t){var e=t;if(e.isLeaf()||e.height<2)return t;var i=e.child1,s=e.child2,r=s.height-i.height;if(r>1){var o=s.child1,a=s.child2;return s.child1=e,s.parent=e.parent,e.parent=s,s.parent!=null?s.parent.child1===t?s.parent.child1=s:s.parent.child2=s:this.m_root=s,o.height>a.height?(s.child2=o,e.child2=a,a.parent=e,e.aabb.combine(i.aabb,a.aabb),s.aabb.combine(e.aabb,o.aabb),e.height=1+Ti(i.height,a.height),s.height=1+Ti(e.height,o.height)):(s.child2=a,e.child2=o,o.parent=e,e.aabb.combine(i.aabb,o.aabb),s.aabb.combine(e.aabb,a.aabb),e.height=1+Ti(i.height,o.height),s.height=1+Ti(e.height,a.height)),s}if(r<-1){var l=i.child1,h=i.child2;return i.child1=e,i.parent=e.parent,e.parent=i,i.parent!=null?i.parent.child1===e?i.parent.child1=i:i.parent.child2=i:this.m_root=i,l.height>h.height?(i.child2=l,e.child1=h,h.parent=e,e.aabb.combine(s.aabb,h.aabb),i.aabb.combine(e.aabb,l.aabb),e.height=1+Ti(s.height,h.height),i.height=1+Ti(e.height,l.height)):(i.child2=h,e.child1=l,l.parent=e,e.aabb.combine(s.aabb,l.aabb),i.aabb.combine(e.aabb,h.aabb),e.height=1+Ti(s.height,l.height),i.height=1+Ti(e.height,h.height)),i}return e},n.prototype.getHeight=function(){return this.m_root==null?0:this.m_root.height},n.prototype.getAreaRatio=function(){if(this.m_root==null)return 0;for(var t=this.m_root,e=t.aabb.getPerimeter(),i=0,s,r=this.iteratorPool.allocate().preorder(this.m_root);s=r.next();)s.height<0||(i+=s.aabb.getPerimeter());return this.iteratorPool.release(r),i/e},n.prototype.computeHeight=function(t){var e;if(typeof t<"u"?e=this.m_nodes[t]:e=this.m_root,e.isLeaf())return 0;var i=this.computeHeight(e.child1.id),s=this.computeHeight(e.child2.id);return 1+Ti(i,s)},n.prototype.validateStructure=function(t){if(t!=null){this.m_root;var e=t.child1,i=t.child2;t.isLeaf()||(this.validateStructure(e),this.validateStructure(i))}},n.prototype.validateMetrics=function(t){if(t!=null){var e=t.child1,i=t.child2;t.isLeaf()||(this.validateMetrics(e),this.validateMetrics(i))}},n.prototype.validate=function(){},n.prototype.getMaxBalance=function(){for(var t=0,e,i=this.iteratorPool.allocate().preorder(this.m_root);e=i.next();)if(!(e.height<=1)){var s=rf(e.child2.height-e.child1.height);t=Ti(t,s)}return this.iteratorPool.release(i),t},n.prototype.rebuildBottomUp=function(){for(var t=[],e=0,i,s=this.iteratorPool.allocate().preorder(this.m_root);i=s.next();)i.height<0||(i.isLeaf()?(i.parent=null,t[e]=i,++e):this.freeNode(i));for(this.iteratorPool.release(s);e>1;){for(var r=1/0,o=-1,a=-1,l=0;l<e;++l)for(var h=t[l].aabb,c=l+1;c<e;++c){var d=t[c].aabb,u=We.combinedPerimeter(h,d);u<r&&(o=l,a=c,r=u)}var p=t[o],f=t[a],v=this.allocateNode();v.child1=p,v.child2=f,v.height=1+Ti(p.height,f.height),v.aabb.combine(p.aabb,f.aabb),v.parent=null,p.parent=v,f.parent=v,t[a]=t[e-1],t[o]=v,--e}this.m_root=t[0]},n.prototype.shiftOrigin=function(t){for(var e,i=this.iteratorPool.allocate().preorder(this.m_root);e=i.next();){var s=e.aabb;s.lowerBound.x-=t.x,s.lowerBound.y-=t.y,s.upperBound.x-=t.x,s.upperBound.y-=t.y}this.iteratorPool.release(i)},n.prototype.query=function(t,e){var i=this.stackPool.allocate();for(i.push(this.m_root);i.length>0;){var s=i.pop();if(s!=null&&We.testOverlap(s.aabb,t))if(s.isLeaf()){var r=e(s.id);if(r===!1)return}else i.push(s.child1),i.push(s.child2)}this.stackPool.release(i)},n.prototype.rayCast=function(t,e){var i=t.p1,s=t.p2,r=g.sub(s,i);r.normalize();var o=g.crossNumVec2(1,r),a=g.abs(o),l=t.maxFraction,h=new We,c=g.combine(1-l,i,l,s);h.combinePoints(i,c);var d=this.stackPool.allocate(),u=this.inputPool.allocate();for(d.push(this.m_root);d.length>0;){var p=d.pop();if(p!=null&&We.testOverlap(p.aabb,h)!==!1){var f=p.aabb.getCenter(),v=p.aabb.getExtents(),_=rf(g.dot(o,g.sub(i,f)))-g.dot(a,v);if(!(_>0))if(p.isLeaf()){u.p1=g.clone(t.p1),u.p2=g.clone(t.p2),u.maxFraction=l;var m=e(u,p.id);if(m===0)break;m>0&&(l=m,c=g.combine(1-l,i,l,s),h.combinePoints(i,c))}else d.push(p.child1),d.push(p.child2)}}this.stackPool.release(d),this.inputPool.release(u)},n}(),om=function(){function n(){this.parents=[],this.states=[]}return n.prototype.preorder=function(t){return this.parents.length=0,this.parents.push(t),this.states.length=0,this.states.push(0),this},n.prototype.next=function(){for(;this.parents.length>0;){var t=this.parents.length-1,e=this.parents[t];if(this.states[t]===0)return this.states[t]=1,e;if(this.states[t]===1&&(this.states[t]=2,e.child1))return this.parents.push(e.child1),this.states.push(1),e.child1;if(this.states[t]===2&&(this.states[t]=3,e.child2))return this.parents.push(e.child2),this.states.push(1),e.child2;this.parents.pop(),this.states.pop()}},n.prototype.close=function(){this.parents.length=0},n}(),am=Math.max,lm=Math.min,Cc=function(){function n(){var t=this;this.m_tree=new ja,this.m_moveBuffer=[],this.query=function(e,i){t.m_tree.query(e,i)},this.queryCallback=function(e){if(e===t.m_queryProxyId)return!0;var i=lm(e,t.m_queryProxyId),s=am(e,t.m_queryProxyId),r=t.m_tree.getUserData(i),o=t.m_tree.getUserData(s);return t.m_callback(r,o),!0}}return n.prototype.getUserData=function(t){return this.m_tree.getUserData(t)},n.prototype.testOverlap=function(t,e){var i=this.m_tree.getFatAABB(t),s=this.m_tree.getFatAABB(e);return We.testOverlap(i,s)},n.prototype.getFatAABB=function(t){return this.m_tree.getFatAABB(t)},n.prototype.getProxyCount=function(){return this.m_moveBuffer.length},n.prototype.getTreeHeight=function(){return this.m_tree.getHeight()},n.prototype.getTreeBalance=function(){return this.m_tree.getMaxBalance()},n.prototype.getTreeQuality=function(){return this.m_tree.getAreaRatio()},n.prototype.rayCast=function(t,e){this.m_tree.rayCast(t,e)},n.prototype.shiftOrigin=function(t){this.m_tree.shiftOrigin(t)},n.prototype.createProxy=function(t,e){var i=this.m_tree.createProxy(t,e);return this.bufferMove(i),i},n.prototype.destroyProxy=function(t){this.unbufferMove(t),this.m_tree.destroyProxy(t)},n.prototype.moveProxy=function(t,e,i){var s=this.m_tree.moveProxy(t,e,i);s&&this.bufferMove(t)},n.prototype.touchProxy=function(t){this.bufferMove(t)},n.prototype.bufferMove=function(t){this.m_moveBuffer.push(t)},n.prototype.unbufferMove=function(t){for(var e=0;e<this.m_moveBuffer.length;++e)this.m_moveBuffer[e]===t&&(this.m_moveBuffer[e]=null)},n.prototype.updatePairs=function(t){for(this.m_callback=t;this.m_moveBuffer.length>0;)if(this.m_queryProxyId=this.m_moveBuffer.pop(),this.m_queryProxyId!==null){var e=this.m_tree.getFatAABB(this.m_queryProxyId);this.m_tree.query(e,this.queryCallback)}},n}(),Xf=Math.sin,Yf=Math.cos,Rc=Math.sqrt;function j(n,t){return{x:n,y:t}}function cm(n){return{s:Xf(n),c:Yf(n)}}function Je(n,t,e){return n.x=t,n.y=e,n}function q(n,t){return n.x=t.x,n.y=t.y,n}function Ut(n){return n.x=0,n.y=0,n}function Io(n){return n.x=-n.x,n.y=-n.y,n}function Wi(n,t){return n.x+=t.x,n.y+=t.y,n}function hm(n,t,e){return n.x=t.x+e.x,n.y=t.y+e.y,n}function Hn(n,t){return n.x-=t.x,n.y-=t.y,n}function Xt(n,t,e){return n.x=t.x-e.x,n.y=t.y-e.y,n}function af(n,t){return n.x*=t,n.y*=t,n}function Ot(n,t,e){return n.x=t*e.x,n.y=t*e.y,n}function sn(n,t,e){return n.x+=t*e.x,n.y+=t*e.y,n}function Eo(n,t,e){return n.x-=t*e.x,n.y-=t*e.y,n}function Ee(n,t,e,i,s){return n.x=t*e.x+i*s.x,n.y=t*e.y+i*s.y,n}function bn(n,t,e,i,s,r,o){return n.x=t*e.x+i*s.x+r*o.x,n.y=t*e.y+i*s.y+r*o.y,n}function um(n){var t=Rc(n.x*n.x+n.y*n.y);if(t!==0){var e=1/t;n.x*=e,n.y*=e}return t}function rn(n){var t=Rc(n.x*n.x+n.y*n.y);if(t>0){var e=1/t;n.x*=e,n.y*=e}return n}function Ws(n,t,e){var i=e*t.y,s=-e*t.x;return n.x=i,n.y=s,n}function Ri(n,t,e){var i=-t*e.y,s=t*e.x;return n.x=i,n.y=s,n}function jt(n,t){return n.x*t.y-n.y*t.x}function ht(n,t){return n.x*t.x+n.y*t.y}function qs(n){return n.x*n.x+n.y*n.y}function Jf(n,t){var e=n.x-t.x,i=n.y-t.y;return Rc(e*e+i*i)}function Xs(n,t){var e=n.x-t.x,i=n.y-t.y;return e*e+i*i}function fm(n,t){return n.c=Yf(t),n.s=Xf(t),n}function qi(n,t,e){return n.x=t.c*e.x-t.s*e.y,n.y=t.s*e.x+t.c*e.y,n}function Rr(n,t,e){var i=t.c*e.x+t.s*e.y,s=-t.s*e.x+t.c*e.y;return n.x=i,n.y=s,n}function dm(n,t,e,i){var s=t.c*i.x+t.s*i.y,r=-t.s*i.x+t.c*i.y,o=e.c*s-e.s*r,a=e.s*s+e.c*r;return n.x=o,n.y=a,n}function $s(n,t,e){return{p:j(n,t),q:cm(e)}}function Da(n,t){return n.p.x=t.p.x,n.p.y=t.p.y,n.q.s=t.q.s,n.q.c=t.q.c,n}function qt(n,t,e){var i=t.q.c*e.x-t.q.s*e.y+t.p.x,s=t.q.s*e.x+t.q.c*e.y+t.p.y;return n.x=i,n.y=s,n}function Ic(n,t,e){var i=e.x-t.p.x,s=e.y-t.p.y,r=t.q.c*i+t.q.s*s,o=-t.q.s*i+t.q.c*s;return n.x=r,n.y=o,n}function $f(n,t,e,i){var s=t.q.c*i.x-t.q.s*i.y+t.p.x,r=t.q.s*i.x+t.q.c*i.y+t.p.y,o=s-e.p.x,a=r-e.p.y,l=e.q.c*o+e.q.s*a,h=-e.q.s*o+e.q.c*a;return n.x=l,n.y=h,n}function Zf(n,t,e){var i=t.q.c*e.q.c+t.q.s*e.q.s,s=t.q.c*e.q.s-t.q.s*e.q.c,r=t.q.c*(e.p.x-t.p.x)+t.q.s*(e.p.y-t.p.y),o=-t.q.s*(e.p.x-t.p.x)+t.q.c*(e.p.y-t.p.y);return n.q.c=i,n.q.s=s,n.p.x=r,n.p.y=o,n}var lf=Math.sin,cf=Math.cos,pm=Math.atan2,et=function(){function n(t){if(!(this instanceof n))return new n(t);typeof t=="number"?this.setAngle(t):typeof t=="object"?this.setRot(t):this.setIdentity()}return n.neo=function(t){var e=Object.create(n.prototype);return e.setAngle(t),e},n.clone=function(t){var e=Object.create(n.prototype);return e.s=t.s,e.c=t.c,e},n.identity=function(){var t=Object.create(n.prototype);return t.s=0,t.c=1,t},n.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.s)&&Number.isFinite(t.c)},n.assert=function(t){},n.prototype.setIdentity=function(){this.s=0,this.c=1},n.prototype.set=function(t){typeof t=="object"?(this.s=t.s,this.c=t.c):(this.s=lf(t),this.c=cf(t))},n.prototype.setRot=function(t){this.s=t.s,this.c=t.c},n.prototype.setAngle=function(t){this.s=lf(t),this.c=cf(t)},n.prototype.getAngle=function(){return pm(this.s,this.c)},n.prototype.getXAxis=function(){return g.neo(this.c,this.s)},n.prototype.getYAxis=function(){return g.neo(-this.s,this.c)},n.mul=function(t,e){if("c"in e&&"s"in e){var i=n.identity();return i.s=t.s*e.c+t.c*e.s,i.c=t.c*e.c-t.s*e.s,i}else if("x"in e&&"y"in e)return g.neo(t.c*e.x-t.s*e.y,t.s*e.x+t.c*e.y)},n.mulRot=function(t,e){var i=n.identity();return i.s=t.s*e.c+t.c*e.s,i.c=t.c*e.c-t.s*e.s,i},n.mulVec2=function(t,e){return g.neo(t.c*e.x-t.s*e.y,t.s*e.x+t.c*e.y)},n.mulSub=function(t,e,i){var s=t.c*(e.x-i.x)-t.s*(e.y-i.y),r=t.s*(e.x-i.x)+t.c*(e.y-i.y);return g.neo(s,r)},n.mulT=function(t,e){if("c"in e&&"s"in e){var i=n.identity();return i.s=t.c*e.s-t.s*e.c,i.c=t.c*e.c+t.s*e.s,i}else if("x"in e&&"y"in e)return g.neo(t.c*e.x+t.s*e.y,-t.s*e.x+t.c*e.y)},n.mulTRot=function(t,e){var i=n.identity();return i.s=t.c*e.s-t.s*e.c,i.c=t.c*e.c+t.s*e.s,i},n.mulTVec2=function(t,e){return g.neo(t.c*e.x+t.s*e.y,-t.s*e.x+t.c*e.y)},n}(),mm=Math.atan2,hf=Math.PI,Ps=j(0,0),Wn=function(){function n(){this.localCenter=g.zero(),this.c=g.zero(),this.a=0,this.alpha0=0,this.c0=g.zero(),this.a0=0}return n.prototype.recycle=function(){Ut(this.localCenter),Ut(this.c),this.a=0,this.alpha0=0,Ut(this.c0),this.a0=0},n.prototype.setTransform=function(t){qt(Ps,t,this.localCenter),q(this.c,Ps),q(this.c0,Ps),this.a=this.a0=mm(t.q.s,t.q.c)},n.prototype.setLocalCenter=function(t,e){q(this.localCenter,t),qt(Ps,e,this.localCenter),q(this.c,Ps),q(this.c0,Ps)},n.prototype.getTransform=function(t,e){e===void 0&&(e=0),fm(t.q,(1-e)*this.a0+e*this.a),Ee(t.p,1-e,this.c0,e,this.c),Hn(t.p,qi(Ps,t.q,this.localCenter))},n.prototype.advance=function(t){var e=(t-this.alpha0)/(1-this.alpha0);Ee(this.c0,e,this.c,1-e,this.c0),this.a0=e*this.a+(1-e)*this.a0,this.alpha0=t},n.prototype.forward=function(){this.a0=this.a,q(this.c0,this.c)},n.prototype.normalize=function(){var t=qf(this.a0,-hf,+hf);this.a-=this.a0-t,this.a0=t},n.prototype.isValid=function(){return Number.isFinite(this.localCenter.x)&&Number.isFinite(this.localCenter.y)&&Number.isFinite(this.c0.x)&&Number.isFinite(this.c0.y)&&Number.isFinite(this.c.x)&&Number.isFinite(this.c.y)&&Number.isFinite(this.a0)&&Number.isFinite(this.a)&&Number.isFinite(this.alpha0)},n.prototype.set=function(t){q(this.localCenter,t.localCenter),q(this.c,t.c),this.a=t.a,this.alpha0=t.alpha0,q(this.c0,t.c0),this.a0=t.a0},n}(),ei=function(){function n(t,e){if(!(this instanceof n))return new n(t,e);this.p=g.zero(),this.q=et.identity(),typeof t<"u"&&this.p.setVec2(t),typeof e<"u"&&this.q.setAngle(e)}return n.clone=function(t){var e=Object.create(n.prototype);return e.p=g.clone(t.p),e.q=et.clone(t.q),e},n.neo=function(t,e){var i=Object.create(n.prototype);return i.p=g.clone(t),i.q=et.clone(e),i},n.identity=function(){var t=Object.create(n.prototype);return t.p=g.zero(),t.q=et.identity(),t},n.prototype.setIdentity=function(){this.p.setZero(),this.q.setIdentity()},n.prototype.set=function(t,e){typeof e>"u"?(this.p.set(t.p),this.q.set(t.q)):(this.p.set(t),this.q.set(e))},n.prototype.setNum=function(t,e){this.p.setVec2(t),this.q.setAngle(e)},n.prototype.setTransform=function(t){this.p.setVec2(t.p),this.q.setRot(t.q)},n.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.p)&&et.isValid(t.q)},n.assert=function(t){},n.mul=function(t,e){if(Array.isArray(e)){for(var i=[],s=0;s<e.length;s++)i[s]=n.mul(t,e[s]);return i}else{if("x"in e&&"y"in e)return n.mulVec2(t,e);if("p"in e&&"q"in e)return n.mulXf(t,e)}},n.mulAll=function(t,e){for(var i=[],s=0;s<e.length;s++)i[s]=n.mul(t,e[s]);return i},n.mulFn=function(t){return function(e){return n.mul(t,e)}},n.mulVec2=function(t,e){var i=t.q.c*e.x-t.q.s*e.y+t.p.x,s=t.q.s*e.x+t.q.c*e.y+t.p.y;return g.neo(i,s)},n.mulXf=function(t,e){var i=n.identity();return i.q=et.mulRot(t.q,e.q),i.p=g.add(et.mulVec2(t.q,e.p),t.p),i},n.mulT=function(t,e){if("x"in e&&"y"in e)return n.mulTVec2(t,e);if("p"in e&&"q"in e)return n.mulTXf(t,e)},n.mulTVec2=function(t,e){var i=e.x-t.p.x,s=e.y-t.p.y,r=t.q.c*i+t.q.s*s,o=-t.q.s*i+t.q.c*s;return g.neo(r,o)},n.mulTXf=function(t,e){var i=n.identity();return i.q.setRot(et.mulTRot(t.q,e.q)),i.p.setVec2(et.mulTVec2(t.q,g.sub(e.p,t.p))),i},n}(),_m=function(){function n(){this.v=g.zero(),this.w=0}return n}(),Kf=Math.sin,jf=Math.cos,vm=function(){function n(){this.c=g.zero(),this.a=0}return n.prototype.getTransform=function(t,e){return t.q.c=jf(this.a),t.q.s=Kf(this.a),t.p.x=this.c.x-(t.q.c*e.x-t.q.s*e.y),t.p.y=this.c.y-(t.q.s*e.x+t.q.c*e.y),t},n}();function aa(n,t,e,i){return n.q.c=jf(i),n.q.s=Kf(i),n.p.x=e.x-(n.q.c*t.x-n.q.s*t.y),n.p.y=e.y-(n.q.s*t.x+n.q.c*t.y),n}var Yn=function(){function n(){this.style={},this.appData={}}return n.isValid=function(t){return t===null||typeof t>"u"?!1:typeof t.m_type=="string"&&typeof t.m_radius=="number"},n}(),uf=new We,ff=new We,df=j(0,0),gm={userData:null,friction:.2,restitution:0,density:0,isSensor:!1,filterGroupIndex:0,filterCategoryBits:1,filterMaskBits:65535},Na=function(){function n(t,e){this.aabb=new We,this.fixture=t,this.childIndex=e}return n}(),Ir=function(){function n(t,e,i){this.style={},this.appData={},e.shape?(i=e,e=e.shape):typeof i=="number"&&(i={density:i}),i=Bi(i,gm),this.m_body=t,this.m_friction=i.friction,this.m_restitution=i.restitution,this.m_density=i.density,this.m_isSensor=i.isSensor,this.m_filterGroupIndex=i.filterGroupIndex,this.m_filterCategoryBits=i.filterCategoryBits,this.m_filterMaskBits=i.filterMaskBits,this.m_shape=e,this.m_next=null,this.m_proxies=[],this.m_proxyCount=0;for(var s=this.m_shape.getChildCount(),r=0;r<s;++r)this.m_proxies[r]=new Na(this,r);this.m_userData=i.userData,typeof i.style=="object"&&i.style!==null&&(this.style=i.style)}return n.prototype._reset=function(){var t=this.getBody(),e=t.m_world.m_broadPhase;this.destroyProxies(e),this.m_shape._reset&&this.m_shape._reset();for(var i=this.m_shape.getChildCount(),s=0;s<i;++s)this.m_proxies[s]=new Na(this,s);this.createProxies(e,t.m_xf),t.resetMassData()},n.prototype._serialize=function(){return{friction:this.m_friction,restitution:this.m_restitution,density:this.m_density,isSensor:this.m_isSensor,filterGroupIndex:this.m_filterGroupIndex,filterCategoryBits:this.m_filterCategoryBits,filterMaskBits:this.m_filterMaskBits,shape:this.m_shape}},n._deserialize=function(t,e,i){var s=i(Yn,t.shape),r=s&&new n(e,s,t);return r},n.prototype.getType=function(){return this.m_shape.m_type},n.prototype.getShape=function(){return this.m_shape},n.prototype.isSensor=function(){return this.m_isSensor},n.prototype.setSensor=function(t){t!=this.m_isSensor&&(this.m_body.setAwake(!0),this.m_isSensor=t)},n.prototype.getUserData=function(){return this.m_userData},n.prototype.setUserData=function(t){this.m_userData=t},n.prototype.getBody=function(){return this.m_body},n.prototype.getNext=function(){return this.m_next},n.prototype.getDensity=function(){return this.m_density},n.prototype.setDensity=function(t){this.m_density=t},n.prototype.getFriction=function(){return this.m_friction},n.prototype.setFriction=function(t){this.m_friction=t},n.prototype.getRestitution=function(){return this.m_restitution},n.prototype.setRestitution=function(t){this.m_restitution=t},n.prototype.testPoint=function(t){return this.m_shape.testPoint(this.m_body.getTransform(),t)},n.prototype.rayCast=function(t,e,i){return this.m_shape.rayCast(t,e,this.m_body.getTransform(),i)},n.prototype.getMassData=function(t){this.m_shape.computeMass(t,this.m_density)},n.prototype.getAABB=function(t){return this.m_proxies[t].aabb},n.prototype.createProxies=function(t,e){this.m_proxyCount=this.m_shape.getChildCount();for(var i=0;i<this.m_proxyCount;++i){var s=this.m_proxies[i];this.m_shape.computeAABB(s.aabb,e,i),s.proxyId=t.createProxy(s.aabb,s)}},n.prototype.destroyProxies=function(t){for(var e=0;e<this.m_proxyCount;++e){var i=this.m_proxies[e];t.destroyProxy(i.proxyId),i.proxyId=null}this.m_proxyCount=0},n.prototype.synchronize=function(t,e,i){for(var s=0;s<this.m_proxyCount;++s){var r=this.m_proxies[s];this.m_shape.computeAABB(uf,e,r.childIndex),this.m_shape.computeAABB(ff,i,r.childIndex),r.aabb.combine(uf,ff),Xt(df,i.p,e.p),t.moveProxy(r.proxyId,r.aabb,df)}},n.prototype.setFilterData=function(t){this.m_filterGroupIndex=t.groupIndex,this.m_filterCategoryBits=t.categoryBits,this.m_filterMaskBits=t.maskBits,this.refilter()},n.prototype.getFilterGroupIndex=function(){return this.m_filterGroupIndex},n.prototype.setFilterGroupIndex=function(t){this.m_filterGroupIndex=t,this.refilter()},n.prototype.getFilterCategoryBits=function(){return this.m_filterCategoryBits},n.prototype.setFilterCategoryBits=function(t){this.m_filterCategoryBits=t,this.refilter()},n.prototype.getFilterMaskBits=function(){return this.m_filterMaskBits},n.prototype.setFilterMaskBits=function(t){this.m_filterMaskBits=t,this.refilter()},n.prototype.refilter=function(){if(this.m_body!=null){for(var t=this.m_body.getContactList();t;){var e=t.contact,i=e.getFixtureA(),s=e.getFixtureB();(i==this||s==this)&&e.flagForFiltering(),t=t.next}var r=this.m_body.getWorld();if(r!=null)for(var o=r.m_broadPhase,a=0;a<this.m_proxyCount;++a)o.touchProxy(this.m_proxies[a].proxyId)}},n.prototype.shouldCollide=function(t){if(t.m_filterGroupIndex===this.m_filterGroupIndex&&t.m_filterGroupIndex!==0)return t.m_filterGroupIndex>0;var e=(t.m_filterMaskBits&this.m_filterCategoryBits)!==0,i=(t.m_filterCategoryBits&this.m_filterMaskBits)!==0,s=e&&i;return s},n}(),Cr="static",pf="kinematic",Qi="dynamic",la=j(0,0),Ls=j(0,0),ca=j(0,0),ha=j(0,0),mf=$s(0,0,0),ym={type:Cr,position:g.zero(),angle:0,linearVelocity:g.zero(),angularVelocity:0,linearDamping:0,angularDamping:0,fixedRotation:!1,bullet:!1,gravityScale:1,allowSleep:!0,awake:!0,active:!0,userData:null},he=function(){function n(t,e){this.style={},this.appData={},e=Bi(e,ym),this.m_world=t,this.m_awakeFlag=e.awake,this.m_autoSleepFlag=e.allowSleep,this.m_bulletFlag=e.bullet,this.m_fixedRotationFlag=e.fixedRotation,this.m_activeFlag=e.active,this.m_islandFlag=!1,this.m_toiFlag=!1,this.m_userData=e.userData,this.m_type=e.type,this.m_type==Qi?(this.m_mass=1,this.m_invMass=1):(this.m_mass=0,this.m_invMass=0),this.m_I=0,this.m_invI=0,this.m_xf=ei.identity(),this.m_xf.p.setVec2(e.position),this.m_xf.q.setAngle(e.angle),this.m_sweep=new Wn,this.m_sweep.setTransform(this.m_xf),this.c_velocity=new _m,this.c_position=new vm,this.m_force=g.zero(),this.m_torque=0,this.m_linearVelocity=g.clone(e.linearVelocity),this.m_angularVelocity=e.angularVelocity,this.m_linearDamping=e.linearDamping,this.m_angularDamping=e.angularDamping,this.m_gravityScale=e.gravityScale,this.m_sleepTime=0,this.m_jointList=null,this.m_contactList=null,this.m_fixtureList=null,this.m_prev=null,this.m_next=null,this.m_destroyed=!1,typeof e.style=="object"&&e.style!==null&&(this.style=e.style)}return n.prototype._serialize=function(){for(var t=[],e=this.m_fixtureList;e;e=e.m_next)t.push(e);return{type:this.m_type,bullet:this.m_bulletFlag,fixedRotation:this.m_fixedRotationFlag,position:this.m_xf.p,angle:this.m_xf.q.getAngle(),linearVelocity:this.m_linearVelocity,angularVelocity:this.m_angularVelocity,fixtures:t}},n._deserialize=function(t,e,i){var s=new n(e,t);if(t.fixtures)for(var r=t.fixtures.length-1;r>=0;r--){var o=i(Ir,t.fixtures[r],s);s._addFixture(o)}return s},n.prototype.isWorldLocked=function(){return!!(this.m_world&&this.m_world.isLocked())},n.prototype.getWorld=function(){return this.m_world},n.prototype.getNext=function(){return this.m_next},n.prototype.setUserData=function(t){this.m_userData=t},n.prototype.getUserData=function(){return this.m_userData},n.prototype.getFixtureList=function(){return this.m_fixtureList},n.prototype.getJointList=function(){return this.m_jointList},n.prototype.getContactList=function(){return this.m_contactList},n.prototype.isStatic=function(){return this.m_type==Cr},n.prototype.isDynamic=function(){return this.m_type==Qi},n.prototype.isKinematic=function(){return this.m_type==pf},n.prototype.setStatic=function(){return this.setType(Cr),this},n.prototype.setDynamic=function(){return this.setType(Qi),this},n.prototype.setKinematic=function(){return this.setType(pf),this},n.prototype.getType=function(){return this.m_type},n.prototype.setType=function(t){if(this.isWorldLocked()!=!0&&this.m_type!=t){this.m_type=t,this.resetMassData(),this.m_type==Cr&&(this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_sweep.forward(),this.synchronizeFixtures()),this.setAwake(!0),this.m_force.setZero(),this.m_torque=0;for(var e=this.m_contactList;e;){var i=e;e=e.next,this.m_world.destroyContact(i.contact)}this.m_contactList=null;for(var s=this.m_world.m_broadPhase,r=this.m_fixtureList;r;r=r.m_next)for(var o=0;o<r.m_proxyCount;++o)s.touchProxy(r.m_proxies[o].proxyId)}},n.prototype.isBullet=function(){return this.m_bulletFlag},n.prototype.setBullet=function(t){this.m_bulletFlag=!!t},n.prototype.isSleepingAllowed=function(){return this.m_autoSleepFlag},n.prototype.setSleepingAllowed=function(t){this.m_autoSleepFlag=!!t,this.m_autoSleepFlag==!1&&this.setAwake(!0)},n.prototype.isAwake=function(){return this.m_awakeFlag},n.prototype.setAwake=function(t){t?(this.m_awakeFlag=!0,this.m_sleepTime=0):(this.m_awakeFlag=!1,this.m_sleepTime=0,this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_force.setZero(),this.m_torque=0)},n.prototype.isActive=function(){return this.m_activeFlag},n.prototype.setActive=function(t){if(t!=this.m_activeFlag)if(this.m_activeFlag=!!t,this.m_activeFlag){for(var e=this.m_world.m_broadPhase,i=this.m_fixtureList;i;i=i.m_next)i.createProxies(e,this.m_xf);this.m_world.m_newFixture=!0}else{for(var e=this.m_world.m_broadPhase,i=this.m_fixtureList;i;i=i.m_next)i.destroyProxies(e);for(var s=this.m_contactList;s;){var r=s;s=s.next,this.m_world.destroyContact(r.contact)}this.m_contactList=null}},n.prototype.isFixedRotation=function(){return this.m_fixedRotationFlag},n.prototype.setFixedRotation=function(t){this.m_fixedRotationFlag!=t&&(this.m_fixedRotationFlag=!!t,this.m_angularVelocity=0,this.resetMassData())},n.prototype.getTransform=function(){return this.m_xf},n.prototype.setTransform=function(t,e){if(this.isWorldLocked()!=!0){typeof e=="number"?this.m_xf.setNum(t,e):this.m_xf.setTransform(t),this.m_sweep.setTransform(this.m_xf);for(var i=this.m_world.m_broadPhase,s=this.m_fixtureList;s;s=s.m_next)s.synchronize(i,this.m_xf,this.m_xf);this.setAwake(!0)}},n.prototype.synchronizeTransform=function(){this.m_sweep.getTransform(this.m_xf,1)},n.prototype.synchronizeFixtures=function(){this.m_sweep.getTransform(mf,0);for(var t=this.m_world.m_broadPhase,e=this.m_fixtureList;e;e=e.m_next)e.synchronize(t,mf,this.m_xf)},n.prototype.advance=function(t){this.m_sweep.advance(t),q(this.m_sweep.c,this.m_sweep.c0),this.m_sweep.a=this.m_sweep.a0,this.m_sweep.getTransform(this.m_xf,1)},n.prototype.getPosition=function(){return this.m_xf.p},n.prototype.setPosition=function(t){this.setTransform(t,this.m_sweep.a)},n.prototype.getAngle=function(){return this.m_sweep.a},n.prototype.setAngle=function(t){this.setTransform(this.m_xf.p,t)},n.prototype.getWorldCenter=function(){return this.m_sweep.c},n.prototype.getLocalCenter=function(){return this.m_sweep.localCenter},n.prototype.getLinearVelocity=function(){return this.m_linearVelocity},n.prototype.getLinearVelocityFromWorldPoint=function(t){var e=g.sub(t,this.m_sweep.c);return g.add(this.m_linearVelocity,g.crossNumVec2(this.m_angularVelocity,e))},n.prototype.getLinearVelocityFromLocalPoint=function(t){return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(t))},n.prototype.setLinearVelocity=function(t){this.m_type!=Cr&&(g.dot(t,t)>0&&this.setAwake(!0),this.m_linearVelocity.setVec2(t))},n.prototype.getAngularVelocity=function(){return this.m_angularVelocity},n.prototype.setAngularVelocity=function(t){this.m_type!=Cr&&(t*t>0&&this.setAwake(!0),this.m_angularVelocity=t)},n.prototype.getLinearDamping=function(){return this.m_linearDamping},n.prototype.setLinearDamping=function(t){this.m_linearDamping=t},n.prototype.getAngularDamping=function(){return this.m_angularDamping},n.prototype.setAngularDamping=function(t){this.m_angularDamping=t},n.prototype.getGravityScale=function(){return this.m_gravityScale},n.prototype.setGravityScale=function(t){this.m_gravityScale=t},n.prototype.getMass=function(){return this.m_mass},n.prototype.getInertia=function(){return this.m_I+this.m_mass*g.dot(this.m_sweep.localCenter,this.m_sweep.localCenter)},n.prototype.getMassData=function(t){t.mass=this.m_mass,t.I=this.getInertia(),q(t.center,this.m_sweep.localCenter)},n.prototype.resetMassData=function(){if(this.m_mass=0,this.m_invMass=0,this.m_I=0,this.m_invI=0,Ut(this.m_sweep.localCenter),this.isStatic()||this.isKinematic()){q(this.m_sweep.c0,this.m_xf.p),q(this.m_sweep.c,this.m_xf.p),this.m_sweep.a0=this.m_sweep.a;return}Ut(Ls);for(var t=this.m_fixtureList;t;t=t.m_next)if(t.m_density!=0){var e={mass:0,center:j(0,0),I:0};t.getMassData(e),this.m_mass+=e.mass,sn(Ls,e.mass,e.center),this.m_I+=e.I}this.m_mass>0?(this.m_invMass=1/this.m_mass,Ot(Ls,this.m_invMass,Ls)):(this.m_mass=1,this.m_invMass=1),this.m_I>0&&this.m_fixedRotationFlag==!1?(this.m_I-=this.m_mass*ht(Ls,Ls),this.m_invI=1/this.m_I):(this.m_I=0,this.m_invI=0),q(la,this.m_sweep.c),this.m_sweep.setLocalCenter(Ls,this.m_xf),Xt(ca,this.m_sweep.c,la),Ri(ha,this.m_angularVelocity,ca),Wi(this.m_linearVelocity,ha)},n.prototype.setMassData=function(t){this.isWorldLocked()!=!0&&this.m_type==Qi&&(this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_mass=t.mass,this.m_mass<=0&&(this.m_mass=1),this.m_invMass=1/this.m_mass,t.I>0&&this.m_fixedRotationFlag==!1&&(this.m_I=t.I-this.m_mass*ht(t.center,t.center),this.m_invI=1/this.m_I),q(la,this.m_sweep.c),this.m_sweep.setLocalCenter(t.center,this.m_xf),Xt(ca,this.m_sweep.c,la),Ri(ha,this.m_angularVelocity,ca),Wi(this.m_linearVelocity,ha))},n.prototype.applyForce=function(t,e,i){i===void 0&&(i=!0),this.m_type==Qi&&(i&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_force.add(t),this.m_torque+=g.crossVec2Vec2(g.sub(e,this.m_sweep.c),t)))},n.prototype.applyForceToCenter=function(t,e){e===void 0&&(e=!0),this.m_type==Qi&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&this.m_force.add(t))},n.prototype.applyTorque=function(t,e){e===void 0&&(e=!0),this.m_type==Qi&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_torque+=t))},n.prototype.applyLinearImpulse=function(t,e,i){i===void 0&&(i=!0),this.m_type==Qi&&(i&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_linearVelocity.addMul(this.m_invMass,t),this.m_angularVelocity+=this.m_invI*g.crossVec2Vec2(g.sub(e,this.m_sweep.c),t)))},n.prototype.applyAngularImpulse=function(t,e){e===void 0&&(e=!0),this.m_type==Qi&&(e&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_angularVelocity+=this.m_invI*t))},n.prototype.shouldCollide=function(t){if(this.m_type!=Qi&&t.m_type!=Qi)return!1;for(var e=this.m_jointList;e;e=e.next)if(e.other==t&&e.joint.m_collideConnected==!1)return!1;return!0},n.prototype._addFixture=function(t){if(this.isWorldLocked()==!0)return null;if(this.m_activeFlag){var e=this.m_world.m_broadPhase;t.createProxies(e,this.m_xf)}return t.m_next=this.m_fixtureList,this.m_fixtureList=t,t.m_density>0&&this.resetMassData(),this.m_world.m_newFixture=!0,t},n.prototype.createFixture=function(t,e){if(this.isWorldLocked()==!0)return null;var i=new Ir(this,t,e);return this._addFixture(i),this.m_world.publish("add-fixture",i),i},n.prototype.destroyFixture=function(t){if(this.isWorldLocked()!=!0){if(this.m_fixtureList===t)this.m_fixtureList=t.m_next;else for(var e=this.m_fixtureList;e!=null;){if(e.m_next===t){e.m_next=t.m_next;break}e=e.m_next}for(var i=this.m_contactList;i;){var s=i.contact;i=i.next;var r=s.getFixtureA(),o=s.getFixtureB();(t==r||t==o)&&this.m_world.destroyContact(s)}if(this.m_activeFlag){var a=this.m_world.m_broadPhase;t.destroyProxies(a)}t.m_body=null,t.m_next=null,this.m_world.publish("remove-fixture",t),this.resetMassData()}},n.prototype.getWorldPoint=function(t){return ei.mulVec2(this.m_xf,t)},n.prototype.getWorldVector=function(t){return et.mulVec2(this.m_xf.q,t)},n.prototype.getLocalPoint=function(t){return ei.mulTVec2(this.m_xf,t)},n.prototype.getLocalVector=function(t){return et.mulTVec2(this.m_xf.q,t)},n.STATIC="static",n.KINEMATIC="kinematic",n.DYNAMIC="dynamic",n}(),Fa=function(){function n(){this.other=null,this.joint=null,this.prev=null,this.next=null}return n}(),Ze=function(){function n(t,e,i){this.m_type="unknown-joint",this.m_prev=null,this.m_next=null,this.m_edgeA=new Fa,this.m_edgeB=new Fa,this.m_islandFlag=!1,this.style={},this.appData={},e="bodyA"in t?t.bodyA:e,i="bodyB"in t?t.bodyB:i,this.m_bodyA=e,this.m_bodyB=i,this.m_collideConnected=!!t.collideConnected,this.m_userData=t.userData,typeof t.style=="object"&&t.style!==null&&(this.style=t.style)}return n.prototype.isActive=function(){return this.m_bodyA.isActive()&&this.m_bodyB.isActive()},n.prototype.getType=function(){return this.m_type},n.prototype.getBodyA=function(){return this.m_bodyA},n.prototype.getBodyB=function(){return this.m_bodyB},n.prototype.getNext=function(){return this.m_next},n.prototype.getUserData=function(){return this.m_userData},n.prototype.setUserData=function(t){this.m_userData=t},n.prototype.getCollideConnected=function(){return this.m_collideConnected},n.prototype.shiftOrigin=function(t){},n.prototype._resetAnchors=function(t){return this._reset(t)},n}(),Me={gjkCalls:0,gjkIters:0,gjkMaxIters:0,toiTime:0,toiMaxTime:0,toiCalls:0,toiIters:0,toiMaxIters:0,toiRootIters:0,toiMaxRootIters:0,toString:function(n){n=typeof n=="string"?n:`
`;var t="";for(var e in this)typeof this[e]!="function"&&typeof this[e]!="object"&&(t+=e+": "+this[e]+n);return t}},xm=function(){return Date.now()},bm=function(n){return Date.now()-n},_f={now:xm,diff:bm},La=Math.max,ua=j(0,0),fa=j(0,0),Ei=j(0,0),da=j(0,0),ac=j(0,0),Am=j(0,0),Mm=j(0,0);Me.gjkCalls=0;Me.gjkIters=0;Me.gjkMaxIters=0;var Bo=function(){function n(){this.proxyA=new qn,this.proxyB=new qn,this.transformA=ei.identity(),this.transformB=ei.identity(),this.useRadii=!1}return n.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.transformA.setIdentity(),this.transformB.setIdentity(),this.useRadii=!1},n}(),Po=function(){function n(){this.pointA=j(0,0),this.pointB=j(0,0),this.distance=0,this.iterations=0}return n.prototype.recycle=function(){Ut(this.pointA),Ut(this.pointB),this.distance=0,this.iterations=0},n}(),Lo=function(){function n(){this.metric=0,this.indexA=[],this.indexB=[],this.count=0}return n.prototype.recycle=function(){this.metric=0,this.indexA.length=0,this.indexB.length=0,this.count=0},n}(),Tn=function(n,t,e){++Me.gjkCalls;var i=e.proxyA,s=e.proxyB,r=e.transformA,o=e.transformB;tn.recycle(),tn.readCache(t,i,r,s,o);for(var a=tn.m_v,l=dt.maxDistanceIterations,h=[],c=[],d=0,u=0;u<l;){d=tn.m_count;for(var p=0;p<d;++p)h[p]=a[p].indexA,c[p]=a[p].indexB;if(tn.solve(),tn.m_count===3)break;var f=tn.getSearchDirection();if(qs(f)<hi*hi)break;var v=a[tn.m_count];v.indexA=i.getSupport(Rr(ua,r.q,Ot(ua,-1,f))),qt(v.wA,r,i.getVertex(v.indexA)),v.indexB=s.getSupport(Rr(ua,o.q,f)),qt(v.wB,o,s.getVertex(v.indexB)),Xt(v.w,v.wB,v.wA),++u,++Me.gjkIters;for(var _=!1,p=0;p<d;++p)if(v.indexA===h[p]&&v.indexB===c[p]){_=!0;break}if(_)break;++tn.m_count}if(Me.gjkMaxIters=La(Me.gjkMaxIters,u),tn.getWitnessPoints(n.pointA,n.pointB),n.distance=Jf(n.pointA,n.pointB),n.iterations=u,tn.writeCache(t),e.useRadii){var m=i.m_radius,x=s.m_radius;if(n.distance>m+x&&n.distance>hi)n.distance-=m+x,Xt(fa,n.pointB,n.pointA),rn(fa),sn(n.pointA,m,fa),Eo(n.pointB,x,fa);else{var b=Xt(ua,n.pointA,n.pointB);q(n.pointA,b),q(n.pointB,b),n.distance=0}}},qn=function(){function n(){this.m_vertices=[],this.m_count=0,this.m_radius=0}return n.prototype.recycle=function(){this.m_vertices.length=0,this.m_count=0,this.m_radius=0},n.prototype.getVertexCount=function(){return this.m_count},n.prototype.getVertex=function(t){return this.m_vertices[t]},n.prototype.getSupport=function(t){for(var e=0,i=-1/0,s=0;s<this.m_count;++s){var r=ht(this.m_vertices[s],t);r>i&&(e=s,i=r)}return e},n.prototype.getSupportVertex=function(t){return this.m_vertices[this.getSupport(t)]},n.prototype.set=function(t,e){t.computeDistanceProxy(this,e)},n.prototype.setVertices=function(t,e,i){this.m_vertices=t,this.m_count=e,this.m_radius=i},n}(),lc=function(){function n(){this.wA=j(0,0),this.indexA=0,this.wB=j(0,0),this.indexB=0,this.w=j(0,0),this.a=0}return n.prototype.recycle=function(){this.indexA=0,this.indexB=0,Ut(this.wA),Ut(this.wB),Ut(this.w),this.a=0},n.prototype.set=function(t){this.indexA=t.indexA,this.indexB=t.indexB,q(this.wA,t.wA),q(this.wB,t.wB),q(this.w,t.w),this.a=t.a},n}(),pa=j(0,0),vo=j(0,0),Qf=function(){function n(){this.m_v1=new lc,this.m_v2=new lc,this.m_v3=new lc,this.m_v=[this.m_v1,this.m_v2,this.m_v3]}return n.prototype.recycle=function(){this.m_v1.recycle(),this.m_v2.recycle(),this.m_v3.recycle(),this.m_count=0},n.prototype.toString=function(){return this.m_count===3?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y,this.m_v3.a,this.m_v3.wA.x,this.m_v3.wA.y,this.m_v3.wB.x,this.m_v3.wB.y].toString():this.m_count===2?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y].toString():this.m_count===1?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y].toString():"+"+this.m_count},n.prototype.readCache=function(t,e,i,s,r){this.m_count=t.count;for(var o=0;o<this.m_count;++o){var a=this.m_v[o];a.indexA=t.indexA[o],a.indexB=t.indexB[o];var l=e.getVertex(a.indexA),h=s.getVertex(a.indexB);qt(a.wA,i,l),qt(a.wB,r,h),Xt(a.w,a.wB,a.wA),a.a=0}if(this.m_count>1){var c=t.metric,d=this.getMetric();(d<.5*c||2*c<d||d<hi)&&(this.m_count=0)}if(this.m_count===0){var a=this.m_v[0];a.indexA=0,a.indexB=0;var l=e.getVertex(0),h=s.getVertex(0);qt(a.wA,i,l),qt(a.wB,r,h),Xt(a.w,a.wB,a.wA),a.a=1,this.m_count=1}},n.prototype.writeCache=function(t){t.metric=this.getMetric(),t.count=this.m_count;for(var e=0;e<this.m_count;++e)t.indexA[e]=this.m_v[e].indexA,t.indexB[e]=this.m_v[e].indexB},n.prototype.getSearchDirection=function(){var t=this.m_v1,e=this.m_v2;switch(this.m_count){case 1:return Je(pa,-t.w.x,-t.w.y);case 2:{Xt(Ei,e.w,t.w);var i=-jt(Ei,t.w);return i>0?Je(pa,-Ei.y,Ei.x):Je(pa,Ei.y,-Ei.x)}default:return Ut(pa)}},n.prototype.getClosestPoint=function(){var t=this.m_v1,e=this.m_v2;switch(this.m_count){case 0:return Ut(vo);case 1:return q(vo,t.w);case 2:return Ee(vo,t.a,t.w,e.a,e.w);case 3:return Ut(vo);default:return Ut(vo)}},n.prototype.getWitnessPoints=function(t,e){var i=this.m_v1,s=this.m_v2,r=this.m_v3;switch(this.m_count){case 0:break;case 1:q(t,i.wA),q(e,i.wB);break;case 2:Ee(t,i.a,i.wA,s.a,s.wA),Ee(e,i.a,i.wB,s.a,s.wB);break;case 3:bn(t,i.a,i.wA,s.a,s.wA,r.a,r.wA),q(e,t);break}},n.prototype.getMetric=function(){switch(this.m_count){case 0:return 0;case 1:return 0;case 2:return Jf(this.m_v1.w,this.m_v2.w);case 3:return jt(Xt(Am,this.m_v2.w,this.m_v1.w),Xt(Mm,this.m_v3.w,this.m_v1.w));default:return 0}},n.prototype.solve=function(){switch(this.m_count){case 1:break;case 2:this.solve2();break;case 3:this.solve3();break}},n.prototype.solve2=function(){var t=this.m_v1.w,e=this.m_v2.w;Xt(Ei,e,t);var i=-ht(t,Ei);if(i<=0){this.m_v1.a=1,this.m_count=1;return}var s=ht(e,Ei);if(s<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}var r=1/(s+i);this.m_v1.a=s*r,this.m_v2.a=i*r,this.m_count=2},n.prototype.solve3=function(){var t=this.m_v1.w,e=this.m_v2.w,i=this.m_v3.w;Xt(Ei,e,t);var s=ht(t,Ei),r=ht(e,Ei),o=r,a=-s;Xt(da,i,t);var l=ht(t,da),h=ht(i,da),c=h,d=-l;Xt(ac,i,e);var u=ht(e,ac),p=ht(i,ac),f=p,v=-u,_=jt(Ei,da),m=_*jt(e,i),x=_*jt(i,t),b=_*jt(t,e);if(a<=0&&d<=0){this.m_v1.a=1,this.m_count=1;return}if(o>0&&a>0&&b<=0){var y=1/(o+a);this.m_v1.a=o*y,this.m_v2.a=a*y,this.m_count=2;return}if(c>0&&d>0&&x<=0){var R=1/(c+d);this.m_v1.a=c*R,this.m_v3.a=d*R,this.m_count=2,this.m_v2.set(this.m_v3);return}if(o<=0&&v<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}if(c<=0&&f<=0){this.m_v3.a=1,this.m_count=1,this.m_v1.set(this.m_v3);return}if(f>0&&v>0&&m<=0){var T=1/(f+v);this.m_v2.a=f*T,this.m_v3.a=v*T,this.m_count=2,this.m_v1.set(this.m_v3);return}var E=1/(m+x+b);this.m_v1.a=m*E,this.m_v2.a=x*E,this.m_v3.a=b*E,this.m_count=3},n}(),tn=new Qf,Ds=new Bo,vf=new Lo,cc=new Po,Qa=function(n,t,e,i,s,r){return Ds.recycle(),Ds.proxyA.set(n,t),Ds.proxyB.set(e,i),Da(Ds.transformA,s),Da(Ds.transformB,r),Ds.useRadii=!0,cc.recycle(),vf.recycle(),Tn(cc,vf,Ds),cc.distance<10*hi};Tn.testOverlap=Qa;Tn.Input=Bo;Tn.Output=Po;Tn.Proxy=qn;Tn.Cache=Lo;var td=function(){function n(){this.proxyA=new qn,this.proxyB=new qn,this.transformA=ei.identity(),this.transformB=ei.identity(),this.translationB=g.zero()}return n.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.transformA.setIdentity(),this.transformB.setIdentity(),Ut(this.translationB)},n}(),ed=function(){function n(){this.point=g.zero(),this.normal=g.zero(),this.lambda=1,this.iterations=0}return n}(),id=function(n,t){n.iterations=0,n.lambda=1,n.normal.setZero(),n.point.setZero();var e=t.proxyA,i=t.proxyB,s=La(e.m_radius,dt.polygonRadius),r=La(i.m_radius,dt.polygonRadius),o=s+r,a=t.transformA,l=t.transformB,h=t.translationB,c=g.zero(),d=0,u=new Qf;u.m_count=0;for(var p=u.m_v,f=e.getSupport(et.mulTVec2(a.q,g.neg(h))),v=ei.mulVec2(a,e.getVertex(f)),_=i.getSupport(et.mulTVec2(l.q,h)),m=ei.mulVec2(l,i.getVertex(_)),x=g.sub(v,m),b=La(dt.polygonRadius,o-dt.polygonRadius),y=.5*dt.linearSlop,R=20,T=0;T<R&&x.length()-b>y;){n.iterations+=1,f=e.getSupport(et.mulTVec2(a.q,g.neg(x))),v=ei.mulVec2(a,e.getVertex(f)),_=i.getSupport(et.mulTVec2(l.q,x)),m=ei.mulVec2(l,i.getVertex(_));var E=g.sub(v,m);x.normalize();var I=g.dot(x,E),S=g.dot(x,h);if(I-b>d*S){if(S<=0||(d=(I-b)/S,d>1))return!1;c.setMul(-1,x),u.m_count=0}var A=p[u.m_count];switch(A.indexA=_,A.wA=g.combine(1,m,d,h),A.indexB=f,A.wB=v,A.w=g.sub(A.wB,A.wA),A.a=1,u.m_count+=1,u.m_count){case 1:break;case 2:u.solve2();break;case 3:u.solve3();break}if(u.m_count==3)return!1;x.setVec2(u.getClosestPoint()),++T}if(T==0)return!1;var P=g.zero(),k=g.zero();return u.getWitnessPoints(k,P),x.lengthSquared()>0&&(c.setMul(-1,x),c.normalize()),n.point=g.combine(1,P,s,c),n.normal=c,n.lambda=d,n.iterations=T,!0},Sm=Math.abs,ma=Math.max,tl=function(){function n(){this.proxyA=new qn,this.proxyB=new qn,this.sweepA=new Wn,this.sweepB=new Wn}return n.prototype.recycle=function(){this.proxyA.recycle(),this.proxyB.recycle(),this.sweepA.recycle(),this.sweepB.recycle(),this.tMax=-1},n}(),ci;(function(n){n[n.e_unset=-1]="e_unset",n[n.e_unknown=0]="e_unknown",n[n.e_failed=1]="e_failed",n[n.e_overlapped=2]="e_overlapped",n[n.e_touching=3]="e_touching",n[n.e_separated=4]="e_separated"})(ci||(ci={}));var el=function(){function n(){this.state=ci.e_unset,this.t=-1}return n.prototype.recycle=function(){this.state=ci.e_unset,this.t=-1},n}();Me.toiTime=0;Me.toiMaxTime=0;Me.toiCalls=0;Me.toiIters=0;Me.toiMaxIters=0;Me.toiRootIters=0;Me.toiMaxRootIters=0;var mr=new Bo,hc=new Po,uc=new Lo,gi=$s(0,0,0),yi=$s(0,0,0),go=j(0,0),_n=j(0,0),Oi=j(0,0),vi=j(0,0),_a=j(0,0),va=j(0,0),ga=j(0,0),ya=j(0,0),Br=function(n,t){var e=_f.now();++Me.toiCalls,n.state=ci.e_unknown,n.t=t.tMax;var i=t.proxyA,s=t.proxyB,r=t.sweepA,o=t.sweepB;if(r.normalize(),o.normalize(),!r.isValid()||!o.isValid()){n.state=ci.e_failed;return}var a=t.tMax,l=i.m_radius+s.m_radius,h=ma(dt.linearSlop,l-3*dt.linearSlop),c=.25*dt.linearSlop,d=0,u=dt.maxTOIIterations,p=0;for(uc.recycle(),mr.proxyA.setVertices(i.m_vertices,i.m_count,i.m_radius),mr.proxyB.setVertices(s.m_vertices,s.m_count,s.m_radius),mr.useRadii=!1;;){if(r.getTransform(gi,d),o.getTransform(yi,d),Da(mr.transformA,gi),Da(mr.transformB,yi),Tn(hc,uc,mr),hc.distance<=0){n.state=ci.e_overlapped,n.t=0;break}if(hc.distance<h+c){n.state=ci.e_touching,n.t=d;break}yo.initialize(uc,i,r,s,o,d);for(var f=!1,v=a,_=0;;){var m=yo.findMinSeparation(v);if(m>h+c){n.state=ci.e_separated,n.t=a,f=!0;break}if(m>h-c){d=v;break}var x=yo.evaluate(d);if(x<h-c){n.state=ci.e_failed,n.t=d,f=!0;break}if(x<=h+c){n.state=ci.e_touching,n.t=d,f=!0;break}for(var b=0,y=d,R=v;;){var T=void 0;b&1?T=y+(h-x)*(R-y)/(m-x):T=.5*(y+R),++b,++Me.toiRootIters;var E=yo.evaluate(T);if(Sm(E-h)<c){v=T;break}if(E>h?(y=T,x=E):(R=T,m=E),b===50)break}if(Me.toiMaxRootIters=ma(Me.toiMaxRootIters,b),++_,_===dt.maxPolygonVertices)break}if(++p,++Me.toiIters,f)break;if(p===u){n.state=ci.e_failed,n.t=d;break}}Me.toiMaxIters=ma(Me.toiMaxIters,p);var I=_f.diff(e);Me.toiMaxTime=ma(Me.toiMaxTime,I),Me.toiTime+=I,yo.recycle()},An;(function(n){n[n.e_unset=-1]="e_unset",n[n.e_points=1]="e_points",n[n.e_faceA=2]="e_faceA",n[n.e_faceB=3]="e_faceB"})(An||(An={}));var wm=function(){function n(){this.m_proxyA=null,this.m_proxyB=null,this.m_sweepA=null,this.m_sweepB=null,this.m_type=An.e_unset,this.m_localPoint=j(0,0),this.m_axis=j(0,0),this.indexA=-1,this.indexB=-1}return n.prototype.recycle=function(){this.m_proxyA=null,this.m_proxyB=null,this.m_sweepA=null,this.m_sweepB=null,this.m_type=An.e_unset,Ut(this.m_localPoint),Ut(this.m_axis),this.indexA=-1,this.indexB=-1},n.prototype.initialize=function(t,e,i,s,r,o){var a=t.count;if(this.m_proxyA=e,this.m_proxyB=s,this.m_sweepA=i,this.m_sweepB=r,this.m_sweepA.getTransform(gi,o),this.m_sweepB.getTransform(yi,o),a===1){this.m_type=An.e_points;var l=this.m_proxyA.getVertex(t.indexA[0]),h=this.m_proxyB.getVertex(t.indexB[0]);qt(_n,gi,l),qt(Oi,yi,h),Xt(this.m_axis,Oi,_n);var c=um(this.m_axis);return c}else if(t.indexA[0]===t.indexA[1]){this.m_type=An.e_faceB;var d=s.getVertex(t.indexB[0]),u=s.getVertex(t.indexB[1]);Ws(this.m_axis,Xt(go,u,d),1),rn(this.m_axis),qi(vi,yi.q,this.m_axis),Ee(this.m_localPoint,.5,d,.5,u),qt(Oi,yi,this.m_localPoint);var p=e.getVertex(t.indexA[0]),f=ei.mulVec2(gi,p),c=ht(f,vi)-ht(Oi,vi);return c<0&&(Io(this.m_axis),c=-c),c}else{this.m_type=An.e_faceA;var v=this.m_proxyA.getVertex(t.indexA[0]),_=this.m_proxyA.getVertex(t.indexA[1]);Ws(this.m_axis,Xt(go,_,v),1),rn(this.m_axis),qi(vi,gi.q,this.m_axis),Ee(this.m_localPoint,.5,v,.5,_),qt(_n,gi,this.m_localPoint);var m=this.m_proxyB.getVertex(t.indexB[0]);qt(Oi,yi,m);var c=ht(Oi,vi)-ht(_n,vi);return c<0&&(Io(this.m_axis),c=-c),c}},n.prototype.compute=function(t,e){switch(this.m_sweepA.getTransform(gi,e),this.m_sweepB.getTransform(yi,e),this.m_type){case An.e_points:{t&&(Rr(_a,gi.q,this.m_axis),Rr(va,yi.q,Ot(go,-1,this.m_axis)),this.indexA=this.m_proxyA.getSupport(_a),this.indexB=this.m_proxyB.getSupport(va)),q(ga,this.m_proxyA.getVertex(this.indexA)),q(ya,this.m_proxyB.getVertex(this.indexB)),qt(_n,gi,ga),qt(Oi,yi,ya);var i=ht(Oi,this.m_axis)-ht(_n,this.m_axis);return i}case An.e_faceA:{qi(vi,gi.q,this.m_axis),qt(_n,gi,this.m_localPoint),t&&(Rr(va,yi.q,Ot(go,-1,vi)),this.indexA=-1,this.indexB=this.m_proxyB.getSupport(va)),q(ya,this.m_proxyB.getVertex(this.indexB)),qt(Oi,yi,ya);var i=ht(Oi,vi)-ht(_n,vi);return i}case An.e_faceB:{qi(vi,yi.q,this.m_axis),qt(Oi,yi,this.m_localPoint),t&&(Rr(_a,gi.q,Ot(go,-1,vi)),this.indexB=-1,this.indexA=this.m_proxyA.getSupport(_a)),q(ga,this.m_proxyA.getVertex(this.indexA)),qt(_n,gi,ga);var i=ht(_n,vi)-ht(Oi,vi);return i}default:return t&&(this.indexA=-1,this.indexB=-1),0}},n.prototype.findMinSeparation=function(t){return this.compute(!0,t)},n.prototype.evaluate=function(t){return this.compute(!1,t)},n}(),yo=new wm;Br.Input=tl;Br.Output=el;var gf=Math.abs,yf=Math.sqrt,xa=Math.min,Do=function(){function n(){this.dt=0,this.inv_dt=0,this.velocityIterations=0,this.positionIterations=0,this.warmStarting=!1,this.blockSolve=!0,this.inv_dt0=0,this.dtRatio=1}return n.prototype.reset=function(t){this.dt>0&&(this.inv_dt0=this.inv_dt),this.dt=t,this.inv_dt=t==0?0:1/t,this.dtRatio=t*this.inv_dt0},n}(),_r=new Do,Nn=j(0,0),ti=j(0,0),ba=j(0,0),vr=new tl,fc=new el,xf=new Wn,bf=new Wn,Af=new Wn,Bc=function(){function n(t){this.contact=t,this.normals=[],this.tangents=[]}return n.prototype.recycle=function(){this.normals.length=0,this.tangents.length=0},Object.defineProperty(n.prototype,"normalImpulses",{get:function(){var t=this.contact,e=this.normals;e.length=0;for(var i=0;i<t.v_points.length;++i)e.push(t.v_points[i].normalImpulse);return e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"tangentImpulses",{get:function(){var t=this.contact,e=this.tangents;e.length=0;for(var i=0;i<t.v_points.length;++i)e.push(t.v_points[i].tangentImpulse);return e},enumerable:!1,configurable:!0}),n}(),il=function(){function n(t){this.m_world=t,this.m_stack=[],this.m_bodies=[],this.m_contacts=[],this.m_joints=[]}return n.prototype.clear=function(){this.m_stack.length=0,this.m_bodies.length=0,this.m_contacts.length=0,this.m_joints.length=0},n.prototype.addBody=function(t){this.m_bodies.push(t)},n.prototype.addContact=function(t){this.m_contacts.push(t)},n.prototype.addJoint=function(t){this.m_joints.push(t)},n.prototype.solveWorld=function(t){for(var e=this.m_world,i=e.m_bodyList;i;i=i.m_next)i.m_islandFlag=!1;for(var s=e.m_contactList;s;s=s.m_next)s.m_islandFlag=!1;for(var r=e.m_jointList;r;r=r.m_next)r.m_islandFlag=!1;for(var o=this.m_stack,a=e.m_bodyList;a;a=a.m_next)if(!a.m_islandFlag&&!(a.isAwake()==!1||a.isActive()==!1)&&!a.isStatic()){for(this.clear(),o.push(a),a.m_islandFlag=!0;o.length>0;){var i=o.pop();if(this.addBody(i),i.m_awakeFlag=!0,!i.isStatic()){for(var l=i.m_contactList;l;l=l.next){var h=l.contact;if(!h.m_islandFlag&&!(h.isEnabled()==!1||h.isTouching()==!1)){var c=h.m_fixtureA.m_isSensor,d=h.m_fixtureB.m_isSensor;if(!(c||d)){this.addContact(h),h.m_islandFlag=!0;var u=l.other;u.m_islandFlag||(o.push(u),u.m_islandFlag=!0)}}}for(var p=i.m_jointList;p;p=p.next)if(p.joint.m_islandFlag!=!0){var u=p.other;u.isActive()!=!1&&(this.addJoint(p.joint),p.joint.m_islandFlag=!0,!u.m_islandFlag&&(o.push(u),u.m_islandFlag=!0))}}}this.solveIsland(t);for(var f=0;f<this.m_bodies.length;++f){var i=this.m_bodies[f];i.isStatic()&&(i.m_islandFlag=!1)}}},n.prototype.solveIsland=function(t){for(var e=this.m_world,i=e.m_gravity,s=e.m_allowSleep,r=t.dt,o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];q(Nn,a.m_sweep.c);var l=a.m_sweep.a;q(ti,a.m_linearVelocity);var h=a.m_angularVelocity;q(a.m_sweep.c0,a.m_sweep.c),a.m_sweep.a0=a.m_sweep.a,a.isDynamic()&&(sn(ti,r*a.m_gravityScale,i),sn(ti,r*a.m_invMass,a.m_force),h+=r*a.m_invI*a.m_torque,Ot(ti,1/(1+r*a.m_linearDamping),ti),h*=1/(1+r*a.m_angularDamping)),q(a.c_position.c,Nn),a.c_position.a=l,q(a.c_velocity.v,ti),a.c_velocity.w=h}for(var o=0;o<this.m_contacts.length;++o){var c=this.m_contacts[o];c.initConstraint(t)}for(var o=0;o<this.m_contacts.length;++o){var c=this.m_contacts[o];c.initVelocityConstraint(t)}if(t.warmStarting)for(var o=0;o<this.m_contacts.length;++o){var c=this.m_contacts[o];c.warmStartConstraint(t)}for(var o=0;o<this.m_joints.length;++o){var d=this.m_joints[o];d.initVelocityConstraints(t)}for(var o=0;o<t.velocityIterations;++o){for(var u=0;u<this.m_joints.length;++u){var d=this.m_joints[u];d.solveVelocityConstraints(t)}for(var u=0;u<this.m_contacts.length;++u){var c=this.m_contacts[u];c.solveVelocityConstraint(t)}}for(var o=0;o<this.m_contacts.length;++o){var c=this.m_contacts[o];c.storeConstraintImpulses(t)}for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];q(Nn,a.c_position.c);var l=a.c_position.a;q(ti,a.c_velocity.v);var h=a.c_velocity.w;Ot(ba,r,ti);var p=qs(ba);if(p>dt.maxTranslationSquared){var f=dt.maxTranslation/yf(p);af(ti,f)}var v=r*h;if(v*v>dt.maxRotationSquared){var f=dt.maxRotation/gf(v);h*=f}sn(Nn,r,ti),l+=r*h,q(a.c_position.c,Nn),a.c_position.a=l,q(a.c_velocity.v,ti),a.c_velocity.w=h}for(var _=!1,o=0;o<t.positionIterations;++o){for(var m=0,u=0;u<this.m_contacts.length;++u){var c=this.m_contacts[u],x=c.solvePositionConstraint(t);m=xa(m,x)}for(var b=m>=-3*dt.linearSlop,y=!0,u=0;u<this.m_joints.length;++u){var d=this.m_joints[u],R=d.solvePositionConstraints(t);y=y&&R}if(b&&y){_=!0;break}}for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];q(a.m_sweep.c,a.c_position.c),a.m_sweep.a=a.c_position.a,q(a.m_linearVelocity,a.c_velocity.v),a.m_angularVelocity=a.c_velocity.w,a.synchronizeTransform()}if(this.postSolveIsland(),s){for(var T=1/0,E=dt.linearSleepToleranceSqr,I=dt.angularSleepToleranceSqr,o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];a.isStatic()||(a.m_autoSleepFlag==!1||a.m_angularVelocity*a.m_angularVelocity>I||qs(a.m_linearVelocity)>E?(a.m_sleepTime=0,T=0):(a.m_sleepTime+=r,T=xa(T,a.m_sleepTime)))}if(T>=dt.timeToSleep&&_)for(var o=0;o<this.m_bodies.length;++o){var a=this.m_bodies[o];a.setAwake(!1)}}},n.prototype.solveWorldTOI=function(t){var e=this.m_world;if(e.m_stepComplete){for(var i=e.m_bodyList;i;i=i.m_next)i.m_islandFlag=!1,i.m_sweep.alpha0=0;for(var s=e.m_contactList;s;s=s.m_next)s.m_toiFlag=!1,s.m_islandFlag=!1,s.m_toiCount=0,s.m_toi=1}for(;;){for(var r=null,o=1,a=e.m_contactList;a;a=a.m_next)if(a.isEnabled()!=!1&&!(a.m_toiCount>dt.maxSubSteps)){var l=1;if(a.m_toiFlag)l=a.m_toi;else{var h=a.getFixtureA(),c=a.getFixtureB();if(h.isSensor()||c.isSensor())continue;var d=h.getBody(),u=c.getBody(),p=d.isAwake()&&!d.isStatic(),f=u.isAwake()&&!u.isStatic();if(p==!1&&f==!1)continue;var v=d.isBullet()||!d.isDynamic(),_=u.isBullet()||!u.isDynamic();if(v==!1&&_==!1)continue;var m=d.m_sweep.alpha0;d.m_sweep.alpha0<u.m_sweep.alpha0?(m=u.m_sweep.alpha0,d.m_sweep.advance(m)):u.m_sweep.alpha0<d.m_sweep.alpha0&&(m=d.m_sweep.alpha0,u.m_sweep.advance(m));var x=a.getChildIndexA(),b=a.getChildIndexB();vr.proxyA.set(h.getShape(),x),vr.proxyB.set(c.getShape(),b),vr.sweepA.set(d.m_sweep),vr.sweepB.set(u.m_sweep),vr.tMax=1,Br(fc,vr);var y=fc.t;fc.state==ci.e_touching?l=xa(m+(1-m)*y,1):l=1,a.m_toi=l,a.m_toiFlag=!0}l<o&&(r=a,o=l)}if(r==null||1-10*hi<o){e.m_stepComplete=!0;break}var R=r.getFixtureA(),T=r.getFixtureB(),E=R.getBody(),I=T.getBody();if(bf.set(E.m_sweep),Af.set(I.m_sweep),E.advance(o),I.advance(o),r.update(e),r.m_toiFlag=!1,++r.m_toiCount,r.isEnabled()==!1||r.isTouching()==!1){r.setEnabled(!1),E.m_sweep.set(bf),I.m_sweep.set(Af),E.synchronizeTransform(),I.synchronizeTransform();continue}E.setAwake(!0),I.setAwake(!0),this.clear(),this.addBody(E),this.addBody(I),this.addContact(r),E.m_islandFlag=!0,I.m_islandFlag=!0,r.m_islandFlag=!0;for(var S=[E,I],A=0;A<S.length;++A){var P=S[A];if(P.isDynamic())for(var k=P.m_contactList;k;k=k.next){var O=k.contact;if(!O.m_islandFlag){var G=k.other;if(!(G.isDynamic()&&!P.isBullet()&&!G.isBullet())){var nt=O.m_fixtureA.m_isSensor,J=O.m_fixtureB.m_isSensor;if(!(nt||J)){if(xf.set(G.m_sweep),G.m_islandFlag==!1&&G.advance(o),O.update(e),O.isEnabled()==!1||O.isTouching()==!1){G.m_sweep.set(xf),G.synchronizeTransform();continue}O.m_islandFlag=!0,this.addContact(O),!G.m_islandFlag&&(G.m_islandFlag=!0,G.isStatic()||G.setAwake(!0),this.addBody(G))}}}}}_r.reset((1-o)*t.dt),_r.dtRatio=1,_r.positionIterations=20,_r.velocityIterations=t.velocityIterations,_r.warmStarting=!1,this.solveIslandTOI(_r,E,I);for(var A=0;A<this.m_bodies.length;++A){var P=this.m_bodies[A];if(P.m_islandFlag=!1,!!P.isDynamic()){P.synchronizeFixtures();for(var k=P.m_contactList;k;k=k.next)k.contact.m_toiFlag=!1,k.contact.m_islandFlag=!1}}if(e.findNewContacts(),e.m_subStepping){e.m_stepComplete=!1;break}}},n.prototype.solveIslandTOI=function(t,e,i){for(var c=0;c<this.m_bodies.length;++c){var s=this.m_bodies[c];q(s.c_position.c,s.m_sweep.c),s.c_position.a=s.m_sweep.a,q(s.c_velocity.v,s.m_linearVelocity),s.c_velocity.w=s.m_angularVelocity}for(var c=0;c<this.m_contacts.length;++c){var r=this.m_contacts[c];r.initConstraint(t)}for(var c=0;c<t.positionIterations;++c){for(var o=0,a=0;a<this.m_contacts.length;++a){var r=this.m_contacts[a],l=r.solvePositionConstraintTOI(t,e,i);o=xa(o,l)}var h=o>=-1.5*dt.linearSlop;if(h)break}var c;q(e.m_sweep.c0,e.c_position.c),e.m_sweep.a0=e.c_position.a,q(i.m_sweep.c0,i.c_position.c),i.m_sweep.a0=i.c_position.a;for(var c=0;c<this.m_contacts.length;++c){var r=this.m_contacts[c];r.initVelocityConstraint(t)}for(var c=0;c<t.velocityIterations;++c)for(var a=0;a<this.m_contacts.length;++a){var r=this.m_contacts[a];r.solveVelocityConstraint(t)}for(var d=t.dt,c=0;c<this.m_bodies.length;++c){var s=this.m_bodies[c];q(Nn,s.c_position.c);var u=s.c_position.a;q(ti,s.c_velocity.v);var p=s.c_velocity.w;Ot(ba,d,ti);var f=qs(ba);if(f>dt.maxTranslationSquared){var v=dt.maxTranslation/yf(f);af(ti,v)}var _=d*p;if(_*_>dt.maxRotationSquared){var v=dt.maxRotation/gf(_);p*=v}sn(Nn,d,ti),u+=d*p,q(s.c_position.c,Nn),s.c_position.a=u,q(s.c_velocity.v,ti),s.c_velocity.w=p,q(s.m_sweep.c,Nn),s.m_sweep.a=u,q(s.m_linearVelocity,ti),s.m_angularVelocity=p,s.synchronizeTransform()}this.postSolveIsland()},n.prototype.postSolveIsland=function(){for(var t=0;t<this.m_contacts.length;++t){var e=this.m_contacts[t];this.m_world.postSolve(e,e.m_impulse)}},n}();il.TimeStep=Do;var Ii=function(){function n(t,e,i,s){typeof t=="object"&&t!==null?(this.ex=g.clone(t),this.ey=g.clone(e)):typeof t=="number"?(this.ex=g.neo(t,i),this.ey=g.neo(e,s)):(this.ex=g.zero(),this.ey=g.zero())}return n.prototype.toString=function(){return JSON.stringify(this)},n.isValid=function(t){return t===null||typeof t>"u"?!1:g.isValid(t.ex)&&g.isValid(t.ey)},n.assert=function(t){},n.prototype.set=function(t,e,i,s){typeof t=="number"&&typeof e=="number"&&typeof i=="number"&&typeof s=="number"?(this.ex.setNum(t,i),this.ey.setNum(e,s)):typeof t=="object"&&typeof e=="object"?(this.ex.setVec2(t),this.ey.setVec2(e)):typeof t=="object"&&(this.ex.setVec2(t.ex),this.ey.setVec2(t.ey))},n.prototype.setIdentity=function(){this.ex.x=1,this.ey.x=0,this.ex.y=0,this.ey.y=1},n.prototype.setZero=function(){this.ex.x=0,this.ey.x=0,this.ex.y=0,this.ey.y=0},n.prototype.getInverse=function(){var t=this.ex.x,e=this.ey.x,i=this.ex.y,s=this.ey.y,r=t*s-e*i;r!==0&&(r=1/r);var o=new n;return o.ex.x=r*s,o.ey.x=-r*e,o.ex.y=-r*i,o.ey.y=r*t,o},n.prototype.solve=function(t){var e=this.ex.x,i=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-i*s;o!==0&&(o=1/o);var a=g.zero();return a.x=o*(r*t.x-i*t.y),a.y=o*(e*t.y-s*t.x),a},n.mul=function(t,e){if(e&&"x"in e&&"y"in e){var i=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(i,s)}else if(e&&"ex"in e&&"ey"in e){var r=t.ex.x*e.ex.x+t.ey.x*e.ex.y,o=t.ex.x*e.ey.x+t.ey.x*e.ey.y,a=t.ex.y*e.ex.x+t.ey.y*e.ex.y,l=t.ex.y*e.ey.x+t.ey.y*e.ey.y;return new n(r,o,a,l)}},n.mulVec2=function(t,e){var i=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(i,s)},n.mulMat22=function(t,e){var i=t.ex.x*e.ex.x+t.ey.x*e.ex.y,s=t.ex.x*e.ey.x+t.ey.x*e.ey.y,r=t.ex.y*e.ex.x+t.ey.y*e.ex.y,o=t.ex.y*e.ey.x+t.ey.y*e.ey.y;return new n(i,s,r,o)},n.mulT=function(t,e){if(e&&"x"in e&&"y"in e)return g.neo(g.dot(e,t.ex),g.dot(e,t.ey));if(e&&"ex"in e&&"ey"in e){var i=g.neo(g.dot(t.ex,e.ex),g.dot(t.ey,e.ex)),s=g.neo(g.dot(t.ex,e.ey),g.dot(t.ey,e.ey));return new n(i,s)}},n.mulTVec2=function(t,e){return g.neo(g.dot(e,t.ex),g.dot(e,t.ey))},n.mulTMat22=function(t,e){var i=g.neo(g.dot(t.ex,e.ex),g.dot(t.ey,e.ex)),s=g.neo(g.dot(t.ex,e.ey),g.dot(t.ey,e.ey));return new n(i,s)},n.abs=function(t){return new n(g.abs(t.ex),g.abs(t.ey))},n.add=function(t,e){return new n(g.add(t.ex,e.ex),g.add(t.ey,e.ey))},n}(),Tm=Math.sqrt,dc=j(0,0),pc=j(0,0),xo=j(0,0),Fn=j(0,0),Un=j(0,0),mc=j(0,0),Aa=j(0,0),us=j(0,0),Ce;(function(n){n[n.e_unset=-1]="e_unset",n[n.e_circles=0]="e_circles",n[n.e_faceA=1]="e_faceA",n[n.e_faceB=2]="e_faceB"})(Ce||(Ce={}));var se;(function(n){n[n.e_unset=-1]="e_unset",n[n.e_vertex=0]="e_vertex",n[n.e_face=1]="e_face"})(se||(se={}));var Gn;(function(n){n[n.nullState=0]="nullState",n[n.addState=1]="addState",n[n.persistState=2]="persistState",n[n.removeState=3]="removeState"})(Gn||(Gn={}));var ui=function(){function n(){this.v=j(0,0),this.id=new nl}return n.prototype.set=function(t){q(this.v,t.v),this.id.set(t.id)},n.prototype.recycle=function(){Ut(this.v),this.id.recycle()},n}(),No=function(){function n(){this.localNormal=j(0,0),this.localPoint=j(0,0),this.points=[new Ua,new Ua],this.pointCount=0}return n.prototype.set=function(t){this.type=t.type,q(this.localNormal,t.localNormal),q(this.localPoint,t.localPoint),this.pointCount=t.pointCount,this.points[0].set(t.points[0]),this.points[1].set(t.points[1])},n.prototype.recycle=function(){this.type=Ce.e_unset,Ut(this.localNormal),Ut(this.localPoint),this.pointCount=0,this.points[0].recycle(),this.points[1].recycle()},n.prototype.getWorldManifold=function(t,e,i,s,r){if(this.pointCount==0)return t;t=t||new sl,t.pointCount=this.pointCount;var o=t.normal,a=t.points,l=t.separations;switch(this.type){case Ce.e_circles:{Je(o,1,0);var h=this.points[0];qt(dc,e,this.localPoint),qt(pc,s,h.localPoint),Xt(mc,pc,dc);var c=qs(mc);if(c>hi*hi){var d=Tm(c);Ot(o,1/d,mc)}Ee(Fn,1,dc,i,o),Ee(Un,1,pc,-r,o),Ee(a[0],.5,Fn,.5,Un),l[0]=ht(Xt(xo,Un,Fn),o);break}case Ce.e_faceA:{qi(o,e.q,this.localNormal),qt(Aa,e,this.localPoint);for(var u=0;u<this.pointCount;++u){var h=this.points[u];qt(us,s,h.localPoint),Ee(Fn,1,us,i-ht(Xt(xo,us,Aa),o),o),Ee(Un,1,us,-r,o),Ee(a[u],.5,Fn,.5,Un),l[u]=ht(Xt(xo,Un,Fn),o)}break}case Ce.e_faceB:{qi(o,s.q,this.localNormal),qt(Aa,s,this.localPoint);for(var u=0;u<this.pointCount;++u){var h=this.points[u];qt(us,e,h.localPoint),Ee(Un,1,us,r-ht(Xt(xo,us,Aa),o),o),Ee(Fn,1,us,-i,o),Ee(a[u],.5,Fn,.5,Un),l[u]=ht(Xt(xo,Fn,Un),o)}Io(o);break}}return t},n.clipSegmentToLine=Ys,n.ClipVertex=ui,n.getPointStates=Pc,n.PointState=Gn,n}(),Ua=function(){function n(){this.localPoint=j(0,0),this.normalImpulse=0,this.tangentImpulse=0,this.id=new nl}return n.prototype.set=function(t){q(this.localPoint,t.localPoint),this.normalImpulse=t.normalImpulse,this.tangentImpulse=t.tangentImpulse,this.id.set(t.id)},n.prototype.recycle=function(){Ut(this.localPoint),this.normalImpulse=0,this.tangentImpulse=0,this.id.recycle()},n}(),nl=function(){function n(){this.key=-1,this.indexA=-1,this.indexB=-1,this.typeA=se.e_unset,this.typeB=se.e_unset}return n.prototype.setFeatures=function(t,e,i,s){this.indexA=t,this.indexB=i,this.typeA=e,this.typeB=s,this.key=this.indexA+this.indexB*256+this.typeA*65536+this.typeB*16777216},n.prototype.set=function(t){this.indexA=t.indexA,this.indexB=t.indexB,this.typeA=t.typeA,this.typeB=t.typeB,this.key=this.indexA+this.indexB*256+this.typeA*65536+this.typeB*16777216},n.prototype.swapFeatures=function(){var t=this.indexA,e=this.indexB,i=this.typeA,s=this.typeB;this.indexA=e,this.indexB=t,this.typeA=s,this.typeB=i,this.key=this.indexA+this.indexB*256+this.typeA*65536+this.typeB*16777216},n.prototype.recycle=function(){this.indexA=0,this.indexB=0,this.typeA=se.e_unset,this.typeB=se.e_unset,this.key=-1},n}(),sl=function(){function n(){this.normal=j(0,0),this.points=[j(0,0),j(0,0)],this.separations=[0,0],this.pointCount=0}return n.prototype.recycle=function(){Ut(this.normal),Ut(this.points[0]),Ut(this.points[1]),this.separations[0]=0,this.separations[1]=0,this.pointCount=0},n}();function Pc(n,t,e,i){for(var s=0;s<e.pointCount;++s){var r=e.points[s].id;n[s]=Gn.removeState;for(var o=0;o<i.pointCount;++o)if(i.points[o].id.key===r.key){n[s]=Gn.persistState;break}}for(var s=0;s<i.pointCount;++s){var r=i.points[s].id;t[s]=Gn.addState;for(var o=0;o<e.pointCount;++o)if(e.points[o].id.key===r.key){t[s]=Gn.persistState;break}}}function Ys(n,t,e,i,s){var r=0,o=ht(e,t[0].v)-i,a=ht(e,t[1].v)-i;if(o<=0&&n[r++].set(t[0]),a<=0&&n[r++].set(t[1]),o*a<0){var l=o/(o-a);Ee(n[r].v,1-l,t[0].v,l,t[1].v),n[r].id.setFeatures(s,se.e_vertex,t[0].id.indexB,se.e_face),++r}return r}var Em=Math.sqrt,Cm=Math.max,Rm=Math.min,Mf=new Co({create:function(){return new Xi},release:function(n){n.recycle()}}),gr=new No,Ma=new sl,Va=function(){function n(t){this.prev=null,this.next=null,this.other=null,this.contact=t}return n.prototype.recycle=function(){this.prev=null,this.next=null,this.other=null},n}();function za(n,t){return Em(n*t)}function Oa(n,t){return n>t?n:t}var Ns=[],ka=function(){function n(){this.rA=j(0,0),this.rB=j(0,0),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0}return n.prototype.recycle=function(){Ut(this.rA),Ut(this.rB),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0},n}(),Vn=j(0,0),Be=j(0,0),zn=j(0,0),Pe=j(0,0),fs=j(0,0),Fs=$s(0,0,0),Us=$s(0,0,0),Sa=j(0,0),wa=j(0,0),yr=j(0,0),Ta=j(0,0),_c=j(0,0),vc=j(0,0),De=j(0,0),me=j(0,0),bo=j(0,0),ki=j(0,0),xr=j(0,0),br=j(0,0),Ci=j(0,0),On=j(0,0),Ae=j(0,0),Hi=j(0,0),Ne=j(0,0),Fe=j(0,0),vn=j(0,0),Xi=function(){function n(){this.m_nodeA=new Va(this),this.m_nodeB=new Va(this),this.m_fixtureA=null,this.m_fixtureB=null,this.m_indexA=-1,this.m_indexB=-1,this.m_evaluateFcn=null,this.m_manifold=new No,this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_friction=0,this.m_restitution=0,this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.m_impulse=new Bc(this),this.v_points=[new ka,new ka],this.v_normal=j(0,0),this.v_normalMass=new Ii,this.v_K=new Ii,this.v_pointCount=0,this.v_tangentSpeed=0,this.v_friction=0,this.v_restitution=0,this.v_invMassA=0,this.v_invMassB=0,this.v_invIA=0,this.v_invIB=0,this.p_localPoints=[j(0,0),j(0,0)],this.p_localNormal=j(0,0),this.p_localPoint=j(0,0),this.p_localCenterA=j(0,0),this.p_localCenterB=j(0,0),this.p_type=Ce.e_unset,this.p_radiusA=0,this.p_radiusB=0,this.p_pointCount=0,this.p_invMassA=0,this.p_invMassB=0,this.p_invIA=0,this.p_invIB=0}return n.prototype.initialize=function(t,e,i,s,r){this.m_fixtureA=t,this.m_fixtureB=i,this.m_indexA=e,this.m_indexB=s,this.m_evaluateFcn=r,this.m_friction=za(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction),this.m_restitution=Oa(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution)},n.prototype.recycle=function(){this.m_nodeA.recycle(),this.m_nodeB.recycle(),this.m_fixtureA=null,this.m_fixtureB=null,this.m_indexA=-1,this.m_indexB=-1,this.m_evaluateFcn=null,this.m_manifold.recycle(),this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_friction=0,this.m_restitution=0,this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.m_impulse.recycle();for(var t=0,e=this.v_points;t<e.length;t++){var i=e[t];i.recycle()}Ut(this.v_normal),this.v_normalMass.setZero(),this.v_K.setZero(),this.v_pointCount=0,this.v_tangentSpeed=0,this.v_friction=0,this.v_restitution=0,this.v_invMassA=0,this.v_invMassB=0,this.v_invIA=0,this.v_invIB=0;for(var s=0,r=this.p_localPoints;s<r.length;s++){var o=r[s];Ut(o)}Ut(this.p_localNormal),Ut(this.p_localPoint),Ut(this.p_localCenterA),Ut(this.p_localCenterB),this.p_type=Ce.e_unset,this.p_radiusA=0,this.p_radiusB=0,this.p_pointCount=0,this.p_invMassA=0,this.p_invMassB=0,this.p_invIA=0,this.p_invIB=0},n.prototype.initConstraint=function(t){var e=this.m_fixtureA,i=this.m_fixtureB;if(!(e===null||i===null)){var s=e.m_body,r=i.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=i.m_shape;if(!(o===null||a===null)){var l=this.m_manifold,h=l.pointCount;this.v_invMassA=s.m_invMass,this.v_invMassB=r.m_invMass,this.v_invIA=s.m_invI,this.v_invIB=r.m_invI,this.v_friction=this.m_friction,this.v_restitution=this.m_restitution,this.v_tangentSpeed=this.m_tangentSpeed,this.v_pointCount=h,this.v_K.setZero(),this.v_normalMass.setZero(),this.p_invMassA=s.m_invMass,this.p_invMassB=r.m_invMass,this.p_invIA=s.m_invI,this.p_invIB=r.m_invI,q(this.p_localCenterA,s.m_sweep.localCenter),q(this.p_localCenterB,r.m_sweep.localCenter),this.p_radiusA=o.m_radius,this.p_radiusB=a.m_radius,this.p_type=l.type,q(this.p_localNormal,l.localNormal),q(this.p_localPoint,l.localPoint),this.p_pointCount=h;for(var c=0;c<dt.maxManifoldPoints;++c)this.v_points[c].recycle(),Ut(this.p_localPoints[c]);for(var c=0;c<h;++c){var d=l.points[c],u=this.v_points[c];t.warmStarting&&(u.normalImpulse=t.dtRatio*d.normalImpulse,u.tangentImpulse=t.dtRatio*d.tangentImpulse),q(this.p_localPoints[c],d.localPoint)}}}}},n.prototype.getManifold=function(){return this.m_manifold},n.prototype.getWorldManifold=function(t){var e=this.m_fixtureA,i=this.m_fixtureB;if(!(e===null||i===null)){var s=e.m_body,r=i.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=i.m_shape;if(!(o===null||a===null))return this.m_manifold.getWorldManifold(t,s.getTransform(),o.m_radius,r.getTransform(),a.m_radius)}}},n.prototype.setEnabled=function(t){this.m_enabledFlag=!!t},n.prototype.isEnabled=function(){return this.m_enabledFlag},n.prototype.isTouching=function(){return this.m_touchingFlag},n.prototype.getNext=function(){return this.m_next},n.prototype.getFixtureA=function(){return this.m_fixtureA},n.prototype.getFixtureB=function(){return this.m_fixtureB},n.prototype.getChildIndexA=function(){return this.m_indexA},n.prototype.getChildIndexB=function(){return this.m_indexB},n.prototype.flagForFiltering=function(){this.m_filterFlag=!0},n.prototype.setFriction=function(t){this.m_friction=t},n.prototype.getFriction=function(){return this.m_friction},n.prototype.resetFriction=function(){var t=this.m_fixtureA,e=this.m_fixtureB;t===null||e===null||(this.m_friction=za(t.m_friction,e.m_friction))},n.prototype.setRestitution=function(t){this.m_restitution=t},n.prototype.getRestitution=function(){return this.m_restitution},n.prototype.resetRestitution=function(){var t=this.m_fixtureA,e=this.m_fixtureB;t===null||e===null||(this.m_restitution=Oa(t.m_restitution,e.m_restitution))},n.prototype.setTangentSpeed=function(t){this.m_tangentSpeed=t},n.prototype.getTangentSpeed=function(){return this.m_tangentSpeed},n.prototype.evaluate=function(t,e,i){var s=this.m_fixtureA,r=this.m_fixtureB;s===null||r===null||this.m_evaluateFcn(t,e,s,this.m_indexA,i,r,this.m_indexB)},n.prototype.update=function(t){var e=this.m_fixtureA,i=this.m_fixtureB;if(!(e===null||i===null)){var s=e.m_body,r=i.m_body;if(!(s===null||r===null)){var o=e.m_shape,a=i.m_shape;if(!(o===null||a===null)){this.m_enabledFlag=!0;var l=!1,h=this.m_touchingFlag,c=e.m_isSensor,d=i.m_isSensor,u=c||d,p=s.m_xf,f=r.m_xf;if(u)l=Qa(o,this.m_indexA,a,this.m_indexB,p,f),this.m_manifold.pointCount=0;else{gr.recycle(),gr.set(this.m_manifold),this.m_manifold.recycle(),this.evaluate(this.m_manifold,p,f),l=this.m_manifold.pointCount>0;for(var v=0;v<this.m_manifold.pointCount;++v){var _=this.m_manifold.points[v];_.normalImpulse=0,_.tangentImpulse=0;for(var m=0;m<gr.pointCount;++m){var x=gr.points[m];if(x.id.key===_.id.key){_.normalImpulse=x.normalImpulse,_.tangentImpulse=x.tangentImpulse;break}}}l!==h&&(s.setAwake(!0),r.setAwake(!0))}this.m_touchingFlag=l;var b=typeof t=="object"&&t!==null;!h&&l&&b&&t.beginContact(this),h&&!l&&b&&t.endContact(this),!u&&l&&b&&gr&&t.preSolve(this,gr)}}}},n.prototype.solvePositionConstraint=function(t){return this._solvePositionConstraint(t,null,null)},n.prototype.solvePositionConstraintTOI=function(t,e,i){return this._solvePositionConstraint(t,e,i)},n.prototype._solvePositionConstraint=function(t,e,i){var s=e!==null&&i!==null,r=0,o=this.m_fixtureA,a=this.m_fixtureB;if(o===null||a===null)return r;var l=o.m_body,h=a.m_body;if(l===null||h===null)return r;var c=l.c_position,d=h.c_position,u=this.p_localCenterA,p=this.p_localCenterB,f=0,v=0;(!s||l===e||l===i)&&(f=this.p_invMassA,v=this.p_invIA);var _=0,m=0;(!s||h===e||h===i)&&(_=this.p_invMassB,m=this.p_invIB),q(Vn,c.c);var x=c.a;q(zn,d.c);for(var b=d.a,y=0;y<this.p_pointCount;++y){aa(Fs,u,Vn,x),aa(Us,p,zn,b);var R=void 0;switch(this.p_type){case Ce.e_circles:{qt(Sa,Fs,this.p_localPoint),qt(wa,Us,this.p_localPoints[0]),Xt(me,wa,Sa),rn(me),Ee(bo,.5,Sa,.5,wa),R=ht(wa,me)-ht(Sa,me)-this.p_radiusA-this.p_radiusB;break}case Ce.e_faceA:{qi(me,Fs.q,this.p_localNormal),qt(Ta,Fs,this.p_localPoint),qt(yr,Us,this.p_localPoints[y]),R=ht(yr,me)-ht(Ta,me)-this.p_radiusA-this.p_radiusB,q(bo,yr);break}case Ce.e_faceB:{qi(me,Us.q,this.p_localNormal),qt(Ta,Us,this.p_localPoint),qt(yr,Fs,this.p_localPoints[y]),R=ht(yr,me)-ht(Ta,me)-this.p_radiusA-this.p_radiusB,q(bo,yr),Io(me);break}default:return r}Xt(_c,bo,Vn),Xt(vc,bo,zn),r=Rm(r,R);var T=s?dt.toiBaugarte:dt.baumgarte,E=dt.linearSlop,I=dt.maxLinearCorrection,S=$e(T*(R+E),-I,0),A=jt(_c,me),P=jt(vc,me),k=f+_+v*A*A+m*P*P,O=k>0?-S/k:0;Ot(De,O,me),Eo(Vn,f,De),x-=v*jt(_c,De),sn(zn,_,De),b+=m*jt(vc,De)}return q(c.c,Vn),c.a=x,q(d.c,zn),d.a=b,r},n.prototype.initVelocityConstraint=function(t){var e=this.m_fixtureA,i=this.m_fixtureB;if(!(e===null||i===null)){var s=e.m_body,r=i.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=s.c_position,h=r.c_position,c=this.p_radiusA,d=this.p_radiusB,u=this.m_manifold,p=this.v_invMassA,f=this.v_invMassB,v=this.v_invIA,_=this.v_invIB,m=this.p_localCenterA,x=this.p_localCenterB;q(Vn,l.c);var b=l.a;q(Be,o.v);var y=o.w;q(zn,h.c);var R=h.a;q(Pe,a.v);var T=a.w;aa(Fs,m,Vn,b),aa(Us,x,zn,R),Ma.recycle(),u.getWorldManifold(Ma,Fs,c,Us,d),q(this.v_normal,Ma.normal);for(var E=0;E<this.v_pointCount;++E){var I=this.v_points[E],S=Ma.points[E];Xt(I.rA,S,Vn),Xt(I.rB,S,zn);var A=jt(I.rA,this.v_normal),P=jt(I.rB,this.v_normal),k=p+f+v*A*A+_*P*P;I.normalMass=k>0?1/k:0,Ws(fs,this.v_normal,1);var O=jt(I.rA,fs),G=jt(I.rB,fs),nt=p+f+v*O*O+_*G*G;I.tangentMass=nt>0?1/nt:0,I.velocityBias=0;var J=0;J+=ht(this.v_normal,Pe),J+=ht(this.v_normal,Ri(vn,T,I.rB)),J-=ht(this.v_normal,Be),J-=ht(this.v_normal,Ri(vn,y,I.rA)),J<-dt.velocityThreshold&&(I.velocityBias=-this.v_restitution*J)}if(this.v_pointCount==2&&t.blockSolve){var lt=this.v_points[0],$=this.v_points[1],ct=jt(lt.rA,this.v_normal),yt=jt(lt.rB,this.v_normal),Mt=jt($.rA,this.v_normal),kt=jt($.rB,this.v_normal),re=p+f+v*ct*ct+_*yt*yt,B=p+f+v*Mt*Mt+_*kt*kt,L=p+f+v*ct*Mt+_*yt*kt,U=1e3;if(re*re<U*(re*B-L*L)){this.v_K.ex.setNum(re,L),this.v_K.ey.setNum(L,B);var X=this.v_K.ex.x,K=this.v_K.ey.x,ot=this.v_K.ex.y,xt=this.v_K.ey.y,tt=X*xt-K*ot;tt!==0&&(tt=1/tt),this.v_normalMass.ex.x=tt*xt,this.v_normalMass.ey.x=-tt*K,this.v_normalMass.ex.y=-tt*ot,this.v_normalMass.ey.y=tt*X}else this.v_pointCount=1}q(l.c,Vn),l.a=b,q(o.v,Be),o.w=y,q(h.c,zn),h.a=R,q(a.v,Pe),a.w=T}}},n.prototype.warmStartConstraint=function(t){var e=this.m_fixtureA,i=this.m_fixtureB;if(!(e===null||i===null)){var s=e.m_body,r=i.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=this.v_invMassA,h=this.v_invIA,c=this.v_invMassB,d=this.v_invIB;q(Be,o.v);var u=o.w;q(Pe,a.v);var p=a.w;q(me,this.v_normal),Ws(fs,me,1);for(var f=0;f<this.v_pointCount;++f){var v=this.v_points[f];Ee(De,v.normalImpulse,me,v.tangentImpulse,fs),u-=h*jt(v.rA,De),Eo(Be,l,De),p+=d*jt(v.rB,De),sn(Pe,c,De)}q(o.v,Be),o.w=u,q(a.v,Pe),a.w=p}}},n.prototype.storeConstraintImpulses=function(t){for(var e=this.m_manifold,i=0;i<this.v_pointCount;++i)e.points[i].normalImpulse=this.v_points[i].normalImpulse,e.points[i].tangentImpulse=this.v_points[i].tangentImpulse},n.prototype.solveVelocityConstraint=function(t){var e=this.m_fixtureA,i=this.m_fixtureB;if(!(e===null||i===null)){var s=e.m_body,r=i.m_body;if(!(s===null||r===null)){var o=s.c_velocity,a=r.c_velocity,l=this.v_invMassA,h=this.v_invIA,c=this.v_invMassB,d=this.v_invIB;q(Be,o.v);var u=o.w;q(Pe,a.v);var p=a.w;q(me,this.v_normal),Ws(fs,me,1);for(var f=this.v_friction,v=0;v<this.v_pointCount;++v){var _=this.v_points[v];Ut(ki),Wi(ki,Pe),Wi(ki,Ri(vn,p,_.rB)),Hn(ki,Be),Hn(ki,Ri(vn,u,_.rA));var m=ht(ki,fs)-this.v_tangentSpeed,x=_.tangentMass*-m,b=f*_.normalImpulse,y=$e(_.tangentImpulse+x,-b,b);x=y-_.tangentImpulse,_.tangentImpulse=y,Ot(De,x,fs),Eo(Be,l,De),u-=h*jt(_.rA,De),sn(Pe,c,De),p+=d*jt(_.rB,De)}if(this.v_pointCount==1||t.blockSolve==!1)for(var R=0;R<this.v_pointCount;++R){var _=this.v_points[R];Ut(ki),Wi(ki,Pe),Wi(ki,Ri(vn,p,_.rB)),Hn(ki,Be),Hn(ki,Ri(vn,u,_.rA));var T=ht(ki,me),x=-_.normalMass*(T-_.velocityBias),y=Cm(_.normalImpulse+x,0);x=y-_.normalImpulse,_.normalImpulse=y,Ot(De,x,me),Eo(Be,l,De),u-=h*jt(_.rA,De),sn(Pe,c,De),p+=d*jt(_.rB,De)}else{var E=this.v_points[0],I=this.v_points[1];Je(On,E.normalImpulse,I.normalImpulse),Ut(xr),Wi(xr,Pe),Wi(xr,Ri(vn,p,E.rB)),Hn(xr,Be),Hn(xr,Ri(vn,u,E.rA)),Ut(br),Wi(br,Pe),Wi(br,Ri(vn,p,I.rB)),Hn(br,Be),Hn(br,Ri(vn,u,I.rA));var S=ht(xr,me),A=ht(br,me);for(Je(Ci,S-E.velocityBias,A-I.velocityBias),Ci.x-=this.v_K.ex.x*On.x+this.v_K.ey.x*On.y,Ci.y-=this.v_K.ex.y*On.x+this.v_K.ey.y*On.y;;){if(Ut(Ae),Ae.x=-(this.v_normalMass.ex.x*Ci.x+this.v_normalMass.ey.x*Ci.y),Ae.y=-(this.v_normalMass.ex.y*Ci.x+this.v_normalMass.ey.y*Ci.y),Ae.x>=0&&Ae.y>=0){Xt(Hi,Ae,On),Ot(Ne,Hi.x,me),Ot(Fe,Hi.y,me),bn(Be,-l,Ne,-l,Fe,1,Be),u-=h*(jt(E.rA,Ne)+jt(I.rA,Fe)),bn(Pe,c,Ne,c,Fe,1,Pe),p+=d*(jt(E.rB,Ne)+jt(I.rB,Fe)),E.normalImpulse=Ae.x,I.normalImpulse=Ae.y;break}if(Ae.x=-E.normalMass*Ci.x,Ae.y=0,S=0,A=this.v_K.ex.y*Ae.x+Ci.y,Ae.x>=0&&A>=0){Xt(Hi,Ae,On),Ot(Ne,Hi.x,me),Ot(Fe,Hi.y,me),bn(Be,-l,Ne,-l,Fe,1,Be),u-=h*(jt(E.rA,Ne)+jt(I.rA,Fe)),bn(Pe,c,Ne,c,Fe,1,Pe),p+=d*(jt(E.rB,Ne)+jt(I.rB,Fe)),E.normalImpulse=Ae.x,I.normalImpulse=Ae.y;break}if(Ae.x=0,Ae.y=-I.normalMass*Ci.y,S=this.v_K.ey.x*Ae.y+Ci.x,A=0,Ae.y>=0&&S>=0){Xt(Hi,Ae,On),Ot(Ne,Hi.x,me),Ot(Fe,Hi.y,me),bn(Be,-l,Ne,-l,Fe,1,Be),u-=h*(jt(E.rA,Ne)+jt(I.rA,Fe)),bn(Pe,c,Ne,c,Fe,1,Pe),p+=d*(jt(E.rB,Ne)+jt(I.rB,Fe)),E.normalImpulse=Ae.x,I.normalImpulse=Ae.y;break}if(Ae.x=0,Ae.y=0,S=Ci.x,A=Ci.y,S>=0&&A>=0){Xt(Hi,Ae,On),Ot(Ne,Hi.x,me),Ot(Fe,Hi.y,me),bn(Be,-l,Ne,-l,Fe,1,Be),u-=h*(jt(E.rA,Ne)+jt(I.rA,Fe)),bn(Pe,c,Ne,c,Fe,1,Pe),p+=d*(jt(E.rB,Ne)+jt(I.rB,Fe)),E.normalImpulse=Ae.x,I.normalImpulse=Ae.y;break}break}}q(o.v,Be),o.w=u,q(a.v,Pe),a.w=p}}},n.addType=function(t,e,i){Ns[t]=Ns[t]||{},Ns[t][e]=i},n.create=function(t,e,i,s){var r=t.m_shape.m_type,o=i.m_shape.m_type,a=Mf.allocate(),l;if(l=Ns[r]&&Ns[r][o])a.initialize(t,e,i,s,l);else if(l=Ns[o]&&Ns[o][r])a.initialize(i,s,t,e,l);else return null;t=a.m_fixtureA,i=a.m_fixtureB,e=a.getChildIndexA(),s=a.getChildIndexB();var h=t.m_body,c=i.m_body;return a.m_nodeA.contact=a,a.m_nodeA.other=c,a.m_nodeA.prev=null,a.m_nodeA.next=h.m_contactList,h.m_contactList!=null&&(h.m_contactList.prev=a.m_nodeA),h.m_contactList=a.m_nodeA,a.m_nodeB.contact=a,a.m_nodeB.other=h,a.m_nodeB.prev=null,a.m_nodeB.next=c.m_contactList,c.m_contactList!=null&&(c.m_contactList.prev=a.m_nodeB),c.m_contactList=a.m_nodeB,t.isSensor()==!1&&i.isSensor()==!1&&(h.setAwake(!0),c.setAwake(!0)),a},n.destroy=function(t,e){var i=t.m_fixtureA,s=t.m_fixtureB;if(!(i===null||s===null)){var r=i.m_body,o=s.m_body;r===null||o===null||(t.isTouching()&&e.endContact(t),t.m_nodeA.prev&&(t.m_nodeA.prev.next=t.m_nodeA.next),t.m_nodeA.next&&(t.m_nodeA.next.prev=t.m_nodeA.prev),t.m_nodeA==r.m_contactList&&(r.m_contactList=t.m_nodeA.next),t.m_nodeB.prev&&(t.m_nodeB.prev.next=t.m_nodeB.next),t.m_nodeB.next&&(t.m_nodeB.next.prev=t.m_nodeB.prev),t.m_nodeB==o.m_contactList&&(o.m_contactList=t.m_nodeB.next),t.m_manifold.pointCount>0&&!i.m_isSensor&&!s.m_isSensor&&(r.setAwake(!0),o.setAwake(!0)),Mf.release(t))}},n}(),Im={gravity:g.zero(),allowSleep:!0,warmStarting:!0,continuousPhysics:!0,subStepping:!1,blockSolve:!0,velocityIterations:8,positionIterations:3},Pr=function(){function n(t){if(!(this instanceof n))return new n(t);this.s_step=new Do,t?g.isValid(t)&&(t={gravity:t}):t={},t=Bi(t,Im),this.m_solver=new il(this),this.m_broadPhase=new Cc,this.m_contactList=null,this.m_contactCount=0,this.m_bodyList=null,this.m_bodyCount=0,this.m_jointList=null,this.m_jointCount=0,this.m_stepComplete=!0,this.m_allowSleep=t.allowSleep,this.m_gravity=g.clone(t.gravity),this.m_clearForces=!0,this.m_newFixture=!1,this.m_locked=!1,this.m_warmStarting=t.warmStarting,this.m_continuousPhysics=t.continuousPhysics,this.m_subStepping=t.subStepping,this.m_blockSolve=t.blockSolve,this.m_velocityIterations=t.velocityIterations,this.m_positionIterations=t.positionIterations,this.m_t=0,this.m_step_callback=[]}return n.prototype._serialize=function(){for(var t=[],e=[],i=this.getBodyList();i;i=i.getNext())t.push(i);for(var s=this.getJointList();s;s=s.getNext())typeof s._serialize=="function"&&e.push(s);return{gravity:this.m_gravity,bodies:t,joints:e}},n._deserialize=function(t,e,i){if(!t)return new n;var s=new n(t.gravity);if(t.bodies)for(var r=t.bodies.length-1;r>=0;r-=1)s._addBody(i(he,t.bodies[r],s));if(t.joints)for(var r=t.joints.length-1;r>=0;r--)s.createJoint(i(Ze,t.joints[r],s));return s},n.prototype.getBodyList=function(){return this.m_bodyList},n.prototype.getJointList=function(){return this.m_jointList},n.prototype.getContactList=function(){return this.m_contactList},n.prototype.getBodyCount=function(){return this.m_bodyCount},n.prototype.getJointCount=function(){return this.m_jointCount},n.prototype.getContactCount=function(){return this.m_contactCount},n.prototype.setGravity=function(t){this.m_gravity.set(t)},n.prototype.getGravity=function(){return this.m_gravity},n.prototype.isLocked=function(){return this.m_locked},n.prototype.setAllowSleeping=function(t){if(t!=this.m_allowSleep&&(this.m_allowSleep=t,this.m_allowSleep==!1))for(var e=this.m_bodyList;e;e=e.m_next)e.setAwake(!0)},n.prototype.getAllowSleeping=function(){return this.m_allowSleep},n.prototype.setWarmStarting=function(t){this.m_warmStarting=t},n.prototype.getWarmStarting=function(){return this.m_warmStarting},n.prototype.setContinuousPhysics=function(t){this.m_continuousPhysics=t},n.prototype.getContinuousPhysics=function(){return this.m_continuousPhysics},n.prototype.setSubStepping=function(t){this.m_subStepping=t},n.prototype.getSubStepping=function(){return this.m_subStepping},n.prototype.setAutoClearForces=function(t){this.m_clearForces=t},n.prototype.getAutoClearForces=function(){return this.m_clearForces},n.prototype.clearForces=function(){for(var t=this.m_bodyList;t;t=t.getNext())t.m_force.setZero(),t.m_torque=0},n.prototype.queryAABB=function(t,e){var i=this.m_broadPhase;this.m_broadPhase.query(t,function(s){var r=i.getUserData(s);return e(r.fixture)})},n.prototype.rayCast=function(t,e,i){var s=this.m_broadPhase;this.m_broadPhase.rayCast({maxFraction:1,p1:t,p2:e},function(r,o){var a=s.getUserData(o),l=a.fixture,h=a.childIndex,c={},d=l.rayCast(c,r,h);if(d){var u=c.fraction,p=g.add(g.mulNumVec2(1-u,r.p1),g.mulNumVec2(u,r.p2));return i(l,p,c.normal,u)}return r.maxFraction})},n.prototype.getProxyCount=function(){return this.m_broadPhase.getProxyCount()},n.prototype.getTreeHeight=function(){return this.m_broadPhase.getTreeHeight()},n.prototype.getTreeBalance=function(){return this.m_broadPhase.getTreeBalance()},n.prototype.getTreeQuality=function(){return this.m_broadPhase.getTreeQuality()},n.prototype.shiftOrigin=function(t){if(!this.isLocked()){for(var e=this.m_bodyList;e;e=e.m_next)e.m_xf.p.sub(t),e.m_sweep.c0.sub(t),e.m_sweep.c.sub(t);for(var i=this.m_jointList;i;i=i.m_next)i.shiftOrigin(t);this.m_broadPhase.shiftOrigin(t)}},n.prototype._addBody=function(t){this.isLocked()||(t.m_prev=null,t.m_next=this.m_bodyList,this.m_bodyList&&(this.m_bodyList.m_prev=t),this.m_bodyList=t,++this.m_bodyCount,this.publish("add-body",t))},n.prototype.createBody=function(t,e){if(this.isLocked())return null;var i={};t&&(g.isValid(t)?i={position:t,angle:e}:typeof t=="object"&&(i=t));var s=new he(this,i);return this._addBody(s),s},n.prototype.createDynamicBody=function(t,e){var i={};return t&&(g.isValid(t)?i={position:t,angle:e}:typeof t=="object"&&(i=t)),i.type="dynamic",this.createBody(i)},n.prototype.createKinematicBody=function(t,e){var i={};return t&&(g.isValid(t)?i={position:t,angle:e}:typeof t=="object"&&(i=t)),i.type="kinematic",this.createBody(i)},n.prototype.destroyBody=function(t){if(!this.isLocked()){if(t.m_destroyed)return!1;for(var e=t.m_jointList;e;){var i=e;e=e.next,this.publish("remove-joint",i.joint),this.destroyJoint(i.joint),t.m_jointList=e}t.m_jointList=null;for(var s=t.m_contactList;s;){var r=s;s=s.next,this.destroyContact(r.contact),t.m_contactList=s}t.m_contactList=null;for(var o=t.m_fixtureList;o;){var a=o;o=o.m_next,this.publish("remove-fixture",a),a.destroyProxies(this.m_broadPhase),t.m_fixtureList=o}return t.m_fixtureList=null,t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_bodyList&&(this.m_bodyList=t.m_next),t.m_destroyed=!0,--this.m_bodyCount,this.publish("remove-body",t),!0}},n.prototype.createJoint=function(t){if(this.isLocked())return null;if(t.m_prev=null,t.m_next=this.m_jointList,this.m_jointList&&(this.m_jointList.m_prev=t),this.m_jointList=t,++this.m_jointCount,t.m_edgeA.joint=t,t.m_edgeA.other=t.m_bodyB,t.m_edgeA.prev=null,t.m_edgeA.next=t.m_bodyA.m_jointList,t.m_bodyA.m_jointList&&(t.m_bodyA.m_jointList.prev=t.m_edgeA),t.m_bodyA.m_jointList=t.m_edgeA,t.m_edgeB.joint=t,t.m_edgeB.other=t.m_bodyA,t.m_edgeB.prev=null,t.m_edgeB.next=t.m_bodyB.m_jointList,t.m_bodyB.m_jointList&&(t.m_bodyB.m_jointList.prev=t.m_edgeB),t.m_bodyB.m_jointList=t.m_edgeB,t.m_collideConnected==!1)for(var e=t.m_bodyB.getContactList();e;e=e.next)e.other==t.m_bodyA&&e.contact.flagForFiltering();return this.publish("add-joint",t),t},n.prototype.destroyJoint=function(t){if(!this.isLocked()){t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_jointList&&(this.m_jointList=t.m_next);var e=t.m_bodyA,i=t.m_bodyB;if(e.setAwake(!0),i.setAwake(!0),t.m_edgeA.prev&&(t.m_edgeA.prev.next=t.m_edgeA.next),t.m_edgeA.next&&(t.m_edgeA.next.prev=t.m_edgeA.prev),t.m_edgeA==e.m_jointList&&(e.m_jointList=t.m_edgeA.next),t.m_edgeA.prev=null,t.m_edgeA.next=null,t.m_edgeB.prev&&(t.m_edgeB.prev.next=t.m_edgeB.next),t.m_edgeB.next&&(t.m_edgeB.next.prev=t.m_edgeB.prev),t.m_edgeB==i.m_jointList&&(i.m_jointList=t.m_edgeB.next),t.m_edgeB.prev=null,t.m_edgeB.next=null,--this.m_jointCount,t.m_collideConnected==!1)for(var s=i.getContactList();s;)s.other==e&&s.contact.flagForFiltering(),s=s.next;this.publish("remove-joint",t)}},n.prototype.step=function(t,e,i){if(this.publish("pre-step",t),(e|0)!==e&&(e=0),e=e||this.m_velocityIterations,i=i||this.m_positionIterations,this.m_newFixture&&(this.findNewContacts(),this.m_newFixture=!1),this.m_locked=!0,this.s_step.reset(t),this.s_step.velocityIterations=e,this.s_step.positionIterations=i,this.s_step.warmStarting=this.m_warmStarting,this.s_step.blockSolve=this.m_blockSolve,this.updateContacts(),this.m_stepComplete&&t>0){this.m_solver.solveWorld(this.s_step);for(var s=this.m_bodyList;s;s=s.getNext())s.m_islandFlag!=!1&&(s.isStatic()||s.synchronizeFixtures());this.findNewContacts()}this.m_continuousPhysics&&t>0&&this.m_solver.solveWorldTOI(this.s_step),this.m_clearForces&&this.clearForces(),this.m_locked=!1;for(var r;r=this.m_step_callback.shift();)r(this);this.publish("post-step",t)},n.prototype.queueUpdate=function(t){this.isLocked()?this.m_step_callback.push(t):t(this)},n.prototype.findNewContacts=function(){var t=this;this.m_broadPhase.updatePairs(function(e,i){return t.createContact(e,i)})},n.prototype.createContact=function(t,e){var i=t.fixture,s=e.fixture,r=t.childIndex,o=e.childIndex,a=i.getBody(),l=s.getBody();if(a!=l){for(var h=l.getContactList();h;){if(h.other==a){var c=h.contact.getFixtureA(),d=h.contact.getFixtureB(),u=h.contact.getChildIndexA(),p=h.contact.getChildIndexB();if(c==i&&d==s&&u==r&&p==o||c==s&&d==i&&u==o&&p==r)return}h=h.next}if(l.shouldCollide(a)!=!1&&s.shouldCollide(i)!=!1){var f=Xi.create(i,r,s,o);f!=null&&(f.m_prev=null,this.m_contactList!=null&&(f.m_next=this.m_contactList,this.m_contactList.m_prev=f),this.m_contactList=f,++this.m_contactCount)}}},n.prototype.updateContacts=function(){for(var t,e=this.m_contactList;t=e;){e=t.getNext();var i=t.getFixtureA(),s=t.getFixtureB(),r=t.getChildIndexA(),o=t.getChildIndexB(),a=i.getBody(),l=s.getBody();if(t.m_filterFlag){if(l.shouldCollide(a)==!1){this.destroyContact(t);continue}if(s.shouldCollide(i)==!1){this.destroyContact(t);continue}t.m_filterFlag=!1}var h=a.isAwake()&&!a.isStatic(),c=l.isAwake()&&!l.isStatic();if(!(h==!1&&c==!1)){var d=i.m_proxies[r].proxyId,u=s.m_proxies[o].proxyId,p=this.m_broadPhase.testOverlap(d,u);if(p==!1){this.destroyContact(t);continue}t.update(this)}}},n.prototype.destroyContact=function(t){t.m_prev&&(t.m_prev.m_next=t.m_next),t.m_next&&(t.m_next.m_prev=t.m_prev),t==this.m_contactList&&(this.m_contactList=t.m_next),Xi.destroy(t,this),--this.m_contactCount},n.prototype.on=function(t,e){return typeof t!="string"||typeof e!="function"?this:(this._listeners||(this._listeners={}),this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this)},n.prototype.off=function(t,e){if(typeof t!="string"||typeof e!="function")return this;var i=this._listeners&&this._listeners[t];if(!i||!i.length)return this;var s=i.indexOf(e);return s>=0&&i.splice(s,1),this},n.prototype.publish=function(t,e,i,s){var r=this._listeners&&this._listeners[t];if(!r||!r.length)return 0;for(var o=0;o<r.length;o++)r[o].call(this,e,i,s);return r.length},n.prototype.beginContact=function(t){this.publish("begin-contact",t)},n.prototype.endContact=function(t){this.publish("end-contact",t)},n.prototype.preSolve=function(t,e){this.publish("pre-solve",t,e)},n.prototype.postSolve=function(t,e){this.publish("post-solve",t,e)},n}(),ae=function(){function n(t,e,i){if(!(this instanceof n))return new n(t,e,i);typeof t>"u"?(this.x=0,this.y=0,this.z=0):typeof t=="object"?(this.x=t.x,this.y=t.y,this.z=t.z):(this.x=t,this.y=e,this.z=i)}return n.prototype._serialize=function(){return{x:this.x,y:this.y,z:this.z}},n._deserialize=function(t){var e=Object.create(n.prototype);return e.x=t.x,e.y=t.y,e.z=t.z,e},n.neo=function(t,e,i){var s=Object.create(n.prototype);return s.x=t,s.y=e,s.z=i,s},n.zero=function(){var t=Object.create(n.prototype);return t.x=0,t.y=0,t.z=0,t},n.clone=function(t){return n.neo(t.x,t.y,t.z)},n.prototype.toString=function(){return JSON.stringify(this)},n.isValid=function(t){return t===null||typeof t>"u"?!1:Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z)},n.assert=function(t){},n.prototype.setZero=function(){return this.x=0,this.y=0,this.z=0,this},n.prototype.set=function(t,e,i){return this.x=t,this.y=e,this.z=i,this},n.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this},n.prototype.sub=function(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this},n.prototype.mul=function(t){return this.x*=t,this.y*=t,this.z*=t,this},n.areEqual=function(t,e){return t===e||typeof t=="object"&&t!==null&&typeof e=="object"&&e!==null&&t.x===e.x&&t.y===e.y&&t.z===e.z},n.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z},n.cross=function(t,e){return new n(t.y*e.z-t.z*e.y,t.z*e.x-t.x*e.z,t.x*e.y-t.y*e.x)},n.add=function(t,e){return new n(t.x+e.x,t.y+e.y,t.z+e.z)},n.sub=function(t,e){return new n(t.x-e.x,t.y-e.y,t.z-e.z)},n.mul=function(t,e){return new n(e*t.x,e*t.y,e*t.z)},n.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},n.neg=function(t){return new n(-t.x,-t.y,-t.z)},n}(),Sf=j(0,0),wf=j(0,0),on=function(n){si(t,n);function t(e,i){var s=this;return s instanceof t?(s=n.call(this)||this,s.m_type=t.TYPE,s.m_radius=dt.polygonRadius,s.m_vertex1=e?g.clone(e):g.zero(),s.m_vertex2=i?g.clone(i):g.zero(),s.m_vertex0=g.zero(),s.m_vertex3=g.zero(),s.m_hasVertex0=!1,s.m_hasVertex3=!1,s):new t(e,i)}return t.prototype._serialize=function(){return{type:this.m_type,vertex1:this.m_vertex1,vertex2:this.m_vertex2,vertex0:this.m_vertex0,vertex3:this.m_vertex3}},t._deserialize=function(e){var i=new t(e.vertex1,e.vertex2);return i.m_hasVertex0&&i.setPrevVertex(e.vertex0),i.m_hasVertex3&&i.setNextVertex(e.vertex3),i},t.prototype._reset=function(){},t.prototype.getRadius=function(){return this.m_radius},t.prototype.getType=function(){return this.m_type},t.prototype.setNext=function(e){return this.setNextVertex(e)},t.prototype.setNextVertex=function(e){return e?(this.m_vertex3.setVec2(e),this.m_hasVertex3=!0):(this.m_vertex3.setZero(),this.m_hasVertex3=!1),this},t.prototype.getNextVertex=function(){return this.m_vertex3},t.prototype.setPrev=function(e){return this.setPrevVertex(e)},t.prototype.setPrevVertex=function(e){return e?(this.m_vertex0.setVec2(e),this.m_hasVertex0=!0):(this.m_vertex0.setZero(),this.m_hasVertex0=!1),this},t.prototype.getPrevVertex=function(){return this.m_vertex0},t.prototype._set=function(e,i){return this.m_vertex1.setVec2(e),this.m_vertex2.setVec2(i),this.m_hasVertex0=!1,this.m_hasVertex3=!1,this},t.prototype._clone=function(){var e=new t;return e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_vertex1.setVec2(this.m_vertex1),e.m_vertex2.setVec2(this.m_vertex2),e.m_vertex0.setVec2(this.m_vertex0),e.m_vertex3.setVec2(this.m_vertex3),e.m_hasVertex0=this.m_hasVertex0,e.m_hasVertex3=this.m_hasVertex3,e},t.prototype.getChildCount=function(){return 1},t.prototype.testPoint=function(e,i){return!1},t.prototype.rayCast=function(e,i,s,r){var o=et.mulTVec2(s.q,g.sub(i.p1,s.p)),a=et.mulTVec2(s.q,g.sub(i.p2,s.p)),l=g.sub(a,o),h=this.m_vertex1,c=this.m_vertex2,d=g.sub(c,h),u=g.neo(d.y,-d.x);u.normalize();var p=g.dot(u,g.sub(h,o)),f=g.dot(u,l);if(f==0)return!1;var v=p/f;if(v<0||i.maxFraction<v)return!1;var _=g.add(o,g.mulNumVec2(v,l)),m=g.sub(c,h),x=g.dot(m,m);if(x==0)return!1;var b=g.dot(g.sub(_,h),m)/x;return b<0||1<b?!1:(e.fraction=v,p>0?e.normal=et.mulVec2(s.q,u).neg():e.normal=et.mulVec2(s.q,u),!0)},t.prototype.computeAABB=function(e,i,s){qt(Sf,i,this.m_vertex1),qt(wf,i,this.m_vertex2),We.combinePoints(e,Sf,wf),We.extend(e,this.m_radius)},t.prototype.computeMass=function(e,i){e.mass=0,Ee(e.center,.5,this.m_vertex1,.5,this.m_vertex2),e.I=0},t.prototype.computeDistanceProxy=function(e){e.m_vertices[0]=this.m_vertex1,e.m_vertices[1]=this.m_vertex2,e.m_vertices.length=2,e.m_count=2,e.m_radius=this.m_radius},t.TYPE="edge",t}(Yn),Tf=j(0,0),Ef=j(0,0),Js=function(n){si(t,n);function t(e,i){var s=this;return s instanceof t?(s=n.call(this)||this,s.m_type=t.TYPE,s.m_radius=dt.polygonRadius,s.m_vertices=[],s.m_count=0,s.m_prevVertex=null,s.m_nextVertex=null,s.m_hasPrevVertex=!1,s.m_hasNextVertex=!1,s.m_isLoop=!!i,e&&e.length&&(i?s._createLoop(e):s._createChain(e)),s):new t(e,i)}return t.prototype._serialize=function(){var e={type:this.m_type,vertices:this.m_isLoop?this.m_vertices.slice(0,this.m_vertices.length-1):this.m_vertices,isLoop:this.m_isLoop,hasPrevVertex:this.m_hasPrevVertex,hasNextVertex:this.m_hasNextVertex,prevVertex:null,nextVertex:null};return this.m_prevVertex&&(e.prevVertex=this.m_prevVertex),this.m_nextVertex&&(e.nextVertex=this.m_nextVertex),e},t._deserialize=function(e,i,s){var r=[];if(e.vertices)for(var o=0;o<e.vertices.length;o++)r.push(e.vertices[o]);var a=new t(r,e.isLoop);return e.prevVertex&&a.setPrevVertex(e.prevVertex),e.nextVertex&&a.setNextVertex(e.nextVertex),a},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype._createLoop=function(e){if(!(e.length<3)){var i;this.m_vertices=[],this.m_count=e.length+1;for(var i=0;i<e.length;++i)this.m_vertices[i]=g.clone(e[i]);return this.m_vertices[e.length]=g.clone(e[0]),this.m_prevVertex=this.m_vertices[this.m_count-2],this.m_nextVertex=this.m_vertices[1],this.m_hasPrevVertex=!0,this.m_hasNextVertex=!0,this}},t.prototype._createChain=function(e){var i;this.m_vertices=[],this.m_count=e.length;for(var i=0;i<e.length;++i)this.m_vertices[i]=g.clone(e[i]);return this.m_prevVertex=null,this.m_nextVertex=null,this.m_hasPrevVertex=!1,this.m_hasNextVertex=!1,this},t.prototype._reset=function(){this.m_isLoop?this._createLoop(this.m_vertices.slice(0,this.m_vertices.length-1)):this._createChain(this.m_vertices)},t.prototype.setPrevVertex=function(e){this.m_prevVertex=e,this.m_hasPrevVertex=!0},t.prototype.getPrevVertex=function(){return this.m_prevVertex},t.prototype.setNextVertex=function(e){this.m_nextVertex=e,this.m_hasNextVertex=!0},t.prototype.getNextVertex=function(){return this.m_nextVertex},t.prototype._clone=function(){var e=new t;return e._createChain(this.m_vertices),e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_prevVertex=this.m_prevVertex,e.m_nextVertex=this.m_nextVertex,e.m_hasPrevVertex=this.m_hasPrevVertex,e.m_hasNextVertex=this.m_hasNextVertex,e},t.prototype.getChildCount=function(){return this.m_count-1},t.prototype.getChildEdge=function(e,i){e.m_type=on.TYPE,e.m_radius=this.m_radius,e.m_vertex1=this.m_vertices[i],e.m_vertex2=this.m_vertices[i+1],i>0?(e.m_vertex0=this.m_vertices[i-1],e.m_hasVertex0=!0):(e.m_vertex0=this.m_prevVertex,e.m_hasVertex0=this.m_hasPrevVertex),i<this.m_count-2?(e.m_vertex3=this.m_vertices[i+2],e.m_hasVertex3=!0):(e.m_vertex3=this.m_nextVertex,e.m_hasVertex3=this.m_hasNextVertex)},t.prototype.getVertex=function(e){return e<this.m_count?this.m_vertices[e]:this.m_vertices[0]},t.prototype.isLoop=function(){return this.m_isLoop},t.prototype.testPoint=function(e,i){return!1},t.prototype.rayCast=function(e,i,s,r){var o=new on(this.getVertex(r),this.getVertex(r+1));return o.rayCast(e,i,s,0)},t.prototype.computeAABB=function(e,i,s){qt(Tf,i,this.getVertex(s)),qt(Ef,i,this.getVertex(s+1)),We.combinePoints(e,Tf,Ef)},t.prototype.computeMass=function(e,i){e.mass=0,Ut(e.center),e.I=0},t.prototype.computeDistanceProxy=function(e,i){e.m_vertices[0]=this.getVertex(i),e.m_vertices[1]=this.getVertex(i+1),e.m_count=2,e.m_radius=this.m_radius},t.TYPE="chain",t}(Yn),Cf=Math.max,gc=Math.min,Gs=j(0,0),Rf=j(0,0),Ao=j(0,0),Ar=j(0,0),Vs=j(0,0),ds=j(0,0),an=function(n){si(t,n);function t(e){var i=this;return i instanceof t?(i=n.call(this)||this,i.m_type=t.TYPE,i.m_radius=dt.polygonRadius,i.m_centroid=g.zero(),i.m_vertices=[],i.m_normals=[],i.m_count=0,e&&e.length&&i._set(e),i):new t(e)}return t.prototype._serialize=function(){return{type:this.m_type,vertices:this.m_vertices}},t._deserialize=function(e,i,s){var r=[];if(e.vertices)for(var o=0;o<e.vertices.length;o++)r.push(e.vertices[o]);var a=new t(r);return a},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype._clone=function(){var e=new t;e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_count=this.m_count,e.m_centroid.setVec2(this.m_centroid);for(var i=0;i<this.m_count;i++)e.m_vertices.push(this.m_vertices[i].clone());for(var i=0;i<this.m_normals.length;i++)e.m_normals.push(this.m_normals[i].clone());return e},t.prototype.getChildCount=function(){return 1},t.prototype._reset=function(){this._set(this.m_vertices)},t.prototype._set=function(e){if(e.length<3){this._setAsBox(1,1);return}for(var i=gc(e.length,dt.maxPolygonVertices),s=[],r=0;r<i;++r){for(var o=e[r],a=!0,l=0;l<s.length;++l)if(g.distanceSquared(o,s[l])<.25*dt.linearSlopSquared){a=!1;break}a&&s.push(g.clone(o))}if(i=s.length,i<3){this._setAsBox(1,1);return}for(var h=0,c=s[0].x,r=1;r<i;++r){var d=s[r].x;(d>c||d===c&&s[r].y<s[h].y)&&(h=r,c=d)}for(var u=[],p=0,f=h;;){u[p]=f;for(var v=0,l=1;l<i;++l){if(v===f){v=l;continue}var _=g.sub(s[v],s[u[p]]),o=g.sub(s[l],s[u[p]]),m=g.crossVec2Vec2(_,o);m<0&&(v=l),m===0&&o.lengthSquared()>_.lengthSquared()&&(v=l)}if(++p,f=v,v===h)break}if(p<3){this._setAsBox(1,1);return}this.m_count=p,this.m_vertices=[];for(var r=0;r<p;++r)this.m_vertices[r]=s[u[r]];for(var r=0;r<p;++r){var x=r,b=r+1<p?r+1:0,y=g.sub(this.m_vertices[b],this.m_vertices[x]);this.m_normals[r]=g.crossVec2Num(y,1),this.m_normals[r].normalize()}this.m_centroid=Bm(this.m_vertices,p)},t.prototype._setAsBox=function(e,i,s,r){if(this.m_vertices[0]=g.neo(e,-i),this.m_vertices[1]=g.neo(e,i),this.m_vertices[2]=g.neo(-e,i),this.m_vertices[3]=g.neo(-e,-i),this.m_normals[0]=g.neo(1,0),this.m_normals[1]=g.neo(0,1),this.m_normals[2]=g.neo(-1,0),this.m_normals[3]=g.neo(0,-1),this.m_count=4,s&&g.isValid(s)){r=r||0,q(this.m_centroid,s);var o=ei.identity();o.p.setVec2(s),o.q.setAngle(r);for(var a=0;a<this.m_count;++a)this.m_vertices[a]=ei.mulVec2(o,this.m_vertices[a]),this.m_normals[a]=et.mulVec2(o.q,this.m_normals[a])}},t.prototype.testPoint=function(e,i){for(var s=Ic(Gs,e,i),r=0;r<this.m_count;++r){var o=ht(this.m_normals[r],s)-ht(this.m_normals[r],this.m_vertices[r]);if(o>0)return!1}return!0},t.prototype.rayCast=function(e,i,s,r){for(var o=et.mulTVec2(s.q,g.sub(i.p1,s.p)),a=et.mulTVec2(s.q,g.sub(i.p2,s.p)),l=g.sub(a,o),h=0,c=i.maxFraction,d=-1,u=0;u<this.m_count;++u){var p=g.dot(this.m_normals[u],g.sub(this.m_vertices[u],o)),f=g.dot(this.m_normals[u],l);if(f==0){if(p<0)return!1}else f<0&&p<h*f?(h=p/f,d=u):f>0&&p<c*f&&(c=p/f);if(c<h)return!1}return d>=0?(e.fraction=h,e.normal=et.mulVec2(s.q,this.m_normals[d]),!0):!1},t.prototype.computeAABB=function(e,i,s){for(var r=1/0,o=1/0,a=-1/0,l=-1/0,h=0;h<this.m_count;++h){var c=qt(Gs,i,this.m_vertices[h]);r=gc(r,c.x),a=Cf(a,c.x),o=gc(o,c.y),l=Cf(l,c.y)}Je(e.lowerBound,r-this.m_radius,o-this.m_radius),Je(e.upperBound,a+this.m_radius,l+this.m_radius)},t.prototype.computeMass=function(e,i){Ut(Vs);var s=0,r=0;Ut(ds);for(var o=0;o<this.m_count;++o)Wi(ds,this.m_vertices[o]);Ot(ds,1/this.m_count,ds);for(var a=1/3,o=0;o<this.m_count;++o){Xt(Ao,this.m_vertices[o],ds),o+1<this.m_count?Xt(Ar,this.m_vertices[o+1],ds):Xt(Ar,this.m_vertices[0],ds);var l=jt(Ao,Ar),h=.5*l;s+=h,Ee(Gs,h*a,Ao,h*a,Ar),Wi(Vs,Gs);var c=Ao.x,d=Ao.y,u=Ar.x,p=Ar.y,f=c*c+u*c+u*u,v=d*d+p*d+p*p;r+=.25*a*l*(f+v)}e.mass=i*s,Ot(Vs,1/s,Vs),hm(e.center,Vs,ds),e.I=i*r,e.I+=e.mass*(ht(e.center,e.center)-ht(Vs,Vs))},t.prototype.validate=function(){for(var e=0;e<this.m_count;++e){var i=e,s=e<this.m_count-1?i+1:0,r=this.m_vertices[i];Xt(Rf,this.m_vertices[s],r);for(var o=0;o<this.m_count;++o)if(!(o==i||o==s)){var a=jt(Rf,Xt(Gs,this.m_vertices[o],r));if(a<0)return!1}}return!0},t.prototype.computeDistanceProxy=function(e){for(var i=0;i<this.m_count;++i)e.m_vertices[i]=this.m_vertices[i];e.m_vertices.length=this.m_count,e.m_count=this.m_count,e.m_radius=this.m_radius},t.TYPE="polygon",t}(Yn);function Bm(n,t){for(var e=g.zero(),i=0,s=g.zero(),r,o=1/3,r=0;r<t;++r){var a=s,l=n[r],h=r+1<t?n[r+1]:n[0],c=g.sub(l,a),d=g.sub(h,a),u=g.crossVec2Vec2(c,d),p=.5*u;i+=p,bn(Gs,1,a,1,l,1,h),sn(e,p*o,Gs)}return e.mul(1/i),e}var Pm=Math.sqrt,Lm=Math.PI,If=j(0,0),wn=function(n){si(t,n);function t(e,i){var s=this;return s instanceof t?(s=n.call(this)||this,s.m_type=t.TYPE,s.m_p=g.zero(),s.m_radius=1,typeof e=="object"&&g.isValid(e)?(s.m_p.setVec2(e),typeof i=="number"&&(s.m_radius=i)):typeof e=="number"&&(s.m_radius=e),s):new t(e,i)}return t.prototype._serialize=function(){return{type:this.m_type,p:this.m_p,radius:this.m_radius}},t._deserialize=function(e){return new t(e.p,e.radius)},t.prototype._reset=function(){},t.prototype.getType=function(){return this.m_type},t.prototype.getRadius=function(){return this.m_radius},t.prototype.getCenter=function(){return this.m_p},t.prototype._clone=function(){var e=new t;return e.m_type=this.m_type,e.m_radius=this.m_radius,e.m_p=this.m_p.clone(),e},t.prototype.getChildCount=function(){return 1},t.prototype.testPoint=function(e,i){var s=qt(If,e,this.m_p);return Xs(i,s)<=this.m_radius*this.m_radius},t.prototype.rayCast=function(e,i,s,r){var o=g.add(s.p,et.mulVec2(s.q,this.m_p)),a=g.sub(i.p1,o),l=g.dot(a,a)-this.m_radius*this.m_radius,h=g.sub(i.p2,i.p1),c=g.dot(a,h),d=g.dot(h,h),u=c*c-d*l;if(u<0||d<hi)return!1;var p=-(c+Pm(u));return 0<=p&&p<=i.maxFraction*d?(p/=d,e.fraction=p,e.normal=g.add(a,g.mulNumVec2(p,h)),e.normal.normalize(),!0):!1},t.prototype.computeAABB=function(e,i,s){var r=qt(If,i,this.m_p);Je(e.lowerBound,r.x-this.m_radius,r.y-this.m_radius),Je(e.upperBound,r.x+this.m_radius,r.y+this.m_radius)},t.prototype.computeMass=function(e,i){e.mass=i*Lm*this.m_radius*this.m_radius,q(e.center,this.m_p),e.I=e.mass*(.5*this.m_radius*this.m_radius+qs(this.m_p))},t.prototype.computeDistanceProxy=function(e){e.m_vertices[0]=this.m_p,e.m_vertices.length=1,e.m_count=1,e.m_radius=this.m_radius},t.TYPE="circle",t}(Yn),Dm=Math.abs,Nm=Math.PI,Fm={frequencyHz:0,dampingRatio:0},Ha=function(n){si(t,n);function t(e,i,s,r,o){var a=this;if(!(a instanceof t))return new t(e,i,s,r,o);if(s&&r&&"m_type"in r&&"x"in s&&"y"in s){var l=s;s=r,r=l}return e=Bi(e,Fm),a=n.call(this,e,i,s)||this,i=a.m_bodyA,s=a.m_bodyB,a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?i.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(o?s.getLocalPoint(o):e.localAnchorB||g.zero()),a.m_length=Number.isFinite(e.length)?e.length:g.distance(i.getWorldPoint(a.m_localAnchorA),s.getWorldPoint(a.m_localAnchorB)),a.m_frequencyHz=e.frequencyHz,a.m_dampingRatio=e.dampingRatio,a.m_impulse=0,a.m_gamma=0,a.m_bias=0,a}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,length:this.m_length}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.length>0?this.m_length=+e.length:e.length<0||(e.anchorA||e.anchorA||e.anchorA||e.anchorA)&&(this.m_length=g.distance(this.m_bodyA.getWorldPoint(this.m_localAnchorA),this.m_bodyB.getWorldPoint(this.m_localAnchorB))),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setLength=function(e){this.m_length=e},t.prototype.getLength=function(){return this.m_length},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_u).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,h=this.m_bodyB.c_velocity.v,c=this.m_bodyB.c_velocity.w,d=et.neo(s),u=et.neo(l);this.m_rA=et.mulVec2(d,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=et.mulVec2(u,g.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_u=g.sub(g.add(a,this.m_rB),g.add(i,this.m_rA));var p=this.m_u.length();p>dt.linearSlop?this.m_u.mul(1/p):this.m_u.setNum(0,0);var f=g.crossVec2Vec2(this.m_rA,this.m_u),v=g.crossVec2Vec2(this.m_rB,this.m_u),_=this.m_invMassA+this.m_invIA*f*f+this.m_invMassB+this.m_invIB*v*v;if(this.m_mass=_!=0?1/_:0,this.m_frequencyHz>0){var m=p-this.m_length,x=2*Nm*this.m_frequencyHz,b=2*this.m_mass*this.m_dampingRatio*x,y=this.m_mass*x*x,R=e.dt;this.m_gamma=R*(b+R*y),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=m*R*y*this.m_gamma,_+=this.m_gamma,this.m_mass=_!=0?1/_:0}else this.m_gamma=0,this.m_bias=0;if(e.warmStarting){this.m_impulse*=e.dtRatio;var T=g.mulNumVec2(this.m_impulse,this.m_u);r.subMul(this.m_invMassA,T),o-=this.m_invIA*g.crossVec2Vec2(this.m_rA,T),h.addMul(this.m_invMassB,T),c+=this.m_invIB*g.crossVec2Vec2(this.m_rB,T)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(h),this.m_bodyB.c_velocity.w=c},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.add(i,g.crossNumVec2(s,this.m_rA)),l=g.add(r,g.crossNumVec2(o,this.m_rB)),h=g.dot(this.m_u,l)-g.dot(this.m_u,a),c=-this.m_mass*(h+this.m_bias+this.m_gamma*this.m_impulse);this.m_impulse+=c;var d=g.mulNumVec2(c,this.m_u);i.subMul(this.m_invMassA,d),s-=this.m_invIA*g.crossVec2Vec2(this.m_rA,d),r.addMul(this.m_invMassB,d),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,d),this.m_bodyA.c_velocity.v.setVec2(i),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.setVec2(r),this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){if(this.m_frequencyHz>0)return!0;var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=et.neo(s),l=et.neo(o),h=et.mulSub(a,this.m_localAnchorA,this.m_localCenterA),c=et.mulSub(l,this.m_localAnchorB,this.m_localCenterB),d=g.sub(g.add(r,c),g.add(i,h)),u=d.normalize(),p=$e(u-this.m_length,-dt.maxLinearCorrection,dt.maxLinearCorrection),f=-this.m_mass*p,v=g.mulNumVec2(f,d);return i.subMul(this.m_invMassA,v),s-=this.m_invIA*g.crossVec2Vec2(h,v),r.addMul(this.m_invMassB,v),o+=this.m_invIB*g.crossVec2Vec2(c,v),this.m_bodyA.c_position.c.setVec2(i),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,Dm(p)<dt.linearSlop},t.TYPE="distance-joint",t}(Ze),Um={maxForce:0,maxTorque:0},Ga=function(n){si(t,n);function t(e,i,s,r){var o=this;return o instanceof t?(e=Bi(e,Um),o=n.call(this,e,i,s)||this,i=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?i.getLocalPoint(r):e.localAnchorA||g.zero()),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),o.m_linearImpulse=g.zero(),o.m_angularImpulse=0,o.m_maxForce=e.maxForce,o.m_maxTorque=e.maxTorque,o):new t(e,i,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.maxTorque)&&(this.m_maxTorque=e.maxTorque)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setMaxTorque=function(e){this.m_maxTorque=e},t.prototype.getMaxTorque=function(){return this.m_maxTorque},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_linearImpulse)},t.prototype.getReactionTorque=function(e){return e*this.m_angularImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,h=et.neo(i),c=et.neo(o);this.m_rA=et.mulVec2(h,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=et.mulVec2(c,g.sub(this.m_localAnchorB,this.m_localCenterB));var d=this.m_invMassA,u=this.m_invMassB,p=this.m_invIA,f=this.m_invIB,v=new Ii;if(v.ex.x=d+u+p*this.m_rA.y*this.m_rA.y+f*this.m_rB.y*this.m_rB.y,v.ex.y=-p*this.m_rA.x*this.m_rA.y-f*this.m_rB.x*this.m_rB.y,v.ey.x=v.ex.y,v.ey.y=d+u+p*this.m_rA.x*this.m_rA.x+f*this.m_rB.x*this.m_rB.x,this.m_linearMass=v.getInverse(),this.m_angularMass=p+f,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),e.warmStarting){this.m_linearImpulse.mul(e.dtRatio),this.m_angularImpulse*=e.dtRatio;var _=g.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);s.subMul(d,_),r-=p*(g.crossVec2Vec2(this.m_rA,_)+this.m_angularImpulse),a.addMul(u,_),l+=f*(g.crossVec2Vec2(this.m_rB,_)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,h=this.m_invIA,c=this.m_invIB,d=e.dt;{var u=o-s,p=-this.m_angularMass*u,f=this.m_angularImpulse,v=d*this.m_maxTorque;this.m_angularImpulse=$e(this.m_angularImpulse+p,-v,v),p=this.m_angularImpulse-f,s-=h*p,o+=c*p}{var u=g.sub(g.add(r,g.crossNumVec2(o,this.m_rB)),g.add(i,g.crossNumVec2(s,this.m_rA))),p=g.neg(Ii.mulVec2(this.m_linearMass,u)),f=this.m_linearImpulse;this.m_linearImpulse.add(p);var v=d*this.m_maxForce;this.m_linearImpulse.lengthSquared()>v*v&&(this.m_linearImpulse.normalize(),this.m_linearImpulse.mul(v)),p=g.sub(this.m_linearImpulse,f),i.subMul(a,p),s-=h*g.crossVec2Vec2(this.m_rA,p),r.addMul(l,p),o+=c*g.crossVec2Vec2(this.m_rB,p)}this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="friction-joint",t}(Ze),Sn=function(){function n(t,e,i){typeof t=="object"&&t!==null?(this.ex=ae.clone(t),this.ey=ae.clone(e),this.ez=ae.clone(i)):(this.ex=ae.zero(),this.ey=ae.zero(),this.ez=ae.zero())}return n.prototype.toString=function(){return JSON.stringify(this)},n.isValid=function(t){return t===null||typeof t>"u"?!1:ae.isValid(t.ex)&&ae.isValid(t.ey)&&ae.isValid(t.ez)},n.assert=function(t){},n.prototype.setZero=function(){return this.ex.setZero(),this.ey.setZero(),this.ez.setZero(),this},n.prototype.solve33=function(t){var e=this.ey.y*this.ez.z-this.ey.z*this.ez.y,i=this.ey.z*this.ez.x-this.ey.x*this.ez.z,s=this.ey.x*this.ez.y-this.ey.y*this.ez.x,r=this.ex.x*e+this.ex.y*i+this.ex.z*s;r!==0&&(r=1/r);var o=new ae;return e=this.ey.y*this.ez.z-this.ey.z*this.ez.y,i=this.ey.z*this.ez.x-this.ey.x*this.ez.z,s=this.ey.x*this.ez.y-this.ey.y*this.ez.x,o.x=r*(t.x*e+t.y*i+t.z*s),e=t.y*this.ez.z-t.z*this.ez.y,i=t.z*this.ez.x-t.x*this.ez.z,s=t.x*this.ez.y-t.y*this.ez.x,o.y=r*(this.ex.x*e+this.ex.y*i+this.ex.z*s),e=this.ey.y*t.z-this.ey.z*t.y,i=this.ey.z*t.x-this.ey.x*t.z,s=this.ey.x*t.y-this.ey.y*t.x,o.z=r*(this.ex.x*e+this.ex.y*i+this.ex.z*s),o},n.prototype.solve22=function(t){var e=this.ex.x,i=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-i*s;o!==0&&(o=1/o);var a=g.zero();return a.x=o*(r*t.x-i*t.y),a.y=o*(e*t.y-s*t.x),a},n.prototype.getInverse22=function(t){var e=this.ex.x,i=this.ey.x,s=this.ex.y,r=this.ey.y,o=e*r-i*s;o!==0&&(o=1/o),t.ex.x=o*r,t.ey.x=-o*i,t.ex.z=0,t.ex.y=-o*s,t.ey.y=o*e,t.ey.z=0,t.ez.x=0,t.ez.y=0,t.ez.z=0},n.prototype.getSymInverse33=function(t){var e=ae.dot(this.ex,ae.cross(this.ey,this.ez));e!==0&&(e=1/e);var i=this.ex.x,s=this.ey.x,r=this.ez.x,o=this.ey.y,a=this.ez.y,l=this.ez.z;t.ex.x=e*(o*l-a*a),t.ex.y=e*(r*a-s*l),t.ex.z=e*(s*a-r*o),t.ey.x=t.ex.y,t.ey.y=e*(i*l-r*r),t.ey.z=e*(r*s-i*a),t.ez.x=t.ex.z,t.ez.y=t.ey.z,t.ez.z=e*(i*o-s*s)},n.mul=function(t,e){if(e&&"z"in e&&"y"in e&&"x"in e){var i=t.ex.x*e.x+t.ey.x*e.y+t.ez.x*e.z,s=t.ex.y*e.x+t.ey.y*e.y+t.ez.y*e.z,r=t.ex.z*e.x+t.ey.z*e.y+t.ez.z*e.z;return new ae(i,s,r)}else if(e&&"y"in e&&"x"in e){var i=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(i,s)}},n.mulVec3=function(t,e){var i=t.ex.x*e.x+t.ey.x*e.y+t.ez.x*e.z,s=t.ex.y*e.x+t.ey.y*e.y+t.ez.y*e.z,r=t.ex.z*e.x+t.ey.z*e.y+t.ez.z*e.z;return new ae(i,s,r)},n.mulVec2=function(t,e){var i=t.ex.x*e.x+t.ey.x*e.y,s=t.ex.y*e.x+t.ey.y*e.y;return g.neo(i,s)},n.add=function(t,e){return new n(ae.add(t.ex,e.ex),ae.add(t.ey,e.ey),ae.add(t.ez,e.ez))},n}(),Bf=Math.abs,Ge;(function(n){n[n.inactiveLimit=0]="inactiveLimit",n[n.atLowerLimit=1]="atLowerLimit",n[n.atUpperLimit=2]="atUpperLimit",n[n.equalLimits=3]="equalLimits"})(Ge||(Ge={}));var Mr={lowerAngle:0,upperAngle:0,maxMotorTorque:0,motorSpeed:0,enableLimit:!1,enableMotor:!1},Mn=function(n){si(t,n);function t(e,i,s,r){var o=this,a,l,h,c,d,u;return o instanceof t?(e=e??{},o=n.call(this,e,i,s)||this,i=o.m_bodyA,s=o.m_bodyB,o.m_mass=new Sn,o.m_limitState=Ge.inactiveLimit,o.m_type=t.TYPE,g.isValid(r)?o.m_localAnchorA=i.getLocalPoint(r):g.isValid(e.localAnchorA)?o.m_localAnchorA=g.clone(e.localAnchorA):o.m_localAnchorA=g.zero(),g.isValid(r)?o.m_localAnchorB=s.getLocalPoint(r):g.isValid(e.localAnchorB)?o.m_localAnchorB=g.clone(e.localAnchorB):o.m_localAnchorB=g.zero(),Number.isFinite(e.referenceAngle)?o.m_referenceAngle=e.referenceAngle:o.m_referenceAngle=s.getAngle()-i.getAngle(),o.m_impulse=new ae,o.m_motorImpulse=0,o.m_lowerAngle=(a=e.lowerAngle)!==null&&a!==void 0?a:Mr.lowerAngle,o.m_upperAngle=(l=e.upperAngle)!==null&&l!==void 0?l:Mr.upperAngle,o.m_maxMotorTorque=(h=e.maxMotorTorque)!==null&&h!==void 0?h:Mr.maxMotorTorque,o.m_motorSpeed=(c=e.motorSpeed)!==null&&c!==void 0?c:Mr.motorSpeed,o.m_enableLimit=(d=e.enableLimit)!==null&&d!==void 0?d:Mr.enableLimit,o.m_enableMotor=(u=e.enableMotor)!==null&&u!==void 0?u:Mr.enableMotor,o):new t(e,i,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerAngle:this.m_lowerAngle,upperAngle:this.m_upperAngle,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.referenceAngle)&&(this.m_referenceAngle=e.referenceAngle),e.enableLimit!==void 0&&(this.m_enableLimit=e.enableLimit),Number.isFinite(e.lowerAngle)&&(this.m_lowerAngle=e.lowerAngle),Number.isFinite(e.upperAngle)&&(this.m_upperAngle=e.upperAngle),Number.isFinite(e.maxMotorTorque)&&(this.m_maxMotorTorque=e.maxMotorTorque),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed),e.enableMotor!==void 0&&(this.m_enableMotor=e.enableMotor)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.getJointAngle=function(){var e=this.m_bodyA,i=this.m_bodyB;return i.m_sweep.a-e.m_sweep.a-this.m_referenceAngle},t.prototype.getJointSpeed=function(){var e=this.m_bodyA,i=this.m_bodyB;return i.m_angularVelocity-e.m_angularVelocity},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.getMotorTorque=function(e){return e*this.m_motorImpulse},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.setMaxMotorTorque=function(e){e!=this.m_maxMotorTorque&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=e)},t.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},t.prototype.isLimitEnabled=function(){return this.m_enableLimit},t.prototype.enableLimit=function(e){e!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=e,this.m_impulse.z=0)},t.prototype.getLowerLimit=function(){return this.m_lowerAngle},t.prototype.getUpperLimit=function(){return this.m_upperAngle},t.prototype.setLimits=function(e,i){(e!=this.m_lowerAngle||i!=this.m_upperAngle)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_impulse.z=0,this.m_lowerAngle=e,this.m_upperAngle=i)},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.neo(this.m_impulse.x,this.m_impulse.y).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.z},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,h=et.neo(i),c=et.neo(o);this.m_rA=et.mulVec2(h,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=et.mulVec2(c,g.sub(this.m_localAnchorB,this.m_localCenterB));var d=this.m_invMassA,u=this.m_invMassB,p=this.m_invIA,f=this.m_invIB,v=p+f===0;if(this.m_mass.ex.x=d+u+this.m_rA.y*this.m_rA.y*p+this.m_rB.y*this.m_rB.y*f,this.m_mass.ey.x=-this.m_rA.y*this.m_rA.x*p-this.m_rB.y*this.m_rB.x*f,this.m_mass.ez.x=-this.m_rA.y*p-this.m_rB.y*f,this.m_mass.ex.y=this.m_mass.ey.x,this.m_mass.ey.y=d+u+this.m_rA.x*this.m_rA.x*p+this.m_rB.x*this.m_rB.x*f,this.m_mass.ez.y=this.m_rA.x*p+this.m_rB.x*f,this.m_mass.ex.z=this.m_mass.ez.x,this.m_mass.ey.z=this.m_mass.ez.y,this.m_mass.ez.z=p+f,this.m_motorMass=p+f,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass),(this.m_enableMotor==!1||v)&&(this.m_motorImpulse=0),this.m_enableLimit&&v==!1){var _=o-i-this.m_referenceAngle;Bf(this.m_upperAngle-this.m_lowerAngle)<2*dt.angularSlop?this.m_limitState=Ge.equalLimits:_<=this.m_lowerAngle?(this.m_limitState!=Ge.atLowerLimit&&(this.m_impulse.z=0),this.m_limitState=Ge.atLowerLimit):_>=this.m_upperAngle?(this.m_limitState!=Ge.atUpperLimit&&(this.m_impulse.z=0),this.m_limitState=Ge.atUpperLimit):(this.m_limitState=Ge.inactiveLimit,this.m_impulse.z=0)}else this.m_limitState=Ge.inactiveLimit;if(e.warmStarting){this.m_impulse.mul(e.dtRatio),this.m_motorImpulse*=e.dtRatio;var m=g.neo(this.m_impulse.x,this.m_impulse.y);s.subMul(d,m),r-=p*(g.crossVec2Vec2(this.m_rA,m)+this.m_motorImpulse+this.m_impulse.z),a.addMul(u,m),l+=f*(g.crossVec2Vec2(this.m_rB,m)+this.m_motorImpulse+this.m_impulse.z)}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,h=this.m_invIA,c=this.m_invIB,d=h+c===0;if(this.m_enableMotor&&this.m_limitState!=Ge.equalLimits&&d==!1){var u=o-s-this.m_motorSpeed,p=-this.m_motorMass*u,f=this.m_motorImpulse,v=e.dt*this.m_maxMotorTorque;this.m_motorImpulse=$e(this.m_motorImpulse+p,-v,v),p=this.m_motorImpulse-f,s-=h*p,o+=c*p}if(this.m_enableLimit&&this.m_limitState!=Ge.inactiveLimit&&d==!1){var _=g.zero();_.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),_.subCombine(1,i,1,g.crossNumVec2(s,this.m_rA));var m=o-s,u=new ae(_.x,_.y,m),p=ae.neg(this.m_mass.solve33(u));if(this.m_limitState==Ge.equalLimits)this.m_impulse.add(p);else if(this.m_limitState==Ge.atLowerLimit){var x=this.m_impulse.z+p.z;if(x<0){var b=g.combine(-1,_,this.m_impulse.z,g.neo(this.m_mass.ez.x,this.m_mass.ez.y)),y=this.m_mass.solve22(b);p.x=y.x,p.y=y.y,p.z=-this.m_impulse.z,this.m_impulse.x+=y.x,this.m_impulse.y+=y.y,this.m_impulse.z=0}else this.m_impulse.add(p)}else if(this.m_limitState==Ge.atUpperLimit){var x=this.m_impulse.z+p.z;if(x>0){var b=g.combine(-1,_,this.m_impulse.z,g.neo(this.m_mass.ez.x,this.m_mass.ez.y)),y=this.m_mass.solve22(b);p.x=y.x,p.y=y.y,p.z=-this.m_impulse.z,this.m_impulse.x+=y.x,this.m_impulse.y+=y.y,this.m_impulse.z=0}else this.m_impulse.add(p)}var R=g.neo(p.x,p.y);i.subMul(a,R),s-=h*(g.crossVec2Vec2(this.m_rA,R)+p.z),r.addMul(l,R),o+=c*(g.crossVec2Vec2(this.m_rB,R)+p.z)}else{var u=g.zero();u.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),u.subCombine(1,i,1,g.crossNumVec2(s,this.m_rA));var p=this.m_mass.solve22(g.neg(u));this.m_impulse.x+=p.x,this.m_impulse.y+=p.y,i.subMul(a,p),s-=h*g.crossVec2Vec2(this.m_rA,p),r.addMul(l,p),o+=c*g.crossVec2Vec2(this.m_rB,p)}this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=et.neo(s),l=et.neo(o),h=0,c=0,d=this.m_invIA+this.m_invIB==0;if(this.m_enableLimit&&this.m_limitState!=Ge.inactiveLimit&&d==!1){var u=o-s-this.m_referenceAngle,p=0;if(this.m_limitState==Ge.equalLimits){var f=$e(u-this.m_lowerAngle,-dt.maxAngularCorrection,dt.maxAngularCorrection);p=-this.m_motorMass*f,h=Bf(f)}else if(this.m_limitState==Ge.atLowerLimit){var f=u-this.m_lowerAngle;h=-f,f=$e(f+dt.angularSlop,-dt.maxAngularCorrection,0),p=-this.m_motorMass*f}else if(this.m_limitState==Ge.atUpperLimit){var f=u-this.m_upperAngle;h=f,f=$e(f-dt.angularSlop,0,dt.maxAngularCorrection),p=-this.m_motorMass*f}s-=this.m_invIA*p,o+=this.m_invIB*p}{a.setAngle(s),l.setAngle(o);var v=et.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),_=et.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),f=g.zero();f.addCombine(1,r,1,_),f.subCombine(1,i,1,v),c=f.length();var m=this.m_invMassA,x=this.m_invMassB,b=this.m_invIA,y=this.m_invIB,R=new Ii;R.ex.x=m+x+b*v.y*v.y+y*_.y*_.y,R.ex.y=-b*v.x*v.y-y*_.x*_.y,R.ey.x=R.ex.y,R.ey.y=m+x+b*v.x*v.x+y*_.x*_.x;var T=g.neg(R.solve(f));i.subMul(m,T),s-=b*g.crossVec2Vec2(v,T),r.addMul(x,T),o+=y*g.crossVec2Vec2(_,T)}return this.m_bodyA.c_position.c.setVec2(i),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,c<=dt.linearSlop&&h<=dt.angularSlop},t.TYPE="revolute-joint",t}(Ze),Mo=Math.abs,Pf=Math.max,Vm=Math.min,xi;(function(n){n[n.inactiveLimit=0]="inactiveLimit",n[n.atLowerLimit=1]="atLowerLimit",n[n.atUpperLimit=2]="atUpperLimit",n[n.equalLimits=3]="equalLimits"})(xi||(xi={}));var zm={enableLimit:!1,lowerTranslation:0,upperTranslation:0,enableMotor:!1,maxMotorForce:0,motorSpeed:0},Wa=function(n){si(t,n);function t(e,i,s,r,o){var a=this;return a instanceof t?(e=Bi(e,zm),a=n.call(this,e,i,s)||this,i=a.m_bodyA,s=a.m_bodyB,a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?i.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),a.m_localXAxisA=g.clone(o?i.getLocalVector(o):e.localAxisA||g.neo(1,0)),a.m_localXAxisA.normalize(),a.m_localYAxisA=g.crossNumVec2(1,a.m_localXAxisA),a.m_referenceAngle=Number.isFinite(e.referenceAngle)?e.referenceAngle:s.getAngle()-i.getAngle(),a.m_impulse=new ae,a.m_motorMass=0,a.m_motorImpulse=0,a.m_lowerTranslation=e.lowerTranslation,a.m_upperTranslation=e.upperTranslation,a.m_maxMotorForce=e.maxMotorForce,a.m_motorSpeed=e.motorSpeed,a.m_enableLimit=e.enableLimit,a.m_enableMotor=e.enableMotor,a.m_limitState=xi.inactiveLimit,a.m_axis=g.zero(),a.m_perp=g.zero(),a.m_K=new Sn,a):new t(e,i,s,r,o)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerTranslation:this.m_lowerTranslation,upperTranslation:this.m_upperTranslation,maxMotorForce:this.m_maxMotorForce,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i),e.localAxisA=g.clone(e.localAxisA);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.localAxisA&&(this.m_localXAxisA.setVec2(e.localAxisA),this.m_localYAxisA.setVec2(g.crossNumVec2(1,e.localAxisA))),Number.isFinite(e.referenceAngle)&&(this.m_referenceAngle=e.referenceAngle),typeof e.enableLimit<"u"&&(this.m_enableLimit=!!e.enableLimit),Number.isFinite(e.lowerTranslation)&&(this.m_lowerTranslation=e.lowerTranslation),Number.isFinite(e.upperTranslation)&&(this.m_upperTranslation=e.upperTranslation),typeof e.enableMotor<"u"&&(this.m_enableMotor=!!e.enableMotor),Number.isFinite(e.maxMotorForce)&&(this.m_maxMotorForce=e.maxMotorForce),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getLocalAxisA=function(){return this.m_localXAxisA},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.getJointTranslation=function(){var e=this.m_bodyA.getWorldPoint(this.m_localAnchorA),i=this.m_bodyB.getWorldPoint(this.m_localAnchorB),s=g.sub(i,e),r=this.m_bodyA.getWorldVector(this.m_localXAxisA),o=g.dot(s,r);return o},t.prototype.getJointSpeed=function(){var e=this.m_bodyA,i=this.m_bodyB,s=et.mulVec2(e.m_xf.q,g.sub(this.m_localAnchorA,e.m_sweep.localCenter)),r=et.mulVec2(i.m_xf.q,g.sub(this.m_localAnchorB,i.m_sweep.localCenter)),o=g.add(e.m_sweep.c,s),a=g.add(i.m_sweep.c,r),l=g.sub(a,o),h=et.mulVec2(e.m_xf.q,this.m_localXAxisA),c=e.m_linearVelocity,d=i.m_linearVelocity,u=e.m_angularVelocity,p=i.m_angularVelocity,f=g.dot(l,g.crossNumVec2(u,h))+g.dot(h,g.sub(g.addCrossNumVec2(d,p,r),g.addCrossNumVec2(c,u,s)));return f},t.prototype.isLimitEnabled=function(){return this.m_enableLimit},t.prototype.enableLimit=function(e){e!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=e,this.m_impulse.z=0)},t.prototype.getLowerLimit=function(){return this.m_lowerTranslation},t.prototype.getUpperLimit=function(){return this.m_upperTranslation},t.prototype.setLimits=function(e,i){(e!=this.m_lowerTranslation||i!=this.m_upperTranslation)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_lowerTranslation=e,this.m_upperTranslation=i,this.m_impulse.z=0)},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.setMaxMotorForce=function(e){e!=this.m_maxMotorForce&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorForce=e)},t.prototype.getMaxMotorForce=function(){return this.m_maxMotorForce},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.getMotorForce=function(e){return e*this.m_motorImpulse},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.y},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,h=this.m_bodyB.c_velocity.v,c=this.m_bodyB.c_velocity.w,d=et.neo(s),u=et.neo(l),p=et.mulVec2(d,g.sub(this.m_localAnchorA,this.m_localCenterA)),f=et.mulVec2(u,g.sub(this.m_localAnchorB,this.m_localCenterB)),v=g.zero();v.addCombine(1,a,1,f),v.subCombine(1,i,1,p);var _=this.m_invMassA,m=this.m_invMassB,x=this.m_invIA,b=this.m_invIB;this.m_axis=et.mulVec2(d,this.m_localXAxisA),this.m_a1=g.crossVec2Vec2(g.add(v,p),this.m_axis),this.m_a2=g.crossVec2Vec2(f,this.m_axis),this.m_motorMass=_+m+x*this.m_a1*this.m_a1+b*this.m_a2*this.m_a2,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass);{this.m_perp=et.mulVec2(d,this.m_localYAxisA),this.m_s1=g.crossVec2Vec2(g.add(v,p),this.m_perp),this.m_s2=g.crossVec2Vec2(f,this.m_perp),g.crossVec2Vec2(p,this.m_perp);var y=_+m+x*this.m_s1*this.m_s1+b*this.m_s2*this.m_s2,R=x*this.m_s1+b*this.m_s2,T=x*this.m_s1*this.m_a1+b*this.m_s2*this.m_a2,E=x+b;E==0&&(E=1);var I=x*this.m_a1+b*this.m_a2,S=_+m+x*this.m_a1*this.m_a1+b*this.m_a2*this.m_a2;this.m_K.ex.set(y,R,T),this.m_K.ey.set(R,E,I),this.m_K.ez.set(T,I,S)}if(this.m_enableLimit){var A=g.dot(this.m_axis,v);Mo(this.m_upperTranslation-this.m_lowerTranslation)<2*dt.linearSlop?this.m_limitState=xi.equalLimits:A<=this.m_lowerTranslation?this.m_limitState!=xi.atLowerLimit&&(this.m_limitState=xi.atLowerLimit,this.m_impulse.z=0):A>=this.m_upperTranslation?this.m_limitState!=xi.atUpperLimit&&(this.m_limitState=xi.atUpperLimit,this.m_impulse.z=0):(this.m_limitState=xi.inactiveLimit,this.m_impulse.z=0)}else this.m_limitState=xi.inactiveLimit,this.m_impulse.z=0;if(this.m_enableMotor==!1&&(this.m_motorImpulse=0),e.warmStarting){this.m_impulse.mul(e.dtRatio),this.m_motorImpulse*=e.dtRatio;var P=g.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis),k=this.m_impulse.x*this.m_s1+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a1,O=this.m_impulse.x*this.m_s2+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a2;r.subMul(_,P),o-=x*k,h.addMul(m,P),c+=b*O}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(h),this.m_bodyB.c_velocity.w=c},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,h=this.m_invIA,c=this.m_invIB;if(this.m_enableMotor&&this.m_limitState!=xi.equalLimits){var d=g.dot(this.m_axis,g.sub(r,i))+this.m_a2*o-this.m_a1*s,u=this.m_motorMass*(this.m_motorSpeed-d),p=this.m_motorImpulse,f=e.dt*this.m_maxMotorForce;this.m_motorImpulse=$e(this.m_motorImpulse+u,-f,f),u=this.m_motorImpulse-p;var v=g.mulNumVec2(u,this.m_axis),_=u*this.m_a1,m=u*this.m_a2;i.subMul(a,v),s-=h*_,r.addMul(l,v),o+=c*m}var x=g.zero();if(x.x+=g.dot(this.m_perp,r)+this.m_s2*o,x.x-=g.dot(this.m_perp,i)+this.m_s1*s,x.y=o-s,this.m_enableLimit&&this.m_limitState!=xi.inactiveLimit){var b=0;b+=g.dot(this.m_axis,r)+this.m_a2*o,b-=g.dot(this.m_axis,i)+this.m_a1*s;var d=new ae(x.x,x.y,b),y=ae.clone(this.m_impulse),R=this.m_K.solve33(ae.neg(d));this.m_impulse.add(R),this.m_limitState==xi.atLowerLimit?this.m_impulse.z=Pf(this.m_impulse.z,0):this.m_limitState==xi.atUpperLimit&&(this.m_impulse.z=Vm(this.m_impulse.z,0));var T=g.combine(-1,x,-(this.m_impulse.z-y.z),g.neo(this.m_K.ez.x,this.m_K.ez.y)),E=g.add(this.m_K.solve22(T),g.neo(y.x,y.y));this.m_impulse.x=E.x,this.m_impulse.y=E.y,R=ae.sub(this.m_impulse,y);var v=g.combine(R.x,this.m_perp,R.z,this.m_axis),_=R.x*this.m_s1+R.y+R.z*this.m_a1,m=R.x*this.m_s2+R.y+R.z*this.m_a2;i.subMul(a,v),s-=h*_,r.addMul(l,v),o+=c*m}else{var R=this.m_K.solve22(g.neg(x));this.m_impulse.x+=R.x,this.m_impulse.y+=R.y;var v=g.mulNumVec2(R.x,this.m_perp),_=R.x*this.m_s1+R.y,m=R.x*this.m_s2+R.y;i.subMul(a,v),s-=h*_,r.addMul(l,v),o+=c*m}this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=et.neo(s),l=et.neo(o),h=this.m_invMassA,c=this.m_invMassB,d=this.m_invIA,u=this.m_invIB,p=et.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),f=et.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),v=g.sub(g.add(r,f),g.add(i,p)),_=et.mulVec2(a,this.m_localXAxisA),m=g.crossVec2Vec2(g.add(v,p),_),x=g.crossVec2Vec2(f,_),b=et.mulVec2(a,this.m_localYAxisA),y=g.crossVec2Vec2(g.add(v,p),b),R=g.crossVec2Vec2(f,b),T=new ae,E=g.zero();E.x=g.dot(b,v),E.y=o-s-this.m_referenceAngle;var I=Mo(E.x),S=Mo(E.y),A=dt.linearSlop,P=dt.maxLinearCorrection,k=!1,O=0;if(this.m_enableLimit){var G=g.dot(_,v);Mo(this.m_upperTranslation-this.m_lowerTranslation)<2*A?(O=$e(G,-P,P),I=Pf(I,Mo(G)),k=!0):G<=this.m_lowerTranslation?(O=$e(G-this.m_lowerTranslation+A,-P,0),I=Math.max(I,this.m_lowerTranslation-G),k=!0):G>=this.m_upperTranslation&&(O=$e(G-this.m_upperTranslation-A,0,P),I=Math.max(I,G-this.m_upperTranslation),k=!0)}if(k){var nt=h+c+d*y*y+u*R*R,J=d*y+u*R,lt=d*y*m+u*R*x,$=d+u;$==0&&($=1);var ct=d*m+u*x,yt=h+c+d*m*m+u*x*x,Mt=new Sn;Mt.ex.set(nt,J,lt),Mt.ey.set(J,$,ct),Mt.ez.set(lt,ct,yt);var kt=new ae;kt.x=E.x,kt.y=E.y,kt.z=O,T=Mt.solve33(ae.neg(kt))}else{var nt=h+c+d*y*y+u*R*R,J=d*y+u*R,$=d+u;$==0&&($=1);var Mt=new Ii;Mt.ex.setNum(nt,J),Mt.ey.setNum(J,$);var re=Mt.solve(g.neg(E));T.x=re.x,T.y=re.y,T.z=0}var B=g.combine(T.x,b,T.z,_),L=T.x*y+T.y+T.z*m,U=T.x*R+T.y+T.z*x;return i.subMul(h,B),s-=d*L,r.addMul(c,B),o+=u*U,this.m_bodyA.c_position.c=i,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,I<=dt.linearSlop&&S<=dt.angularSlop},t.TYPE="prismatic-joint",t}(Ze),Om={ratio:1},qa=function(n){si(t,n);function t(e,i,s,r,o,a){var l=this;if(!(l instanceof t))return new t(e,i,s,r,o,a);e=Bi(e,Om),l=n.call(this,e,i,s)||this,i=l.m_bodyA,s=l.m_bodyB,l.m_type=t.TYPE,l.m_joint1=r||e.joint1,l.m_joint2=o||e.joint2,l.m_ratio=Number.isFinite(a)?a:e.ratio,l.m_type1=l.m_joint1.getType(),l.m_type2=l.m_joint2.getType();var h,c;l.m_bodyC=l.m_joint1.getBodyA(),l.m_bodyA=l.m_joint1.getBodyB();var d=l.m_bodyA.m_xf,u=l.m_bodyA.m_sweep.a,p=l.m_bodyC.m_xf,f=l.m_bodyC.m_sweep.a;if(l.m_type1===Mn.TYPE){var v=l.m_joint1;l.m_localAnchorC=v.m_localAnchorA,l.m_localAnchorA=v.m_localAnchorB,l.m_referenceAngleA=v.m_referenceAngle,l.m_localAxisC=g.zero(),h=u-f-l.m_referenceAngleA}else{var _=l.m_joint1;l.m_localAnchorC=_.m_localAnchorA,l.m_localAnchorA=_.m_localAnchorB,l.m_referenceAngleA=_.m_referenceAngle,l.m_localAxisC=_.m_localXAxisA;var m=l.m_localAnchorC,x=et.mulTVec2(p.q,g.add(et.mulVec2(d.q,l.m_localAnchorA),g.sub(d.p,p.p)));h=g.dot(x,l.m_localAxisC)-g.dot(m,l.m_localAxisC)}l.m_bodyD=l.m_joint2.getBodyA(),l.m_bodyB=l.m_joint2.getBodyB();var b=l.m_bodyB.m_xf,y=l.m_bodyB.m_sweep.a,R=l.m_bodyD.m_xf,T=l.m_bodyD.m_sweep.a;if(l.m_type2===Mn.TYPE){var v=l.m_joint2;l.m_localAnchorD=v.m_localAnchorA,l.m_localAnchorB=v.m_localAnchorB,l.m_referenceAngleB=v.m_referenceAngle,l.m_localAxisD=g.zero(),c=y-T-l.m_referenceAngleB}else{var _=l.m_joint2;l.m_localAnchorD=_.m_localAnchorA,l.m_localAnchorB=_.m_localAnchorB,l.m_referenceAngleB=_.m_referenceAngle,l.m_localAxisD=_.m_localXAxisA;var E=l.m_localAnchorD,I=et.mulTVec2(R.q,g.add(et.mulVec2(b.q,l.m_localAnchorB),g.sub(b.p,R.p)));c=g.dot(I,l.m_localAxisD)-g.dot(E,l.m_localAxisD)}return l.m_constant=h+l.m_ratio*c,l.m_impulse=0,l}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,joint1:this.m_joint1,joint2:this.m_joint2,ratio:this.m_ratio}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i),e.joint1=s(Ze,e.joint1,i),e.joint2=s(Ze,e.joint2,i);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.ratio)&&(this.m_ratio=e.ratio)},t.prototype.getJoint1=function(){return this.m_joint1},t.prototype.getJoint2=function(){return this.m_joint2},t.prototype.setRatio=function(e){this.m_ratio=e},t.prototype.getRatio=function(){return this.m_ratio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_JvAC).mul(e)},t.prototype.getReactionTorque=function(e){var i=this.m_impulse*this.m_JwA;return e*i},t.prototype.initVelocityConstraints=function(e){this.m_lcA=this.m_bodyA.m_sweep.localCenter,this.m_lcB=this.m_bodyB.m_sweep.localCenter,this.m_lcC=this.m_bodyC.m_sweep.localCenter,this.m_lcD=this.m_bodyD.m_sweep.localCenter,this.m_mA=this.m_bodyA.m_invMass,this.m_mB=this.m_bodyB.m_invMass,this.m_mC=this.m_bodyC.m_invMass,this.m_mD=this.m_bodyD.m_invMass,this.m_iA=this.m_bodyA.m_invI,this.m_iB=this.m_bodyB.m_invI,this.m_iC=this.m_bodyC.m_invI,this.m_iD=this.m_bodyD.m_invI;var i=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,h=this.m_bodyC.c_position.a,c=this.m_bodyC.c_velocity.v,d=this.m_bodyC.c_velocity.w,u=this.m_bodyD.c_position.a,p=this.m_bodyD.c_velocity.v,f=this.m_bodyD.c_velocity.w,v=et.neo(i),_=et.neo(o),m=et.neo(h),x=et.neo(u);if(this.m_mass=0,this.m_type1==Mn.TYPE)this.m_JvAC=g.zero(),this.m_JwA=1,this.m_JwC=1,this.m_mass+=this.m_iA+this.m_iC;else{var b=et.mulVec2(m,this.m_localAxisC),y=et.mulSub(m,this.m_localAnchorC,this.m_lcC),R=et.mulSub(v,this.m_localAnchorA,this.m_lcA);this.m_JvAC=b,this.m_JwC=g.crossVec2Vec2(y,b),this.m_JwA=g.crossVec2Vec2(R,b),this.m_mass+=this.m_mC+this.m_mA+this.m_iC*this.m_JwC*this.m_JwC+this.m_iA*this.m_JwA*this.m_JwA}if(this.m_type2==Mn.TYPE)this.m_JvBD=g.zero(),this.m_JwB=this.m_ratio,this.m_JwD=this.m_ratio,this.m_mass+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD);else{var b=et.mulVec2(x,this.m_localAxisD),T=et.mulSub(x,this.m_localAnchorD,this.m_lcD),E=et.mulSub(_,this.m_localAnchorB,this.m_lcB);this.m_JvBD=g.mulNumVec2(this.m_ratio,b),this.m_JwD=this.m_ratio*g.crossVec2Vec2(T,b),this.m_JwB=this.m_ratio*g.crossVec2Vec2(E,b),this.m_mass+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*this.m_JwD*this.m_JwD+this.m_iB*this.m_JwB*this.m_JwB}this.m_mass=this.m_mass>0?1/this.m_mass:0,e.warmStarting?(s.addMul(this.m_mA*this.m_impulse,this.m_JvAC),r+=this.m_iA*this.m_impulse*this.m_JwA,a.addMul(this.m_mB*this.m_impulse,this.m_JvBD),l+=this.m_iB*this.m_impulse*this.m_JwB,c.subMul(this.m_mC*this.m_impulse,this.m_JvAC),d-=this.m_iC*this.m_impulse*this.m_JwC,p.subMul(this.m_mD*this.m_impulse,this.m_JvBD),f-=this.m_iD*this.m_impulse*this.m_JwD):this.m_impulse=0,this.m_bodyA.c_velocity.v.setVec2(s),this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v.setVec2(a),this.m_bodyB.c_velocity.w=l,this.m_bodyC.c_velocity.v.setVec2(c),this.m_bodyC.c_velocity.w=d,this.m_bodyD.c_velocity.v.setVec2(p),this.m_bodyD.c_velocity.w=f},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_bodyC.c_velocity.v,l=this.m_bodyC.c_velocity.w,h=this.m_bodyD.c_velocity.v,c=this.m_bodyD.c_velocity.w,d=g.dot(this.m_JvAC,i)-g.dot(this.m_JvAC,a)+g.dot(this.m_JvBD,r)-g.dot(this.m_JvBD,h);d+=this.m_JwA*s-this.m_JwC*l+(this.m_JwB*o-this.m_JwD*c);var u=-this.m_mass*d;this.m_impulse+=u,i.addMul(this.m_mA*u,this.m_JvAC),s+=this.m_iA*u*this.m_JwA,r.addMul(this.m_mB*u,this.m_JvBD),o+=this.m_iB*u*this.m_JwB,a.subMul(this.m_mC*u,this.m_JvAC),l-=this.m_iC*u*this.m_JwC,h.subMul(this.m_mD*u,this.m_JvBD),c-=this.m_iD*u*this.m_JwD,this.m_bodyA.c_velocity.v.setVec2(i),this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v.setVec2(r),this.m_bodyB.c_velocity.w=o,this.m_bodyC.c_velocity.v.setVec2(a),this.m_bodyC.c_velocity.w=l,this.m_bodyD.c_velocity.v.setVec2(h),this.m_bodyD.c_velocity.w=c},t.prototype.solvePositionConstraints=function(e){var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=this.m_bodyC.c_position.c,l=this.m_bodyC.c_position.a,h=this.m_bodyD.c_position.c,c=this.m_bodyD.c_position.a,d=et.neo(s),u=et.neo(o),p=et.neo(l),f=et.neo(c),v=0,_,m,x,b,y,R,T,E,I=0;if(this.m_type1==Mn.TYPE)x=g.zero(),y=1,T=1,I+=this.m_iA+this.m_iC,_=s-l-this.m_referenceAngleA;else{var S=et.mulVec2(p,this.m_localAxisC),A=et.mulSub(p,this.m_localAnchorC,this.m_lcC),P=et.mulSub(d,this.m_localAnchorA,this.m_lcA);x=S,T=g.crossVec2Vec2(A,S),y=g.crossVec2Vec2(P,S),I+=this.m_mC+this.m_mA+this.m_iC*T*T+this.m_iA*y*y;var k=g.sub(this.m_localAnchorC,this.m_lcC),O=et.mulTVec2(p,g.add(P,g.sub(i,a)));_=g.dot(g.sub(O,k),this.m_localAxisC)}if(this.m_type2==Mn.TYPE)b=g.zero(),R=this.m_ratio,E=this.m_ratio,I+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD),m=o-c-this.m_referenceAngleB;else{var S=et.mulVec2(f,this.m_localAxisD),G=et.mulSub(f,this.m_localAnchorD,this.m_lcD),nt=et.mulSub(u,this.m_localAnchorB,this.m_lcB);b=g.mulNumVec2(this.m_ratio,S),E=this.m_ratio*g.crossVec2Vec2(G,S),R=this.m_ratio*g.crossVec2Vec2(nt,S),I+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*E*E+this.m_iB*R*R;var J=g.sub(this.m_localAnchorD,this.m_lcD),lt=et.mulTVec2(f,g.add(nt,g.sub(r,h)));m=g.dot(lt,this.m_localAxisD)-g.dot(J,this.m_localAxisD)}var $=_+this.m_ratio*m-this.m_constant,ct=0;return I>0&&(ct=-$/I),i.addMul(this.m_mA*ct,x),s+=this.m_iA*ct*y,r.addMul(this.m_mB*ct,b),o+=this.m_iB*ct*R,a.subMul(this.m_mC*ct,x),l-=this.m_iC*ct*T,h.subMul(this.m_mD*ct,b),c-=this.m_iD*ct*E,this.m_bodyA.c_position.c.setVec2(i),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,this.m_bodyC.c_position.c.setVec2(a),this.m_bodyC.c_position.a=l,this.m_bodyD.c_position.c.setVec2(h),this.m_bodyD.c_position.a=c,v<dt.linearSlop},t.TYPE="gear-joint",t}(Ze),km={maxForce:1,maxTorque:1,correctionFactor:.3},Xa=function(n){si(t,n);function t(e,i,s){var r=this;return r instanceof t?(e=Bi(e,km),r=n.call(this,e,i,s)||this,i=r.m_bodyA,s=r.m_bodyB,r.m_type=t.TYPE,r.m_linearOffset=g.isValid(e.linearOffset)?g.clone(e.linearOffset):i.getLocalPoint(s.getPosition()),r.m_angularOffset=Number.isFinite(e.angularOffset)?e.angularOffset:s.getAngle()-i.getAngle(),r.m_linearImpulse=g.zero(),r.m_angularImpulse=0,r.m_maxForce=e.maxForce,r.m_maxTorque=e.maxTorque,r.m_correctionFactor=e.correctionFactor,r):new t(e,i,s)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,correctionFactor:this.m_correctionFactor,linearOffset:this.m_linearOffset,angularOffset:this.m_angularOffset}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.angularOffset)&&(this.m_angularOffset=e.angularOffset),Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.maxTorque)&&(this.m_maxTorque=e.maxTorque),Number.isFinite(e.correctionFactor)&&(this.m_correctionFactor=e.correctionFactor),g.isValid(e.linearOffset)&&this.m_linearOffset.set(e.linearOffset)},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setMaxTorque=function(e){this.m_maxTorque=e},t.prototype.getMaxTorque=function(){return this.m_maxTorque},t.prototype.setCorrectionFactor=function(e){this.m_correctionFactor=e},t.prototype.getCorrectionFactor=function(){return this.m_correctionFactor},t.prototype.setLinearOffset=function(e){(e.x!=this.m_linearOffset.x||e.y!=this.m_linearOffset.y)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_linearOffset.set(e))},t.prototype.getLinearOffset=function(){return this.m_linearOffset},t.prototype.setAngularOffset=function(e){e!=this.m_angularOffset&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_angularOffset=e)},t.prototype.getAngularOffset=function(){return this.m_angularOffset},t.prototype.getAnchorA=function(){return this.m_bodyA.getPosition()},t.prototype.getAnchorB=function(){return this.m_bodyB.getPosition()},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_linearImpulse)},t.prototype.getReactionTorque=function(e){return e*this.m_angularImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,h=this.m_bodyB.c_velocity.v,c=this.m_bodyB.c_velocity.w,d=et.neo(s),u=et.neo(l);this.m_rA=et.mulVec2(d,g.sub(this.m_linearOffset,this.m_localCenterA)),this.m_rB=et.mulVec2(u,g.neg(this.m_localCenterB));var p=this.m_invMassA,f=this.m_invMassB,v=this.m_invIA,_=this.m_invIB,m=new Ii;if(m.ex.x=p+f+v*this.m_rA.y*this.m_rA.y+_*this.m_rB.y*this.m_rB.y,m.ex.y=-v*this.m_rA.x*this.m_rA.y-_*this.m_rB.x*this.m_rB.y,m.ey.x=m.ex.y,m.ey.y=p+f+v*this.m_rA.x*this.m_rA.x+_*this.m_rB.x*this.m_rB.x,this.m_linearMass=m.getInverse(),this.m_angularMass=v+_,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),this.m_linearError=g.zero(),this.m_linearError.addCombine(1,a,1,this.m_rB),this.m_linearError.subCombine(1,i,1,this.m_rA),this.m_angularError=l-s-this.m_angularOffset,e.warmStarting){this.m_linearImpulse.mul(e.dtRatio),this.m_angularImpulse*=e.dtRatio;var x=g.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);r.subMul(p,x),o-=v*(g.crossVec2Vec2(this.m_rA,x)+this.m_angularImpulse),h.addMul(f,x),c+=_*(g.crossVec2Vec2(this.m_rB,x)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=r,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=h,this.m_bodyB.c_velocity.w=c},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,h=this.m_invIA,c=this.m_invIB,d=e.dt,u=e.inv_dt;{var p=o-s+u*this.m_correctionFactor*this.m_angularError,f=-this.m_angularMass*p,v=this.m_angularImpulse,_=d*this.m_maxTorque;this.m_angularImpulse=$e(this.m_angularImpulse+f,-_,_),f=this.m_angularImpulse-v,s-=h*f,o+=c*f}{var p=g.zero();p.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),p.subCombine(1,i,1,g.crossNumVec2(s,this.m_rA)),p.addMul(u*this.m_correctionFactor,this.m_linearError);var f=g.neg(Ii.mulVec2(this.m_linearMass,p)),v=g.clone(this.m_linearImpulse);this.m_linearImpulse.add(f);var _=d*this.m_maxForce;this.m_linearImpulse.clamp(_),f=g.sub(this.m_linearImpulse,v),i.subMul(a,f),s-=h*g.crossVec2Vec2(this.m_rA,f),r.addMul(l,f),o+=c*g.crossVec2Vec2(this.m_rB,f)}this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="motor-joint",t}(Ze),Hm=Math.PI,Gm={maxForce:0,frequencyHz:5,dampingRatio:.7},Ya=function(n){si(t,n);function t(e,i,s,r){var o=this;return o instanceof t?(e=Bi(e,Gm),o=n.call(this,e,i,s)||this,i=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,g.isValid(r)?o.m_targetA=g.clone(r):g.isValid(e.target)?o.m_targetA=g.clone(e.target):o.m_targetA=g.zero(),o.m_localAnchorB=ei.mulTVec2(s.getTransform(),o.m_targetA),o.m_maxForce=e.maxForce,o.m_impulse=g.zero(),o.m_frequencyHz=e.frequencyHz,o.m_dampingRatio=e.dampingRatio,o.m_beta=0,o.m_gamma=0,o.m_rB=g.zero(),o.m_localCenterB=g.zero(),o.m_invMassB=0,o.m_invIB=0,o.m_mass=new Ii,o.m_C=g.zero(),o):new t(e,i,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,target:this.m_targetA,maxForce:this.m_maxForce,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,_localAnchorB:this.m_localAnchorB}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i),e.target=g.clone(e.target);var r=new t(e);return e._localAnchorB&&(r.m_localAnchorB=e._localAnchorB),r},t.prototype._reset=function(e){Number.isFinite(e.maxForce)&&(this.m_maxForce=e.maxForce),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.setTarget=function(e){g.areEqual(e,this.m_targetA)||(this.m_bodyB.setAwake(!0),this.m_targetA.set(e))},t.prototype.getTarget=function(){return this.m_targetA},t.prototype.setMaxForce=function(e){this.m_maxForce=e},t.prototype.getMaxForce=function(){return this.m_maxForce},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return g.clone(this.m_targetA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(e,this.m_impulse)},t.prototype.getReactionTorque=function(e){return e*0},t.prototype.shiftOrigin=function(e){this.m_targetA.sub(e)},t.prototype.initVelocityConstraints=function(e){this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyB.c_position,s=this.m_bodyB.c_velocity,r=i.c,o=i.a,a=s.v,l=s.w,h=et.neo(o),c=this.m_bodyB.getMass(),d=2*Hm*this.m_frequencyHz,u=2*c*this.m_dampingRatio*d,p=c*(d*d),f=e.dt;this.m_gamma=f*(u+f*p),this.m_gamma!=0&&(this.m_gamma=1/this.m_gamma),this.m_beta=f*p*this.m_gamma,this.m_rB=et.mulVec2(h,g.sub(this.m_localAnchorB,this.m_localCenterB));var v=new Ii;v.ex.x=this.m_invMassB+this.m_invIB*this.m_rB.y*this.m_rB.y+this.m_gamma,v.ex.y=-this.m_invIB*this.m_rB.x*this.m_rB.y,v.ey.x=v.ex.y,v.ey.y=this.m_invMassB+this.m_invIB*this.m_rB.x*this.m_rB.x+this.m_gamma,this.m_mass=v.getInverse(),this.m_C.setVec2(r),this.m_C.addCombine(1,this.m_rB,-1,this.m_targetA),this.m_C.mul(this.m_beta),l*=.98,e.warmStarting?(this.m_impulse.mul(e.dtRatio),a.addMul(this.m_invMassB,this.m_impulse),l+=this.m_invIB*g.crossVec2Vec2(this.m_rB,this.m_impulse)):this.m_impulse.setZero(),s.v.setVec2(a),s.w=l},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyB.c_velocity,s=g.clone(i.v),r=i.w,o=g.crossNumVec2(r,this.m_rB);o.add(s),o.addCombine(1,this.m_C,this.m_gamma,this.m_impulse),o.neg();var a=Ii.mulVec2(this.m_mass,o),l=g.clone(this.m_impulse);this.m_impulse.add(a);var h=e.dt*this.m_maxForce;this.m_impulse.clamp(h),a=g.sub(this.m_impulse,l),s.addMul(this.m_invMassB,a),r+=this.m_invIB*g.crossVec2Vec2(this.m_rB,a),i.v.setVec2(s),i.w=r},t.prototype.solvePositionConstraints=function(e){return!0},t.TYPE="mouse-joint",t}(Ze),Wm=Math.abs,qm={collideConnected:!0},Ja=function(n){si(t,n);function t(e,i,s,r,o,a,l,h){var c=this;return c instanceof t?(e=Bi(e,qm),c=n.call(this,e,i,s)||this,i=c.m_bodyA,s=c.m_bodyB,c.m_type=t.TYPE,c.m_groundAnchorA=g.clone(r||e.groundAnchorA||g.neo(-1,1)),c.m_groundAnchorB=g.clone(o||e.groundAnchorB||g.neo(1,1)),c.m_localAnchorA=g.clone(a?i.getLocalPoint(a):e.localAnchorA||g.neo(-1,0)),c.m_localAnchorB=g.clone(l?s.getLocalPoint(l):e.localAnchorB||g.neo(1,0)),c.m_lengthA=Number.isFinite(e.lengthA)?e.lengthA:g.distance(a,r),c.m_lengthB=Number.isFinite(e.lengthB)?e.lengthB:g.distance(l,o),c.m_ratio=Number.isFinite(h)?h:e.ratio,c.m_constant=c.m_lengthA+c.m_ratio*c.m_lengthB,c.m_impulse=0,c):new t(e,i,s,r,o,a,l,h)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,groundAnchorA:this.m_groundAnchorA,groundAnchorB:this.m_groundAnchorB,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,lengthA:this.m_lengthA,lengthB:this.m_lengthB,ratio:this.m_ratio}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i);var r=new t(e);return r},t.prototype._reset=function(e){g.isValid(e.groundAnchorA)&&this.m_groundAnchorA.set(e.groundAnchorA),g.isValid(e.groundAnchorB)&&this.m_groundAnchorB.set(e.groundAnchorB),g.isValid(e.localAnchorA)?this.m_localAnchorA.set(e.localAnchorA):g.isValid(e.anchorA)&&this.m_localAnchorA.set(this.m_bodyA.getLocalPoint(e.anchorA)),g.isValid(e.localAnchorB)?this.m_localAnchorB.set(e.localAnchorB):g.isValid(e.anchorB)&&this.m_localAnchorB.set(this.m_bodyB.getLocalPoint(e.anchorB)),Number.isFinite(e.lengthA)&&(this.m_lengthA=e.lengthA),Number.isFinite(e.lengthB)&&(this.m_lengthB=e.lengthB),Number.isFinite(e.ratio)&&(this.m_ratio=e.ratio)},t.prototype.getGroundAnchorA=function(){return this.m_groundAnchorA},t.prototype.getGroundAnchorB=function(){return this.m_groundAnchorB},t.prototype.getLengthA=function(){return this.m_lengthA},t.prototype.getLengthB=function(){return this.m_lengthB},t.prototype.getRatio=function(){return this.m_ratio},t.prototype.getCurrentLengthA=function(){var e=this.m_bodyA.getWorldPoint(this.m_localAnchorA),i=this.m_groundAnchorA;return g.distance(e,i)},t.prototype.getCurrentLengthB=function(){var e=this.m_bodyB.getWorldPoint(this.m_localAnchorB),i=this.m_groundAnchorB;return g.distance(e,i)},t.prototype.shiftOrigin=function(e){this.m_groundAnchorA.sub(e),this.m_groundAnchorB.sub(e)},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_uB).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,h=this.m_bodyB.c_velocity.v,c=this.m_bodyB.c_velocity.w,d=et.neo(s),u=et.neo(l);this.m_rA=et.mulVec2(d,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=et.mulVec2(u,g.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_uA=g.sub(g.add(i,this.m_rA),this.m_groundAnchorA),this.m_uB=g.sub(g.add(a,this.m_rB),this.m_groundAnchorB);var p=this.m_uA.length(),f=this.m_uB.length();p>10*dt.linearSlop?this.m_uA.mul(1/p):this.m_uA.setZero(),f>10*dt.linearSlop?this.m_uB.mul(1/f):this.m_uB.setZero();var v=g.crossVec2Vec2(this.m_rA,this.m_uA),_=g.crossVec2Vec2(this.m_rB,this.m_uB),m=this.m_invMassA+this.m_invIA*v*v,x=this.m_invMassB+this.m_invIB*_*_;if(this.m_mass=m+this.m_ratio*this.m_ratio*x,this.m_mass>0&&(this.m_mass=1/this.m_mass),e.warmStarting){this.m_impulse*=e.dtRatio;var b=g.mulNumVec2(-this.m_impulse,this.m_uA),y=g.mulNumVec2(-this.m_ratio*this.m_impulse,this.m_uB);r.addMul(this.m_invMassA,b),o+=this.m_invIA*g.crossVec2Vec2(this.m_rA,b),h.addMul(this.m_invMassB,y),c+=this.m_invIB*g.crossVec2Vec2(this.m_rB,y)}else this.m_impulse=0;this.m_bodyA.c_velocity.v=r,this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v=h,this.m_bodyB.c_velocity.w=c},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.add(i,g.crossNumVec2(s,this.m_rA)),l=g.add(r,g.crossNumVec2(o,this.m_rB)),h=-g.dot(this.m_uA,a)-this.m_ratio*g.dot(this.m_uB,l),c=-this.m_mass*h;this.m_impulse+=c;var d=g.mulNumVec2(-c,this.m_uA),u=g.mulNumVec2(-this.m_ratio*c,this.m_uB);i.addMul(this.m_invMassA,d),s+=this.m_invIA*g.crossVec2Vec2(this.m_rA,d),r.addMul(this.m_invMassB,u),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,u),this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=et.neo(s),l=et.neo(o),h=et.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),c=et.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),d=g.sub(g.add(i,this.m_rA),this.m_groundAnchorA),u=g.sub(g.add(r,this.m_rB),this.m_groundAnchorB),p=d.length(),f=u.length();p>10*dt.linearSlop?d.mul(1/p):d.setZero(),f>10*dt.linearSlop?u.mul(1/f):u.setZero();var v=g.crossVec2Vec2(h,d),_=g.crossVec2Vec2(c,u),m=this.m_invMassA+this.m_invIA*v*v,x=this.m_invMassB+this.m_invIB*_*_,b=m+this.m_ratio*this.m_ratio*x;b>0&&(b=1/b);var y=this.m_constant-p-this.m_ratio*f,R=Wm(y),T=-b*y,E=g.mulNumVec2(-T,d),I=g.mulNumVec2(-this.m_ratio*T,u);return i.addMul(this.m_invMassA,E),s+=this.m_invIA*g.crossVec2Vec2(h,E),r.addMul(this.m_invMassB,I),o+=this.m_invIB*g.crossVec2Vec2(c,I),this.m_bodyA.c_position.c=i,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,R<dt.linearSlop},t.TYPE="pulley-joint",t}(Ze),Xm=Math.min,Ro;(function(n){n[n.inactiveLimit=0]="inactiveLimit",n[n.atLowerLimit=1]="atLowerLimit",n[n.atUpperLimit=2]="atUpperLimit",n[n.equalLimits=3]="equalLimits"})(Ro||(Ro={}));var Ym={maxLength:0},$a=function(n){si(t,n);function t(e,i,s,r){var o=this;return o instanceof t?(e=Bi(e,Ym),o=n.call(this,e,i,s)||this,i=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?i.getLocalPoint(r):e.localAnchorA||g.neo(-1,0)),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.neo(1,0)),o.m_maxLength=e.maxLength,o.m_mass=0,o.m_impulse=0,o.m_length=0,o.m_state=Ro.inactiveLimit,o):new t(e,i,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,maxLength:this.m_maxLength}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i);var r=new t(e);return r},t.prototype._reset=function(e){Number.isFinite(e.maxLength)&&(this.m_maxLength=e.maxLength)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.setMaxLength=function(e){this.m_maxLength=e},t.prototype.getMaxLength=function(){return this.m_maxLength},t.prototype.getLimitState=function(){return this.m_state},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.mulNumVec2(this.m_impulse,this.m_u).mul(e)},t.prototype.getReactionTorque=function(e){return 0},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyA.c_velocity.v,o=this.m_bodyA.c_velocity.w,a=this.m_bodyB.c_position.c,l=this.m_bodyB.c_position.a,h=this.m_bodyB.c_velocity.v,c=this.m_bodyB.c_velocity.w,d=et.neo(s),u=et.neo(l);this.m_rA=et.mulSub(d,this.m_localAnchorA,this.m_localCenterA),this.m_rB=et.mulSub(u,this.m_localAnchorB,this.m_localCenterB),this.m_u=g.zero(),this.m_u.addCombine(1,a,1,this.m_rB),this.m_u.subCombine(1,i,1,this.m_rA),this.m_length=this.m_u.length();var p=this.m_length-this.m_maxLength;if(p>0?this.m_state=Ro.atUpperLimit:this.m_state=Ro.inactiveLimit,this.m_length>dt.linearSlop)this.m_u.mul(1/this.m_length);else{this.m_u.setZero(),this.m_mass=0,this.m_impulse=0;return}var f=g.crossVec2Vec2(this.m_rA,this.m_u),v=g.crossVec2Vec2(this.m_rB,this.m_u),_=this.m_invMassA+this.m_invIA*f*f+this.m_invMassB+this.m_invIB*v*v;if(this.m_mass=_!=0?1/_:0,e.warmStarting){this.m_impulse*=e.dtRatio;var m=g.mulNumVec2(this.m_impulse,this.m_u);r.subMul(this.m_invMassA,m),o-=this.m_invIA*g.crossVec2Vec2(this.m_rA,m),h.addMul(this.m_invMassB,m),c+=this.m_invIB*g.crossVec2Vec2(this.m_rB,m)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(r),this.m_bodyA.c_velocity.w=o,this.m_bodyB.c_velocity.v.setVec2(h),this.m_bodyB.c_velocity.w=c},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=g.addCrossNumVec2(i,s,this.m_rA),l=g.addCrossNumVec2(r,o,this.m_rB),h=this.m_length-this.m_maxLength,c=g.dot(this.m_u,g.sub(l,a));h<0&&(c+=e.inv_dt*h);var d=-this.m_mass*c,u=this.m_impulse;this.m_impulse=Xm(0,this.m_impulse+d),d=this.m_impulse-u;var p=g.mulNumVec2(d,this.m_u);i.subMul(this.m_invMassA,p),s-=this.m_invIA*g.crossVec2Vec2(this.m_rA,p),r.addMul(this.m_invMassB,p),o+=this.m_invIB*g.crossVec2Vec2(this.m_rB,p),this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=et.neo(s),l=et.neo(o),h=et.mulSub(a,this.m_localAnchorA,this.m_localCenterA),c=et.mulSub(l,this.m_localAnchorB,this.m_localCenterB),d=g.zero();d.addCombine(1,r,1,c),d.subCombine(1,i,1,h);var u=d.normalize(),p=u-this.m_maxLength;p=$e(p,0,dt.maxLinearCorrection);var f=-this.m_mass*p,v=g.mulNumVec2(f,d);return i.subMul(this.m_invMassA,v),s-=this.m_invIA*g.crossVec2Vec2(h,v),r.addMul(this.m_invMassB,v),o+=this.m_invIB*g.crossVec2Vec2(c,v),this.m_bodyA.c_position.c.setVec2(i),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,u-this.m_maxLength<dt.linearSlop},t.TYPE="rope-joint",t}(Ze),Jm=Math.abs,$m=Math.PI,Zm={frequencyHz:0,dampingRatio:0},Za=function(n){si(t,n);function t(e,i,s,r){var o=this;return o instanceof t?(e=Bi(e,Zm),o=n.call(this,e,i,s)||this,i=o.m_bodyA,s=o.m_bodyB,o.m_type=t.TYPE,o.m_localAnchorA=g.clone(r?i.getLocalPoint(r):e.localAnchorA||g.zero()),o.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),o.m_referenceAngle=Number.isFinite(e.referenceAngle)?e.referenceAngle:s.getAngle()-i.getAngle(),o.m_frequencyHz=e.frequencyHz,o.m_dampingRatio=e.dampingRatio,o.m_impulse=new ae,o.m_bias=0,o.m_gamma=0,o.m_mass=new Sn,o):new t(e,i,s,r)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getReferenceAngle=function(){return this.m_referenceAngle},t.prototype.setFrequency=function(e){this.m_frequencyHz=e},t.prototype.getFrequency=function(){return this.m_frequencyHz},t.prototype.setDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.neo(this.m_impulse.x,this.m_impulse.y).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_impulse.z},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_bodyA.c_position.a,s=this.m_bodyA.c_velocity.v,r=this.m_bodyA.c_velocity.w,o=this.m_bodyB.c_position.a,a=this.m_bodyB.c_velocity.v,l=this.m_bodyB.c_velocity.w,h=et.neo(i),c=et.neo(o);this.m_rA=et.mulVec2(h,g.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=et.mulVec2(c,g.sub(this.m_localAnchorB,this.m_localCenterB));var d=this.m_invMassA,u=this.m_invMassB,p=this.m_invIA,f=this.m_invIB,v=new Sn;if(v.ex.x=d+u+this.m_rA.y*this.m_rA.y*p+this.m_rB.y*this.m_rB.y*f,v.ey.x=-this.m_rA.y*this.m_rA.x*p-this.m_rB.y*this.m_rB.x*f,v.ez.x=-this.m_rA.y*p-this.m_rB.y*f,v.ex.y=v.ey.x,v.ey.y=d+u+this.m_rA.x*this.m_rA.x*p+this.m_rB.x*this.m_rB.x*f,v.ez.y=this.m_rA.x*p+this.m_rB.x*f,v.ex.z=v.ez.x,v.ey.z=v.ez.y,v.ez.z=p+f,this.m_frequencyHz>0){v.getInverse22(this.m_mass);var _=p+f,m=_>0?1/_:0,x=o-i-this.m_referenceAngle,b=2*$m*this.m_frequencyHz,y=2*m*this.m_dampingRatio*b,R=m*b*b,T=e.dt;this.m_gamma=T*(y+T*R),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=x*T*R*this.m_gamma,_+=this.m_gamma,this.m_mass.ez.z=_!=0?1/_:0}else v.ez.z==0?(v.getInverse22(this.m_mass),this.m_gamma=0,this.m_bias=0):(v.getSymInverse33(this.m_mass),this.m_gamma=0,this.m_bias=0);if(e.warmStarting){this.m_impulse.mul(e.dtRatio);var E=g.neo(this.m_impulse.x,this.m_impulse.y);s.subMul(d,E),r-=p*(g.crossVec2Vec2(this.m_rA,E)+this.m_impulse.z),a.addMul(u,E),l+=f*(g.crossVec2Vec2(this.m_rB,E)+this.m_impulse.z)}else this.m_impulse.setZero();this.m_bodyA.c_velocity.v=s,this.m_bodyA.c_velocity.w=r,this.m_bodyB.c_velocity.v=a,this.m_bodyB.c_velocity.w=l},t.prototype.solveVelocityConstraints=function(e){var i=this.m_bodyA.c_velocity.v,s=this.m_bodyA.c_velocity.w,r=this.m_bodyB.c_velocity.v,o=this.m_bodyB.c_velocity.w,a=this.m_invMassA,l=this.m_invMassB,h=this.m_invIA,c=this.m_invIB;if(this.m_frequencyHz>0){var d=o-s,u=-this.m_mass.ez.z*(d+this.m_bias+this.m_gamma*this.m_impulse.z);this.m_impulse.z+=u,s-=h*u,o+=c*u;var p=g.zero();p.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),p.subCombine(1,i,1,g.crossNumVec2(s,this.m_rA));var f=g.neg(Sn.mulVec2(this.m_mass,p));this.m_impulse.x+=f.x,this.m_impulse.y+=f.y;var v=g.clone(f);i.subMul(a,v),s-=h*g.crossVec2Vec2(this.m_rA,v),r.addMul(l,v),o+=c*g.crossVec2Vec2(this.m_rB,v)}else{var p=g.zero();p.addCombine(1,r,1,g.crossNumVec2(o,this.m_rB)),p.subCombine(1,i,1,g.crossNumVec2(s,this.m_rA));var d=o-s,_=new ae(p.x,p.y,d),m=ae.neg(Sn.mulVec3(this.m_mass,_));this.m_impulse.add(m);var v=g.neo(m.x,m.y);i.subMul(a,v),s-=h*(g.crossVec2Vec2(this.m_rA,v)+m.z),r.addMul(l,v),o+=c*(g.crossVec2Vec2(this.m_rB,v)+m.z)}this.m_bodyA.c_velocity.v=i,this.m_bodyA.c_velocity.w=s,this.m_bodyB.c_velocity.v=r,this.m_bodyB.c_velocity.w=o},t.prototype.solvePositionConstraints=function(e){var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=et.neo(s),l=et.neo(o),h=this.m_invMassA,c=this.m_invMassB,d=this.m_invIA,u=this.m_invIB,p=et.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),f=et.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),v,_,m=new Sn;if(m.ex.x=h+c+p.y*p.y*d+f.y*f.y*u,m.ey.x=-p.y*p.x*d-f.y*f.x*u,m.ez.x=-p.y*d-f.y*u,m.ex.y=m.ey.x,m.ey.y=h+c+p.x*p.x*d+f.x*f.x*u,m.ez.y=p.x*d+f.x*u,m.ex.z=m.ez.x,m.ey.z=m.ez.y,m.ez.z=d+u,this.m_frequencyHz>0){var x=g.zero();x.addCombine(1,r,1,f),x.subCombine(1,i,1,p),v=x.length(),_=0;var b=g.neg(m.solve22(x));i.subMul(h,b),s-=d*g.crossVec2Vec2(p,b),r.addMul(c,b),o+=u*g.crossVec2Vec2(f,b)}else{var x=g.zero();x.addCombine(1,r,1,f),x.subCombine(1,i,1,p);var y=o-s-this.m_referenceAngle;v=x.length(),_=Jm(y);var R=new ae(x.x,x.y,y),T=new ae;if(m.ez.z>0)T=ae.neg(m.solve33(R));else{var E=g.neg(m.solve22(x));T.set(E.x,E.y,0)}var b=g.neo(T.x,T.y);i.subMul(h,b),s-=d*(g.crossVec2Vec2(p,b)+T.z),r.addMul(c,b),o+=u*(g.crossVec2Vec2(f,b)+T.z)}return this.m_bodyA.c_position.c=i,this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c=r,this.m_bodyB.c_position.a=o,v<=dt.linearSlop&&_<=dt.angularSlop},t.TYPE="weld-joint",t}(Ze),Km=Math.abs,jm=Math.PI,Qm={enableMotor:!1,maxMotorTorque:0,motorSpeed:0,frequencyHz:2,dampingRatio:.7},Ka=function(n){si(t,n);function t(e,i,s,r,o){var a=this;return a instanceof t?(e=Bi(e,Qm),a=n.call(this,e,i,s)||this,i=a.m_bodyA,s=a.m_bodyB,a.m_ax=g.zero(),a.m_ay=g.zero(),a.m_type=t.TYPE,a.m_localAnchorA=g.clone(r?i.getLocalPoint(r):e.localAnchorA||g.zero()),a.m_localAnchorB=g.clone(r?s.getLocalPoint(r):e.localAnchorB||g.zero()),g.isValid(o)?a.m_localXAxisA=i.getLocalVector(o):g.isValid(e.localAxisA)?a.m_localXAxisA=g.clone(e.localAxisA):g.isValid(e.localAxis)?a.m_localXAxisA=g.clone(e.localAxis):a.m_localXAxisA=g.neo(1,0),a.m_localYAxisA=g.crossNumVec2(1,a.m_localXAxisA),a.m_mass=0,a.m_impulse=0,a.m_motorMass=0,a.m_motorImpulse=0,a.m_springMass=0,a.m_springImpulse=0,a.m_maxMotorTorque=e.maxMotorTorque,a.m_motorSpeed=e.motorSpeed,a.m_enableMotor=e.enableMotor,a.m_frequencyHz=e.frequencyHz,a.m_dampingRatio=e.dampingRatio,a.m_bias=0,a.m_gamma=0,a):new t(e,i,s,r,o)}return t.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,enableMotor:this.m_enableMotor,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA}},t._deserialize=function(e,i,s){e=ni({},e),e.bodyA=s(he,e.bodyA,i),e.bodyB=s(he,e.bodyB,i);var r=new t(e);return r},t.prototype._reset=function(e){e.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA)):e.localAnchorA&&this.m_localAnchorA.setVec2(e.localAnchorA),e.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB)):e.localAnchorB&&this.m_localAnchorB.setVec2(e.localAnchorB),e.localAxisA&&(this.m_localXAxisA.setVec2(e.localAxisA),this.m_localYAxisA.setVec2(g.crossNumVec2(1,e.localAxisA))),e.enableMotor!==void 0&&(this.m_enableMotor=e.enableMotor),Number.isFinite(e.maxMotorTorque)&&(this.m_maxMotorTorque=e.maxMotorTorque),Number.isFinite(e.motorSpeed)&&(this.m_motorSpeed=e.motorSpeed),Number.isFinite(e.frequencyHz)&&(this.m_frequencyHz=e.frequencyHz),Number.isFinite(e.dampingRatio)&&(this.m_dampingRatio=e.dampingRatio)},t.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},t.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},t.prototype.getLocalAxisA=function(){return this.m_localXAxisA},t.prototype.getJointTranslation=function(){var e=this.m_bodyA,i=this.m_bodyB,s=e.getWorldPoint(this.m_localAnchorA),r=i.getWorldPoint(this.m_localAnchorB),o=g.sub(r,s),a=e.getWorldVector(this.m_localXAxisA),l=g.dot(o,a);return l},t.prototype.getJointSpeed=function(){var e=this.m_bodyA.m_angularVelocity,i=this.m_bodyB.m_angularVelocity;return i-e},t.prototype.isMotorEnabled=function(){return this.m_enableMotor},t.prototype.enableMotor=function(e){e!=this.m_enableMotor&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=e)},t.prototype.setMotorSpeed=function(e){e!=this.m_motorSpeed&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=e)},t.prototype.getMotorSpeed=function(){return this.m_motorSpeed},t.prototype.setMaxMotorTorque=function(e){e!=this.m_maxMotorTorque&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=e)},t.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},t.prototype.getMotorTorque=function(e){return e*this.m_motorImpulse},t.prototype.setSpringFrequencyHz=function(e){this.m_frequencyHz=e},t.prototype.getSpringFrequencyHz=function(){return this.m_frequencyHz},t.prototype.setSpringDampingRatio=function(e){this.m_dampingRatio=e},t.prototype.getSpringDampingRatio=function(){return this.m_dampingRatio},t.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},t.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},t.prototype.getReactionForce=function(e){return g.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax).mul(e)},t.prototype.getReactionTorque=function(e){return e*this.m_motorImpulse},t.prototype.initVelocityConstraints=function(e){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var i=this.m_invMassA,s=this.m_invMassB,r=this.m_invIA,o=this.m_invIB,a=this.m_bodyA.c_position.c,l=this.m_bodyA.c_position.a,h=this.m_bodyA.c_velocity.v,c=this.m_bodyA.c_velocity.w,d=this.m_bodyB.c_position.c,u=this.m_bodyB.c_position.a,p=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=et.neo(l),_=et.neo(u),m=et.mulVec2(v,g.sub(this.m_localAnchorA,this.m_localCenterA)),x=et.mulVec2(_,g.sub(this.m_localAnchorB,this.m_localCenterB)),b=g.zero();if(b.addCombine(1,d,1,x),b.subCombine(1,a,1,m),this.m_ay=et.mulVec2(v,this.m_localYAxisA),this.m_sAy=g.crossVec2Vec2(g.add(b,m),this.m_ay),this.m_sBy=g.crossVec2Vec2(x,this.m_ay),this.m_mass=i+s+r*this.m_sAy*this.m_sAy+o*this.m_sBy*this.m_sBy,this.m_mass>0&&(this.m_mass=1/this.m_mass),this.m_springMass=0,this.m_bias=0,this.m_gamma=0,this.m_frequencyHz>0){this.m_ax=et.mulVec2(v,this.m_localXAxisA),this.m_sAx=g.crossVec2Vec2(g.add(b,m),this.m_ax),this.m_sBx=g.crossVec2Vec2(x,this.m_ax);var y=i+s+r*this.m_sAx*this.m_sAx+o*this.m_sBx*this.m_sBx;if(y>0){this.m_springMass=1/y;var R=g.dot(b,this.m_ax),T=2*jm*this.m_frequencyHz,E=2*this.m_springMass*this.m_dampingRatio*T,I=this.m_springMass*T*T,S=e.dt;this.m_gamma=S*(E+S*I),this.m_gamma>0&&(this.m_gamma=1/this.m_gamma),this.m_bias=R*S*I*this.m_gamma,this.m_springMass=y+this.m_gamma,this.m_springMass>0&&(this.m_springMass=1/this.m_springMass)}}else this.m_springImpulse=0;if(this.m_enableMotor?(this.m_motorMass=r+o,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass)):(this.m_motorMass=0,this.m_motorImpulse=0),e.warmStarting){this.m_impulse*=e.dtRatio,this.m_springImpulse*=e.dtRatio,this.m_motorImpulse*=e.dtRatio;var A=g.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax),P=this.m_impulse*this.m_sAy+this.m_springImpulse*this.m_sAx+this.m_motorImpulse,k=this.m_impulse*this.m_sBy+this.m_springImpulse*this.m_sBx+this.m_motorImpulse;h.subMul(this.m_invMassA,A),c-=this.m_invIA*P,p.addMul(this.m_invMassB,A),f+=this.m_invIB*k}else this.m_impulse=0,this.m_springImpulse=0,this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(h),this.m_bodyA.c_velocity.w=c,this.m_bodyB.c_velocity.v.setVec2(p),this.m_bodyB.c_velocity.w=f},t.prototype.solveVelocityConstraints=function(e){var i=this.m_invMassA,s=this.m_invMassB,r=this.m_invIA,o=this.m_invIB,a=this.m_bodyA.c_velocity.v,l=this.m_bodyA.c_velocity.w,h=this.m_bodyB.c_velocity.v,c=this.m_bodyB.c_velocity.w;{var d=g.dot(this.m_ax,h)-g.dot(this.m_ax,a)+this.m_sBx*c-this.m_sAx*l,u=-this.m_springMass*(d+this.m_bias+this.m_gamma*this.m_springImpulse);this.m_springImpulse+=u;var p=g.mulNumVec2(u,this.m_ax),f=u*this.m_sAx,v=u*this.m_sBx;a.subMul(i,p),l-=r*f,h.addMul(s,p),c+=o*v}{var d=c-l-this.m_motorSpeed,u=-this.m_motorMass*d,_=this.m_motorImpulse,m=e.dt*this.m_maxMotorTorque;this.m_motorImpulse=$e(this.m_motorImpulse+u,-m,m),u=this.m_motorImpulse-_,l-=r*u,c+=o*u}{var d=g.dot(this.m_ay,h)-g.dot(this.m_ay,a)+this.m_sBy*c-this.m_sAy*l,u=-this.m_mass*d;this.m_impulse+=u;var p=g.mulNumVec2(u,this.m_ay),f=u*this.m_sAy,v=u*this.m_sBy;a.subMul(i,p),l-=r*f,h.addMul(s,p),c+=o*v}this.m_bodyA.c_velocity.v.setVec2(a),this.m_bodyA.c_velocity.w=l,this.m_bodyB.c_velocity.v.setVec2(h),this.m_bodyB.c_velocity.w=c},t.prototype.solvePositionConstraints=function(e){var i=this.m_bodyA.c_position.c,s=this.m_bodyA.c_position.a,r=this.m_bodyB.c_position.c,o=this.m_bodyB.c_position.a,a=et.neo(s),l=et.neo(o),h=et.mulVec2(a,g.sub(this.m_localAnchorA,this.m_localCenterA)),c=et.mulVec2(l,g.sub(this.m_localAnchorB,this.m_localCenterB)),d=g.zero();d.addCombine(1,r,1,c),d.subCombine(1,i,1,h);var u=et.mulVec2(a,this.m_localYAxisA),p=g.crossVec2Vec2(g.add(d,h),u),f=g.crossVec2Vec2(c,u),v=g.dot(d,u),_=this.m_invMassA+this.m_invMassB+this.m_invIA*this.m_sAy*this.m_sAy+this.m_invIB*this.m_sBy*this.m_sBy,m=_!=0?-v/_:0,x=g.mulNumVec2(m,u),b=m*p,y=m*f;return i.subMul(this.m_invMassA,x),s-=this.m_invIA*b,r.addMul(this.m_invMassB,x),o+=this.m_invIB*y,this.m_bodyA.c_position.c.setVec2(i),this.m_bodyA.c_position.a=s,this.m_bodyB.c_position.c.setVec2(r),this.m_bodyB.c_position.a=o,Km(v)<=dt.linearSlop},t.TYPE="wheel-joint",t}(Ze),Ue,t_=0,Lf={World:Pr,Body:he,Joint:Ze,Fixture:Ir,Shape:Yn},Df={Vec2:g,Vec3:ae,World:Pr,Body:he,Joint:Ze,Fixture:Ir,Shape:Yn},e_=(Ue={},Ue[he.STATIC]=he,Ue[he.DYNAMIC]=he,Ue[he.KINEMATIC]=he,Ue[Js.TYPE]=Js,Ue[an.TYPE]=an,Ue[on.TYPE]=on,Ue[wn.TYPE]=wn,Ue[Ha.TYPE]=Ha,Ue[Ga.TYPE]=Ga,Ue[qa.TYPE]=qa,Ue[Xa.TYPE]=Xa,Ue[Ya.TYPE]=Ya,Ue[Wa.TYPE]=Wa,Ue[Ja.TYPE]=Ja,Ue[Mn.TYPE]=Mn,Ue[$a.TYPE]=$a,Ue[Za.TYPE]=Za,Ue[Ka.TYPE]=Ka,Ue),i_={rootClass:Pr,preSerialize:function(n){return n},postSerialize:function(n,t){return n},preDeserialize:function(n){return n},postDeserialize:function(n,t){return n}},Fo=function(){function n(t){var e=this;this.toJson=function(i){var s=e.options.preSerialize,r=e.options.postSerialize,o=[],a=[i],l={};function h(f,v){if(f.__sid=f.__sid||++t_,!l[f.__sid]){a.push(f);var _=o.length+a.length,m={refIndex:_,refType:v};l[f.__sid]=m}return l[f.__sid]}function c(f){f=s(f);var v=f._serialize();return v=r(v,f),v}function d(f,v){if(v===void 0&&(v=!1),typeof f!="object"||f===null)return f;if(typeof f._serialize=="function"){if(!v){for(var _ in Lf)if(f instanceof Lf[_])return h(f,_)}f=c(f)}if(Array.isArray(f)){for(var m=[],x=0;x<f.length;x++)m[x]=d(f[x]);f=m}else{var m={};for(var x in f)f.hasOwnProperty(x)&&(m[x]=d(f[x]));f=m}return f}for(;a.length;){var u=a.shift(),p=d(u,!0);o.push(p)}return o},this.fromJson=function(i){var s=e.options.preDeserialize,r=e.options.postDeserialize,o=e.options.rootClass,a={};function l(d,u,p){(!d||!d._deserialize)&&(d=e_[u.type]);var f=d&&d._deserialize;if(f){u=s(u);var v=d._deserialize,_=v(u,p,h);return _=r(_,u),_}}function h(d,u,p){var f=u.refIndex&&u.refType;if(!f)return l(d,u,p);var v=u;Df[v.refType]&&(d=Df[v.refType]);var _=v.refIndex;if(!a[_]){var m=i[_],x=l(d,m,p);a[_]=x}return a[_]}var c=l(o,i[0],null);return c},this.options=ni(ni({},i_),t)}return n}(),nd=new Fo({rootClass:Pr});Fo.fromJson=nd.fromJson;Fo.toJson=nd.toJson;var Lc=function(){function n(){}return n.mount=function(t){throw new Error("Not implemented")},n.start=function(t){var e=n.mount();return e.start(t),e},n}();function sd(n,t){var e,i;typeof n=="function"?(e=n,i=t):typeof t=="function"?(e=t,i=n):i=n??t;var s=Lc.mount(i);if(e){var r=e(s)||s.world;s.start(r)}else return s}var Tc=function(n){si(t,n);function t(e,i,s,r){var o=this;return o instanceof t?(o=n.call(this)||this,o._setAsBox(e,i,s,r),o):new t(e,i,s,r)}return t.TYPE="polygon",t}(an);Xi.addType(wn.TYPE,wn.TYPE,n_);function n_(n,t,e,i,s,r,o){Dc(n,e.getShape(),t,r.getShape(),s)}var Nf=j(0,0),Ff=j(0,0),Dc=function(n,t,e,i,s){n.pointCount=0,qt(Nf,e,t.m_p),qt(Ff,s,i.m_p);var r=Xs(Ff,Nf),o=t.m_radius,a=i.m_radius,l=o+a;r>l*l||(n.type=Ce.e_circles,q(n.localPoint,t.m_p),Ut(n.localNormal),n.pointCount=1,q(n.points[0].localPoint,i.m_p),n.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex))};Xi.addType(on.TYPE,wn.TYPE,s_);Xi.addType(Js.TYPE,wn.TYPE,r_);function s_(n,t,e,i,s,r,o){var a=e.getShape(),l=r.getShape();rl(n,a,t,l,s)}function r_(n,t,e,i,s,r,o){var a=e.getShape(),l=new on;a.getChildEdge(l,i);var h=l,c=r.getShape();rl(n,h,t,c,s)}var zs=j(0,0),yc=j(0,0),xc=j(0,0),kn=j(0,0),Os=j(0,0),Sr=j(0,0),rl=function(n,t,e,i,s){n.pointCount=0,$f(kn,s,e,i.m_p);var r=t.m_vertex1,o=t.m_vertex2;Xt(zs,o,r);var a=ht(zs,o)-ht(zs,kn),l=ht(zs,kn)-ht(zs,r),h=t.m_radius+i.m_radius;if(l<=0){q(Os,r);var c=Xs(kn,r);if(c>h*h)return;if(t.m_hasVertex0){var d=t.m_vertex0,u=r;Xt(yc,u,d);var p=ht(yc,u)-ht(yc,kn);if(p>0)return}n.type=Ce.e_circles,Ut(n.localNormal),q(n.localPoint,Os),n.pointCount=1,q(n.points[0].localPoint,i.m_p),n.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex);return}if(a<=0){q(Os,o);var f=Xs(kn,Os);if(f>h*h)return;if(t.m_hasVertex3){var v=t.m_vertex3,_=o;Xt(xc,v,_);var m=ht(xc,kn)-ht(xc,_);if(m>0)return}n.type=Ce.e_circles,Ut(n.localNormal),q(n.localPoint,Os),n.pointCount=1,q(n.points[0].localPoint,i.m_p),n.points[0].id.setFeatures(1,se.e_vertex,0,se.e_vertex);return}var x=qs(zs);Ee(Os,a/x,r,l/x,o);var b=Xs(kn,Os);b>h*h||(Ri(Sr,1,zs),ht(Sr,kn)-ht(Sr,r)<0&&Io(Sr),rn(Sr),n.type=Ce.e_faceA,q(n.localNormal,Sr),q(n.localPoint,r),n.pointCount=1,q(n.points[0].localPoint,i.m_p),n.points[0].id.setFeatures(0,se.e_face,0,se.e_vertex))},Ea=[new ui,new ui],Ca=[new ui,new ui],ks=[new ui,new ui],Ra=j(0,0),Uf=j(0,0),bc=j(0,0),Ac=$s(0,0,0),Hs=j(0,0),wr=j(0,0),Ia=j(0,0),Vf=j(0,0),zf=j(0,0),ps=j(0,0),Mc=j(0,0),Of=j(0,0);Xi.addType(an.TYPE,an.TYPE,o_);function o_(n,t,e,i,s,r,o){ol(n,e.getShape(),t,r.getShape(),s)}function kf(n,t,e,i,s){var r=n.m_count,o=e.m_count,a=n.m_normals,l=n.m_vertices,h=e.m_vertices;Zf(Ac,i,t);for(var c=0,d=-1/0,u=0;u<r;++u){qi(bc,Ac.q,a[u]),qt(Uf,Ac,l[u]);for(var p=1/0,f=0;f<o;++f){var v=ht(bc,h[f])-ht(bc,Uf);v<p&&(p=v)}p>d&&(d=p,c=u)}s.maxSeparation=d,s.bestIndex=c}function a_(n,t,e,i,s,r){var o=t.m_normals,a=s.m_count,l=s.m_vertices,h=s.m_normals;dm(Of,r.q,e.q,o[i]);for(var c=0,d=1/0,u=0;u<a;++u){var p=ht(Of,h[u]);p<d&&(d=p,c=u)}var f=c,v=f+1<a?f+1:0;qt(n[0].v,r,l[f]),n[0].id.setFeatures(i,se.e_face,f,se.e_vertex),qt(n[1].v,r,l[v]),n[1].id.setFeatures(i,se.e_face,v,se.e_vertex)}var Tr={maxSeparation:0,bestIndex:0},ol=function(n,t,e,i,s){n.pointCount=0;var r=t.m_radius+i.m_radius;kf(t,e,i,s,Tr);var o=Tr.bestIndex,a=Tr.maxSeparation;if(!(a>r)){kf(i,s,t,e,Tr);var l=Tr.bestIndex,h=Tr.maxSeparation;if(!(h>r)){var c,d,u,p,f,v,_=.1*dt.linearSlop;h>a+_?(c=i,d=t,u=s,p=e,f=l,n.type=Ce.e_faceB,v=!0):(c=t,d=i,u=e,p=s,f=o,n.type=Ce.e_faceA,v=!1),Ea[0].recycle(),Ea[1].recycle(),a_(Ea,c,u,f,d,p);var m=c.m_count,x=c.m_vertices,b=f,y=f+1<m?f+1:0;q(Hs,x[b]),q(wr,x[y]),Xt(Ia,wr,Hs),rn(Ia),Ws(Vf,Ia,1),Ee(zf,.5,Hs,.5,wr),qi(ps,u.q,Ia),Ws(Mc,ps,1),qt(Hs,u,Hs),qt(wr,u,wr);var R=ht(Mc,Hs),T=-ht(ps,Hs)+r,E=ht(ps,wr)+r;Ca[0].recycle(),Ca[1].recycle(),ks[0].recycle(),ks[1].recycle(),Je(Ra,-ps.x,-ps.y);var I=Ys(Ca,Ea,Ra,T,b);if(!(I<2)){Je(Ra,ps.x,ps.y);var S=Ys(ks,Ca,Ra,E,y);if(!(S<2)){q(n.localNormal,Vf),q(n.localPoint,zf);for(var A=0,P=0;P<ks.length;++P){var k=ht(Mc,ks[P].v)-R;if(k<=r){var O=n.points[A];Ic(O.localPoint,p,ks[P].v),O.id.set(ks[P].id),v&&O.id.swapFeatures(),++A}}n.pointCount=A}}}}};Xi.addType(an.TYPE,wn.TYPE,l_);function l_(n,t,e,i,s,r,o){Nc(n,e.getShape(),t,r.getShape(),s)}var en=j(0,0),Sc=j(0,0),Nc=function(n,t,e,i,s){n.pointCount=0,$f(en,s,e,i.m_p);for(var r=0,o=-1/0,a=t.m_radius+i.m_radius,l=t.m_count,h=t.m_vertices,c=t.m_normals,d=0;d<l;++d){var u=ht(c[d],en)-ht(c[d],h[d]);if(u>a)return;u>o&&(o=u,r=d)}var p=r,f=p+1<l?p+1:0,v=h[p],_=h[f];if(o<hi){n.pointCount=1,n.type=Ce.e_faceA,q(n.localNormal,c[r]),Ee(n.localPoint,.5,v,.5,_),q(n.points[0].localPoint,i.m_p),n.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex);return}var m=ht(en,_)-ht(en,v)-ht(v,_)+ht(v,v),x=ht(en,v)-ht(en,_)-ht(_,v)+ht(_,_);if(m<=0){if(Xs(en,v)>a*a)return;n.pointCount=1,n.type=Ce.e_faceA,Xt(n.localNormal,en,v),rn(n.localNormal),q(n.localPoint,v),q(n.points[0].localPoint,i.m_p),n.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex)}else if(x<=0){if(Xs(en,_)>a*a)return;n.pointCount=1,n.type=Ce.e_faceA,Xt(n.localNormal,en,_),rn(n.localNormal),q(n.localPoint,_),q(n.points[0].localPoint,i.m_p),n.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex)}else{Ee(Sc,.5,v,.5,_);var b=ht(en,c[p])-ht(Sc,c[p]);if(b>a)return;n.pointCount=1,n.type=Ce.e_faceA,q(n.localNormal,c[p]),q(n.localPoint,Sc),q(n.points[0].localPoint,i.m_p),n.points[0].id.setFeatures(0,se.e_vertex,0,se.e_vertex)}},c_=Math.min;Xi.addType(on.TYPE,an.TYPE,h_);Xi.addType(Js.TYPE,an.TYPE,u_);function h_(n,t,e,i,s,r,o){al(n,e.getShape(),t,r.getShape(),s)}var Hf=new on;function u_(n,t,e,i,s,r,o){var a=e.getShape();a.getChildEdge(Hf,i),al(n,Hf,t,r.getShape(),s)}var Gi;(function(n){n[n.e_unknown=-1]="e_unknown",n[n.e_edgeA=1]="e_edgeA",n[n.e_edgeB=2]="e_edgeB"})(Gi||(Gi={}));var Gf;(function(n){n[n.e_isolated=0]="e_isolated",n[n.e_concave=1]="e_concave",n[n.e_convex=2]="e_convex"})(Gf||(Gf={}));var rd=function(){function n(){}return n}(),f_=function(){function n(){this.vertices=[],this.normals=[],this.count=0;for(var t=0;t<dt.maxPolygonVertices;t++)this.vertices.push(j(0,0)),this.normals.push(j(0,0))}return n}(),d_=function(){function n(){this.v1=j(0,0),this.v2=j(0,0),this.normal=j(0,0),this.sideNormal1=j(0,0),this.sideNormal2=j(0,0)}return n.prototype.recycle=function(){Ut(this.v1),Ut(this.v2),Ut(this.normal),Ut(this.sideNormal1),Ut(this.sideNormal2)},n}(),Ba=[new ui,new ui],ms=[new ui,new ui],nn=[new ui,new ui],gn=new rd,li=new rd,He=new f_,Zt=new d_,Pa=j(0,0),So=j(0,0),Er=j(0,0),wo=j(0,0),To=$s(0,0,0),ye=j(0,0),yn=j(0,0),Wt=j(0,0),xn=j(0,0),Ve=j(0,0),ze=j(0,0),Wf=j(0,0),_s=j(0,0),al=function(n,t,e,i,s){Zf(To,e,s),qt(Pa,To,i.m_centroid);var r=t.m_vertex0,o=t.m_vertex1,a=t.m_vertex2,l=t.m_vertex3,h=t.m_hasVertex0,c=t.m_hasVertex3;Xt(Er,a,o),rn(Er),Je(Wt,Er.y,-Er.x);var d=ht(Wt,Pa)-ht(Wt,o),u=0,p=0,f=!1,v=!1;Ut(yn),Ut(xn),h&&(Xt(So,o,r),rn(So),Je(yn,So.y,-So.x),f=jt(So,Er)>=0,u=g.dot(yn,Pa)-g.dot(yn,r)),c&&(Xt(wo,l,a),rn(wo),Je(xn,wo.y,-wo.x),v=g.crossVec2Vec2(Er,wo)>0,p=g.dot(xn,Pa)-g.dot(xn,a));var _;Ut(ye),Ut(Ve),Ut(ze),h&&c?f&&v?(_=u>=0||d>=0||p>=0,_?(q(ye,Wt),q(Ve,yn),q(ze,xn)):(Ot(ye,-1,Wt),Ot(Ve,-1,Wt),Ot(ze,-1,Wt))):f?(_=u>=0||d>=0&&p>=0,_?(q(ye,Wt),q(Ve,yn),q(ze,Wt)):(Ot(ye,-1,Wt),Ot(Ve,-1,xn),Ot(ze,-1,Wt))):v?(_=p>=0||u>=0&&d>=0,_?(q(ye,Wt),q(Ve,Wt),q(ze,xn)):(Ot(ye,-1,Wt),Ot(Ve,-1,Wt),Ot(ze,-1,yn))):(_=u>=0&&d>=0&&p>=0,_?(q(ye,Wt),q(Ve,Wt),q(ze,Wt)):(Ot(ye,-1,Wt),Ot(Ve,-1,xn),Ot(ze,-1,yn))):h?f?(_=u>=0||d>=0,_?(q(ye,Wt),q(Ve,yn),Ot(ze,-1,Wt)):(Ot(ye,-1,Wt),q(Ve,Wt),Ot(ze,-1,Wt))):(_=u>=0&&d>=0,_?(q(ye,Wt),q(Ve,Wt),Ot(ze,-1,Wt)):(Ot(ye,-1,Wt),q(Ve,Wt),Ot(ze,-1,yn))):c?v?(_=d>=0||p>=0,_?(q(ye,Wt),Ot(Ve,-1,Wt),q(ze,xn)):(Ot(ye,-1,Wt),Ot(Ve,-1,Wt),q(ze,Wt))):(_=d>=0&&p>=0,_?(q(ye,Wt),Ot(Ve,-1,Wt),q(ze,Wt)):(Ot(ye,-1,Wt),Ot(Ve,-1,xn),q(ze,Wt))):(_=d>=0,_?(q(ye,Wt),Ot(Ve,-1,Wt),Ot(ze,-1,Wt)):(Ot(ye,-1,Wt),q(Ve,Wt),q(ze,Wt))),He.count=i.m_count;for(var m=0;m<i.m_count;++m)qt(He.vertices[m],To,i.m_vertices[m]),qi(He.normals[m],To.q,i.m_normals[m]);var x=i.m_radius+t.m_radius;n.pointCount=0;{gn.type=Gi.e_edgeA,gn.index=_?0:1,gn.separation=1/0;for(var m=0;m<He.count;++m){var b=He.vertices[m],y=ht(ye,b)-ht(ye,o);y<gn.separation&&(gn.separation=y)}}if(gn.type!=Gi.e_unknown&&!(gn.separation>x)){{li.type=Gi.e_unknown,li.index=-1,li.separation=-1/0,Je(Wf,-ye.y,ye.x);for(var m=0;m<He.count;++m){Ot(_s,-1,He.normals[m]);var R=ht(_s,He.vertices[m])-ht(_s,o),T=ht(_s,He.vertices[m])-ht(_s,a),y=c_(R,T);if(y>x){li.type=Gi.e_edgeB,li.index=m,li.separation=y;break}if(ht(_s,Wf)>=0){if(ht(_s,ye)-ht(ze,ye)<-dt.angularSlop)continue}else if(ht(_s,ye)-ht(Ve,ye)<-dt.angularSlop)continue;y>li.separation&&(li.type=Gi.e_edgeB,li.index=m,li.separation=y)}}if(!(li.type!=Gi.e_unknown&&li.separation>x)){var E=.98,I=.001,S;if(li.type==Gi.e_unknown?S=gn:li.separation>E*gn.separation+I?S=li:S=gn,nn[0].recycle(),nn[1].recycle(),S.type==Gi.e_edgeA){n.type=Ce.e_faceA;for(var A=0,P=ht(ye,He.normals[0]),m=1;m<He.count;++m){var k=ht(ye,He.normals[m]);k<P&&(P=k,A=m)}var O=A,G=O+1<He.count?O+1:0;q(nn[0].v,He.vertices[O]),nn[0].id.setFeatures(0,se.e_face,O,se.e_vertex),q(nn[1].v,He.vertices[G]),nn[1].id.setFeatures(0,se.e_face,G,se.e_vertex),_?(Zt.i1=0,Zt.i2=1,q(Zt.v1,o),q(Zt.v2,a),q(Zt.normal,Wt)):(Zt.i1=1,Zt.i2=0,q(Zt.v1,a),q(Zt.v2,o),Ot(Zt.normal,-1,Wt))}else n.type=Ce.e_faceB,q(nn[0].v,o),nn[0].id.setFeatures(S.index,se.e_face,0,se.e_vertex),q(nn[1].v,a),nn[1].id.setFeatures(S.index,se.e_face,1,se.e_vertex),Zt.i1=S.index,Zt.i2=Zt.i1+1<He.count?Zt.i1+1:0,q(Zt.v1,He.vertices[Zt.i1]),q(Zt.v2,He.vertices[Zt.i2]),q(Zt.normal,He.normals[Zt.i1]);Je(Zt.sideNormal1,Zt.normal.y,-Zt.normal.x),Je(Zt.sideNormal2,-Zt.sideNormal1.x,-Zt.sideNormal1.y),Zt.sideOffset1=ht(Zt.sideNormal1,Zt.v1),Zt.sideOffset2=ht(Zt.sideNormal2,Zt.v2),Ba[0].recycle(),Ba[1].recycle(),ms[0].recycle(),ms[1].recycle();var nt=Ys(Ba,nn,Zt.sideNormal1,Zt.sideOffset1,Zt.i1);if(!(nt<dt.maxManifoldPoints)){var J=Ys(ms,Ba,Zt.sideNormal2,Zt.sideOffset2,Zt.i2);if(!(J<dt.maxManifoldPoints)){S.type==Gi.e_edgeA?(q(n.localNormal,Zt.normal),q(n.localPoint,Zt.v1)):(q(n.localNormal,i.m_normals[Zt.i1]),q(n.localPoint,i.m_vertices[Zt.i1]));for(var lt=0,m=0;m<dt.maxManifoldPoints;++m){var $=ht(Zt.normal,ms[m].v)-ht(Zt.normal,Zt.v1);if($<=x){var ct=n.points[lt];S.type==Gi.e_edgeA?(Ic(ct.localPoint,To,ms[m].v),ct.id.set(ms[m].id)):(q(ct.localPoint,ms[m].v),ct.id.set(ms[m].id),ct.id.swapFeatures()),++lt}}n.pointCount=lt}}}}},od={CollidePolygons:ol,Settings:Yt,Sweep:Wn,Manifold:No,Distance:Tn,TimeOfImpact:Br,DynamicTree:ja,stats:Me},ad=function(){function n(t,e){this._refMap={},this._map={},this._xmap={},this._data=[],this._entered=[],this._exited=[],this._key=t,this._listener=e}return n.prototype.update=function(t){if(!Array.isArray(t))throw"Invalid data: "+t;this._entered.length=0,this._exited.length=0,this._data.length=t.length;for(var e=0;e<t.length;e++)if(!(typeof t[e]!="object"||t[e]===null)){var i=t[e],s=this._key(i);this._map[s]?delete this._map[s]:this._entered.push(i),this._data[e]=i,this._xmap[s]=i}for(var s in this._map)this._exited.push(this._map[s]),delete this._map[s];var r=this._map;this._map=this._xmap,this._xmap=r;for(var e=0;e<this._exited.length;e++){var i=this._exited[e],o=this._key(i),a=this._refMap[o];this._listener.exit(i,a),delete this._refMap[o]}for(var e=0;e<this._entered.length;e++){var i=this._entered[e],o=this._key(i),a=this._listener.enter(i);a&&(this._refMap[o]=a)}for(var e=0;e<this._data.length;e++)if(!(typeof t[e]!="object"||t[e]===null)){var i=this._data[e],o=this._key(i),a=this._refMap[o];this._listener.update(i,a)}this._entered.length=0,this._exited.length=0,this._data.length=0},n.prototype.ref=function(t){return this._refMap[this._key(t)]},n}(),p_=Object.freeze(Object.defineProperty({__proto__:null,AABB:We,Body:he,Box:Tc,BoxShape:Tc,BroadPhase:Cc,Chain:Js,ChainShape:Js,Circle:wn,CircleShape:wn,ClipVertex:ui,CollideCircles:Dc,CollideEdgeCircle:rl,CollideEdgePolygon:al,CollidePolygonCircle:Nc,CollidePolygons:ol,Contact:Xi,ContactEdge:Va,get ContactFeatureType(){return se},ContactID:nl,ContactImpulse:Bc,DataDriver:ad,Distance:Tn,DistanceInput:Bo,DistanceJoint:Ha,DistanceOutput:Po,DistanceProxy:qn,DynamicTree:ja,Edge:on,EdgeShape:on,Fixture:Ir,FixtureProxy:Na,FrictionJoint:Ga,GearJoint:qa,Joint:Ze,JointEdge:Fa,Manifold:No,ManifoldPoint:Ua,get ManifoldType(){return Ce},Mat22:Ii,Mat33:Sn,Math:Xn,MotorJoint:Xa,MouseJoint:Ya,get PointState(){return Gn},Polygon:an,PolygonShape:an,PrismaticJoint:Wa,PulleyJoint:Ja,RevoluteJoint:Mn,RopeJoint:$a,Rot:et,Serializer:Fo,Settings:Yt,SettingsInternal:dt,Shape:Yn,ShapeCast:id,ShapeCastInput:td,ShapeCastOutput:ed,SimplexCache:Lo,Solver:il,Sweep:Wn,TOIInput:tl,TOIOutput:el,get TOIOutputState(){return ci},Testbed:Lc,TimeOfImpact:Br,TimeStep:Do,Transform:ei,TreeNode:Ec,Vec2:g,Vec3:ae,VelocityConstraintPoint:ka,WeldJoint:Za,WheelJoint:Ka,World:Pr,WorldManifold:sl,clipSegmentToLine:Ys,getPointStates:Pc,internal:od,mixFriction:za,mixRestitution:Oa,stats:Me,testOverlap:Qa,testbed:sd},Symbol.toStringTag,{value:"Module"}));var{Vec2:Jn,Box:Uc,Circle:m_,World:__,RevoluteJoint:v_}=Fc,ll=class{constructor(t){this.level=t,this.world=new __({gravity:new Jn(0,-14)}),this.bodies=new Map,this.meta=new Map,this.events=[],this.pressed=!1,this.ball=null,this.ballsLeft=t.balls,this.restTimer=0,this.time=0,this.toDestroy=[],this.build(),this.world.on("begin-contact",e=>this.onContact(e)),this.world.on("post-solve",(e,i)=>this.onPostSolve(e,i))}box(t,e,i,s,r,o,a,l={}){let h=ra[e],c=this.world.createBody({type:a?"static":"dynamic",position:new Jn(i,s),angle:l.angle||0,linearDamping:.02,angularDamping:.05});c.createFixture(new Uc(r/2,o/2),{density:h.density,friction:h.friction,restitution:h.restitution});let d={id:t,mat:e,w:r,h:o,kind:"box",...l};return this.bodies.set(t,c),this.meta.set(c,d),c}build(){let t=this.level,e=ra.ground;this.box("deck","ground",(t.deck.x0+t.deck.x1)/2,-.3,t.deck.x1-t.deck.x0,.6,!0),this.box("islandL","ground",t.deck.x0-.3,-.7,.6,.7,!0),this.box("islandR","ground",t.deck.x1+.3,-.7,.6,.7,!0);for(let s of t.bodies){let r=this.box(s.id,s.mat,s.x,s.y,s.w,s.h,!!s.static,{stone:!!s.stone,seesaw:s.seesaw});if(s.seesaw){let o=this.world.createBody({type:"static",position:new Jn(s.seesaw.px,s.seesaw.py)});this.world.createJoint(new v_({enableLimit:!0,lowerAngle:-.55,upperAngle:.55},o,r,new Jn(s.seesaw.px,s.seesaw.py)))}}let i=this.world.createBody({type:"static",position:new Jn(t.switch.x,0)});i.createFixture(new Uc(.45,.11,new Jn(0,.11)),{density:0,friction:.6}),i.createFixture(new Uc(.3,.14,new Jn(0,.36)),{isSensor:!0}),this.bodies.set("switch",i),this.meta.set(i,{id:"switch",mat:"slate",kind:"switch"})}onContact(t){let e=t.getFixtureA(),i=t.getFixtureB();for(let[s,r]of[[e,i],[i,e]])if(s.isSensor()&&this.meta.get(s.getBody())?.kind==="switch"){let o=r.getBody();o.isDynamic()&&o.getMass()>=tf&&!this.pressed&&(this.pressed=!0,this.events.push({type:"switch",t:this.time,by:this.meta.get(o)?.id}))}}onPostSolve(t,e){let i=Math.max(...e.normalImpulses,0);if(i<.15)return;let s=t.getFixtureA().getBody(),r=t.getFixtureB().getBody(),o=this.meta.get(s),a=this.meta.get(r);for(let[c,d]of[[o,s],[a,r]])if(c&&c.mat==="glass"&&i>=ra.glass.breakImpulse&&!c.broken){c.broken=!0,this.toDestroy.push(d);let u=d.getPosition();this.events.push({type:"break",t:this.time,id:c.id,x:u.x,y:u.y,angle:d.getAngle(),w:c.w,h:c.h})}let l=[o?.mat,a?.mat].filter(Boolean),h=t.getWorldManifold(null).points[0]||s.getPosition();this.events.push({type:"hit",t:this.time,strength:i,mats:l,x:h.x,y:h.y})}anchor(){return{x:this.level.sling.x-.3,y:.95}}shoot(t,e){let i=Math.hypot(t,e),s=i>Dn?Dn/i:1;if(t*=s,e*=s,this.ball||this.ballsLeft<=0)return!1;let r=this.anchor(),o=this.world.createBody({type:"dynamic",position:new Jn(r.x-t,r.y-e),bullet:!0,linearDamping:.01,angularDamping:.1});return o.createFixture(new m_(.26),{density:2,friction:.4,restitution:.3}),o.setLinearVelocity(new Jn(t*Bs,e*Bs)),this.ball=o,this.ballsLeft--,this.restTimer=0,this.meta.set(o,{id:"ball",mat:"ball",kind:"ball"}),this.events.push({type:"shoot",t:this.time,vx:t*Bs,vy:e*Bs}),!0}preview(t,e,i=18,s=.07){let r=Math.hypot(t,e),o=r>Dn?Dn/r:1;t*=o,e*=o;let a=this.anchor(),l=[];for(let h=1;h<=i;h++){let c=h*s;l.push({x:a.x-t+t*Bs*c,y:a.y-e+e*Bs*c+.5*-14*c*c})}return l}step(){this.world.step(Is,8,3),this.time+=Is;for(let t of this.toDestroy)this.meta.delete(t),this.world.destroyBody(t);if(this.toDestroy.length=0,this.ball){let t=this.ball.getPosition(),i=this.ball.getLinearVelocity().length()<.25;this.restTimer=i?this.restTimer+Is:0,(t.y<-6||this.restTimer>.6||this.time-this.shotAt>8)&&(this.meta.delete(this.ball),this.world.destroyBody(this.ball),this.ball=null,this.events.push({type:"ballDone",t:this.time,left:this.ballsLeft}))}}get shotAt(){return this._shotAt??0}set shotAt(t){this._shotAt=t}snapshot(){let t={bodies:[],ball:null,pressed:this.pressed,ballsLeft:this.ballsLeft,t:this.time};for(let[e,i]of this.bodies){let s=this.meta.get(i);if(!s||s.kind!=="box"||s.broken)continue;let r=i.getPosition();t.bodies.push({id:e,x:r.x,y:r.y,angle:i.getAngle(),mat:s.mat,w:s.w,h:s.h,awake:i.isAwake()})}if(this.ball){let e=this.ball.getPosition();t.ball={x:e.x,y:e.y,angle:this.ball.getAngle()}}return t}settled(){if(this.ball)return!1;for(let[,t]of this.bodies)if(t.isDynamic()&&t.isAwake()&&t.getLinearVelocity().length()>.05)return!1;return!0}hash(){let t=2166136261,e=i=>{let s=Math.round(i*1e3)|0;t^=s,t=Math.imul(t,16777619)>>>0};for(let i of this.snapshot().bodies)e(i.x),e(i.y),e(i.angle);return e(this.pressed?1:0),t>>>0}};var Pu="170";var g_=0,cd=1,y_=2;var fp=1,Lu=2,ts=3,Ts=0,Si=1,Ji=2,Ss=0,Jr=1,hd=2,ud=3,fd=4,x_=5,nr=100,b_=101,A_=102,M_=103,S_=104,w_=200,T_=201,E_=202,C_=203,vh=204,gh=205,R_=206,I_=207,B_=208,P_=209,L_=210,D_=211,N_=212,F_=213,U_=214,yh=0,xh=1,bh=2,jr=3,Ah=4,Mh=5,Sh=6,wh=7,dp=0,V_=1,z_=2,ws=0,O_=1,k_=2,H_=3,Du=4,G_=5,W_=6,q_=7;var pp=300,Qr=301,to=302,Th=303,Eh=304,ec=306,Xo=1e3,or=1001,Ch=1002,fn=1003,X_=1004;var cl=1005;var Cn=1006,zc=1007;var ar=1008;var rs=1009,mp=1010,_p=1011,Yo=1012,Nu=1013,lr=1014,is=1015,Qo=1016,Fu=1017,Uu=1018,eo=1020,vp=35902,gp=1021,yp=1022,un=1023,xp=1024,bp=1025,$r=1026,io=1027,Ap=1028,Vu=1029,Mp=1030,zu=1031;var Ou=1033,Bl=33776,Pl=33777,Ll=33778,Dl=33779,Rh=35840,Ih=35841,Bh=35842,Ph=35843,Lh=36196,Dh=37492,Nh=37496,Fh=37808,Uh=37809,Vh=37810,zh=37811,Oh=37812,kh=37813,Hh=37814,Gh=37815,Wh=37816,qh=37817,Xh=37818,Yh=37819,Jh=37820,$h=37821,Nl=36492,Zh=36494,Kh=36495,Sp=36283,jh=36284,Qh=36285,tu=36286;var Fl=2300,eu=2301,Oc=2302,dd=2400,pd=2401,md=2402;var Y_=3200,J_=3201;var wp=0,$_=1,Ms="",ai="srgb",co="srgb-linear",ic="linear",xe="srgb";var Lr=7680;var _d=519,Z_=512,K_=513,j_=514,Tp=515,Q_=516,tv=517,ev=518,iv=519,vd=35044;var gd="300 es",ns=2e3,Ul=2001,Es=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kc=Math.PI/180,iu=180/Math.PI;function ta(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]+"-"+ri[t&255]+ri[t>>8&255]+"-"+ri[t>>16&15|64]+ri[t>>24&255]+"-"+ri[e&63|128]+ri[e>>8&255]+"-"+ri[e>>16&255]+ri[e>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function di(n,t,e){return Math.max(t,Math.min(e,n))}function nv(n,t){return(n%t+t)%t}function Hc(n,t,e){return(1-e)*n+e*t}function Uo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var fe=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(di(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ee=class n{constructor(t,e,i,s,r,o,a,l,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],p=i[5],f=i[8],v=s[0],_=s[3],m=s[6],x=s[1],b=s[4],y=s[7],R=s[2],T=s[5],E=s[8];return r[0]=o*v+a*x+l*R,r[3]=o*_+a*b+l*T,r[6]=o*m+a*y+l*E,r[1]=h*v+c*x+d*R,r[4]=h*_+c*b+d*T,r[7]=h*m+c*y+d*E,r[2]=u*v+p*x+f*R,r[5]=u*_+p*b+f*T,r[8]=u*m+p*y+f*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-i*r*c+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*o-a*h,u=a*l-c*r,p=h*r-o*l,f=e*d+i*u+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return t[0]=d*v,t[1]=(s*h-c*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(c*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-h*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gc=new ee;function Ep(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sv(){let n=Vl("canvas");return n.style.display="block",n}var yd={};function Go(n){n in yd||(yd[n]=!0,console.warn(n))}function rv(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function ov(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function av(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ue={enabled:!0,workingColorSpace:co,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(n.r=ss(n.r),n.g=ss(n.g),n.b=ss(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(n.r=Zr(n.r),n.g=Zr(n.g),n.b=Zr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ms?ic:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ss(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xd=[.64,.33,.3,.6,.15,.06],bd=[.2126,.7152,.0722],Ad=[.3127,.329],Md=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sd=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[co]:{primaries:xd,whitePoint:Ad,transfer:ic,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:bd,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:xd,whitePoint:Ad,transfer:xe,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:bd,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}});var Dr,nu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Dr===void 0&&(Dr=Vl("canvas")),Dr.width=t.width,Dr.height=t.height;let i=Dr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Dr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vl("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ss(e[i]/255)*255):e[i]=ss(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lv=0,zl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=ta(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wc(s[o].image)):r.push(Wc(s[o]))}else r=Wc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Wc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cv=0,Di=class n extends Es{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=or,s=or,r=Cn,o=ar,a=un,l=rs,h=n.DEFAULT_ANISOTROPY,c=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=ta(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case or:t.x=t.x<0?0:1;break;case Ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case or:t.y=t.y<0?0:1;break;case Ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Di.DEFAULT_IMAGE=null;Di.DEFAULT_MAPPING=pp;Di.DEFAULT_ANISOTROPY=1;var be=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],p=l[5],f=l[9],v=l[2],_=l[6],m=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-v)<.01&&Math.abs(f-_)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+v)<.1&&Math.abs(f+_)<.1&&Math.abs(h+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(h+1)/2,y=(p+1)/2,R=(m+1)/2,T=(c+u)/4,E=(d+v)/4,I=(f+_)/4;return b>y&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=E/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=I/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=E/r,s=I/r),this.set(i,s,r,e),this}let x=Math.sqrt((_-f)*(_-f)+(d-v)*(d-v)+(u-c)*(u-c));return Math.abs(x)<.001&&(x=1),this.x=(_-f)/x,this.y=(d-v)/x,this.z=(u-c)/x,this.w=Math.acos((h+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},su=class extends Es{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Di(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},os=class extends su{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ol=class extends Di{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ru=class extends Di{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],c=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],f=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=f,t[e+3]=v;return}if(d!==v||l!==u||h!==p||c!==f){let _=1-a,m=l*u+h*p+c*f+d*v,x=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){let R=Math.sqrt(b),T=Math.atan2(R,m*x);_=Math.sin(_*T)/R,a=Math.sin(a*T)/R}let y=a*x;if(l=l*_+u*y,h=h*_+p*y,c=c*_+f*y,d=d*_+v*y,_===1-a){let R=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=R,h*=R,c*=R,d*=R}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],d=r[o],u=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+c*d+l*p-h*u,t[e+1]=l*f+c*u+h*d-a*p,t[e+2]=h*f+c*p+a*u-l*d,t[e+3]=c*f-a*d-l*u-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),f=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"YXZ":this._x=u*c*d+h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"ZXY":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d-u*p*f;break;case"ZYX":this._x=u*c*d-h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d+u*p*f;break;case"YZX":this._x=u*c*d+h*p*f,this._y=h*p*d+u*c*f,this._z=h*c*f-u*p*d,this._w=h*c*d-u*p*f;break;case"XZY":this._x=u*c*d-h*p*f,this._y=h*p*d-u*c*f,this._z=h*c*f+u*p*d,this._w=h*c*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(di(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-s*a,this._w=o*c-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),d=Math.sin((1-e)*c)/h,u=Math.sin(e*c)/h;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),c=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*h+o*d-a*c,this.y=i+l*c+a*h-r*d,this.z=s+l*d+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return qc.copy(this).projectOnVector(t),this.sub(qc)}reflect(t){return this.sub(qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(di(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qc=new F,wd=new Cs,cr=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox)),hl.applyMatrix4(t.matrixWorld),this.union(hl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),ul.subVectors(this.max,Vo),Nr.subVectors(t.a,Vo),Fr.subVectors(t.b,Vo),Ur.subVectors(t.c,Vo),vs.subVectors(Fr,Nr),gs.subVectors(Ur,Fr),Zs.subVectors(Nr,Ur);let e=[0,-vs.z,vs.y,0,-gs.z,gs.y,0,-Zs.z,Zs.y,vs.z,0,-vs.x,gs.z,0,-gs.x,Zs.z,0,-Zs.x,-vs.y,vs.x,0,-gs.y,gs.x,0,-Zs.y,Zs.x,0];return!Xc(e,Nr,Fr,Ur,ul)||(e=[1,0,0,0,1,0,0,0,1],!Xc(e,Nr,Fr,Ur,ul))?!1:(fl.crossVectors(vs,gs),e=[fl.x,fl.y,fl.z],Xc(e,Nr,Fr,Ur,ul))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$n=[new F,new F,new F,new F,new F,new F,new F,new F],ln=new F,hl=new cr,Nr=new F,Fr=new F,Ur=new F,vs=new F,gs=new F,Zs=new F,Vo=new F,ul=new F,fl=new F,Ks=new F;function Xc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ks.fromArray(n,r);let a=s.x*Math.abs(Ks.x)+s.y*Math.abs(Ks.y)+s.z*Math.abs(Ks.z),l=t.dot(Ks),h=e.dot(Ks),c=i.dot(Ks);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var hv=new cr,zo=new F,Yc=new F,Jo=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hv.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);let e=zo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Yc)),this.expandByPoint(zo.copy(t.center).sub(Yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new F,Jc=new F,dl=new F,ys=new F,$c=new F,pl=new F,Zc=new F,ou=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Jc.copy(t).add(e).multiplyScalar(.5),dl.copy(e).sub(t).normalize(),ys.copy(this.origin).sub(Jc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(dl),a=ys.dot(this.direction),l=-ys.dot(dl),h=ys.lengthSq(),c=Math.abs(1-o*o),d,u,p,f;if(c>0)if(d=o*l-a,u=o*a-l,f=r*c,d>=0)if(u>=-f)if(u<=f){let v=1/c;d*=v,u*=v,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+h;else u<=-f?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+h):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jc).addScaledVector(dl,u),p}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,i,s,r){$c.subVectors(e,t),pl.subVectors(i,t),Zc.crossVectors($c,pl);let o=this.direction.dot(Zc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ys.subVectors(this.origin,t);let l=a*this.direction.dot(pl.crossVectors(ys,pl));if(l<0)return null;let h=a*this.direction.dot($c.cross(ys));if(h<0||l+h>o)return null;let c=-a*ys.dot(Zc);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class n{constructor(t,e,i,s,r,o,a,l,h,c,d,u,p,f,v,_){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,c,d,u,p,f,v,_)}set(t,e,i,s,r,o,a,l,h,c,d,u,p,f,v,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=c,m[10]=d,m[14]=u,m[3]=p,m[7]=f,m[11]=v,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Vr.setFromMatrixColumn(t,0).length(),r=1/Vr.setFromMatrixColumn(t,1).length(),o=1/Vr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*c,p=o*d,f=a*c,v=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=p+f*h,e[5]=u-v*h,e[9]=-a*l,e[2]=v-u*h,e[6]=f+p*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*c,p=l*d,f=h*c,v=h*d;e[0]=u+v*a,e[4]=f*a-p,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=p*a-f,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*c,p=l*d,f=h*c,v=h*d;e[0]=u-v*a,e[4]=-o*d,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*c,e[9]=v-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*c,p=o*d,f=a*c,v=a*d;e[0]=l*c,e[4]=f*h-p,e[8]=u*h+v,e[1]=l*d,e[5]=v*h+u,e[9]=p*h-f,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*h,f=a*l,v=a*h;e[0]=l*c,e[4]=v-u*d,e[8]=f*d+p,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=p*d+f,e[10]=u-v*d}else if(t.order==="XZY"){let u=o*l,p=o*h,f=a*l,v=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+v,e[5]=o*c,e[9]=p*d-f,e[2]=f*d-p,e[6]=a*c,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uv,t,fv)}lookAt(t,e,i){let s=this.elements;return Pi.subVectors(t,e),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),xs.crossVectors(i,Pi),xs.lengthSq()===0&&(Math.abs(i.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),xs.crossVectors(i,Pi)),xs.normalize(),ml.crossVectors(Pi,xs),s[0]=xs.x,s[4]=ml.x,s[8]=Pi.x,s[1]=xs.y,s[5]=ml.y,s[9]=Pi.y,s[2]=xs.z,s[6]=ml.z,s[10]=Pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],p=i[13],f=i[2],v=i[6],_=i[10],m=i[14],x=i[3],b=i[7],y=i[11],R=i[15],T=s[0],E=s[4],I=s[8],S=s[12],A=s[1],P=s[5],k=s[9],O=s[13],G=s[2],nt=s[6],J=s[10],lt=s[14],$=s[3],ct=s[7],yt=s[11],Mt=s[15];return r[0]=o*T+a*A+l*G+h*$,r[4]=o*E+a*P+l*nt+h*ct,r[8]=o*I+a*k+l*J+h*yt,r[12]=o*S+a*O+l*lt+h*Mt,r[1]=c*T+d*A+u*G+p*$,r[5]=c*E+d*P+u*nt+p*ct,r[9]=c*I+d*k+u*J+p*yt,r[13]=c*S+d*O+u*lt+p*Mt,r[2]=f*T+v*A+_*G+m*$,r[6]=f*E+v*P+_*nt+m*ct,r[10]=f*I+v*k+_*J+m*yt,r[14]=f*S+v*O+_*lt+m*Mt,r[3]=x*T+b*A+y*G+R*$,r[7]=x*E+b*P+y*nt+R*ct,r[11]=x*I+b*k+y*J+R*yt,r[15]=x*S+b*O+y*lt+R*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],p=t[14],f=t[3],v=t[7],_=t[11],m=t[15];return f*(+r*l*d-s*h*d-r*a*u+i*h*u+s*a*p-i*l*p)+v*(+e*l*p-e*h*u+r*o*u-s*o*p+s*h*c-r*l*c)+_*(+e*h*d-e*a*p-r*o*d+i*o*p+r*a*c-i*h*c)+m*(-s*a*c-e*l*d+e*a*u+s*o*d-i*o*u+i*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],p=t[11],f=t[12],v=t[13],_=t[14],m=t[15],x=d*_*h-v*u*h+v*l*p-a*_*p-d*l*m+a*u*m,b=f*u*h-c*_*h-f*l*p+o*_*p+c*l*m-o*u*m,y=c*v*h-f*d*h+f*a*p-o*v*p-c*a*m+o*d*m,R=f*d*l-c*v*l-f*a*u+o*v*u+c*a*_-o*d*_,T=e*x+i*b+s*y+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=x*E,t[1]=(v*u*r-d*_*r-v*s*p+i*_*p+d*s*m-i*u*m)*E,t[2]=(a*_*r-v*l*r+v*s*h-i*_*h-a*s*m+i*l*m)*E,t[3]=(d*l*r-a*u*r-d*s*h+i*u*h+a*s*p-i*l*p)*E,t[4]=b*E,t[5]=(c*_*r-f*u*r+f*s*p-e*_*p-c*s*m+e*u*m)*E,t[6]=(f*l*r-o*_*r-f*s*h+e*_*h+o*s*m-e*l*m)*E,t[7]=(o*u*r-c*l*r+c*s*h-e*u*h-o*s*p+e*l*p)*E,t[8]=y*E,t[9]=(f*d*r-c*v*r-f*i*p+e*v*p+c*i*m-e*d*m)*E,t[10]=(o*v*r-f*a*r+f*i*h-e*v*h-o*i*m+e*a*m)*E,t[11]=(c*a*r-o*d*r-c*i*h+e*d*h+o*i*p-e*a*p)*E,t[12]=R*E,t[13]=(c*v*s-f*d*s+f*i*u-e*v*u-c*i*_+e*d*_)*E,t[14]=(f*a*s-o*v*s-f*i*l+e*v*l+o*i*_-e*a*_)*E,t[15]=(o*d*s-c*a*s+c*i*l-e*d*l-o*i*u+e*a*u)*E,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,d=a+a,u=r*h,p=r*c,f=r*d,v=o*c,_=o*d,m=a*d,x=l*h,b=l*c,y=l*d,R=i.x,T=i.y,E=i.z;return s[0]=(1-(v+m))*R,s[1]=(p+y)*R,s[2]=(f-b)*R,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(u+m))*T,s[6]=(_+x)*T,s[7]=0,s[8]=(f+b)*E,s[9]=(_-x)*E,s[10]=(1-(u+v))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Vr.set(s[0],s[1],s[2]).length(),o=Vr.set(s[4],s[5],s[6]).length(),a=Vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);let h=1/r,c=1/o,d=1/a;return cn.elements[0]*=h,cn.elements[1]*=h,cn.elements[2]*=h,cn.elements[4]*=c,cn.elements[5]*=c,cn.elements[6]*=c,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ns){let l=this.elements,h=2*r/(e-t),c=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),p,f;if(a===ns)p=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===Ul)p=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ns){let l=this.elements,h=1/(e-t),c=1/(i-s),d=1/(o-r),u=(e+t)*h,p=(i+s)*c,f,v;if(a===ns)f=(o+r)*d,v=-2*d;else if(a===Ul)f=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Vr=new F,cn=new Le,uv=new F(0,0,0),fv=new F(1,1,1),xs=new F,ml=new F,Pi=new F,Td=new Le,Ed=new Cs,Rn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(di(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-di(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(di(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-di(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(di(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-di(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Td.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Td,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var kl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dv=0,Cd=new F,zr=new Cs,Kn=new Le,_l=new F,Oo=new F,pv=new F,mv=new Cs,Rd=new F(1,0,0),Id=new F(0,1,0),Bd=new F(0,0,1),Pd={type:"added"},_v={type:"removed"},Or={type:"childadded",child:null},Kc={type:"childremoved",child:null},mi=class n extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Rn,i=new Cs,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new ee}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,e){return zr.setFromAxisAngle(t,e),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(Rd,t)}rotateY(t){return this.rotateOnAxis(Id,t)}rotateZ(t){return this.rotateOnAxis(Bd,t)}translateOnAxis(t,e){return Cd.copy(t).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rd,t)}translateY(t){return this.translateOnAxis(Id,t)}translateZ(t){return this.translateOnAxis(Bd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_l.copy(t):_l.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Oo,_l,this.up):Kn.lookAt(_l,Oo,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(Kn),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pd),Or.child=t,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_v),Kc.child=t,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pd),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,pv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,mv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};mi.DEFAULT_UP=new F(0,1,0);mi.DEFAULT_MATRIX_AUTO_UPDATE=!0;mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new F,jn=new F,jc=new F,Qn=new F,kr=new F,Hr=new F,Ld=new F,Qc=new F,th=new F,eh=new F,ih=new be,nh=new be,sh=new be,sr=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hn.subVectors(s,e),jn.subVectors(i,e),jc.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(jn),l=hn.dot(jc),h=jn.dot(jn),c=jn.dot(jc),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(h*l-a*c)*u,f=(o*c-a*l)*u;return r.set(1-p-f,f,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ih.setScalar(0),nh.setScalar(0),sh.setScalar(0),ih.fromBufferAttribute(t,e),nh.fromBufferAttribute(t,i),sh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ih,r.x),o.addScaledVector(nh,r.y),o.addScaledVector(sh,r.z),o}static isFrontFacing(t,e,i,s){return hn.subVectors(i,e),jn.subVectors(t,e),hn.cross(jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),hn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;kr.subVectors(s,i),Hr.subVectors(r,i),Qc.subVectors(t,i);let l=kr.dot(Qc),h=Hr.dot(Qc);if(l<=0&&h<=0)return e.copy(i);th.subVectors(t,s);let c=kr.dot(th),d=Hr.dot(th);if(c>=0&&d<=c)return e.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(kr,o);eh.subVectors(t,r);let p=kr.dot(eh),f=Hr.dot(eh);if(f>=0&&p<=f)return e.copy(r);let v=p*h-l*f;if(v<=0&&h>=0&&f<=0)return a=h/(h-f),e.copy(i).addScaledVector(Hr,a);let _=c*f-p*d;if(_<=0&&d-c>=0&&p-f>=0)return Ld.subVectors(r,s),a=(d-c)/(d-c+(p-f)),e.copy(s).addScaledVector(Ld,a);let m=1/(_+v+u);return o=v*m,a=u*m,e.copy(i).addScaledVector(kr,o).addScaledVector(Hr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},vl={h:0,s:0,l:0};function rh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var le=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=nv(t,1),e=di(e,0,1),i=di(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=rh(o,r,t+1/3),this.g=rh(o,r,t),this.b=rh(o,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=ai){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ai){let i=Cp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return ue.fromWorkingColorSpace(oi.copy(this),t),Math.round(di(oi.r*255,0,255))*65536+Math.round(di(oi.g*255,0,255))*256+Math.round(di(oi.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(oi.copy(this),e);let i=oi.r,s=oi.g,r=oi.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(oi.copy(this),e),t.r=oi.r,t.g=oi.g,t.b=oi.b,t}getStyle(t=ai){ue.fromWorkingColorSpace(oi.copy(this),t);let e=oi.r,i=oi.g,s=oi.b;return t!==ai?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(bs),this.setHSL(bs.h+t,bs.s+e,bs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bs),t.getHSL(vl);let i=Hc(bs.h,vl.h,e),s=Hc(bs.s,vl.s,e),r=Hc(bs.l,vl.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oi=new le;le.NAMES=Cp;var vv=0,hr=class extends Es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=ta(),this.name="",this.blending=Jr,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vh,this.blendDst=gh,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==Ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vh&&(i.blendSrc=this.blendSrc),this.blendDst!==gh&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_d&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},In=class extends hr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new F,gl=new fe,$i=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=vd,this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)gl.fromBufferAttribute(this,e),gl.applyMatrix3(t),this.setXY(e,gl.x,gl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Uo(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=bi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Uo(e,this.array)),e}setX(t,e){return this.normalized&&(e=bi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Uo(e,this.array)),e}setY(t,e){return this.normalized&&(e=bi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Uo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Uo(e,this.array)),e}setW(t,e){return this.normalized&&(e=bi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=bi(e,this.array),i=bi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=bi(e,this.array),i=bi(i,this.array),s=bi(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=bi(e,this.array),i=bi(i,this.array),s=bi(s,this.array),r=bi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vd&&(t.usage=this.usage),t}};var Hl=class extends $i{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Gl=class extends $i{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pi=class extends $i{constructor(t,e,i){super(new Float32Array(t),e,i)}},gv=0,Yi=new Le,oh=new mi,Gr=new F,Li=new cr,ko=new cr,Ke=new F,as=class n extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ep(t)?Gl:Hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yi.makeRotationFromQuaternion(t),this.applyMatrix4(Yi),this}rotateX(t){return Yi.makeRotationX(t),this.applyMatrix4(Yi),this}rotateY(t){return Yi.makeRotationY(t),this.applyMatrix4(Yi),this}rotateZ(t){return Yi.makeRotationZ(t),this.applyMatrix4(Yi),this}translate(t,e,i){return Yi.makeTranslation(t,e,i),this.applyMatrix4(Yi),this}scale(t,e,i){return Yi.makeScale(t,e,i),this.applyMatrix4(Yi),this}lookAt(t){return oh.lookAt(t),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pi(i,3))}else{for(let i=0,s=e.count;i<s;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Li.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(Li.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(Li.min,ko.min),Li.expandByPoint(Ke),Ke.addVectors(Li.max,ko.max),Li.expandByPoint(Ke)):(Li.expandByPoint(ko.min),Li.expandByPoint(ko.max))}Li.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Ke.fromBufferAttribute(a,h),l&&(Gr.fromBufferAttribute(t,h),Ke.add(Gr)),s=Math.max(s,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $i(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new F,l[I]=new F;let h=new F,c=new F,d=new F,u=new fe,p=new fe,f=new fe,v=new F,_=new F;function m(I,S,A){h.fromBufferAttribute(i,I),c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),f.fromBufferAttribute(r,A),c.sub(h),d.sub(h),p.sub(u),f.sub(u);let P=1/(p.x*f.y-f.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(P),_.copy(d).multiplyScalar(p.x).addScaledVector(c,-f.x).multiplyScalar(P),a[I].add(v),a[S].add(v),a[A].add(v),l[I].add(_),l[S].add(_),l[A].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,S=x.length;I<S;++I){let A=x[I],P=A.start,k=A.count;for(let O=P,G=P+k;O<G;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let b=new F,y=new F,R=new F,T=new F;function E(I){R.fromBufferAttribute(s,I),T.copy(R);let S=a[I];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(T,S);let P=y.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,S=x.length;I<S;++I){let A=x[I],P=A.start,k=A.count;for(let O=P,G=P+k;O<G;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $i(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,h=new F,c=new F,d=new F;if(t)for(let u=0,p=t.count;u<p;u+=3){let f=t.getX(u+0),v=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,_),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(i,f),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,_),a.add(c),l.add(c),h.add(c),i.setXYZ(f,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c),p=0,f=0;for(let v=0,_=l.length;v<_;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let m=0;m<c;m++)u[f++]=h[p++]}return new $i(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dd=new Le,js=new ou,yl=new Jo,Nd=new F,xl=new F,bl=new F,Al=new F,ah=new F,Ml=new F,Fd=new F,Sl=new F,Jt=class extends mi{constructor(t=new as,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ml.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],d=r[l];c!==0&&(ah.fromBufferAttribute(d,t),o?Ml.addScaledVector(ah,c):Ml.addScaledVector(ah.sub(e),c))}e.add(Ml)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),js.copy(t.ray).recast(t.near),!(yl.containsPoint(js.origin)===!1&&(js.intersectSphere(yl,Nd)===null||js.origin.distanceToSquared(Nd)>(t.far-t.near)**2))&&(Dd.copy(r).invert(),js.copy(t.ray).applyMatrix4(Dd),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,js)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,v=u.length;f<v;f++){let _=u[f],m=o[_.materialIndex],x=Math.max(_.start,p.start),b=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let y=x,R=b;y<R;y+=3){let T=a.getX(y),E=a.getX(y+1),I=a.getX(y+2);s=wl(this,m,t,i,h,c,d,T,E,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let f=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let _=f,m=v;_<m;_+=3){let x=a.getX(_),b=a.getX(_+1),y=a.getX(_+2);s=wl(this,o,t,i,h,c,d,x,b,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,v=u.length;f<v;f++){let _=u[f],m=o[_.materialIndex],x=Math.max(_.start,p.start),b=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=x,R=b;y<R;y+=3){let T=y,E=y+1,I=y+2;s=wl(this,m,t,i,h,c,d,T,E,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let _=f,m=v;_<m;_+=3){let x=_,b=_+1,y=_+2;s=wl(this,o,t,i,h,c,d,x,b,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function yv(n,t,e,i,s,r,o,a){let l;if(t.side===Si?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Ts,a),l===null)return null;Sl.copy(a),Sl.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Sl);return h<e.near||h>e.far?null:{distance:h,point:Sl.clone(),object:n}}function wl(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,xl),n.getVertexPosition(l,bl),n.getVertexPosition(h,Al);let c=yv(n,t,e,i,xl,bl,Al,Fd);if(c){let d=new F;sr.getBarycoord(Fd,xl,bl,Al,d),s&&(c.uv=sr.getInterpolatedAttribute(s,a,l,h,d,new fe)),r&&(c.uv1=sr.getInterpolatedAttribute(r,a,l,h,d,new fe)),o&&(c.normal=sr.getInterpolatedAttribute(o,a,l,h,d,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new F,materialIndex:0};sr.getNormal(xl,bl,Al,u.normal),c.face=u,c.barycoord=d}return c}var dn=class n extends as{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],d=[],u=0,p=0;f("z","y","x",-1,-1,i,e,t,o,r,0),f("z","y","x",1,-1,i,e,-t,o,r,1),f("x","z","y",1,1,t,i,e,s,o,2),f("x","z","y",1,-1,t,i,-e,s,o,3),f("x","y","z",1,-1,t,e,i,s,r,4),f("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pi(h,3)),this.setAttribute("normal",new pi(c,3)),this.setAttribute("uv",new pi(d,2));function f(v,_,m,x,b,y,R,T,E,I,S){let A=y/E,P=R/I,k=y/2,O=R/2,G=T/2,nt=E+1,J=I+1,lt=0,$=0,ct=new F;for(let yt=0;yt<J;yt++){let Mt=yt*P-O;for(let kt=0;kt<nt;kt++){let re=kt*A-k;ct[v]=re*x,ct[_]=Mt*b,ct[m]=G,h.push(ct.x,ct.y,ct.z),ct[v]=0,ct[_]=0,ct[m]=T>0?1:-1,c.push(ct.x,ct.y,ct.z),d.push(kt/E),d.push(1-yt/I),lt+=1}}for(let yt=0;yt<I;yt++)for(let Mt=0;Mt<E;Mt++){let kt=u+Mt+nt*yt,re=u+Mt+nt*(yt+1),B=u+(Mt+1)+nt*(yt+1),L=u+(Mt+1)+nt*yt;l.push(kt,re,L),l.push(re,B,L),$+=6}a.addGroup(p,$,S),p+=$,u+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function no(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function fi(n){let t={};for(let e=0;e<n.length;e++){let i=no(n[e]);for(let s in i)t[s]=i[s]}return t}function xv(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rp(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var bv={clone:no,merge:fi},Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends hr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=no(t.uniforms),this.uniformsGroups=xv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Wl=class extends mi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=ns}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},As=new F,Ud=new fe,Vd=new fe,Ai=class extends Wl{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=iu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return iu*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(As.x,As.y).multiplyScalar(-t/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(As.x,As.y).multiplyScalar(-t/As.z)}getViewSize(t,e){return this.getViewBounds(t,Ud,Vd),e.subVectors(Vd,Ud)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Wr=-90,qr=1,au=class extends mi{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ai(Wr,qr,t,e);s.layers=this.layers,this.add(s);let r=new Ai(Wr,qr,t,e);r.layers=this.layers,this.add(r);let o=new Ai(Wr,qr,t,e);o.layers=this.layers,this.add(o);let a=new Ai(Wr,qr,t,e);a.layers=this.layers,this.add(a);let l=new Ai(Wr,qr,t,e);l.layers=this.layers,this.add(l);let h=new Ai(Wr,qr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===ns)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(d,u,p),t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},ql=class extends Di{constructor(t,e,i,s,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Qr,super(t,e,i,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},lu=class extends os{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ql(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new dn(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:no(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Si,blending:Ss});r.uniforms.tEquirect.value=e;let o=new Jt(s,r),a=e.minFilter;return e.minFilter===ar&&(e.minFilter=Cn),new au(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},lh=new F,Sv=new F,wv=new ee,es=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=lh.subVectors(i,e).cross(Sv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(lh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||wv.getNormalMatrix(t),s=this.coplanarPoint(lh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qs=new Jo,Tl=new F,$o=class{constructor(t=new es,e=new es,i=new es,s=new es,r=new es,o=new es){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ns){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],c=s[5],d=s[6],u=s[7],p=s[8],f=s[9],v=s[10],_=s[11],m=s[12],x=s[13],b=s[14],y=s[15];if(i[0].setComponents(l-r,u-h,_-p,y-m).normalize(),i[1].setComponents(l+r,u+h,_+p,y+m).normalize(),i[2].setComponents(l+o,u+c,_+f,y+x).normalize(),i[3].setComponents(l-o,u-c,_-f,y-x).normalize(),i[4].setComponents(l-a,u-d,_-v,y-b).normalize(),e===ns)i[5].setComponents(l+a,u+d,_+v,y+b).normalize();else if(e===Ul)i[5].setComponents(a,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Tl.x=s.normal.x>0?t.max.x:t.min.x,Tl.y=s.normal.y>0?t.max.y:t.min.y,Tl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ip(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Tv(n){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,d=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),a.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,h){let c=l.array,d=l.updateRanges;if(n.bindBuffer(h,a),d.length===0)n.bufferSubData(h,0,c);else{d.sort((p,f)=>p.start-f.start);let u=0;for(let p=1;p<d.length;p++){let f=d[u],v=d[p];v.start<=f.start+f.count+1?f.count=Math.max(f.count,v.start+v.count-f.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,f=d.length;p<f;p++){let v=d[p];n.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var so=class n extends as{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,d=t/a,u=e/l,p=[],f=[],v=[],_=[];for(let m=0;m<c;m++){let x=m*u-o;for(let b=0;b<h;b++){let y=b*d-r;f.push(y,-x,0),v.push(0,0,1),_.push(b/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let b=x+h*m,y=x+h*(m+1),R=x+1+h*(m+1),T=x+1+h*m;p.push(b,y,T),p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new pi(f,3)),this.setAttribute("normal",new pi(v,3)),this.setAttribute("uv",new pi(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ov=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ey=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,by=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,By=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Py=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ly=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,s0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Ev,alphahash_pars_fragment:Cv,alphamap_fragment:Rv,alphamap_pars_fragment:Iv,alphatest_fragment:Bv,alphatest_pars_fragment:Pv,aomap_fragment:Lv,aomap_pars_fragment:Dv,batching_pars_vertex:Nv,batching_vertex:Fv,begin_vertex:Uv,beginnormal_vertex:Vv,bsdfs:zv,iridescence_fragment:Ov,bumpmap_pars_fragment:kv,clipping_planes_fragment:Hv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:Wv,clipping_planes_vertex:qv,color_fragment:Xv,color_pars_fragment:Yv,color_pars_vertex:Jv,color_vertex:$v,common:Zv,cube_uv_reflection_fragment:Kv,defaultnormal_vertex:jv,displacementmap_pars_vertex:Qv,displacementmap_vertex:tg,emissivemap_fragment:eg,emissivemap_pars_fragment:ig,colorspace_fragment:ng,colorspace_pars_fragment:sg,envmap_fragment:rg,envmap_common_pars_fragment:og,envmap_pars_fragment:ag,envmap_pars_vertex:lg,envmap_physical_pars_fragment:yg,envmap_vertex:cg,fog_vertex:hg,fog_pars_vertex:ug,fog_fragment:fg,fog_pars_fragment:dg,gradientmap_pars_fragment:pg,lightmap_pars_fragment:mg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:vg,lights_pars_begin:gg,lights_toon_fragment:xg,lights_toon_pars_fragment:bg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Mg,lights_physical_fragment:Sg,lights_physical_pars_fragment:wg,lights_fragment_begin:Tg,lights_fragment_maps:Eg,lights_fragment_end:Cg,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:Bg,logdepthbuf_vertex:Pg,map_fragment:Lg,map_pars_fragment:Dg,map_particle_fragment:Ng,map_particle_pars_fragment:Fg,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Vg,morphinstance_vertex:zg,morphcolor_vertex:Og,morphnormal_vertex:kg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Gg,normal_fragment_begin:Wg,normal_fragment_maps:qg,normal_pars_fragment:Xg,normal_pars_vertex:Yg,normal_vertex:Jg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:jg,iridescence_pars_fragment:Qg,opaque_fragment:ty,packing:ey,premultiplied_alpha_fragment:iy,project_vertex:ny,dithering_fragment:sy,dithering_pars_fragment:ry,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:hy,shadowmask_pars_fragment:uy,skinbase_vertex:fy,skinning_pars_vertex:dy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:_y,specularmap_pars_fragment:vy,tonemapping_fragment:gy,tonemapping_pars_fragment:yy,transmission_fragment:xy,transmission_pars_fragment:by,uv_pars_fragment:Ay,uv_pars_vertex:My,uv_vertex:Sy,worldpos_vertex:wy,background_vert:Ty,background_frag:Ey,backgroundCube_vert:Cy,backgroundCube_frag:Ry,cube_vert:Iy,cube_frag:By,depth_vert:Py,depth_frag:Ly,distanceRGBA_vert:Dy,distanceRGBA_frag:Ny,equirect_vert:Fy,equirect_frag:Uy,linedashed_vert:Vy,linedashed_frag:zy,meshbasic_vert:Oy,meshbasic_frag:ky,meshlambert_vert:Hy,meshlambert_frag:Gy,meshmatcap_vert:Wy,meshmatcap_frag:qy,meshnormal_vert:Xy,meshnormal_frag:Yy,meshphong_vert:Jy,meshphong_frag:$y,meshphysical_vert:Zy,meshphysical_frag:Ky,meshtoon_vert:jy,meshtoon_frag:Qy,points_vert:t0,points_frag:e0,shadow_vert:i0,shadow_frag:n0,sprite_vert:s0,sprite_frag:r0},gt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},En={basic:{uniforms:fi([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:fi([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new le(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:fi([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:fi([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:fi([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new le(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:fi([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:fi([gt.points,gt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:fi([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:fi([gt.common,gt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:fi([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:fi([gt.sprite,gt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:fi([gt.common,gt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:fi([gt.lights,gt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};En.physical={uniforms:fi([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var El={r:0,b:0,g:0},tr=new Rn,o0=new Le;function a0(n,t,e,i,s,r,o){let a=new le(0),l=r===!0?0:1,h,c,d=null,u=0,p=null;function f(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?e:t).get(b)),b}function v(x){let b=!1,y=f(x);y===null?m(a,l):y&&y.isColor&&(m(y,1),b=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(x,b){let y=f(b);y&&(y.isCubeTexture||y.mapping===ec)?(c===void 0&&(c=new Jt(new dn(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:no(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),tr.copy(b.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(tr)),c.material.toneMapped=ue.getTransfer(y.colorSpace)!==xe,(d!==y||u!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Jt(new so(2,2),new Bn({name:"BackgroundMaterial",uniforms:no(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=ue.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function m(x,b){x.getRGB(El,Rp(n)),i.buffers.color.setClear(El.r,El.g,El.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),l=b,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:v,addToRenderList:_}}function l0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(A,P,k,O,G){let nt=!1,J=d(O,k,P);r!==J&&(r=J,h(r.object)),nt=p(A,O,k,G),nt&&f(A,O,k,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,y(A,P,k,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function h(A){return n.bindVertexArray(A)}function c(A){return n.deleteVertexArray(A)}function d(A,P,k){let O=k.wireframe===!0,G=i[A.id];G===void 0&&(G={},i[A.id]=G);let nt=G[P.id];nt===void 0&&(nt={},G[P.id]=nt);let J=nt[O];return J===void 0&&(J=u(l()),nt[O]=J),J}function u(A){let P=[],k=[],O=[];for(let G=0;G<e;G++)P[G]=0,k[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:O,object:A,attributes:{},index:null}}function p(A,P,k,O){let G=r.attributes,nt=P.attributes,J=0,lt=k.getAttributes();for(let $ in lt)if(lt[$].location>=0){let yt=G[$],Mt=nt[$];if(Mt===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(Mt=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(Mt=A.instanceColor)),yt===void 0||yt.attribute!==Mt||Mt&&yt.data!==Mt.data)return!0;J++}return r.attributesNum!==J||r.index!==O}function f(A,P,k,O){let G={},nt=P.attributes,J=0,lt=k.getAttributes();for(let $ in lt)if(lt[$].location>=0){let yt=nt[$];yt===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(yt=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(yt=A.instanceColor));let Mt={};Mt.attribute=yt,yt&&yt.data&&(Mt.data=yt.data),G[$]=Mt,J++}r.attributes=G,r.attributesNum=J,r.index=O}function v(){let A=r.newAttributes;for(let P=0,k=A.length;P<k;P++)A[P]=0}function _(A){m(A,0)}function m(A,P){let k=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;k[A]=1,O[A]===0&&(n.enableVertexAttribArray(A),O[A]=1),G[A]!==P&&(n.vertexAttribDivisor(A,P),G[A]=P)}function x(){let A=r.newAttributes,P=r.enabledAttributes;for(let k=0,O=P.length;k<O;k++)P[k]!==A[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function b(A,P,k,O,G,nt,J){J===!0?n.vertexAttribIPointer(A,P,k,G,nt):n.vertexAttribPointer(A,P,k,O,G,nt)}function y(A,P,k,O){v();let G=O.attributes,nt=k.getAttributes(),J=P.defaultAttributeValues;for(let lt in nt){let $=nt[lt];if($.location>=0){let ct=G[lt];if(ct===void 0&&(lt==="instanceMatrix"&&A.instanceMatrix&&(ct=A.instanceMatrix),lt==="instanceColor"&&A.instanceColor&&(ct=A.instanceColor)),ct!==void 0){let yt=ct.normalized,Mt=ct.itemSize,kt=t.get(ct);if(kt===void 0)continue;let re=kt.buffer,B=kt.type,L=kt.bytesPerElement,U=B===n.INT||B===n.UNSIGNED_INT||ct.gpuType===Nu;if(ct.isInterleavedBufferAttribute){let X=ct.data,K=X.stride,ot=ct.offset;if(X.isInstancedInterleavedBuffer){for(let xt=0;xt<$.locationSize;xt++)m($.location+xt,X.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let xt=0;xt<$.locationSize;xt++)_($.location+xt);n.bindBuffer(n.ARRAY_BUFFER,re);for(let xt=0;xt<$.locationSize;xt++)b($.location+xt,Mt/$.locationSize,B,yt,K*L,(ot+Mt/$.locationSize*xt)*L,U)}else{if(ct.isInstancedBufferAttribute){for(let X=0;X<$.locationSize;X++)m($.location+X,ct.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let X=0;X<$.locationSize;X++)_($.location+X);n.bindBuffer(n.ARRAY_BUFFER,re);for(let X=0;X<$.locationSize;X++)b($.location+X,Mt/$.locationSize,B,yt,Mt*L,Mt/$.locationSize*X*L,U)}}else if(J!==void 0){let yt=J[lt];if(yt!==void 0)switch(yt.length){case 2:n.vertexAttrib2fv($.location,yt);break;case 3:n.vertexAttrib3fv($.location,yt);break;case 4:n.vertexAttrib4fv($.location,yt);break;default:n.vertexAttrib1fv($.location,yt)}}}}x()}function R(){I();for(let A in i){let P=i[A];for(let k in P){let O=P[k];for(let G in O)c(O[G].object),delete O[G];delete P[k]}delete i[A]}}function T(A){if(i[A.id]===void 0)return;let P=i[A.id];for(let k in P){let O=P[k];for(let G in O)c(O[G].object),delete O[G];delete P[k]}delete i[A.id]}function E(A){for(let P in i){let k=i[P];if(k[A.id]===void 0)continue;let O=k[A.id];for(let G in O)c(O[G].object),delete O[G];delete k[A.id]}}function I(){S(),o=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:_,disableUnusedAttributes:x}}function c0(n,t,e){let i;function s(h){i=h}function r(h,c){n.drawArrays(i,h,c),e.update(c,i,1)}function o(h,c,d){d!==0&&(n.drawArraysInstanced(i,h,c,d),e.update(c,i,d))}function a(h,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,d);let p=0;for(let f=0;f<d;f++)p+=c[f];e.update(p,i,1)}function l(h,c,d,u){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)o(h[f],c[f],u[f]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,c,0,u,0,d);let f=0;for(let v=0;v<d;v++)f+=c[v]*u[v];e.update(f,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==un&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let I=E===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==rs&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==is&&!I)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=f>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function u0(n){let t=this,e=null,i=0,s=!1,r=!1,o=new es,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,p){let f=d.clippingPlanes,v=d.clipIntersection,_=d.clipShadows,m=n.get(d);if(!s||f===null||f.length===0||r&&!_)r?c(null):h();else{let x=r?0:i,b=x*4,y=m.clippingState||null;l.value=y,y=c(f,u,b,p);for(let R=0;R!==b;++R)y[R]=e[R];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,u,p,f){let v=d!==null?d.length:0,_=null;if(v!==0){if(_=l.value,f!==!0||_===null){let m=p+v*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(_===null||_.length<m)&&(_=new Float32Array(m));for(let b=0,y=p;b!==v;++b,y+=4)o.copy(d[b]).applyMatrix4(x,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,_}}function f0(n){let t=new WeakMap;function e(o,a){return a===Th?o.mapping=Qr:a===Eh&&(o.mapping=to),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Th||a===Eh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new lu(l.height);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ro=class extends Wl{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yr=4,zd=[.125,.215,.35,.446,.526,.582],rr=20,ch=new ro,Od=new le,hh=null,uh=0,fh=0,dh=!1,ir=(1+Math.sqrt(5))/2,Xr=1/ir,kd=[new F(-ir,Xr,0),new F(ir,Xr,0),new F(-Xr,0,ir),new F(Xr,0,ir),new F(0,ir,-Xr),new F(0,ir,Xr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Xl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,uh,fh),this._renderer.xr.enabled=dh,t.scissorTest=!1,Cl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qr||t.mapping===to?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Qo,format:un,colorSpace:co,depthBuffer:!1},s=Hd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,t,e)}return s}_compileMaterial(t){let e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,ch)}_sceneToCubeUV(t,e,i,s){let a=new Ai(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,u=c.toneMapping;c.getClearColor(Od),c.toneMapping=ws,c.autoClear=!1;let p=new In({name:"PMREM.Background",side:Si,depthWrite:!1,depthTest:!1}),f=new Jt(new dn,p),v=!1,_=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,v=!0):(p.color.copy(Od),v=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(h[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,h[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,h[m]));let b=this._cubeSize;Cl(s,x*b,m>2?b:0,b,b),c.setRenderTarget(s),v&&c.render(f,a),c.render(t,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=d,t.background=_}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Qr||t.mapping===to;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Cl(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ch)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kd[(s-r-1)%kd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,d=new Jt(this._lodPlanes[s],h),u=h.uniforms,p=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*rr-1),v=r/f,_=isFinite(r)?1+Math.floor(c*v):rr;_>rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${rr}`);let m=[],x=0;for(let E=0;E<rr;++E){let I=E/v,S=Math.exp(-I*I/2);m.push(S),E===0?x+=S:E<_&&(x+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/x;u.envMap.value=t.texture,u.samples.value=_,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:b}=this;u.dTheta.value=f,u.mipInt.value=b-i;let y=this._sizeLods[s],R=3*y*(s>b-Yr?s-b+Yr:0),T=4*(this._cubeSize-y);Cl(e,R,T,3*y,2*y),l.setRenderTarget(e),l.render(d,ch)}};function d0(n){let t=[],e=[],i=[],s=n,r=n-Yr+1+zd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Yr?l=zd[o-n+Yr-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,f=6,v=3,_=2,m=1,x=new Float32Array(v*f*p),b=new Float32Array(_*f*p),y=new Float32Array(m*f*p);for(let T=0;T<p;T++){let E=T%3*2/3-1,I=T>2?0:-1,S=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];x.set(S,v*f*T),b.set(u,_*f*T);let A=[T,T,T,T,T,T];y.set(A,m*f*T)}let R=new as;R.setAttribute("position",new $i(x,v)),R.setAttribute("uv",new $i(b,_)),R.setAttribute("faceIndex",new $i(y,m)),t.push(R),s>Yr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Hd(n,t,e){let i=new os(n,t,e);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function p0(n,t,e){let i=new Float32Array(rr),s=new F(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Gd(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function Wd(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ss,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Th||l===Eh,c=l===Qr||l===to;if(h||c){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Xl(n)),d=h?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return h&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new Xl(n)),d=h?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function _0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Go("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function v0(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let f in u.attributes)t.remove(u.attributes[f]);for(let f in u.morphAttributes){let v=u.morphAttributes[f];for(let _=0,m=v.length;_<m;_++)t.remove(v[_])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let f in p){let v=p[f];for(let _=0,m=v.length;_<m;_++)t.update(v[_],n.ARRAY_BUFFER)}}function h(d){let u=[],p=d.index,f=d.attributes.position,v=0;if(p!==null){let x=p.array;v=p.version;for(let b=0,y=x.length;b<y;b+=3){let R=x[b+0],T=x[b+1],E=x[b+2];u.push(R,T,T,E,E,R)}}else if(f!==void 0){let x=f.array;v=f.version;for(let b=0,y=x.length/3-1;b<y;b+=3){let R=b+0,T=b+1,E=b+2;u.push(R,T,T,E,E,R)}}else return;let _=new(Ep(u)?Gl:Hl)(u,1);_.version=v;let m=r.get(d);m&&t.remove(m),r.set(d,_)}function c(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function g0(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),e.update(p,i,1)}function h(u,p,f){f!==0&&(n.drawElementsInstanced(i,p,r,u*o,f),e.update(p,i,f))}function c(u,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=p[m];e.update(_,i,1)}function d(u,p,f,v){if(f===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<u.length;m++)h(u[m]/o,p[m],v[m]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,v,0,f);let m=0;for(let x=0;x<f;x++)m+=p[x]*v[x];e.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function y0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function x0(n,t,e){let i=new WeakMap,s=new be;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==d){let S=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],b=0;p===!0&&(b=1),f===!0&&(b=2),v===!0&&(b=3);let y=a.attributes.position.count*b,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*R*4*d),E=new Ol(T,y,R,d);E.type=is,E.needsUpdate=!0;let I=b*4;for(let A=0;A<d;A++){let P=_[A],k=m[A],O=x[A],G=y*R*4*A;for(let nt=0;nt<P.count;nt++){let J=nt*I;p===!0&&(s.fromBufferAttribute(P,nt),T[G+J+0]=s.x,T[G+J+1]=s.y,T[G+J+2]=s.z,T[G+J+3]=0),f===!0&&(s.fromBufferAttribute(k,nt),T[G+J+4]=s.x,T[G+J+5]=s.y,T[G+J+6]=s.z,T[G+J+7]=0),v===!0&&(s.fromBufferAttribute(O,nt),T[G+J+8]=s.x,T[G+J+9]=s.y,T[G+J+10]=s.z,T[G+J+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:E,size:new fe(y,R)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let f=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function b0(n,t,e,i){let s=new WeakMap;function r(l){let h=i.render.frame,c=l.geometry,d=t.get(l,c);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return d}function o(){s=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var Yl=class extends Di{constructor(t,e,i,s,r,o,a,l,h,c=$r){if(c!==$r&&c!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===$r&&(i=lr),i===void 0&&c===io&&(i=eo),super(null,s,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Bp=new Di,qd=new Yl(1,1),Pp=new Ol,Lp=new ru,Dp=new ql,Xd=[],Yd=[],Jd=new Float32Array(16),$d=new Float32Array(9),Zd=new Float32Array(4);function ho(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function nc(n,t){let e=Yd[t];e===void 0&&(e=new Int32Array(t),Yd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function A0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function M0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Xe(e,t)}}function S0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Xe(e,t)}}function w0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Xe(e,t)}}function T0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Zd.set(i),n.uniformMatrix2fv(this.addr,!1,Zd),Xe(e,i)}}function E0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;$d.set(i),n.uniformMatrix3fv(this.addr,!1,$d),Xe(e,i)}}function C0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,i))return;Jd.set(i),n.uniformMatrix4fv(this.addr,!1,Jd),Xe(e,i)}}function R0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Xe(e,t)}}function B0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Xe(e,t)}}function P0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Xe(e,t)}}function L0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function D0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Xe(e,t)}}function N0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Xe(e,t)}}function F0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Xe(e,t)}}function U0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(qd.compareFunction=Tp,r=qd):r=Bp,e.setTexture2D(t||r,s)}function V0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Lp,s)}function z0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Dp,s)}function O0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pp,s)}function k0(n){switch(n){case 5126:return A0;case 35664:return M0;case 35665:return S0;case 35666:return w0;case 35674:return T0;case 35675:return E0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return I0;case 35668:case 35672:return B0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return D0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return O0}}function H0(n,t){n.uniform1fv(this.addr,t)}function G0(n,t){let e=ho(t,this.size,2);n.uniform2fv(this.addr,e)}function W0(n,t){let e=ho(t,this.size,3);n.uniform3fv(this.addr,e)}function q0(n,t){let e=ho(t,this.size,4);n.uniform4fv(this.addr,e)}function X0(n,t){let e=ho(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Y0(n,t){let e=ho(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function J0(n,t){let e=ho(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $0(n,t){n.uniform1iv(this.addr,t)}function Z0(n,t){n.uniform2iv(this.addr,t)}function K0(n,t){n.uniform3iv(this.addr,t)}function j0(n,t){n.uniform4iv(this.addr,t)}function Q0(n,t){n.uniform1uiv(this.addr,t)}function tx(n,t){n.uniform2uiv(this.addr,t)}function ex(n,t){n.uniform3uiv(this.addr,t)}function ix(n,t){n.uniform4uiv(this.addr,t)}function nx(n,t,e){let i=this.cache,s=t.length,r=nc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bp,r[o])}function sx(n,t,e){let i=this.cache,s=t.length,r=nc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lp,r[o])}function rx(n,t,e){let i=this.cache,s=t.length,r=nc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Dp,r[o])}function ox(n,t,e){let i=this.cache,s=t.length,r=nc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Pp,r[o])}function ax(n){switch(n){case 5126:return H0;case 35664:return G0;case 35665:return W0;case 35666:return q0;case 35674:return X0;case 35675:return Y0;case 35676:return J0;case 5124:case 35670:return $0;case 35667:case 35671:return Z0;case 35668:case 35672:return K0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return tx;case 36295:return ex;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ox}}var cu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=k0(e.type)}},hu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ax(e.type)}},uu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},ph=/(\w+)(\])?(\[|\.)?/g;function Kd(n,t){n.seq.push(t),n.map[t.id]=t}function lx(n,t,e){let i=n.name,s=i.length;for(ph.lastIndex=0;;){let r=ph.exec(i),o=ph.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Kd(e,h===void 0?new cu(a,n,t):new hu(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new uu(a),Kd(e,d)),e=d}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);lx(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function jd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var cx=37297,hx=0;function ux(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Qd=new ee;function fx(n){ue._getMatrix(Qd,ue.workingColorSpace,n);let t=`mat3( ${Qd.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case ic:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ux(n.getShaderSource(t),o)}else return s}function dx(n,t){let e=fx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function px(n,t){let e;switch(t){case O_:e="Linear";break;case k_:e="Reinhard";break;case H_:e="Cineon";break;case Du:e="ACESFilmic";break;case W_:e="AgX";break;case q_:e="Neutral";break;case G_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rl=new F;function mx(){ue.getLuminanceCoefficients(Rl);let n=Rl.x.toFixed(4),t=Rl.y.toFixed(4),e=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _x(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function vx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Wo(n){return n!==""}function ep(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ip(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(n){return n.replace(yx,bx)}var xx=new Map;function bx(n,t){let e=ie[t];if(e===void 0){let i=xx.get(t);if(i!==void 0)e=ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return fu(e)}var Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(n){return n.replace(Ax,Mx)}function Mx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ts&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case to:t="ENVMAP_TYPE_CUBE";break;case ec:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case to:t="ENVMAP_MODE_REFRACTION";break}return t}function Ex(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dp:t="ENVMAP_BLENDING_MULTIPLY";break;case V_:t="ENVMAP_BLENDING_MIX";break;case z_:t="ENVMAP_BLENDING_ADD";break}return t}function Cx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Rx(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Sx(e),h=wx(e),c=Tx(e),d=Ex(e),u=Cx(e),p=_x(e),f=vx(r),v=s.createProgram(),_,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Wo).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Wo).join(`
`),m.length>0&&(m+=`
`)):(_=[sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),m=[sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ws?"#define TONE_MAPPING":"",e.toneMapping!==ws?ie.tonemapping_pars_fragment:"",e.toneMapping!==ws?px("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,dx("linearToOutputTexel",e.outputColorSpace),mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wo).join(`
`)),o=fu(o),o=ep(o,e),o=ip(o,e),a=fu(a),a=ep(a,e),a=ip(a,e),o=np(o),a=np(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=x+_+o,y=x+m+a,R=jd(s,s.VERTEX_SHADER,b),T=jd(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(P){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(T).trim(),nt=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,T);else{let lt=tp(s,R,"vertex"),$=tp(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+lt+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||G==="")&&(J=!1);J&&(P.diagnostics={runnable:nt,programLog:k,vertexShader:{log:O,prefix:_},fragmentShader:{log:G,prefix:m}})}s.deleteShader(R),s.deleteShader(T),I=new Kr(s,v),S=gx(s,v)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,cx)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}var Ix=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new pu(t),e.set(t,i)),i}},pu=class{constructor(t){this.id=Ix++,this.code=t,this.usedTimes=0}};function Bx(n,t,e,i,s,r,o){let a=new kl,l=new du,h=new Set,c=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return h.add(S),S===0?"uv":`uv${S}`}function _(S,A,P,k,O){let G=k.fog,nt=O.geometry,J=S.isMeshStandardMaterial?k.environment:null,lt=(S.isMeshStandardMaterial?e:t).get(S.envMap||J),$=lt&&lt.mapping===ec?lt.image.height:null,ct=f[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let yt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Mt=yt!==void 0?yt.length:0,kt=0;nt.morphAttributes.position!==void 0&&(kt=1),nt.morphAttributes.normal!==void 0&&(kt=2),nt.morphAttributes.color!==void 0&&(kt=3);let re,B,L,U;if(ct){let ge=En[ct];re=ge.vertexShader,B=ge.fragmentShader}else re=S.vertexShader,B=S.fragmentShader,l.update(S),L=l.getVertexShaderID(S),U=l.getFragmentShaderID(S);let X=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),ot=O.isInstancedMesh===!0,xt=O.isBatchedMesh===!0,tt=!!S.map,mt=!!S.matcap,Ft=!!lt,N=!!S.aoMap,pe=!!S.lightMap,wt=!!S.bumpMap,Bt=!!S.normalMap,Tt=!!S.displacementMap,ce=!!S.emissiveMap,zt=!!S.metalnessMap,C=!!S.roughnessMap,M=S.anisotropy>0,W=S.clearcoat>0,st=S.dispersion>0,at=S.iridescence>0,it=S.sheen>0,It=S.transmission>0,pt=M&&!!S.anisotropyMap,Et=W&&!!S.clearcoatMap,ne=W&&!!S.clearcoatNormalMap,ut=W&&!!S.clearcoatRoughnessMap,Ct=at&&!!S.iridescenceMap,Vt=at&&!!S.iridescenceThicknessMap,Gt=it&&!!S.sheenColorMap,Rt=it&&!!S.sheenRoughnessMap,oe=!!S.specularMap,_t=!!S.specularColorMap,$t=!!S.specularIntensityMap,D=It&&!!S.transmissionMap,vt=It&&!!S.thicknessMap,Q=!!S.gradientMap,rt=!!S.alphaMap,St=S.alphaTest>0,bt=!!S.alphaHash,Qt=!!S.extensions,Ie=ws;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ie=n.toneMapping);let ii={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:B,defines:S.defines,customVertexShaderID:L,customFragmentShaderID:U,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:xt,batchingColor:xt&&O._colorsTexture!==null,instancing:ot,instancingColor:ot&&O.instanceColor!==null,instancingMorph:ot&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:X===null?n.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:co,alphaToCoverage:!!S.alphaToCoverage,map:tt,matcap:mt,envMap:Ft,envMapMode:Ft&&lt.mapping,envMapCubeUVHeight:$,aoMap:N,lightMap:pe,bumpMap:wt,normalMap:Bt,displacementMap:u&&Tt,emissiveMap:ce,normalMapObjectSpace:Bt&&S.normalMapType===$_,normalMapTangentSpace:Bt&&S.normalMapType===wp,metalnessMap:zt,roughnessMap:C,anisotropy:M,anisotropyMap:pt,clearcoat:W,clearcoatMap:Et,clearcoatNormalMap:ne,clearcoatRoughnessMap:ut,dispersion:st,iridescence:at,iridescenceMap:Ct,iridescenceThicknessMap:Vt,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:Rt,specularMap:oe,specularColorMap:_t,specularIntensityMap:$t,transmission:It,transmissionMap:D,thicknessMap:vt,gradientMap:Q,opaque:S.transparent===!1&&S.blending===Jr&&S.alphaToCoverage===!1,alphaMap:rt,alphaTest:St,alphaHash:bt,combine:S.combine,mapUv:tt&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:pe&&v(S.lightMap.channel),bumpMapUv:wt&&v(S.bumpMap.channel),normalMapUv:Bt&&v(S.normalMap.channel),displacementMapUv:Tt&&v(S.displacementMap.channel),emissiveMapUv:ce&&v(S.emissiveMap.channel),metalnessMapUv:zt&&v(S.metalnessMap.channel),roughnessMapUv:C&&v(S.roughnessMap.channel),anisotropyMapUv:pt&&v(S.anisotropyMap.channel),clearcoatMapUv:Et&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(S.sheenRoughnessMap.channel),specularMapUv:oe&&v(S.specularMap.channel),specularColorMapUv:_t&&v(S.specularColorMap.channel),specularIntensityMapUv:$t&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:vt&&v(S.thicknessMap.channel),alphaMapUv:rt&&v(S.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(Bt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!nt.attributes.uv&&(tt||rt),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:K,skinning:O.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:kt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:tt&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===xe,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&ue.getTransfer(S.emissiveMap.colorSpace)===xe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ji,flipSided:S.side===Si,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Qt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&S.extensions.multiDraw===!0||xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ii.vertexUv1s=h.has(1),ii.vertexUv2s=h.has(2),ii.vertexUv3s=h.has(3),h.clear(),ii}function m(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(A,S),b(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function x(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function b(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let A=f[S.type],P;if(A){let k=En[A];P=bv.clone(k.uniforms)}else P=S.uniforms;return P}function R(S,A){let P;for(let k=0,O=c.length;k<O;k++){let G=c[k];if(G.cacheKey===A){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Rx(n,A,S,r),c.push(P)),P}function T(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function E(S){l.remove(S)}function I(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:I}}function Px(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Lx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function rp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function op(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,p,f,v,_){let m=n[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:f,renderOrder:d.renderOrder,z:v,group:_},n[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=f,m.renderOrder=d.renderOrder,m.z=v,m.group=_),t++,m}function a(d,u,p,f,v,_){let m=o(d,u,p,f,v,_);p.transmission>0?i.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(d,u,p,f,v,_){let m=o(d,u,p,f,v,_);p.transmission>0?i.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function h(d,u){e.length>1&&e.sort(d||Lx),i.length>1&&i.sort(u||rp),s.length>1&&s.sort(u||rp)}function c(){for(let d=t,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function Dx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new op,n.set(i,[o])):s>=r.length?(o=new op,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Nx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new le};break;case"SpotLight":e={position:new F,direction:new F,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function Fx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ux=0;function Vx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zx(n){let t=new Nx,e=Fx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new F);let s=new F,r=new Le,o=new Le;function a(h){let c=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,f=0,v=0,_=0,m=0,x=0,b=0,y=0,R=0,T=0,E=0;h.sort(Vx);for(let S=0,A=h.length;S<A;S++){let P=h[S],k=P.color,O=P.intensity,G=P.distance,nt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=k.r*O,d+=k.g*O,u+=k.b*O;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],O);E++}else if(P.isDirectionalLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let lt=P.shadow,$=e.get(P);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=nt,i.directionalShadowMatrix[p]=P.shadow.matrix,x++}i.directional[p]=J,p++}else if(P.isSpotLight){let J=t.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(k).multiplyScalar(O),J.distance=G,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[v]=J;let lt=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,lt.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[v]=lt.matrix,P.castShadow){let $=e.get(P);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=nt,y++}v++}else if(P.isRectAreaLight){let J=t.get(P);J.color.copy(k).multiplyScalar(O),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=J,_++}else if(P.isPointLight){let J=t.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let lt=P.shadow,$=e.get(P);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,$.shadowCameraNear=lt.camera.near,$.shadowCameraFar=lt.camera.far,i.pointShadow[f]=$,i.pointShadowMap[f]=nt,i.pointShadowMatrix[f]=P.shadow.matrix,b++}i.point[f]=J,f++}else if(P.isHemisphereLight){let J=t.get(P);J.skyColor.copy(P.color).multiplyScalar(O),J.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[m]=J,m++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.directionalLength!==p||I.pointLength!==f||I.spotLength!==v||I.rectAreaLength!==_||I.hemiLength!==m||I.numDirectionalShadows!==x||I.numPointShadows!==b||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=f,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,I.directionalLength=p,I.pointLength=f,I.spotLength=v,I.rectAreaLength=_,I.hemiLength=m,I.numDirectionalShadows=x,I.numPointShadows=b,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=E,i.version=Ux++)}function l(h,c){let d=0,u=0,p=0,f=0,v=0,_=c.matrixWorldInverse;for(let m=0,x=h.length;m<x;m++){let b=h[m];if(b.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),d++}else if(b.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),p++}else if(b.isRectAreaLight){let y=i.rectArea[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),f++}else if(b.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(_),u++}else if(b.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(_),v++}}}return{setup:a,setupView:l,state:i}}function ap(n){let t=new zx(n),e=[],i=[];function s(c){h.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ox(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ap(n),t.set(s,[a])):r>=o.length?(a=new ap(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var mu=class extends hr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_u=class extends hr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gx(n,t,e){let i=new $o,s=new fe,r=new fe,o=new be,a=new mu({depthPacking:J_}),l=new _u,h={},c=e.maxTextureSize,d={[Ts]:Si,[Si]:Ts,[Ji]:Ji},u=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new as;f.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Jt(f,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fp;let m=this.type;this.render=function(T,E,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;let S=n.getRenderTarget(),A=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ss),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let O=m!==ts&&this.type===ts,G=m===ts&&this.type!==ts;for(let nt=0,J=T.length;nt<J;nt++){let lt=T[nt],$=lt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ct=$.getFrameExtents();if(s.multiply(ct),r.copy($.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ct.x),s.x=r.x*ct.x,$.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ct.y),s.y=r.y*ct.y,$.mapSize.y=r.y)),$.map===null||O===!0||G===!0){let Mt=this.type!==ts?{minFilter:fn,magFilter:fn}:{};$.map!==null&&$.map.dispose(),$.map=new os(s.x,s.y,Mt),$.map.texture.name=lt.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();let yt=$.getViewportCount();for(let Mt=0;Mt<yt;Mt++){let kt=$.getViewport(Mt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),k.viewport(o),$.updateMatrices(lt,Mt),i=$.getFrustum(),y(E,I,$.camera,lt,this.type)}$.isPointLightShadow!==!0&&this.type===ts&&x($,I),$.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(S,A,P)};function x(T,E){let I=t.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new os(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,I,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,I,p,v,null)}function b(T,E,I,S){let A=null,P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)A=P;else if(A=I.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=A.uuid,O=E.uuid,G=h[k];G===void 0&&(G={},h[k]=G);let nt=G[O];nt===void 0&&(nt=A.clone(),G[O]=nt,E.addEventListener("dispose",R)),A=nt}if(A.visible=E.visible,A.wireframe=E.wireframe,S===ts?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:d[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let k=n.properties.get(A);k.light=I}return A}function y(T,E,I,S,A){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===ts)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let O=t.update(T),G=T.material;if(Array.isArray(G)){let nt=O.groups;for(let J=0,lt=nt.length;J<lt;J++){let $=nt[J],ct=G[$.materialIndex];if(ct&&ct.visible){let yt=b(T,ct,S,A);T.onBeforeShadow(n,T,E,I,O,yt,$),n.renderBufferDirect(I,null,O,yt,T,$),T.onAfterShadow(n,T,E,I,O,yt,$)}}}else if(G.visible){let nt=b(T,G,S,A);T.onBeforeShadow(n,T,E,I,O,nt,null),n.renderBufferDirect(I,null,O,nt,T,null),T.onAfterShadow(n,T,E,I,O,nt,null)}}let k=T.children;for(let O=0,G=k.length;O<G;O++)y(k[O],E,I,S,A)}function R(T){T.target.removeEventListener("dispose",R);for(let I in h){let S=h[I],A=T.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}var Wx={[yh]:xh,[bh]:Sh,[Ah]:wh,[jr]:Mh,[xh]:yh,[Sh]:bh,[wh]:Ah,[Mh]:jr};function qx(n,t){function e(){let D=!1,vt=new be,Q=null,rt=new be(0,0,0,0);return{setMask:function(St){Q!==St&&!D&&(n.colorMask(St,St,St,St),Q=St)},setLocked:function(St){D=St},setClear:function(St,bt,Qt,Ie,ii){ii===!0&&(St*=Ie,bt*=Ie,Qt*=Ie),vt.set(St,bt,Qt,Ie),rt.equals(vt)===!1&&(n.clearColor(St,bt,Qt,Ie),rt.copy(vt))},reset:function(){D=!1,Q=null,rt.set(-1,0,0,0)}}}function i(){let D=!1,vt=!1,Q=null,rt=null,St=null;return{setReversed:function(bt){if(vt!==bt){let Qt=t.get("EXT_clip_control");vt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);let Ie=St;St=null,this.setClear(Ie)}vt=bt},getReversed:function(){return vt},setTest:function(bt){bt?X(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(bt){Q!==bt&&!D&&(n.depthMask(bt),Q=bt)},setFunc:function(bt){if(vt&&(bt=Wx[bt]),rt!==bt){switch(bt){case yh:n.depthFunc(n.NEVER);break;case xh:n.depthFunc(n.ALWAYS);break;case bh:n.depthFunc(n.LESS);break;case jr:n.depthFunc(n.LEQUAL);break;case Ah:n.depthFunc(n.EQUAL);break;case Mh:n.depthFunc(n.GEQUAL);break;case Sh:n.depthFunc(n.GREATER);break;case wh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=bt}},setLocked:function(bt){D=bt},setClear:function(bt){St!==bt&&(vt&&(bt=1-bt),n.clearDepth(bt),St=bt)},reset:function(){D=!1,Q=null,rt=null,St=null,vt=!1}}}function s(){let D=!1,vt=null,Q=null,rt=null,St=null,bt=null,Qt=null,Ie=null,ii=null;return{setTest:function(ge){D||(ge?X(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(ge){vt!==ge&&!D&&(n.stencilMask(ge),vt=ge)},setFunc:function(ge,Ki,Pn){(Q!==ge||rt!==Ki||St!==Pn)&&(n.stencilFunc(ge,Ki,Pn),Q=ge,rt=Ki,St=Pn)},setOp:function(ge,Ki,Pn){(bt!==ge||Qt!==Ki||Ie!==Pn)&&(n.stencilOp(ge,Ki,Pn),bt=ge,Qt=Ki,Ie=Pn)},setLocked:function(ge){D=ge},setClear:function(ge){ii!==ge&&(n.clearStencil(ge),ii=ge)},reset:function(){D=!1,vt=null,Q=null,rt=null,St=null,bt=null,Qt=null,Ie=null,ii=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,c={},d={},u=new WeakMap,p=[],f=null,v=!1,_=null,m=null,x=null,b=null,y=null,R=null,T=null,E=new le(0,0,0),I=0,S=!1,A=null,P=null,k=null,O=null,G=null,nt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,lt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec($)[1]),J=lt>=1):$.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=lt>=2);let ct=null,yt={},Mt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),re=new be().fromArray(Mt),B=new be().fromArray(kt);function L(D,vt,Q,rt){let St=new Uint8Array(4),bt=n.createTexture();n.bindTexture(D,bt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qt=0;Qt<Q;Qt++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(vt+Qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return bt}let U={};U[n.TEXTURE_2D]=L(n.TEXTURE_2D,n.TEXTURE_2D,1),U[n.TEXTURE_CUBE_MAP]=L(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[n.TEXTURE_2D_ARRAY]=L(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),U[n.TEXTURE_3D]=L(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(n.DEPTH_TEST),o.setFunc(jr),wt(!1),Bt(cd),X(n.CULL_FACE),N(Ss);function X(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function K(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function ot(D,vt){return d[D]!==vt?(n.bindFramebuffer(D,vt),d[D]=vt,D===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=vt),D===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function xt(D,vt){let Q=p,rt=!1;if(D){Q=u.get(vt),Q===void 0&&(Q=[],u.set(vt,Q));let St=D.textures;if(Q.length!==St.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,Qt=St.length;bt<Qt;bt++)Q[bt]=n.COLOR_ATTACHMENT0+bt;Q.length=St.length,rt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,rt=!0);rt&&n.drawBuffers(Q)}function tt(D){return f!==D?(n.useProgram(D),f=D,!0):!1}let mt={[nr]:n.FUNC_ADD,[b_]:n.FUNC_SUBTRACT,[A_]:n.FUNC_REVERSE_SUBTRACT};mt[M_]=n.MIN,mt[S_]=n.MAX;let Ft={[w_]:n.ZERO,[T_]:n.ONE,[E_]:n.SRC_COLOR,[vh]:n.SRC_ALPHA,[L_]:n.SRC_ALPHA_SATURATE,[B_]:n.DST_COLOR,[R_]:n.DST_ALPHA,[C_]:n.ONE_MINUS_SRC_COLOR,[gh]:n.ONE_MINUS_SRC_ALPHA,[P_]:n.ONE_MINUS_DST_COLOR,[I_]:n.ONE_MINUS_DST_ALPHA,[D_]:n.CONSTANT_COLOR,[N_]:n.ONE_MINUS_CONSTANT_COLOR,[F_]:n.CONSTANT_ALPHA,[U_]:n.ONE_MINUS_CONSTANT_ALPHA};function N(D,vt,Q,rt,St,bt,Qt,Ie,ii,ge){if(D===Ss){v===!0&&(K(n.BLEND),v=!1);return}if(v===!1&&(X(n.BLEND),v=!0),D!==x_){if(D!==_||ge!==S){if((m!==nr||y!==nr)&&(n.blendEquation(n.FUNC_ADD),m=nr,y=nr),ge)switch(D){case Jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hd:n.blendFunc(n.ONE,n.ONE);break;case ud:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ud:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,b=null,R=null,T=null,E.set(0,0,0),I=0,_=D,S=ge}return}St=St||vt,bt=bt||Q,Qt=Qt||rt,(vt!==m||St!==y)&&(n.blendEquationSeparate(mt[vt],mt[St]),m=vt,y=St),(Q!==x||rt!==b||bt!==R||Qt!==T)&&(n.blendFuncSeparate(Ft[Q],Ft[rt],Ft[bt],Ft[Qt]),x=Q,b=rt,R=bt,T=Qt),(Ie.equals(E)===!1||ii!==I)&&(n.blendColor(Ie.r,Ie.g,Ie.b,ii),E.copy(Ie),I=ii),_=D,S=!1}function pe(D,vt){D.side===Ji?K(n.CULL_FACE):X(n.CULL_FACE);let Q=D.side===Si;vt&&(Q=!Q),wt(Q),D.blending===Jr&&D.transparent===!1?N(Ss):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let rt=D.stencilWrite;a.setTest(rt),rt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?X(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(D){A!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),A=D)}function Bt(D){D!==g_?(X(n.CULL_FACE),D!==P&&(D===cd?n.cullFace(n.BACK):D===y_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),P=D}function Tt(D){D!==k&&(J&&n.lineWidth(D),k=D)}function ce(D,vt,Q){D?(X(n.POLYGON_OFFSET_FILL),(O!==vt||G!==Q)&&(n.polygonOffset(vt,Q),O=vt,G=Q)):K(n.POLYGON_OFFSET_FILL)}function zt(D){D?X(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function C(D){D===void 0&&(D=n.TEXTURE0+nt-1),ct!==D&&(n.activeTexture(D),ct=D)}function M(D,vt,Q){Q===void 0&&(ct===null?Q=n.TEXTURE0+nt-1:Q=ct);let rt=yt[Q];rt===void 0&&(rt={type:void 0,texture:void 0},yt[Q]=rt),(rt.type!==D||rt.texture!==vt)&&(ct!==Q&&(n.activeTexture(Q),ct=Q),n.bindTexture(D,vt||U[D]),rt.type=D,rt.texture=vt)}function W(){let D=yt[ct];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function st(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Vt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function Rt(D){B.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),B.copy(D))}function oe(D,vt){let Q=h.get(vt);Q===void 0&&(Q=new WeakMap,h.set(vt,Q));let rt=Q.get(D);rt===void 0&&(rt=n.getUniformBlockIndex(vt,D.name),Q.set(D,rt))}function _t(D,vt){let rt=h.get(vt).get(D);l.get(vt)!==rt&&(n.uniformBlockBinding(vt,rt,D.__bindingPointIndex),l.set(vt,rt))}function $t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ct=null,yt={},d={},u=new WeakMap,p=[],f=null,v=!1,_=null,m=null,x=null,b=null,y=null,R=null,T=null,E=new le(0,0,0),I=0,S=!1,A=null,P=null,k=null,O=null,G=null,re.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:K,bindFramebuffer:ot,drawBuffers:xt,useProgram:tt,setBlending:N,setMaterial:pe,setFlipSided:wt,setCullFace:Bt,setLineWidth:Tt,setPolygonOffset:ce,setScissorTest:zt,activeTexture:C,bindTexture:M,unbindTexture:W,compressedTexImage2D:st,compressedTexImage3D:at,texImage2D:Ct,texImage3D:Vt,updateUBOMapping:oe,uniformBlockBinding:_t,texStorage2D:ne,texStorage3D:ut,texSubImage2D:it,texSubImage3D:It,compressedTexSubImage2D:pt,compressedTexSubImage3D:Et,scissor:Gt,viewport:Rt,reset:$t}}function lp(n,t,e,i){let s=Xx(i);switch(e){case gp:return n*t;case xp:return n*t;case bp:return n*t*2;case Ap:return n*t/s.components*s.byteLength;case Vu:return n*t/s.components*s.byteLength;case Mp:return n*t*2/s.components*s.byteLength;case zu:return n*t*2/s.components*s.byteLength;case yp:return n*t*3/s.components*s.byteLength;case un:return n*t*4/s.components*s.byteLength;case Ou:return n*t*4/s.components*s.byteLength;case Bl:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ll:case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ih:case Ph:return Math.max(n,16)*Math.max(t,8)/4;case Rh:case Bh:return Math.max(n,8)*Math.max(t,8)/2;case Lh:case Dh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case zh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case kh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case qh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $h:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Zh:case Kh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sp:case jh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Qh:case tu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xx(n){switch(n){case rs:case mp:return{byteLength:1,components:1};case Yo:case _p:case Qo:return{byteLength:2,components:1};case Fu:case Uu:return{byteLength:2,components:4};case lr:case Nu:case is:return{byteLength:4,components:1};case vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Yx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new fe,c=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,M){return p?new OffscreenCanvas(C,M):Vl("canvas")}function v(C,M,W){let st=1,at=zt(C);if((at.width>W||at.height>W)&&(st=W/Math.max(at.width,at.height)),st<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let it=Math.floor(st*at.width),It=Math.floor(st*at.height);d===void 0&&(d=f(it,It));let pt=M?f(it,It):d;return pt.width=it,pt.height=It,pt.getContext("2d").drawImage(C,0,0,it,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+it+"x"+It+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),C;return C}function _(C){return C.generateMipmaps}function m(C){n.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,M,W,st,at=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let it=M;if(M===n.RED&&(W===n.FLOAT&&(it=n.R32F),W===n.HALF_FLOAT&&(it=n.R16F),W===n.UNSIGNED_BYTE&&(it=n.R8)),M===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(it=n.R8UI),W===n.UNSIGNED_SHORT&&(it=n.R16UI),W===n.UNSIGNED_INT&&(it=n.R32UI),W===n.BYTE&&(it=n.R8I),W===n.SHORT&&(it=n.R16I),W===n.INT&&(it=n.R32I)),M===n.RG&&(W===n.FLOAT&&(it=n.RG32F),W===n.HALF_FLOAT&&(it=n.RG16F),W===n.UNSIGNED_BYTE&&(it=n.RG8)),M===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(it=n.RG8UI),W===n.UNSIGNED_SHORT&&(it=n.RG16UI),W===n.UNSIGNED_INT&&(it=n.RG32UI),W===n.BYTE&&(it=n.RG8I),W===n.SHORT&&(it=n.RG16I),W===n.INT&&(it=n.RG32I)),M===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(it=n.RGB8UI),W===n.UNSIGNED_SHORT&&(it=n.RGB16UI),W===n.UNSIGNED_INT&&(it=n.RGB32UI),W===n.BYTE&&(it=n.RGB8I),W===n.SHORT&&(it=n.RGB16I),W===n.INT&&(it=n.RGB32I)),M===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),W===n.UNSIGNED_INT&&(it=n.RGBA32UI),W===n.BYTE&&(it=n.RGBA8I),W===n.SHORT&&(it=n.RGBA16I),W===n.INT&&(it=n.RGBA32I)),M===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),M===n.RGBA){let It=at?ic:ue.getTransfer(st);W===n.FLOAT&&(it=n.RGBA32F),W===n.HALF_FLOAT&&(it=n.RGBA16F),W===n.UNSIGNED_BYTE&&(it=It===xe?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(C,M){let W;return C?M===null||M===lr||M===eo?W=n.DEPTH24_STENCIL8:M===is?W=n.DEPTH32F_STENCIL8:M===Yo&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===lr||M===eo?W=n.DEPTH_COMPONENT24:M===is?W=n.DEPTH_COMPONENT32F:M===Yo&&(W=n.DEPTH_COMPONENT16),W}function R(C,M){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){let M=C.target;M.removeEventListener("dispose",T),I(M),M.isVideoTexture&&c.delete(M)}function E(C){let M=C.target;M.removeEventListener("dispose",E),A(M)}function I(C){let M=i.get(C);if(M.__webglInit===void 0)return;let W=C.source,st=u.get(W);if(st){let at=st[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(C),Object.keys(st).length===0&&u.delete(W)}i.remove(C)}function S(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let W=C.source,st=u.get(W);delete st[M.__cacheKey],o.memory.textures--}function A(C){let M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(M.__webglFramebuffer[st]))for(let at=0;at<M.__webglFramebuffer[st].length;at++)n.deleteFramebuffer(M.__webglFramebuffer[st][at]);else n.deleteFramebuffer(M.__webglFramebuffer[st]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[st])}else{if(Array.isArray(M.__webglFramebuffer))for(let st=0;st<M.__webglFramebuffer.length;st++)n.deleteFramebuffer(M.__webglFramebuffer[st]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let st=0;st<M.__webglColorRenderbuffer.length;st++)M.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[st]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=C.textures;for(let st=0,at=W.length;st<at;st++){let it=i.get(W[st]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(W[st])}i.remove(C)}let P=0;function k(){P=0}function O(){let C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function G(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function nt(C,M){let W=i.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){let st=C.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(W,C,M);return}}e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+M)}function J(C,M){let W=i.get(C);if(C.version>0&&W.__version!==C.version){B(W,C,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+M)}function lt(C,M){let W=i.get(C);if(C.version>0&&W.__version!==C.version){B(W,C,M);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+M)}function $(C,M){let W=i.get(C);if(C.version>0&&W.__version!==C.version){L(W,C,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+M)}let ct={[Xo]:n.REPEAT,[or]:n.CLAMP_TO_EDGE,[Ch]:n.MIRRORED_REPEAT},yt={[fn]:n.NEAREST,[X_]:n.NEAREST_MIPMAP_NEAREST,[cl]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[zc]:n.LINEAR_MIPMAP_NEAREST,[ar]:n.LINEAR_MIPMAP_LINEAR},Mt={[Z_]:n.NEVER,[iv]:n.ALWAYS,[K_]:n.LESS,[Tp]:n.LEQUAL,[j_]:n.EQUAL,[ev]:n.GEQUAL,[Q_]:n.GREATER,[tv]:n.NOTEQUAL};function kt(C,M){if(M.type===is&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===zc||M.magFilter===cl||M.magFilter===ar||M.minFilter===Cn||M.minFilter===zc||M.minFilter===cl||M.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ct[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ct[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ct[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,yt[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===fn||M.minFilter!==cl&&M.minFilter!==ar||M.type===is&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function re(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",T));let st=M.source,at=u.get(st);at===void 0&&(at={},u.set(st,at));let it=G(M);if(it!==C.__cacheKey){at[it]===void 0&&(at[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[it].usedTimes++;let It=at[C.__cacheKey];It!==void 0&&(at[C.__cacheKey].usedTimes--,It.usedTimes===0&&S(M)),C.__cacheKey=it,C.__webglTexture=at[it].texture}return W}function B(C,M,W){let st=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=n.TEXTURE_3D);let at=re(C,M),it=M.source;e.bindTexture(st,C.__webglTexture,n.TEXTURE0+W);let It=i.get(it);if(it.version!==It.__version||at===!0){e.activeTexture(n.TEXTURE0+W);let pt=ue.getPrimaries(ue.workingColorSpace),Et=M.colorSpace===Ms?null:ue.getPrimaries(M.colorSpace),ne=M.colorSpace===Ms||pt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ut=v(M.image,!1,s.maxTextureSize);ut=ce(M,ut);let Ct=r.convert(M.format,M.colorSpace),Vt=r.convert(M.type),Gt=b(M.internalFormat,Ct,Vt,M.colorSpace,M.isVideoTexture);kt(st,M);let Rt,oe=M.mipmaps,_t=M.isVideoTexture!==!0,$t=It.__version===void 0||at===!0,D=it.dataReady,vt=R(M,ut);if(M.isDepthTexture)Gt=y(M.format===io,M.type),$t&&(_t?e.texStorage2D(n.TEXTURE_2D,1,Gt,ut.width,ut.height):e.texImage2D(n.TEXTURE_2D,0,Gt,ut.width,ut.height,0,Ct,Vt,null));else if(M.isDataTexture)if(oe.length>0){_t&&$t&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,oe[0].width,oe[0].height);for(let Q=0,rt=oe.length;Q<rt;Q++)Rt=oe[Q],_t?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Rt.width,Rt.height,Ct,Vt,Rt.data):e.texImage2D(n.TEXTURE_2D,Q,Gt,Rt.width,Rt.height,0,Ct,Vt,Rt.data);M.generateMipmaps=!1}else _t?($t&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,ut.width,ut.height),D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut.width,ut.height,Ct,Vt,ut.data)):e.texImage2D(n.TEXTURE_2D,0,Gt,ut.width,ut.height,0,Ct,Vt,ut.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){_t&&$t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Gt,oe[0].width,oe[0].height,ut.depth);for(let Q=0,rt=oe.length;Q<rt;Q++)if(Rt=oe[Q],M.format!==un)if(Ct!==null)if(_t){if(D)if(M.layerUpdates.size>0){let St=lp(Rt.width,Rt.height,M.format,M.type);for(let bt of M.layerUpdates){let Qt=Rt.data.subarray(bt*St/Rt.data.BYTES_PER_ELEMENT,(bt+1)*St/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,bt,Rt.width,Rt.height,1,Ct,Qt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Rt.width,Rt.height,ut.depth,Ct,Rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Gt,Rt.width,Rt.height,ut.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Rt.width,Rt.height,ut.depth,Ct,Vt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,Gt,Rt.width,Rt.height,ut.depth,0,Ct,Vt,Rt.data)}else{_t&&$t&&e.texStorage2D(n.TEXTURE_2D,vt,Gt,oe[0].width,oe[0].height);for(let Q=0,rt=oe.length;Q<rt;Q++)Rt=oe[Q],M.format!==un?Ct!==null?_t?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,Gt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Rt.width,Rt.height,Ct,Vt,Rt.data):e.texImage2D(n.TEXTURE_2D,Q,Gt,Rt.width,Rt.height,0,Ct,Vt,Rt.data)}else if(M.isDataArrayTexture)if(_t){if($t&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Gt,ut.width,ut.height,ut.depth),D)if(M.layerUpdates.size>0){let Q=lp(ut.width,ut.height,M.format,M.type);for(let rt of M.layerUpdates){let St=ut.data.subarray(rt*Q/ut.data.BYTES_PER_ELEMENT,(rt+1)*Q/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ut.width,ut.height,1,Ct,Vt,St)}M.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Ct,Vt,ut.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Gt,ut.width,ut.height,ut.depth,0,Ct,Vt,ut.data);else if(M.isData3DTexture)_t?($t&&e.texStorage3D(n.TEXTURE_3D,vt,Gt,ut.width,ut.height,ut.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Ct,Vt,ut.data)):e.texImage3D(n.TEXTURE_3D,0,Gt,ut.width,ut.height,ut.depth,0,Ct,Vt,ut.data);else if(M.isFramebufferTexture){if($t)if(_t)e.texStorage2D(n.TEXTURE_2D,vt,Gt,ut.width,ut.height);else{let Q=ut.width,rt=ut.height;for(let St=0;St<vt;St++)e.texImage2D(n.TEXTURE_2D,St,Gt,Q,rt,0,Ct,Vt,null),Q>>=1,rt>>=1}}else if(oe.length>0){if(_t&&$t){let Q=zt(oe[0]);e.texStorage2D(n.TEXTURE_2D,vt,Gt,Q.width,Q.height)}for(let Q=0,rt=oe.length;Q<rt;Q++)Rt=oe[Q],_t?D&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ct,Vt,Rt):e.texImage2D(n.TEXTURE_2D,Q,Gt,Ct,Vt,Rt);M.generateMipmaps=!1}else if(_t){if($t){let Q=zt(ut);e.texStorage2D(n.TEXTURE_2D,vt,Gt,Q.width,Q.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Vt,ut)}else e.texImage2D(n.TEXTURE_2D,0,Gt,Ct,Vt,ut);_(M)&&m(st),It.__version=it.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function L(C,M,W){if(M.image.length!==6)return;let st=re(C,M),at=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);let it=i.get(at);if(at.version!==it.__version||st===!0){e.activeTexture(n.TEXTURE0+W);let It=ue.getPrimaries(ue.workingColorSpace),pt=M.colorSpace===Ms?null:ue.getPrimaries(M.colorSpace),Et=M.colorSpace===Ms||It===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ne=M.isCompressedTexture||M.image[0].isCompressedTexture,ut=M.image[0]&&M.image[0].isDataTexture,Ct=[];for(let rt=0;rt<6;rt++)!ne&&!ut?Ct[rt]=v(M.image[rt],!0,s.maxCubemapSize):Ct[rt]=ut?M.image[rt].image:M.image[rt],Ct[rt]=ce(M,Ct[rt]);let Vt=Ct[0],Gt=r.convert(M.format,M.colorSpace),Rt=r.convert(M.type),oe=b(M.internalFormat,Gt,Rt,M.colorSpace),_t=M.isVideoTexture!==!0,$t=it.__version===void 0||st===!0,D=at.dataReady,vt=R(M,Vt);kt(n.TEXTURE_CUBE_MAP,M);let Q;if(ne){_t&&$t&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,oe,Vt.width,Vt.height);for(let rt=0;rt<6;rt++){Q=Ct[rt].mipmaps;for(let St=0;St<Q.length;St++){let bt=Q[St];M.format!==un?Gt!==null?_t?D&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,bt.width,bt.height,Gt,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,oe,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,0,0,bt.width,bt.height,Gt,Rt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St,oe,bt.width,bt.height,0,Gt,Rt,bt.data)}}}else{if(Q=M.mipmaps,_t&&$t){Q.length>0&&vt++;let rt=zt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,oe,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ut){_t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ct[rt].width,Ct[rt].height,Gt,Rt,Ct[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,oe,Ct[rt].width,Ct[rt].height,0,Gt,Rt,Ct[rt].data);for(let St=0;St<Q.length;St++){let Qt=Q[St].image[rt].image;_t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,Qt.width,Qt.height,Gt,Rt,Qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,oe,Qt.width,Qt.height,0,Gt,Rt,Qt.data)}}else{_t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Gt,Rt,Ct[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,oe,Gt,Rt,Ct[rt]);for(let St=0;St<Q.length;St++){let bt=Q[St];_t?D&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,0,0,Gt,Rt,bt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,St+1,oe,Gt,Rt,bt.image[rt])}}}_(M)&&m(n.TEXTURE_CUBE_MAP),it.__version=at.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function U(C,M,W,st,at,it){let It=r.convert(W.format,W.colorSpace),pt=r.convert(W.type),Et=b(W.internalFormat,It,pt,W.colorSpace),ne=i.get(M),ut=i.get(W);if(ut.__renderTarget=M,!ne.__hasExternalTextures){let Ct=Math.max(1,M.width>>it),Vt=Math.max(1,M.height>>it);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,it,Et,Ct,Vt,M.depth,0,It,pt,null):e.texImage2D(at,it,Et,Ct,Vt,0,It,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,at,ut.__webglTexture,0,wt(M)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,at,ut.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function X(C,M,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let st=M.depthTexture,at=st&&st.isDepthTexture?st.type:null,it=y(M.stencilBuffer,at),It=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=wt(M);Bt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,it,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,it,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,it,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,It,n.RENDERBUFFER,C)}else{let st=M.textures;for(let at=0;at<st.length;at++){let it=st[at],It=r.convert(it.format,it.colorSpace),pt=r.convert(it.type),Et=b(it.internalFormat,It,pt,it.colorSpace),ne=wt(M);W&&Bt(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,Et,M.width,M.height):Bt(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,Et,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Et,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function K(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=i.get(M.depthTexture);st.__renderTarget=M,(!st.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),nt(M.depthTexture,0);let at=st.__webglTexture,it=wt(M);if(M.depthTexture.format===$r)Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(M.depthTexture.format===io)Bt(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function ot(C){let M=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let st=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),st){let at=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,st.removeEventListener("dispose",at)};st.addEventListener("dispose",at),M.__depthDisposeCallback=at}M.__boundDepthTexture=st}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");K(M.__webglFramebuffer,C)}else if(W){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]===void 0)M.__webglDepthbuffer[st]=n.createRenderbuffer(),X(M.__webglDepthbuffer[st],C,!1);else{let at=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=M.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),X(M.__webglDepthbuffer,C,!1);else{let st=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(C,M,W){let st=i.get(C);M!==void 0&&U(st.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&ot(C)}function tt(C){let M=C.texture,W=i.get(C),st=i.get(M);C.addEventListener("dispose",E);let at=C.textures,it=C.isWebGLCubeRenderTarget===!0,It=at.length>1;if(It||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=M.version,o.memory.textures++),it){W.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[pt]=[];for(let Et=0;Et<M.mipmaps.length;Et++)W.__webglFramebuffer[pt][Et]=n.createFramebuffer()}else W.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let pt=0;pt<M.mipmaps.length;pt++)W.__webglFramebuffer[pt]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(It)for(let pt=0,Et=at.length;pt<Et;pt++){let ne=i.get(at[pt]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Bt(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let pt=0;pt<at.length;pt++){let Et=at[pt];W.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[pt]);let ne=r.convert(Et.format,Et.colorSpace),ut=r.convert(Et.type),Ct=b(Et.internalFormat,ne,ut,Et.colorSpace,C.isXRRenderTarget===!0),Vt=wt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Ct,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,W.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),X(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),kt(n.TEXTURE_CUBE_MAP,M);for(let pt=0;pt<6;pt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)U(W.__webglFramebuffer[pt][Et],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et);else U(W.__webglFramebuffer[pt],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);_(M)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let pt=0,Et=at.length;pt<Et;pt++){let ne=at[pt],ut=i.get(ne);e.bindTexture(n.TEXTURE_2D,ut.__webglTexture),kt(n.TEXTURE_2D,ne),U(W.__webglFramebuffer,C,ne,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),_(ne)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,st.__webglTexture),kt(pt,M),M.mipmaps&&M.mipmaps.length>0)for(let Et=0;Et<M.mipmaps.length;Et++)U(W.__webglFramebuffer[Et],C,M,n.COLOR_ATTACHMENT0,pt,Et);else U(W.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,pt,0);_(M)&&m(pt),e.unbindTexture()}C.depthBuffer&&ot(C)}function mt(C){let M=C.textures;for(let W=0,st=M.length;W<st;W++){let at=M[W];if(_(at)){let it=x(C),It=i.get(at).__webglTexture;e.bindTexture(it,It),m(it),e.unbindTexture()}}}let Ft=[],N=[];function pe(C){if(C.samples>0){if(Bt(C)===!1){let M=C.textures,W=C.width,st=C.height,at=n.COLOR_BUFFER_BIT,it=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,It=i.get(C),pt=M.length>1;if(pt)for(let Et=0;Et<M.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Et=0;Et<M.length;Et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,It.__webglColorRenderbuffer[Et]);let ne=i.get(M[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,W,st,0,0,W,st,at,n.NEAREST),l===!0&&(Ft.length=0,N.length=0,Ft.push(n.COLOR_ATTACHMENT0+Et),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ft.push(it),N.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let Et=0;Et<M.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,It.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,It.__webglColorRenderbuffer[Et]);let ne=i.get(M[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,It.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,ne,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function wt(C){return Math.min(s.maxSamples,C.samples)}function Bt(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(C){let M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function ce(C,M){let W=C.colorSpace,st=C.format,at=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==co&&W!==Ms&&(ue.getTransfer(W)===xe?(st!==un||at!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=nt,this.setTexture2DArray=J,this.setTexture3D=lt,this.setTextureCube=$,this.rebindTextures=xt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=U,this.useMultisampledRTT=Bt}function Jx(n,t){function e(i,s=Ms){let r,o=ue.getTransfer(s);if(i===rs)return n.UNSIGNED_BYTE;if(i===Fu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mp)return n.BYTE;if(i===_p)return n.SHORT;if(i===Yo)return n.UNSIGNED_SHORT;if(i===Nu)return n.INT;if(i===lr)return n.UNSIGNED_INT;if(i===is)return n.FLOAT;if(i===Qo)return n.HALF_FLOAT;if(i===gp)return n.ALPHA;if(i===yp)return n.RGB;if(i===un)return n.RGBA;if(i===xp)return n.LUMINANCE;if(i===bp)return n.LUMINANCE_ALPHA;if(i===$r)return n.DEPTH_COMPONENT;if(i===io)return n.DEPTH_STENCIL;if(i===Ap)return n.RED;if(i===Vu)return n.RED_INTEGER;if(i===Mp)return n.RG;if(i===zu)return n.RG_INTEGER;if(i===Ou)return n.RGBA_INTEGER;if(i===Bl||i===Pl||i===Ll||i===Dl)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ll)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rh||i===Ih||i===Bh||i===Ph)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ih)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ph)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lh||i===Dh||i===Nh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Lh||i===Dh)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Nh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fh||i===Uh||i===Vh||i===zh||i===Oh||i===kh||i===Hh||i===Gh||i===Wh||i===qh||i===Xh||i===Yh||i===Jh||i===$h)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jh)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$h)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Zh||i===Kh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Nl)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===jh||i===Qh||i===tu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var vu=class extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Mi=class extends mi{constructor(){super(),this.isGroup=!0,this.type="Group"}},$x={type:"move"},qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let v of t.hand.values()){let _=e.getJointPose(v,i),m=this._getHandJoint(h,v);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),p=.02,f=.005;h.inputState.pinching&&u>p+f?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=p-f&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($x)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Mi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new Di,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Bn({vertexShader:Zx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yu=class extends Es{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,p=null,f=null,v=new gu,_=e.getContextAttributes(),m=null,x=null,b=[],y=[],R=new fe,T=null,E=new Ai;E.viewport=new be;let I=new Ai;I.viewport=new be;let S=[E,I],A=new vu,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let L=b[B];return L===void 0&&(L=new qo,b[B]=L),L.getTargetRaySpace()},this.getControllerGrip=function(B){let L=b[B];return L===void 0&&(L=new qo,b[B]=L),L.getGripSpace()},this.getHand=function(B){let L=b[B];return L===void 0&&(L=new qo,b[B]=L),L.getHandSpace()};function O(B){let L=y.indexOf(B.inputSource);if(L===-1)return;let U=b[L];U!==void 0&&(U.update(B.inputSource,B.frame,h||o),U.dispatchEvent({type:B.type,data:B.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let B=0;B<b.length;B++){let L=y[B];L!==null&&(y[B]=null,b[B].disconnect(L))}P=null,k=null,v.reset(),t.setRenderTarget(m),p=null,u=null,d=null,s=null,x=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(B){h=B},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){let L={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,L),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new os(p.framebufferWidth,p.framebufferHeight,{format:un,type:rs,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let L=null,U=null,X=null;_.depth&&(X=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,L=_.stencil?io:$r,U=_.stencil?eo:lr);let K={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(K),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new os(u.textureWidth,u.textureHeight,{format:un,type:rs,depthTexture:new Yl(u.textureWidth,u.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,L),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function nt(B){for(let L=0;L<B.removed.length;L++){let U=B.removed[L],X=y.indexOf(U);X>=0&&(y[X]=null,b[X].disconnect(U))}for(let L=0;L<B.added.length;L++){let U=B.added[L],X=y.indexOf(U);if(X===-1){for(let ot=0;ot<b.length;ot++)if(ot>=y.length){y.push(U),X=ot;break}else if(y[ot]===null){y[ot]=U,X=ot;break}if(X===-1)break}let K=b[X];K&&K.connect(U)}}let J=new F,lt=new F;function $(B,L,U){J.setFromMatrixPosition(L.matrixWorld),lt.setFromMatrixPosition(U.matrixWorld);let X=J.distanceTo(lt),K=L.projectionMatrix.elements,ot=U.projectionMatrix.elements,xt=K[14]/(K[10]-1),tt=K[14]/(K[10]+1),mt=(K[9]+1)/K[5],Ft=(K[9]-1)/K[5],N=(K[8]-1)/K[0],pe=(ot[8]+1)/ot[0],wt=xt*N,Bt=xt*pe,Tt=X/(-N+pe),ce=Tt*-N;if(L.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ce),B.translateZ(Tt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),K[10]===-1)B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{let zt=xt+Tt,C=tt+Tt,M=wt-ce,W=Bt+(X-ce),st=mt*tt/C*zt,at=Ft*tt/C*zt;B.projectionMatrix.makePerspective(M,W,st,at,zt,C),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function ct(B,L){L===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(L.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let L=B.near,U=B.far;v.texture!==null&&(v.depthNear>0&&(L=v.depthNear),v.depthFar>0&&(U=v.depthFar)),A.near=I.near=E.near=L,A.far=I.far=E.far=U,(P!==A.near||k!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,k=A.far),E.layers.mask=B.layers.mask|2,I.layers.mask=B.layers.mask|4,A.layers.mask=E.layers.mask|I.layers.mask;let X=B.parent,K=A.cameras;ct(A,X);for(let ot=0;ot<K.length;ot++)ct(K[ot],X);K.length===2?$(A,E,I):A.projectionMatrix.copy(E.projectionMatrix),yt(B,A,X)};function yt(B,L,U){U===null?B.matrix.copy(L.matrixWorld):(B.matrix.copy(U.matrixWorld),B.matrix.invert(),B.matrix.multiply(L.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(L.projectionMatrix),B.projectionMatrixInverse.copy(L.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=iu*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(A)};let Mt=null;function kt(B,L){if(c=L.getViewerPose(h||o),f=L,c!==null){let U=c.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let X=!1;U.length!==A.cameras.length&&(A.cameras.length=0,X=!0);for(let ot=0;ot<U.length;ot++){let xt=U[ot],tt=null;if(p!==null)tt=p.getViewport(xt);else{let Ft=d.getViewSubImage(u,xt);tt=Ft.viewport,ot===0&&(t.setRenderTargetTextures(x,Ft.colorTexture,u.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(x))}let mt=S[ot];mt===void 0&&(mt=new Ai,mt.layers.enable(ot),mt.viewport=new be,S[ot]=mt),mt.matrix.fromArray(xt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(xt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(tt.x,tt.y,tt.width,tt.height),ot===0&&(A.matrix.copy(mt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),X===!0&&A.cameras.push(mt)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")){let ot=d.getDepthInformation(U[0]);ot&&ot.isValid&&ot.texture&&v.init(t,ot,s.renderState)}}for(let U=0;U<b.length;U++){let X=y[U],K=b[U];X!==null&&K!==void 0&&K.update(X,L,h||o)}Mt&&Mt(B,L),L.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:L}),f=null}let re=new Ip;re.setAnimationLoop(kt),this.setAnimationLoop=function(B){Mt=B},this.dispose=function(){}}},er=new Rn,jx=new Le;function Qx(n,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,Rp(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,x,b,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),d(_,m)):m.isMeshPhongMaterial?(r(_,m),c(_,m)):m.isMeshStandardMaterial?(r(_,m),u(_,m),m.isMeshPhysicalMaterial&&p(_,m,y)):m.isMeshMatcapMaterial?(r(_,m),f(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),v(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,x,b):m.isSpriteMaterial?h(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Si&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Si&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let x=t.get(m),b=x.envMap,y=x.envMapRotation;b&&(_.envMap.value=b,er.copy(y),er.x*=-1,er.y*=-1,er.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),_.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(er)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,x,b){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*x,_.scale.value=b*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function d(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function u(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,x){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Si&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function f(_,m){m.matcap&&(_.matcap.value=m.matcap)}function v(_,m){let x=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tb(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let y=b.program;i.uniformBlockBinding(x,y)}function h(x,b){let y=s[x.id];y===void 0&&(f(x),y=c(x),s[x.id]=y,x.addEventListener("dispose",_));let R=b.program;i.updateUBOMapping(x,R);let T=t.render.frame;r[x.id]!==T&&(u(x),r[x.id]=T)}function c(x){let b=d();x.__bindingPointIndex=b;let y=n.createBuffer(),R=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let b=s[x.id],y=x.uniforms,R=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,E=y.length;T<E;T++){let I=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,A=I.length;S<A;S++){let P=I[S];if(p(P,T,S,R)===!0){let k=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],G=0;for(let nt=0;nt<O.length;nt++){let J=O[nt],lt=v(J);typeof J=="number"||typeof J=="boolean"?(P.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,k+G,P.__data)):J.isMatrix3?(P.__data[0]=J.elements[0],P.__data[1]=J.elements[1],P.__data[2]=J.elements[2],P.__data[3]=0,P.__data[4]=J.elements[3],P.__data[5]=J.elements[4],P.__data[6]=J.elements[5],P.__data[7]=0,P.__data[8]=J.elements[6],P.__data[9]=J.elements[7],P.__data[10]=J.elements[8],P.__data[11]=0):(J.toArray(P.__data,G),G+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,b,y,R){let T=x.value,E=b+"_"+y;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{let I=R[E];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[E]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function f(x){let b=x.uniforms,y=0,R=16;for(let E=0,I=b.length;E<I;E++){let S=Array.isArray(b[E])?b[E]:[b[E]];for(let A=0,P=S.length;A<P;A++){let k=S[A],O=Array.isArray(k.value)?k.value:[k.value];for(let G=0,nt=O.length;G<nt;G++){let J=O[G],lt=v(J),$=y%R,ct=$%lt.boundary,yt=$+ct;y+=ct,yt!==0&&R-yt<lt.storage&&(y+=R-yt),k.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=lt.storage}}}let T=y%R;return T>0&&(y+=R-T),x.__size=y,x.__cache={},this}function v(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function _(x){let b=x.target;b.removeEventListener("dispose",_);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(let x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:h,dispose:m}}var Jl=class{constructor(t={}){let{canvas:e=sv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let f=new Uint32Array(4),v=new Int32Array(4),_=null,m=null,x=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=ws,this.toneMappingExposure=1;let y=this,R=!1,T=0,E=0,I=null,S=-1,A=null,P=new be,k=new be,O=null,G=new le(0),nt=0,J=e.width,lt=e.height,$=1,ct=null,yt=null,Mt=new be(0,0,J,lt),kt=new be(0,0,J,lt),re=!1,B=new $o,L=!1,U=!1,X=new Le,K=new Le,ot=new F,xt=new be,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function Ft(){return I===null?$:1}let N=i;function pe(w,V){return e.getContext(w,V)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pu}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",bt,!1),N===null){let V="webgl2";if(N=pe(V,w),N===null)throw pe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let wt,Bt,Tt,ce,zt,C,M,W,st,at,it,It,pt,Et,ne,ut,Ct,Vt,Gt,Rt,oe,_t,$t,D;function vt(){wt=new _0(N),wt.init(),_t=new Jx(N,wt),Bt=new h0(N,wt,t,_t),Tt=new qx(N,wt),Bt.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),ce=new y0(N),zt=new Px,C=new Yx(N,wt,Tt,zt,Bt,_t,ce),M=new f0(y),W=new m0(y),st=new Tv(N),$t=new l0(N,st),at=new v0(N,st,ce,$t),it=new b0(N,at,st,ce),Gt=new x0(N,Bt,C),ut=new u0(zt),It=new Bx(y,M,W,wt,Bt,$t,ut),pt=new Qx(y,zt),Et=new Dx,ne=new Ox(wt),Vt=new a0(y,M,W,Tt,it,p,l),Ct=new Gx(y,it,Bt),D=new tb(N,ce,Bt,Tt),Rt=new c0(N,wt,ce),oe=new g0(N,wt,ce),ce.programs=It.programs,y.capabilities=Bt,y.extensions=wt,y.properties=zt,y.renderLists=Et,y.shadowMap=Ct,y.state=Tt,y.info=ce}vt();let Q=new yu(y,N);this.xr=Q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(J,lt,!1))},this.getSize=function(w){return w.set(J,lt)},this.setSize=function(w,V,Y=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,lt=V,e.width=Math.floor(w*$),e.height=Math.floor(V*$),Y===!0&&(e.style.width=w+"px",e.style.height=V+"px"),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(J*$,lt*$).floor()},this.setDrawingBufferSize=function(w,V,Y){J=w,lt=V,$=Y,e.width=Math.floor(w*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,w,V)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,V,Y,Z){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,V,Y,Z),Tt.viewport(P.copy(Mt).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,V,Y,Z){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,V,Y,Z),Tt.scissor(k.copy(kt).multiplyScalar($).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){Tt.setScissorTest(re=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){yt=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(w=!0,V=!0,Y=!0){let Z=0;if(w){let z=!1;if(I!==null){let ft=I.texture.format;z=ft===Ou||ft===zu||ft===Vu}if(z){let ft=I.texture.type,At=ft===rs||ft===lr||ft===Yo||ft===eo||ft===Fu||ft===Uu,Pt=Vt.getClearColor(),Lt=Vt.getClearAlpha(),Kt=Pt.r,te=Pt.g,Dt=Pt.b;At?(f[0]=Kt,f[1]=te,f[2]=Dt,f[3]=Lt,N.clearBufferuiv(N.COLOR,0,f)):(v[0]=Kt,v[1]=te,v[2]=Dt,v[3]=Lt,N.clearBufferiv(N.COLOR,0,v))}else Z|=N.COLOR_BUFFER_BIT}V&&(Z|=N.DEPTH_BUFFER_BIT),Y&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Et.dispose(),ne.dispose(),zt.dispose(),M.dispose(),W.dispose(),it.dispose(),$t.dispose(),D.dispose(),It.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Xu),Q.removeEventListener("sessionend",Yu),Rs.stop()};function rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=ce.autoReset,V=Ct.enabled,Y=Ct.autoUpdate,Z=Ct.needsUpdate,z=Ct.type;vt(),ce.autoReset=w,Ct.enabled=V,Ct.autoUpdate=Y,Ct.needsUpdate=Z,Ct.type=z}function bt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qt(w){let V=w.target;V.removeEventListener("dispose",Qt),Ie(V)}function Ie(w){ii(w),zt.remove(w)}function ii(w){let V=zt.get(w).programs;V!==void 0&&(V.forEach(function(Y){It.releaseProgram(Y)}),w.isShaderMaterial&&It.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,Y,Z,z,ft){V===null&&(V=tt);let At=z.isMesh&&z.matrixWorld.determinant()<0,Pt=Zp(w,V,Y,Z,z);Tt.setMaterial(Z,At);let Lt=Y.index,Kt=1;if(Z.wireframe===!0){if(Lt=at.getWireframeAttribute(Y),Lt===void 0)return;Kt=2}let te=Y.drawRange,Dt=Y.attributes.position,de=te.start*Kt,Se=(te.start+te.count)*Kt;ft!==null&&(de=Math.max(de,ft.start*Kt),Se=Math.min(Se,(ft.start+ft.count)*Kt)),Lt!==null?(de=Math.max(de,0),Se=Math.min(Se,Lt.count)):Dt!=null&&(de=Math.max(de,0),Se=Math.min(Se,Dt.count));let we=Se-de;if(we<0||we===1/0)return;$t.setup(z,Z,Pt,Y,Lt);let _i,_e=Rt;if(Lt!==null&&(_i=st.get(Lt),_e=oe,_e.setIndex(_i)),z.isMesh)Z.wireframe===!0?(Tt.setLineWidth(Z.wireframeLinewidth*Ft()),_e.setMode(N.LINES)):_e.setMode(N.TRIANGLES);else if(z.isLine){let Nt=Z.linewidth;Nt===void 0&&(Nt=1),Tt.setLineWidth(Nt*Ft()),z.isLineSegments?_e.setMode(N.LINES):z.isLineLoop?_e.setMode(N.LINE_LOOP):_e.setMode(N.LINE_STRIP)}else z.isPoints?_e.setMode(N.POINTS):z.isSprite&&_e.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)_e.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))_e.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Nt=z._multiDrawStarts,Ln=z._multiDrawCounts,ve=z._multiDrawCount,ji=Lt?st.get(Lt).bytesPerElement:1,pr=zt.get(Z).currentProgram.getUniforms();for(let wi=0;wi<ve;wi++)pr.setValue(N,"_gl_DrawID",wi),_e.render(Nt[wi]/ji,Ln[wi])}else if(z.isInstancedMesh)_e.renderInstances(de,we,z.count);else if(Y.isInstancedBufferGeometry){let Nt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ln=Math.min(Y.instanceCount,Nt);_e.renderInstances(de,we,Ln)}else _e.render(de,we)};function ge(w,V,Y){w.transparent===!0&&w.side===Ji&&w.forceSinglePass===!1?(w.side=Si,w.needsUpdate=!0,sa(w,V,Y),w.side=Ts,w.needsUpdate=!0,sa(w,V,Y),w.side=Ji):sa(w,V,Y)}this.compile=function(w,V,Y=null){Y===null&&(Y=w),m=ne.get(Y),m.init(V),b.push(m),Y.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),w!==Y&&w.traverseVisible(function(z){z.isLight&&z.layers.test(V.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let Z=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ft=z.material;if(ft)if(Array.isArray(ft))for(let At=0;At<ft.length;At++){let Pt=ft[At];ge(Pt,Y,z),Z.add(Pt)}else ge(ft,Y,z),Z.add(ft)}),b.pop(),m=null,Z},this.compileAsync=function(w,V,Y=null){let Z=this.compile(w,V,Y);return new Promise(z=>{function ft(){if(Z.forEach(function(At){zt.get(At).currentProgram.isReady()&&Z.delete(At)}),Z.size===0){z(w);return}setTimeout(ft,10)}wt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ki=null;function Pn(w){Ki&&Ki(w)}function Xu(){Rs.stop()}function Yu(){Rs.start()}let Rs=new Ip;Rs.setAnimationLoop(Pn),typeof self<"u"&&Rs.setContext(self),this.setAnimationLoop=function(w){Ki=w,Q.setAnimationLoop(w),w===null?Rs.stop():Rs.start()},Q.addEventListener("sessionstart",Xu),Q.addEventListener("sessionend",Yu),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(V),V=Q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,V,I),m=ne.get(w,b.length),m.init(V),b.push(m),K.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),B.setFromProjectionMatrix(K),U=this.localClippingEnabled,L=ut.init(this.clippingPlanes,U),_=Et.get(w,x.length),_.init(),x.push(_),Q.enabled===!0&&Q.isPresenting===!0){let ft=y.xr.getDepthSensingMesh();ft!==null&&rc(ft,V,-1/0,y.sortObjects)}rc(w,V,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(ct,yt),mt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,mt&&Vt.addToRenderList(_,w),this.info.render.frame++,L===!0&&ut.beginShadows();let Y=m.state.shadowsArray;Ct.render(Y,w,V),L===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=_.opaque,z=_.transmissive;if(m.setupLights(),V.isArrayCamera){let ft=V.cameras;if(z.length>0)for(let At=0,Pt=ft.length;At<Pt;At++){let Lt=ft[At];$u(Z,z,w,Lt)}mt&&Vt.render(w);for(let At=0,Pt=ft.length;At<Pt;At++){let Lt=ft[At];Ju(_,w,Lt,Lt.viewport)}}else z.length>0&&$u(Z,z,w,V),mt&&Vt.render(w),Ju(_,w,V);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(y,w,V),$t.resetDefaultState(),S=-1,A=null,b.pop(),b.length>0?(m=b[b.length-1],L===!0&&ut.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?_=x[x.length-1]:_=null};function rc(w,V,Y,Z){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||B.intersectsSprite(w)){Z&&xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);let At=it.update(w),Pt=w.material;Pt.visible&&_.push(w,At,Pt,Y,xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||B.intersectsObject(w))){let At=it.update(w),Pt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),xt.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),xt.copy(At.boundingSphere.center)),xt.applyMatrix4(w.matrixWorld).applyMatrix4(K)),Array.isArray(Pt)){let Lt=At.groups;for(let Kt=0,te=Lt.length;Kt<te;Kt++){let Dt=Lt[Kt],de=Pt[Dt.materialIndex];de&&de.visible&&_.push(w,At,de,Y,xt.z,Dt)}}else Pt.visible&&_.push(w,At,Pt,Y,xt.z,null)}}let ft=w.children;for(let At=0,Pt=ft.length;At<Pt;At++)rc(ft[At],V,Y,Z)}function Ju(w,V,Y,Z){let z=w.opaque,ft=w.transmissive,At=w.transparent;m.setupLightsView(Y),L===!0&&ut.setGlobalState(y.clippingPlanes,Y),Z&&Tt.viewport(P.copy(Z)),z.length>0&&na(z,V,Y),ft.length>0&&na(ft,V,Y),At.length>0&&na(At,V,Y),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function $u(w,V,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new os(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float")?Qo:rs,minFilter:ar,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let ft=m.state.transmissionRenderTarget[Z.id],At=Z.viewport||P;ft.setSize(At.z,At.w);let Pt=y.getRenderTarget();y.setRenderTarget(ft),y.getClearColor(G),nt=y.getClearAlpha(),nt<1&&y.setClearColor(16777215,.5),y.clear(),mt&&Vt.render(Y);let Lt=y.toneMapping;y.toneMapping=ws;let Kt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),L===!0&&ut.setGlobalState(y.clippingPlanes,Z),na(w,Y,Z),C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft),wt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Dt=0,de=V.length;Dt<de;Dt++){let Se=V[Dt],we=Se.object,_i=Se.geometry,_e=Se.material,Nt=Se.group;if(_e.side===Ji&&we.layers.test(Z.layers)){let Ln=_e.side;_e.side=Si,_e.needsUpdate=!0,Zu(we,Y,Z,_i,_e,Nt),_e.side=Ln,_e.needsUpdate=!0,te=!0}}te===!0&&(C.updateMultisampleRenderTarget(ft),C.updateRenderTargetMipmap(ft))}y.setRenderTarget(Pt),y.setClearColor(G,nt),Kt!==void 0&&(Z.viewport=Kt),y.toneMapping=Lt}function na(w,V,Y){let Z=V.isScene===!0?V.overrideMaterial:null;for(let z=0,ft=w.length;z<ft;z++){let At=w[z],Pt=At.object,Lt=At.geometry,Kt=Z===null?At.material:Z,te=At.group;Pt.layers.test(Y.layers)&&Zu(Pt,V,Y,Lt,Kt,te)}}function Zu(w,V,Y,Z,z,ft){w.onBeforeRender(y,V,Y,Z,z,ft),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(y,V,Y,Z,w,ft),z.transparent===!0&&z.side===Ji&&z.forceSinglePass===!1?(z.side=Si,z.needsUpdate=!0,y.renderBufferDirect(Y,V,Z,z,w,ft),z.side=Ts,z.needsUpdate=!0,y.renderBufferDirect(Y,V,Z,z,w,ft),z.side=Ji):y.renderBufferDirect(Y,V,Z,z,w,ft),w.onAfterRender(y,V,Y,Z,z,ft)}function sa(w,V,Y){V.isScene!==!0&&(V=tt);let Z=zt.get(w),z=m.state.lights,ft=m.state.shadowsArray,At=z.state.version,Pt=It.getParameters(w,z.state,ft,V,Y),Lt=It.getProgramCacheKey(Pt),Kt=Z.programs;Z.environment=w.isMeshStandardMaterial?V.environment:null,Z.fog=V.fog,Z.envMap=(w.isMeshStandardMaterial?W:M).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",Qt),Kt=new Map,Z.programs=Kt);let te=Kt.get(Lt);if(te!==void 0){if(Z.currentProgram===te&&Z.lightsStateVersion===At)return ju(w,Pt),te}else Pt.uniforms=It.getUniforms(w),w.onBeforeCompile(Pt,y),te=It.acquireProgram(Pt,Lt),Kt.set(Lt,te),Z.uniforms=Pt.uniforms;let Dt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=ut.uniform),ju(w,Pt),Z.needsLights=jp(w),Z.lightsStateVersion=At,Z.needsLights&&(Dt.ambientLightColor.value=z.state.ambient,Dt.lightProbe.value=z.state.probe,Dt.directionalLights.value=z.state.directional,Dt.directionalLightShadows.value=z.state.directionalShadow,Dt.spotLights.value=z.state.spot,Dt.spotLightShadows.value=z.state.spotShadow,Dt.rectAreaLights.value=z.state.rectArea,Dt.ltc_1.value=z.state.rectAreaLTC1,Dt.ltc_2.value=z.state.rectAreaLTC2,Dt.pointLights.value=z.state.point,Dt.pointLightShadows.value=z.state.pointShadow,Dt.hemisphereLights.value=z.state.hemi,Dt.directionalShadowMap.value=z.state.directionalShadowMap,Dt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Dt.spotShadowMap.value=z.state.spotShadowMap,Dt.spotLightMatrix.value=z.state.spotLightMatrix,Dt.spotLightMap.value=z.state.spotLightMap,Dt.pointShadowMap.value=z.state.pointShadowMap,Dt.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=te,Z.uniformsList=null,te}function Ku(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=Kr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function ju(w,V){let Y=zt.get(w);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Zp(w,V,Y,Z,z){V.isScene!==!0&&(V=tt),C.resetTextureUnits();let ft=V.fog,At=Z.isMeshStandardMaterial?V.environment:null,Pt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:co,Lt=(Z.isMeshStandardMaterial?W:M).get(Z.envMap||At),Kt=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,te=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Dt=!!Y.morphAttributes.position,de=!!Y.morphAttributes.normal,Se=!!Y.morphAttributes.color,we=ws;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(we=y.toneMapping);let _i=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=_i!==void 0?_i.length:0,Nt=zt.get(Z),Ln=m.state.lights;if(L===!0&&(U===!0||w!==A)){let Ui=w===A&&Z.id===S;ut.setState(Z,w,Ui)}let ve=!1;Z.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ln.state.version||Nt.outputColorSpace!==Pt||z.isBatchedMesh&&Nt.batching===!1||!z.isBatchedMesh&&Nt.batching===!0||z.isBatchedMesh&&Nt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Nt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Nt.instancing===!1||!z.isInstancedMesh&&Nt.instancing===!0||z.isSkinnedMesh&&Nt.skinning===!1||!z.isSkinnedMesh&&Nt.skinning===!0||z.isInstancedMesh&&Nt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Nt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Nt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Nt.instancingMorph===!1&&z.morphTexture!==null||Nt.envMap!==Lt||Z.fog===!0&&Nt.fog!==ft||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ut.numPlanes||Nt.numIntersection!==ut.numIntersection)||Nt.vertexAlphas!==Kt||Nt.vertexTangents!==te||Nt.morphTargets!==Dt||Nt.morphNormals!==de||Nt.morphColors!==Se||Nt.toneMapping!==we||Nt.morphTargetsCount!==_e)&&(ve=!0):(ve=!0,Nt.__version=Z.version);let ji=Nt.currentProgram;ve===!0&&(ji=sa(Z,V,z));let pr=!1,wi=!1,mo=!1,Te=ji.getUniforms(),mn=Nt.uniforms;if(Tt.useProgram(ji.program)&&(pr=!0,wi=!0,mo=!0),Z.id!==S&&(S=Z.id,wi=!0),pr||A!==w){Tt.buffers.depth.getReversed()?(X.copy(w.projectionMatrix),ov(X),av(X),Te.setValue(N,"projectionMatrix",X)):Te.setValue(N,"projectionMatrix",w.projectionMatrix),Te.setValue(N,"viewMatrix",w.matrixWorldInverse);let ls=Te.map.cameraPosition;ls!==void 0&&ls.setValue(N,ot.setFromMatrixPosition(w.matrixWorld)),Bt.logarithmicDepthBuffer&&Te.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Te.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,wi=!0,mo=!0)}if(z.isSkinnedMesh){Te.setOptional(N,z,"bindMatrix"),Te.setOptional(N,z,"bindMatrixInverse");let Ui=z.skeleton;Ui&&(Ui.boneTexture===null&&Ui.computeBoneTexture(),Te.setValue(N,"boneTexture",Ui.boneTexture,C))}z.isBatchedMesh&&(Te.setOptional(N,z,"batchingTexture"),Te.setValue(N,"batchingTexture",z._matricesTexture,C),Te.setOptional(N,z,"batchingIdTexture"),Te.setValue(N,"batchingIdTexture",z._indirectTexture,C),Te.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Te.setValue(N,"batchingColorTexture",z._colorsTexture,C));let _o=Y.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0)&&Gt.update(z,Y,ji),(wi||Nt.receiveShadow!==z.receiveShadow)&&(Nt.receiveShadow=z.receiveShadow,Te.setValue(N,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(mn.envMap.value=Lt,mn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&V.environment!==null&&(mn.envMapIntensity.value=V.environmentIntensity),wi&&(Te.setValue(N,"toneMappingExposure",y.toneMappingExposure),Nt.needsLights&&Kp(mn,mo),ft&&Z.fog===!0&&pt.refreshFogUniforms(mn,ft),pt.refreshMaterialUniforms(mn,Z,$,lt,m.state.transmissionRenderTarget[w.id]),Kr.upload(N,Ku(Nt),mn,C)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Kr.upload(N,Ku(Nt),mn,C),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Te.setValue(N,"center",z.center),Te.setValue(N,"modelViewMatrix",z.modelViewMatrix),Te.setValue(N,"normalMatrix",z.normalMatrix),Te.setValue(N,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Ui=Z.uniformsGroups;for(let ls=0,cs=Ui.length;ls<cs;ls++){let Qu=Ui[ls];D.update(Qu,ji),D.bind(Qu,ji)}}return ji}function Kp(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function jp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,V,Y){zt.get(w.texture).__webglTexture=V,zt.get(w.depthTexture).__webglTexture=Y;let Z=zt.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,V){let Y=zt.get(w);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,Y=0){I=w,T=V,E=Y;let Z=!0,z=null,ft=!1,At=!1;if(w){let Lt=zt.get(w);if(Lt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1;else if(Lt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Lt.__hasExternalTextures)C.rebindTextures(w,zt.get(w.texture).__webglTexture,zt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Dt=w.depthTexture;if(Lt.__boundDepthTexture!==Dt){if(Dt!==null&&zt.has(Dt)&&(w.width!==Dt.image.width||w.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}let Kt=w.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(At=!0);let te=zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[V])?z=te[V][Y]:z=te[V],ft=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?z=zt.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?z=te[Y]:z=te,P.copy(w.viewport),k.copy(w.scissor),O=w.scissorTest}else P.copy(Mt).multiplyScalar($).floor(),k.copy(kt).multiplyScalar($).floor(),O=re;if(Tt.bindFramebuffer(N.FRAMEBUFFER,z)&&Z&&Tt.drawBuffers(w,z),Tt.viewport(P),Tt.scissor(k),Tt.setScissorTest(O),ft){let Lt=zt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Lt.__webglTexture,Y)}else if(At){let Lt=zt.get(w.texture),Kt=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Lt.__webglTexture,Y||0,Kt)}S=-1},this.readRenderTargetPixels=function(w,V,Y,Z,z,ft,At){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){Tt.bindFramebuffer(N.FRAMEBUFFER,Pt);try{let Lt=w.texture,Kt=Lt.format,te=Lt.type;if(!Bt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-Z&&Y>=0&&Y<=w.height-z&&N.readPixels(V,Y,Z,z,_t.convert(Kt),_t.convert(te),ft)}finally{let Lt=I!==null?zt.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,V,Y,Z,z,ft,At){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){let Lt=w.texture,Kt=Lt.format,te=Lt.type;if(!Bt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=w.width-Z&&Y>=0&&Y<=w.height-z){Tt.bindFramebuffer(N.FRAMEBUFFER,Pt);let Dt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Dt),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),N.readPixels(V,Y,Z,z,_t.convert(Kt),_t.convert(te),0);let de=I!==null?zt.get(I).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,de);let Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rv(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Dt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.deleteBuffer(Dt),N.deleteSync(Se),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,V=null,Y=0){w.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1]);let Z=Math.pow(2,-Y),z=Math.floor(w.image.width*Z),ft=Math.floor(w.image.height*Z),At=V!==null?V.x:0,Pt=V!==null?V.y:0;C.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,At,Pt,z,ft),Tt.unbindTexture()},this.copyTextureToTexture=function(w,V,Y=null,Z=null,z=0){w.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],V=arguments[2],z=arguments[3]||0,Y=null);let ft,At,Pt,Lt,Kt,te,Dt,de,Se,we=w.isCompressedTexture?w.mipmaps[z]:w.image;Y!==null?(ft=Y.max.x-Y.min.x,At=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Lt=Y.min.x,Kt=Y.min.y,te=Y.isBox3?Y.min.z:0):(ft=we.width,At=we.height,Pt=we.depth||1,Lt=0,Kt=0,te=0),Z!==null?(Dt=Z.x,de=Z.y,Se=Z.z):(Dt=0,de=0,Se=0);let _i=_t.convert(V.format),_e=_t.convert(V.type),Nt;V.isData3DTexture?(C.setTexture3D(V,0),Nt=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),Nt=N.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),Nt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let Ln=N.getParameter(N.UNPACK_ROW_LENGTH),ve=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ji=N.getParameter(N.UNPACK_SKIP_PIXELS),pr=N.getParameter(N.UNPACK_SKIP_ROWS),wi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,we.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,we.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Lt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Kt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,te);let mo=w.isDataArrayTexture||w.isData3DTexture,Te=V.isDataArrayTexture||V.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let mn=zt.get(w),_o=zt.get(V),Ui=zt.get(mn.__renderTarget),ls=zt.get(_o.__renderTarget);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,Ui.__webglFramebuffer),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let cs=0;cs<Pt;cs++)mo&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(w).__webglTexture,z,te+cs),w.isDepthTexture?(Te&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(V).__webglTexture,z,Se+cs),N.blitFramebuffer(Lt,Kt,ft,At,Dt,de,ft,At,N.DEPTH_BUFFER_BIT,N.NEAREST)):Te?N.copyTexSubImage3D(Nt,z,Dt,de,Se+cs,Lt,Kt,ft,At):N.copyTexSubImage2D(Nt,z,Dt,de,Se+cs,Lt,Kt,ft,At);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Te?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Nt,z,Dt,de,Se,ft,At,Pt,_i,_e,we.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Nt,z,Dt,de,Se,ft,At,Pt,_i,we.data):N.texSubImage3D(Nt,z,Dt,de,Se,ft,At,Pt,_i,_e,we):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,Dt,de,ft,At,_i,_e,we.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,Dt,de,we.width,we.height,_i,we.data):N.texSubImage2D(N.TEXTURE_2D,z,Dt,de,ft,At,_i,_e,we);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ln),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ji),N.pixelStorei(N.UNPACK_SKIP_ROWS,pr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,wi),z===0&&V.generateMipmaps&&N.generateMipmap(Nt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,V,Y=null,Z=null,z=0){return w.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],V=arguments[3],z=arguments[4]||0),Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,V,Y,Z,z)},this.initRenderTarget=function(w){zt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){T=0,E=0,I=null,Tt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var $l=class extends mi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var oo=class extends Di{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class n extends as{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],p=[],f=0,v=[],_=i/2,m=0;x(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new pi(d,3)),this.setAttribute("normal",new pi(u,3)),this.setAttribute("uv",new pi(p,2));function x(){let y=new F,R=new F,T=0,E=(e-t)/i;for(let I=0;I<=r;I++){let S=[],A=I/r,P=A*(e-t)+t;for(let k=0;k<=s;k++){let O=k/s,G=O*l+a,nt=Math.sin(G),J=Math.cos(G);R.x=P*nt,R.y=-A*i+_,R.z=P*J,d.push(R.x,R.y,R.z),y.set(nt,E,J).normalize(),u.push(y.x,y.y,y.z),p.push(O,1-A),S.push(f++)}v.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let A=v[S][I],P=v[S+1][I],k=v[S+1][I+1],O=v[S][I+1];(t>0||S!==0)&&(c.push(A,P,O),T+=3),(e>0||S!==r-1)&&(c.push(P,k,O),T+=3)}h.addGroup(m,T,0),m+=T}function b(y){let R=f,T=new fe,E=new F,I=0,S=y===!0?t:e,A=y===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,_*A,0),u.push(0,A,0),p.push(.5,.5),f++;let P=f;for(let k=0;k<=s;k++){let G=k/s*l+a,nt=Math.cos(G),J=Math.sin(G);E.x=S*J,E.y=_*A,E.z=S*nt,d.push(E.x,E.y,E.z),u.push(0,A,0),T.x=nt*.5+.5,T.y=J*.5*A+.5,p.push(T.x,T.y),f++}for(let k=0;k<s;k++){let O=R+k,G=P+k;y===!0?c.push(G,G+1,O):c.push(G+1,G,O),I+=3}h.addGroup(m,I,y===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zo=class n extends Ni{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ke=class n extends as{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,c=[],d=new F,u=new F,p=[],f=[],v=[],_=[];for(let m=0;m<=i;m++){let x=[],b=m/i,y=0;m===0&&o===0?y=.5/e:m===i&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let T=R/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+b*a),f.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),_.push(T+y,1-b),x.push(h++)}c.push(x)}for(let m=0;m<i;m++)for(let x=0;x<e;x++){let b=c[m][x+1],y=c[m][x],R=c[m+1][x],T=c[m+1][x+1];(m!==0||o>0)&&p.push(b,y,T),(m!==i-1||l<Math.PI)&&p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new pi(f,3)),this.setAttribute("normal",new pi(v,3)),this.setAttribute("uv",new pi(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ao=class extends hr{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wp,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ko=class extends ao{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return di(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Il(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function eb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var lo=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xu=class extends lo{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dd,endingEnd:dd}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pd:r=t,a=2*e-i;break;case md:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case pd:o=t,l=2*i-e;break;case md:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-e)/(s-e),v=f*f,_=v*f,m=-u*_+2*u*v-u*f,x=(1+u)*_+(-1.5-2*u)*v+(-.5+u)*f+1,b=(-1-p)*_+(1.5+p)*v+.5*f,y=p*_-p*v;for(let R=0;R!==a;++R)r[R]=m*o[c+R]+x*o[h+R]+b*o[l+R]+y*o[d+R];return r}},bu=class extends lo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(i-e)/(s-e),d=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*d+o[l+u]*c;return r}},Au=class extends lo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Il(e,this.TimeBufferType),this.values=Il(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Il(t.times,Array),values:Il(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Au(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fl:e=this.InterpolantFactoryMethodDiscrete;break;case eu:e=this.InterpolantFactoryMethodLinear;break;case Oc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fl;case this.InterpolantFactoryMethodLinear:return eu;case this.InterpolantFactoryMethodSmooth:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&eb(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Oc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let f=0;f!==i;++f){let v=e[d+f];if(v!==e[u+f]||v!==e[p+f]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=eu;var ur=class extends pn{constructor(t,e,i){super(t,e,i)}};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Fl;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends pn{};Mu.prototype.ValueTypeName="color";var Su=class extends pn{};Su.prototype.ValueTypeName="number";var wu=class extends lo{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let c=h+a;h!==c;h+=4)Cs.slerpFlat(r,0,o,h-a,o,h,l);return r}},Zl=class extends pn{InterpolantFactoryMethodLinear(t){return new wu(this.times,this.values,this.getValueSize(),t)}};Zl.prototype.ValueTypeName="quaternion";Zl.prototype.InterpolantFactoryMethodSmooth=void 0;var fr=class extends pn{constructor(t,e,i){super(t,e,i)}};fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Fl;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;var Tu=class extends pn{};Tu.prototype.ValueTypeName="vector";var Eu=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let p=h[d],f=h[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return f}return null}}},ib=new Eu,Cu=class{constructor(t){this.manager=t!==void 0?t:ib,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cu.DEFAULT_MATERIAL_NAME="__DEFAULT";var jo=class extends mi{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Kl=class extends jo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mi.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},mh=new Le,cp=new F,hp=new F,jl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;cp.setFromMatrixPosition(t.matrixWorld),e.position.copy(cp),hp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hp),e.updateMatrixWorld(),mh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var up=new Le,Ho=new F,_h=new F,Ru=class extends jl{constructor(){super(new Ai(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ho.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ho),_h.copy(i.position),_h.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(_h),i.updateMatrixWorld(),s.makeTranslation(-Ho.x,-Ho.y,-Ho.z),up.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(up)}},Ql=class extends jo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ru}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Iu=class extends jl{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tc=class extends jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mi.DEFAULT_UP),this.updateMatrix(),this.target=new mi,this.shadow=new Iu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Hu="\\[\\]\\.:\\/",nb=new RegExp("["+Hu+"]","g"),Gu="[^"+Hu+"]",sb="[^"+Hu.replace("\\.","")+"]",rb=/((?:WC+[\/:])*)/.source.replace("WC",Gu),ob=/(WCOD+)?/.source.replace("WCOD",sb),ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gu),lb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gu),cb=new RegExp("^"+rb+ob+ab+lb+"$"),hb=["material","materials","bones","map"],Bu=class{constructor(t,e,i){let s=i||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Re=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nb,"")}static parseTrackName(t){let e=cb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);hb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Bu;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);var ea=new F;function Zi(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ea.copy(t),ea[i]=0,ea.normalize();let h=.5*o/(o+a),c=1-ea.angleTo(n)/l;return Math.sign(ea[e])===1?c*h:a/(o+a)+h+h*(1-c)}var uo=class extends dn{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new F,l=new F,h=new F(t,e,i).divideScalar(2).subScalar(r),c=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,p=c.length/6,f=new F,v=.5/s;for(let _=0,m=0;_<c.length;_+=3,m+=2)switch(a.fromArray(c,_),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),c[_+0]=h.x*Math.sign(a.x)+l.x*r,c[_+1]=h.y*Math.sign(a.y)+l.y*r,c[_+2]=h.z*Math.sign(a.z)+l.z*r,d[_+0]=l.x,d[_+1]=l.y,d[_+2]=l.z,Math.floor(_/p)){case 0:f.set(1,0,0),u[m+0]=Zi(f,l,"z","y",r,i),u[m+1]=1-Zi(f,l,"y","z",r,e);break;case 1:f.set(-1,0,0),u[m+0]=1-Zi(f,l,"z","y",r,i),u[m+1]=1-Zi(f,l,"y","z",r,e);break;case 2:f.set(0,1,0),u[m+0]=1-Zi(f,l,"x","z",r,t),u[m+1]=Zi(f,l,"z","x",r,i);break;case 3:f.set(0,-1,0),u[m+0]=1-Zi(f,l,"x","z",r,t),u[m+1]=1-Zi(f,l,"z","x",r,i);break;case 4:f.set(0,0,1),u[m+0]=1-Zi(f,l,"x","y",r,t),u[m+1]=1-Zi(f,l,"y","x",r,e);break;case 5:f.set(0,0,-1),u[m+0]=Zi(f,l,"x","y",r,t),u[m+1]=1-Zi(f,l,"y","x",r,e);break}}};var Ye={grass:4151878,grassDark:3097910,earth:3877922,stone:7239040,glass:10476016,slate:3817290,warm:16757575,band:5914155,stem:7029795,accent:15769648,bumper:9056042,wool:15986660,face:2761504,cloak:3885708,skin:15780256,pumpkin:15233564,roof:4861733,hut:5913388},fo=11,Ht=()=>(fo=fo*1664525+1013904223>>>0,fo/4294967296);function Fp(n){let t=new Jl({antialias:!0,alpha:!1,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.shadowMap.enabled=!0,t.shadowMap.type=Lu,t.outputColorSpace=ai,t.toneMapping=Du,t.toneMappingExposure=1.1,n.prepend(t.domElement);let e=new $l,i=new ro(-1,1,1,-1,-50,100),s=new F(.6124,.5,.6124),r=new Kl(4872842,2760212,1.1);e.add(r);let o=new tc(11188479,1.4);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-7,right:7,top:7,bottom:-7,near:1,far:40}),o.shadow.radius=4,o.shadow.bias=-4e-4,o.shadow.normalBias=.02,e.add(o),e.add(o.target);let a=(B,L={})=>new ao({color:B,roughness:.85,metalness:0,...L}),l={};function h(B){if(l[B])return l[B];let L=document.createElement("canvas");L.width=L.height=256;let U=L.getContext("2d");U.fillStyle=B,U.fillRect(0,0,256,256);for(let K=0;K<90;K++){U.strokeStyle=`rgba(255,255,255,${.05+Ht()*.12})`,U.lineWidth=1+Ht()*2;let ot=Ht()*256;U.beginPath(),U.moveTo(-10,ot),U.bezierCurveTo(80,ot+Ht()*8-4,180,ot+Ht()*8-4,270,ot+Ht()*6-3),U.stroke()}for(let K=0;K<60;K++){U.strokeStyle=`rgba(60,30,8,${.04+Ht()*.1})`,U.lineWidth=1+Ht()*1.5;let ot=Ht()*256;U.beginPath(),U.moveTo(-10,ot),U.bezierCurveTo(80,ot+Ht()*6-3,180,ot+Ht()*6-3,270,ot+Ht()*6-3),U.stroke()}let X=new oo(L);return X.colorSpace=ai,X.wrapS=X.wrapT=Xo,X.anisotropy=4,l[B]=X}let c=B=>new ao({map:h(B),roughness:.8}),d={wood:()=>c("#8d6238"),stone:()=>a(Ye.stone,{roughness:.95}),glass:()=>new Ko({color:Ye.glass,transparent:!0,opacity:.4,roughness:.06,clearcoat:1,clearcoatRoughness:.05,side:Ji}),bumper:()=>a(Ye.bumper,{roughness:.5})};function u(B,L,U=0){let X=document.createElement("canvas");X.width=Math.max(4,B),X.height=Math.max(4,L);let K=X.getContext("2d"),ot=K.createLinearGradient(0,0,0,L);ot.addColorStop(0,"#0b1026"),ot.addColorStop(.55,"#1a2050"),ot.addColorStop(1,"#2a2340"),K.fillStyle=ot,K.fillRect(0,0,B,L),fo=5;for(let wt=0;wt<90;wt++){K.fillStyle=`rgba(255,255,255,${.25+Ht()*.6})`;let Bt=.6+Ht()*1.1;K.beginPath(),K.arc(Ht()*B,Ht()*L*.55,Bt,0,7),K.fill()}let xt=B*.78,tt=L*(B>L?.16:.13),mt=Math.min(B,L)*.07;K.save(),K.filter="blur(18px)",K.fillStyle="rgba(200,215,255,0.35)",K.beginPath(),K.arc(xt,tt,mt*1.9,0,7),K.fill(),K.restore(),K.fillStyle="#e8ecff",K.beginPath(),K.arc(xt,tt,mt,0,7),K.fill(),K.fillStyle="rgba(190,200,230,0.45)";for(let[wt,Bt,Tt]of[[-.3,-.2,.22],[.25,.3,.16],[.1,-.45,.1]])K.beginPath(),K.arc(xt+wt*mt,tt+Bt*mt,mt*Tt,0,7),K.fill();let Ft=L*(B>L?.58:.47);K.fillStyle="#121632",K.beginPath(),K.moveTo(0,L),K.lineTo(0,Ft+30);for(let wt=0;wt<=B+40;wt+=40){let Bt=Math.min(wt,B);K.lineTo(Bt,Ft+30-Math.sin(Bt*.013)*22-Math.sin(Bt*.041)*9)}K.lineTo(B,L),K.closePath(),K.fill(),fo=9;let N=[];for(let wt=20;wt<B-30;wt+=70+Ht()*60){let Bt=26+Ht()*22,Tt=22+Ht()*18,ce=Ft+26-Math.sin(wt*.013)*22-Math.sin(wt*.041)*9;N.push([wt,ce,Bt,Tt])}for(let[wt,Bt,Tt,ce]of N)K.fillStyle="#0d1028",K.fillRect(wt,Bt-ce,Tt,ce),K.beginPath(),K.moveTo(wt-3,Bt-ce),K.lineTo(wt+Tt/2,Bt-ce-12),K.lineTo(wt+Tt+3,Bt-ce),K.closePath(),K.fill();f.houses=N,f.horizon=Ft;let pe=new oo(X);return pe.colorSpace=ai,pe}function p(B){if(!f.houses)return;let L=e.background.image,U=L.getContext("2d");fo=13,f.houses.forEach(([X,K,ot,xt],tt)=>{tt/f.houses.length>B||(U.fillStyle="#ffcf7a",U.fillRect(X+5,K-xt+6,6,7),ot>36&&U.fillRect(X+ot-11,K-xt+6,6,7),U.save(),U.filter="blur(6px)",U.fillStyle="rgba(255,190,100,0.35)",U.fillRect(X+2,K-xt+2,ot-4,xt-4),U.restore())}),e.background.needsUpdate=!0}let f={level:null,group:null,boxes:new Map,ball:null,dots:[],bands:[],pouch:null,switchBtn:null,door:null,sheep:null,shepherd:null,lanternLight:null,ballLight:null,shards:[],confetti:[],shake:0,W:1,H:1,safe:{top:100,bottom:130,left:16,right:16},fitPts:[],t:0},v=new Mi;e.add(v);function _(B,L,U,X,K,ot,xt,tt,mt=.035){let Ft=new Jt(mt?new uo(K,ot,xt,2,mt):new dn(K,ot,xt),tt);return Ft.position.set(L+K/2,U+ot/2,X+xt/2),Ft.castShadow=Ft.receiveShadow=!0,B.add(Ft),Ft}function m(B,L){let U=new Jt(new Ni(B,B,1,10),L);return U.castShadow=!0,U}function x(B,L,U){let X=new F().subVectors(U,L);B.position.copy(L).add(U).multiplyScalar(.5),B.scale.set(1,Math.max(.001,X.length()),1),B.quaternion.setFromUnitVectors(new F(0,1,0),X.normalize())}function b(B,L,U,X,K){let ot=new Ql(Ye.warm,X,K,1.6);return ot.position.set(B,L,U),ot}function y(){let B=new Mi,L=a(Ye.wool,{roughness:1}),U=a(Ye.face,{roughness:.9}),X=new Jt(new ke(.34,18,14),L);X.scale.set(1.25,1,1),X.position.y=.46,X.castShadow=!0,B.add(X);for(let[tt,mt,Ft,N]of[[.22,.12,.2,.2],[-.25,.14,-.18,.2],[.05,.26,-.05,.22],[-.2,.05,.22,.18],[.25,.05,-.2,.17]]){let pe=new Jt(new ke(N,12,10),L);pe.position.set(tt,.46+mt,Ft),pe.castShadow=!0,B.add(pe)}let K=new Jt(new ke(.17,14,12),U);K.scale.set(1,.95,1.2),K.position.set(.42,.56,.02),K.castShadow=!0,B.add(K);let ot=new Jt(new ke(.12,10,8),L);ot.position.set(.4,.7,.02),B.add(ot);for(let tt of[-1,1]){let mt=new Jt(new ke(.07,8,6),U);mt.scale.set(1.8,.6,1),mt.position.set(.36,.6,tt*.17),B.add(mt);let Ft=new Jt(new ke(.035,8,6),a(16777215,{emissive:16774080,emissiveIntensity:.6}));Ft.position.set(.55,.6,tt*.08),B.add(Ft)}for(let[tt,mt]of[[.2,.14],[.2,-.14],[-.2,.14],[-.2,-.14]]){let Ft=new Jt(new Ni(.045,.045,.3,8),U);Ft.position.set(tt,.15,mt),Ft.castShadow=!0,B.add(Ft)}let xt=b(.3,.9,.3,0,2.6);return B.add(xt),B.userData.light=xt,B.userData.head=K,B}function R(B,L){let U=new Mi,X=a(Ye.cloak,{roughness:.9}),K=a(Ye.skin),ot=new Jt(new Zo(.3,.9,14),X);ot.position.y=.45,ot.castShadow=!0,U.add(ot);let xt=new Jt(new ke(.17,14,12),K);xt.position.y=1,xt.castShadow=!0,U.add(xt);let tt=new Jt(new ke(.21,14,12,0,Math.PI*2,0,Math.PI*.55),X);tt.position.y=1.02,U.add(tt);let mt=new Jt(new Ni(.03,.03,1.5,8),a(Ye.stem));mt.position.set(.38,.75,0),U.add(mt);let Ft=new Mi;Ft.position.set(.38,1.35,0);let N=new Jt(new Ni(.08,.1,.2,8),a(2761504,{roughness:.6,metalness:.3}));Ft.add(N);let pe=new Jt(new ke(.075,10,8),new In({color:16769704}));Ft.add(pe);let wt=b(0,0,0,3.2,7);return wt.castShadow=!1,Ft.add(wt),f.lanternLight=wt,U.add(Ft),U.userData.lantern=Ft,U.position.set(B,0,L),U.rotation.y=-Math.PI*.15,U.scale.setScalar(1.15),U}function T(B,L,U=.22){let X=new Mi,K=new Jt(new ke(U,14,10),a(Ye.pumpkin,{roughness:.6}));K.scale.set(1.15,.85,1.15),K.position.y=U*.85,K.castShadow=!0,X.add(K);let ot=new Jt(new Ni(.03,.04,.12,6),a(5139247));ot.position.y=U*1.75,X.add(ot);let xt=new Jt(new so(U*1.2,U*.9),new In({color:16765803,transparent:!0,opacity:.9,alphaMap:E(),side:Ji}));return xt.position.set(U*.82,U*.85,U*.82),xt.rotation.y=Math.PI/4,X.add(xt),X.add(b(0,U*.9,0,1.5,3.2)),X.position.set(B,0,L),X}function E(){if(l.face)return l.face;let B=document.createElement("canvas");B.width=B.height=64;let L=B.getContext("2d");L.fillStyle="#000",L.fillRect(0,0,64,64),L.fillStyle="#fff",L.beginPath(),L.moveTo(14,26),L.lineTo(26,18),L.lineTo(24,30),L.closePath(),L.fill(),L.beginPath(),L.moveTo(50,26),L.lineTo(38,18),L.lineTo(40,30),L.closePath(),L.fill(),L.beginPath(),L.moveTo(16,40),L.lineTo(48,40),L.lineTo(42,50),L.lineTo(36,44),L.lineTo(30,50),L.lineTo(22,44),L.closePath(),L.fill();let U=new oo(B);return l.face=U}async function I(B){f.group&&(e.remove(f.group),S(f.group)),v.clear(),f.boxes.clear(),f.ball=null,f.shards=[],f.confetti=[],f.found=0,f.doorOpen=0,f.level=B;let L=new Mi;f.group=L,e.add(L);let U=B.deck,X={x:U.x0-.6,z:-.6,sx:U.x1-U.x0+1.2,sz:4.8};_(L,X.x,-1.1,X.z,X.sx,.72,X.sz,a(Ye.earth),.03),_(L,X.x,-.38,X.z,X.sx,.04,X.sz,a(Ye.grass),0);let K=a(Ye.grassDark);for(let _t=0;_t<70;_t++){let $t=new Jt(new ke(.07+Ht()*.06,8,6),K);$t.scale.y=.45,$t.position.set(X.x+Ht()*X.sx,-.34,X.z+Ht()*X.sz),$t.receiveShadow=!0,L.add($t)}let ot=8,xt=3.6;for(let _t=0;_t<ot;_t++)_(L,U.x0,-.35,_t*xt/ot,U.x1-U.x0,.35,xt/ot-.012,c(_t%2?"#7d5634":"#73502f"),.02);let tt=c("#8d6238");for(let _t of[.1,1.7,3.3])_(L,U.x0+.1,0,_t,.18,.55,.18,tt);for(let _t of[2.1,4.1,6.1])_t<U.x1&&_(L,_t,0,.1,.18,.55,.18,tt);_(L,U.x0+.1,.42,.1,.18,.1,3.38,tt),_(L,U.x0+.1,.42,.1,U.x1-U.x0-.22,.1,.18,tt);let mt=a(2365972);for(let[_t,$t,D]of[[U.x0-.3,-.3,1.9],[U.x1-.8,-.35,2.3],[U.x1+.2,1.2,1.6]]){let vt=new Jt(new Ni(.06,.12,D,7),mt);vt.position.set(_t,-.36+D/2,$t),vt.castShadow=!0,L.add(vt);for(let Q=0;Q<4;Q++){let rt=new Jt(new Ni(.02,.05,D*.5,5),mt);rt.position.set(_t+(Ht()-.5)*.5,-.36+D*(.6+Ht()*.35),$t+(Ht()-.5)*.5),rt.rotation.set((Ht()-.5)*1.6,Ht()*3,(Ht()-.5)*1.6),L.add(rt)}}L.add(T(U.x0+.55,3.15)),L.add(T(U.x1-.5,.5,.18));let Ft=B.switch.x;_(L,Ft-.45,0,1.3-.45,.9,.22,.9,a(Ye.slate,{roughness:.6,metalness:.2}));let N=new Jt(new Ni(.3,.3,.22,32),a(Ye.accent,{roughness:.4,emissive:Ye.accent,emissiveIntensity:.15}));N.position.set(Ft,.33,1.3),N.castShadow=N.receiveShadow=!0,L.add(N),f.switchBtn=N;let pe=B.crate.x,wt=B.crate.z,Bt=1.35,Tt=1.25,ce=1.1,zt=c("#7a5238"),C=a(7027242,{roughness:.95});_(L,pe,0,wt,Bt,ce,Tt,zt,.02);let M=new Jt(new Zo(1.05,.6,4),C);M.rotation.y=Math.PI/4,M.position.set(pe+Bt/2,ce+.3,wt+Tt/2),M.castShadow=M.receiveShadow=!0,L.add(M);let W=.55,st=.78,at=new Jt(new dn(W+.1,st+.06,.08),a(1708558));at.position.set(pe+Bt/2,st/2+.02,wt+Tt+.02),L.add(at);let it=new Mi;it.position.set(pe+Bt/2-W/2,0,wt+Tt+.05),it.rotation.y=-.55;let It=new Jt(new uo(W,st,.06,2,.01),c("#6b4a2f"));It.position.set(W/2,st/2,0),It.castShadow=!0,it.add(It),L.add(it),f.door=it;let pt=y();pt.scale.setScalar(.8),pt.position.set(pe+Bt/2-.05,.02,wt+Tt-.3),pt.rotation.y=Math.PI*.45,L.add(pt),f.sheep=pt,f.sheepHome=pt.position.clone();let Et=b(pe+Bt/2,.6,wt+Tt/2,0,2.2);L.add(Et),f.insideLight=Et;let ne=new Jt(new ke(.06,8,6),new In({color:16769704}));ne.position.set(pe+Bt/2+W/2+.2,st+.15,wt+Tt+.08),L.add(ne),L.add(b(ne.position.x,ne.position.y,ne.position.z+.1,1.6,4));let ut=B.sling.x;f.shepherd=R(ut-.95,1.3+.75),L.add(f.shepherd);let Ct=a(Ye.stem),Vt=new Jt(new Ni(.14,.14,.95,24),Ct);Vt.position.set(ut,.475,1.3),Vt.castShadow=Vt.receiveShadow=!0,L.add(Vt);let Gt=new F(ut,.95,1.3);f.tips=[new F(ut,1.5,1.3-.42),new F(ut,1.5,1.3+.42)];for(let _t of f.tips){let $t=m(.09,Ct);x($t,Gt,_t),L.add($t);let D=new Jt(new ke(.09,12,8),Ct);D.position.copy(_t),L.add(D)}f.bands=f.tips.map(()=>{let _t=m(.03,a(Ye.band));return L.add(_t),_t}),f.pouch=new Jt(new ke(.27,16,12),a(5125412)),f.pouch.scale.set(.45,.85,1),f.pouch.castShadow=!0,L.add(f.pouch);for(let _t of B.bodies){let $t=(d[_t.mat]||d.stone)(),D=new Jt(new uo(_t.w,_t.h,.8,2,Math.min(.035,_t.w/4)),$t);D.position.set(_t.x,_t.y,1.3),D.castShadow=_t.mat!=="glass",D.receiveShadow=!0,v.add(D),f.boxes.set(_t.id,D)}f.ball=new Jt(new ke(.26,32,24),a(16765562,{roughness:.4,emissive:16757575,emissiveIntensity:.9})),f.ball.castShadow=!0,v.add(f.ball),f.ballLight=b(0,0,0,2,5),f.ball.add(f.ballLight);let Rt=new In({color:16769704});f.dots=[];for(let _t=0;_t<18;_t++){let $t=new Jt(new ke(.065-_t*.0012,10,8),Rt);$t.visible=!1,v.add($t),f.dots.push($t)}let oe=new F((B.view.x0+B.view.x1)/2,0,1.8);o.position.set(-6,12,3.6).add(oe),o.target.position.copy(oe),f.fitPts=[];for(let _t of[B.view.x0,B.view.x1])for(let $t of[B.view.y0,B.view.y1])for(let D of[.2,3.8])f.fitPts.push(new F(_t,$t,D));A()}function S(B){B.traverse(L=>{L.geometry&&L.geometry.dispose()})}function A(){let B=n.clientWidth||window.innerWidth,L=n.clientHeight||window.innerHeight;if(f.W=B,f.H=L,t.setSize(B,L,!1),e.background=u(B,L),f.found&&p(f.found),!f.level)return;let U=40;i.left=-B/2/U,i.right=B/2/U,i.top=L/2/U,i.bottom=-L/2/U,i.zoom=1;let X=new F((f.level.view.x0+f.level.view.x1)/2,(f.level.view.y0+f.level.view.y1)/2,1.8);i.position.copy(X).add(s.clone().multiplyScalar(30)),i.lookAt(X),i.updateProjectionMatrix(),i.updateMatrixWorld();let K=P(),ot=f.safe,xt=(B-ot.left-ot.right)/B*2,tt=(L-ot.top-ot.bottom)/L*2;i.zoom=Math.min(xt/(K.x1-K.x0),tt/(K.y1-K.y0))*.98,i.updateProjectionMatrix();let mt=P(),Ft=(ot.left-ot.right)/B,N=(ot.bottom-ot.top)/L,pe=(mt.x0+mt.x1)/2-Ft,wt=(mt.y0+mt.y1)/2-N,Bt=new F(1,0,0).applyQuaternion(i.quaternion),Tt=new F(0,1,0).applyQuaternion(i.quaternion);i.position.add(Bt.multiplyScalar(pe*(i.right-i.left)/2/i.zoom)).add(Tt.multiplyScalar(wt*(i.top-i.bottom)/2/i.zoom)),i.updateMatrixWorld(),f.camBase=i.position.clone()}function P(){let B=9,L=-9,U=9,X=-9;for(let K of f.fitPts){let ot=K.clone().project(i);B=Math.min(B,ot.x),L=Math.max(L,ot.x),U=Math.min(U,ot.y),X=Math.max(X,ot.y)}return{x0:B,x1:L,y0:U,y1:X}}function k(){let B=new F(3,1,1.3).project(i),L=new F(4,1,1.3).project(i),U=new F(3,2,1.3).project(i);return{x:Math.abs(L.x-B.x)*f.W/2,y:Math.abs(U.y-B.y)*f.H/2}}function O(B){f.safe=B,A()}let G=new F,nt=new F;function J(B,L,U){f.t+=U;for(let tt of B.bodies){let mt=f.boxes.get(tt.id);mt&&(mt.visible=!0,mt.position.set(tt.x,tt.y,1.3),mt.rotation.z=tt.angle)}for(let[tt,mt]of f.boxes)B.bodies.find(Ft=>Ft.id===tt)||(mt.visible=!1);let X;B.ball?(X=G.set(B.ball.x,B.ball.y,1.3),f.ball.visible=!0,f.ball.position.copy(X),f.ball.rotation.z=B.ball.angle):L&&L.ballPos?(X=G.set(L.ballPos.x,L.ballPos.y,1.3),f.ball.visible=!0,f.ball.position.copy(X)):(f.ball.visible=!1,X=null),f.ballLight.intensity=f.ball.visible?2+Math.sin(f.t*9)*.3:0;let K=B.ball?nt.set(f.level.sling.x-.3,.95,1.3):X;if(K){f.pouch.visible=!0,f.pouch.position.copy(K).add(new F(-.14,-.02,0));for(let tt=0;tt<2;tt++)x(f.bands[tt],f.tips[tt],K.clone().add(new F(-.2,0,(f.tips[tt].z-1.3)*.5)));f.bands.forEach(tt=>tt.visible=!0)}let ot=L&&L.preview?L.preview:[];f.dots.forEach((tt,mt)=>{mt<ot.length?(tt.visible=!0,tt.position.set(ot[mt].x,ot[mt].y,1.3)):tt.visible=!1});let xt=B.pressed?.2:.33;if(f.switchBtn.position.y+=(xt-f.switchBtn.position.y)*Math.min(1,U*18),f.switchBtn.material.emissiveIntensity+=((B.pressed?1.2:.15)-f.switchBtn.material.emissiveIntensity)*Math.min(1,U*6),f.lanternLight&&(f.lanternLight.intensity=3.2+Math.sin(f.t*7.3)*.2+Math.sin(f.t*13.1)*.1),f.shepherd&&(f.shepherd.userData.lantern.rotation.z=Math.sin(f.t*1.6)*.08),f.sheep){let tt=f.sheep;if(f.doorOpen>0){f.door.rotation.y+=(-2.3-f.door.rotation.y)*Math.min(1,U*5),f.insideLight.intensity+=(1.8-f.insideLight.intensity)*Math.min(1,U*3),tt.userData.light.intensity+=(1.6-tt.userData.light.intensity)*Math.min(1,U*3),f.hop=(f.hop||0)+U;let mt=Math.min(1,f.hop/1.2);tt.position.z=f.sheepHome.z+mt*1.25,tt.position.x=f.sheepHome.x+mt*.55,tt.position.y=.02+Math.abs(Math.sin(f.hop*9))*(mt<1?.16:.03),tt.rotation.y=Math.PI*.45-mt*.7}else tt.position.y=.02+Math.sin(f.t*2.2)*.01,tt.userData.head.rotation.y=Math.sin(f.t*.9)*.25}for(let tt of f.shards)tt.vy-=14*U,tt.m.position.x+=tt.vx*U,tt.m.position.y+=tt.vy*U,tt.m.position.z+=tt.vz*U,tt.m.rotation.x+=tt.rx*U,tt.m.rotation.z+=tt.rz*U,tt.t-=U,tt.m.material.opacity=Math.max(0,Math.min(.6,tt.t)),(tt.t<=0||tt.m.position.y<-2)&&(v.remove(tt.m),tt.dead=!0);f.shards=f.shards.filter(tt=>!tt.dead);for(let tt of f.confetti)tt.vy-=2.5*U,tt.vx*=.995,tt.m.position.x+=tt.vx*U,tt.m.position.y+=tt.vy*U,tt.m.rotation.x+=tt.rx*U,tt.m.rotation.y+=tt.rz*U,tt.t-=U,tt.m.material.opacity=Math.min(1,tt.t),(tt.t<=0||tt.m.position.y<-1.5)&&(v.remove(tt.m),tt.dead=!0);if(f.confetti=f.confetti.filter(tt=>!tt.dead),f.shake>0){f.shake-=U;let tt=Math.max(0,f.shake)*.5;i.position.copy(f.camBase).add(new F((Ht()-.5)*tt,(Ht()-.5)*tt,0))}else f.camBase&&i.position.copy(f.camBase)}function lt(B){let L=f.boxes.get(B.id);L&&(L.visible=!1);let U=new Ko({color:Ye.glass,transparent:!0,opacity:.6,roughness:.1,clearcoat:1});for(let X=0;X<12;X++){let K=new Jt(new dn(.12+Ht()*.18,.05,.12+Ht()*.18),U.clone());K.position.set(B.x+(Ht()-.5)*B.w,B.y+(Ht()-.5)*B.h,1.3+(Ht()-.5)*.8),v.add(K),f.shards.push({m:K,vx:(Ht()-.5)*4,vy:1+Ht()*3,vz:(Ht()-.5)*2,rx:(Ht()-.5)*12,rz:(Ht()-.5)*12,t:.9+Ht()*.4})}f.shake=Math.max(f.shake,.18)}function $(B){f.shake=Math.max(f.shake,Math.min(.25,B*.05))}function ct(){f.doorOpen=1,f.hop=0}function yt(B=1){f.found=B,p(B);let L=f.level.crate.x+.7,U=f.level.crate.z+1.4;for(let X=0;X<40;X++){let K=new Jt(new ke(.035+Ht()*.03,6,5),new In({color:X%3?16765562:16777215,transparent:!0}));K.position.set(L+(Ht()-.5)*2,.2+Ht()*.6,U+(Ht()-.5)*1.5),v.add(K),f.confetti.push({m:K,vx:(Ht()-.5)*.6,vy:.8+Ht()*1.2,rx:0,rz:0,t:2.5+Ht()*1.5})}}function Mt(B){r.intensity=Math.max(.3,.55-B*.06),o.intensity=Math.max(.6,.9-B*.08)}function kt(){f.doorOpen=0,f.hop=0,f.door&&(f.door.rotation.y=-.55),f.sheep&&(f.sheep.position.copy(f.sheepHome),f.sheep.rotation.y=Math.PI*.45),f.insideLight&&(f.insideLight.intensity=0),f.sheep&&(f.sheep.userData.light.intensity=0);for(let B of f.shards)v.remove(B.m);for(let B of f.confetti)v.remove(B.m);f.shards=[],f.confetti=[],f.boxes.forEach(B=>B.visible=!0),Mt(0),f.found=0}function re(){t.render(e,i)}return window.addEventListener("resize",A),{loadLevel:I,sync:J,render:re,resize:A,setSafe:O,pxPerUnit:k,breakGlass:lt,hitShake:$,openDoor:ct,found:yt,deepen:Mt,resetEffects:kt,canvas:t.domElement,get size(){return{W:f.W,H:f.H}}}}var fb=["shoot","wood","stone","glass","switch","open","win","fail","ui","tumble"];function Up(n="./audio/"){let t={muted:!1,ready:!1,ctx:null,buffers:{},last:{}},i=document.createElement("audio").canPlayType("audio/ogg; codecs=vorbis")?"ogg":"mp3";async function s(){if(t.ctx)return;let l=window.AudioContext||window.webkitAudioContext;l&&(t.ctx=new l,t.gain=t.ctx.createGain(),t.gain.gain.value=t.muted?0:1,t.gain.connect(t.ctx.destination),await Promise.all(fb.map(async h=>{try{let d=await(await fetch(n+h+"."+i)).arrayBuffer();t.buffers[h]=await t.ctx.decodeAudioData(d)}catch{}})),t.ready=!0)}function r(){s(),t.ctx&&t.ctx.state==="suspended"&&t.ctx.resume()}function o(l,{vol:h=1,rate:c=1,minGap:d=.04}={}){if(!t.ready||t.muted)return;let u=t.buffers[l];if(!u)return;let p=t.ctx.currentTime;if(t.last[l]&&p-t.last[l]<d)return;t.last[l]=p;let f=t.ctx.createBufferSource();f.buffer=u,f.playbackRate.value=c;let v=t.ctx.createGain();v.gain.value=h,f.connect(v),v.connect(t.gain),f.start()}function a(l){t.muted=l,t.gain&&(t.gain.gain.value=l?0:1)}return{unlock:r,play:o,setMuted:a,get muted(){return t.muted},get ready(){return t.ready}}}var Fi=n=>document.querySelector(n),Vp="kc.progress";function db(){try{return JSON.parse(localStorage.getItem(Vp)||"{}")}catch{return{}}}function sc(n){try{localStorage.setItem(Vp,JSON.stringify(n))}catch{}}var H={level:null,sim:null,state:"loading",aim:null,timeScale:1,slowUntil:0,now:0,acc:0,progress:db(),view:null,audio:Up(),lastSnap:null,endTimer:0,pausedFrom:null},Wu=Fi("#app");H.view=Fp(Wu);H.audio.setMuted(!!H.progress.muted);function qu(){let n=Wu.clientWidth,t=Wu.clientHeight,e=n/t,i=e<.8?"portrait":e>1.25?"landscape":"square";document.body.dataset.mode=i;let s=i==="portrait"?104:i==="square"?72:64,r=i==="portrait"?132:i==="square"?96:84;H.view.setSafe({top:s,bottom:r,left:i==="landscape"?32:14,right:i==="landscape"?32:14})}window.addEventListener("resize",qu);var Qe={search:Fi("#search"),throws:Fi("#throws"),level:Fi("#level"),goal:Fi("#goal"),hint:Fi("#hint"),hintSub:Fi("#hint-sub"),panel:Fi("#panel"),ptitle:Fi("#panel-title"),pbody:Fi("#panel-body"),pbtns:Fi("#panel-btns"),sound:Fi("#btn-sound"),pause:Fi("#btn-pause")};function zp(){let n=H.throws||0;Qe.throws.textContent=n===0?"":n===1?"1 throw":`${n} throws`}function ia(n,t){Qe.hint.textContent=n,Qe.hintSub.textContent=t||"",Qe.hint.parentElement.classList.toggle("hidden",!n)}function Op(n,t,e){Qe.ptitle.textContent=n,Qe.pbody.textContent=t,Qe.pbtns.innerHTML="";for(let[i,s,r]of e){let o=document.createElement("button");o.textContent=i,r&&(o.className="ghost"),o.addEventListener("click",()=>{H.audio.play("ui"),s()}),Qe.pbtns.appendChild(o)}Qe.panel.classList.remove("hidden")}function kp(){Qe.panel.classList.add("hidden")}function Hp(){Qe.sound.classList.toggle("off",H.audio.muted)}async function po(n,t){H.state="loading",kp();let e=hs[Math.max(0,Math.min(hs.length-1,n))];H.level=e,H.levelIndex=hs.indexOf(e),H.sim=new ll(e),H.aim=null,H.timeScale=1,H.endTimer=0,H.throws=0,H.misses=0,H.view.resetEffects(),await H.view.loadLevel(e),qu(),Qe.level.textContent=e.name,Qe.goal.textContent=e.goal,zp(),Qe.search.firstChild.textContent="Still searching\u2026 ",ia(e.hint,"Release to throw"),H.progress.level=H.levelIndex,sc(H.progress),H.state="aim",window.KC&&window.KC.onLevelStart&&window.KC.onLevelStart(e.id)}function pb(){H.levelIndex+1<hs.length?po(H.levelIndex+1):(H.progress.cleared=!0,sc(H.progress),po(0))}function mb(){H.state="won",H.timeScale=.45,H.slowUntil=H.now+.7,H.audio.play("switch"),H.view.hitShake(2),Qe.search.firstChild.textContent="Found. ",Qe.throws.textContent="",setTimeout(()=>{H.view.openDoor(),H.audio.play("open")},350),setTimeout(()=>{H.view.found(1),H.audio.play("win")},900),H.progress.best=Math.max(H.progress.best||0,H.level.id),sc(H.progress),setTimeout(()=>{if(H.noPanel)return;let n=H.levelIndex+1>=hs.length,t=H.throws;Op(n?"Love conquers all.":"Found. Always.",n?"Every sheep was found. That is the whole core test \u2014 tell us how it felt.":`The sheep came out after ${t} throw${t===1?"":"s"}. It was never a race.`,[[n?"Search again":"Next night",pb],["Play this night again",()=>po(H.levelIndex),!0]])},2600)}function _b(){H.misses++,H.view.deepen(H.misses);let n=H.level.missHints||[];ia(n[(H.misses-1)%n.length]||H.level.hint,"Pull to aim again"),H.audio.play("ui",{vol:.5,rate:.8})}var dr=H.view.canvas;function Gp(n){let t=n.touches?n.touches[0]||n.changedTouches[0]:n,e=dr.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top}}function Wp(n){H.audio.unlock(),!(H.state!=="aim"||H.sim.ball)&&(H.aim={start:Gp(n),pull:{dx:0,dy:0},ballPos:H.sim.anchor(),preview:[]},ia("",""))}function qp(n){if(!H.aim)return;let t=Gp(n),e=H.view.pxPerUnit(),i=(H.aim.start.x-t.x)/e.x,s=-(H.aim.start.y-t.y)/e.y,r=Math.hypot(i,s);r>Dn&&(i*=Dn/r,s*=Dn/r),H.aim.pull={dx:i,dy:s};let o=H.sim.anchor();H.aim.ballPos={x:o.x-i,y:o.y-s},H.aim.preview=r>.12?H.sim.preview(i,s):[]}function Xp(){if(!H.aim)return;let{dx:n,dy:t}=H.aim.pull,e=Math.hypot(n,t);if(H.aim=null,e<.2||n<.05){ia(H.level.hint,"Release to throw");return}Yp(n,t)}function Yp(n,t){H.sim.shoot(n,t)&&(H.sim.shotAt=H.sim.time,H.state="flying",H.throws++,zp(),H.audio.play("shoot",{rate:.95+Math.hypot(n,t)*.2}),ia("",""))}dr.addEventListener("touchstart",n=>{Wp(n)},{passive:!0});dr.addEventListener("touchmove",n=>{H.aim&&(n.preventDefault(),qp(n))},{passive:!1});dr.addEventListener("touchend",()=>{Xp(),window.scrollTo(0,120)},{passive:!0});dr.addEventListener("touchcancel",()=>{H.aim=null},{passive:!0});dr.addEventListener("mousedown",n=>{n.button===0&&Wp(n)});window.addEventListener("mousemove",n=>qp(n));window.addEventListener("mouseup",()=>Xp());dr.addEventListener("contextmenu",n=>n.preventDefault());Qe.sound.addEventListener("click",()=>{H.audio.unlock(),H.audio.setMuted(!H.audio.muted),H.progress.muted=H.audio.muted,sc(H.progress),Hp(),H.audio.play("ui")});Qe.pause.addEventListener("click",()=>{H.state==="paused"||H.state==="loading"||(H.audio.play("ui"),Jp())});function Jp(){H.pausedFrom=H.state,H.state="paused",H.aim=null,Op("Paused","",[["Resume",vb],["Restart level",()=>po(H.levelIndex),!0]])}function vb(){kp(),H.state=H.pausedFrom||"aim",H.last=performance.now()}document.addEventListener("visibilitychange",()=>{document.hidden&&(H.state==="aim"||H.state==="flying")&&Jp()});H.last=performance.now();function $p(n){requestAnimationFrame($p);let t=Math.min(.05,(n-H.last)/1e3);if(H.last=n,H.now+=t,H.state==="loading")return;let e=t;if(H.state!=="paused"){H.slowUntil&&H.now>H.slowUntil&&(H.timeScale=1,H.slowUntil=0),H.acc+=t*H.timeScale;let s=0;for(;H.acc>=Is&&s<8;)H.sim.step(),H.acc-=Is,s++;for(let r of H.sim.events)gb(r);H.sim.events.length=0}H.lastSnap=H.sim.snapshot();let i=H.aim||(H.state==="aim"&&!H.sim.ball?{ballPos:H.sim.anchor(),preview:[]}:null);H.view.sync(H.lastSnap,i,e),H.view.render()}function gb(n){if(n.type==="hit"){let t=Math.min(1,n.strength/3);n.mats.includes("glass")?H.audio.play("glass",{vol:.4+t*.6}):n.mats.includes("stone")&&!n.mats.includes("ground")?H.audio.play("stone",{vol:.3+t*.7,minGap:.08}):n.mats.includes("wood")?H.audio.play(n.mats.includes("ball")?"wood":"tumble",{vol:.3+t*.7,minGap:.08}):n.mats.includes("ground")&&H.audio.play("tumble",{vol:.2+t*.4,rate:.9,minGap:.12}),n.strength>1.8&&H.view.hitShake(n.strength)}else if(n.type==="break")H.view.breakGlass(n),H.audio.play("glass",{vol:1}),H.timeScale=.35,H.slowUntil=H.now+.45;else if(n.type==="switch")H.state!=="won"&&mb();else if(n.type==="ballDone"){if(H.state==="won")return;H.state="ending",yb()}}function yb(){let n=H.now,t=()=>{H.state==="ending"&&(H.sim.pressed||(H.sim.settled()||H.now-n>2.5?(H.state="aim",_b()):setTimeout(t,120)))};setTimeout(t,300)}window.KC={get state(){return H.state},get level(){return H.level&&H.level.id},get sim(){return H.sim},shoot:(n,t)=>{H.state==="aim"&&Yp(n,t)},start:n=>po(n),pxPerUnit:()=>H.view.pxPerUnit(),anchorPx:()=>H.sim.anchor(),hash:()=>H.sim.hash(),settled:()=>H.sim.settled(),levels:hs.length,get throws(){return H.throws},get misses(){return H.misses},set noPanel(n){H.noPanel=!!n}};Hp();qu();window.scrollTo(0,120);po(Math.min(H.progress.level||0,hs.length-1)).then(()=>{document.title="Knock Chain",document.body.classList.add("ready")});requestAnimationFrame($p);
/*! Bundled license information:

planck/dist/planck.mjs:
  (**
   * Planck.js v1.5.1
   * @license The MIT license
   * @copyright Copyright (c) 2026 Erin Catto, Ali Shakiba
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
