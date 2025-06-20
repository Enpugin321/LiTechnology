"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/components/shared/lib/utils";
import { MultilineText } from "@/components/shared/ui/MultilineText";

type Props = {
  id: number;
  title: string;
  specifications: Array<{
    parameter: string;
    value: string;
  }>;
  isOpen: boolean;
  className?: string;
  toggleAccordion: () => void;
};

export function ProductAccordionItem(props: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (props.isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [props.isOpen]);

  return (
    <div
      className={cn(
        "px-8 border-b-4 border-gray-100 last:border-b-0",
        props.className,
        hovered && "bg-gray-50"
      )}
    >
      <button
        className="w-full flex justify-between items-center py-6 px-0 transition-colors text-left"
        onClick={props.toggleAccordion}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Заголовок */}
        <div className="flex-1">
          <span className="text-lg font-medium text-gray-900">
            {props.title}
          </span>
        </div>

        {/* Стрелка */}
        <div className="ml-4">
          <ChevronRight
            className={cn(
              "h-5 w-5 text-gray-500 transform transition-transform duration-300",
              props.isOpen ? "rotate-90" : "rotate-0"
            )}
          />
        </div>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden w-full transition-all duration-500 ease-in-out"
        style={{
          maxHeight: `${height}px`,
          opacity: props.isOpen ? 1 : 0,
          transitionProperty: "max-height, opacity",
        }}
      >
        <div className="pb-6">
          {/* Таблица характеристик */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600 border-b border-gray-200 pb-2">
              <div>Параметр</div>
              <div>Значение</div>
            </div>

            {props.specifications.map((spec, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-4 text-sm py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="text-gray-700">{spec.parameter}</div>
                <MultilineText text={spec.value} className="text-gray-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
