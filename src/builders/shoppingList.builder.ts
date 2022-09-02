import {
	IShoppingListResponseApi,
	IShoppingListBuilded,
	IProduct,
} from "../interfaces/IShoppingList.interface";

export default class shoppingListBuild {
	build(data: IShoppingListResponseApi[]): IShoppingListBuilded[] {
		const newData: IShoppingListBuilded[] = data.map((item) => {
			let created = new Date(item.dateCreated);
			let lastUpdated = new Date(item.dateLastUpdate);
			return {
				...item,
				totalProducts: item.products.length,
				dateCreated: created.toLocaleDateString() + " " + created.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
				dateLastUpdate: lastUpdated.toLocaleDateString() + " " + lastUpdated.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
				totalPrice: this.calculateTotalPrice(item.products),
			};
		});

		return newData;
	}

	private calculateTotalPrice(products: IProduct[]): string {
		const total = products.reduce((acc, product) => acc + product.price, 0);
		return total.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		});
	}
}
