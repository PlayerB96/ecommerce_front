import {
  categoryListSchema,
  categorySchema,
} from "@/entities/category";
import {
  productListSchema,
  productSchema,
  sitemapEntrySchema,
} from "@/entities/product";
import { mockCategories, mockProducts } from "@/mocks/catalog";
import type { CatalogAdapter } from "@/features/catalog/api/types";
import { z } from "zod";

/**
 * Adapter mock: mismos shapes Zod que deberá devolver Spring.
 * Al cablear, no toques las pages — solo el selector en index.ts.
 */
export const mockCatalogAdapter: CatalogAdapter = {
  async listCategories() {
    return categoryListSchema.parse(mockCategories);
  },

  async getCategoryBySlug(slug) {
    const found = mockCategories.find((c) => c.slug === slug) ?? null;
    return found ? categorySchema.parse(found) : null;
  },

  async listProductsByCategorySlug(slug) {
    const list = mockProducts.filter((p) => p.category.slug === slug);
    return productListSchema.parse(list);
  },

  async listAllProducts() {
    return productListSchema.parse(mockProducts);
  },

  async getProductBySlug(slug) {
    const found = mockProducts.find((p) => p.slug === slug) ?? null;
    return found ? productSchema.parse(found) : null;
  },

  async listFeaturedProducts(limit = 4) {
    return productListSchema.parse(mockProducts.slice(0, limit));
  },

  async listSitemapEntries() {
    const staticEntries = [
      { urlPath: "/", changeFrequency: "daily" as const, priority: 1 },
    ];

    const categoryEntries = mockCategories.map((c) => ({
      urlPath: `/categoria/${c.slug}`,
      lastModified: undefined as string | undefined,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    const productEntries = mockProducts.map((p) => ({
      urlPath: `/producto/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

    return z
      .array(sitemapEntrySchema)
      .parse([...staticEntries, ...categoryEntries, ...productEntries]);
  },
};
