export function CatalogSkeleton() {
  const skeletonClass = "animate-pulse bg-gray-200 rounded";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg border border-gray-200 overflow-hidden"
        >
          {/* Изображение */}
          <div className={`w-full h-48 ${skeletonClass}`} />

          <div className="p-4 space-y-3">
            {/* Название товара */}
            <div className={`h-6 w-3/4 ${skeletonClass}`} />

            {/* Характеристики */}
            <div className={`h-4 w-1/2 ${skeletonClass}`} />

            {/* Цена и кнопка */}
            <div className="flex justify-between items-center">
              <div className={`h-6 w-20 ${skeletonClass}`} />
              <div className={`h-8 w-24 ${skeletonClass}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
