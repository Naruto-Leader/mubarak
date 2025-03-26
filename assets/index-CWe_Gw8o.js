import{r as ee,a as te,j as h}from"./index-DzVUwRe5.js";import{i as ne}from"./cz-Bg-pj02P.js";function se(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var M={},W;function ae(){if(W)return M;W=1;function a(r){if(typeof window>"u")return;const u=document.createElement("style");return u.setAttribute("type","text/css"),u.innerHTML=r,document.head.appendChild(u),r}Object.defineProperty(M,"__esModule",{value:!0});var e=ee();function l(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var s=l(e);a(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const _=e.forwardRef(function({style:u={},className:A="",autoFill:m=!1,play:f=!0,pauseOnHover:w=!1,pauseOnClick:b=!1,direction:t="left",speed:v=50,delay:S=0,loop:C=0,gradient:P=!1,gradientColor:D="white",gradientWidth:p=200,onFinish:T,onCycleComplete:X,onMount:z,children:y},F){const[j,G]=e.useState(0),[E,H]=e.useState(0),[x,k]=e.useState(1),[R,J]=e.useState(!1),Q=e.useRef(null),i=F||Q,d=e.useRef(null),g=e.useCallback(()=>{if(d.current&&i.current){const n=i.current.getBoundingClientRect(),N=d.current.getBoundingClientRect();let o=n.width,c=N.width;(t==="up"||t==="down")&&(o=n.height,c=N.height),k(m&&o&&c&&c<o?Math.ceil(o/c):1),G(o),H(c)}},[m,i,t]);e.useEffect(()=>{if(R&&(g(),d.current&&i.current)){const n=new ResizeObserver(()=>g());return n.observe(i.current),n.observe(d.current),()=>{n&&n.disconnect()}}},[g,i,R]),e.useEffect(()=>{g()},[g,y]),e.useEffect(()=>{J(!0)},[]),e.useEffect(()=>{typeof z=="function"&&z()},[]);const I=e.useMemo(()=>m?E*x/v:E<j?j/v:E/v,[m,j,E,x,v]),K=e.useMemo(()=>Object.assign(Object.assign({},u),{"--pause-on-hover":!f||w?"paused":"running","--pause-on-click":!f||w&&!b||b?"paused":"running","--width":t==="up"||t==="down"?"100vh":"100%","--transform":t==="up"?"rotate(-90deg)":t==="down"?"rotate(90deg)":"none"}),[u,f,w,b,t]),Y=e.useMemo(()=>({"--gradient-color":D,"--gradient-width":typeof p=="number"?`${p}px`:p}),[D,p]),U=e.useMemo(()=>({"--play":f?"running":"paused","--direction":t==="left"?"normal":"reverse","--duration":`${I}s`,"--delay":`${S}s`,"--iteration-count":C?`${C}`:"infinite","--min-width":m?"auto":"100%"}),[f,t,I,S,C,m]),B=e.useMemo(()=>({"--transform":t==="up"?"rotate(90deg)":t==="down"?"rotate(-90deg)":"none"}),[t]),V=e.useCallback(n=>[...Array(Number.isFinite(n)&&n>=0?n:0)].map((N,o)=>s.default.createElement(e.Fragment,{key:o},e.Children.map(y,c=>s.default.createElement("div",{style:B,className:"rfm-child"},c)))),[B,y]);return R?s.default.createElement("div",{ref:i,style:K,className:"rfm-marquee-container "+A},P&&s.default.createElement("div",{style:Y,className:"rfm-overlay"}),s.default.createElement("div",{className:"rfm-marquee",style:U,onAnimationIteration:X,onAnimationEnd:T},s.default.createElement("div",{className:"rfm-initial-child-container",ref:d},e.Children.map(y,n=>s.default.createElement("div",{style:B,className:"rfm-child"},n))),V(x-1)),s.default.createElement("div",{className:"rfm-marquee",style:U},V(x))):null});return M.default=_,M}var re=ae();const ie=se(re),oe="marquee-module__sectionMarquue__Ol",ce="marquee-module__listMarquee__5w",ue="marquee-module__item__vH",me="marquee-module__itemExchange__1v",q={sectionMarquue:oe,listMarquee:ce,item:ue,itemExchange:me},le="/assets/1-DgIh59Qv.png",fe="/assets/2-pWjl-rg0.png",de="/assets/3-B6b4zV1S.png",ge="/assets/4-v4vSy5j4.png",he="/assets/5-CC7B5t5J.png",ve="/assets/7-DMo7LwhU.png",pe="/assets/8-DZrvLXuB.png",ye="/assets/9-BICnNUVj.png",Ee="/assets/10-DdV10BW-.png",xe="/assets/11-aMKbZHCM.png",Me="/assets/12-C6ZhodzC.png",qe="/assets/13-DpTVoTPE.png",_e="/assets/g-B_hGgooE.png",we="/assets/1-BRs0JIZ4.svg",be="/assets/2-CfhF6plY.svg",Z="/assets/3-FmzUaZn2.svg",Ce="/assets/4-VukaF_MG.svg",L="/assets/5-BFncFUQs.svg",O="/assets/6-B573HCPA.svg",$="/assets/7-B-cIUb0-.svg",je="/assets/8-CGSd2amV.svg",Re="/assets/9-CHb-JLE7.svg",Be="/assets/10-CX8TMQg_.svg",Ne="/assets/11-Bz2mynjM.svg",Se="/assets/12-MC5Mdt_9.svg",De="/assets/13-BiOBwx2U.svg",Ie=({isReverse:a,exchange:e})=>{const l=te.useMemo(()=>e?[we,be,Z,Ce,L,O,$,je,Re,Be,Z,L,O,$,Ne,Se,De]:[le,fe,de,ge,he,ve,pe,ye,Ee,xe,Me,qe,ne,_e],[e]);return h.jsx("div",{className:q.sectionMarquue,children:h.jsx(ie,{direction:a===!0?"left":"right",speed:e?200:250,loop:0,gradient:!1,children:h.jsx("div",{className:q.listMarquee,children:l==null?void 0:l.map((s,_)=>h.jsx("div",{className:e?q.itemExchange:q.item,children:h.jsx("img",{src:s,alt:"1"})},_))})})})};export{Ie as M};
