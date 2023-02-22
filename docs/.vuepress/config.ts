import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Nemo's Blog",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Nemo's Blog",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  head: [
    ["link", {
      rel: "stylesheet",
      href: "https://unpkg.com/lxgw-wenkai-screen-webfont@1.7.0/style.css"
    }]
  ],

  theme,

  shouldPrefetch: false,
});
