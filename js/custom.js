function owoBig(){let e=1,t="",n=document.createElement("div");n.id="owo-big";let o=document.querySelector("body");o.appendChild(n),document.getElementById("post-comment").addEventListener("DOMNodeInserted",(c=>{if(c.target.classList&&(c.target.classList.value,1)){let l=c.target;l.addEventListener("contextmenu",(e=>e.preventDefault())),l.addEventListener("mouseover",(c=>{"IMG"==c.target.tagName&&e&&(e=0,t=setTimeout((()=>{let e=3*c.path[0].clientHeight,t=3*c.path[0].clientWidth,l=c.x-c.offsetX-(t-c.path[0].clientWidth)/2;l+t>o.clientWidth&&(l-=l+t-o.clientWidth+10),l<0&&(l=10);let d=c.y-c.offsetY;n.style.height=e+"px",n.style.width=t+"px",n.style.left=l+"px",n.style.top=d+"px",n.style.display="flex",n.innerHTML=`<img src="${c.target.src}">`}),300))})),l.addEventListener("mouseout",(o=>{n.style.display="none",e=1,clearTimeout(t)}))}}))}function PublicSacrificeDay(){var e=new Array("0403","0404","0405","0406","0414","0512","0707","0807","0814","0909","0918","0930","1025","1213"),t=new Date,n="",o=t.getMonth()+1;return t.getMonth()>9?n+=o:n+="0"+o,t.getDate()>9?n+=t.getDate():n+="0"+t.getDate(),e.indexOf(n)>-1?1:0}function percent(){let e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,n=Math.round(e/t*100),o=document.querySelector("#go-up");n<=95?(o.childNodes[0].style.display="none",o.childNodes[1].style.display="block",o.childNodes[1].innerHTML=n):(o.childNodes[1].style.display="none",o.childNodes[0].style.display="block")}function tagsBarActive(){var e=window.location.pathname;if("/"==(e=decodeURIComponent(e)))document.querySelector("#tags-bar")&&document.getElementById("首页").classList.add("select");else{if(/\/tags\/.*?\//.test(e)){var t=e.split("/")[2];document.querySelector("#category-bar")&&document.getElementById(t).classList.add("select")}}}function percent(){let e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,n=Math.round(e/t*100);n<=99||(n=99),document.querySelector("#percent").innerHTML=n}function postAddToc(){let e=document.querySelector("#post>#article-container.post-content"),t=document.getElementById("card-toc");if(e&&t){let e=t.getElementsByClassName("toc-number"),n=t.getElementsByClassName("toc-link");for(let t=0;t<n.length;t++)document.getElementById(decodeURIComponent(n[t].attributes.href.value).slice(1)).dataset.toc=e[t].innerText}}document.getElementById("post-comment")&&owoBig(),PublicSacrificeDay()&&document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);"),window.onscroll=percent,tagsBarActive(),window.onscroll=percent,document.getElementById("page-name").innerText=document.title.split(" | 幽香乐容")[0],postAddToc();