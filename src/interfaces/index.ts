
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
    name: "title" | "description" | "image" | "price",
    label: string,
    type: string,
}