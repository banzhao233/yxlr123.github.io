---
abbrlink: aa65a614
author: 幽香乐容
categories:
- 教程
cover: https://pic.rmb.bdstatic.com/bjh/ffdbc82d6af46391557ccbf913f5b7c5.jpeg
date: '2022-07-26 07:38:53'
summary: 真的非常简单( ˃̶̤́ ꒳ ˂̶̤̀ )
tags:
- hexo
- web
- 教程
title: hexo+github搭建博客教程
toc: true
top_img: false
updated: '2022-08-23 08:53:01'
swiper_index: 4
---
## 前言

注意，这篇文章篇幅较长，主要针对新手，每一步很详细，所以可能会显得比较啰嗦，所以建议基础比较好小伙伴根据目录选择自己感兴趣的部分跳着看✧٩(ˊωˋ*)و✧

> 此安装过程为ubuntu(或Debian)的安装过程

## 安装

### 安装git

```Bash
apt-get update
apt install git-core -y
```

检查是否安装成功
git -v

### 安装nodejs（以14.x为例)

```Bash
curl -sL https://deb.nodesource.com/setup_14.x | bash  - 
sudo apt install nodejs
```

检查是否安装成功

```Bash
node -v
npm -v
```

### 安装hexo

```Bash
npm install hexo-cli -g
```

## 搭建

```Bash
hexo init MyBlog //也可以用其他文件夹
cd MyBlog
```

测试

```Bash
hexo g && hexo s
```

用浏览器打开[http://localhost:4000/](http://localhost:4000/)
看到如下图就是成功了
![效果](https://pic.rmb.bdstatic.com/bjh/9f4a6a09b5b3f6516668ab45827cc574.png)
按`ctrl+c`关闭本地服务器。

## GitHub配置

### 注册Github账号创建个人仓库

接下来就去注册一个`github`账号，用来存放我们的网站。大多数小伙伴应该都有了吧，作为一个合格的程序猿（媛）还是要有一个的。
打开[https://github.com/](https://github.com/)，新建一个项目仓库`New repository`，如下所示：
![github配置](https://pic.rmb.bdstatic.com/bjh/ba46323db6dbccc9d1f923e2569daa92.jpeg)
然后如上图所示，输入自己的账号名字，后面一定要加.github.io后缀，README初始化也要勾。

### 生成SSH添加到GitHub

```Bash
git config --global user.name "yourname"
git config --global user.email "youremail"
```

这里的`yourname`输入你的GitHub用户名，`youremail`输入你GitHub的邮箱。这样GitHub才能知道你是不是对应它的账户。例如我的：

```Bash
git config --global user.name "yxlr123"
git config --global user.email "dbh2858304517@gmail.com"
```

可以输入下面两条检查一下

```Bash
git config user.name
git config user.email
```

**然后创建SSH,一路回车**

```Bash
ssh-keygen -t rsa -C "youremail"
```

> `youremail`输入你GitHub的邮箱

```Bash
cat /root/.ssh/id_rsa.pub
```

将输出的内容复制下来
打开[github](github.com)，在头像下面点击`settings`，再点击`SSH and GPG keys`，新建一个`SSH`，名字随便取一个都可以，把你的`id_rsa.pub`里面的信息复制进去。如图：
![ssh_keys](https://pic.rmb.bdstatic.com/bjh/56792662574ff820a5e50244c9324cf9.png)
然后再输入下面内容：

```Bash
ssh -T git@github.com
```

出现你的用户名，那就成功了。

### 将hexo部署到GitHub

打开博客根目录下的_config.yml文件，这是博客的配置文件，在这里你可以修改与博客配置相关的各种信息。</br>
修改最后一行的配置：

```yml
deploy:
  type: git
  repository: https://github.com/yourname/yourname.github.io
  branch: master
```

repository修改为你自己的github项目地址即可，就是部署时，告诉工具，将生成网页通过git方式上传到你对应的链接仓库中。

这个时候需要先安装deploy-git ，也就是部署的命令,这样你才能用命令部署到GitHub。

```Bash
npm install hexo-deployer-git --save
```

然后

```Bash
hexo chean
hexo g
hexo d
```

其中`hexo clean`清除了你之前生成的东西，也可以不加。`hexo g`生成静态文章，`hexo d`部署文章。

> 注意`hexo d`时可能要你输入`username`和`password`。

得到下图就说明部署成功了，过一会儿就可以在[http://yourname.github.io](http://yourname.github.io) 这个网站看到你的博客了！！
![部署成功](https://pic.rmb.bdstatic.com/bjh/700c6575d1ccd3056e49e993de712c24.png)

## 写文章、发布文章

新建一篇文章输入：

```Bash
hexo new post "article title"
```

`article title`是文章标题
`source\_posts`的目录，可以发现下面多了一个`.md`文件，它就是你的文章文件啦。你可以直接使用`markdown`语法写文章！
编写完markdown文件后，根目录下输入`hexo g`生成静态网页，然后输入`hexo s`可以本地预览效果，按`ctrl+c`关闭本地服务器，最后输入`hexo d`上传到github上。这时打开你的github.io主页就能看到发布的文章啦。

## 个性化

在文件根目录下的`_config.yml`，就是整个hexo框架的配置文件了。可以在里面修改大部分的配置。详细可参考官方的[配置描述](https://hexo.io/zh-cn/docs/configuration)。

```Yml
# Site
title: Hexo #网站名字
subtitle: '' #网站副标题
description: '' #网站描述
keywords:
author: John Doe #你的名字
language: en #网站使用的语言
timezone: '' #网站时区
# URL
## 如果您的网站位于子目录中，请将url设置为'http://yoursite.com/child'，将root设置为'/child/'
url: http://yoursite.com #可以改成你的github.io网址
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # 设置为false时会将末尾的index.html去掉
  trailing_html: true # 设置为false时会将末尾的.html去掉，对index.html无效
```

## 更多玩法

### 更改主题

我们在了解Hexo博客文件基础之后，知道主题文件就放在themes文件下，那么我们就可以去Hexo官网下载喜欢的主题，复制进去然后修改参数即可。
网上大多数主题都是github排名第一的Next主题，但是我个人不是很喜欢，我在网上看到一个主题感觉还不错：[hexo-theme-matery-pro](https://github.com/aloeJun/hexo-themes-matery-pro)，这个主题看着比较漂亮，并且对新人比较友好，点起来很舒服，功能也比较很多。
[配置文档](https://github.com/aloeJun/hexo-themes-matery-pro/blob/master/README.md)

## 最后

hexo还有很多玩法，自己去探索吧✧٩(ˊωˋ*)و✧

> 好吧，就是因为我太懒了
