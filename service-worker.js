if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const s=e=>c(e,r),f={module:{uri:r},exports:n,require:s};i[r]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(d(...e),n)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"8dacc1aec060c331a0f4d9ebdd1a451a"},{url:"about/index.html",revision:"3d463d8ad5c4cbf6c79139428f922659"},{url:"api/index.html",revision:"9802f7d2d05dc98e01317df2c22ac6e4"},{url:"archives/2022/07/index.html",revision:"ea0111e4ed98cb7dadde6b0ac1fbd170"},{url:"archives/2022/08/index.html",revision:"9416a247556ea029bcf00b795ce285a5"},{url:"archives/2022/09/index.html",revision:"63d44f45cf48512d77ecc7ab4a5f4727"},{url:"archives/2022/index.html",revision:"85a596607095703d80fa3df6ed4f19ed"},{url:"archives/index.html",revision:"663900b3a35cf2b50cf2e68e095abbdf"},{url:"categories/cdn/index.html",revision:"50f00e29aaed0657050b6822feaeafb8"},{url:"categories/index.html",revision:"d285612c6f553c54f50bdc4445482dec"},{url:"categories/折腾记录/index.html",revision:"789825ad84a1640dd8ac203a23b590c3"},{url:"categories/教程/index.html",revision:"b095b9c1a97a716a1ac72b4702c02436"},{url:"categories/源码分享/index.html",revision:"551803bf6babbde429edf424ccb4f6c1"},{url:"categories/语法/index.html",revision:"efadaa7788e4127407ec24c7d508f35c"},{url:"css/index.css",revision:"68339c360e557ce878120d161a2585f7"},{url:"css/mycss.css",revision:"5fe7310e706323aa41cc51b0e30e1c97"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"googlecfac60e447649494.html",revision:"51c57bed63ba9480dc404531cfc1f232"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/pwa/android-chrome-144x144.png",revision:"3683d8bee2ecfbaad14a6db71cb415b5"},{url:"img/pwa/android-chrome-192x192.png",revision:"2bbf8ac45079a238cf67098e2b0ab2da"},{url:"img/pwa/android-chrome-256x256.png",revision:"c31f63e084587e74eef2158865fdd40d"},{url:"img/pwa/android-chrome-36x36.png",revision:"76b9c20a753ac7c14baaab6b89d4d2ab"},{url:"img/pwa/android-chrome-384x384.png",revision:"f4ecbca191bb6ac2f56d996df504ac0f"},{url:"img/pwa/android-chrome-48x48.png",revision:"a0fc3e24a338fbdc857d12125638db8b"},{url:"img/pwa/android-chrome-512x512.png",revision:"74fde1688656fc611364cf178484c4c5"},{url:"img/pwa/android-chrome-72x72.png",revision:"14cd34dda06904f8fa147d8020d604a5"},{url:"img/pwa/android-chrome-96x96.png",revision:"019c1659b5be0992a37541c96da81f0a"},{url:"img/pwa/apple-touch-icon.png",revision:"1b6a6593680494441c7a83f82f7e8cb3"},{url:"img/pwa/favicon-16x16.png",revision:"b06eb787e332bf980cf5aa0175608247"},{url:"img/pwa/favicon-32x32.png",revision:"a3f283d5935777e760db454c783224c7"},{url:"img/pwa/README.html",revision:"4dba0cf3479053c2f5cd65d089c5b143"},{url:"img/pwa/safari-pinned-tab.svg",revision:"1e6603b367751f26ac790c38b0778422"},{url:"index.html",revision:"9a6c95a0552b8d7fc93add44dcace03b"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"links/index.html",revision:"70e1ba1fcf8d65bc1fe685a27a25024f"},{url:"post/71bff6a3.html",revision:"529b2345959cf410b7e0a2f25ab004ea"},{url:"post/7db9c141.html",revision:"ccae5faf682e09677761e798b89cacfd"},{url:"post/8513d0f8.html",revision:"62adbe273d60301b61f1642759567e2b"},{url:"post/8862f8fb.html",revision:"09b51716779503c2811cceb5ace18bf1"},{url:"post/aa65a614.html",revision:"7489bb47bc3d7cadf8782c5501c8bbc8"},{url:"post/f9fe76d9.html",revision:"dcaaa6f50d936b21bdc3871ff7c05e02"},{url:"tags/hexo/index.html",revision:"6dcbe1da56a7e9b44b9fe17735291700"},{url:"tags/html/index.html",revision:"d81ace99d2f3e877276b31d56abc2593"},{url:"tags/index.html",revision:"9d846b59b7e0f1b32090dc7f37da33fa"},{url:"tags/jsdelivr/index.html",revision:"342c34995415319c60ed417c1aef75cd"},{url:"tags/Markdown/index.html",revision:"92f37ff20750ac3c1e9dbf517ccd63ce"},{url:"tags/php/index.html",revision:"1631201e1cdad09271cfec4fa206d3a0"},{url:"tags/Termux/index.html",revision:"3f6a78287ad3044cb25399e39dbc6605"},{url:"tags/web/index.html",revision:"61d222baec92616785b665f4962aa3c2"},{url:"tags/加速/index.html",revision:"3c4cd6d74d83c84a1c139ecbf762b6ba"},{url:"tags/博客/index.html",revision:"caeade4c12cccdda87f4a744ca273d36"},{url:"tags/安卓/index.html",revision:"832c3e164fe699fbce646c654d5b1f5c"},{url:"tags/建站/index.html",revision:"122d2c5ee9ddfaffc7b87b995235fbad"},{url:"tags/折腾/index.html",revision:"7716bf9ec696c782facebb5e9322eac5"},{url:"tags/教程/index.html",revision:"3f979bd0da774fdf2adac3e1450d07de"},{url:"tags/源码/index.html",revision:"c3dc7d66ac4cabe5683c041f1ab02e87"},{url:"tags/记录/index.html",revision:"3dcfb3f2fbeff237aaa00c651f16d24b"},{url:"talks/index.html",revision:"3240b98bb57bcfead881ef866d63e89c"},{url:"tools/index.html",revision:"be2e824a0544a1819a93204b320968ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
