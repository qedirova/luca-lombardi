import { Product } from "@/types/catalogue";
import Link from "next/link";

interface BreadCrumbProps {
  product: Product;
}

export function BreadCrumb({ product }: BreadCrumbProps) {
  return (
    <div className="text-sm text-zinc-500">
      <Link href={"/"} className="hover:text-zinc-900 ">
        Home
      </Link>
      <span className="mx-2 text-zinc-300">/</span>
      <Link
        href={"/" + product.collection}
        className="hover:text-zinc-900  capitalize"
      >
        {product.collection}
      </Link>
      <span className="mx-2 text-zinc-300">/</span>
      <span className="text-zinc-900 font-medium ">{product.title}</span>
    </div>
  );
}
