// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://siren-farm.com",
  integrations: [
    sitemap({
      // the founder business cards are handed out by QR, not browsed to —
      // keep them out of search results
      filter: (page) => !/\/(beatriz|joao)\/?$/.test(page),
    }),
  ],
  redirects: {
    // the name story now lives at the bottom of About
    "/why-siren": "/about",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
