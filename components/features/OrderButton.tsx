"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/shared/ui/Button";
import { ArrowRight } from "lucide-react";
import { ContactModal } from "@/components/shared/ContactModal";
import { cn } from "@/lib/utils";

interface OrderButtonProps {
  title: string;
  className?: string;
  arrow?: boolean;
  productName?: string;
  productPrice?: string;
}

export const OrderButton: React.FC<OrderButtonProps> = ({
  title,
  className,
  arrow = false,
  productName,
  productPrice,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "bg-primaryCustom hover:primaryCustom/80 text-white",
          className
        )}
      >
        {title}
        {arrow && <ArrowRight className="h-4 w-4" />}
      </Button>

      <ContactModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        productName={productName}
        productPrice={productPrice}
      />
    </>
  );
};
