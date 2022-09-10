import { getShoppingById } from "../../utils/requests/shopping.requests";
import { IShoppingResponseApi } from "../../interfaces/IShoppingList.interface";
import {KEY_QUERY} from '../../enum/keyQuery.enum';
import { useQuery, UseQueryResult } from "react-query";

export const useShopping = (id: string): UseQueryResult<
	IShoppingResponseApi
> => {
	return useQuery([KEY_QUERY.SHOPPING_SELECTED], () => getShoppingById(id),{
        enabled: !!id
    });
};
