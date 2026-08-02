import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import Catalogue from "@/components/Catalogue";
import { sunglassesCollection } from "@/data/collections";

export const metadata: Metadata = {
  title: "Sunglasses Collection",
};

export default function SunglassesCollectionPage() {
  return (
    <>
      <Banner
        title="Sunglasses Collection"
        text="Discover curated pieces that embody heritage, craftsmanship, and quiet sophistication."
        bgClass="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.pexels.com/photos/704241/pexels-photo-704241.jpeg')]"
      />
      <Catalogue products={sunglassesCollection} />
    </>
  );
}
