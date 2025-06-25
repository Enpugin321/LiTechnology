import { HomePage } from "@/components/pages/HomePage";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata = {
  title: "LiTechnology - Главная",
  description: "Official site of LiTechnology products",
};

interface Props {
  params: Promise<{ locale: "ru" | "kz" }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  return <HomePage t={t} />;
}
