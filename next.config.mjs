/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ["image/avif", "image/webp"], 
      remotePatterns: [
        {
          hostname: "images.unsplash.com",
        },
      ],
    },
    experimental: {
      optimizeCss: true, 
    },
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable", // ✅ Improves page speed by caching resources
            },
          ],
        },
      ];
    },
    // async redirects() {
    //   return [
    //     {
    //       source: "http://lnomortgages.com.au/:path*",
    //       destination: "https://www.lnomortgages.com.au/:path*",
    //       permanent: true, // ✅ Enforce HTTPS & WWW for canonicalization
    //     },
    //     {
    //       source: "https://lnomortgages.com.au/:path*",
    //       destination: "https://www.lnomortgages.com.au/:path*",
    //       permanent: true,
    //     },
    //   ];
    // },
  };
  
  export default nextConfig;
  