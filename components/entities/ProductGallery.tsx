"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/components/shared/lib/utils";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
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

  return (
    <div className="space-y-4">
      {/* Основное изображение */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-contain p-8"
        />

        {/* Навигационные стрелки */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-gray-100 hover:bg-white"
          onClick={prevImage}
        >
          <MoveLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-gray-100 hover:bg-white"
          onClick={nextImage}
        >
          <MoveRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Миниатюры */}
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-square w-16 h-16 bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors",
              currentImage === index
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300"
            )}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
