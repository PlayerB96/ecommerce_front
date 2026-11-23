import type { Category } from "@/entities/category";
import type { Product } from "@/entities/product";

const electronica: Category = {
  id: "cat-electronica",
  slug: "electronica",
  name: "Electrónica",
  description:
    "Audífonos, TV y accesorios con envío a todo el Perú. Compra online con garantía.",
};

const hogar: Category = {
  id: "cat-hogar",
  slug: "hogar",
  name: "Hogar",
  description:
    "Productos para la casa: parrillas, textiles y más. Entrega confiable en Perú.",
};

export const mockCategories: Category[] = [electronica, hogar];

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    slug: "auriculares-pro-bluetooth",
    name: "Auriculares Pro Bluetooth",
    shortDescription: "Sonido nítido, 30 h de batería y cancelación de ruido.",
    description:
      "Auriculares over-ear con Bluetooth 5.3, cancelación activa de ruido y hasta 30 horas de autonomía. Ideales para oficina, viajes y uso diario. Incluye estuche y cable USB-C.",
    price: 199,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
        alt: "Auriculares Pro Bluetooth negros sobre fondo claro",
        width: 800,
        height: 800,
      },
    ],
    category: electronica,
    brand: "NovaAudio",
    sku: "AUD-PRO-001",
    updatedAt: "2026-11-01T10:00:00.000Z",
  },
  {
    id: "prod-2",
    slug: "television-55-4k",
    name: "Televisión 55 pulgadas 4K",
    shortDescription: "Smart TV 4K UHD con HDR y apps de streaming.",
    description:
      "Pantalla LED 55\" 4K UHD con HDR10, sistema smart integrado y control por voz. Perfecta para cine en casa. Montaje en pared compatible (soporte no incluido).",
    price: 1899,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&q=80",
        alt: "Televisión 55 pulgadas 4K encendida en sala",
        width: 800,
        height: 800,
      },
    ],
    category: electronica,
    brand: "VistaTech",
    sku: "TV-55-4K",
    updatedAt: "2026-11-05T12:00:00.000Z",
  },
  {
    id: "prod-3",
    slug: "parrilla-gas-4-quemadores",
    name: "Parrilla a gas 4 quemadores",
    shortDescription: "Parrilla para 4 personas, encendido electrónico.",
    description:
      "Parrilla a gas con 4 quemadores, tapa con termómetro y bandeja recolectora. Estructura resistente para uso en terraza o jardín. Fácil de limpiar.",
    price: 459,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        alt: "Parrilla a gas con comida asada",
        width: 800,
        height: 800,
      },
    ],
    category: hogar,
    brand: "CasaFuego",
    sku: "PAR-GAS-4",
    updatedAt: "2026-10-20T09:00:00.000Z",
  },
  {
    id: "prod-4",
    slug: "sudadera-algodon-unisex",
    name: "Sudadera de algodón unisex",
    shortDescription: "Tela suave, corte regular, varios colores.",
    description:
      "Sudadera unisex 80% algodón / 20% poliéster, capucha ajustable y bolsillo canguro. Lavable en máquina. Disponible en tallas S a XL (consultar stock por talla al cablear inventario).",
    price: 129,
    currency: "PEN",
    availability: "InStock",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
        alt: "Sudadera de algodón unisex color gris",
        width: 800,
        height: 800,
      },
    ],
    category: hogar,
    brand: "UrbanSoft",
    sku: "SUD-ALG-U",
    updatedAt: "2026-11-10T15:30:00.000Z",
  },
];
