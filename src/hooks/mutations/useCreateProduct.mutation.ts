import {useMutation, useQueryClient} from 'react-query';
import { KEY_QUERY } from '../../enum/keyQuery.enum';
import { createProduct } from '../../utils/requests/product.requests';


export function useCreateProductMutation() {
    const queryClient = useQueryClient();
    return useMutation(createProduct, {
      onSuccess: ()=> {
        queryClient.invalidateQueries(KEY_QUERY.SHOPPING_SELECTED)
      }
    });
  }
  