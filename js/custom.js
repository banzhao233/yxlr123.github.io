function owoBig(){let e=1,t="",n=document.createElement("div");n.id="owo-big";let i=document.querySelector("body");i.appendChild(n),document.getElementById("post-comment").addEventListener("DOMNodeInserted",(l=>{if(l.target.classList&&(l.target.classList.value,1)){let o=l.target;o.addEventListener("contextmenu",(e=>e.preventDefault())),o.addEventListener("mouseover",(l=>{"IMG"==l.target.tagName&&e&&(e=0,t=setTimeout((()=>{let e=3*l.path[0].clientHeight,t=3*l.path[0].clientWidth,o=l.x-l.offsetX-(t-l.path[0].clientWidth)/2;o+t>i.clientWidth&&(o-=o+t-i.clientWidth+10),o<0&&(o=10);let d=l.y-l.offsetY;n.style.height=e+"px",n.style.width=t+"px",n.style.left=o+"px",n.style.top=d+"px",n.style.display="flex",n.innerHTML=`<img src="${l.target.src}">`}),300))})),o.addEventListener("mouseout",(i=>{n.style.display="none",e=1,clearTimeout(t)}))}}))}document.getElementById("post-comment")&&owoBig();