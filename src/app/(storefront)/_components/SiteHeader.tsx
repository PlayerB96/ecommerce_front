import { listCategories } from "@/features/catalog/api";
import { env } from "@/shared/config/env";
import Image from "next/image";
import Link from "next/link";

export async function SiteHeader() {
  const categories = await listCategories();

  return (
    <header className="border-b border-brand-black/10 bg-brand-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/brand/logo-cyan.png"
            alt={env.siteName}
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <nav
          aria-label="Categorías"
          className="hidden items-center gap-4 sm:flex"
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.slug}`}
              className="text-sm text-brand-black/70 hover:text-brand-black hover:underline"
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <Link
          href="/carrito"
          className="text-sm font-medium text-brand-black hover:text-brand-orange"
        >
          Carrito
        </Link>
      </div>
    </header>
  );
}
