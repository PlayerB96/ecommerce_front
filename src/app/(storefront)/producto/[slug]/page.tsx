import {
  getProductBySlug,
  listAllProducts,
  listFeaturedProducts,
} from "@/features/catalog/api";
import { Breadcrumbs } from "@/features/catalog/components/Breadcrumbs";
import { ProductCard } from "@/features/catalog/components/ProductCard";
import { buildProductMetadata } from "@/features/seo/buildMetadata";
import {
  breadcrumbJsonLd,
  JsonLdScript,
  productJsonLd,
} from "@/features/seo/jsonLd";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await listAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return { title: "Producto no encontrado" };
  }
  return buildProductMetadata(product);
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = (await listFeaturedProducts(4)).filter(
    (p) => p.id !== product.id,
  );
  const image = product.images[0];

  const crumbs = [
    { name: "Inicio", path: "/" },
    {
      name: product.category.name,
      path: `/categoria/${product.category.slug}`,
    },
    { name: product.name, path: `/producto/${product.slug}` },
  ];

  return (
    <>
      <JsonLdScript data={productJsonLd(product)} />
      <JsonLdScript
        data={breadcrumbJsonLd(
          crumbs.map((c) => ({ name: c.name, path: c.path })),
        )}
      />

      <div className="mx-auto max-w-6xl bg-brand-white px-4 py-10 sm:px-6">
        <Breadcrumbs items={crumbs} />

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden bg-brand-black/[0.04]">
            {image ? (
              <Image
                src={image.url}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : null}
          </div>

          <div>
            <p className="text-sm text-brand-black/50">
              <Link
                href={`/categoria/${product.category.slug}`}
                className="hover:text-brand-orange hover:underline"
              >
                {product.category.name}
              </Link>
              {product.brand ? ` · ${product.brand}` : null}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-brand-black">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-brand-black">
              S/ {product.price.toFixed(2)}
            </p>
            <p className="mt-2 text-sm text-brand-black/60">
              {product.availability === "InStock"
                ? "Disponible"
                : product.availability === "OutOfStock"
                  ? "Agotado"
                  : "Preventa"}
            </p>
            <p className="mt-6 text-brand-black/80">{product.shortDescription}</p>
            <p className="mt-4 whitespace-pre-line text-brand-black/60">
              {product.description}
            </p>
            {product.sku ? (
              <p className="mt-4 text-xs text-brand-black/50">
                SKU: {product.sku}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/carrito"
                className="bg-brand-orange px-5 py-3 text-sm font-medium text-brand-white hover:bg-brand-black"
              >
                Ir al carrito
              </Link>
              <Link
                href={`/categoria/${product.category.slug}`}
                className="border border-brand-black/25 px-5 py-3 text-sm font-medium text-brand-black hover:border-brand-orange"
              >
                Ver más en {product.category.name}
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-16 border-t border-brand-black/10 pt-12">
            <h2 className="text-xl font-semibold text-brand-black">
              También te puede interesar
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
}
