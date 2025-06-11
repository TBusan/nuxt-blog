export default defineEventHandler(async (event) => {
  const baseUrl = 'https://yourcompany.com'; // Replace with your actual domain in production
  
  // Define your site routes here
  // In a real-world scenario, you might fetch these from your CMS or database
  const routes = [
    '/',
    '/about',
    '/services',
    '/products',
    '/blog',
    '/contact',
    '/careers'
  ];
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      route => `<url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('\n  ')}
</urlset>`;
  
  event.node.res.setHeader('Content-Type', 'text/xml');
  return sitemap;
}); 