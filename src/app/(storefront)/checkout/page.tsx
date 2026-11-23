import { buildNoIndexMetadata } from "@/features/seo/buildMetadata";
import Link from "next/link";

export const metadata = buildNoIndexMetadata("Checkout");

/**
 * Shell checkout — Culqi (solo tokenización en browser) se cablea después.
 * Cargos / secretos / webhooks: solo Spring Boot.
 */
export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-3xl bg-brand-white px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-black">
        Checkout
      </h1>
      <p className="mt-2 text-brand-black/60">
        Flujo de pago pendiente de cablear. Aquí irá el formulario de datos y
        la tokenización Culqi en el cliente.
      </p>

      <div className="mt-10 space-y-4 border border-brand-black/15 p-6">
        <p className="text-sm font-medium text-brand-black">Resumen</p>
        <p className="text-sm text-brand-black/60">
          Sin ítems todavía. Completa el carrito cuando el API esté listo.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            disabled
            className="cursor-not-allowed bg-brand-black/20 px-5 py-3 text-sm font-medium text-brand-black/50"
          >
            Pagar con Culqi (próximamente)
          </button>
          <Link
            href="/carrito"
            className="border border-brand-black/25 px-5 py-3 text-sm font-medium text-brand-black hover:border-brand-orange"
          >
            Volver al carrito
          </Link>
        </div>
      </div>
    </div>
  );
}
