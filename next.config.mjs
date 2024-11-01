/** @type {import('next').NextConfig} */
// const path = require('path');
import path from 'path';
const __dirname = new URL('.', import.meta.url).pathname;

const nextConfig = {
  // reactStrictMode: false,
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
    BASE_URL: 'https://www.romyzhang.com/api'
  },
};

export default nextConfig;
