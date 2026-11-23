import { listCategories } from "@/features/catalog/api";
import { brand } from "@/shared/config/brand";
import { env } from "@/shared/config/env";
import { SITE_MAX_WIDTH } from "@/shared/ui/siteContainer";
import Image from "next/image";
import Link from "next/link";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="20" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.25" fill="currentColor" stroke="none" />
      <path d="M2.5 3h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h9.6a1.5 1.5 0 0 0 1.45-1.1L21 7H6.2" />
    </svg>
  );
}

const navLinkClass =
  "whitespace-nowrap font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-brand-black transition-colors hover:text-brand-orange";

export async function SiteHeader() {
  const categories = await listCategories();
  const mid = Math.ceil(categories.length / 2);
  const leftCategories = categories.slice(0, mid);
  const rightCategories = categories.slice(mid);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-white">
      <div className="bg-brand-black px-4 py-1.5 text-center text-[11px] tracking-wide text-brand-white sm:text-xs">
        Compra en cuotas sin intereses con tus tarjetas favoritas
      </div>

      <div className="border-b border-brand-black/10 bg-brand-white">
        <div
          className={`mx-auto grid h-14 w-full ${SITE_MAX_WIDTH} grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8`}
        >
          {/* Izquierda: búsqueda + nav */}
          <div className="flex min-w-0 items-center gap-4 lg:gap-8">
            <form
              action="/buscar"
              method="get"
              className="hidden min-w-0 max-w-[220px] flex-1 items-center gap-2 border-b border-brand-black/40 pb-1 md:flex"
              role="search"
            >
              <label htmlFor="site-search" className="sr-only">
                Buscar productos
              </label>
              <SearchIcon className="shrink-0 text-brand-black" />
              <input
                id="site-search"
                name="q"
                type="search"
                placeholder="¿Qué estás buscando?"
                className="w-full min-w-0 bg-transparent font-serif text-sm italic text-brand-black placeholder:text-brand-black/45 focus:outline-none"
              />
            </form>

            <nav
              aria-label="Principal izquierda"
              className="hidden items-center gap-4 xl:gap-6 lg:flex"
            >
              <Link href="/" className={navLinkClass}>
                Lo nuevo
              </Link>
              {leftCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categoria/${category.slug}`}
                  className={navLinkClass}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Centro: logo */}
          <Link href="/" className="justify-self-center shrink-0">
            <Image
              src={brand.logoSrc}
              alt={env.siteName}
              width={160}
              height={84}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Derecha: nav + iconos */}
          <div className="flex min-w-0 items-center justify-end gap-4 lg:gap-8">
            <nav
              aria-label="Principal derecha"
              className="hidden items-center gap-4 xl:gap-6 lg:flex"
            >
              {rightCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categoria/${category.slug}`}
                  className={navLinkClass}
                >
                  {category.name}
                </Link>
              ))}
              <Link href="/checkout" className={navLinkClass}>
                Servicios
              </Link>
            </nav>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/buscar"
                className="text-brand-black hover:text-brand-orange md:hidden"
                aria-label="Buscar"
              >
                <SearchIcon />
              </Link>
              <Link
                href="/cuenta"
                className="text-brand-black hover:text-brand-orange"
                aria-label="Mi cuenta"
              >
                <UserIcon />
              </Link>
              <Link
                href="/carrito"
                className="text-brand-black hover:text-brand-orange"
                aria-label="Carrito"
              >
                <CartIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Nav móvil debajo del logo */}
        <nav
          aria-label="Categorías móvil"
          className="flex gap-4 overflow-x-auto border-t border-brand-black/10 px-4 py-2 lg:hidden"
        >
          <Link href="/" className={navLinkClass}>
            Lo nuevo
          </Link>
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.slug}`}
              className={navLinkClass}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
