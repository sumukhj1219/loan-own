export async function GET() {
    const robotsTxt = `User-agent: *
  Disallow: /admin
  Allow: /
  
  Sitemap: http://localhost:3000/sitemap.xml`;
  
    return new Response(robotsTxt, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  