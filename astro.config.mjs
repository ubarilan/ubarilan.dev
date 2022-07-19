import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    outDir: "./dist",
    site: "https://www.ubarilan.dev",
    integrations: [tailwind()],
});
