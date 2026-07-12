"use client";
import { useAppSelector } from "@/redux/hooks";
import { Container } from "@/components/Container";
import Fuse from "fuse.js";
import { allCollections } from "@/data/collections";
import { ProductCard } from "@/widgets/ProductCard";

export function ProductList() {
  const { query } = useAppSelector((state) => state.search);

  const fuse = new Fuse(allCollections, {
    keys: ["title", "collection"],
    threshold: 0.4,
  });

  const filteredProducts = query
    ? fuse.search(query).map((r) => r.item)
    : allCollections;

  if (!filteredProducts.length)
    return (
      <div className="py-30">
        <h1 className="text-2xl font-semibold mb-8 text-center">
          No products found for{" "}
          <span className="text-gray-900 font-bold">"{query}"</span>
        </h1>
      </div>
    );

  return (
    <Container className="py-15">
      {query && (
        <h1 className="text-2xl font-semibold mb-8 text-center">
          Search results for{" "}
          <span className="text-gray-900 font-bold">"{query}"</span>
        </h1>
      )}
      <div className="flex flex-wrap gap-10 justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
