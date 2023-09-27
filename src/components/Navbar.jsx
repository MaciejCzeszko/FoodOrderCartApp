import { useState } from "react";

export function Navbar({ onOpenCart, meals }) {
  const cartTotalAmount = meals.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <nav className="flex justify-around bg-orange-300 p-4 items-center">
      <h1 className="font-bold text-3xl">MakDonald</h1>
      <button
        className="font-bold text-2xl bg-orange-600 py-2 px-6 rounded-3xl hover:bg-orange-800 transition ease-out"
        onClick={onOpenCart}
      >
        <span className="pr-2">Your cart</span>
        <span>{cartTotalAmount}</span>
      </button>
    </nav>
  );
}
