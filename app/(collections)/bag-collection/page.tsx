import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import Catalogue from "@/components/Catalogue";
import { bagCollection} from "@/data/collections";

export const metadata: Metadata = {
  title: "Bag Collection",
};

export default function BagCollectionPage() {
  return (
    <>
      <Banner
        title="Bag Collection"
        text="Discover curated pieces that embody heritage, craftsmanship, and quiet sophistication."
        bgClass="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.pexels.com/photos/14099416/pexels-photo-14099416.jpeg')]"
      />
      <Catalogue products={bagCollection} />
    </>
  );
}
