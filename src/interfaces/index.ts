
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
    name: string,
    label: string,
    type: string,
}