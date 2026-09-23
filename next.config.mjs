import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Fully static: no server, no API routes, no per-request data — this ships
  // as plain files to GitHub Pages (and doubles as an Artifact preview).
  output: "export",
  trailingSlash: true,
  // GitHub Pages is happy with Next's default "_next" asset folder. A Claude
  // Artifact preview is not — it reserves top-level "_"-prefixed paths — so
  // `ARTIFACT_BUILD=1 npm run build` renames the prefix just for that build.
  ...(process.env.ARTIFACT_BUILD ? { assetPrefix: "/static" } : {}),
};

// `next dev` never serves public/index.html at "/", so mirror its redirect
// there. Export builds ignore redirects(), so this stays dev-only.
export default (phase) =>
  phase === PHASE_DEVELOPMENT_SERVER
    ? {
        ...config,
        async redirects() {
          return [{ source: "/", destination: "/en/", permanent: false }];
        },
      }
    : config;
