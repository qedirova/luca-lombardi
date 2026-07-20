import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import Catalogue from "@/components/Catalogue";
import { womenCollection } from "@/data/collections";

export const metadata: Metadata = {
  title: "Women Collection",
};

export default function WomenCollectionPage() {
  return (
    <>
      <Banner
        title="Women Collection"
        text="Discover curated pieces that embody heritage, craftsmanship, and quiet sophistication."
        bgClass="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://luca-lombardi-three.vercel.app/women-collection.png')]"
      />
      <Catalogue products={womenCollection} />
    </>
  );
}
