const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./terminal-app-CA0ysPC_.js","./terminal-app-DAB7rWVK.css"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const _="modulepreload",b=function(r,o){return new URL(r,o).href},y={},p=function(o,d,s){let e=Promise.resolve();if(d&&d.length>0){let E=function(i){return Promise.all(i.map(a=>Promise.resolve(a).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const n=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),h=l?.nonce||l?.getAttribute("nonce");e=E(d.map(i=>{if(i=b(i,s),i in y)return;y[i]=!0;const a=i.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(s)for(let f=n.length-1;f>=0;f--){const m=n[f];if(m.href===i&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":_,a||(c.as="script"),c.crossOrigin="",c.href=i,h&&c.setAttribute("nonce",h),document.head.appendChild(c),a)return new Promise((f,m)=>{c.addEventListener("load",f),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}function t(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return e.then(n=>{for(const l of n||[])l.status==="rejected"&&t(l.reason);return o().catch(t)})};function w(r){const o=document.createElement("div");o.id="sys-loader",o.style.cssText=`
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
  `,document.body.appendChild(o);const d=document.getElementById("loader-progress"),s=document.getElementById("loader-status");let e=0;const t=setInterval(()=>{e+=Math.random()*5,e>100&&(e=100),d.style.width=e+"%",e<30?s.textContent="Loading modules...":e<60?s.textContent="Verifying security protocols...":e<90?s.textContent="Connecting to cloud nodes...":s.textContent="System Ready.",e>=100&&(clearInterval(t),setTimeout(()=>{o.style.opacity="0",o.style.transition="opacity 0.5s",setTimeout(()=>{o.remove(),r&&r()},500)},500))},50)}const g=document.querySelector("#app"),v=new URLSearchParams(window.location.search),L=v.get("mode")==="shell"||v.get("dev")==="true";w(()=>{L?p(()=>import("./terminal-app-CA0ysPC_.js"),__vite__mapDeps([0,1]),import.meta.url).then(r=>{r.mount(g)}):p(()=>import("./gui-app-CUL7gU6U.js"),[],import.meta.url).then(r=>{r.mount(g)})});p(()=>import("./network-graph-BV1tfHWw.js"),[],import.meta.url).then(r=>{r.init(document.querySelector("#bg-canvas"))});
