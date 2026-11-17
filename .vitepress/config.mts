import { defineConfig } from "vitepress";
import container from "markdown-it-container";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Atlas",
  base: "/Atlas-Docs/",
  description: "你的首页，由你定义",
  head: [
    [
      "link",
      { rel: "icon", type: "image/svg+xml", href: "/images/favicon.svg" },
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?df4bd7beb058635288dd3606ff494b27";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`,
    ],
  ],
  markdown: {
    config: (md) => {
      md.use(container, "cols", {
        render: (tokens, idx) =>
          tokens[idx].nesting === 1 ? '<div class="md-cols">\n' : "</div>\n",
      });

      md.use(container, "col", {
        render: (tokens, idx) => {
          if (tokens[idx].nesting !== 1) return "</div>\n";

          const classes = ["md-col"];
          for (const flag of tokens[idx].info.trim().split(/\s+/)) {
            if (flag === "hcenter") classes.push("md-col-hcenter");
            else if (flag === "vcenter") classes.push("md-col-vcenter");
          }

          return `<div class="${classes.join(" ")}">\n`;
        },
      });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/favicon.svg",

    nav: [
      { text: "文档", link: "/docs/introduction" },
    ],

    sidebar: [
      {
        text: "说明文档",
        items: [
          { text: "介绍", link: "/docs/introduction" },
          { text: "快速开始", link: "/docs/quick-start" },
          { text: "Live2D", link: "/docs/live2d" },
          { text: "Live2D Studio", link: "/docs/live2d-studio" },
          { text: "忘记密码", link: "/docs/forgot-password" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Mrkinte/Atlas" }],

    footer: {
      message: "Powered by marjin",
    },
  },
});
