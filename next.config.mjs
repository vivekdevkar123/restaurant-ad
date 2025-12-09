/** @type {import('next').NextConfig} */
const repoName = '/restaurant-ad';
const nextConfig = () => {
  // Allow an explicit full URL (e.g. https://<user>.github.io/restaurant-ad) to be provided
  // via NEXT_PUBLIC_BASE_PATH at build time. If not provided, fall back to repoName (path).
  const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || repoName;

  return {
    output: 'export',
    // basePath/assetPrefix must be the path portion used by GitHub Pages
    basePath: repoName,
    assetPrefix: repoName,
    env: {
      NEXT_PUBLIC_BASE_PATH: publicBase,
    },
    images: {
      unoptimized: true,
    },
  };
};

export default nextConfig();

export default nextConfig;
