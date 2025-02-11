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
    experimental: {
      optimizeCss: true, // ✅ Minifies & removes unused CSS
    },
    headers: [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // ✅ Improves caching for performance
          },
        ],
      },
    ],
    redirects: [
      {
        source: "http://lnomortgages.com.au/:path*",
        destination: "https://www.lnomortgages.com.au/:path*",
        permanent: true, // ✅ Enforce HTTPS & WWW for canonicalization
      },
      {
        source: "https://lnomortgages.com.au/:path*",
        destination: "https://www.lnomortgages.com.au/:path*",
        permanent: true,
      },
    ],
  };
  
  export default nextConfig;
  