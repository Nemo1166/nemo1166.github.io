import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "笔记",
    icon: "note",
    prefix: "/zh/notes/",
    children: [
      "frontend",
      "server-manage",
      "python"
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
