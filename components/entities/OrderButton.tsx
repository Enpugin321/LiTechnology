"use client";

import React, { useState } from "react";
import { Button } from "@/components/shared/ui/Button";
import { ArrowRight } from "lucide-react";

interface OrderButtonProps {
  productName: string;
  productPrice: string;
}

export const OrderButton: React.FC<OrderButtonProps> = ({
  productName,
  productPrice,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOrder = async () => {
    setLoading(true);
    setSuccess(false);
    try {
      const text = `Пользователь хочет ${productName} за ${productPrice}, завтра`;
      const res = await fetch("https://vencera.tech/letech/v1/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("Ошибка при отправке запроса");
      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Не удалось отправить заказ. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleOrder}
      disabled={loading}
      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center gap-2"
    >
      {loading ? "Отправка..." : success ? "Отправлено" : "Заказать"}
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
};
