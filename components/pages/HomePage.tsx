import React from "react";
import { Container } from "@/components/shared";
import { AboutUs, WhyChooseUs, CatalogCards } from "@/components/widgets";
import { ContactMap } from "@/components/widgets/ContactMap";
import BigLogo from "@/public/images/BigLogo.svg";
import Image from "next/image";
import { TFunction } from "@/components/shared/data/types";

interface Props {
  className?: string;
  t: TFunction;
}

export const HomePage: React.FC<Props> = async ({ t }) => {
  return (
    <div className="min-h-[1000px] flex flex-col bg-white">
      <Container className="flex flex-col relative items-center justify-center h-[45vh] xs425:h-[55vh] md:h-[75vh] w-full bg-primaryCustom pt-8">
        <div className="flex flex-col w-full items-center gap-3 transform -translate-y-1/3">
          <Image
            src={BigLogo}
            alt=""
            className="w-1/2 xs425:w-1/3 md:w-1/5 xl:w-1/4 h-auto md:block"
          />
          <h2 className=" font-normal font-montserrat max-w-xs text-center  text-white text-sm sm:max-w-sm xl:text-xl xl:max-w-xl">
            {t("hero.title")}
          </h2>
        </div>

        {/* Карточки, выступающие из синего блока */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 md:px-8 lg:px-16 xl:px-24">
          <CatalogCards />
        </div>
      </Container>
      <Container className="mt-[20vw] flex flex-col gap-8 md:gap-16">
        <div id="about-us">
          <AboutUs t={t} />
        </div>
        <div id="advantages">
          <WhyChooseUs t={t} />
        </div>
        <div id="contacts">
          <ContactMap />
        </div>
      </Container>
    </div>
  );
};
