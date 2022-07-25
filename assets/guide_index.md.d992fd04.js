import{o,c as t,b as e,u as i,d as a,a as n,w as r}from"./app.ac372f24.js";const s=e("h1",{id:"what-is-emnapi",tabindex:"-1"},[a("What is emnapi "),e("a",{class:"header-anchor",href:"#what-is-emnapi","aria-hidden":"true"},"#")],-1),d=["src"],c=n('<p><code>emnapi</code> is a subset of <a href="https://nodejs.org/docs/v16.15.0/api/n-api.html" target="_blank" rel="noopener noreferrer"><strong>N</strong>ode-<strong>API</strong></a> (named NAPI previously) implementation for <strong>Em</strong>scripten.</p><h2 id="motivation" tabindex="-1">Motivation <a class="header-anchor" href="#motivation" aria-hidden="true">#</a></h2><p>I built this library for aiming to be able to build Node-API code to Emscripten WebAssembly without changing your C/C++ code as far as possible.</p><h2 id="why-not-embind" tabindex="-1">Why not <code>embind</code> <a class="header-anchor" href="#why-not-embind" aria-hidden="true">#</a></h2><p><code>embind</code> is pretty good if you don&#39;t need to running same Node-API binding code on both browser and Node.js. Compiling to wasm by using <code>embind</code> can also make your code running on both browser and Node.js, but when targeting Node.js, we prefer compiling to Node.js native addon instead of wasm for native performance. So in this case you probably need to write Node-API binding for Node.js and <code>embind</code> binding for Emscripten WebAssembly. Look, you just want to make your native dependencies could be used in JavaScript world but you are doing duplicated things.</p><p>In fact, <code>emnapi</code> should be slower and more inefficient than <code>embind</code> for invoking binding function. But it still be worth to use when you highly expect to share the Node-API binding code.</p><h2 id="browser-compatibility" tabindex="-1">Browser Compatibility <a class="header-anchor" href="#browser-compatibility" aria-hidden="true">#</a></h2><p>Let&#39;s forget IE.</p><p><code>emnapi</code> JavaScript code is all ES5, but requires ES6 globals like <code>WeakMap</code>, and <a href="/emnapi-docs/reference/list.html">some of APIs</a> requires <code>BigInt</code>, <code>WeakRef</code> and <code>FinalizationRegistry</code> which is very new in ECMA Standard, so if you are using those APIs, your code will not work on old browsers or old version Node.js. You can click the link to see which browsers support <a href="https://www.caniuse.com/?search=WeakRef" target="_blank" rel="noopener noreferrer">WeakRef</a> \u548C <a href="https://www.caniuse.com/?search=FinalizationRegistry" target="_blank" rel="noopener noreferrer">FinalizationRegistry</a>\u3002Taking Chrome as an example, the recommended target browser version is higher than Chrome 84.</p><h2 id="is-it-ready-for-production" tabindex="-1">Is it ready for production? <a class="header-anchor" href="#is-it-ready-for-production" aria-hidden="true">#</a></h2><p>All Node.js official test passed! The functionality could be guaranteed.</p><p>The performance has not been tested enough, it should be within an acceptable range, use it at your own risk. You can also try to <a href="https://github.com/toyobayashi/emnapi/pulls" target="_blank" rel="noopener noreferrer">make emnapi be better</a>!</p>',12),m='{"title":"What is emnapi","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"Motivation","slug":"motivation"},{"level":2,"title":"Why not embind","slug":"why-not-embind"},{"level":2,"title":"Browser Compatibility","slug":"browser-compatibility"},{"level":2,"title":"Is it ready for production?","slug":"is-it-ready-for-production"}],"relativePath":"guide/index.md","lastUpdated":1658753133000}',l={},g=Object.assign(l,{__name:"index",setup(h){return(p,b)=>(o(),t("div",null,[s,e("img",{src:i(r)("/emnapi.svg"),alt:"emnapi logo",width:"256"},null,8,d),c]))}});export{m as __pageData,g as default};
