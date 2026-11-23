import { buildNoIndexMetadata } from "@/features/seo/buildMetadata";
import Link from "next/link";

export const metadata = buildNoIndexMetadata("Mi cuenta");

/** Shell cuenta — auth/Spring diferido. */
export default function AccountPage() {
  return (
    <div className="mx-auto max-w-3xl bg-brand-white px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-black">
        Mi cuenta
      </h1>
      <p className="mt-2 text-brand-black/60">
        Inicio de sesión y pedidos se cablearán con el módulo auth de Spring.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-medium text-brand-orange underline"
      >
        Seguir comprando
      </Link>
    </div>
  );
}
