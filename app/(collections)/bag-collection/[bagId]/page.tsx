import { bagCollection } from "@/data/collections";
import { ProductDetails } from "@/widgets/ProductDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface BagDetailsPageProps {
  params: Promise<{ bagId: string }>;
}

export async function generateMetadata({
  params,
}: BagDetailsPageProps): Promise<Metadata> {
  const { bagId } = await params;
  const product = bagCollection.find((col) => col.id == Number(bagId));

  if (!product)
    return {
      title: "Product not found",
    };

  return {
    title: product.title,
  };
}

export default async function BagDetailsPage({
  params,
}: BagDetailsPageProps) {
  const { bagId } = await params;

  const product = bagCollection.find((col) => col.id == Number(bagId));

  if (!product) return notFound();

  return <ProductDetails product={product} />;
}