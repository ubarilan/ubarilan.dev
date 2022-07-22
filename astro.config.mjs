import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
    outDir: "./dist",
    site: "https://www.ubarilan.dev",
    integrations: [tailwind(), robotsTxt()],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
