export const themeData = JSON.parse("{\"home\":\"/getting-started/intro.md\",\"logo\":\"/images/cfdsxdoc-icon.png\",\"logoAlt\":\"hello cfunworld!\",\"contributors\":\"Whistle Wang\",\"sidebar\":[{\"text\":\"准备工作\",\"link\":\"/getting-started/intro.md\",\"children\":[{\"text\":\"简介\",\"link\":\"/getting-started/intro.md\"},{\"text\":\"设备清单\",\"link\":\"/getting-started/partlist.md\"},{\"text\":\"开源大师兄主控\",\"link\":\"/getting-started/dsx.md\"},{\"text\":\"编程星空软件\",\"link\":\"/getting-started/aicodestar.md\"},{\"text\":\"注意事项\",\"link\":\"/getting-started/attention.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
