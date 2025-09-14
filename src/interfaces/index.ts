import type { TProducatNames } from "../types";

export interface IProduct {
    id?: string | undefined;
    title: string;
    description: string;
    image: string;
    price: string;
    colors: string[];
    category: {
        name: string;
        image: string
    }
}


export interface IFormList {
    id: string,
    name: TProducatNames,
    label: string,
    type: string,
}

export interface ICategory {
    id: string,
    name: string,
    image: string
}