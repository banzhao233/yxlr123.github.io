if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const s=e=>a(e,r),f={module:{uri:r},exports:n,require:s};i[r]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(d(...e),n)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"feeb07ccdf8cd93f58e2fbe140011706"},{url:"about/index.html",revision:"e50b3a3374255363185de85769bd576b"},{url:"api/index.html",revision:"9ad8d296b3bedccb16f1396bdfc011fc"},{url:"archives/2022/07/index.html",revision:"f9735517744c20484f94fc6d8c702277"},{url:"archives/2022/08/index.html",revision:"0c40a22c0ad62909a31bdb84cab62364"},{url:"archives/2022/09/index.html",revision:"2d4a10ba756dd42fa2c941f2342d36b5"},{url:"archives/2022/index.html",revision:"939c6bd47500e0fa7bc4083cf5a326ce"},{url:"archives/index.html",revision:"ae085becb47f090dee22b84a9789b12c"},{url:"categories/cdn/index.html",revision:"685614d89bfdc876ec6fae812b8c0c60"},{url:"categories/index.html",revision:"889aad79aad41713a2f405678f596001"},{url:"categories/折腾记录/index.html",revision:"aa36748cc0ec2ed617f3f28e71ca05b8"},{url:"categories/教程/index.html",revision:"b974b2122b02a2241aeb1bc3527e9d0e"},{url:"categories/源码分享/index.html",revision:"382d7ca76a2f4e8303ae4cca2260e829"},{url:"categories/语法/index.html",revision:"66e147d99f1c0175b3ceaca6c951eb69"},{url:"css/index.css",revision:"5f87cca42700f1b1fac94d2470c3df8e"},{url:"css/mycss.css",revision:"91cddf06f09ef8bb36a46960439bea5b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"googlecfac60e447649494.html",revision:"51c57bed63ba9480dc404531cfc1f232"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/pwa/android-chrome-144x144.png",revision:"3683d8bee2ecfbaad14a6db71cb415b5"},{url:"img/pwa/android-chrome-192x192.png",revision:"2bbf8ac45079a238cf67098e2b0ab2da"},{url:"img/pwa/android-chrome-256x256.png",revision:"c31f63e084587e74eef2158865fdd40d"},{url:"img/pwa/android-chrome-36x36.png",revision:"76b9c20a753ac7c14baaab6b89d4d2ab"},{url:"img/pwa/android-chrome-384x384.png",revision:"f4ecbca191bb6ac2f56d996df504ac0f"},{url:"img/pwa/android-chrome-48x48.png",revision:"a0fc3e24a338fbdc857d12125638db8b"},{url:"img/pwa/android-chrome-512x512.png",revision:"74fde1688656fc611364cf178484c4c5"},{url:"img/pwa/android-chrome-72x72.png",revision:"14cd34dda06904f8fa147d8020d604a5"},{url:"img/pwa/android-chrome-96x96.png",revision:"019c1659b5be0992a37541c96da81f0a"},{url:"img/pwa/apple-touch-icon.png",revision:"1b6a6593680494441c7a83f82f7e8cb3"},{url:"img/pwa/favicon-16x16.png",revision:"b06eb787e332bf980cf5aa0175608247"},{url:"img/pwa/favicon-32x32.png",revision:"a3f283d5935777e760db454c783224c7"},{url:"img/pwa/README.html",revision:"0f7d9240b54e46452233e44f8e2c008d"},{url:"img/pwa/safari-pinned-tab.svg",revision:"1e6603b367751f26ac790c38b0778422"},{url:"index.html",revision:"25b260ce930443c670bf079c9b7e76da"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"links/index.html",revision:"c974b54025c0d9f15db480df96a9358e"},{url:"post/71bff6a3.html",revision:"ce67993488596fe82df7f98c2c29c29b"},{url:"post/7db9c141.html",revision:"1882e15375d615337748172243e16784"},{url:"post/8513d0f8.html",revision:"43c22fb7a5a9b9054132c61afbbe5fcb"},{url:"post/8862f8fb.html",revision:"ae8be298495058dc177bc3663e1f713d"},{url:"post/aa65a614.html",revision:"eacca3c74110d2ee769c0b9fb27392cd"},{url:"post/f9fe76d9.html",revision:"c9c570e4491bf88f5834b391e5a8a16e"},{url:"tags/hexo/index.html",revision:"c9ab3337436417e531c6ec5e82d5a293"},{url:"tags/html/index.html",revision:"a5934637e865989ae92a08cf3a9cbba6"},{url:"tags/index.html",revision:"22ef5718ffc2d5b86e943000c7466632"},{url:"tags/jsdelivr/index.html",revision:"69faa9f7cbca42d3aac7e154d0d8f7d6"},{url:"tags/Markdown/index.html",revision:"0055bb91a9c1018eb44fc3a5555f5285"},{url:"tags/php/index.html",revision:"4057084cb258c4e4ed58d66f0728336d"},{url:"tags/Termux/index.html",revision:"c66e620ff92e1f23c0ad844eb19befd8"},{url:"tags/web/index.html",revision:"5db9eab925a297b922322db4f3d745ee"},{url:"tags/加速/index.html",revision:"3e722a18ece06398b76b463330fe7aa9"},{url:"tags/博客/index.html",revision:"cf700555190e3f001ef6cba807a29453"},{url:"tags/安卓/index.html",revision:"604e3df71232121269d485b6cc97f7e7"},{url:"tags/建站/index.html",revision:"d1334697814a51bf533e5411be264ab5"},{url:"tags/折腾/index.html",revision:"c1ef79e9d13a7fe2ca90067ec5f566b2"},{url:"tags/教程/index.html",revision:"105673880dbca5e0e977d2c7375abecb"},{url:"tags/源码/index.html",revision:"a1e4745833288ec286854f9586d295d5"},{url:"tags/记录/index.html",revision:"c12c10560b7f9163a3c4a39d68bd81bd"},{url:"talks/index.html",revision:"b5d8aada35b308165e3c16dc0feaf5e0"},{url:"tools/index.html",revision:"c9c3104584e84bdb9ce0091aadc2a0e0"}],{})}));
//# sourceMappingURL=service-worker.js.map
