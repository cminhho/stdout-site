// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// GitHub Pages project site: https://cminhho.github.io/stdout-site/
export default defineConfig({
  site: "https://cminhho.github.io",
  base: "/stdout-site",
  output: "static",
  integrations: [icon(), tailwind({ applyBaseStyles: false })],
});
