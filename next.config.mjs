const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
// The redesign preview is hosted at a repository subpath, while the
// production repository is served from the custom-domain root. GitHub Actions
// exposes the repository name so one build configuration can support both.
const isProductionRepository = process.env.GITHUB_REPOSITORY === "sapphire842/cordova-studio";
const basePath = isGitHubPages && !isProductionRepository ? "/cordova-studio-redesign" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
