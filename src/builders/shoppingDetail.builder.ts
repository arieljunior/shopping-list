import {
	IShoppingResponseApi,
	IShoppingDetailBuilded,
} from "../interfaces/IShoppingList.interface";
import { getTotalSumCurrencyBRL, formatDateWithTime } from "../utils/helpers.utils";

export class shoppingListBuilder {
	static build(data: IShoppingResponseApi): IShoppingDetailBuilded {
        console.log(data)
        let prices = data.products.map((i) => i.price);

		const newData: IShoppingDetailBuilded = {
            ...data,
            totalPrice: getTotalSumCurrencyBRL(prices),
            totalProducts: data.products.length,
            dateLastUpdate: formatDateWithTime(data.dateLastUpdate)
        };

		return newData;
	}
}
