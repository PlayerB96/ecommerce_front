import { listSitemapEntries } from "@/features/catalog/api";
import { env } from "@/shared/config/env";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await listSitemapEntries();

  return entries
    .filter(
      (entry) =>
        !entry.urlPath.startsWith("/carrito") &&
        !entry.urlPath.startsWith("/checkout"),
    )
    .map((entry) => ({
      url: `${env.siteUrl}${entry.urlPath === "/" ? "" : entry.urlPath}`,
      lastModified: entry.lastModified
        ? new Date(entry.lastModified)
        : undefined,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    }));
}
