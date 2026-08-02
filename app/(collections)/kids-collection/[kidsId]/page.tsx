import { kidsCollection } from "@/data/collections";
import { ProductDetails } from "@/widgets/ProductDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface KidsDetailsPageProps {
  params: Promise<{ kidsId: string }>;
}

export async function generateMetadata({
  params,
}: KidsDetailsPageProps): Promise<Metadata> {
  const { kidsId } = await params;
  const product = kidsCollection.find((col) => col.id == Number(kidsId));
  if (!product)
    return {
      title: "Product not found",
    };
  return {
    title: product.title,
  };
}

export default async function KidsDetailsPage({
  params,
}: KidsDetailsPageProps) {
  const { kidsId } = await params;

  const product = kidsCollection.find((col) => col.id == Number(kidsId));

  if (!product) return notFound();

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
