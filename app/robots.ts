import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://pauline-faussurier-portfolio.vercel.app/sitemap.xml",
    host: "https://pauline-faussurier-portfolio.vercel.app",
  };
}
