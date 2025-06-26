"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { DropdownNavigation, HeaderActions } from "@/components/entities";
import { useRouter, usePathname } from "next/navigation";
import { navigateToSection } from "@/lib/utils";
import BigLogo from "@/public/images/BigLogo.svg";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { Menu, X } from "lucide-react";
import { ContactModal } from "@/components/shared/ContactModal";
import { useTranslations } from "next-intl";

interface HeaderProps {
  className?: string;
  locale: "ru" | "kz";
}

export const Header: React.FC<HeaderProps> = ({ className, locale }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const newHref = `/${locale}/`;
  const t = useTranslations("nav");

  console.log(router, pathname);

  useEffect(() => {
    const html = document.documentElement;

    if (pathname === "/ru" || pathname === "/kz") {
      html.classList.remove("dark");
      html.classList.add("light");
    } else if (pathname.includes("/drones") || pathname.includes("/vacuums")) {
      html.classList.remove("light");
      html.classList.add("dark");
    }
  }, [pathname]);

  const preventScroll = (e: TouchEvent) => {
    // Проверяем, происходит ли событие внутри модального окна
    if (dialogRef.current && dialogRef.current.contains(e.target as Node)) {
      // Если событие внутри модального окна, разрешаем скролл
      return;
    }
    // Если событие вне модального окна, блокируем скролл
    e.preventDefault();
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Сохраняем текущую позицию скролла
      const scrollY = window.scrollY;

      // Блокируем скролл для body
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      // Предотвращаем touch события только вне модального окна
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      // Восстанавливаем скролл
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      // Восстанавливаем позицию скролла
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
      }

      // Удаляем обработчик touch событий
      document.removeEventListener("touchmove", preventScroll);
    }

    // Cleanup функция для случая размонтирования компонента
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
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

  const openContactForm = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setIsContactOpen(true);
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

          <DropdownNavigation t={t} />

          <HeaderActions t={t} />
        </div>

        {/* Mobile версия */}
        <div className="flex md:hidden w-full items-center justify-between">
          {/* Бургер меню */}
          <button onClick={toggleMobileMenu} className="w-1/3 text-black">
            <Menu className="w-6 h-6" />
          </button>

          {/* Логотип по центру */}

          {/* Кнопка смены языка */}
          <div className="w-1/3 flex items-end justify-end">
            <HeaderActions t={t} showContactButton={false} />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div ref={dialogRef} className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full overflow-hidden">
            {/* Header мобильного меню */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image
                src={BigLogo || "/placeholder.svg"}
                width={80}
                height={24}
                alt="Li Technology"
                className="dark:invert"
              />
              <button onClick={closeMobileMenu} className="p-2 text-gray-700 ">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Меню навигации */}
            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-8">
                <li>
                  <Link
                    href="/"
                    className="block text-lg font-medium text-gray-900 py-2 border-b border-gray-200 "
                    onClick={closeMobileMenu}
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={newHref + "drones"}
                    className="block text-lg font-medium text-gray-900 py-2 border-b border-gray-200 "
                    onClick={closeMobileMenu}
                  >
                    {t("drones")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={newHref + "vacuums"}
                    className="block text-lg font-medium text-gray-900  py-2 border-b border-gray-200"
                    onClick={closeMobileMenu}
                  >
                    {t("vacuums")}
                  </Link>
                </li>
                <li>
                  <button
                    className="block w-full text-left text-lg font-medium text-gray-900 py-2 border-b border-gray-200 "
                    onClick={() => handleScrollToSection("about-us")}
                  >
                    {t("about")}
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left text-lg font-medium text-gray-900 py-2 border-b border-gray-200"
                    onClick={() => handleScrollToSection("advantages")}
                  >
                    {t("advantages")}
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left text-lg font-medium text-gray-900 py-2 border-b border-gray-200"
                    onClick={() => handleScrollToSection("contacts")}
                  >
                    {t("contacts")}
                  </button>
                </li>
                <li>
                  <button
                    className="block w-full text-left text-lg font-medium text-gray-900 py-2 border-b border-gray-200"
                    onClick={openContactForm}
                  >
                    {t("reachUs")}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Contact Form Popup */}
      <ContactModal isOpen={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};
