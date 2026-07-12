"use client";
import { Container } from "@/components/Container";
import { womenCollection } from "@/data/collections";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "./ProductCard";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Product } from "@/types/catalogue";

interface NewCollectionProps {
  title: string;
  collection: Product[];
}

export function NewCollection({ title, collection }: NewCollectionProps) {
  const newCollection = collection.filter((collection) => collection.isNew);

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  };
  return (
    <Container className="w-full min-w-0 py-12 sm:py-14 lg:py-20">
      <h3 className="mb-8 text-2xl font-semibold sm:mb-10">{title}</h3>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full min-w-0 new-swiper"
        slidesPerView={1}
        spaceBetween={12}
        breakpoints={breakpoints}
        loop
      >
        {newCollection.map((collection) => (
          <SwiperSlide key={collection.id}>
            <ProductCard product={collection} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
