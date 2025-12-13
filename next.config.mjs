/** @type {import('next').NextConfig} */
const repoName = '/restaurant-ad';
const nextConfig = () => {
  // GitHub Pages configuration for Sopu's Cloud Kitchen
  const isProduction = process.env.NODE_ENV === 'production';
  const publicBase = isProduction ? (process.env.NEXT_PUBLIC_BASE_PATH || repoName) : '';

  return {
    output: 'export',
    // basePath/assetPrefix for GitHub Pages deployment
    basePath: isProduction ? repoName : '',
    assetPrefix: isProduction ? repoName : '',
    env: {
      NEXT_PUBLIC_BASE_PATH: publicBase,
    },
    images: {
      unoptimized: true,
    },
  };
};

export default nextConfig();
