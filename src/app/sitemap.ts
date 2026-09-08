import type { MetadataRoute } from "next";
import { committees } from "@/lib/committees";

const siteUrl = "https://paretoinvestment.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/society",
    "/committees",
    "/our-team",
    "/research",
    "/decisions",
    "/reading",
    "/events",
    "/apply",
    "/press",
    "/privacy",
    "/rotterdam",
    "/eindhoven",
    "/members",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const houseViewRoutes = committees.map((committee) => ({
    url: `${siteUrl}/house-view/${committee.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...houseViewRoutes];
}
