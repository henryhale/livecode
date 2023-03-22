import{o as m,c as p,a as c,r as C,b as h,d as j,w,L as B,e as M,f as R,g as H,h as x,i as S,n as _,F as E,j as $,k as O,v as D,t as P,l as q}from"./vendor-f3b2d100.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const W=""+new URL("../brand.svg",import.meta.url).href;const A=(r,e)=>{const o=r.__vccOpts||r;for(const[a,t]of e)o[a]=t;return o},F={},U={class:"nav"};function I(r,e){return m(),p("div",U,[c("div",null,[c("div",null,[C(r.$slots,"brand",{},void 0,!0)]),c("div",null,[C(r.$slots,"default",{},void 0,!0)])])])}const V=A(F,[["render",I],["__scopeId","data-v-62deab83"]]),K="modulepreload",z=function(r,e){return new URL(r,e).href},N={},J=function(e,o,a){if(!o||o.length===0)return e();const t=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=z(n,a),n in N)return;N[n]=!0;const i=n.endsWith(".css"),y=i?'[rel="stylesheet"]':"";if(!!a)for(let s=t.length-1;s>=0;s--){const l=t[s];if(l.href===n&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${y}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":K,i||(d.as="script",d.crossOrigin=""),d.href=n,document.head.appendChild(d),i)return new Promise((s,l)=>{d.addEventListener("load",s),d.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};const G={__name:"CodeMirror",props:{lang:{type:String,default:""},initialDoc:{type:String,default:""},file:{type:String,default:""}},emits:["change"],setup(r,{emit:e}){const o=r,a=h();let t;return j(async()=>{const n=(await J(()=>import("./editor-4ec549af.js").then(i=>i.O),["./editor-4ec549af.js","./vendor-f3b2d100.js"],import.meta.url)).default;t=await n({target:a.value,lang:o.lang,initialDoc:o.initialDoc,file:o.file}),w(()=>e("change",t.doc.value))}),(n,i)=>(m(),p("div",{ref_key:"el",ref:a},null,512))}};let v,f;function Q(r){v=r.value,f=v.contentWindow.document}let b;function X(r){!v||!f||(b&&clearTimeout(b),b=setTimeout(()=>{let e=f.querySelector("script#stag");e&&(e.parentNode.removeChild(e),v.contentWindow.__$fn_=void 0),e=document.createElement("script"),e.id="stag",f.head.appendChild(e),e.textContent=`
var __$fn_ = function() {
  try {
    ${r}
  } 
  catch(err) { 
    console.log(err);
  } 
};`,v.contentWindow.__$fn_.call()}))}function Y(r){f.body&&(f.body.innerHTML=r)}function Z(r){if(!f)return;let e=f.querySelector("style#xtag");e||(e=document.createElement("style"),e.id="xtag",f.head.appendChild(e)),e.innerHTML=r}const ee="livecode-backup",g=new B(new M(ee));function te(){return g.read(),g.data}function T(r){g.data=r,g.write()}const ne={"index.html":`<div id="app">
  <h1>Hello, World!</h1>
  <button>Count: 0</button>
</div>
`,"style.css":`#app {
  color: #0d79d1;
  text-align:center;
  margin: 4rem 0;
}

button {
  cursor: pointer;
  color: inherit;
  background-color: #e6f4ff;
  border-radius: 6px;
  border: 0 none;
  padding: 0.5rem 0.75rem;
}`,"main.js":`let count = 0;

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  btn.innerHTML = "Count: "+ (++count);
});

btn.click();
`},re={class:"box"},oe=c("img",{class:"w-6 h-6",src:W},null,-1),se=c("span",null,[c("b",null,"LiveCode")],-1),ie={class:"tabs"},ae=["onClick"],ce={class:"code"},le={__name:"App",setup(r){let e=te();(!e||typeof e!="object")&&(e=ne,T(e));const o=R(Object.assign({},e));function a(s){s.ctrlKey&&s.key.toLowerCase()==="s"&&(s.preventDefault(),console.log("backing up files..."),T(o),console.log("backup was successful..."))}const t=h(!0),n=h("index.html");function i(s){n.value=s}function y(s){const l=s.split(".").pop();return l==="js"?"javascript":l}function k(s,l){o[s]=l}const d=h();return j(()=>{Q(d),w(()=>Z(o["style.css"])),w(()=>{Y(o["index.html"]),X(o["main.js"])}),document.addEventListener("keydown",a,!1)}),H(()=>{document.removeEventListener("keydown",a,!1)}),(s,l)=>(m(),p("div",re,[x(V,null,{brand:S(()=>[oe,se]),default:S(()=>[c("button",{class:_(["btn",{active:t.value}]),onClick:l[0]||(l[0]=u=>t.value=!t.value)},P(t.value?"Hide ":"Show ")+" Preview ",3)]),_:1}),c("div",{class:_(["main",{"md:flex-row":t.value}])},[c("div",{class:_(["flex-col h-full",[t.value?"hidden md:flex md:w-1/2":"flex"]])},[c("div",ie,[(m(!0),p(E,null,$(Object.keys(o),u=>(m(),p("button",{key:u,class:_({active:n.value===u}),onClick:L=>i(u)},P(u),11,ae))),128))]),c("div",ce,[(m(!0),p(E,null,$(Object.keys(o),u=>O((m(),p("div",{key:u},[x(G,{lang:y(u),file:u,initialDoc:o[u],onChange:L=>k(u,L)},null,8,["lang","file","initialDoc","onChange"])])),[[D,u===n.value]])),128))])],2),O(c("div",{class:_(["h-full",{"md:w-1/2 md:border md:border-gray-200":t.value}])},[c("iframe",{ref_key:"iframe",ref:d,src:"about:blank",frameborder:"0",title:"preview"},null,512)],2),[[D,t.value]])],2)]))}};q(le).mount("#app");export{J as _};
