export async function GET() {
    const robotsTxt = `User-agent: *
  Disallow: /admin
  Allow: /
  
  Sitemap: https://www.lnomortgages.com.au/sitemap.xml`;
  
    return new Response(robotsTxt, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  