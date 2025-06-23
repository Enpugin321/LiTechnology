import React from "react";

type Props = {
  className?: string;
  t: (key: string) => string;
};

export function AboutUs({ t }: Props) {
  return (
    <div className="w-full flex flex-col gap-4 bg-[#F8F8FA] rounded-2xl py-8 px-4 md:flex-row md:py-20 md:px-16 justify-center items-center text-black">
      <h2 className="text-xl md:text-4xl font-bold font-montserrat md:min-w-[121px]">
        {t("about.title")}
      </h2>
      <div className="flex flex-col gap-4 text-center text-sm md:text-left md:text-xl font-montserrat font-normal ">
        <p>{t("about.text1")}</p>

        <p>{t("about.text2")}</p>
      </div>
    </div>
  );
}
