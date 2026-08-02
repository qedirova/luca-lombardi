"use client";
import { BiMinus, BiPlus } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  addToCart,
  CartItem,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { useAppDispatch } from "@/redux/hooks";

interface CartRowProps {
  item: CartItem;
}

export default function CartRow({ item }: CartRowProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-4 h-auto rounded-3xl border border-black/10 bg-white p-4 shadow-sm sm:gap-5 sm:p-5">
      <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:h-32 sm:w-28">
        <Image
          fill
          src={item.image}
          alt={item.title}
          sizes="120px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <Link href={`${item.collection}/${item.id}`}>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">{item.collection}</p>

            <span className="mt-2 inline-flex items-center rounded-full border border-black/10 bg-black/5 px-2.5 py-0.5 text-xs font-medium text-gray-700">
              Size: {item.size}
            </span>
          </Link>

          <div className="text-right">
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-lg font-semibold text-gray-900">{item.price}$</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-2 py-2">
            <button
              onClick={() => dispatch(decreaseQuantity(item))}
              className="grid cursor-pointer h-9 w-9 place-items-center rounded-xl hover:bg-black/5 active:scale-[0.98] transition"
            >
              <BiMinus size={18} />
            </button>
            <span className="min-w-[36px] text-center text-sm font-semibold text-gray-900">
              {item.quantity}
            </span>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="grid cursor-pointer h-9 w-9 place-items-center rounded-xl hover:bg-black/5 active:scale-[0.98] transition"
            >
              <BiPlus size={18} />
            </button>
          </div>
          <button
            onClick={() => dispatch(removeFromCart(item))}
            className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-black/5 transition"
          >
            <BsTrash3 size={18} /> Remove
          </button>
        </div>
      </div>
    </div>
  );
}
