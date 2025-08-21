/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: 'toppng.com',
        
      },
      {
        protocol: 'https',
        hostname: 'pngdownload.io',
        
      },
      {
        protocol: 'https',
        hostname: '1000logos.net',
        
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
        
      },
    ],
  },
};

export default nextConfig;
