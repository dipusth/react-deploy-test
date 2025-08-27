import type { Dispatch, SetStateAction } from "react";

export interface ProductType  {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IuserType {
  name: string;
  username: string;
  password: string;

}
export interface stateProps {
  setSelectedProducts: Dispatch<SetStateAction<ProductType[]>>;
  selectedProducts: ProductType[];
}
export interface LoginType {
  username: string;
  password: string;
}

export interface cartProps {
  className: string;
}


export type DeleteProps = {
  className: string;
};

export interface EmailProps {
  className?: string;
}

export interface notificationProps {
  className: string;
}

export type FormValues = {
  title: string;
  price: number;
  category: string;
  description: string;
};
