/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // ✅ Use modern image formats
    remotePatterns: [
      {
        hostname: "images.unsplash.com", // ✅ Allow external images from Unsplash
      },
    ],
  },
};

export default nextConfig;
