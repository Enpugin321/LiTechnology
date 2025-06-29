"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/shared/ui/Button";
import { OrderButton } from "@/components/features/OrderButton";
import { ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

interface Props {
  className?: string;
  showContactButton?: boolean;
  t: (key: string) => string;
}

export const HeaderActions: React.FC<Props> = ({
  className,
  showContactButton = true,
  t,
}) => {
  const locale = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(
    locale.toUpperCase()
  );
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "RU", label: "RU" },
    { code: "KZ", label: "KZ" },
  ];

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (language: string) => {
    const newLocale = language.toLowerCase();
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale;
    const newPath = "/" + segments.join("/");

    router.push(newPath);
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <div className={`flex items-center  ${className}`}>
      {showContactButton && (
        <OrderButton
          title={t("reachUs")}
          className="uppercase font-montserrat px-4 py-1 text-[10px] xl:py-2 xl:text-xs font-semibold bg-primaryCustom text-white rounded-3xl"
        />
      )}

      <div className="relative ml-2">
        <Button
          variant="outline"
          size="default"
          onClick={toggleLanguageDropdown}
          className="px-4 py-1 min-w-[66px] text-[10px] xl:py-2 xl:text-xs uppercase font-montserrat font-semibold bg-white border-[#868686] dark:border-black md:dark:border-white text-black/80 dark:text-black hover:bg-slate-100 rounded-3xl"
        >
          {selectedLanguage}{" "}
          <ChevronDown
            className={`w-3 h-3 ml-1 transition-transform ${
              isLanguageDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </Button>

        {/* Выпадающий список языков */}
        {isLanguageDropdownOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[60px]">
            <ul className="py-1">
              {languages.map((language) => (
                <li key={language.code}>
                  <button
                    onClick={() => selectLanguage(language.code)}
                    className={`w-full text-left px-3 py-2 text-[10px] xl:py-2 xl:text-xs font-montserrat font-semibold hover:bg-gray-100 transition-colors ${
                      selectedLanguage === language.code
                        ? "bg-gray-50 text-primaryCustom"
                        : "text-gray-700"
                    }`}
                  >
                    {language.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Overlay для закрытия выпадающего списка при клике вне его */}
      {isLanguageDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageDropdownOpen(false)}
        />
      )}
    </div>
  );
};
