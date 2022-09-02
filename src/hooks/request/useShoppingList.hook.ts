import { getListShoppingWithProducts } from "../../utils/requests/shopping.requests";
import { IShoppingResponseApi } from "../../interfaces/IShoppingList.interface";
import { useQuery, UseQueryResult } from "react-query";

export const useShoppingList = (): UseQueryResult<
	IShoppingResponseApi[]
> => {
	return useQuery(["shoppingList"], () => getListShoppingWithProducts());
};
