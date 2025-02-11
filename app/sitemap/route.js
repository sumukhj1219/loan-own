export async function GET() {
    const baseUrl = "https://www.lnomortgages.com.au";
  
    const pages = ["", "about", "services", "contact", "blog"];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(
            (page) => `
          <url>
            <loc>${baseUrl}/${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
        `
          )
          .join("")}
      </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  