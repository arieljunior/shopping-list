import {useMutation, useQueryClient} from 'react-query';
import { KEY_QUERY } from '../../enum/keyQuery.enum';
import { deleteList } from '../../utils/requests/shopping.requests';


export function useDeleteListMutation() {
    const queryClient = useQueryClient();
    return useMutation(deleteList, {
      onSuccess: ()=> {
        queryClient.invalidateQueries(KEY_QUERY.SHOPPING_LIST)
      }
    });
  }
  