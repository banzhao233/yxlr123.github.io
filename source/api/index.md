---
date: 2022-08-17 21:15:32
title: 各种api接口
updated: 2022-08-17 21:15:38
---> 目前只有只有一个API，以后会逐渐丰富(^_^)

# bing 每天一图

接口：https://api.yxlr.tk/bing-img/index.php
演示：
![bing-img](api.yxlr.tk/bing-img/index.php)

> 此接口使用开源项目[bing-image-api](https://github.com/mcxiaolan/bing-image-api)
> 
> | 可选参数 | 参数含义 | 可用变量 |
| :------------: | :-------------: | :------------: |
| rand | 随机显示最近8天内的图片 | **true** or **false** |
| day | 显示指定的最近图片 | -1，0，1，2，3，4，5，6，7(0为今天，1为昨天，-1未知) || size | 指定获取图片大小 | 详情见下方**可用分辨率** |
| info | 获取图片json格式基础信息 | **true** or **false** |
> 
> 

## 默认参数

* rand=false
* day=0
* size=1920x1080
* info=false

## 可用分辨率

* 1920x1080
* 1366x768
* 1280x768
* 1024x768
* 800x600
* 800x480
* 768x1280
* 720x1280
* 640x480
* 480x800
* 400x240
* 320x240
* 240x320

> 数字中间使用小写字母 **x** ，
> 非数学符号 **×** 。


