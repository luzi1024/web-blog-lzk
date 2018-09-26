module.exports = {
	title: 'Luzi2048',
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
				{ text: 'Web-Server', link: '/project/web-server-lzk/' },
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