"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Battery,
  Droplet,
  MoveHorizontal,
  Clock3,
  Trash2,
  Ruler,
} from "lucide-react";
import { cn } from "@/components/shared/lib/utils";

interface ProductCardProps {
  id: number;
  category: "drones" | "vacuums";
  name: string;
  price: string;
  image: string;
  batteryCapacity?: string; // дроны: время полёта | пылесосы: ёмкость АКБ
  volume?: string; // дроны: объём бака | пылесосы: объём пылесборника
  maxDistance?: string; // дроны: высота/дальность | пылесосы: ширина уборки
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  category,
  name,
  price,
  image,
  batteryCapacity = "—",
  volume = "—",
  maxDistance = "—",
  className,
}) => {
  return (
    <Link
      href={`/catalog/${category}/${id}`}
      className={cn(
        "bg-white rounded-2xl h-full p-4 sm:p-6 lg:p-8 border border-gray-200 transition-all duration-300 group hover:shadow-lg hover:border-blue-400 flex flex-col",
        className
      )}
    >
      {/* Название и цена */}
      <div className="text-center mb-3 sm:mb-4">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 text-black group-hover:text-blue-500 line-clamp-2">
          {name}
        </h3>
        <p className="text-sm lg:text-base text-gray-800 group-hover:text-blue-400">
          {price}
        </p>
      </div>

      {/* Изображение */}
      <div className="flex justify-center mb-4 sm:mb-6 flex-1">
        <div className="relative w-full max-w-[240px] lg:max-w-[280px] aspect-[4/3]">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Три ключевых аспекта */}
      <div className="flex mx-auto max-w-[150px] lg:max-w-[180px] w-full justify-between text-center group-hover:hidden mt-auto">
        {category === "drones" ? (
          <>
            {/* Время полёта */}
            <div className="flex flex-col items-center">
              <Battery className={iconClass} />
              <span className={textClass}>{batteryCapacity}</span>
            </div>
            {/* Объём бака */}
            <div className="flex flex-col items-center">
              <Droplet className={iconClass} />
              <span className={textClass}>{volume}</span>
            </div>
            {/* Макс. высота/дальность */}
            <div className="flex flex-col items-center">
              <MoveHorizontal className={iconClass} />
              <span className={textClass}>{maxDistance}</span>
            </div>
          </>
        ) : (
          <>
            {/* Время работы */}
            <div className="flex flex-col items-center">
              <Clock3 className={iconClass} />
              <span className={textClass}>{batteryCapacity}</span>
            </div>
            {/* Пылесборник */}
            <div className="flex flex-col items-center">
              <Trash2 className={iconClass} />
              <span className={textClass}>{volume}</span>
            </div>
            {/* Ширина уборки */}
            <div className="flex flex-col items-center">
              <Ruler className={iconClass} />
              <span className={textClass}>{maxDistance}</span>
            </div>
          </>
        )}
      </div>

      {/* Кнопка "Подробнее" */}
      <div className="text-center h-10 hidden group-hover:block mt-auto">
        <div className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 sm:px-4 lg:px-6 rounded-lg text-xs sm:text-sm lg:text-base font-semibold transition-colors">
          Подробнее
        </div>
      </div>
    </Link>
  );
};
const iconClass = "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-700 mb-1";
const textClass = "text-xs lg:text-sm text-gray-700";
