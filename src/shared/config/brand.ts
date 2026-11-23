/**
 * Identidad La Número 1 — fuente de verdad de marca.
 * No agregar colores ni tipografías fuera de este archivo.
 */
export const brand = {
  name: "La Número 1",
  /** Único logo oficial del storefront — no usar otras variantes. */
  logoSrc: "/brand/logo.png" as const,
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    orange: "#F88028",
    cyan: "#00A8E8",
  },
  /**
   * Tipografías cerradas (máx. 3). Tailwind: `font-sans` | `font-serif`.
   * Prohibido Inter, Roboto, Arial, Geist u otras familias.
   */
  fonts: {
    sans: "Montserrat", // UI, nav, títulos, precios
    serif: "Libre Baskerville", // acento itálico (búsqueda, subtítulos)
  },
  roles: {
    canvas: "white",
    ink: "black",
    accent: "orange",
    brand: "cyan",
  },
} as const;

export type BrandColor = keyof typeof brand.colors;
export type BrandFont = keyof typeof brand.fonts;
