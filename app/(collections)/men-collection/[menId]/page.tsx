import { menCollection } from "@/data/collections";
import { ProductDetails } from "@/widgets/ProductDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface MenDetailsPageProps {
  params: Promise<{ menId: string }>;
}

export async function generateMetadata({
  params,
}: MenDetailsPageProps): Promise<Metadata> {
  const { menId } = await params;
  const product = menCollection.find((col) => col.id == Number(menId));
  if (!product)
    return {
      title: "Product not found",
    };
  return {
    title: product.title,
  };
}

export default async function MenDetailsPage({ params }: MenDetailsPageProps) {
  const { menId } = await params;

  const product = menCollection.find((col) => col.id == Number(menId));

  if (!product) return notFound();

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
