import { Hero } from "@/widgets/Hero";
import { Collections } from "@/widgets/Collections";
import { PopularCollections } from "@/widgets/PopularCollections";
import { Privacy } from "@/widgets/Privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luca Lombardi | Timeless Luxury, Redefined",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <PopularCollections />
      <Privacy />
    </>
  );
}
