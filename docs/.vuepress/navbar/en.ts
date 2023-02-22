import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // { text: "Demo", icon: "discover", link: "/demo/" },

  {
    text: "Notes",
    icon: "note",
    prefix: "/notes/",
    children: [
      "frontend",
      "server-manage"
    ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
