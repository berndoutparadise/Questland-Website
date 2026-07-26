import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://questland.eu",
  output: "static",
  trailingSlash: "always",
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false
    }
  },
  image: {
    responsiveStyles: true
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
