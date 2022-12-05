function owoBig() {
  let e = 1,
    t = "",
    n = document.createElement("div");
  n.id = "owo-big";
  let i = document.querySelector("body");
  i.appendChild(n),
    document
      .getElementById("post-comment")
      .addEventListener("DOMNodeInserted", (l) => {
        if (l.target.classList && (l.target.classList.value, 1)) {
          let o = l.target;
          o.addEventListener("contextmenu", (e) => e.preventDefault()),
            o.addEventListener("mouseover", (l) => {
              "IMG" == l.target.tagName &&
                e &&
                ((e = 0),
                (t = setTimeout(() => {
                  let e = 3 * l.path[0].clientHeight,
                    t = 3 * l.path[0].clientWidth,
                    o = l.x - l.offsetX - (t - l.path[0].clientWidth) / 2;
                  o + t > i.clientWidth && (o -= o + t - i.clientWidth + 10),
                    o < 0 && (o = 10);
                  let d = l.y - l.offsetY;
                  (n.style.height = e + "px"),
                    (n.style.width = t + "px"),
                    (n.style.left = o + "px"),
                    (n.style.top = d + "px"),
                    (n.style.display = "flex"),
                    (n.innerHTML = `<img src="${l.target.src}">`);
                }, 300)));
            }),
            o.addEventListener("mouseout", (i) => {
              (n.style.display = "none"), (e = 1), clearTimeout(t);
            });
        }
      });
}
document.getElementById("post-comment") && owoBig();
if (PublicSacrificeDay()) {
  document
    .getElementsByTagName("html")[0]
    .setAttribute(
      "style",
      "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);"
    );
}

function PublicSacrificeDay() {
  var PSFarr = new Array(
    "0403",
    "0404",
    "0405",
    "0406",
    "0414",
    "0512",
    "0707",
    "0807",
    "0814",
    "0909",
    "0918",
    "0930",
    "1025",
    "1213",
    "1205",
    "1206"
  );
  //2020年4月4日 新冠肺炎哀悼日，清明节
  //2010年4月14日，青海玉树地震
  //2008年5月12日，四川汶川地震
  //1937年7月7日,七七事变 又称卢沟桥事变
  //2010年8月7日，甘肃舟曲特大泥石流
  //8月14日，世界慰安妇纪念日
  //1976年9月9日，毛主席逝世
  //1931年9月18日，九一八事变
  //烈士纪念日为每年9月30日
  //1950年10月25日，抗美援朝纪念日
  //1937年12月13日，南京大屠杀
  //2022/12/06 全国默哀
  var currentdate = new Date();
  var str = "";
  var mm = currentdate.getMonth() + 1;
  if (currentdate.getMonth() > 9) {
    str += mm;
  } else {
    str += "0" + mm;
  }
  if (currentdate.getDate() > 9) {
    str += currentdate.getDate();
  } else {
    str += "0" + currentdate.getDate();
  }
  if (PSFarr.indexOf(str) > -1) {
    return 1;
  } else {
    return 0;
  }
}

window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度
    result = Math.round((a / b) * 100), // 计算百分比
    up = document.querySelector("#go-up"); // 获取按钮

  if (result <= 95) {
    up.childNodes[0].style.display = "none";
    up.childNodes[1].style.display = "block";
    up.childNodes[1].innerHTML = result;
  } else {
    up.childNodes[1].style.display = "none";
    up.childNodes[0].style.display = "block";
  }
}

//标签条
function tagsBarActive() {
  var urlinfo = window.location.pathname;
  urlinfo = decodeURIComponent(urlinfo);
  //console.log(urlinfo);
  //判断是否是首页
  if (urlinfo == "/") {
    if (document.querySelector("#tags-bar")) {
      document.getElementById("首页").classList.add("select");
    }
  } else {
    // 验证是否是分类链接
    var pattern = /\/tags\/.*?\//;
    var patbool = pattern.test(urlinfo);
    //console.log(patbool);
    // 获取当前的标签
    if (patbool) {
      var valuegroup = urlinfo.split("/");
      //console.log(valuegroup[2]);
      // 获取当前分类
      var nowTag = valuegroup[2];
      if (document.querySelector("#category-bar")) {
        document.getElementById(nowTag).classList.add("select");
      }
    }
  }
}
tagsBarActive();

// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText =
  document.title.split(" | 幽香乐容")[0];

function postAddToc() {
  let postContent = document.querySelector(
    "#post>#article-container.post-content"
  );
  let cardToc = document.getElementById("card-toc");
  if (postContent && cardToc) {
    let tocNumber = cardToc.getElementsByClassName("toc-number");
    let tocLink = cardToc.getElementsByClassName("toc-link");
    for (let i = 0; i < tocLink.length; i++) {
      document.getElementById(
        decodeURIComponent(tocLink[i].attributes.href.value).slice(1)
      ).dataset.toc = tocNumber[i].innerText;
    }
  }
}
postAddToc();

var percentFlag = false; // 节流阀
function essayScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  result <= 99 || (result = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p =
    document.getElementById("post-comment") ||
    document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
  return e.split(n).join(t);
}
var yxlr = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
      } else {
        result = GLOBAL_CONFIG.date_suffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  changeTimeInEssay: function () {
    document.querySelector("#bber") &&
      document.querySelectorAll("#bber time").forEach(function (e) {
        var t = e,
          datetime = t.getAttribute("datetime");
        (t.innerText = yxlr.diffDate(datetime, true)),
          (t.style.display = "inline");
      });
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 500);
  },
  commentText: function (e) {
    if (e == "undefined" || e == "null") e = "好棒！";
    var n = document.getElementsByClassName("el-textarea__inner")[0],
      t = document.createEvent("HTMLEvents");
    if (!n) return;
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80),
      n.focus(),
      n.setSelectionRange(-1, -1),
      document.getElementById("comment-tips") &&
        document.getElementById("comment-tips").classList.add("show");
  },
};

yxlr.changeTimeInEssay();
yxlr.reflashEssayWaterFall();

if (document.querySelector("#bber-talk")) {
  var swiper = new Swiper(".swiper-container", {
    direction: "vertical", // 垂直切换选项
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
  });
}

// 星空背景
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s=c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function y(){this.reset=function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else h.fillStyle="rgba("+r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closePath(),h.fill()},this.move=function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x>n-n/4||this.y<0)&&(this.fadingOut=!0)},setTimeout(function(){o=!1},50)}function m(t){return Math.floor(1e3*Math.random())+1<10*t}function l(t,i){return Math.random()*(i-t)+t}f(),window.addEventListener("resize",f,!1),function(){h=s.getContext("2d");for(var t=0;t<i;t++)c[t]=new y,c[t].reset();u()}(),function t(){document.getElementsByTagName('html')[0].getAttribute('data-theme')=='dark'&&u(),window.requestAnimationFrame(t)}()};
dark()