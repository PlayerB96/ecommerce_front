import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mx-auto max-w-3xl">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
