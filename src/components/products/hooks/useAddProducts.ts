import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "src/common/constants/querykeys.constants";
import { useToast } from "src/common/hooks/useToast";
import { replaceObjectById } from "src/common/lib/common.lib";
import { v4 as uuidV4 } from "uuid";
import { fakeAPI } from "../../../fakeAPI.mock";
import { Products } from "../interfaces";

export function useAddProducts() {
  const { toast, update } = useToast();
  const queryClient = useQueryClient();
  return useMutation(fakeAPI.addProducts, {
    onMutate: async (variables: Products) => {
      await queryClient.cancelQueries(QUERY_KEYS.PRODUCT_LIST);
      const optimisticTodo = { ...variables, id: uuidV4() };
      queryClient.setQueryData<Products[]>(QUERY_KEYS.PRODUCT_LIST, (old) => [
        ...(old || []),
        optimisticTodo,
      ]);
      toast({
        title: `Add product ${variables.name}`,
        id: optimisticTodo.id,
      });
      return { optimisticTodo };
    },
    onSuccess: (result, _variables, context) => {
      queryClient.setQueryData<Products[]>(QUERY_KEYS.PRODUCT_LIST, (old) => {
        if (!old) return [];
        return replaceObjectById<Products, Products>(
          old,
          result,
          context.optimisticTodo.id,
        ) as Products[];
      });
      update(context.optimisticTodo.id, {
        title: `Add success ${context.optimisticTodo.name}!`,
        status: "success",
      });
    },
    onError: (_error, _variables, context) => {
      if (!context) return;
      update(context.optimisticTodo.id, {
        title: `Add error ${context.optimisticTodo.name}!`,
        status: "error",
      });
      queryClient.setQueryData<Products[]>(QUERY_KEYS.PRODUCT_LIST, (old) =>
        (old || []).filter((todo) => todo.id !== context.optimisticTodo.id),
      );
    },
    retry: 2,
  });
}
