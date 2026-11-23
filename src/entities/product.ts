import { z } from "zod";
import { categorySchema } from "@/entities/category";

export const productImageSchema = z.object({
  url: z.string().url(),
  alt: z.string(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});

export const productAvailabilitySchema = z.enum([
  "InStock",
  "OutOfStock",
  "PreOrder",
]);

/**
 * Contrato de lectura producto — mismos campos que deberá exponer Spring.
 * Checklist cableado: id, slug, name, shortDescription, description, price,
 * currency, availability, images[], category, brand?, sku?, updatedAt.
 */
export const productSchema = z.object({
  id: z.string(),
  slug: z.string().min(1),
  name: z.string().min(1),
  shortDescription: z.string(),
  description: z.string(),
  price: z.number().nonnegative(),
  currency: z.literal("PEN"),
  availability: productAvailabilitySchema,
  images: z.array(productImageSchema).min(1),
  category: categorySchema,
  brand: z.string().optional(),
  sku: z.string().optional(),
  updatedAt: z.string().datetime(),
});

export type Product = z.infer<typeof productSchema>;
export type ProductImage = z.infer<typeof productImageSchema>;
export type ProductAvailability = z.infer<typeof productAvailabilitySchema>;

export const productListSchema = z.array(productSchema);

export const sitemapEntrySchema = z.object({
  urlPath: z.string(),
  lastModified: z.string().datetime().optional(),
  changeFrequency: z
    .enum(["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"])
    .optional(),
  priority: z.number().min(0).max(1).optional(),
});

export type SitemapEntry = z.infer<typeof sitemapEntrySchema>;
