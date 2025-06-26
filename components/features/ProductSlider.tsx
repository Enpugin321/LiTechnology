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

  // Флаг, обозначающий: пользователь вручную прокручивает миниатюры, и мы не хотим автоподстраиваться по currentImage до его явного выбора
  const [isUserScrollingThumbs, setIsUserScrollingThumbs] = useState(false);

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

  // При ресайзе корректируем thumbStart, чтобы не выйти за конец:
  useEffect(() => {
    const maxStart = Math.max(0, images.length - visibleCount);
    if (thumbStart > maxStart) {
      setThumbStart(maxStart);
    }
    // Если окно теперь может содержать currentImage, и флаг false, автоподстроим:
    // Но эффект ниже (on currentImage) сработает при изменении currentImage, а здесь currentImage не меняется.
    // Если хотим сразу подстроить по текущему после ресайза:
    if (!isUserScrollingThumbs) {
      // проверяем отдельно
      if (
        currentImage < thumbStart ||
        currentImage >= thumbStart + visibleCount
      ) {
        // подгоняем так, чтобы currentImage попал в новое окно
        const newStart = Math.min(
          Math.max(0, currentImage - visibleCount + 1),
          maxStart
        );
        setThumbStart(newStart);
      }
    }
  }, [visibleCount, images.length]); // не добавляем thumbStart в deps, чтобы не зациклить

  // Функция автоподстройки: вызывается при изменении currentImage
  const adjustThumbStartForCurrent = useCallback(() => {
    if (isUserScrollingThumbs) {
      // пользователь прокручивал миниатюры: ждем явного выбора, не подстраиваем
      return;
    }
    const maxStart = Math.max(0, images.length - visibleCount);
    if (currentImage < thumbStart) {
      setThumbStart(currentImage);
    } else if (currentImage >= thumbStart + visibleCount) {
      // сдвигаем так, чтобы current был правее окна: newStart = currentImage - visibleCount + 1
      const newStart = Math.min(currentImage - visibleCount + 1, maxStart);
      setThumbStart(newStart);
    }
  }, [
    currentImage,
    thumbStart,
    visibleCount,
    images.length,
    isUserScrollingThumbs,
  ]);

  // При смене currentImage автоподстраиваем окно (если флаг не мешает)
  useEffect(() => {
    adjustThumbStartForCurrent();
  }, [currentImage, visibleCount, adjustThumbStartForCurrent]);

  // Основная навигация слайдера
  const nextImage = () => {
    setCurrentImage((prev) => {
      const next = (prev + 1) % images.length;
      return next;
    });
    // Сбрасываем флаг, чтобы автоподстройка сработала
    setIsUserScrollingThumbs(false);
  };

  const prevImage = () => {
    setCurrentImage((prev) => {
      const next = (prev - 1 + images.length) % images.length;
      return next;
    });
    setIsUserScrollingThumbs(false);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
    // После выбора миниатюры сбрасываем флаг прокрутки, чтобы окно скорректировалось под новый currentImage
    setIsUserScrollingThumbs(false);
  };

  // Навигация миниатюр
  const prevThumbs = () => {
    setThumbStart((prev) => Math.max(0, prev - 1));
    setIsUserScrollingThumbs(true);
  };
  const nextThumbs = () => {
    const maxStart = Math.max(0, images.length - visibleCount);
    setThumbStart((prev) => Math.min(maxStart, prev + 1));
    setIsUserScrollingThumbs(true);
  };

  return (
    <div className="w-full">
      {/* Основной слайдер */}
      <div className="relative flex justify-center aspect-[2/1] bg-gray-100 overflow-hidden max-w-4xl mx-auto rounded-xl">
        <div className="relative w-full h-full">
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
        {/* Стрелки основного слайдера */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 p-0 hover:bg-gray-200 rounded-full transition"
          onClick={prevImage}
        >
          <MoveLeft className="h-6 w-6 text-gray-700" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 p-0 hover:bg-gray-200 rounded-full transition"
          onClick={nextImage}
        >
          <MoveRight className="h-6 w-6 text-gray-700" />
        </Button>
      </div>

      {/* Блок миниатюр */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {/* Стрелка влево для миниатюр */}
        {thumbStart > 0 && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-gray-200 rounded-full transition"
            onClick={prevThumbs}
          >
            <MoveLeft className="h-5 w-5 text-gray-700" />
          </Button>
        )}

        {/* Контейнер видимых миниатюр */}
        <div className="flex items-center overflow-hidden">
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

        {/* Стрелка вправо для миниатюр */}
        {thumbStart + visibleCount < images.length && (
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-gray-200 rounded-full transition"
            onClick={nextThumbs}
          >
            <MoveRight className="h-5 w-5 text-gray-700" />
          </Button>
        )}
      </div>
    </div>
  );
};
