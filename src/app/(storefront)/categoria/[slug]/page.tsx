import { Breadcrumbs } from "@/features/catalog/components/Breadcrumbs";
import { ProductCard } from "@/features/catalog/components/ProductCard";
import {
  getCategoryBySlug,
  listCategories,
  listProductsByCategorySlug,
} from "@/features/catalog/api";
import { buildCategoryMetadata } from "@/features/seo/buildMetadata";
import {
  breadcrumbJsonLd,
  categoryJsonLd,
  JsonLdScript,
} from "@/features/seo/jsonLd";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const categories = await listCategories();
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return { title: "Categoría no encontrada" };
  }
  return buildCategoryMetadata(category);
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const products = await listProductsByCategorySlug(slug);

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: category.name, path: `/categoria/${category.slug}` },
  ];

  return (
    <>
      <JsonLdScript data={categoryJsonLd(category)} />
      <JsonLdScript
        data={breadcrumbJsonLd(
          crumbs.map((c) => ({ name: c.name, path: c.path })),
        )}
      />

      <div className="mx-auto max-w-6xl bg-brand-white px-4 py-10 sm:px-6">
        <Breadcrumbs items={crumbs} />
        <header className="mt-6 max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-brand-black">
            {category.name}
          </h1>
          {category.description ? (
            <p className="mt-3 text-brand-black/60">{category.description}</p>
          ) : null}
        </header>

        {products.length === 0 ? (
          <p className="mt-10 text-brand-black/60">
            No hay productos en esta categoría por ahora.
          </p>
        ) : (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
