---
abbrlink: 7db9c141
categories:
- - cdn
cover: ''
date: '2022-09-03 13:22:47'
description: 使用php搭建jsdelivr代理
keywords: 自建jsdelivr加速
swiper_index: 3
tags:
- php
- jsdelivr
- 加速
title: 自建jsdelivr反代服务
top_img: false
updated: '2022-09-04 08:46:16'
---
# 起因

在前一段时间，jsdelivr国内突然报错，还出现了DNS污染。

![报错](http://imgsrc.baidu.com/super/pic/item/902397dda144ad344ee7a35995a20cf430ad8597.jpg)

后来官方修复了，但是国内几个节点寄了。备案还掉了≥﹏≤。

# 想法

我萌生了自建cdn的想法，但当我看了看网上的方法，最终选择了使用php进行反向代理

```php

```

<?php
if(isset($_GET['url'])==false){die("请将参数填写完整，在当前路径后加上?url=反代的链接");}$token=(string)rand(100,99999);$ch = curl_init();curl_setopt($ch, CURLOPT_URL, $_GET['url']);curl_setopt($ch, CURLOPT_HEADER,false);curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);curl_setopt($ch, CURLOPT_FOLLOWLOCATION ,1); if(isset($_SERVER['HTTP_REFERER'])==true){curl_setopt($ch, CURLOPT_REFERER, $_SERVER['HTTP_REFERER']);}$data_down = curl_exec($ch);if($data_down  === FALSE){die("代理时发生错误");}curl_close($ch);file_put_contents($token, $data_down);header('Content-Type: '.mime_content_type($token));unlink($token);echo $data_down;?>

` ```

