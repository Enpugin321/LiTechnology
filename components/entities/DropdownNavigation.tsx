"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useClickAway } from "react-use";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigateToSection } from "@/lib/utils";
import Link from "next/link";

export function DropdownNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleDropdown = (menuName: string) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const handleScrollToSection = (sectionId: string) => {
    navigateToSection(sectionId, router, pathname);
    closeDropdown();
  };

  useClickAway(dropdownRef, () => {
    closeDropdown();
  });

  return (
    <div ref={dropdownRef}>
      <nav>
        <ul className="flex items-center space-x-8 py-3 text-xs xl:text-base">
          <li className="relative">
            <button
              onClick={() => toggleDropdown("catalog")}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
            >
              <span>Каталог</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform mt-0.5",
                  openDropdown === "catalog" && "rotate-180"
                )}
              />
            </button>

            {openDropdown === "catalog" && (
              <div className="absolute top-full mt-3 -left-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg z-50 min-w-[150px] border border-gray-200 dark:border-neutral-700">
                <ul className="py-2">
                  <li className="hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors">
                    <Link
                      href="/catalog/drones"
                      className="block px-4 py-2 text-black dark:text-white border-b border-gray-200 dark:border-neutral-700"
                      onClick={closeDropdown}
                    >
                      Дроны
                    </Link>
                  </li>
                  <li className="hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors">
                    <Link
                      href="/catalog/vacuums"
                      className="block px-4 py-2 text-black dark:text-white"
                      onClick={closeDropdown}
                    >
                      Пылесосы
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("about-us")}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
            >
              О нас
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("advantages")}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
            >
              Преимущества
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScrollToSection("contacts")}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
            >
              Контакты
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
