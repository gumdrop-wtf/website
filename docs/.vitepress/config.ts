import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gumdrop 🍭",
  description:
    "Gumdrop is a tool for web3 communities to create and distribute Non-Transferable Badges to incentivize their members",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Documentation", link: "https://docs.otterspace.xyz" },
      // { text: "Blog", link: "https://mirror.otterspace.xyz" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "twitter", link: "https://github.com/gumdrop-wtf" },
      { icon: "github", link: "https://github.com/gumdrop-wtf" },
      { icon: "discord", link: "https://github.com/gumdrop-wtf" },
    ],

    footer: {
      message: "Gumdrop is a community-owned app, forked from Otterspace under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});
