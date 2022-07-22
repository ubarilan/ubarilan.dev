import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
    outDir: "./dist",
    site: "https://www.ubarilan.dev",
    integrations: [tailwind(), react()],
});
