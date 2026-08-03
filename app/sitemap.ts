import type { MetadataRoute } from "next";

const baseUrl = "https://pauline-faussurier-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/expertise`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projets`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/parcours`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
