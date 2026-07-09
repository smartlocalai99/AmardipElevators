import { BLOGS_DATA, LOCATIONS_DATA, SERVICES_DATA } from "@/data/seoConfig";

export default function Sitemap() {
  return null;
}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://amardipelevators.com";
  const now = new Date().toISOString();
  const urls = [
    { loc: baseUrl, changefreq: "weekly", priority: "1.0" },
    { loc: `${baseUrl}/blog`, changefreq: "weekly", priority: "0.8" },
    { loc: `${baseUrl}/faqs`, changefreq: "monthly", priority: "0.8" },
    ...SERVICES_DATA.map((service) => ({
      loc: `${baseUrl}/services/${service.id}`,
      changefreq: "weekly",
      priority: "0.9",
    })),
    ...LOCATIONS_DATA.map((location) => ({
      loc: `${baseUrl}/locations/${location.id}`,
      changefreq: "weekly",
      priority: "0.9",
    })),
    ...BLOGS_DATA.map((blog) => ({
      loc: `${baseUrl}/blog/${blog.id}`,
      changefreq: "monthly",
      priority: "0.7",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(xml);
  res.end();

  return {
    props: {},
  };
};
