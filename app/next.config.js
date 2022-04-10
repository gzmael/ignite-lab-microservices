module.exports = {
  reactStrictMode: true,
  webpack5: true,
  ebpack: config => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false }

    return config
  },
}
