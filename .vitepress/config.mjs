import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "DMS VEP",
  description:
    "An archive of deep mutational scanning experiments of viral proteins",
  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://unpkg.com/tailwindcss@2.0.4/dist/tailwind.min.css",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.svg",

    siteTitle: false,

    nav: [
      {
        text: "About",
        items: [
          {
            text: "",
            items: [{ text: "About", link: "/about" }],
          },
          {
            text: "Methodology",
            link: "/methodology",
          },
          {
            text: "Lab Website",
            link: "https://research.fredhutch.org/bloom/en.html",
            target: "_blank",
          },
        ],
      },
      { text: "Contributing", link: "/contributing" },
    ],

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
