/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  images: {},
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
      {
        source: "/tools",
        destination: "/post/tools",
      },
    ];
  },
};
