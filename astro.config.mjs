import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";

export default defineConfig({
    outDir: "./dist",
    site: "https://www.ubarilan.dev",
    experimental: {
        integrations: true,
    },
    integrations: [tailwind(), robotsTxt(), sitemap()],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
