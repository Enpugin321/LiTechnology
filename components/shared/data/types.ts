import { useTranslations } from "next-intl";

export type TFunction = ReturnType<typeof useTranslations>;

export type Drone = {
  id: number;
  name: string;
  price: string;
  image: string;
  flightTime: string;
  volume: string;
  size: string;
  description: string;
};

export type Vacuum = {
  id: number;
  name: string;
  price: string;
  image: string;
  battery: string;
  capacity: string;
  size: string;
  description: string;
};
