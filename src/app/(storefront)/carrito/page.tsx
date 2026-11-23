import { buildNoIndexMetadata } from "@/features/seo/buildMetadata";
import type { Cart } from "@/features/cart/types";
import { cartSubtotal } from "@/features/cart/types";
import Link from "next/link";

export const metadata = buildNoIndexMetadata("Carrito");

/** Shell UI — sin persistencia backend. Listo para cablear módulo cart de Spring. */
const emptyCart: Cart = {
  lines: [],
  currency: "PEN",
};

export default function CartPage() {
  const cart = emptyCart;
  const subtotal = cartSubtotal(cart);

  return (
    <div className="mx-auto max-w-3xl bg-brand-white px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight text-brand-black">
        Carrito
      </h1>
      <p className="mt-2 text-brand-black/60">
        Vista preparada para conectar el carrito del backend. Hoy está vacío
        (shell).
      </p>

      {cart.lines.length === 0 ? (
        <div className="mt-10 border border-dashed border-brand-black/25 p-8 text-center">
          <p className="text-brand-black/80">Tu carrito está vacío.</p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-medium text-brand-orange underline"
          >
            Seguir comprando
          </Link>
        </div>
      ) : (
        <ul className="mt-8 divide-y divide-brand-black/10">
          {cart.lines.map((line) => (
            <li key={line.productId} className="flex justify-between py-4">
              <div>
                <p className="font-medium text-brand-black">{line.name}</p>
                <p className="text-sm text-brand-black/60">
                  Cantidad: {line.quantity}
                </p>
              </div>
              <p className="font-medium text-brand-black">
                S/ {(line.unitPrice * line.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 flex items-center justify-between border-t border-brand-black/10 pt-6">
        <p className="text-brand-black/80">
          Subtotal:{" "}
          <span className="font-semibold text-brand-black">
            S/ {subtotal.toFixed(2)}
          </span>
        </p>
        <Link
          href="/checkout"
          className="bg-brand-orange px-5 py-3 text-sm font-medium text-brand-white hover:bg-brand-black"
        >
          Ir al checkout
        </Link>
      </div>
    </div>
  );
}
