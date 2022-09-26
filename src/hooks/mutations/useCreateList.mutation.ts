import {useMutation, useQueryClient} from 'react-query';
import { KEY_QUERY } from '../../enum/keyQuery.enum';
import { createList } from '../../utils/requests/shopping.requests';


export function useCreateListMutation() {
    const queryClient = useQueryClient();
    return useMutation(createList, {
      onSuccess: ()=> {
        queryClient.invalidateQueries(KEY_QUERY.SHOPPING_LIST)
      }
    });
  }
  