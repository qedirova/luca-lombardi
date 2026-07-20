import { womenCollection } from "@/data/collections";
import { ProductDetails } from "@/widgets/ProductDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface WomenDetailsPageProps {
  params: Promise<{ womenId: string }>;
}

export async function generateMetadata({
  params,
}: WomenDetailsPageProps): Promise<Metadata> {
  const { womenId } = await params;
  const product = womenCollection.find((col) => col.id == Number(womenId));
  if (!product)
    return {
      title: "Product not found",
    };
  return {
    title: product.title,
  };
}

export default async function WomenDetailsPage({
  params,
}: WomenDetailsPageProps) {
  const { womenId } = await params;

  const product = womenCollection.find((col) => col.id == Number(womenId));

  if (!product) return notFound();

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
