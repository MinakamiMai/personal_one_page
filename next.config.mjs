/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 全部图片走原生 <img>（本地 SVG 占位 + 可替换为任意外链），不需要 next/image 的优化代理
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
