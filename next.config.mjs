/** @type {import('next').NextConfig} */
const repoName = '/restaurant-ad';
const nextConfig = {
  output: 'export',
  // Set basePath and assetPrefix so GitHub Pages serves static export from /<repo>/
  basePath: repoName,
  assetPrefix: repoName,
};

export default nextConfig;
