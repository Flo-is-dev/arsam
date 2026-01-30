export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
    const pages = [
        '',
        'ethic',
        'snapel',
        'mimouna',
        'daimons',
        'a-propos'
    ];
    
    const siteUrl = 'https://portfolio.com'; // User can change this later

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
    <url>
        <loc>${siteUrl}/${page}${page ? '/' : ''}</loc>
        <changefreq>monthly</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`).join('')}
</urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}
