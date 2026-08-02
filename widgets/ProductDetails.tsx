"use client";
import { BreadCrumb } from "@/components/BreadCrumb";
import { Product } from "@/types/catalogue";
import { SizeSelector } from "./SizeSelector";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSizeId, setSelectedSizeId] = useState<number | null>(null);
  const [sizeError, setSizeError] = useState<string | null>(null);
  const selectedSize = product.sizes.find((s) => s.id == selectedSizeId);
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [justAdded, setJustAdded] = useState(false);

  function handleSizeSelect(sizeId: number) {
    setSizeError(null);
    setSelectedSizeId(sizeId);
    setJustAdded(false);
  }

  function handleAddToCart() {
    if (!selectedSize) return setSizeError("Please select a size!");
    const cartItem = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      isNew: product.isNew,
      collection: product.collection,
      size: selectedSize.label,
      sizeId: selectedSize.id,
      stock: selectedSize.stock,
      quantity: 1,
    };

    if (!user) {
      sessionStorage.setItem("pendingCartItem", JSON.stringify(cartItem));
      router.push("/login");
      return;
    }

    dispatch(addToCart(cartItem));

    setJustAdded(true);
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl w-full mx-auto px-5 sm:px-8 pt-10 pb-18">
        <BreadCrumb product={product} />
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 mt-6">
          <section className="w-full">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <img
                src={product.image}
                alt="product image"
                className="w-full h-[520px] sm:h-[620px] object-cover"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-semibold text-zinc-900 border border-zinc-100">
                {product.collection}
              </span>
            </div>
          </section>
          <section className="w-full h-fit lg:sticky lg:top-8">
            <div className="rounded-3xl border border-zinc-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                {product.title}
              </h1>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-900">
                {product.price}$
              </h3>
              <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                Clean minimal piece from the {product.collection}. Premium look,
                everyday comfort.
              </p>

              <SizeSelector
                sizes={product.sizes}
                selectedSizeId={selectedSizeId}
                onSelect={handleSizeSelect}
              />
              {sizeError && (
                <p className="text-xs text-red-500 mt-4">{sizeError}</p>
              )}

              <div className="mt-7 w-full">
                {justAdded ? (
                  <Link
                    href="/cart"
                    className="flex justify-center items-center w-full h-12 rounded-2xl bg-emerald-600 text-white font-semibold tracking-wide  transition shadow-[0_10px_25px_rgba(0,0,0,0.18)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Go to Cart
                  </Link>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="w-full h-12 rounded-2xl bg-zinc-900 text-white font-semibold tracking-wide hover:bg-black transition shadow-[0_10px_25px_rgba(0,0,0,0.18)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Add to cart
                  </button>
                )}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
                  <p className="text-xs font-semibold text-zinc-900">
                    Delivery
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1">1-3 days</p>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
                  <p className="text-xs font-semibold text-zinc-900">Returns</p>
                  <p className="text-[11px] text-zinc-500 mt-1">14 days</p>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-3">
                  <p className="text-xs font-semibold text-zinc-900">Support</p>
                  <p className="text-[11px] text-zinc-500 mt-1">24/7</p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Tip: If you want a more oversized fit — choose one size up.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
