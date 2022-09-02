export interface IShoppingResponseApi {
	id: string;
	name: string;
	dateCreated: string;
	dateLastUpdate: string;
	products: IProduct[];
}

export interface IShoppingListBuilded {
	id: string;
	name: string;
	dateCreated: string;
	dateLastUpdate: string;
    totalProducts: number;
    totalPrice: string;
	products: IProduct[];
}

export interface IShoppingDetailBuilded {
	id: string;
	name: string;
	dateLastUpdate: string;
    totalProducts: number;
    totalPrice: string;
	products: IProduct[];
}

export interface IProduct {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: string;
}
