"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(y,v,i)=>{i.d(v,{c:()=>r});var s=i(4261),l=i(1086),c=i(8607);const r=(n,o)=>{let e,t;const d=(u,p,E)=>{if(typeof document>"u")return;const w=document.elementFromPoint(u,p);w&&o(w)&&!w.disabled?w!==e&&(a(),_(w,E)):a()},_=(u,p)=>{e=u,t||(t=e);const E=e;(0,s.w)(()=>E.classList.add("ion-activated")),p()},a=(u=!1)=>{if(!e)return;const p=e;(0,s.w)(()=>p.classList.remove("ion-activated")),u&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>d(u.currentX,u.currentY,l.a),onMove:u=>d(u.currentX,u.currentY,l.b),onEnd:()=>{a(!0),(0,l.h)(),t=void 0}})}},8438:(y,v,i)=>{i.d(v,{g:()=>l});var s=i(8476);const l=()=>{if(void 0!==s.w)return s.w.Capacitor}},5572:(y,v,i)=>{i.d(v,{c:()=>s,i:()=>l});const s=(c,r,n)=>"function"==typeof n?n(c,r):"string"==typeof n?c[n]===r[n]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,n)=>void 0!==c&&(Array.isArray(c)?c.some(o=>s(o,r,n)):s(c,r,n))},3351:(y,v,i)=>{i.d(v,{g:()=>s});const s=(o,e,t,d,_)=>c(o[1],e[1],t[1],d[1],_).map(a=>l(o[0],e[0],t[0],d[0],a)),l=(o,e,t,d,_)=>_*(3*e*Math.pow(_-1,2)+_*(-3*t*_+3*t+d*_))-o*Math.pow(_-1,3),c=(o,e,t,d,_)=>n((d-=_)-3*(t-=_)+3*(e-=_)-(o-=_),3*t-6*e+3*o,3*e-3*o,o).filter(u=>u>=0&&u<=1),n=(o,e,t,d)=>{if(0===o)return((o,e,t)=>{const d=e*e-4*o*t;return d<0?[]:[(-e+Math.sqrt(d))/(2*o),(-e-Math.sqrt(d))/(2*o)]})(e,t,d);const _=(3*(t/=o)-(e/=o)*e)/3,a=(2*e*e*e-9*e*t+27*(d/=o))/27;if(0===_)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-_),-Math.sqrt(-_)];const u=Math.pow(a/2,2)+Math.pow(_/3,3);if(0===u)return[Math.pow(a/2,.5)-e/3];if(u>0)return[Math.pow(-a/2+Math.sqrt(u),1/3)-Math.pow(a/2+Math.sqrt(u),1/3)-e/3];const p=Math.sqrt(Math.pow(-_/3,3)),E=Math.acos(-a/(2*Math.sqrt(Math.pow(-_/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(E/3)-e/3,w*Math.cos((E+2*Math.PI)/3)-e/3,w*Math.cos((E+4*Math.PI)/3)-e/3]}},5083:(y,v,i)=>{i.d(v,{i:()=>s});const s=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,v,i)=>{i.r(v),i.d(v,{startFocusVisible:()=>r});const s="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=n=>{let o=[],e=!0;const t=n?n.shadowRoot:document,d=n||document.body,_=M=>{o.forEach(f=>f.classList.remove(s)),M.forEach(f=>f.classList.add(s)),o=M},a=()=>{e=!1,_([])},u=M=>{e=c.includes(M.key),e||_([])},p=M=>{if(e&&void 0!==M.composedPath){const f=M.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));_(f)}},E=()=>{t.activeElement===d&&_([])};return t.addEventListener("keydown",u),t.addEventListener("focusin",p),t.addEventListener("focusout",E),t.addEventListener("touchstart",a,{passive:!0}),t.addEventListener("mousedown",a),{destroy:()=>{t.removeEventListener("keydown",u),t.removeEventListener("focusin",p),t.removeEventListener("focusout",E),t.removeEventListener("touchstart",a),t.removeEventListener("mousedown",a)},setFocus:_}}},1086:(y,v,i)=>{i.d(v,{I:()=>l,a:()=>e,b:()=>t,c:()=>o,d:()=>_,h:()=>d});var s=i(8438),l=function(a){return a.Heavy="HEAVY",a.Medium="MEDIUM",a.Light="LIGHT",a}(l||{});const r={getEngine(){const a=(0,s.g)();if(null!=a&&a.isPluginAvailable("Haptics"))return a.Plugins.Haptics},available(){if(!this.getEngine())return!1;const u=(0,s.g)();return"web"!==(null==u?void 0:u.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(a){const u=this.getEngine();u&&u.impact({style:a.style})},notification(a){const u=this.getEngine();u&&u.notification({type:a.type})},selection(){this.impact({style:l.Light})},selectionStart(){const a=this.getEngine();a&&a.selectionStart()},selectionChanged(){const a=this.getEngine();a&&a.selectionChanged()},selectionEnd(){const a=this.getEngine();a&&a.selectionEnd()}},n=()=>r.available(),o=()=>{n()&&r.selection()},e=()=>{n()&&r.selectionStart()},t=()=>{n()&&r.selectionChanged()},d=()=>{n()&&r.selectionEnd()},_=a=>{n()&&r.impact(a)}},909:(y,v,i)=>{i.d(v,{I:()=>o,a:()=>_,b:()=>n,c:()=>p,d:()=>w,f:()=>a,g:()=>d,i:()=>t,p:()=>E,r:()=>M,s:()=>u});var s=i(467),l=i(4920),c=i(4929);const n="ion-content",o=".ion-content-scroll-host",e=`${n}, ${o}`,t=f=>"ION-CONTENT"===f.tagName,d=function(){var f=(0,s.A)(function*(h){return t(h)?(yield new Promise(m=>(0,l.c)(h,m)),h.getScrollElement()):h});return function(m){return f.apply(this,arguments)}}(),_=f=>f.querySelector(o)||f.querySelector(e),a=f=>f.closest(e),u=(f,h)=>t(f)?f.scrollToTop(h):Promise.resolve(f.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),p=(f,h,m,O)=>t(f)?f.scrollByPoint(h,m,O):Promise.resolve(f.scrollBy({top:m,left:h,behavior:O>0?"smooth":"auto"})),E=f=>(0,c.b)(f,n),w=f=>{if(t(f)){const m=f.scrollY;return f.scrollY=!1,m}return f.style.setProperty("overflow","hidden"),!0},M=(f,h)=>{t(f)?f.scrollY=h:f.style.removeProperty("overflow")}},3992:(y,v,i)=>{i.d(v,{a:()=>s,b:()=>p,c:()=>e,d:()=>E,e:()=>P,f:()=>o,g:()=>w,h:()=>c,i:()=>l,j:()=>g,k:()=>D,l:()=>t,m:()=>a,n:()=>M,o:()=>_,p:()=>n,q:()=>r,r:()=>C,s:()=>L,t:()=>u,u:()=>m,v:()=>O,w:()=>d,x:()=>f,y:()=>h});const s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,v,i)=>{i.d(v,{c:()=>r,g:()=>n});var s=i(8476),l=i(4920),c=i(4929);const r=(e,t,d)=>{let _,a;if(void 0!==s.w&&"MutationObserver"in s.w){const w=Array.isArray(t)?t:[t];_=new MutationObserver(M=>{for(const f of M)for(const h of f.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&w.includes(h.slot))return d(),void(0,l.r)(()=>u(h))}),_.observe(e,{childList:!0,subtree:!0})}const u=w=>{var M;a&&(a.disconnect(),a=void 0),a=new MutationObserver(f=>{d();for(const h of f)for(const m of h.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&E()}),a.observe(null!==(M=w.parentElement)&&void 0!==M?M:w,{subtree:!0,childList:!0})},E=()=>{a&&(a.disconnect(),a=void 0)};return{destroy:()=>{_&&(_.disconnect(),_=void 0),E()}}},n=(e,t,d)=>{const _=null==e?0:e.toString().length,a=o(_,t);if(void 0===d)return a;try{return d(_,t)}catch(u){return(0,c.a)("Exception in provided `counterFormatter`.",u),a}},o=(e,t)=>`${e} / ${t}`},1622:(y,v,i)=>{i.r(v),i.d(v,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>f,keyboardDidOpen:()=>w,keyboardDidResize:()=>M,resetKeyboardAssist:()=>_,setKeyboardClose:()=>E,setKeyboardOpen:()=>p,startKeyboardAssist:()=>a,trackViewportChanges:()=>O});var s=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},d=!1;const _=()=>{e={},t={},d=!1},a=g=>{if(s.K.getEngine())u(g);else{if(!g.visualViewport)return;t=C(g.visualViewport),g.visualViewport.onresize=()=>{O(g),w()||M(g)?p(g):f(g)&&E(g)}}},u=g=>{g.addEventListener("keyboardDidShow",D=>p(g,D)),g.addEventListener("keyboardDidHide",()=>E(g))},p=(g,D)=>{h(g,D),d=!0},E=g=>{m(g),d=!1},w=()=>!d&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=g=>d&&!f(g),f=g=>d&&t.height===g.innerHeight,h=(g,D)=>{const P=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-t.height}});g.dispatchEvent(P)},m=g=>{const D=new CustomEvent(n);g.dispatchEvent(D)},O=g=>{e=Object.assign({},t),t=C(g.visualViewport)},C=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},4379:(y,v,i)=>{i.d(v,{K:()=>r,a:()=>c});var s=i(8438),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const r={getEngine(){const n=(0,s.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(y,v,i)=>{i.d(v,{c:()=>o});var s=i(467),l=i(8476),c=i(4379);const r=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},n=e=>{const t=r(e);return null===t?0:t.clientHeight},o=function(){var e=(0,s.A)(function*(t){let d,_,a,u;const p=function(){var h=(0,s.A)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;d=()=>{void 0===u&&(u=n(O)),a=!0,E(a,O)},_=()=>{a=!1,E(a,O)},null==l.w||l.w.addEventListener("keyboardWillShow",d),null==l.w||l.w.addEventListener("keyboardWillHide",_)});return function(){return h.apply(this,arguments)}}(),E=(h,m)=>{t&&t(h,w(m))},w=h=>{if(0===u||u===n(h))return;const m=r(h);return null!==m?new Promise(O=>{const g=new ResizeObserver(()=>{m.clientHeight===u&&(g.disconnect(),O())});g.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",d),null==l.w||l.w.removeEventListener("keyboardWillHide",_),d=_=void 0},isKeyboardVisible:()=>a}});return function(d){return e.apply(this,arguments)}}()},7838:(y,v,i)=>{i.d(v,{c:()=>l});var s=i(467);const l=()=>{let c;return{lock:function(){var n=(0,s.A)(function*(){const o=c;let e;return c=new Promise(t=>e=t),void 0!==o&&(yield o),e});return function(){return n.apply(this,arguments)}}()}}},9001:(y,v,i)=>{i.d(v,{c:()=>c});var s=i(8476),l=i(4920);const c=(r,n,o)=>{let e;const t=()=>!(void 0===n()||void 0!==r.label||null===o()),_=()=>{const u=n();if(void 0===u)return;if(!t())return void u.style.removeProperty("width");const p=o().scrollWidth;if(0===p&&null===u.offsetParent&&void 0!==s.w&&"IntersectionObserver"in s.w){if(void 0!==e)return;const E=e=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(_(),E.disconnect(),e=void 0)},{threshold:.01,root:r});E.observe(u)}else u.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{_()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(y,v,i)=>{i.d(v,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,n)=>{const o=c*r/n-c+"ms",e=2*Math.PI*r/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,r,n)=>{const o=r/n,e=c*o-c+"ms",t=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*r+(r<n/2?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/n-c+"ms"}})}}},7166:(y,v,i)=>{i.r(v),i.d(v,{createSwipeBackGesture:()=>n});var s=i(4920),l=i(5083),c=i(8607);i(1970);const n=(o,e,t,d,_)=>{const a=o.ownerDocument.defaultView;let u=(0,l.i)(o);const E=m=>u?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(u=(0,l.i)(o),(m=>{const{startX:C}=m;return u?C>=a.innerWidth-50:C<=50})(m)&&e()),onStart:t,onMove:m=>{const C=E(m)/a.innerWidth;d(C)},onEnd:m=>{const O=E(m),C=a.innerWidth,g=O/C,D=(m=>u?-m.velocityX:m.velocityX)(m),P=D>=0&&(D>.2||O>C/2),x=(P?1-g:g)*C;let A=0;if(x>5){const k=x/Math.abs(D);A=Math.min(k,540)}_(P,g<=0?.01:(0,s.j)(0,g,.9999),A)}})}},2935:(y,v,i)=>{i.d(v,{w:()=>s});const s=(r,n,o)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{o(l(t,n))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,n)=>{let o;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)o=c(e.addedNodes[t],n)||o}),o},c=(r,n)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(t=>t.value===o.value)}},1307:(y,v,i)=>{i.d(v,{S:()=>n});var s=i(177),l=i(4341),c=i(4742),r=i(4438);let n=(()=>{var o;class e{}return(o=e).\u0275fac=function(d){return new(d||o)},o.\u0275mod=r.$C({type:o}),o.\u0275inj=r.G2t({imports:[s.MD,l.YN,c.bv]}),e})()},841:(y,v,i)=>{i.d(v,{j:()=>c});var s=i(4438),l=i(4742);let c=(()=>{var r;class n{constructor(e){this.modalController=e}dismissModal(){this.modalController.dismiss()}ngOnInit(){}}return(r=n).\u0275fac=function(e){return new(e||r)(s.rXU(l.W3))},r.\u0275cmp=s.VBU({type:r,selectors:[["app-acerca"]],decls:25,vars:0,consts:[[1,"ion-padding"],[1,"acerca-img"],["src","assets/img/acerca.png","alt",""],[1,"texto-acerca"],[2,"font-style","italic","font-weight","bold"],["color","rojizo",1,"boton-modal",3,"click"]],template:function(e,t){1&e&&(s.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),s.EFF(3,"ACERCA DE NOSOTROS"),s.k0s()()(),s.j41(4,"ion-content",0)(5,"div",1),s.nrm(6,"img",2),s.k0s(),s.j41(7,"div",3)(8,"h2"),s.EFF(9,"SuperHero app"),s.k0s(),s.j41(10,"p",4),s.EFF(11,"Esta app fue creada por:"),s.k0s(),s.j41(12,"p"),s.EFF(13,"Gonzalez, Edgardo"),s.k0s(),s.j41(14,"p"),s.EFF(15,"La Terra, Juan"),s.k0s(),s.j41(16,"p"),s.EFF(17,"Mello da Silva, Soledad"),s.k0s(),s.j41(18,"p"),s.EFF(19,"Zarra, Antonio"),s.k0s(),s.nrm(20,"br"),s.j41(21,"p"),s.EFF(22,"Versi\xf3n: 1.0.0 - 2024"),s.k0s()(),s.j41(23,"ion-button",5),s.bIt("click",function(){return t.dismissModal()}),s.EFF(24,"Cerrar"),s.k0s()())},dependencies:[l.Jm,l.W9,l.eU,l.BC,l.ai],styles:[".boton-modal{border-radius:30px;border:2px;font-size:20px;margin-top:30px;width:100%}ion-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;--background:var(--ion-color-celeste)}.texto-acerca[_ngcontent-%COMP%]{color:#000;font-family:Arial,Helvetica,sans-serif}.acerca-img[_ngcontent-%COMP%]{width:200px}"]}),n})()},255:(y,v,i)=>{i.d(v,{F:()=>s,k:()=>l});const s=c=>c?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)?"":"email formato invalido":"email es requerido",l=c=>c?c.length<8?"la contrase\xf1a tiene que ser mayor a 7 caracteres":/^(?=.*\d).+$/.test(c)?"":(console.log(c),"La contrase\xf1a tiene que tener al menos un numero"):"password es requerido"},9061:(y,v,i)=>{i.d(v,{j:()=>r});var s=i(5312),l=i(4438),c=i(1626);let r=(()=>{var n;class o{constructor(t){this.http=t,this.apiUrl=s.c.apiConfig.apiUrl,this.token=s.c.apiConfig.token,this.endPoint=s.c.apiConfig.endPoint}getCharacters(t){return this.http.get(`${this.apiUrl}${this.token}${this.endPoint}${t}`)}getCharacterById(t){return this.http.get(`${this.apiUrl}${this.token}/${t}`)}}return(n=o).\u0275fac=function(t){return new(t||n)(l.KVO(c.Qq))},n.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),o})()},7633:(y,v,i)=>{i.d(v,{b:()=>r});var s=i(467),l=i(4438),c=i(4742);let r=(()=>{var n;class o{constructor(t,d){this.alertController=t,this.toastController=d,this.personajes_favoritos=[];const _=localStorage.getItem("personajes_favoritos");_&&(this.personajes_favoritos=JSON.parse(_))}agregarFavorito(t){this.esFavorito(t.id)?console.log("El personaje ya existe en la lista:",t):(this.personajes_favoritos.push(t),this.guardarEnLocalStorage(),this.presentToast("Personaje agregado a favoritos \u2b50"),console.log("Personaje agregado!!!!:",t))}esFavorito(t){return this.personajes_favoritos.some(d=>d.id===t)}obtenerFavoritos(){return this.personajes_favoritos}actualizarFavoritos(t){this.personajes_favoritos=t,this.guardarEnLocalStorage()}guardarEnLocalStorage(){localStorage.setItem("personajes_favoritos",JSON.stringify(this.personajes_favoritos))}presentToast(t){var d=this;return(0,s.A)(function*(){(yield d.toastController.create({message:t,duration:2e3,color:"dark"})).present()})()}quitarFavorito(t){this.personajes_favoritos=this.personajes_favoritos.filter(d=>d.id!==t),this.actualizarFavoritos(this.personajes_favoritos),console.log("Personaje eliminado"),this.presentToast("Personaje eliminado de favoritos \u274c")}}return(n=o).\u0275fac=function(t){return new(t||n)(l.KVO(c.hG),l.KVO(c.K_))},n.\u0275prov=l.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),o})()}}]);