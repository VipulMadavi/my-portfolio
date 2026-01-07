const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/terminal-app-CA0ysPC_.js","assets/terminal-app-DAB7rWVK.css"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const f of t.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const _="modulepreload",b=function(r){return"/"+r},h={},m=function(o,l,s){let e=Promise.resolve();if(l&&l.length>0){let p=function(n){return Promise.all(n.map(a=>Promise.resolve(a).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};var f=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),i=d?.nonce||d?.getAttribute("nonce");e=p(l.map(n=>{if(n=b(n),n in h)return;h[n]=!0;const a=n.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${u}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":_,a||(c.as="script"),c.crossOrigin="",c.href=n,i&&c.setAttribute("nonce",i),document.head.appendChild(c),a)return new Promise((v,E)=>{c.addEventListener("load",v),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function t(d){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=d,window.dispatchEvent(i),!i.defaultPrevented)throw d}return e.then(d=>{for(const i of d||[])i.status==="rejected"&&t(i.reason);return o().catch(t)})};function w(r){const o=document.createElement("div");o.id="sys-loader",o.style.cssText=`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #0f172a;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
    color: #38bdf8;
    flex-direction: column;
  `,o.innerHTML=`
    <div style="width: 300px;">
      <div style="margin-bottom: 10px;">> SYSTEM_BOOT_SEQUENCE_INIT</div>
      <div id="loader-bar" style="height: 4px; background: #1e293b; width: 100%;">
        <div id="loader-progress" style="height: 100%; background: #38bdf8; width: 0%;"></div>
      </div>
      <div id="loader-status" style="margin-top: 10px; font-size: 0.8rem; color: #94a3b8;">Loading modules...</div>
    </div>
  `,document.body.appendChild(o);const l=document.getElementById("loader-progress"),s=document.getElementById("loader-status");let e=0;const t=setInterval(()=>{e+=Math.random()*5,e>100&&(e=100),l.style.width=e+"%",e<30?s.textContent="Loading modules...":e<60?s.textContent="Verifying security protocols...":e<90?s.textContent="Connecting to cloud nodes...":s.textContent="System Ready.",e>=100&&(clearInterval(t),setTimeout(()=>{o.style.opacity="0",o.style.transition="opacity 0.5s",setTimeout(()=>{o.remove(),r&&r()},500)},500))},50)}const y=document.querySelector("#app"),g=new URLSearchParams(window.location.search),L=g.get("mode")==="shell"||g.get("dev")==="true";w(()=>{L?m(()=>import("./terminal-app-CA0ysPC_.js"),__vite__mapDeps([0,1])).then(r=>{r.mount(y)}):m(()=>import("./gui-app-BBSgOPVx.js"),[]).then(r=>{r.mount(y)})});m(()=>import("./network-graph-BV1tfHWw.js"),[]).then(r=>{r.init(document.querySelector("#bg-canvas"))});
