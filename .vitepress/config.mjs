import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DMS VEP",
  description:
    "A repository of deep mutational scanning (DMS) experiments of viral entry proteins (VEPs)",
  themeConfig: {
    logo: "/logo.svg",

    siteTitle: false,

    nav: [{ text: "About", link: "/about" }],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/dms-vep",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/jbloom_lab?lang=en",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Jesse Bloom",
    },
  },
});
