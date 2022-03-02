import { useMutation, useQueryClient } from "react-query";
import { v4 as uuidV4 } from "uuid";
import { fakeAPI } from "../../../fakeAPI.mock";
import { useToast } from "./useToast";

export function useAddProducts() {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation(fakeAPI.addProducts, {
    onMutate: async (variables) => {
      await queryClient.cancelQueries("getProducts");
      const optimisticTodo = { ...variables, id: uuidV4() };
      queryClient.setQueryData("getProducts", (old) => [
        ...old,
        optimisticTodo,
      ]);
      toast.toast({
        message: `Deleting product ${variables.name}`,
        id: optimisticTodo.id,
      });
      return { optimisticTodo };
    },
    onSuccess: (result, variables, context) => {
      queryClient.setQueryData("getProducts", (old) =>
        old.map((todo) =>
          todo.id === context.optimisticTodo.id ? result : todo
        )
      );
      toast.update(
        context.optimisticTodo.id,
        `Delete success ${context.optimisticTodo.name}!`,
        "success"
      );
    },
    onError: (error, variables, context) => {
      toast.update(
        context.optimisticTodo.id,
        `Delete error ${context.optimisticTodo.name}!`,
        "error"
      );
      queryClient.setQueryData("getProducts", (old) =>
        old.filter((todo) => todo.id !== context.optimisticTodo.id)
      );
    },
    retry: 2,
  });
}
