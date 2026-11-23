/**
 * Paleta oficial La Número 1 — única permitida en el storefront.
 * Extraída del logo (swoosh naranja + versión fondo cian).
 * No agregar hex fuera de este archivo.
 */
export const brand = {
  name: "La Número 1",
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    orange: "#F88028",
    cyan: "#00A8E8",
  },
  /** Roles de uso */
  roles: {
    canvas: "white", // predominante en commerce
    ink: "black",
    accent: "orange", // CTAs, highlights
    brand: "cyan", // momentos de marca (sparing)
  },
} as const;

export type BrandColor = keyof typeof brand.colors;
