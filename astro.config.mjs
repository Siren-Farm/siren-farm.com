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
    // the Adaptive Genetics page was retired; anything shared lands here
    "/science": "/technology",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
