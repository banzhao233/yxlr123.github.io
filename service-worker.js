if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const n=e=>a(e,r),s={module:{uri:r},exports:f,require:n};i[r]=Promise.all(d.map((e=>s[e]||n(e)))).then((e=>(c(...e),f)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"67dcceb91b65c5da96991260ae57f03f"},{url:"about/index.html",revision:"2b0fa978a939860cbeeb7b58feddef6a"},{url:"api/index.html",revision:"ded4e34390246dde648942a82e26e428"},{url:"archives/2022/07/index.html",revision:"0acae6f9b6c81528da4a78a88034ab40"},{url:"archives/2022/08/index.html",revision:"dbce4de7572e3aec2d6cd97d4da26a99"},{url:"archives/2022/09/index.html",revision:"0b55d1904a9b548467b9f0d64522243b"},{url:"archives/2022/index.html",revision:"092738f7d1a70b9a8744fb3134a5efc7"},{url:"archives/index.html",revision:"7ce80615cac1496fc67b30ea61443776"},{url:"categories/cdn/index.html",revision:"ceb99a40def6163180e9cd40dee018c4"},{url:"categories/index.html",revision:"fcbf490fe01752a885492048061e7e8e"},{url:"categories/折腾记录/index.html",revision:"aa4d042a1c5e9f17941f0e1a05c742e9"},{url:"categories/教程/index.html",revision:"e9993ac7a421d1b160d317a3d401b3db"},{url:"categories/源码分享/index.html",revision:"654e3af4f1f5ab96095bdb50b0a4a84e"},{url:"categories/语法/index.html",revision:"1679c04fd4cdac0d43127043be7acbf1"},{url:"css/index.css",revision:"68339c360e557ce878120d161a2585f7"},{url:"css/mycss.css",revision:"5fe7310e706323aa41cc51b0e30e1c97"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"googlecfac60e447649494.html",revision:"51c57bed63ba9480dc404531cfc1f232"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/pwa/android-chrome-144x144.png",revision:"3683d8bee2ecfbaad14a6db71cb415b5"},{url:"img/pwa/android-chrome-192x192.png",revision:"2bbf8ac45079a238cf67098e2b0ab2da"},{url:"img/pwa/android-chrome-256x256.png",revision:"c31f63e084587e74eef2158865fdd40d"},{url:"img/pwa/android-chrome-36x36.png",revision:"76b9c20a753ac7c14baaab6b89d4d2ab"},{url:"img/pwa/android-chrome-384x384.png",revision:"f4ecbca191bb6ac2f56d996df504ac0f"},{url:"img/pwa/android-chrome-48x48.png",revision:"a0fc3e24a338fbdc857d12125638db8b"},{url:"img/pwa/android-chrome-512x512.png",revision:"74fde1688656fc611364cf178484c4c5"},{url:"img/pwa/android-chrome-72x72.png",revision:"14cd34dda06904f8fa147d8020d604a5"},{url:"img/pwa/android-chrome-96x96.png",revision:"019c1659b5be0992a37541c96da81f0a"},{url:"img/pwa/apple-touch-icon.png",revision:"1b6a6593680494441c7a83f82f7e8cb3"},{url:"img/pwa/favicon-16x16.png",revision:"b06eb787e332bf980cf5aa0175608247"},{url:"img/pwa/favicon-32x32.png",revision:"a3f283d5935777e760db454c783224c7"},{url:"img/pwa/README.html",revision:"b48b1ffb69d25f3fa6c3b60af9e79f9a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"1e6603b367751f26ac790c38b0778422"},{url:"index.html",revision:"5bc8189b2a0570b26eba85a49e23f5c0"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"links/index.html",revision:"04180522d38591f19ea6da9347818108"},{url:"post/71bff6a3.html",revision:"df90b07df1d97412071df5892701a173"},{url:"post/7db9c141.html",revision:"865073a11b6fd7d114f8433acc6f4f54"},{url:"post/8513d0f8.html",revision:"1cc4dd496713e10aa8069f4366d1b765"},{url:"post/8862f8fb.html",revision:"8029cb598e8975f047c59fde361a658a"},{url:"post/aa65a614.html",revision:"78e34f5b527c9598cb41a42ffd1fc070"},{url:"post/f9fe76d9.html",revision:"1ed9c5678eca1dd7d6cbeda223768180"},{url:"tags/hexo/index.html",revision:"5c4a7604b95091b9ebcca94fd09a5f61"},{url:"tags/html/index.html",revision:"fca52a6df7cdfccd49872a0659ea0b65"},{url:"tags/index.html",revision:"921c83cec43fd82bf7f6cab08d5b7f5f"},{url:"tags/jsdelivr/index.html",revision:"b3307dffae4633ee7994f62319fdc2fe"},{url:"tags/Markdown/index.html",revision:"0ace4f4f1d539e7b0e7d840ce9605fb0"},{url:"tags/php/index.html",revision:"42c7335693953d50dcf0cda8ea9d40c3"},{url:"tags/Termux/index.html",revision:"d8f223e08c05e7438f8f9d32dc4f4e22"},{url:"tags/web/index.html",revision:"c7e5a5afddd9ad4ec8a92ff554bd64c9"},{url:"tags/加速/index.html",revision:"70211ed206c3567689dd41f83414f04b"},{url:"tags/博客/index.html",revision:"0a04dfa5e6763beaa77d0def09ef20b4"},{url:"tags/安卓/index.html",revision:"d8a47ed583096cc5c501a61a7d17d48f"},{url:"tags/建站/index.html",revision:"53868a7e06d1440ca4a4a2fa1d42cd18"},{url:"tags/折腾/index.html",revision:"1bfd0fa4017d6386d3cae3801d9944bf"},{url:"tags/教程/index.html",revision:"39481d0eec7ca599a337714fe287f665"},{url:"tags/源码/index.html",revision:"e7c29604ad728fcb11a3458c5d10ce5b"},{url:"tags/记录/index.html",revision:"959153b5696e0a697c4935e3a1c4835d"},{url:"talks/index.html",revision:"ac83aeb6ee21216697e1a1e5f5ffa85c"},{url:"tools/index.html",revision:"57071d91d32366cb3959c43655ff7d55"}],{})}));
//# sourceMappingURL=service-worker.js.map
