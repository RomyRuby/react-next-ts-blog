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
    BASE_URL: 'http://47.121.181.90:8080'
    // BASE_URL: 'http://127.0.0.1:8080'
  },
};

export default nextConfig;
