import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import Catalogue from "@/components/Catalogue";
import { menCollection } from "@/data/collections";

export const metadata: Metadata = {
  title: "Men Collection",
};

export default function MenCollectionPage() {
  return (
    <>
      <Banner
        title="Men Collection"
        text="Discover curated pieces that embody heritage, craftsmanship, and quiet sophistication."
        bgClass="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://luca-lombardi-three.vercel.app/men-collection.png')]"
      />
      <Catalogue products={menCollection} />
    </>
  );
}
