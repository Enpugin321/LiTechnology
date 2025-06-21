import { ProductSlider } from "@/components/features/ProductSlider";
import { ProductAccordion } from "@/components/entities/ProductAccordion";
import { OrderButton } from "@/components/entities/OrderButton";
import { products } from "@/components/shared/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ category: "drones" | "vacuums"; productId: number }>;
}

export const metadata = {
  title: "LiTechnology - Страница товара",
  description: "Official site of LiTechnology products",
};

export default async function DronePage({ params }: ProductPageProps) {
  const { category, productId } = await params;

  const droneId = productId;
  const productData = products[category][droneId];

  if (!productData) {
    console.log(`Дрон с ID ${droneId} не найден`);
    notFound();
  }

  return (
    <div className="min-h-screen h-fit bg-gray-100">
      <div className="fixed bottom-4 left-4 z-50">
        <Link
          href={`/catalog/${category}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] w-full">
        {/* Левая колонка - Изображения */}
        <div className="bg-gray-100 w-full pt-32 pb-4">
          <div className="mb-12 px-8 sm:px-8 xl:px-32">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {productData.name}
            </h1>
            <p className="text-3xl font-semibold text-blue-500">
              {productData.price}
            </p>
          </div>

          <div className="w-full mx-auto flex flex-col justify-center">
            <ProductSlider images={productData.images} alt={productData.name} />
          </div>
        </div>

        {/* Правая колонка - Характеристики */}
        <div className="bg-white w-full h-full flex flex-col pt-24 lg:justify-self-end">
          {/* Аккордеон  */}
          <div className="flex-1">
            <ProductAccordion
              specs={Object.fromEntries(
                Object.entries(productData.specs).filter(([, value]) =>
                  Array.isArray(value)
                )
              )}
            />
          </div>

          {/* Блок заказа */}
          <div className="p-8 pt-6 border-t border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {productData.name}
                </h3>
                <p className="text-sm text-gray-600 mb-5 sm:mb-0">
                  {category === "drones" ? "Дрон" : "Пылесос"}
                </p>
              </div>

              <OrderButton
                title="Заказать"
                className="px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105"
                arrow={true}
                productName={productData.name}
                productPrice={productData.price}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.drones.map((drone) => ({
    id: drone.id.toString(),
  }));
}
