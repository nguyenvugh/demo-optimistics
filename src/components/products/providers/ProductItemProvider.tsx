import React from "react";
import { ProductItem } from "../components/ProductItem";
import { useDeleteProducts } from "../hooks/useDeleteProducts";
import { Products } from "../interfaces";

type ProductItemProviderProps = {
  product: Products;
};
function ProductItemProvider({ product }: ProductItemProviderProps) {
  const mutationDelete = useDeleteProducts();

  function handleDeleteProduct(id?: string | number) {
    if (!id) return;
    mutationDelete.mutate(id);
  }

  return <ProductItem product={product} handleDeleteProduct={handleDeleteProduct} />;
}

export { ProductItemProvider };
