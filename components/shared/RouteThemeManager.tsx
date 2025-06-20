"use client";

import type React from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export const RouteThemeManager: React.FC = () => {
  const { setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    // Определяем тему на основе пути
    if (pathname === "/") {
      setTheme("light");
    } else if (pathname.startsWith("/catalog")) {
      setTheme("dark");
    } else if (pathname.startsWith("/about")) {
      setTheme("light");
    } else if (pathname.startsWith("/contact")) {
      setTheme("dark");
    } else {
      // Тема по умолчанию для неопределенных роутов
      setTheme("light");
    }
  }, [pathname, setTheme]);

  return null;
};
