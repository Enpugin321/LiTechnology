"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { DropdownNavigation, HeaderActions } from "@/components/entities";
import { useRouter, usePathname } from "next/navigation";
import { navigateToSection } from "@/components/shared/lib/utils";
import BigLogo from "@/public/images/BigLogo.svg";
import Link from "next/link";
import { cn } from "../shared/lib/utils";
import { Menu, X } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (isMobileMenuOpen) {
      // Блокируем скролл для body
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";

      // Предотвращаем touch события для мобильных устройств
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      // Восстанавливаем скролл
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";

      // Удаляем обработчик touch событий
      document.removeEventListener("touchmove", preventScroll);
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      navigateToSection(sectionId, router, pathname);
    }, 100);
  };

  return (
    <>
      <header
        className={cn(
          "flex  w-full h-8 rounded-3xl sm:px-6 transition-colors xl:h-12",
          "md:bg-white md:dark:bg-black",
          className
        )}
      >
        {/* Desktop версия */}
        <div className="hidden md:flex w-full items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/images/Logo.png"
              width={28}
              height={28}
              alt="logo"
              className="dark:invert"
            />
          </Link>

          <DropdownNavigation />

          <HeaderActions />
        </div>

        {/* Mobile версия */}
        <div className="flex md:hidden w-full items-center justify-between">
          {/* Бургер меню */}
          <button onClick={toggleMobileMenu} className="w-1/3 text-black">
            <Menu className="w-6 h-6" />
          </button>

          {/* Логотип по центру */}
          <Link href={"/"} className="flex-1 flex justify-center">
            <Image
              src={BigLogo || "/placeholder.svg"}
              width={64}
              height={20}
              alt="Li Technology"
              className="dark:invert"
            />
          </Link>

          {/* Кнопка смены языка */}
          <div className="w-1/3 flex items-end justify-end">
            <HeaderActions showContactButton={false} />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black md:hidden">
          <div className="flex flex-col h-full">
            {/* Header мобильного меню */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <Image
                src={BigLogo || "/placeholder.svg"}
                width={80}
                height={24}
                alt="Li Technology"
                className="dark:invert"
              />
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-700 dark:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Меню навигации */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-8">
                <li>
                  <Link
                    href="/"
                    className="block text-lg font-medium text-gray-900 dark:text-white py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={closeMobileMenu}
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catalog/drones"
                    className="block text-lg font-medium text-gray-900 dark:text-white py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={closeMobileMenu}
                  >
                    Дроны
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catalog/vacuums"
                    className="block text-lg font-medium text-gray-900 dark:text-white py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={closeMobileMenu}
                  >
                    Пылесосы
                  </Link>
                </li>
                <li>
                  <button
                    className="block w-full text-left text-lg font-medium text-gray-900 dark:text-white py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={() => handleScrollToSection("about-us")}
                  >
                    О нас
                  </button>
                </li>
                <li>
                  <button
                    className="block  w-full text-left text-lg font-medium text-gray-900 dark:text-white py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={() => handleScrollToSection("advantages")}
                  >
                    Преимущества
                  </button>
                </li>
                <li>
                  <button
                    className="block  w-full text-left text-lg font-medium text-gray-900 dark:text-white py-2 border-b border-gray-200 dark:border-gray-700"
                    onClick={() => handleScrollToSection("contacts")}
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
