import {
	IShoppingResponseApi,
	IShoppingDetailBuilded,
    IProductWithTotalPrice
} from "../interfaces/IShoppingList.interface";
import { getTotalSumCurrencyBRL, formatDateWithTime } from "../utils/helpers.utils";

export class shoppingListBuilder {
	static build(data: IShoppingResponseApi): IShoppingDetailBuilded {
        const prices:number[] = [];
        const productsCalculated = data.products.reduce<IProductWithTotalPrice[]>((arr, product) => {
            let priceCalculated = product.price * product.quantity;
            prices.push(priceCalculated);
            let products = [...arr];
            products.push({
                ...product,
                totalPriceBRL: priceCalculated.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                })
            })

            return products
        }, [])

		const newData: IShoppingDetailBuilded = {
            ...data,
            totalPrice: getTotalSumCurrencyBRL(prices),
            totalProducts: data.products.length,
            dateLastUpdate: formatDateWithTime(data.dateLastUpdate),
            products: productsCalculated
        };

		return newData;
	}
}
