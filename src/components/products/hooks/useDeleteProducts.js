import { CheckCircleIcon, SpinnerIcon } from "@chakra-ui/icons";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "react-query";
import { fakeAPI } from "../../../fakeAPI.mock";
import { useToast } from "./useToast";

export function useDeleteProducts() {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation(fakeAPI.deleteProduct, {
    onMutate: async (productId) => {
      await queryClient.cancelQueries("getProducts");
      const previousProduct = queryClient.getQueryData("getProducts");
      queryClient.setQueryData("getProducts", (old) => {
        return old.filter((p) => p.id !== productId);
      });

      toast.toast({ message: `Deleting product ${productId}`, id: productId });
      return { productId, previousProduct };
    },
    onSuccess: (rs, variables, context) => {
      toast.update(
        context.productId,
        `Delete success ${context.productId}!`,
        "success"
      );
    },
    onError: (error, variables, context) => {
      toast.update(
        context.productId,
        `Delete error ${context.productId}!`,
        "error"
      );
      queryClient.setQueryData("getProducts", context.previousProduct);
    },
    retry: 2,
  });
}
