export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};

export const products: Product[] = [
  {
    id: "1",
    title: "Auriculares Pro",
    description: "Sonido nítido, 30h de batería.",
    price: 199.0,
  },
  {
    id: "2",
    title: "Parrilla",
    description: "Parrilla para 4 personas.",
    price: 299.0,
  },
  {
    id: "3",
    title: "Sudadera",
    description: "Sudadera para 1 persona.",
    price: 399.0,
  },
  {
    id: "2",
    title: "Televisión",
    description: "Televisión para 1 persona.",
    price: 499.0,
  },
];
