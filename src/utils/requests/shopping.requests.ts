import { IShoppingResponseApi } from "../../interfaces/IShoppingList.interface";
import api from "../../services/api";

const ROUTE_NAME = "/shoppings-list"

export const getListShoppingWithProducts = async (): Promise<
	IShoppingResponseApi[]
> => {
	const { data } = await api.get<IShoppingResponseApi[]>(ROUTE_NAME);
	return data;
};

export const getShoppingById = async (id: string): Promise<
	IShoppingResponseApi
> => {
	const { data } = await api.get<IShoppingResponseApi>(ROUTE_NAME + `/${id}`);
	return data;
};
