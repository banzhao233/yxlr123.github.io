// 音乐绑定事件
function musicBindEvent() {
    document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
      yxlr.musicTelescopic();
    });
    document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
      yxlr.musicToggle(false);
    });
  }

  const metingJs = document.querySelector("#nav-music meting-js");
  //判断是否是音乐
  if (metingJs.contains(event.target)) {
  } else {
  }