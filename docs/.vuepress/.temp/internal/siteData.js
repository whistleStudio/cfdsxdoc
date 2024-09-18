export const siteData = JSON.parse("{\"base\":\"/tutorial/cfdsx/\",\"lang\":\"en-US\",\"title\":\"小学信息科技学科教学仪器-智能套件 教程\",\"description\":\"\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
