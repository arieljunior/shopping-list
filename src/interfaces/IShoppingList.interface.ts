export interface IShoppingListResponseApi {
	id: number;
	name: string;
	dateCreated: string;
	dateLastUpdate: string;
	products: IProduct[];
}

export interface IShoppingListBuilded {
	id: number;
	name: string;
	dateCreated: string;
	dateLastUpdate: string;
    totalProducts: number;
    totalPrice: string;
	products: IProduct[];
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
}
