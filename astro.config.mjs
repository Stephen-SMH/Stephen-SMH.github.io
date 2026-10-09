import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Fully static: ships as plain files to GitHub Pages (and doubles as an
// Artifact preview). The Artifact host reserves top-level "_"-prefixed paths,
// so `ARTIFACT_BUILD=1 npm run build` renames Astro's "_astro" folder.
export default defineConfig({
  site: "https://stephen-smh.github.io",
  base: "/software-engineering-portfolio",
  output: "static",
  trailingSlash: "always",
  build: { format: "directory", assets: process.env.ARTIFACT_BUILD ? "static" : "_astro" },
  redirects: { "/": "/en/" },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
