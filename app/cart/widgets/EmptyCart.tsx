import Link from "next/link";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 max-w-xl rounded-3xl border border-black/10 bg-white text-center p-10 shadow-sm mx-auto">
      <h3 className="text-3xl font-semibold ">Cart</h3>
      <p className="text-gray-500 ">
        Your cart is empty. Let’s add something nice.
      </p>
      <Link
        href="/"
        className="mt-8 text-white bg-black rounded-2xl px-6 py-3 text-sm font-medium hover:opacity-90 transition duration-300"
      >
        Continue shopping
      </Link>
    </div>
  );
}
