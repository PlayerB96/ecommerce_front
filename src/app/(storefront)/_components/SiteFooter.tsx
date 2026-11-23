import { env } from "@/shared/config/env";
import { siteContainerClass } from "@/shared/ui/siteContainer";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-brand-black/10 bg-brand-white">
      <div
        className={`${siteContainerClass} flex flex-col gap-4 py-10 sm:flex-row sm:items-start sm:justify-between`}
      >
        <div>
          <p className="font-semibold text-brand-black">{env.siteName}</p>
          <p className="mt-1 max-w-sm text-sm text-brand-black/60">
            Moda y calzado online en Perú. Envíos, cambios y atención al cliente.
          </p>
        </div>
        <nav
          aria-label="Pie de página"
          className="flex flex-col gap-2 text-sm"
        >
          <Link
            href="/"
            className="text-brand-black/70 hover:text-brand-orange hover:underline"
          >
            Inicio
          </Link>
          <Link
            href="/carrito"
            className="text-brand-black/70 hover:text-brand-orange hover:underline"
          >
            Carrito
          </Link>
          <Link
            href="/checkout"
            className="text-brand-black/70 hover:text-brand-orange hover:underline"
          >
            Checkout
          </Link>
        </nav>
      </div>
      <div className="bg-brand-cyan py-2 text-center text-xs text-brand-white">
        {env.siteName}
      </div>
    </footer>
  );
}
