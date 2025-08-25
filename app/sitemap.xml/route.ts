export async function GET(): Promise<Response> {
    const baseUrl = 'https://top-tier-renovation-next-js-seo.vercel.app';
    const now = new Date().toISOString();
  
    const urls = [
      { loc: `${baseUrl}/`, lastmod: now, changefreq: 'weekly', priority: '1.0' },
      { loc: `${baseUrl}/about`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
      { loc: `${baseUrl}/services`, lastmod: now, changefreq: 'monthly', priority: '0.8' },
      { loc: `${baseUrl}/areas-we-serve`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
      { loc: `${baseUrl}/contact`, lastmod: now, changefreq: 'monthly', priority: '0.7' },
    ];
  
    // Build XML sitemap
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>`
    )
    .join('')}
  </urlset>`;
  
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  }  
