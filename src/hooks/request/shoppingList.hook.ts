import { getListShoppingWithProducts } from "../../utils/requests/ListShopping.requests";
import { IShoppingListResponseApi } from "../../interfaces/IShoppingList.interface";
import { useQuery, UseQueryResult } from "react-query";

export const useShoppingList = (): UseQueryResult<
	IShoppingListResponseApi[]
> => {
	return useQuery(["shoppingList"], () => getListShoppingWithProducts());
};
