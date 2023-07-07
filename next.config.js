module.exports = {
  reactStrictMode: true,
  images: {},
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
    ];
  },
};
