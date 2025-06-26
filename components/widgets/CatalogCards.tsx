"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
}

export const CatalogCards: React.FC<Props> = () => {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const newHref = `/${locale}/`;

  return (
    <div className="flex flex-row justify-center gap-6 md:gap-12">
      <Link
        href={newHref + "drones"}
        className="group rounded-lg w-full md:w-[35%] aspect-[7/5] flex flex-col p-2 sm:p-4 cursor-pointer transition-all duration-500 ease-in-out overflow-hidden relative"
        style={{
          background: "radial-gradient(circle, #6B3A3A 0%, #3A1010 70%)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "radial-gradient(circle, #8B4A4A 0%, #6B3A3A 70%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "radial-gradient(circle, #6B3A3A 0%, #3A1010 70%)";
        }}
      >
        {/* Заголовок и подзаголовок */}
        <div className="relative w-full">
          {/* Сам заголовок, прижат к левому и верхнему краю */}
          <h3
            className="
        font-bold text-[2.5vw] md:text-[1.5vw] text-white absolute sm:top-2 sm:left-2 lg:top-4 lg:left-4 font-sans transition-transform duration-500 ease-in-out z-20 "
          >
            {t("drones.title")}
          </h3>

          {/* Подзаголовок, absolute, выезжает из-под заголовка */}
          <div className="absolute top-4 sm:top-8 lg:top-10 sm:left-2 lg:left-4 overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out z-10 pb-[50%]">
            <p
              className="
          text-[2vw] md:text-[1vw] text-gray-300 transform -translate-y-full group-hover:translate-y-2/3 md:group-hover:translate-y-1/2 lg:group-hover:translate-y-full transition-transform duration-500 ease-in-out"
            >
              {t.rich("drones.subtitle", {
                br: () => <br />,
              })}
            </p>
          </div>
        </div>

        {/* Image container, сдвигается вправо */}
        <div className="w-4/5 mx-auto mt-auto transform group-hover:translate-x-1/2 transition-transform duration-500 ease-in-out">
          <Image
            src="/images/P100pro.png"
            alt="Агродрон XAG"
            width={350}
            height={250}
            className="object-contain w-full h-auto"
          />
        </div>
      </Link>

      <Link
        href={newHref + "vacuums"}
        className="group rounded-lg  w-full md:w-[35%] aspect-[7/5] flex flex-col pt-2 sm:pt-4 px-2 sm:px-4 cursor-pointer transition-all duration-500 ease-in-out overflow-hidden relative"
        style={{
          background: "radial-gradient(circle, #3A4060 0%, #0F1535 70%)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "radial-gradient(circle, #4A5070 0%, #3A4060 70%)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background =
            "radial-gradient(circle, #3A4060 0%, #0F1535 70%)";
        }}
      >
        {/* Заголовок и подзаголовок */}
        <div className="relative w-full">
          {/* Сам заголовок, прижат к левому и верхнему краю */}
          <h3
            className="
        font-bold text-[2.5vw] md:text-[1.5vw] text-white absolute sm:top-2 sm:left-2 lg:top-4 lg:left-4 font-sans transition-transform duration-500 ease-in-out z-20 "
          >
            {t("vacuums.title")}
          </h3>

          {/* Подзаголовок, absolute, выезжает из-под заголовка */}
          <div className="absolute top-2 sm:top-6 lg:top-10 sm:left-2 lg:left-4 overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out z-10 pb-[50%]">
            <p
              className="
          text-[2vw] md:text-[1vw] text-gray-300 transform -translate-y-full group-hover:translate-y-2/3 md:group-hover:translate-y-1/2 lg:group-hover:translate-y-full transition-transform duration-500 ease-in-out"
            >
              {t.rich("vacuums.subtitle", {
                br1: () => <br />,
                br2: () => <br className="md:hidden" />,
              })}
            </p>
          </div>
        </div>

        {/* Image container, сдвигается вправо */}
        <div className="flex-none h-[70%] mx-auto mt-auto transform group-hover:translate-x-2/3 transition-transform duration-500 ease-in-out">
          <Image
            src="/images/Scrubber-50-min.png"
            alt="Агродрон XAG"
            width={350}
            height={250}
            fill={false}
            className="object-contain w-auto h-full"
          />
        </div>
      </Link>
    </div>
  );
};
