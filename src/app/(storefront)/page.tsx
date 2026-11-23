import { listCategories, listFeaturedProducts } from "@/features/catalog/api";
import { ProductCard } from "@/features/catalog/components/ProductCard";
import { buildHomeMetadata } from "@/features/seo/buildMetadata";
import {
  JsonLdScript,
  organizationJsonLd,
  websiteJsonLd,
} from "@/features/seo/jsonLd";
import { env } from "@/shared/config/env";
import Link from "next/link";

export const revalidate = 3600;

export const metadata = buildHomeMetadata();

export default async function HomePage() {
  const [categories, featured] = await Promise.all([
    listCategories(),
    listFeaturedProducts(4),
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
              "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-white/90">
            {env.siteName}
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Compra online con envío a todo el Perú
          </h1>
          <p className="max-w-xl text-lg text-brand-white/90">
            Electrónica, hogar y más. Precios en soles y compra segura.
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categoria/${category.slug}`}
                className="bg-brand-orange px-5 py-2.5 text-sm font-medium text-brand-white transition hover:bg-brand-black"
              >
                Ver {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl bg-brand-white px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-brand-black">
              Destacados
            </h2>
            <p className="mt-1 text-brand-black/60">
              Productos seleccionados para empezar tu compra.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-brand-black/10 bg-brand-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold text-brand-black">
            Categorías
          </h2>
          <p className="mt-1 text-brand-black/60">
            Navega por departamento y encuentra lo que buscas.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/categoria/${category.slug}`}
                  className="block border border-brand-black/15 bg-brand-white p-6 transition hover:border-brand-orange"
                >
                  <h3 className="text-lg font-medium text-brand-black">
                    {category.name}
                  </h3>
                  {category.description ? (
                    <p className="mt-2 text-sm text-brand-black/60">
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
