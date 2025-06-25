import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Send, Instagram } from "lucide-react";
import BigLogo from "@/public/images/BigLogo.svg";
import { NavigationFooterMenu } from "@/components/entities/NavigationFooterMenu";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

interface FooterProps {
  locale: "ru" | "kz";
}

export const Footer = async ({ locale }: FooterProps) => {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations("footer");

  return (
    <footer className="py-12 w-full">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Левая колонка - Логотип и навигация */}
          <div className="space-y-8">
            {/* Логотип */}
            <Link href={"/"} className="">
              <Image
                src={BigLogo || "/placeholder.svg"}
                width={96}
                height={32}
                alt="Li Technology"
                className="invert"
              />
            </Link>

            {/* Навигация */}
            <NavigationFooterMenu locale={locale} />
          </div>

          {/* Правая колонка - Социальные сети */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              {t("social")}
            </h3>
            <div className="flex space-x-4">
              {/* WhatsApp */}
              <Link
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </Link>

              {/* Telegram */}
              <Link
                href="https://t.me/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Send className="w-6 h-6 text-white" />
              </Link>
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/li.technology?igsh=MWEyc2hmYnB5aWhoMQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Instagram className="w-6 h-6 text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Нижняя часть с копирайтом */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">{t("copyright")}</p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-black transition-colors"
              >
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
