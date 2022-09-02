import {
	IShoppingResponseApi,
	IShoppingListBuilded,
} from "../interfaces/IShoppingList.interface";
import { getTotalSumCurrencyBRL, formatDateWithTime } from "../utils/helpers.utils";

export default class shoppingListBuild {
	static build(data: IShoppingResponseApi[]): IShoppingListBuilded[] {
		const newData: IShoppingListBuilded[] = data.map((item) => {
			let prices = item.products.map((i) => i.price);
			return {
				...item,
				totalProducts: item.products.length,
				dateCreated: formatDateWithTime(item.dateCreated),
				dateLastUpdate: formatDateWithTime(item.dateLastUpdate),
				totalPrice: getTotalSumCurrencyBRL(prices),
			};
		});

		return newData;
	}
}
