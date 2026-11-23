import { z } from "zod";

/** Línea de carrito — shape listo para cablear a Spring cart module. */
export const cartLineSchema = z.object({
  productId: z.string(),
  slug: z.string(),
  name: z.string(),
  unitPrice: z.number().nonnegative(),
  currency: z.literal("PEN"),
  quantity: z.number().int().positive(),
  imageUrl: z.string().url().optional(),
});

export type CartLine = z.infer<typeof cartLineSchema>;

export const cartSchema = z.object({
  lines: z.array(cartLineSchema),
  currency: z.literal("PEN"),
});

export type Cart = z.infer<typeof cartSchema>;

export function cartSubtotal(cart: Cart): number {
  return cart.lines.reduce(
    (sum, line) => sum + line.unitPrice * line.quantity,
    0,
  );
}
