import { Product } from "@/types/catalogue";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/${product.collection}/${product.id}`}
      className="w-80 flex flex-col items-center justify-center text-center gap-4 relative"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-100 object-cover rounded-xl w-full shadow-2xl"
      />
      <div className="flex justify-between w-full px-2">
        {product.isNew && (
          <span className="absolute top-3 left-3 uppercase bg-orange-600 px-3 py-1 rounded-full font-bold text-sm text-white ">
            New
          </span>
        )}
        <h3>{product.title}</h3>
        <p className="text-sm">{product.price}$</p>
      </div>
    </Link>
  );
}
