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
  env: {
    BASE_URL: 'http://47.98.122.17:8080'
    // BASE_URL: 'http://127.0.0.1:8080'
  }
};

export default nextConfig;
