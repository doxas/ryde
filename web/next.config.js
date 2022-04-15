// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true, // 下層ページに直接アクセスでも not found しないようにする
};

module.exports = nextConfig;
