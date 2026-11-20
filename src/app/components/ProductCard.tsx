"use client";

import { useState } from "react";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
};

export default function ProductCard({
  title,
  description,
  price,
}: ProductCardProps) {
  const [cantidad, setCantidad] = useState(0);

  function handleIncrement() {
    setCantidad(cantidad + 1);
  }

  return (
    <article className="border border-zinc-300 rounded-md p-4">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>S/ {price.toFixed(2)}</p>

      <div className="flex gap-2">
        <button
          className="bg-zinc-300 rounded-md p-2 cursor-pointer"
          onClick={handleIncrement}
        >
          Agregar
        </button>
        <span>En carrito: {cantidad}</span>
      </div>
    </article>
  );
}
