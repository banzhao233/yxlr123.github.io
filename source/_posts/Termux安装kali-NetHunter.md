---
title: Termux安装kali-NetHunter
description: Termux安装kali的官方方法
date: 2022-09-09 04:38:09
updated:
tags:
  - Termux
  - kali
categories: 教程
keywords: Termux安装kali的官方方法
top_img: false
cover: http://imgsrc.baidu.com/super/pic/item/30adcbef76094b36652c4933e6cc7cd98c109db6.jpg
---
# Kali NetHunter介绍
Kali NetHunter是一个基于kali linux的安卓渗透平台，完全开源、免费，基于`Termux`。</br>
官方安装及使用文档： <https://www.kali.org/docs/nethunter/nethunter-rootless/>

> 友情提醒： 因为有图形化界面，安装后软件大小达到了惊人的10GB+，后续安装一些软件包，直奔15GB。

---
# 效果展示
<iframe height=100% width=100% src="//player.bilibili.com/player.html?aid=557763032&bvid=BV13e4y1o7Lu&cid=826399423&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

---
# 安装过程
在Termux中执行以下命令
``` Bash
# 申请存储访问权限
termux-setup-storage
# 安装 wget
pkg install wget
# 下载 安装脚本
wget -O install-nethunter-termux https://offs.ec/2MceZWr
# 给脚本执行权限
chmod +x install-nethunter-termux 
# 运行安装脚本
./install-nethunter-termux
```
{% tip warning faa-horizontal animated %}
第一步时权限请允许</br>
在第二步时如果卡住，可以替换为`wget -O install-nethunter-termux https://gitlab.com/kalilinux/nethunter/build-scripts/kali-nethunter-project/raw/master/nethunter-rootless/install-nethunter-termux`
{% endtip %}

如果顺利的话，你就开始安装了
![](http://imgsrc.baidu.com/super/pic/item/9f510fb30f2442a7e205a07b9443ad4bd01302e0.jpg)
> 因为资源包较大(1GB+)，可以开着网络代理，提高效率和成功率。

如果安装失败，需要删除下载的资源包，再次执行安装脚本。

> 安装成功的效果图如下：
![](http://imgsrc.baidu.com/super/pic/item/c2cec3fdfc039245f6ecbcd1c294a4c27c1e2596.jpg)

---
# 基本命令([参考文章](https://www.sqlsec.com/2018/05/termux.html#%E5%AE%89%E8%A3%85-Kali-NetHunter))

![命令说明](http://imgsrc.baidu.com/super/pic/item/9c16fdfaaf51f3de500de4bad1eef01f3b2979b5.jpg)

# 图形化界面
先执行`nh kex`(第一次需要设置密码)
![](http://imgsrc.baidu.com/super/pic/item/42a98226cffc1e17de36d1ef0f90f603728de967.jpg)

> 可以看到，我的端口号为`5901`

vnc连接软件可以使用kali官方的NetHunter-KeX，但操作起来不方便。

我使用的是手机端的[AVNC](https://f-droid.org/zh_Hans/packages/com.gaurav.avnc/)

然后使用VNC连接(端口和密码要正确)
![](http://imgsrc.baidu.com/super/pic/item/f603918fa0ec08fad2824e791cee3d6d54fbda6a.jpg)

> 效果图

![VNC图形化界面](http://imgsrc.baidu.com/super/pic/item/472309f790529822e3ed641d92ca7bcb0b46d416.jpg)