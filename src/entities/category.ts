import { z } from "zod";

/** Contrato de lectura categoría — alineado a futuro Spring `/api/v1`. */
export const categorySchema = z.object({
  id: z.string(),
  slug: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
});

export type Category = z.infer<typeof categorySchema>;

export const categoryListSchema = z.array(categorySchema);
