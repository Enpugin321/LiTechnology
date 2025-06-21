"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
}

export const NavigationButton: React.FC<Props> = ({
  className,
  title,
  imageSrc,
  imageAlt,
  backgroundColor = "bg-slate-800",
  textColor = "text-white",
}) => {
  return (
    <div
      className={cn(
        className,
        backgroundColor,
        "rounded-lg w-full md:w-[35%] aspect-[7/5] flex flex-col items-center justify-center p-4 cursor-pointer transition-transform"
      )}
    >
      <h3
        className={cn(
          textColor,
          "font-bold text-lg md:text-xl text-center mb-4 font-sans"
        )}
      >
        {title}
      </h3>
      {/* Убрали h-full и relative, чтобы блок адаптировался под размер картинки */}
      <div className="w-4/5">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={400} // или любое подходящее значение
          height={300} // соотношение примерно 7/5 или исходное
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
};
