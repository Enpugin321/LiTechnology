"use client";

import { useState } from "react";
import { ProductAccordionItem } from "./ProductAccordionItem";

interface ProductAccordionProps {
  specs: Record<string, Array<{ param: string; value: string }>>;
}

export const ProductAccordion = ({ specs }: ProductAccordionProps) => {
  const [activeId, setActiveId] = useState<number | null>(1); // Первый элемент открыт по умолчанию

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  // Преобразуем данные из props в нужный формат
  const accordionData = Object.entries(specs).map(
    ([title, specifications], index) => ({
      id: index + 1,
      title,
      specifications: specifications.map((spec) => ({
        parameter: spec.param,
        value: spec.value,
      })),
    })
  );

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
