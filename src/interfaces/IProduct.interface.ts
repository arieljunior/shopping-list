export interface IFormProduct {
	name: string;
	category: string;
	price: number | null;
	quantity: number | null;
}

export interface IProduct {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
}