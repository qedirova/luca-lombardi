"use client";

import { Container } from "./Container";
import { ProductCard } from "@/widgets/ProductCard";
import { useState } from "react";
import { Product } from "@/types/catalogue";

interface CatalogueProps {
  products: Product[];
}

export default function Catalogue({ products }: CatalogueProps) {
  const [showMore, setShowMore] = useState(3);

  function handleShowMore() {
    setShowMore(showMore + 3);
  }
  function handleShowLess() {
    setShowMore(3);
  }

  return (
    <div className="py-30">
      <Container className="flex flex-wrap gap-8 justify-center">
        {products.slice(0, showMore).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Container>

      {products.length > 3 && (
        <div>
          {showMore < products.length ? (
            <button
              onClick={handleShowMore}
              className="bg-black rounded-3xl border border-transparent text-white font-medium text-lg py-3 px-8 block mx-auto mt-15 cursor-pointer xl:hover:bg-transparent xl:hover:text-black xl:hover:border-black transition-all duration-300"
            >
              Load More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="bg-black rounded-3xl border border-transparent text-white font-medium text-lg py-3 px-8 block mx-auto mt-15 cursor-pointer xl:hover:bg-transparent xl:hover:text-black xl:hover:border-black transition-all duration-300"
            >
              Load Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}
