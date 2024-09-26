import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
// import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchProPlugin } from "vuepress-plugin-search-pro"

/* 
		<meta http-equiv="Pragma" content="no-cache" />
		<meta http-equiv="Cache-Control" content="no-cache" />
		<meta http-equiv="Expires" content="0" />
*/
export default defineUserConfig({
  bundler: viteBundler(),
  title: "小学信息科技学科教学仪器-智能套件 教程",
  head: [
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Cache-Control", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}]
  ],
  theme: defaultTheme({
    home: "/getting-started/概要.md",
    logo: "/images/cfdsxdoc-icon.png",
    logoAlt: "hello cfunworld!",
    contributors: "Whistle Wang",
    sidebar: [
      {
        text: "准备工作",
        link: "/getting-started/概要.md",
        children: [
          {text: "概要", link: "/getting-started/概要.md"},
          {text: "材料清单", link: "/getting-started/材料清单.md"},
          {text: "开源大师兄编程板", link: "/getting-started/开源大师兄编程板.md"},
          {text: "编程星空软件", link: "/getting-started/编程星空软件.md"},
          {text: "注意事项", link: "/getting-started/注意事项.md"},
        ]
      },
      {
        text: "智控台灯",
        link: "/_01_lamp/项目简介.md",
        collapsible: true,
        children: [
          {text: "项目简介", link: "/_01_lamp/项目简介.md"},
          {text: "结构搭建", link: "/_01_lamp/结构搭建.md"},
          {text: "编程实现", link: "/_01_lamp/编程实现.md"},
          {text: "扩展创新", link: "/_01_lamp/扩展创新.md"},
        ]
      },
      {
        text: "智控风扇",
        link: "/_02_fan/项目简介.md",
        collapsible: true,
        children: [
          {text: "项目简介", link: "/_02_fan/项目简介.md"},
          {text: "结构搭建", link: "/_02_fan/结构搭建.md"},
          {text: "编程实现", link: "/_02_fan/编程实现.md"},
          {text: "扩展创新", link: "/_02_fan/扩展创新.md"},
        ]
      },
      {
        text: "人脸识别门禁",
        link: "/_03_guard/项目简介.md",
        collapsible: true,
        children: [
          {text: "项目简介", link: "/_03_guard/项目简介.md"},
          {text: "结构搭建", link: "/_03_guard/结构搭建.md"},
          {text: "编程实现", link: "/_03_guard/编程实现.md"},
          {text: "扩展创新", link: "/_03_guard/扩展创新.md"},
        ]
      },
      {
        text: "物联网种植",
        link: "/_04_plant/项目简介.md",
        collapsible: true,
        children: [
          {text: "项目简介", link: "/_04_plant/项目简介.md"},
          {text: "结构搭建", link: "/_04_plant/结构搭建.md"},
          {text: "编程实现", link: "/_04_plant/编程实现.md"},
          {text: "扩展创新", link: "/_04_plant/扩展创新.md"},
        ]
      },
      {
        text: "分区智能广播",
        link: "/_05_broadcast/项目简介.md",
        collapsible: true,
        children: [
          {text: "项目简介", link: "/_05_broadcast/项目简介.md"},
          {text: "结构搭建", link: "/_05_broadcast/结构搭建.md"},
          {text: "编程实现", link: "/_05_broadcast/编程实现.md"},
          {text: "扩展创新", link: "/_05_broadcast/扩展创新.md"},
        ]
      },
      {
        text: "智控电子秤",
        link: "/_06_weigher/项目简介.md",
        collapsible: true,
        children: [
          {text: "项目简介", link: "/_06_weigher/项目简介.md"},
          {text: "结构搭建", link: "/_06_weigher/结构搭建.md"},
          {text: "编程实现", link: "/_06_weigher/编程实现.md"},
          {text: "扩展创新", link: "/_06_weigher/扩展创新.md"},
        ]
      },
      {
        text: "追光太阳能采集系统",
        link: "/_07_solar/项目简介.md",
        collapsible: true,
        children: [
          {text: "项目简介", link: "/_07_solar/项目简介.md"},
          {text: "结构搭建", link: "/_07_solar/结构搭建.md"},
          {text: "编程实现", link: "/_07_solar/编程实现.md"},
          {text: "扩展创新", link: "/_07_solar/扩展创新.md"},
        ]
      }
    ],
    sidebarDepth: 0
  }),
  base: "/tutorial/cfdsx/",
  plugins: [
    // searchPlugin({}),
    searchProPlugin({
      indexContent: true,
     hotReload: true,
    }),
    backToTopPlugin()
  ],
})