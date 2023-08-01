import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gumdrop 🍭",
  description:
    "Gumdrop is a tool for web3 builders, teams and organizations to distribute Non-Transferable Badges to reward, recognize and incentivize humans",
  lastUpdated: false,
  lang: "en-US",
  cleanUrls: true,
  head: [

  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Documentation", link: "https://docs.otterspace.xyz" },
      // { text: "Blog", link: "https://mirror.otterspace.xyz" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/rahulrumalla" },
      { icon: "github", link: "https://github.com/gumdrop-wtf" },
      // { icon: "discord", link: "https://github.com/gumdrop-wtf" },
    ],

    footer: {
      message:
        "Gumdrop is a community-owned app, forked from Otterspace under the MIT License.",
      copyright:
        "Made with ❤️ by <a style='text-decoration: underline; color: blue' href='https://twitter.com/rahulrumalla' target='_blank'>rsquare</a>",
    },
  },
});
