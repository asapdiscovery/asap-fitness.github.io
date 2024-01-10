import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import Contributors from "./Contributors.vue";
import Altair from "./Altair.vue";
import BlogIndex from "./BlogIndex.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "home-features-after": () => h(Contributors),
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Altair", Altair);
    app.component("BlogIndex", BlogIndex);
    app.component("v-select", vSelect);
  },
};
