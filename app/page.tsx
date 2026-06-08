import { Hero } from "@/widgets/Hero";
import { Collections } from "@/widgets/Collections";
import { PopularCollections } from "@/widgets/PopularCollections";
import { Privacy } from "@/widgets/Privacy";

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
