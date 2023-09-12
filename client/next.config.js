/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cktattoo.ru',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
