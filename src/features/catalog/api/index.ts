import { httpCatalogAdapter } from "@/features/catalog/api/httpAdapter";
import { mockCatalogAdapter } from "@/features/catalog/api/mockAdapter";
import type { CatalogAdapter } from "@/features/catalog/api/types";
import { isHttpCatalogEnabled } from "@/shared/config/env";

/**
 * Punto único de lectura del catálogo para las pages.
 *
 * Swap mock → Spring:
 * 1. Definir API_BASE_URL (ej. https://api.tudominio.com/api/v1)
 * 2. CATALOG_DATA_SOURCE=http
 * 3. Ajustar paths en httpAdapter.ts al contrato real de Spring
 * 4. No hace falta tocar page.tsx / layout de rutas SEO
 *
 * Campos que Spring debe exponer: ver productSchema / categorySchema en entities/.
 */
function getCatalogAdapter(): CatalogAdapter {
  if (isHttpCatalogEnabled()) {
    return httpCatalogAdapter;
  }
  return mockCatalogAdapter;
}

const catalog = getCatalogAdapter();

export const listCategories = catalog.listCategories.bind(catalog);
export const getCategoryBySlug = catalog.getCategoryBySlug.bind(catalog);
export const listProductsByCategorySlug =
  catalog.listProductsByCategorySlug.bind(catalog);
export const listAllProducts = catalog.listAllProducts.bind(catalog);
export const getProductBySlug = catalog.getProductBySlug.bind(catalog);
export const listFeaturedProducts = catalog.listFeaturedProducts.bind(catalog);
export const listSitemapEntries = catalog.listSitemapEntries.bind(catalog);

export type { CatalogAdapter };
