/**
 * Env tipado del storefront.
 * CATALOG_DATA_SOURCE=mock (default) | http — al cablear Spring, setear API_BASE_URL y CATALOG_DATA_SOURCE=http.
 */
function trimSlash(url: string) {
  return url.replace(/\/$/, "");
}

export const env = {
  siteUrl: trimSlash(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? "La Número 1",
  /** Base Spring `/api/v1`. Vacío = sin HTTP real. */
  apiBaseUrl: process.env.API_BASE_URL
    ? trimSlash(process.env.API_BASE_URL)
    : "",
  /**
   * `mock` | `http`
   * http solo aplica si apiBaseUrl está definido; si no, cae a mock.
   */
  catalogDataSource: (process.env.CATALOG_DATA_SOURCE ?? "mock") as
    | "mock"
    | "http",
} as const;

export function isHttpCatalogEnabled(): boolean {
  return env.catalogDataSource === "http" && Boolean(env.apiBaseUrl);
}
