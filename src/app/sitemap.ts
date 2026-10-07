import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eroid.vercel.app";

  const routes = [
    "",
    "/about",
    "/features",
    "/ai",
    "/privacy",
    "/terms",
    "/security",
    "/contact",
    "/download",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
