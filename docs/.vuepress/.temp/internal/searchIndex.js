export const SEARCH_INDEX = [
  {
    "title": "hello cfunworld",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "编程星空软件",
    "headers": [
      {
        "level": 2,
        "title": "下载与安装",
        "slug": "下载与安装",
        "link": "#下载与安装",
        "children": []
      },
      {
        "level": 2,
        "title": "第一个程序 - 点亮板载灯",
        "slug": "第一个程序-点亮板载灯",
        "link": "#第一个程序-点亮板载灯",
        "children": []
      },
      {
        "level": 2,
        "title": "程序运行",
        "slug": "程序运行",
        "link": "#程序运行",
        "children": []
      }
    ],
    "path": "/getting-started/aicodestar.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "开源大师兄主控",
    "headers": [
      {
        "level": 2,
        "title": "基本参数",
        "slug": "基本参数",
        "link": "#基本参数",
        "children": []
      },
      {
        "level": 2,
        "title": "扩展板",
        "slug": "扩展板",
        "link": "#扩展板",
        "children": []
      },
      {
        "level": 2,
        "title": "驱动安装",
        "slug": "驱动安装",
        "link": "#驱动安装",
        "children": []
      },
      {
        "level": 2,
        "title": "固件更新",
        "slug": "固件更新",
        "link": "#固件更新",
        "children": []
      }
    ],
    "path": "/getting-started/dsx.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "简介",
    "headers": [],
    "path": "/getting-started/intro.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "套件清单",
    "headers": [],
    "path": "/getting-started/partlist.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "注意事项",
    "headers": [
      {
        "level": 2,
        "title": "111",
        "slug": "_111",
        "link": "#_111",
        "children": []
      }
    ],
    "path": "/getting-started/attention.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
