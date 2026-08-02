import { Metadata } from "next";
import { Banner } from "@/components/Banner";
import Catalogue from "@/components/Catalogue";
import { kidsCollection } from "@/data/collections";

export const metadata: Metadata = {
  title: "Kids Collection",
};

export default function kidsCollectionPage() {
  return (
    <>
      <Banner
        title="Kids Collection"
        text="Discover curated pieces that embody heritage, craftsmanship, and quiet sophistication."
        bgClass="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://cdn-cloudflare.emporium.az/kids/one-banner.jpg')]"
      />
      <Catalogue products={kidsCollection} />
    </>
  );
}
