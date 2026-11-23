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
          className="font-sans text-sm font-semibold uppercase tracking-[0.08em] text-brand-black hover:text-brand-orange"
        >
          {product.name}
        </Link>
        <p className="line-clamp-2 font-serif text-sm italic text-brand-black/55">
          {product.shortDescription}
        </p>
        <p className="font-sans text-base font-medium text-brand-black">
          S/ {product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
