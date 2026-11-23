import { listCategories, listFeaturedProducts } from "@/features/catalog/api";
import { ProductRail } from "@/features/catalog/components/ProductRail";
import { CampaignStrip } from "@/features/campaigns/components/CampaignStrip";
import { buildHomeMetadata } from "@/features/seo/buildMetadata";
import {
  JsonLdScript,
  organizationJsonLd,
  websiteJsonLd,
} from "@/features/seo/jsonLd";
import { mockCampaigns } from "@/mocks/campaigns";
import { env } from "@/shared/config/env";
import { siteContainerClass } from "@/shared/ui/siteContainer";
import Link from "next/link";

export const revalidate = 3600;

export const metadata = buildHomeMetadata();

export default async function HomePage() {
  const [categories, featured] = await Promise.all([
    listCategories(),
    listFeaturedProducts(6),
  ]);

  return (
    <>
      <JsonLdScript data={organizationJsonLd()} />
      <JsonLdScript data={websiteJsonLd()} />

      <section className="relative overflow-hidden bg-brand-cyan text-brand-white">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div
          className={`relative ${siteContainerClass} flex flex-col gap-6 py-24 sm:py-32`}
        >
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-brand-white/90">
            {env.siteName}
          </p>
          <h1 className="max-w-2xl font-sans text-4xl font-semibold tracking-tight sm:text-5xl">
            Compra online con envío a todo el Perú
          </h1>
          <p className="max-w-xl font-serif text-lg italic text-brand-white/90">
            Prendas, calzado y accesorios. Precios en soles y compra segura.
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categoria/${category.slug}`}
                className="bg-brand-orange px-5 py-2.5 font-sans text-sm font-medium text-brand-white transition hover:bg-brand-black"
              >
                Ver {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CampaignStrip campaigns={mockCampaigns} />

      <ProductRail
        title="Regalables de temporada"
        subtitle="Polos, camisas, vestidos y calzado listos para regalar o estrenar."
        products={featured}
      />

      <section className="border-t border-brand-black/10 bg-brand-white">
        <div className={`${siteContainerClass} py-16`}>
          <h2 className="text-center font-sans text-xl font-semibold uppercase tracking-[0.18em] text-brand-black sm:text-2xl">
            Categorías
          </h2>
          <p className="mt-3 text-center font-serif text-sm italic text-brand-black/55">
            Navega por departamento y encuentra lo que buscas.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/categoria/${category.slug}`}
                  className="block border border-brand-black/15 bg-brand-white p-6 transition hover:border-brand-orange"
                >
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-brand-black">
                    {category.name}
                  </h3>
                  {category.description ? (
                    <p className="mt-2 font-serif text-sm italic text-brand-black/55">
                      {category.description}
                    </p>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
