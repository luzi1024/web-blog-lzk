# Vuepress Blog

<Bit/>

## 介绍

Vuepress是2018年4月12日发布的一个全新的基于vue的静态网站生成器，实际上就是一个vue的spa应用，内置webpack，可以用来写文档。这篇文章给大家介绍了VuePress搭建个人博客的过程，感兴趣的朋友一起看看吧。

**关于Blog:**

Blog其实就是对文档的一个整理，而文档的整理与文件夹整理的结构类似，先想想如果把你想要整理的文章以文件夹的形式存放，那么你会怎么存放呢？如果你想好了，那么咱么就开始吧！

**环境配置:**
- 操作系统：Win10
- Node版本：10.8.0
- Vuepress版本：0.14.4

**文档参阅:**
- [Vuepress中文网](http://caibaojian.com/vuepress/)

## 安装Vuepress
::: tip
熟悉nodejs的应该知道,一个的模块的安装分为本地和全局,这里需要特别分清其中的区别，虽然两者安装都可以，但都需要做一点点调整，这里我们就使用全局安装。
:::
``` bash
# 全局安装
npm install -g vuepress

# 检查配置
vuepress -V
```

## 创建项目
创建项目文件夹 VPProject做为根目录
``` bash
# 初始化包信息(package.json)
npm init -y
```
创建文档文件夹docs，用来存放博客中的所有文章
创建首页README.md
```
VPProject
├─ docs
│  └─ README.md
└─ package.json
```
开始编写文档  在根目录下执行
``` bash
vuepress dev docs
```
或者 给`package.json` 添加一些 scripts 脚本：
``` json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
::: tip
脚本启动在[部署](#部署)的时候是必要的哦，所以我们以后也使用脚本启动
:::
启动后打开: `localhost:8080` 查看结果

## 配置
不做任何配置的话，页面会显得过于简单，用户也无法方便地浏览网站。想要定制你的网站，首先需要在文档目录中创建一个` .vuepress` 目录
配置 VuePress 站点的基本文件是` .vuepress/config.js`，其中导出一个 JavaScript 对象：
``` js
// 参考配置
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
  head: [
	['link', { rel: 'icon', href: `logo.png` }],
	['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    nav: [
		{ text: '笔记', link: '/home/' },
		{ text: '简介', link: '/about/' },
		{ text: '项目', 
			items:[
				{ text: 'Web-Server', link: '/project/web-server-lzk/'},
				{ text: 'Web-Scan', link: '/project/web-scan-lzk/' },
			]
		},
		{ text: '文档', 
			items:[
				{ text: 'Swift', link: '/books/swift/' }
			]
		},
		{ text: 'GitHub', link: 'https://github.com/luzi1024' },
    ],
	sidebar: {
		'/home/': [
		{
			title: '学习笔记',
			collapsable: false,
			children: [
				'',
				'page-a',
				'vuepress'
			]
		}
		]
    }
  },
}
```

此时文件夹的结构基本最好可以和导航栏一致
```
VPProject
├─ docs
│  ├─ home
│  ├─ about
│  ├─ project
│  │  ├─ pro1
|  |  └─ pro2
│  └─ books
│     ├─ book1
|     └─ book2
└─ package.json
```

::: tip
`.vuepress/config.js` 主要用来配置导航栏,侧边栏的显示
:::
::: warning 注意
修改配置后页面会自动刷新，但有些时候比如图片、导航栏会刷不出来，可能需要关闭页面并重新启动脚本。
:::

**文档参阅:**
- [Vuepress配置参考](http://caibaojian.com/vuepress/config/)

## 部署

