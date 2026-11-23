import { env } from "@/shared/config/env";

export class ApiClientError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly body?: unknown,
  ) {
    super(message);
    this.name = "ApiClientError";
  }
}

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  searchParams?: Record<string, string | number | undefined>;
};

/**
 * Cliente HTTP tipado hacia Spring Boot `/api/v1`.
 * Listo para cablear; el catálogo aún usa mock por defecto.
 * No colocar aquí lógica de stock, cupones ni cargos Culqi.
 */
export async function apiClient<T>(
  path: string,
  {
    body,
    headers,
    searchParams,
    ...rest
  }: RequestOptions = {},
): Promise<T> {
  if (!env.apiBaseUrl) {
    throw new ApiClientError(
      "API_BASE_URL no configurada. Usa adapter mock o define API_BASE_URL.",
      0,
    );
  }

  const url = new URL(
    path.startsWith("/") ? path.slice(1) : path,
    `${env.apiBaseUrl}/`,
  );

  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
  }

  const response = await fetch(url, {
    ...rest,
    headers: {
      Accept: "application/json",
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    let errorBody: unknown;
    try {
      errorBody = await response.json();
    } catch {
      errorBody = await response.text().catch(() => undefined);
    }
    throw new ApiClientError(
      `API ${response.status}: ${path}`,
      response.status,
      errorBody,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
