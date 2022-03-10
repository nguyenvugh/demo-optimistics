import React from "react";
import { ProductItem } from "../components/ProductItem";
import { useDeleteProducts } from "../hooks/useDeleteProducts";

function ProductItemProvider(props) {
  const { product } = props;
  const mutationDelete = useDeleteProducts();

  function handleDeleteProduct(id) {
    mutationDelete.mutate(id);
  }

  return (
    <ProductItem product={product} handleDeleteProduct={handleDeleteProduct} />
  );
}

export { ProductItemProvider };
