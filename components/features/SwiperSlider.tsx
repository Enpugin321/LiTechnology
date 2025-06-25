"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSliderProps {
  images: string[];
  alt: string;
}

export const SwiperSlider: React.FC<ProductSliderProps> = ({ images, alt }) => {
  return (
    <div className="w-full">
      <div className="relative flex justify-center aspect-[2/1] bg-gray-100">
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
            spaceBetween={50}
            slidesPerView={1}
            effect="slide" // можно заменить на fade/creative/custom
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full transition-transform duration-700 ease-in-out">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${alt} ${index + 1}`}
                    fill
                    className="object-contain sm:p-8"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
