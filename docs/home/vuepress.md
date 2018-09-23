# Vuepress Blog

<Bit/>

## 介绍

Vuepress是2018年4月12日发布的一个全新的基于vue的静态网站生成器，实际上就是一个vue的spa应用，内置webpack，可以用来写文档。这篇文章给大家介绍了VuePress搭建个人博客的过程，感兴趣的朋友一起看看吧。

**关于Blog:**

Blog其实就是对所学知识的一个分类整理，而分类整理与文件夹整理的结构类似，所以何不先想想如果把你想要整理的所有内容以文件夹的形式存放，那么你会怎么存放呢？如果你想好了，那么咱么就开始吧！

**环境配置:**
- 操作系统：Win10
- Node版本：10.8.0
- Vuepress版本：0.14.4

**文档参阅:**
- [Vuepress中文网](http://caibaojian.com/vuepress/)

## 安装
::: tip
熟悉nodejs的应该知道,一个的模块的安装分为本地和全局,这里需要特别分清其中的区别，虽然两者安装都可以，但都需要做一点点调整，这里我们就使用全局安装。
:::
``` bash
# 全局安装
npm install -g vuepress

# 检查配置
vuepress -V
```

## 创建
创建项目文件夹 VPProject做为根目录
``` bash
# 初始化包信息(package.json)
npm init -y
```
创建文档文件夹docs，用来存放博客中的所有文章

创建首页`README.md` 作为默认首页

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
│  ├─ .vuepress
|  |  └─ config.js
│  ├─ home
|  |  └─ README.md
│  ├─ about
|  |  └─ README.md
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

**侧边栏:**
- [单页自动补充工具栏](http://caibaojian.com/vuepress/default-theme-config/#%E5%8D%95%E9%A1%B5%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%85%E5%B7%A5%E5%85%B7%E6%A0%8F-auto-sidebar-for-single-pages)

如果当前页面内仅在一个文件(README.md)中,那么在这个文件顶部 设置一下 就可以自动按标题等级生成侧边栏目录
``` md
---
sidebar: auto
---
# about
```

**配置参阅:**

- [Vuepress配置参考](http://caibaojian.com/vuepress/config/)

## 部署

官网给出的部署方案有6种
- [GitHub Pages](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
- [GitLab](https://vuepress.vuejs.org/guide/deploy.html#gitlab-pages-and-gitlab-ci)
- [Netlify](https://vuepress.vuejs.org/guide/deploy.html#netlify)
- [Google Firebase](https://vuepress.vuejs.org/guide/deploy.html#google-firebase)
- [Surge](https://vuepress.vuejs.org/guide/deploy.html#surge)
- [Heroku](https://vuepress.vuejs.org/guide/deploy.html#heroku)

Git 和 Google的速度不给力,而另外三种中 Netlify 可以通过 github同步更新编译，然后自动发布，操作简单，这里我就使用Netlify做演示吧。
### Netlify
首先我们了来说一下这个运作过程，然后再开始。
1. 我们的项目首先会被**上传**到Github
2. 然后将Netlify与我们GitHub中的这个项目建立**关联**(授权)
3. 这样 每当我在github上更新我的项目后，Netlify会自动fatch最新版本，**编译**并发布

所以我们的部署也是围绕着 **上传**、**关联**、**编译** 这三步进行的

- 在Github上新建空仓库，名称为项目名称，将项目文件夹内的文件上传
::: warning 注意
不要上传 bulid时生成的dest文件夹，并且此时的项目node_modules中也应该是空的,
因为我们一开始选择的是全局安装。
:::
- 登陆[Netlify](https://app.netlify.com/)
- 点击`New Site From Git`
- 勾选`Limit GitHub access to public repositories` 点击 `GitHub`
- 选择仓库
- 设置编译命令：`npm run docs:build`
- 设置发布文件夹：`docs/.vuepress/dist`
::: warning 注意
如果按照当前的操作，会发现Netlify编译失败，并且没有任何错误日志，这是因为Netlify并不知道我们的项目使用了vuepress，虽然命令中有vuepress。所以需要在包信息中添加vuepress依赖，这样Netlify会自动安装依赖，也会减轻我们项目的大小。
:::
- 在项目的`package.json`中添加vuerpess依赖信息并提交
``` json
  "devDependencies": {
    "vuepress": "^0.14.4"
  }
```
**域名设置:**

按照Netlify的123步骤，设置自主域名 在DNS Set中会告诉你Value是:www.netlify.com
然后在你的域名里进行绑定
- 主机记录：www
- 记录类型：CNAME
- 记录值：www.netlify.com
::: tip
绑定域名后需要等待约半小时之才可正常访问
:::

**部署参阅:**
- [Vuepress部署](http://caibaojian.com/vuepress/guide/deploy.html#%E9%83%A8%E7%BD%B2)
- [Netlify Docs](https://www.netlify.com/docs/build-gotchas/#command-not-found)