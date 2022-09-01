export interface IShoppingListResponseApi {
	id: number;
	name: string;
	dateCreated: string;
	dateLastUpdate: string;
	products: IProducts[];
}

export interface IProducts {
    id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
}
