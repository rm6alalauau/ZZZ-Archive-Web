import{al as de,g as $,aj as vt,r as ft,m as O,q as Re,p as _,am as M,e as v,an as G,ao as Ne,ap as xe,aq as mt,ar as gt,as as bt,k as o,N as Oe,at as ve,b as H,c as U,n as q,i as pe,t as L,j as p,B as K,C as yt,w as Ae,s as ht,A as re,J as j,au as Ct,f as Fe,U as St,av as _t,P as Me,y as kt,aw as wt,O as be,ax as xt,l as I,I as se,z as oe,ay as It,az as Bt,aA as Vt,v as D,aB as ye,aC as Pt,X as Et,$ as De,aD as Ie,aE as Lt,o as je,aF as Tt,aG as Be,a1 as Ge,aH as zt,aI as Ve,H as He,K as Ue,E as fe,T as $t,aJ as Rt,M as Nt,F as Ot}from"./index-Tqx-g4jO.js";const pt=["top","bottom"],At=["start","end","left","right"];function Ft(e,n){let[a,t]=e.split(" ");return t||(t=de(pt,a)?"start":de(At,a)?"top":"center"),{side:Pe(a,n),align:Pe(t,n)}}function Pe(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function Vn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return $()({name:a??vt(ft(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...O()},setup(t,s){let{slots:l}=s;return()=>{var r;return Re(t.tag,{class:[e,t.class],style:t.style},(r=l.default)==null?void 0:r.call(l))}}})}const Pn=(e,n)=>{const a=e.__vccOpts||e;for(const[t,s]of n)a[t]=s;return a},he=_({border:[Boolean,Number,String]},"border");function Ce(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{borderClasses:v(()=>{const t=G(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))s.push(`border-${l}`);return s})}}const Mt=[null,"default","comfortable","compact"],Se=_({density:{type:String,default:"default",validator:e=>Mt.includes(e)}},"density");function _e(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{densityClasses:v(()=>`${n}--density-${e.density}`)}}const qe=_({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function We(e){return{elevationClasses:v(()=>{const a=G(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const Q=_({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Z(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{roundedClasses:v(()=>{const t=G(e)?e.value:e.rounded,s=G(e)?e.value:e.tile,l=[];if(t===!0||t==="")l.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))l.push(`rounded-${r}`);else(s||t===!1)&&l.push("rounded-0");return l})}}function ke(e){return Ne(()=>{const n=[],a={};if(e.value.background)if(xe(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&mt(e.value.background)){const t=gt(e.value.background);if(t.a==null||t.a===1){const s=bt(t);a.color=s,a.caretColor=s}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(xe(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function le(e,n){const a=v(()=>({text:G(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=ke(a);return{textColorClasses:t,textColorStyles:s}}function te(e,n){const a=v(()=>({background:G(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=ke(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Dt=["elevated","flat","tonal","outlined","text","plain"];function Xe(e,n){return o(Oe,null,[e&&o("span",{key:"overlay",class:`${n}__overlay`},null),o("span",{key:"underlay",class:`${n}__underlay`},null)])}const we=_({color:String,variant:{type:String,default:"elevated",validator:e=>Dt.includes(e)}},"variant");function Ye(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();const a=v(()=>{const{variant:l}=ve(e);return`${n}--variant-${l}`}),{colorClasses:t,colorStyles:s}=ke(v(()=>{const{variant:l,color:r}=ve(e);return{[["elevated","flat"].includes(l)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const Je=_({baseColor:String,divided:Boolean,...he(),...O(),...Se(),...qe(),...Q(),...H(),...U(),...we()},"VBtnGroup"),Ee=$()({name:"VBtnGroup",props:Je(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=q(e),{densityClasses:s}=_e(e),{borderClasses:l}=Ce(e),{elevationClasses:r}=We(e),{roundedClasses:u}=Z(e);pe({VBtn:{height:"auto",baseColor:L(e,"baseColor"),color:L(e,"color"),density:L(e,"density"),flat:!0,variant:L(e,"variant")}}),p(()=>o(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,l.value,s.value,r.value,u.value,e.class],style:e.style},a))}}),jt=_({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Gt=_({value:null,disabled:Boolean,selectedClass:String},"group-item");function Ht(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=K("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=yt();Ae(Symbol.for(`${n.description}:id`),s);const l=ht(n,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const r=L(e,"value"),u=v(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:r,disabled:u},t),re(()=>{l.unregister(s)});const f=v(()=>l.isSelected(s)),m=v(()=>l.items.value[0].id===s),g=v(()=>l.items.value[l.items.value.length-1].id===s),b=v(()=>f.value&&[l.selectedClass.value,e.selectedClass]);return j(f,i=>{t.emit("group:selected",{value:i})},{flush:"sync"}),{id:s,isSelected:f,isFirst:m,isLast:g,toggle:()=>l.select(s,!f.value),select:i=>l.select(s,i),selectedClass:b,value:r,disabled:u,group:l}}function Ut(e,n){let a=!1;const t=Ct([]),s=Fe(e,"modelValue",[],i=>i==null?[]:Ke(t,kt(i)),i=>{const c=Wt(t,i);return e.multiple?c:c[0]}),l=K("useGroup");function r(i,c){const h=i,d=Symbol.for(`${n.description}:id`),S=wt(d,l==null?void 0:l.vnode).indexOf(c);ve(h.value)==null&&(h.value=S,h.useIndexAsValue=!0),S>-1?t.splice(S,0,h):t.push(h)}function u(i){if(a)return;f();const c=t.findIndex(h=>h.id===i);t.splice(c,1)}function f(){const i=t.find(c=>!c.disabled);i&&e.mandatory==="force"&&!s.value.length&&(s.value=[i.id])}St(()=>{f()}),re(()=>{a=!0}),_t(()=>{for(let i=0;i<t.length;i++)t[i].useIndexAsValue&&(t[i].value=i)});function m(i,c){const h=t.find(d=>d.id===i);if(!(c&&(h!=null&&h.disabled)))if(e.multiple){const d=s.value.slice(),C=d.findIndex(P=>P===i),S=~C;if(c=c??!S,S&&e.mandatory&&d.length<=1||!S&&e.max!=null&&d.length+1>e.max)return;C<0&&c?d.push(i):C>=0&&!c&&d.splice(C,1),s.value=d}else{const d=s.value.includes(i);if(e.mandatory&&d)return;s.value=c??!d?[i]:[]}}function g(i){if(e.multiple,s.value.length){const c=s.value[0],h=t.findIndex(S=>S.id===c);let d=(h+i)%t.length,C=t[d];for(;C.disabled&&d!==h;)d=(d+i)%t.length,C=t[d];if(C.disabled)return;s.value=[t[d].id]}else{const c=t.find(h=>!h.disabled);c&&(s.value=[c.id])}}const b={register:r,unregister:u,selected:s,select:m,disabled:L(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:i=>s.value.includes(i),selectedClass:v(()=>e.selectedClass),items:v(()=>t),getItemIndex:i=>qt(t,i)};return Ae(n,b),b}function qt(e,n){const a=Ke(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function Ke(e,n){const a=[];return n.forEach(t=>{const s=e.find(r=>Me(t,r.value)),l=e[t];(s==null?void 0:s.value)!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function Wt(e,n){const a=[];return n.forEach(t=>{const s=e.findIndex(l=>l.id===t);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const Qe=Symbol.for("vuetify:v-btn-toggle"),Xt=_({...Je(),...jt()},"VBtnToggle");$()({name:"VBtnToggle",props:Xt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:l,select:r,selected:u}=Ut(e,Qe);return p(()=>{const f=Ee.filterProps(e);return o(Ee,be({class:["v-btn-toggle",e.class]},f,{style:e.style}),{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,{isSelected:t,next:s,prev:l,select:r,selected:u})]}})}),{next:s,prev:l,select:r}}});const Yt=_({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ne=$(!1)({name:"VDefaultsProvider",props:Yt(),setup(e,n){let{slots:a}=n;const{defaults:t,disabled:s,reset:l,root:r,scoped:u}=xt(e);return pe(t,{reset:l,root:r,scoped:u,disabled:s}),()=>{var f;return(f=a.default)==null?void 0:f.call(a)}}}),Jt=["x-small","small","default","large","x-large"],ue=_({size:{type:[String,Number],default:"default"}},"size");function ce(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return Ne(()=>{let a,t;return de(Jt,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:I(e.size),height:I(e.size)}),{sizeClasses:a,sizeStyles:t}})}const Kt=_({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:se,...O(),...ue(),...H({tag:"i"}),...U()},"VIcon"),ae=$()({name:"VIcon",props:Kt(),setup(e,n){let{attrs:a,slots:t}=n;const s=oe(),{themeClasses:l}=q(e),{iconData:r}=It(v(()=>s.value||e.icon)),{sizeClasses:u}=ce(e),{textColorClasses:f,textColorStyles:m}=le(L(e,"color"));return p(()=>{var i,c;const g=(i=t.default)==null?void 0:i.call(t);g&&(s.value=(c=Bt(g).filter(h=>h.type===Vt&&h.children&&typeof h.children=="string")[0])==null?void 0:c.children);const b=!!(a.onClick||a.onClickOnce);return o(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",l.value,u.value,f.value,{"v-icon--clickable":b,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},m.value,e.style],role:b?"button":void 0,"aria-hidden":!b,tabindex:b?e.disabled?-1:0:void 0},{default:()=>[g]})}),{}}});function Ze(e,n){const a=oe(),t=D(!1);if(ye){const s=new IntersectionObserver(l=>{t.value=!!l.find(r=>r.isIntersecting)},n);re(()=>{s.disconnect()}),j(a,(l,r)=>{r&&(s.unobserve(r),t.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:a,isIntersecting:t}}const Qt=_({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...O(),...ue(),...H({tag:"div"}),...U()},"VProgressCircular"),Zt=$()({name:"VProgressCircular",props:Qt(),setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,l=oe(),{themeClasses:r}=q(e),{sizeClasses:u,sizeStyles:f}=ce(e),{textColorClasses:m,textColorStyles:g}=le(L(e,"color")),{textColorClasses:b,textColorStyles:i}=le(L(e,"bgColor")),{intersectionRef:c,isIntersecting:h}=Ze(),{resizeRef:d,contentRect:C}=Pt(),S=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),P=v(()=>Number(e.width)),E=v(()=>f.value?Number(e.size):C.value?C.value.width:Math.max(P.value,32)),w=v(()=>t/(1-P.value/E.value)*2),T=v(()=>P.value/E.value*w.value),R=v(()=>I((100-S.value)/100*s));return Et(()=>{c.value=l.value,d.value=l.value}),p(()=>o(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,u.value,m.value,e.class],style:[f.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[o("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[o("circle",{class:["v-progress-circular__underlay",b.value],style:i.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),o("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":s,"stroke-dashoffset":R.value},null)]),a.default&&o("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},et=_({location:String},"location");function tt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=De();return{locationStyles:v(()=>{if(!e.location)return{};const{side:l,align:r}=Ft(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function u(m){return a?a(m):0}const f={};return l!=="center"&&(n?f[Le[l]]=`calc(100% - ${u(l)}px)`:f[l]=0),r!=="center"?n?f[Le[r]]=`calc(100% - ${u(r)}px)`:f[r]=0:(l==="center"?f.top=f.left="50%":f[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",f.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),f})}}const en=_({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...O(),...et({location:"top"}),...Q(),...H(),...U()},"VProgressLinear"),tn=$()({name:"VProgressLinear",props:en(),emits:{"update:modelValue":e=>!0},setup(e,n){var x;let{slots:a}=n;const t=Fe(e,"modelValue"),{isRtl:s,rtlClasses:l}=De(),{themeClasses:r}=q(e),{locationStyles:u}=tt(e),{textColorClasses:f,textColorStyles:m}=le(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:b}=te(v(()=>e.bgColor||e.color)),{backgroundColorClasses:i,backgroundColorStyles:c}=te(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:d}=te(e,"color"),{roundedClasses:C}=Z(e),{intersectionRef:S,isIntersecting:P}=Ze(),E=v(()=>parseFloat(e.max)),w=v(()=>parseFloat(e.height)),T=v(()=>Ie(parseFloat(e.bufferValue)/E.value*100,0,100)),R=v(()=>Ie(parseFloat(t.value)/E.value*100,0,100)),z=v(()=>s.value!==e.reverse),W=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),A=Lt&&((x=window.matchMedia)==null?void 0:x.call(window,"(forced-colors: active)").matches);function X(y){if(!S.value)return;const{left:k,right:B,width:N}=S.value.getBoundingClientRect(),F=z.value?N-y.clientX+(B-N):y.clientX-k;t.value=Math.round(F/N*E.value)}return p(()=>o(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&P.value,"v-progress-linear--reverse":z.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,r.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?I(w.value):0,"--v-progress-linear-height":I(w.value),...e.absolute?u.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:R.value,onClick:e.clickable&&X},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",f.value],style:{...m.value,[z.value?"left":"right"]:I(-w.value),borderTop:`${I(w.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${I(w.value/4)})`,width:I(100-T.value,"%"),"--v-progress-linear-stream-to":I(w.value*(z.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",A?void 0:g.value],style:[b.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),o("div",{class:["v-progress-linear__buffer",A?void 0:i.value],style:[c.value,{opacity:parseFloat(e.bufferOpacity),width:I(T.value,"%")}]},null),o(je,{name:W.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(y=>o("div",{key:y,class:["v-progress-linear__indeterminate",y,A?void 0:h.value],style:d.value},null))]):o("div",{class:["v-progress-linear__determinate",A?void 0:h.value],style:[d.value,{width:I(R.value,"%")}]},null)]}),a.default&&o("div",{class:"v-progress-linear__content"},[a.default({value:R.value,buffer:T.value})])]})),{}}}),nn=_({loading:[Boolean,String]},"loader");function an(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{loaderClasses:v(()=>({[`${n}--loading`]:e.loading}))}}function En(e,n){var t;let{slots:a}=n;return o("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||o(tn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const sn=["static","relative","fixed","absolute","sticky"],ln=_({position:{type:String,validator:e=>sn.includes(e)}},"position");function rn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{positionClasses:v(()=>e.position?`${n}--${e.position}`:void 0)}}function on(){const e=K("useRoute");return v(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function Ln(){var e,n;return(n=(e=K("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function un(e,n){var m,g;const a=Tt("RouterLink"),t=v(()=>!!(e.href||e.to)),s=v(()=>(t==null?void 0:t.value)||Be(n,"click")||Be(e,"click"));if(typeof a=="string"||!("useLink"in a))return{isLink:t,isClickable:s,href:L(e,"href")};const l=v(()=>({...e,to:L(()=>e.to||"")})),r=a.useLink(l.value),u=v(()=>e.to?r:void 0),f=on();return{isLink:t,isClickable:s,route:(m=u.value)==null?void 0:m.route,navigate:(g=u.value)==null?void 0:g.navigate,isActive:v(()=>{var b,i,c;return u.value?e.exact?f.value?((c=u.value.isExactActive)==null?void 0:c.value)&&Me(u.value.route.value.query,f.value.query):((i=u.value.isExactActive)==null?void 0:i.value)??!1:((b=u.value.isActive)==null?void 0:b.value)??!1:!1}),href:v(()=>{var b;return e.to?(b=u.value)==null?void 0:b.route.value.href:e.href})}}const cn=_({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function dn(e,n){j(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&Ge(()=>{n(!0)})},{immediate:!0})}const me=Symbol("rippleStop"),vn=80;function Te(e,n){e.style.transform=n,e.style.webkitTransform=n}function ge(e){return e.constructor.name==="TouchEvent"}function nt(e){return e.constructor.name==="KeyboardEvent"}const fn=function(e,n){var b;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!nt(e)){const i=n.getBoundingClientRect(),c=ge(e)?e.touches[e.touches.length-1]:e;t=c.clientX-i.left,s=c.clientY-i.top}let l=0,r=.3;(b=n._ripple)!=null&&b.circle?(r=.15,l=n.clientWidth/2,l=a.center?l:l+Math.sqrt((t-l)**2+(s-l)**2)/4):l=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const u=`${(n.clientWidth-l*2)/2}px`,f=`${(n.clientHeight-l*2)/2}px`,m=a.center?u:`${t-l}px`,g=a.center?f:`${s-l}px`;return{radius:l,scale:r,x:m,y:g,centerX:u,centerY:f}},ie={show(e,n){var c;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((c=n==null?void 0:n._ripple)!=null&&c.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:l,scale:r,x:u,y:f,centerX:m,centerY:g}=fn(e,n,a),b=`${l*2}px`;s.className="v-ripple__animation",s.style.width=b,s.style.height=b,n.appendChild(t);const i=window.getComputedStyle(n);i&&i.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Te(s,`translate(${u}, ${f}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Te(s,`translate(${m}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=a.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function at(e){return typeof e>"u"||!!e}function Y(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[me])){if(e[me]=!0,ge(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||nt(e),a._ripple.class&&(n.class=a._ripple.class),ge(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{ie.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},vn)}else ie.show(e,a,n)}}function ze(e){e[me]=!0}function V(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{V(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),ie.hide(n)}}function st(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let J=!1;function lt(e){!J&&(e.keyCode===Ve.enter||e.keyCode===Ve.space)&&(J=!0,Y(e))}function it(e){J=!1,V(e)}function rt(e){J&&(J=!1,V(e))}function ot(e,n,a){const{value:t,modifiers:s}=n,l=at(t);if(l||ie.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,zt(t)&&t.class&&(e._ripple.class=t.class),l&&!a){if(s.stop){e.addEventListener("touchstart",ze,{passive:!0}),e.addEventListener("mousedown",ze);return}e.addEventListener("touchstart",Y,{passive:!0}),e.addEventListener("touchend",V,{passive:!0}),e.addEventListener("touchmove",st,{passive:!0}),e.addEventListener("touchcancel",V),e.addEventListener("mousedown",Y),e.addEventListener("mouseup",V),e.addEventListener("mouseleave",V),e.addEventListener("keydown",lt),e.addEventListener("keyup",it),e.addEventListener("blur",rt),e.addEventListener("dragstart",V,{passive:!0})}else!l&&a&&ut(e)}function ut(e){e.removeEventListener("mousedown",Y),e.removeEventListener("touchstart",Y),e.removeEventListener("touchend",V),e.removeEventListener("touchmove",st),e.removeEventListener("touchcancel",V),e.removeEventListener("mouseup",V),e.removeEventListener("mouseleave",V),e.removeEventListener("keydown",lt),e.removeEventListener("keyup",it),e.removeEventListener("dragstart",V),e.removeEventListener("blur",rt)}function mn(e,n){ot(e,n,!1)}function gn(e){delete e._ripple,ut(e)}function bn(e,n){if(n.value===n.oldValue)return;const a=at(n.oldValue);ot(e,n,a)}const yn={mounted:mn,unmounted:gn,updated:bn},hn=_({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Qe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:se,appendIcon:se,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...he(),...O(),...Se(),...He(),...qe(),...Gt(),...nn(),...et(),...ln(),...Q(),...cn(),...ue(),...H({tag:"button"}),...U(),...we({variant:"elevated"})},"VBtn"),Tn=$()({name:"VBtn",props:hn(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=q(e),{borderClasses:l}=Ce(e),{densityClasses:r}=_e(e),{dimensionStyles:u}=Ue(e),{elevationClasses:f}=We(e),{loaderClasses:m}=an(e),{locationStyles:g}=tt(e),{positionClasses:b}=rn(e),{roundedClasses:i}=Z(e),{sizeClasses:c,sizeStyles:h}=ce(e),d=Ht(e,e.symbol,!1),C=un(e,a),S=v(()=>{var x;return e.active!==void 0?e.active:C.isLink.value?(x=C.isActive)==null?void 0:x.value:d==null?void 0:d.isSelected.value}),P=v(()=>S.value?e.activeColor??e.color:e.color),E=v(()=>{var y,k;return{color:(d==null?void 0:d.isSelected.value)&&(!C.isLink.value||((y=C.isActive)==null?void 0:y.value))||!d||((k=C.isActive)==null?void 0:k.value)?P.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:w,colorStyles:T,variantClasses:R}=Ye(E),z=v(()=>(d==null?void 0:d.disabled.value)||e.disabled),W=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),A=v(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function X(x){var y;z.value||C.isLink.value&&(x.metaKey||x.ctrlKey||x.shiftKey||x.button!==0||a.target==="_blank")||((y=C.navigate)==null||y.call(C,x),d==null||d.toggle())}return dn(C,d==null?void 0:d.select),p(()=>{const x=C.isLink.value?"a":e.tag,y=!!(e.prependIcon||t.prepend),k=!!(e.appendIcon||t.append),B=!!(e.icon&&e.icon!==!0);return fe(o(x,{type:x==="a"?void 0:"button",class:["v-btn",d==null?void 0:d.selectedClass.value,{"v-btn--active":S.value,"v-btn--block":e.block,"v-btn--disabled":z.value,"v-btn--elevated":W.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,w.value,r.value,f.value,m.value,b.value,i.value,c.value,R.value,e.class],style:[T.value,u.value,g.value,h.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:z.value||void 0,href:C.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:X,value:A.value},{default:()=>{var N;return[Xe(!0,"v-btn"),!e.icon&&y&&o("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?o(ne,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):o(ae,{key:"prepend-icon",icon:e.prependIcon},null)]),o("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&B?o(ae,{key:"content-icon",icon:e.icon},null):o(ne,{key:"content-defaults",disabled:!B,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var F;return[((F=t.default)==null?void 0:F.call(t))??e.text]}})]),!e.icon&&k&&o("span",{key:"append",class:"v-btn__append"},[t.append?o(ne,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):o(ae,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&o("span",{key:"loader",class:"v-btn__loader"},[((N=t.loader)==null?void 0:N.call(t))??o(Zt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[yn,!z.value&&e.ripple,"",{center:!!e.icon}]])}),{group:d}}}),Cn=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ee=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:s,group:l,...r}=e,{component:u=l?$t:je,...f}=typeof t=="object"?t:{};return Re(u,be(typeof t=="string"?{name:s?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:l}).filter(m=>{let[g,b]=m;return b!==void 0})),r),a)};function Sn(e){return{aspectStyles:v(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const ct=_({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...O(),...He()},"VResponsive"),$e=$()({name:"VResponsive",props:ct(),setup(e,n){let{slots:a}=n;const{aspectStyles:t}=Sn(e),{dimensionStyles:s}=Ue(e);return p(()=>{var l;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[o("div",{class:"v-responsive__sizer",style:t.value},null),(l=a.additional)==null?void 0:l.call(a),a.default&&o("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function _n(e,n){if(!ye)return;const a=n.modifiers||{},t=n.value,{handler:s,options:l}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var b;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const m=(b=e._observe)==null?void 0:b[n.instance.$.uid];if(!m)return;const g=u.some(i=>i.isIntersecting);s&&(!a.quiet||m.init)&&(!a.once||g||m.init)&&s(g,u,f),g&&a.once?dt(e,n):m.init=!0},l);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function dt(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const kn={mounted:_n,unmounted:dt},wn=_({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ct(),...O(),...Q(),...Cn()},"VImg"),xn=$()({name:"VImg",directives:{intersect:kn},props:wn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=te(L(e,"color")),{roundedClasses:r}=Z(e),u=K("VImg"),f=D(""),m=oe(),g=D(e.eager?"loading":"idle"),b=D(),i=D(),c=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=v(()=>c.value.aspect||b.value/i.value||0);j(()=>e.src,()=>{d(g.value!=="idle")}),j(h,(y,k)=>{!y&&k&&m.value&&w(m.value)}),Rt(()=>d());function d(y){if(!(e.eager&&y)&&!(ye&&!y&&!e.eager)){if(g.value="loading",c.value.lazySrc){const k=new Image;k.src=c.value.lazySrc,w(k,null)}c.value.src&&Ge(()=>{var k;a("loadstart",((k=m.value)==null?void 0:k.currentSrc)||c.value.src),setTimeout(()=>{var B;if(!u.isUnmounted)if((B=m.value)!=null&&B.complete){if(m.value.naturalWidth||S(),g.value==="error")return;h.value||w(m.value,null),g.value==="loading"&&C()}else h.value||w(m.value),P()})})}}function C(){var y;u.isUnmounted||(P(),w(m.value),g.value="loaded",a("load",((y=m.value)==null?void 0:y.currentSrc)||c.value.src))}function S(){var y;u.isUnmounted||(g.value="error",a("error",((y=m.value)==null?void 0:y.currentSrc)||c.value.src))}function P(){const y=m.value;y&&(f.value=y.currentSrc||y.src)}let E=-1;re(()=>{clearTimeout(E)});function w(y){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const B=()=>{if(clearTimeout(E),u.isUnmounted)return;const{naturalHeight:N,naturalWidth:F}=y;N||F?(b.value=F,i.value=N):!y.complete&&g.value==="loading"&&k!=null?E=window.setTimeout(B,k):(y.currentSrc.endsWith(".svg")||y.currentSrc.startsWith("data:image/svg+xml"))&&(b.value=1,i.value=1)};B()}const T=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),R=()=>{var B;if(!c.value.src||g.value==="idle")return null;const y=o("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:m,onLoad:C,onError:S},null),k=(B=t.sources)==null?void 0:B.call(t);return o(ee,{transition:e.transition,appear:!0},{default:()=>[fe(k?o("picture",{class:"v-img__picture"},[k,y]):y,[[Ot,g.value==="loaded"]])]})},z=()=>o(ee,{transition:e.transition},{default:()=>[c.value.lazySrc&&g.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),W=()=>t.placeholder?o(ee,{transition:e.transition,appear:!0},{default:()=>[(g.value==="loading"||g.value==="error"&&!t.error)&&o("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,A=()=>t.error?o(ee,{transition:e.transition,appear:!0},{default:()=>[g.value==="error"&&o("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,x=D(!1);{const y=j(h,k=>{k&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{x.value=!0})}),y())})}return p(()=>{const y=$e.filterProps(e);return fe(o($e,be({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!x.value},s.value,r.value,e.class],style:[{width:I(e.width==="auto"?b.value:e.width)},l.value,e.style]},y,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(Oe,null,[o(R,null,null),o(z,null,null),o(X,null,null),o(W,null,null),o(A,null,null)]),default:t.default}),[[Nt("intersect"),{handler:d,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:m,state:g,naturalWidth:b,naturalHeight:i}}}),In=_({start:Boolean,end:Boolean,icon:se,image:String,text:String,...he(),...O(),...Se(),...Q(),...ue(),...H(),...U(),...we({variant:"flat"})},"VAvatar"),zn=$()({name:"VAvatar",props:In(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=q(e),{borderClasses:s}=Ce(e),{colorClasses:l,colorStyles:r,variantClasses:u}=Ye(e),{densityClasses:f}=_e(e),{roundedClasses:m}=Z(e),{sizeClasses:g,sizeStyles:b}=ce(e);return p(()=>o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,l.value,f.value,m.value,g.value,u.value,e.class],style:[r.value,b.value,e.style]},{default:()=>[a.default?o(ne,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?o(xn,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(ae,{key:"icon",icon:e.icon},null):e.text,Xe(!1,"v-avatar")]})),{}}});export{ln as A,tt as B,rn as C,nn as D,an as E,tn as F,Gt as G,Ht as H,wn as I,En as L,ee as M,yn as R,Qe as V,Pn as _,Se as a,qe as b,Q as c,jt as d,te as e,_e as f,We as g,Z as h,Ut as i,le as j,ne as k,Vn as l,he as m,cn as n,we as o,un as p,Ye as q,Xe as r,zn as s,ae as t,Ce as u,Ln as v,Pe as w,xn as x,Tn as y,et as z};
