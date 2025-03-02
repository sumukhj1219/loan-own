/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], 
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        hostname: "cdn.sanity.io" 
      },
    ],
  },
};

export default nextConfig;
