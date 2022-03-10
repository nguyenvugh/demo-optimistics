import React from "react";
import { useAddProducts } from "../hooks/useAddProducts";
import { ProductForm } from "../components/ProductFrom";

function ProductFormProvider() {
  const mutationAdd = useAddProducts();

  function handleAddProduct(product) {
    if (!product) return;
    mutationAdd.mutate(product);
  }
  return <ProductForm handleAddProduct={handleAddProduct} />;
}

export { ProductFormProvider };
