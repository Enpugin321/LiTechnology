import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  index: number;
  currentImage: number;
  image?: string;
  alt: string;
  video?: string;
}

export const SliderItem: React.FC<Props> = ({
  index,
  currentImage,
  image,
  alt,
  video,
}) => {
  return (
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
      {video && currentImage === index ? (
        <div className="w-full h-full flex items-center justify-center">
          <iframe
            src={video}
            title="YouTube video"
            allowFullScreen
            className="w-3/4 h-3/4"
          />
        </div>
      ) : (
        <Image
          src={image || "/placeholder.svg"}
          alt={`${alt} ${index + 1}`}
          fill
          className="object-contain sm:p-8"
          priority={index === 0}
        />
      )}
    </div>
  );
};
