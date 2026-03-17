export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
    const siteUrl = "https://arsaam-studio.com";
    const lastmod = new Date().toISOString().split('T')[0];

    const pages = [
        { path: "/", priority: "1.0", changefreq: "weekly" },
        { path: "/ethic", priority: "0.8", changefreq: "monthly" },
        { path: "/snapel", priority: "0.8", changefreq: "monthly" },
        { path: "/mimouna", priority: "0.8", changefreq: "monthly" },
        { path: "/daimons", priority: "0.8", changefreq: "monthly" },
        { path: "/a-propos", priority: "0.7", changefreq: "monthly" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
        (page) => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("\n")}
</urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
