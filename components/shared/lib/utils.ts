import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition =
      element.offsetTop - window.innerHeight / 2 + element.offsetHeight / 2;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

export const navigateToSection = (
  sectionId: string,
  router: any,
  currentPath: string
) => {
  // Если мы на главной странице, просто скроллим
  if (currentPath === "/") {
    scrollToSection(sectionId);
  } else {
    // Если на другой странице, переходим на главную с якорем
    router.push(`/#${sectionId}`);
  }
};
