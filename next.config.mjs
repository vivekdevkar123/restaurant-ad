/** @type {import('next').NextConfig} */
const repoName = '/restaurant-ad';
const nextConfig = {
  output: 'export',
  // Set basePath and assetPrefix so GitHub Pages serves static export from /<repo>/
  basePath: repoName,
  assetPrefix: repoName,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
