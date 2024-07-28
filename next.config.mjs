/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img1.baidu.com'
      }
    ]
  },
  output: 'standalone',
};

export default nextConfig;
