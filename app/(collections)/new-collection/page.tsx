import { Banner } from "@/components/Banner";
import { Metadata } from "next";
import {
  menCollection,
  sunglassesCollection,
  womenCollection,
} from "@/data/collections";
import { NewCollection } from "@/widgets/NewCollection";

export const metadata: Metadata = {
  title: "New Collection",
};

export default function NewCollectionPage() {
  return (
    <>
      <Banner
        title="New Collection"
        text="A new collection shaped by modern elegance — contemporary pieces for men and women, crafted with attention to detail and form."
        bgClass="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://images.pexels.com/photos/11739182/pexels-photo-11739182.jpeg')]"
      />
      <NewCollection title="For Men" collection={menCollection} />
      <NewCollection title="For Women" collection={womenCollection} />
      <NewCollection title="Sunglasses" collection={sunglassesCollection} />
    </>
  );
}
