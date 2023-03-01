import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { getDirname,path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Nemo's Blog",
      description: "Nemo's Blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Nemo's Blog",
      description: "Nemo 的博客",
    },
  },

  head: [
    ["link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css"
    }],
    ["link", {
      rel: "stylesheet",
      href: "https://unpkg.com/lxgw-wenkai-lite-webfont@1.7.0/style.css"
    }],
  ],

  theme,

  shouldPrefetch: false,

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components")
    }),
  ],
});
