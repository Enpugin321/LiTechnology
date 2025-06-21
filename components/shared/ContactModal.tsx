"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/shared/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/shared/ui/dialog";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { ArrowRight, Phone, User } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
  productPrice?: string;
  title?: string;
  description?: string;
}

const preventScroll = (e: TouchEvent) => {
  // Проверяем, происходит ли событие внутри popup
  const target = e.target as Element;
  const dialogContent = document.querySelector('[role="dialog"]');

  if (dialogContent && dialogContent.contains(target)) {
    // Разрешаем скролл внутри popup
    return;
  }

  // Блокируем скролл вне popup
  e.preventDefault();
};

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onOpenChange,
  productName,
  productPrice,
  title = "Свяжитесь с нами",
  description = "Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время",
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    if (isOpen) {
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

    // Cleanup функция для случая размонтирования компонента
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      let text = "";

      if (productName && productPrice) {
        text = `Новый заказ:
Товар: ${productName}
Цена: ${productPrice}
Имя: ${formData.name}
Телефон: ${formData.phone}`;
      } else {
        text = `Новая заявка на связь:
Имя: ${formData.name}
Телефон: ${formData.phone}`;
      }

      const res = await fetch("https://vencera.tech/letech/v1/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error("Ошибка при отправке запроса");

      setSuccess(true);
      setTimeout(() => {
        onOpenChange(false);
        setSuccess(false);
        setFormData({ name: "", phone: "" });
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Не удалось отправить заявку. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-none w-full h-full m-0 rounded-none border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="flex flex-col items-center justify-start min-h-full p-6 py-12">
            {/* Main Content */}
            <div className="w-full max-w-md space-y-8">
              {/* Header */}
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primaryCustom/10 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primaryCustom" />
                </div>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-center">
                    {title}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground text-center">
                  {description}
                </p>
              </div>

              {/* Product Info - показываем только если есть данные о товаре */}
              {productName && productPrice && (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                    Выбранный товар:
                  </h3>
                  <p className="font-medium">{productName}</p>
                  <p className="text-primaryCustom font-bold text-lg">
                    {productPrice}
                  </p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-name"
                      className="text-sm font-medium"
                    >
                      Ваше имя
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact-name"
                        type="text"
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="pl-10 h-12 bg-white dark:bg-slate-800"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-phone"
                      className="text-sm font-medium"
                    >
                      Ваш контактный телефон
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="pl-10 h-12 bg-white dark:bg-slate-800"
                        disabled={loading}
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading || success}
                  className="w-full h-12 text-lg font-medium bg-primaryCustom hover:bg-primaryCustom/90 transition-all duration-200"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Отправка...
                    </div>
                  ) : success ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-1 bg-white rounded-full transform rotate-45" />
                      </div>
                      Отправлено!
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-white">
                      {productName ? "Отправить заказ" : "Отправить заявку"}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Footer */}
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
