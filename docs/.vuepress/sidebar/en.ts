import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "DOCS",
      icon: "laptop-code",
      prefix: "DOCS/",
      children: "structure",
    }
  ],
});
