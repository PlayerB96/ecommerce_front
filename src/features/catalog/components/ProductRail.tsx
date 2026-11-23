"use client";

import type { Product } from "@/entities/product";
import { siteContainerClass } from "@/shared/ui/siteContainer";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type ProductRailProps = {
  title: string;
  subtitle: string;
  products: Product[];
};

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      {dir === "left" ? (
        <path d="M15 6l-6 6 6 6" />
      ) : (
        <path d="M9 6l6 6-6 6" />
      )}
    </svg>
  );
}

export function ProductRail({ title, subtitle, products }: ProductRailProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-rail-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.4;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="bg-brand-white py-14 sm:py-16">
      <div className={siteContainerClass}>
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-xl font-semibold uppercase tracking-[0.18em] text-brand-black sm:text-2xl">
            {title}
          </h2>
          <p className="mt-3 font-serif text-sm italic text-brand-black/55 sm:text-base">
            {subtitle}
          </p>
        </header>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-[38%] z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-black text-brand-white hover:bg-brand-orange"
            aria-label="Anterior"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-[38%] z-10 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-black text-brand-white hover:bg-brand-orange"
            aria-label="Siguiente"
          >
            <Chevron dir="right" />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => {
              const image = product.images[0];
              return (
                <article
                  key={product.id}
                  data-rail-card
                  className="w-[70%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[22%]"
                >
                  <Link href={`/producto/${product.slug}`} className="group block">
                    <div className="relative aspect-square overflow-hidden bg-brand-black/[0.04]">
                      {image ? (
                        <Image
                          src={image.url}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 70vw, 22vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      ) : null}
                    </div>
                    <div className="mt-3">
                      <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-black group-hover:text-brand-orange sm:text-xs">
                        {product.name}
                      </h3>
                      <p className="mt-1.5 font-sans text-sm text-brand-black">
                        S/ {product.price.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
