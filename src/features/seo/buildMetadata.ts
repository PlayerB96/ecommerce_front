import type { Category } from "@/entities/category";
import type { Product } from "@/entities/product";
import { env } from "@/shared/config/env";
import type { Metadata } from "next";

function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${env.siteUrl}${normalized}`;
}

export function buildHomeMetadata(): Metadata {
  const title = `${env.siteName} | Tienda online Perú`;
  const description = `Compra online en ${env.siteName}. Prendas, calzado y moda con envío a todo el Perú.`;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl("/") },
    openGraph: {
      title,
      description,
      url: absoluteUrl("/"),
      siteName: env.siteName,
      locale: "es_PE",
      type: "website",
    },
  };
}

export function buildCategoryMetadata(category: Category): Metadata {
  const title = `${category.name} online | ${env.siteName}`;
  const description =
    category.description ??
    `Explora ${category.name} en ${env.siteName}. Precios en soles y envío a Perú.`;
  const path = `/categoria/${category.slug}`;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: env.siteName,
      locale: "es_PE",
      type: "website",
    },
  };
}

export function buildProductMetadata(product: Product): Metadata {
  const title = `${product.name} | ${env.siteName}`;
  const description = product.shortDescription;
  const path = `/producto/${product.slug}`;
  const image = product.images[0];

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: env.siteName,
      locale: "es_PE",
      type: "website",
      images: image
        ? [{ url: image.url, alt: image.alt, width: image.width, height: image.height }]
        : undefined,
    },
  };
}

export function buildNoIndexMetadata(title: string): Metadata {
  return {
    title: `${title} | ${env.siteName}`,
    robots: { index: false, follow: false },
  };
}
