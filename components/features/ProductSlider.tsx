"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/utils";

interface ProductSliderProps {
  images: string[];
  alt: string;
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  images,
  alt,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="w-full ">
      {/* Основной слайдер */}
      <div className="relative flex justify-center aspect-[2/1] bg-gray-100 overflow-hidden">
        <div className="relative w-full h-full max-w-4xl">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out",
                index === currentImage
                  ? "opacity-100 transform translate-x-0"
                  : index < currentImage
                  ? "opacity-0 transform -translate-x-full"
                  : "opacity-0 transform translate-x-full"
              )}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${alt} ${index + 1}`}
                fill
                className="object-contain sm:p-8"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Навигационные стрелки */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 p-0"
          onClick={prevImage}
        >
          <MoveLeft className="h-6 w-6 text-gray-700" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 p-0"
          onClick={nextImage}
        >
          <MoveRight className="h-6 w-6 text-gray-700" />
        </Button>
      </div>

      {/* Миниатюры */}
      <div className="flex gap-3 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden transition-all duration-300",
              currentImage === index ? "" : "opacity-60 hover:opacity-100"
            )}
            onClick={() => goToImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
