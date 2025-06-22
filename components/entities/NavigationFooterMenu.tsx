"use client";

import React from "react";
import { navigateToSection } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export const NavigationFooterMenu: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    navigateToSection(sectionId, router, pathname);
  };
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">НАВИГАЦИЯ</h3>
      <nav className="space-y-3">
        <Link
          href="/catalog/vacuums"
          className="block text-gray-700 hover:text-black transition-colors"
        >
          Пылесосы
        </Link>
        <Link
          href="/catalog/drones"
          className="block text-gray-700 hover:text-black transition-colors"
        >
          Дроны
        </Link>
        <button
          onClick={() => handleScrollToSection("about-us")}
          className="block text-gray-700 hover:text-black transition-colors"
        >
          О нас
        </button>
        <button
          onClick={() => handleScrollToSection("advantages")}
          className="block text-gray-700 hover:text-black transition-colors"
        >
          Почему мы?
        </button>
        <button
          onClick={() => handleScrollToSection("contacts")}
          className="block text-gray-700 hover:text-black transition-colors"
        >
          Контактная информация
        </button>
      </nav>
    </div>
  );
};
