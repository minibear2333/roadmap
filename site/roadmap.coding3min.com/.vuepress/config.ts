import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";  


export default defineUserConfig({
  title: "Roadmap",
  description: "为每一个技术人在职业生涯中指引方向。",
  theme: recoTheme({
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: 'Roadmap',
        description: '为每一个技术人在职业生涯中指引方向。',
      },
    },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-back-to-top'],
    ['@vuepress-reco/vuepress-plugin-pagation', {
            perPage: 5  // 每页展示条数
        }],
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "copy",
        tip: {
          content: "复制成功!"
        }
      }],
    ['vuepress-plugin-sitemap2',{
      hostname: 'Roadmap.coding3min.com',
      changefreq: 'weekly',
    }],
    ['@vuepress/pwa', {
          serviceWorker: true,
          updatePopup: {
              message: "发现新内容可用",
              buttonText: "刷新"
          }
        }],
    [
      //图片放大插件 先安装在配置， npm install @vuepress/plugin-medium-zoom --save
      '@vuepress\plugin-medium-zoom', {
        selector: '.page img',
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(25,18,25,0.9)',
          scrollOffset: 40
        }
      }
    ],
  ],
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "minibear2333",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/minibear2333/roadmap",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    // 电子书
    series: {
      "/docs/ansible/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    // 菜单栏
    navbar: [
      { icon:"Home",text: "Home", link: "/" },
      {
        icon:"Map",
        text: "Roadmap",
        children: [
          { icon:"Language",text: "主流语言路线图", link: "/docs/ansible/home" },
          { icon:"UserCertification",text: "职业发展路线图", link: "/docs/ansible/home" },
          { icon:"Tools",text: "各种工具路线图", link: "/docs/ansible/home" },
        ],
      },
      {
        icon:"Book",
        text: "Books",
        children: [
          { icon:"Linux",text: "shell实践手册", link: "https://shell-practice.readthedocs.io/" },
          { icon:"RouterWifi",text: "nginx速查手册", link: "http://nginx.coding3min.com/" },
          { icon:"Deploy",text: "ansible实践手册", link: "http://ansible-practice.readthedocs.io/" },
        ],
      },
      { icon:"Blog", text: "博客", link: "/categories/gonggao/1/" },
    ],
    // 公告
    bulletin: {
      body: [
        {
          type: "title",
          content: "最新消息",
        },
        {
          type: "text",
          content: `🎉🎉🎉 极客时间课程返点已上线。Roadmap项目即将上线shell、ansible、k8s、mysql以及爬虫相关等学习路径图。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/minibear2333/roadmap/issues">Issues<a/></li>
            <li><a href="https://github.com/minibear2333/roadmap/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "Star",
              link: "https://github.com/minibear2333/roadmap",
            },
            {
              text: "返利",
              link: "/blogs/other/geektime.html",
            },
          ],
        },
      ],
    },
    primaryColor: '#006eff',
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'minibear2333/blog-comment',
        repoId: 'MDEwOlJlcG9zaXRvcnkzODAwOTk5MzE=',
        category: 'Announcements',
        categoryId: 'DIC_kwDOFqfdW84Cba1y',
        mapping: 'title',
        hideComments: false, // 全局隐藏评论，默认 false
        crossorigin: "anonymous",
        inputPosition: 'top',
        len:'en',
        lang: 'zh-CN',
        loading:'lazy'
      },
    },
    // 自动将 docs 文件夹下的文档，按照文件夹嵌套关系生成系列的配置
    // https://vuepress-theme-reco.recoluan.com/docs/theme/auto-set-series.html
    autoSetSeries: true,
    noFoundPageByTencent: true,
  }),
  // debug: true,
});
