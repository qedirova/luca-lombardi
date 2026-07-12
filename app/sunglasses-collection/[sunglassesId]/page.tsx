import { menCollection, sunglassesCollection } from "@/data/collections";
import { ProductDetails } from "@/widgets/ProductDetails";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface SunglassesDetailsPageProps {
  params: Promise<{ sunglassesId: string }>;
}

export async function generateMetadata({
  params,
}: SunglassesDetailsPageProps): Promise<Metadata> {
  const { sunglassesId } = await params;
  const product = sunglassesCollection.find(
    (col) => col.id == Number(sunglassesId),
  );
  if (!product)
    return {
      title: "Product not found",
    };
  return {
    title: product.title,
  };
}

export default async function SunglassesDetailsPage({
  params,
}: SunglassesDetailsPageProps) {
  const { sunglassesId } = await params;

  const product = sunglassesCollection.find(
    (col) => col.id == Number(sunglassesId),
  );

  if (!product) return notFound();

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
}
