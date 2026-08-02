"use client";

import { Container } from "@/components/Container";
import Link from "next/link";
import CartRow from "./CartRow";
import { EmptyCart } from "./EmptyCart";
import { useCart } from "@/hooks/useCart";

export function Cart() {
  const { cartItems, subtotal, shipping, tax, total } = useCart();

  return (
    <div className="pt-20 pb-24">
      <Container>
        {cartItems.length > 0 ? (
          <>
            <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">Cart</h1>
                <p className="mt-1 text-gray-500">
                  {cartItems.length} {cartItems.length > 1 ? "items" : "item"}{" "}
                  in your cart
                </p>
              </div>

              <Link
                href="/"
                className="rounded-2xl border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-black/5"
              >
                Continue shopping
              </Link>
            </div>

            <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_380px]">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartRow key={item.id} item={item} />
                ))}
              </div>
              <aside className="h-fit rounded-3xl border border-black/10 bg-white p-6 shadow-sm lg:sticky lg:top-54rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">
                  Order summary
                </h2>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ${subtotal}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-900">
                      ${shipping}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="font-medium text-gray-900">${tax}</span>
                  </div>
                </div>

                <div className="my-5 h-px w-full bg-black/10" />

                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total</span>
                  <span className="text-lg font-semibold text-gray-900">
                    ${total}
                  </span>
                </div>

                <div className="my-5 h-px w-full bg-black/10" />

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="HAVE A PROMOCODE?"
                    className="flex-1 rounded-xl border border-black/10 px-3 py-2 text-sm outline-none focus:border-black/30 transition uppercase"
                  />
                  <button className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-black/5 transition cursor-pointer">
                    Apply
                  </button>
                </div>

                <button className="mt-6 w-full cursor-pointer rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition">
                  Checkout
                </button>

                <p className="mt-3 text-center text-xs text-gray-500">
                  Secure checkout • Fast delivery
                </p>
              </aside>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </div>
  );
}
