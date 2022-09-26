import api from "../../services/api";
import { IProduct } from "../../interfaces/IProduct.interface";

export const createProduct = (data: {
	idShopping: string;
	products: IProduct[];
}) => {
	return api.patch(`/shoppings-list/${data.idShopping}`, {
		products: data.products,
		dateLastUpdate: new Date().toISOString(),
	});
}
