import { ProductSlider } from "@/components/features/ProductSlider";
import { ProductAccordion } from "@/components/entities/ProductAccordion";
import { OrderButton } from "@/components/entities/OrderButton";
import { products } from "@/components/shared/data/products";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ category: "drones" | "vacuums"; productId: number }>;
}

export default async function DronePage({ params }: ProductPageProps) {
  const { category, productId } = await params;

  const droneId = productId;
  const productData = products[category][droneId];

  if (!productData) {
    console.log(`Дрон с ID ${droneId} не найден`);
    notFound();
  }

  console.log(`Найден дрон: ${productData.name}`);

  return (
    <div className="min-h-screen h-fit bg-gray-100">
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
                <p className="text-sm text-gray-600">Дрон</p>
              </div>

              <OrderButton
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

// Генерируем статические параметры для всех дронов
export async function generateStaticParams() {
  return products.drones.map((drone) => ({
    id: drone.id.toString(),
  }));
}
