import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  // { text: "Demo", icon: "discover", link: "/demo/" },

  {
    text: "Notes",
    icon: "note",
    prefix: "/en/notes/",
    children: [
      "frontend",
      "server-manage",
      "python"
    ],
  },
  // {
  //   text: "V2 Docs",
  //   icon: "note",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
