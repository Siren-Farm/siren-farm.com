// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://siren-farm.com",
  redirects: {
    // the name story now lives at the bottom of About
    "/why-siren": "/about",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
