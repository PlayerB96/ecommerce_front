import type { Product } from "@/entities/product";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];

  return (
    <article className="group flex flex-col gap-3">
      <Link
        href={`/producto/${product.slug}`}
        className="relative aspect-square overflow-hidden bg-brand-black/[0.04]"
      >
        {image ? (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : null}
      </Link>
      <div className="flex flex-col gap-1">
        <Link
          href={`/producto/${product.slug}`}
          className="font-medium text-brand-black hover:text-brand-orange hover:underline"
        >
          {product.name}
        </Link>
        <p className="line-clamp-2 text-sm text-brand-black/60">
          {product.shortDescription}
        </p>
        <p className="text-base font-semibold text-brand-black">
          S/ {product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
