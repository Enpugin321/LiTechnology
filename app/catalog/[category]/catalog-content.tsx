import { ProductCard } from "@/components/entities";
import { products } from "@/components/shared/data/products";
// import type { Drone } from "@/components/shared/data/types";

interface CatalogContentProps {
  category: "drones" | "vacuums";
}

export async function CatalogContent({ category }: CatalogContentProps) {
  const items = products[category];

  if (!items) {
    return <div>Товары не найдены</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {items.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          category={category}
          name={item.name}
          price={item.price}
          image={item.previewImage}
          batteryCapacity={item.batteryCapacity}
          volume={item.volume}
          maxDistance={item.maxDistance}
        />
      ))}
    </div>
  );
}
