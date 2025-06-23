import type React from "react";
import Image from "next/image";
import { TFunction } from "@/app/[locale]/page";

interface FeatureCardProps {
  title: string;
  image: string;
}

type Props = {
  t: TFunction;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, image }) => {
  return (
    <div
      className="bg-white aspect-square rounded-lg border border-[#868686] p-3 sm:p-4 lg:p-6 
                flex flex-col items-center h-full"
    >
      <div className="flex-grow flex items-center justify-center w-3/5 aspect-square relative">
        <Image
          src={image || "/placeholder.svg"}
          alt=""
          width={300} // или другой разумный размер
          height={300}
          className="object-contain"
        />
      </div>

      <p
        className="mt-2 text-center text-[10px] sm:text-sm lg:text-base 
                font-montserrat font-normal text-gray-700 w-full leading-tight 
                h-[3rem] sm:h-[3.5rem] flex items-center justify-center line-clamp-3 sm:line-clamp-2"
      >
        {title}
      </p>
    </div>
  );
};

export const WhyChooseUs: React.FC<Props> = ({ t }) => {
  const features = [
    {
      title: t("why.list.0"),
      image: "/images/partners.jpg",
    },
    {
      title: t("why.list.1"),
      image: "/images/warehouse.png",
    },
    {
      title: t("why.list.2"),
      image: "/images/delivery.png",
    },
  ];

  return (
    <section className="bg-white mx-auto flex flex-col gap-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-bold font-montserrat leading-snug sm:leading-tight text-center">
        {t.rich("why.title", {
          span: (chunks) => (
            <span className="text-primaryCustom">{chunks}</span>
          ),
        })}
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
