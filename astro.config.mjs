// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://Siren-Farm.github.io",
  base: "siren-farm.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
