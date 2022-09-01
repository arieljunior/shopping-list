import { IShoppingListResponseApi } from "../../interfaces/IShoppingList.interface";
import api from "../../services/api";

export const getListShoppingWithProducts = async (): Promise<
	IShoppingListResponseApi[]
> => {
	const { data } = await api.get<IShoppingListResponseApi[]>("/shoppings-list");
	return data;
};
