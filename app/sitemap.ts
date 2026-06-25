import { MetadataRoute } from "next";
import { SERVICES_DATA, LOCATIONS_DATA, BLOGS_DATA } from "./data/seoConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amardipelevators.com";

  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const serviceUrls = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const locationUrls = LOCATIONS_DATA.map((location) => ({
    url: `${baseUrl}/locations/${location.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogUrls = BLOGS_DATA.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...serviceUrls, ...locationUrls, ...blogUrls];
}
