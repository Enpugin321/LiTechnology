import React from "react";

type Props = {
  className?: string;
};

export function AboutUs({}: Props) {
  return (
    <div className="w-full flex flex-col gap-4 bg-[#F8F8FA] rounded-2xl py-8 px-4 md:flex-row md:py-20 md:px-16 justify-center items-center text-black">
      <h4 className="text-xl md:text-4xl font-bold font-montserrat md:min-w-[121px]">
        О нас
      </h4>
      <div className="flex flex-col gap-4 text-center text-sm md:text-left md:text-xl font-montserrat font-normal ">
        <p>
          Компания Li Technology — официальный дистрибьютор инновационной
          техники от мировых брендов XAG (агродроны) и Gausium (роботы-уборщики)
          на территории Казахстана.
        </p>

        <p>
          Мы предоставляем передовые решения для сельского хозяйства и уборки
          коммерческих помещений, помогая бизнесу работать эффективнее, точнее и
          экономичнее.
        </p>
      </div>
    </div>
  );
}
