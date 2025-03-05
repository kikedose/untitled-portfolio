/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hol0sh4bse.ufs.sh',
      },
    ],
  },
};

export default nextConfig;
