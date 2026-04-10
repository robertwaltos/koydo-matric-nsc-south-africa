import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://matric-nsc-south-africa.koydo.app/sitemap.xml",
    host: "https://matric-nsc-south-africa.koydo.app",
  };
}
