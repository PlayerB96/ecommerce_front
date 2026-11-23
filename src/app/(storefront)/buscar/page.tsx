import { buildNoIndexMetadata } from "@/features/seo/buildMetadata";
import Link from "next/link";

export const metadata = buildNoIndexMetadata("Buscar");

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

/**
 * Shell de búsqueda — resultados reales al cablear Spring.
 * noindex: evita thin content en Google.
 */
export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  return (
    <div className="mx-auto max-w-3xl bg-brand-white px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-black">
        Buscar
      </h1>
      <form action="/buscar" method="get" className="mt-6" role="search">
        <label htmlFor="buscar-q" className="sr-only">
          ¿Qué estás buscando?
        </label>
        <input
          id="buscar-q"
          name="q"
          type="search"
          defaultValue={query}
          placeholder="¿Qué estás buscando?"
          className="w-full border-b border-brand-black/40 bg-transparent py-2 font-serif text-base italic text-brand-black placeholder:text-brand-black/45 focus:border-brand-orange focus:outline-none"
        />
      </form>
      {query ? (
        <p className="mt-8 text-brand-black/60">
          Buscaste “{query}”. Los resultados se conectarán al API de catálogo.
        </p>
      ) : (
        <p className="mt-8 text-brand-black/60">
          Escribe un término para buscar productos.
        </p>
      )}
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-brand-orange underline"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
