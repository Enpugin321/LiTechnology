"use client";

import React from "react";
import { MapPin, Phone, MessageCircle, Send, Instagram } from "lucide-react";
import Map from "@/components/features/Map";
import { useTranslations } from "next-intl";

// Компонент с инициализацией карты
export const ContactMap = () => {
  const t = useTranslations("HomePage.contact");

  const handleLinkClick = (Link: string) => {
    if (typeof window !== "undefined") {
      window.open(Link, "_blank");
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-16">
        {/* Левая часть: заголовок + контакты */}
        <div className="w-fit flex flex-col gap-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold font-montserrat leading-snug sm:leading-tight text-center lg:text-left">
            {t.rich("title", {
              span: (chunks) => (
                <span className="text-primaryCustom">{chunks}</span>
              ),
            })}
          </h2>

          <div className="space-y-3 w-full">
            <button className="bg-[#0E3247] w-full text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 px-3 sm:px-4 rounded flex items-center gap-2 sm:gap-3 hover:bg-[#0e3151]/90 transition-colors">
              <MapPin className="w-5 h-5 shrink-0" />
              <span>{t("address")}</span>
            </button>

            <button className="bg-[#0E3247] w-full text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 px-3 sm:px-4 rounded flex items-center gap-2 sm:gap-3 hover:bg-[#0e3151]/90 transition-colors">
              <Phone className="w-5 h-5 shrink-0" />
              <span>{t("phone")}</span>
            </button>

            <button
              onClick={() => handleLinkClick("https://wa.me/77001307888")}
              className="bg-[#0E3247] w-full text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 px-3 sm:px-4 rounded flex items-center gap-2 sm:gap-3 hover:bg-[#0e3151]/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>{t("whatsapp")}</span>
            </button>

            <button
              onClick={() =>
                handleLinkClick("https://t.me/your_telegram_username")
              }
              className="bg-[#0E3247] w-full text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 px-3 sm:px-4 rounded flex items-center gap-2 sm:gap-3 hover:bg-[#0e3151]/90 transition-colors"
            >
              <Send className="w-5 h-5 shrink-0" />
              <span>{t("telegram")}</span>
            </button>

            <button
              onClick={() =>
                handleLinkClick(
                  "https://www.instagram.com/li.technology?igsh=MWEyc2hmYnB5aWhoMQ=="
                )
              }
              className="bg-[#0E3247] w-full text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 px-3 sm:px-4 rounded flex items-center gap-2 sm:gap-3 hover:bg-[#0e3151]/90 transition-colors"
            >
              <Instagram className="w-5 h-5 shrink-0" />
              <span>{t("instagram")}</span>
            </button>
          </div>
        </div>

        {/* Правая часть: карта */}
        <div className="w-4/5 lg:w-1/2 aspect-[4/3] max-h-[500px]">
          <Map />
        </div>
      </div>
    </section>
  );
};
