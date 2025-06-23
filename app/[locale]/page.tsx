import { HomePage } from "@/components/pages/HomePage";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export type TFunction = ReturnType<typeof useTranslations>;

export const metadata = {
  title: "LiTechnology - Главная",
  description: "Official site of LiTechnology products",
};

export default async function Home() {
  const t = await getTranslations("HomePage");

  return <HomePage t={t} />;
}
