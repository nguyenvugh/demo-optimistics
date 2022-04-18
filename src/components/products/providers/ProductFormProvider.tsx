import React from "react";
import { useAddProducts } from "../hooks/useAddProducts";
import { ProductForm } from "../components/ProductFrom";
import { Products } from "../interfaces";

function ProductFormProvider() {
  const mutationAdd = useAddProducts();

  function handleAddProduct(product?: Products) {
    if (!product) return;
    mutationAdd.mutate(product);
  }
  return <ProductForm handleAddProduct={handleAddProduct} />;
}

export { ProductFormProvider };
