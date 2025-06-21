import { Suspense } from "react";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared";
import { CatalogContent } from "./catalog-content";
import { CatalogSkeleton } from "./catalog-skeleton";

interface Props {
  params: Promise<{ category: "drones" | "vacuums" }>;
}

export const metadata = {
  title: "LiTechnology - Каталог",
  description: "Official site of LiTechnology products",
};

export default async function CatalogPage({ params }: Props) {
  const { category } = await params;

  // Проверяем валидность категории
  if (!["drones", "vacuums"].includes(category)) {
    return notFound();
  }

  const headings = {
    drones: {
      title: "Каталог дронов",
      description: "Мощные промышленные агродроны для посева и опрыскивания",
    },
    vacuums: {
      title: "Каталог пылесосов",
      description: "Роботы-пылесосы для дома и офиса",
    },
  } as const;

  const { title, description } = headings[category];

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
            <CatalogContent category={category} />
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
