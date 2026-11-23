# Swap mock → Spring HTTP

1. En `.env.local` (o el entorno de deploy):

```
API_BASE_URL=https://tu-api.com/api/v1
CATALOG_DATA_SOURCE=http
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_SITE_NAME=TuMarca
```

2. Ajusta paths en `httpAdapter.ts` al contrato real de Spring.

3. No reescribas las pages de `(storefront)`: leen solo desde `features/catalog/api`.

## Checklist de campos (Zod = contrato)

**Category:** `id`, `slug`, `name`, `description?`

**Product:** `id`, `slug`, `name`, `shortDescription`, `description`, `price`, `currency` (`PEN`), `availability` (`InStock` | `OutOfStock` | `PreOrder`), `images[]` (`url`, `alt`, `width?`, `height?`), `category`, `brand?`, `sku?`, `updatedAt` (ISO datetime)

Si Spring no cumple el shape, Zod falla en el borde del adapter (visible), no en la UI a ciegas.
