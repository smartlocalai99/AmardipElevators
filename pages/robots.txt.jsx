export default function Robots() {
  return null;
}

export const getServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://amardipelevators.com/sitemap.xml
`);
  res.end();

  return {
    props: {},
  };
};
