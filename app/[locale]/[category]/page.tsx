import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared";
import { CatalogContent } from "./catalog-content";
import { CatalogSkeleton } from "./catalog-skeleton";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: "ru" | "kz"; category: "drones" | "vacuums" }>;
}

export const metadata = {
  title: "LiTechnology - Каталог",
  description: "Official site of LiTechnology products",
};

export default async function CatalogPage({ params }: Props) {
  const { locale, category } = await params;
  const t = await getTranslations("catalogPage");

  // Проверяем валидность категории
  if (!["drones", "vacuums"].includes(category)) {
    return notFound();
  }

  const title = t(`${category}.title`);
  const description = t(`${category}.description`);

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-[20vh] pb-12">
        <Container className="px-6">
          {/* Статический контент - рендерится сразу */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">{title}</h1>
            <p className="text-lg text-gray-900">{description}</p>
          </div>

          {/* Динамический контент с Suspense boundary */}
          <Suspense fallback={<CatalogSkeleton />}>
            <CatalogContent locale={locale} category={category} />
          </Suspense>
        </Container>
      </main>
    </div>
  );
}

// Генерируем статические параметры для лучшей производительности
export async function generateStaticParams() {
  return [{ category: "drones" }, { category: "vacuums" }];
}
