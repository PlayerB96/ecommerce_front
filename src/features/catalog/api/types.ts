import type { Category } from "@/entities/category";
import type { Product, SitemapEntry } from "@/entities/product";

/**
 * Puerto del catálogo. Mock e HTTP implementan la misma interfaz.
 * Swap: cambiar el export en `index.ts` / respetar `useHttpCatalog()`.
 */
export type CatalogAdapter = {
  listCategories: () => Promise<Category[]>;
  getCategoryBySlug: (slug: string) => Promise<Category | null>;
  listProductsByCategorySlug: (slug: string) => Promise<Product[]>;
  listAllProducts: () => Promise<Product[]>;
  getProductBySlug: (slug: string) => Promise<Product | null>;
  listFeaturedProducts: (limit?: number) => Promise<Product[]>;
  listSitemapEntries: () => Promise<SitemapEntry[]>;
};
