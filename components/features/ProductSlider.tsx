"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import { Button } from "@/components/shared/ui/Button";
import { cn } from "@/lib/utils";
import { SliderItem } from "@/components/entities/SliderItem";

interface ProductSliderProps {
  images: string[];
  alt: string;
}

function getYouTubeThumbnail(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

export const ProductSlider: React.FC<ProductSliderProps> = ({
  images,
  alt,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  // сколько миниатюр показываем в линию в зависимости от ширины экрана
  const [visibleCount, setVisibleCount] = useState(3);
  // индекс первой видимой миниатюры
  const [thumbStart, setThumbStart] = useState(0);

  // Обновляем visibleCount при изменении размера окна
  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setVisibleCount(3);
      } else if (w < 1024) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  // Функция для корректировки thumbStart, чтобы currentImage был виден
  const adjustThumbStartForCurrent = useCallback(() => {
    // если текущая миниатюра слева от окна
    if (currentImage < thumbStart) {
      setThumbStart(currentImage);
    }
    // если текущая миниатюра справа за окном
    else if (currentImage >= thumbStart + visibleCount) {
      setThumbStart(currentImage - visibleCount + 1);
    }
    // иначе ничего не делаем
  }, [currentImage, thumbStart, visibleCount]);

  // При смене currentImage корректируем начало окна
  useEffect(() => {
    adjustThumbStartForCurrent();
  }, [currentImage, visibleCount, adjustThumbStartForCurrent]);

  // При смене visibleCount (например, ресайз) нужно убедиться, что thumbStart в допустимом диапазоне
  useEffect(() => {
    const maxStart = Math.max(0, images.length - visibleCount);
    if (thumbStart > maxStart) {
      // если начало за пределами после уменьшения visibleCount
      setThumbStart(maxStart);
    }
    // Также можно проверить текущее изображение, но это уже в adjustThumbStartForCurrent
  }, [visibleCount, images.length, thumbStart]);

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
          {images.map((image, index) =>
            image.includes("youtube") ? (
              <SliderItem
                key={"slideritem" + index}
                index={index}
                currentImage={currentImage}
                video={image}
                alt={alt}
              />
            ) : (
              <SliderItem
                key={"slideritem" + index}
                index={index}
                currentImage={currentImage}
                image={image}
                alt={alt}
              />
            )
          )}
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
      <div className="flex gap-3 justify-center items-center">
        {images
          .slice(thumbStart, thumbStart + visibleCount)
          .map((image, idx) => {
            const realIndex = thumbStart + idx;
            const isVideo = image.includes("youtube");
            const thumbnail = isVideo ? getYouTubeThumbnail(image) : image;
            const btnClasses = cn(
              "relative overflow-hidden transition-all duration-300 flex-shrink-0",
              currentImage === realIndex ? "" : "opacity-60 hover:opacity-100"
            );
            const sizeClass = isVideo ? "w-24 h-14" : "w-20 h-20";
            return (
              <button
                key={realIndex}
                className={cn(btnClasses, sizeClass, "mx-1")}
                onClick={() => goToImage(realIndex)}
              >
                <Image
                  src={thumbnail || "/placeholder.svg"}
                  alt={`${alt} thumbnail ${realIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            );
          })}
      </div>
    </div>
  );
};
