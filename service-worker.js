if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const n=e=>d(e,r),s={module:{uri:r},exports:f,require:n};i[r]=Promise.all(a.map((e=>s[e]||n(e)))).then((e=>(c(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b81e923c3112594558c420d1db8cbc6a"},{url:"about/index.html",revision:"1adb4dd5dcf4b7f98f3169bf9a701fe9"},{url:"api/index.html",revision:"52974e58acaa63b8859500ae230f9c24"},{url:"archives/2022/07/index.html",revision:"25f5708011a9c7a8b5152ae2a719ec09"},{url:"archives/2022/08/index.html",revision:"ced69bce6f96f0d5acfd929a90f59b66"},{url:"archives/2022/09/index.html",revision:"ccfdefedb6df56dec56d518640ad5bb2"},{url:"archives/2022/index.html",revision:"c54aceb13e34e4b28fff6424011955c4"},{url:"archives/index.html",revision:"edf7c12caa2a0e38d540bb0046030c2d"},{url:"categories/cdn/index.html",revision:"edbb130371f501e53e03d661c79ee178"},{url:"categories/index.html",revision:"c4da78ab09c0df21158d144f826386b9"},{url:"categories/折腾记录/index.html",revision:"ec9252431918e3ba76d2b556f83727fe"},{url:"categories/教程/index.html",revision:"73c6af0696fd2dcb16e824143711b8bc"},{url:"categories/源码分享/index.html",revision:"40cccdc55df881a12a3e504b56aff90f"},{url:"categories/语法/index.html",revision:"d88f816a3c4bbcca9303c14b0ad14dde"},{url:"css/index.css",revision:"5f87cca42700f1b1fac94d2470c3df8e"},{url:"css/mycss.css",revision:"5fe7310e706323aa41cc51b0e30e1c97"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"googlecfac60e447649494.html",revision:"51c57bed63ba9480dc404531cfc1f232"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/pwa/android-chrome-144x144.png",revision:"3683d8bee2ecfbaad14a6db71cb415b5"},{url:"img/pwa/android-chrome-192x192.png",revision:"2bbf8ac45079a238cf67098e2b0ab2da"},{url:"img/pwa/android-chrome-256x256.png",revision:"c31f63e084587e74eef2158865fdd40d"},{url:"img/pwa/android-chrome-36x36.png",revision:"76b9c20a753ac7c14baaab6b89d4d2ab"},{url:"img/pwa/android-chrome-384x384.png",revision:"f4ecbca191bb6ac2f56d996df504ac0f"},{url:"img/pwa/android-chrome-48x48.png",revision:"a0fc3e24a338fbdc857d12125638db8b"},{url:"img/pwa/android-chrome-512x512.png",revision:"74fde1688656fc611364cf178484c4c5"},{url:"img/pwa/android-chrome-72x72.png",revision:"14cd34dda06904f8fa147d8020d604a5"},{url:"img/pwa/android-chrome-96x96.png",revision:"019c1659b5be0992a37541c96da81f0a"},{url:"img/pwa/apple-touch-icon.png",revision:"1b6a6593680494441c7a83f82f7e8cb3"},{url:"img/pwa/favicon-16x16.png",revision:"b06eb787e332bf980cf5aa0175608247"},{url:"img/pwa/favicon-32x32.png",revision:"a3f283d5935777e760db454c783224c7"},{url:"img/pwa/README.html",revision:"540f358edb3bad8a4a2e8723c3a0d582"},{url:"img/pwa/safari-pinned-tab.svg",revision:"1e6603b367751f26ac790c38b0778422"},{url:"index.html",revision:"30600b2727cea41c57761fe1d31ca9b6"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"links/index.html",revision:"a3abc44eb540bd1533bd049f824ec414"},{url:"post/71bff6a3.html",revision:"ead05890eccef99f9bf0cf668cb62a14"},{url:"post/7db9c141.html",revision:"d6e6d219cd65eaf9770fed2b09fd364d"},{url:"post/8513d0f8.html",revision:"7098b3c3a60b33d6f5bddbef7e28fa13"},{url:"post/8862f8fb.html",revision:"472324e12b34d5a1ad595256275b15be"},{url:"post/aa65a614.html",revision:"c621601918b8556a2886d7bd45a93510"},{url:"post/f9fe76d9.html",revision:"4ae80466dca3f01b7871255efaaa7a7c"},{url:"tags/hexo/index.html",revision:"4b74835e18b31272f3d49073e3c3c1c7"},{url:"tags/html/index.html",revision:"eb14d75f3e1c620bc31c6cd3e1682a75"},{url:"tags/index.html",revision:"b9312e54a3bb4c244511e4ccc1dc68ec"},{url:"tags/jsdelivr/index.html",revision:"5d02c74a8602d7f30ef4d0456fe953b7"},{url:"tags/Markdown/index.html",revision:"d96f46c026b6ee855b69aa26e2641741"},{url:"tags/php/index.html",revision:"da95e2714222ce8c6f632466379c35c7"},{url:"tags/Termux/index.html",revision:"623bf2d3b65d9f502d52245036d931ab"},{url:"tags/web/index.html",revision:"a1f899522ca683868fe17825bc1cb2bb"},{url:"tags/加速/index.html",revision:"fb7496871fd5fe3eeb1a27efa2ca7af1"},{url:"tags/博客/index.html",revision:"2297b7e2cbec4ca6843873db2b3f56ea"},{url:"tags/安卓/index.html",revision:"c8e9290a0f5dcad76004921cc3f54c4b"},{url:"tags/建站/index.html",revision:"dacc8bb554d001c2cfa56f02d8612d71"},{url:"tags/折腾/index.html",revision:"0ff39322d65e16964337e38e6f8d640b"},{url:"tags/教程/index.html",revision:"f6dff196094c7faee6f3d18a0708bb60"},{url:"tags/源码/index.html",revision:"7b5bacd0197f2e5a8365cbb0166ebbfa"},{url:"tags/记录/index.html",revision:"4fabdc4b0f06825945428584bf92f5d2"},{url:"talks/index.html",revision:"03b4a8c9f98bd7806c57c8455dd6715d"},{url:"tools/index.html",revision:"dda1e32d21b9f1e1539b8f95eaed199b"}],{})}));
//# sourceMappingURL=service-worker.js.map
