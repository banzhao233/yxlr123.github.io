if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const s=e=>a(e,r),f={module:{uri:r},exports:n,require:s};i[r]=Promise.all(c.map((e=>f[e]||s(e)))).then((e=>(d(...e),n)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"08784ffddc5b3d20dbb3809a9a72e4aa"},{url:"about/index.html",revision:"74c69c65dc5396ca286f840bff838899"},{url:"api/index.html",revision:"a9b44f53ba12e3cd90b99b4051ef99ad"},{url:"archives/2022/07/index.html",revision:"cb73733a5ee80303286bb9804cfc8507"},{url:"archives/2022/08/index.html",revision:"bcd9cfe154b37098ac33af1e33a03e55"},{url:"archives/2022/09/index.html",revision:"3fa374f18f0b6aff20e4dce71490b71d"},{url:"archives/2022/index.html",revision:"620187ae2b078c532a545dc509082e37"},{url:"archives/index.html",revision:"5dd28979067e3042fb4f0cf29ba47fe4"},{url:"categories/cdn/index.html",revision:"d51f8919609452ade1513a26de499ffd"},{url:"categories/index.html",revision:"ce9891ea0f4fe9e2d930a6f8af2357b9"},{url:"categories/折腾记录/index.html",revision:"e0dfc1ce64e64a52204f399b695558b2"},{url:"categories/教程/index.html",revision:"54dc99c5401cd073e8da64865e4c8e39"},{url:"categories/源码分享/index.html",revision:"94136c9ce8d27e7f5e67e4027b557fd9"},{url:"categories/语法/index.html",revision:"a4ab59d3672624d5d3d39f7c9d00464d"},{url:"css/index.css",revision:"68339c360e557ce878120d161a2585f7"},{url:"css/mycss.css",revision:"5fe7310e706323aa41cc51b0e30e1c97"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"googlecfac60e447649494.html",revision:"51c57bed63ba9480dc404531cfc1f232"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/pwa/android-chrome-144x144.png",revision:"3683d8bee2ecfbaad14a6db71cb415b5"},{url:"img/pwa/android-chrome-192x192.png",revision:"2bbf8ac45079a238cf67098e2b0ab2da"},{url:"img/pwa/android-chrome-256x256.png",revision:"c31f63e084587e74eef2158865fdd40d"},{url:"img/pwa/android-chrome-36x36.png",revision:"76b9c20a753ac7c14baaab6b89d4d2ab"},{url:"img/pwa/android-chrome-384x384.png",revision:"f4ecbca191bb6ac2f56d996df504ac0f"},{url:"img/pwa/android-chrome-48x48.png",revision:"a0fc3e24a338fbdc857d12125638db8b"},{url:"img/pwa/android-chrome-512x512.png",revision:"74fde1688656fc611364cf178484c4c5"},{url:"img/pwa/android-chrome-72x72.png",revision:"14cd34dda06904f8fa147d8020d604a5"},{url:"img/pwa/android-chrome-96x96.png",revision:"019c1659b5be0992a37541c96da81f0a"},{url:"img/pwa/apple-touch-icon.png",revision:"1b6a6593680494441c7a83f82f7e8cb3"},{url:"img/pwa/favicon-16x16.png",revision:"b06eb787e332bf980cf5aa0175608247"},{url:"img/pwa/favicon-32x32.png",revision:"a3f283d5935777e760db454c783224c7"},{url:"img/pwa/README.html",revision:"33a35b7990a16232dc74cc3201624150"},{url:"img/pwa/safari-pinned-tab.svg",revision:"1e6603b367751f26ac790c38b0778422"},{url:"index.html",revision:"dbd6a29de5208656c7cca524c37fe2ce"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"links/index.html",revision:"068d293164bd67746edd62a15c26c379"},{url:"post/71bff6a3.html",revision:"b743cb9477bb3579ba036c6495332310"},{url:"post/7db9c141.html",revision:"87911f798f29ca0335da97e1c1ff5f5d"},{url:"post/8513d0f8.html",revision:"a322ef883304e10a04fb41ce1563ffe4"},{url:"post/8862f8fb.html",revision:"a2707c8dfacca625afc545854ed026d1"},{url:"post/aa65a614.html",revision:"9674c0df9178aedc35aa4c8393fe466d"},{url:"post/f9fe76d9.html",revision:"ea2575947fb957fcd841ba7bc17f3545"},{url:"tags/hexo/index.html",revision:"d9e92fcb5a45c188a15818f1686b0e3e"},{url:"tags/html/index.html",revision:"1816898e41de310ba081fd12a35d82a1"},{url:"tags/index.html",revision:"30a2b42ef870f278ed5a5daedd55c9b2"},{url:"tags/jsdelivr/index.html",revision:"4e266bd49e4fcfd9548cb04ad9eec78b"},{url:"tags/Markdown/index.html",revision:"879c0c0f31a38be68b3c432dfb503496"},{url:"tags/php/index.html",revision:"3fc8a4ccc1a0bc2d510202b90e492c8e"},{url:"tags/Termux/index.html",revision:"5cbcf67f11b426a4edc915fe30697d7d"},{url:"tags/web/index.html",revision:"4a4c2fa25f500bbcef90e82f251ebdc7"},{url:"tags/加速/index.html",revision:"fcfc6a08475e4be184570d4a6280cd53"},{url:"tags/博客/index.html",revision:"3203abc0d5caeaec27d3492229062b44"},{url:"tags/安卓/index.html",revision:"91c85bae1ca72f9a04e0ac5581fa5595"},{url:"tags/建站/index.html",revision:"7b1e90bfbf545025106618c947bef2ea"},{url:"tags/折腾/index.html",revision:"689b445de7692c637f55970e544c2115"},{url:"tags/教程/index.html",revision:"6885db6fee46dd7b648c977611e5c051"},{url:"tags/源码/index.html",revision:"4700c51fb72ffdd12d774e9b99582905"},{url:"tags/记录/index.html",revision:"81ecb08a29b3c074eb49a2237619eba5"},{url:"talks/index.html",revision:"e145ea630d0c9c5a4620d84562d35980"},{url:"tools/index.html",revision:"92b38670cb441e8f94413561d9afa090"}],{})}));
//# sourceMappingURL=service-worker.js.map
