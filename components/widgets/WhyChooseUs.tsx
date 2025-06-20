import type React from "react";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, image }) => {
  return (
    <div className="bg-white aspect-square rounded-lg border border-[#868686] p-3 sm:p-4 lg:p-6 flex flex-col justify-center items-center h-full">
      <div className="w-3/5 aspect-square relative flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex items-end">
        <p className="text-center text-[10px] sm:text-sm lg:text-base font-montserrat font-normal text-gray-700 w-full leading-tight h-[3rem] sm:h-[3.5rem] flex items-center justify-center line-clamp-3 sm:line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
};

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Официальное дилерство XAG и Caulisium",
      image: "/images/partners.png",
    },
    {
      title: "Собственные склад, офис и сервисный центр в Алматы",
      image: "/images/warehouse.png",
    },
    {
      title: "Быстрая доставка по всему Казахстану",
      image: "/images/delivery.png",
    },
  ];

  return (
    <section className="bg-white mx-auto flex flex-col gap-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold font-montserrat leading-snug sm:leading-tight text-center">
        Почему выбирают <span className="text-primary">нас</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const isThird = index === 2;
          return (
            <div
              key={index}
              className={
                isThird ? "col-span-2 flex justify-center md:col-span-1" : ""
              }
            >
              <div
                className={
                  isThird
                    ? "w-full max-w-[calc((100%-1.5rem)/2)] md:max-w-none"
                    : "w-full"
                }
              >
                <FeatureCard image={feature.image} title={feature.title} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
