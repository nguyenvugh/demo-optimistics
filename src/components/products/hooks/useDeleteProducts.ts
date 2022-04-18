import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEYS } from "src/common/constants/querykeys.constants";
import { useToast } from "src/common/hooks/useToast";
import { fakeAPI } from "../../../fakeAPI.mock";
import { Products } from "../interfaces";

export function useDeleteProducts() {
  const { toast, update } = useToast();
  const queryClient = useQueryClient();
  return useMutation(fakeAPI.deleteProduct, {
    onMutate: async (productId: string | number) => {
      await queryClient.cancelQueries(QUERY_KEYS.PRODUCT_LIST);
      const previousProduct = queryClient.getQueryData(QUERY_KEYS.PRODUCT_LIST) as Products[];
      queryClient.setQueryData<Products[]>(QUERY_KEYS.PRODUCT_LIST, (old) => {
        return (old || []).filter((p) => p.id !== productId);
      });

      toast({ title: `Deleting product ${productId}`, id: productId });
      return { productId, previousProduct };
    },
    onSuccess: (_rs, _variables, context) => {
      update(context.productId, {
        title: `Delete success ${context.productId}!`,
        status: "success",
      });
    },
    onError: (_error, _variables, context) => {
      if (!context) return;
      update(context.productId, {
        title: `Delete error ${context.productId}!`,
        status: "error",
      });
      queryClient.setQueryData<Products[]>(QUERY_KEYS.PRODUCT_LIST, context.previousProduct);
    },
    retry: 2,
  });
}
