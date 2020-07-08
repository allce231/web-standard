module.exports = {
  base: "/docs/",
  dest: ".vuepress/dist/docs",
  title: '待亲康前端开发规范',
  description: '前端开发指南',
  markdown:{
    extractHeaders: [] //https://www.vuepress.cn/config/#markdown-extractheaders
  },
  themeConfig: {
    logo: '/assets/image/logo.png',
    lastUpdated: '上次更新',

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    //repo: 'allce231/web-standard',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    //repoLabel: '查看源码',
    //搜索框
    search: false,
    //页面滚动
    smoothScroll: true,
    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'allce231/web-standard',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',

    nav: [
      { text: '前端体系', link: '/about/' },
      { text: '代码规范', link: '/code/' },
      { text: '常用教程', link: '/course/markdown' },
    ],
    sidebar: {
      '/about/': getSidebar(),
      '/code/': getSidebar(),
      '/course/': getSidebar(),
    }
  }
}

function getSidebar(){
  return [{
    title: '前端体系',
    collapsable: true, 
    children: [
      { title: '编码准则', path:'/about/'},
      { title: '设计规范', path:'/about/ui'},
      { title: '技术框架', path:'/about/frame'},
      { title: '工作流程', path:'/about/process'},
      { title: '编辑器', path:'/about/editor'}
    ]
  },{
    title: '代码规范',
    collapsable: true, 
    children: [
      { title: '目录规范', path:'/code/'},
      { title: 'html编码规范', path:'/code/html'},
      { title: 'css规范', path:'/code/css'},
      { title: 'js规范', path:'/code/js'},
      { title: 'vue项目创建规范', path:'/code/vue'}
    ]
  },{
    title: '常用教程',
    collapsable: true, 
    children: [
      { title: 'markdown扩展', path:'/course/markdown'}
    ]
  }]
}