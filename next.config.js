/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['sanity', 'next-sanity', '@sanity/ui', '@sanity/icons'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.bigcartel.com',
      },
      {
        protocol: 'https',
        hostname: 'd8j0ntlcm91z4.cloudfront.net',
      },
    ],
  },
};

module.exports = nextConfig;
