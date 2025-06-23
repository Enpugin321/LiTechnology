"use client";

import React from "react";
import { navigateToSection } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const NavigationFooterMenu: React.FC<{ locale: "ru" | "kz" }> = ({
  locale,
}) => {
  const t = useTranslations("nav");

  const handleScrollToSection = (sectionId: string) => {
    navigateToSection(sectionId, router, pathname);
  };
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">
        {t("navigation")}
      </h3>
      <nav className="space-y-3">
        <Link
          href={`/${locale}/vacuums`}
          className="block text-gray-700 hover:text-black transition-colors"
        >
          {t("vacuums")}
        </Link>
        <Link
          href={`/${locale}/drones`}
          className="block text-gray-700 hover:text-black transition-colors"
        >
          {t("drones")}
        </Link>
        <button
          onClick={() => handleScrollToSection("about-us")}
          className="block text-gray-700 hover:text-black transition-colors"
        >
          {t("about")}
        </button>
        <button
          onClick={() => handleScrollToSection("advantages")}
          className="block text-gray-700 hover:text-black transition-colors"
        >
          {t("advantages")}
        </button>
        <button
          onClick={() => handleScrollToSection("contacts")}
          className="block text-gray-700 hover:text-black transition-colors"
        >
          {t("contacts")}
        </button>
      </nav>
    </div>
  );
};
