import { getShoppingById } from "../../utils/requests/shopping.requests";
import { IShoppingResponseApi } from "../../interfaces/IShoppingList.interface";
import { useQuery, UseQueryResult } from "react-query";

export const useShopping = (id: string): UseQueryResult<
	IShoppingResponseApi
> => {
	return useQuery(["shopping"], () => getShoppingById(id),{
        enabled: !!id
    });
};
