module.exports = {
	title: 'LUZI的个人笔记',
	description: 'Just so so~',
	head: [
		['link', { rel: 'icon', href: `logo.png` }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
	],
	serviceWorker: true,
	themeConfig: {
    nav: [
		{ text: '笔记', link: '/home/' },
		{ text: '简介', link: '/about/' },
		{ text: '项目', 
			items:[
				{ text: 'Web-Server', link: '/Prj_web_server/' },
				{ text: 'Web-Scan', link: '/Prj_web_scan/' },
			]
		},
		{ text: '文档', 
			items:[
				{ text: 'Swift', link: '/GBook_Swift/' }
			]
		},
		{ text: 'GitHub', link: 'https://github.com/luzi1024' },
    ],
	sidebar: {
		'/home/': genSidebarConfig('学习笔记')
    }
  },
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
		'',
		'page-a',
		'page-b',
		'vuepress/',
      ]
    }
  ]
}