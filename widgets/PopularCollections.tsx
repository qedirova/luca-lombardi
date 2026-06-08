"use client";

import { Container } from "@/components/Container";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function PopularCollections() {
  const swiperBreakpoints = {
    300: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1341: { slidesPerView: 5 },
  };

  return (
    <div className="py-30 bg-slate-800 text-white">
      <Container className="flex flex-col text-center justify-center gap-2">
        <h1 className="text-3xl sm:text-5xl mb-4">Popular styles right now</h1>
        <p className="text-gray-200 mb-20">
          Make our most beloved looks your own.
        </p>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={32}
            slidesPerView={1}
            loop
            className="w-full"
            breakpoints={swiperBreakpoints}
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <img
                  src="/popular.jpg"
                  alt="popular"
                  className="rounded-xl w-full object-cover xl:h-100"
                />
                <div className="flex justify-between mt-4 text-sm">
                  <h3 className="font-medium">Men's Olive Green Suit</h3>
                  <span className="font-semibold">$378</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev absolute left-[-18px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
            <FaAngleLeft size={30} />
          </button>

          <button className="custom-next absolute right-[-18px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
            <FaAngleRight size={30} />
          </button>
        </div>
      </Container>
    </div>
  );
}
