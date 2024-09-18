export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/WorkSpace/CFunWorld/j. 网站/cfdsxdoc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"hello cfunworld"} }],
  ["/getting-started/aicodestar.html", { loader: () => import(/* webpackChunkName: "getting-started_aicodestar.html" */"D:/WorkSpace/CFunWorld/j. 网站/cfdsxdoc/docs/.vuepress/.temp/pages/getting-started/aicodestar.html.js"), meta: {"title":"编程星空软件"} }],
  ["/getting-started/dsx.html", { loader: () => import(/* webpackChunkName: "getting-started_dsx.html" */"D:/WorkSpace/CFunWorld/j. 网站/cfdsxdoc/docs/.vuepress/.temp/pages/getting-started/dsx.html.js"), meta: {"title":"开源大师兄主控"} }],
  ["/getting-started/intro.html", { loader: () => import(/* webpackChunkName: "getting-started_intro.html" */"D:/WorkSpace/CFunWorld/j. 网站/cfdsxdoc/docs/.vuepress/.temp/pages/getting-started/intro.html.js"), meta: {"title":"简介"} }],
  ["/getting-started/partlist.html", { loader: () => import(/* webpackChunkName: "getting-started_partlist.html" */"D:/WorkSpace/CFunWorld/j. 网站/cfdsxdoc/docs/.vuepress/.temp/pages/getting-started/partlist.html.js"), meta: {"title":"套件清单"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/WorkSpace/CFunWorld/j. 网站/cfdsxdoc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/getting-started/attention.html", { loader: () => import(/* webpackChunkName: "getting-started_attention.html" */"D:/WorkSpace/CFunWorld/j. 网站/cfdsxdoc/docs/.vuepress/.temp/pages/getting-started/attention.html.js"), meta: {"title":"注意事项"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
