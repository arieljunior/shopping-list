import { getListShoppingWithProducts } from "../../utils/requests/shopping.requests";
import { IShoppingResponseApi } from "../../interfaces/IShoppingList.interface";
import { useQuery, UseQueryResult } from "react-query";
import {KEY_QUERY} from '../../enum/keyQuery.enum';

export const useShoppingList = (): UseQueryResult<
	IShoppingResponseApi[]
> => {
	return useQuery([KEY_QUERY.SHOPPING_LIST], () => getListShoppingWithProducts());
};
