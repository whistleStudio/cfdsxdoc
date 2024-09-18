import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  bundler: viteBundler(),
  title: "小学信息科技学科教学仪器-智能套件 教程",
  theme: defaultTheme({
    home: "/getting-started/intro.md",
    logo: "/images/cfdsxdoc-icon.png",
    logoAlt: "hello cfunworld!",
    contributors: "Whistle Wang",
    sidebar: [
      {
        text: "准备工作",
        link: "/getting-started/intro.md",
        children: [
          {text: "简介", link: "/getting-started/intro.md"},
          {text: "设备清单", link: "/getting-started/partlist.md"},
          {text: "开源大师兄主控", link: "/getting-started/dsx.md"},
          {text: "编程星空软件", link: "/getting-started/aicodestar.md"},
          {text: "注意事项", link: "/getting-started/attention.md"},
        ]
      }
    ]
  }),
  base: "/tutorial/cfdsx/",
  plugins: [
    searchPlugin({}),
    backToTopPlugin()
  ],
})