import { categoryListSchema, categorySchema } from "@/entities/category";
import {
  productListSchema,
  productSchema,
  sitemapEntrySchema,
} from "@/entities/product";
import type { CatalogAdapter } from "@/features/catalog/api/types";
import { apiClient } from "@/shared/lib/apiClient";
import { z } from "zod";

/**
 * Adapter HTTP hacia Spring Boot.
 * Endpoints esperados (ajustar paths cuando el contrato real exista):
 * - GET /categories
 * - GET /categories/:slug
 * - GET /categories/:slug/products
 * - GET /products/:slug
 * - GET /products?featured=true&limit=n
 * - GET /sitemap/entries  (o armar desde listados)
 *
 * Activar: API_BASE_URL=... y CATALOG_DATA_SOURCE=http
 */
export const httpCatalogAdapter: CatalogAdapter = {
  async listCategories() {
    const data = await apiClient<unknown>("/categories");
    return categoryListSchema.parse(data);
  },

  async getCategoryBySlug(slug) {
    try {
      const data = await apiClient<unknown>(`/categories/${slug}`);
      return categorySchema.parse(data);
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "status" in error &&
        (error as { status: number }).status === 404
      ) {
        return null;
      }
      throw error;
    }
  },

  async listProductsByCategorySlug(slug) {
    const data = await apiClient<unknown>(`/categories/${slug}/products`);
    return productListSchema.parse(data);
  },

  async listAllProducts() {
    const data = await apiClient<unknown>("/products");
    return productListSchema.parse(data);
  },

  async getProductBySlug(slug) {
    try {
      const data = await apiClient<unknown>(`/products/${slug}`);
      return productSchema.parse(data);
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "status" in error &&
        (error as { status: number }).status === 404
      ) {
        return null;
      }
      throw error;
    }
  },

  async listFeaturedProducts(limit = 4) {
    const data = await apiClient<unknown>("/products", {
      searchParams: { featured: "true", limit },
    });
    return productListSchema.parse(data);
  },

  async listSitemapEntries() {
    const data = await apiClient<unknown>("/sitemap/entries");
    return z.array(sitemapEntrySchema).parse(data);
  },
};
