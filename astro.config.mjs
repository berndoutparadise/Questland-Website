import { defineConfig } from "astro/config";

const isGithubPages = process.env.DEPLOY_TARGET === "github";

export default defineConfig({
  site: isGithubPages ? "https://berndoutparadise.github.io" : "https://questland.eu",
  base: isGithubPages ? "/Questland-Website" : "",
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
