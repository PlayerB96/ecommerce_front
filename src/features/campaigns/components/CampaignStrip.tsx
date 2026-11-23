"use client";

import type { CampaignCard } from "@/mocks/campaigns";
import { siteContainerClass } from "@/shared/ui/siteContainer";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type CampaignStripProps = {
  campaigns: CampaignCard[];
};

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
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

export function CampaignStrip({ campaigns }: CampaignStripProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="relative bg-brand-white py-8 sm:py-10" aria-label="Campañas">
      <div className={siteContainerClass}>
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-black/15 bg-brand-white text-brand-black shadow-sm hover:border-brand-orange lg:flex"
            aria-label="Anterior"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-black/15 bg-brand-white text-brand-black shadow-sm hover:border-brand-orange lg:flex"
            aria-label="Siguiente"
          >
            <Chevron dir="right" />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {campaigns.map((campaign) => (
              <Link
                key={campaign.id}
                href={campaign.href}
                className="group relative min-w-[85%] snap-start overflow-hidden sm:min-w-[55%] lg:min-w-0"
              >
                <div className="relative aspect-[3/4] w-full bg-brand-black/5">
                  <Image
                    src={campaign.imageUrl}
                    alt={campaign.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 85vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 bg-brand-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-black sm:text-[11px]">
                    {campaign.badge}
                  </span>
                </div>
                <div className="bg-brand-black px-4 py-3 text-brand-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em]">
                    {campaign.title}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-brand-white/85 group-hover:text-brand-orange">
                    Ver todo
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
