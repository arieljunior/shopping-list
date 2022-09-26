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

export const createList = async (nameList: string): Promise<
	boolean
> => {
	const { status } = await api.post(ROUTE_NAME, {
		name: nameList,
		dateCreated: new Date().toISOString(),
		dateLastUpdate: new Date().toISOString(),
		products: []
	});
	return status === 201 || status === 200;
};

export const deleteList = async (id: string): Promise<
	boolean
> => {
	const { status } = await api.delete(ROUTE_NAME + `/${id}`);
	return status === 201 || status === 200;
};
