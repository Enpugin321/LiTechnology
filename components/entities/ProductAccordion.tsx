"use client";

import { useState } from "react";
import { ProductAccordionItem } from "./ProductAccordionItem";

interface ProductAccordionProps {
  locale: "ru" | "kz";
  specs: Array<{
    label: { ru: string; kz: string };
    items: Array<{
      param: { ru: string; kz: string };
      value: { ru: string; kz: string };
    }>;
  }>;
}

export const ProductAccordion = ({ locale, specs }: ProductAccordionProps) => {
  const [activeId, setActiveId] = useState<number | null>(1); // Первый элемент открыт по умолчанию

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Преобразуем данные из props в нужный формат
  const accordionData = specs.map((section, index) => ({
    id: index + 1,
    title: section.label[locale],
    specifications: section.items.map((spec) => ({
      parameter: spec.param[locale],
      value: spec.value[locale],
    })),
  }));

  return (
    <div className="bg-white">
      {accordionData.map((item) => (
        <ProductAccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          specifications={item.specifications}
          isOpen={activeId === item.id}
          toggleAccordion={() => toggleAccordion(item.id)}
        />
      ))}
    </div>
  );
};
