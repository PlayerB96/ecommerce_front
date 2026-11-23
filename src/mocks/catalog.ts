import type { Category } from "@/entities/category";
import type { Product } from "@/entities/product";

const hombre: Category = {
  id: "cat-hombre",
  slug: "hombre",
  name: "Hombre",
  description:
    "Polos, camisas y prendas para hombre. Estilo casual y formal con envío a todo el Perú.",
};

const mujer: Category = {
  id: "cat-mujer",
  slug: "mujer",
  name: "Mujer",
  description:
    "Vestidos, blusas y looks para mujer. Tendencias y básicos con envío nacional.",
};

const calzado: Category = {
  id: "cat-calzado",
  slug: "calzado",
  name: "Calzado",
  description:
    "Zapatillas, botas y zapatos. Comodidad y estilo para cada ocasión.",
};

export const mockCategories: Category[] = [hombre, mujer, calzado];

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    slug: "polo-algodon-clasico",
    name: "Polo de algodón clásico",
    shortDescription: "Corte regular, 100% algodón peinado, ideal para el día a día.",
    description:
      "Polo de algodón peinado con cuello rib y acabado suave. Perfecto para looks casuales. Disponible en tallas S a XL. Lavable en máquina.",
    price: 89,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
        alt: "Polo de algodón blanco clásico",
        width: 800,
        height: 800,
      },
    ],
    category: hombre,
    brand: "La Número 1",
    sku: "POL-ALG-01",
    updatedAt: "2026-11-01T10:00:00.000Z",
  },
  {
    id: "prod-2",
    slug: "camisa-oxford-slim",
    name: "Camisa Oxford slim",
    shortDescription: "Oxford ligero, corte slim, botones contrastados.",
    description:
      "Camisa Oxford de manga larga con corte slim y cuello button-down. Ideal para oficina o salidas. Planchado fácil.",
    price: 149,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
        alt: "Camisa Oxford slim azul claro",
        width: 800,
        height: 800,
      },
    ],
    category: hombre,
    brand: "La Número 1",
    sku: "CAM-OXF-02",
    updatedAt: "2026-11-05T12:00:00.000Z",
  },
  {
    id: "prod-3",
    slug: "vestido-midi-floral",
    name: "Vestido midi floral",
    shortDescription: "Silueta midi, tela fluida, estampado floral.",
    description:
      "Vestido midi con estampado floral y cintura marcada. Ligero y cómodo para primavera-verano. Cierre lateral invisible.",
    price: 199,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
        alt: "Vestido midi floral en maniquí",
        width: 800,
        height: 800,
      },
    ],
    category: mujer,
    brand: "La Número 1",
    sku: "VES-MID-03",
    updatedAt: "2026-10-20T09:00:00.000Z",
  },
  {
    id: "prod-4",
    slug: "blusa-seda-lisa",
    name: "Blusa de seda lisa",
    shortDescription: "Caída suave, manga corta, cuello redondo.",
    description:
      "Blusa lisa con caída tipo seda y manga corta. Combina con pantalón o falda. Ideal para looks elegantes diurnos.",
    price: 169,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80",
        alt: "Blusa de seda lisa blanca",
        width: 800,
        height: 800,
      },
    ],
    category: mujer,
    brand: "La Número 1",
    sku: "BLU-SED-04",
    updatedAt: "2026-11-10T15:30:00.000Z",
  },
  {
    id: "prod-5",
    slug: "zapatillas-urbanas-blancas",
    name: "Zapatillas urbanas blancas",
    shortDescription: "Suela liviana, plantilla acolchada, uso diario.",
    description:
      "Zapatillas urbanas de cuero sintético blanco con suela de goma. Cómodas para caminar todo el día. Limpiar con paño húmedo.",
    price: 229,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
        alt: "Zapatillas urbanas blancas y rojas",
        width: 800,
        height: 800,
      },
    ],
    category: calzado,
    brand: "La Número 1",
    sku: "ZAP-URB-05",
    updatedAt: "2026-11-12T11:00:00.000Z",
  },
  {
    id: "prod-6",
    slug: "botas-cuero-mujer",
    name: "Botas de cuero mujer",
    shortDescription: "Caña media, cierre lateral, suela antideslizante.",
    description:
      "Botas de cuero para mujer con caña media y cierre lateral. Ideales para otoño-invierno. Forro interior suave.",
    price: 289,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
        alt: "Botas de cuero negras para mujer",
        width: 800,
        height: 800,
      },
    ],
    category: calzado,
    brand: "La Número 1",
    sku: "BOT-CUE-06",
    updatedAt: "2026-11-08T08:00:00.000Z",
  },
];
