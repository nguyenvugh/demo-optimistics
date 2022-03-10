import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Favorites } from "../../favourites/Favourites";
import { ProductList } from "../components/ProductList";
import { useDeleteProducts } from "../hooks/useDeleteProducts";
import { useGetProducts } from "../hooks/useGetProducts";
import { updateProduct } from "../reducer";

function ProductListProvider() {
  const { data, isLoading } = useGetProducts();
  const mutationDelete = useDeleteProducts();

  const dispatch = useDispatch();
  const {
    productReducer: { products },
  } = useSelector((state) => state);

  const [openModal, setOpenModal] = useState();
  function handleDeleteProduct(id) {
    mutationDelete.mutate(id);
  }

  useEffect(() => {
    dispatch(updateProduct(data));
  }, [dispatch, data]);

  function handleDeleteFavorites(productId) {
    mutationDelete.mutate(productId);
  }

  return (
    <>
      <ProductList
        showFavorites={() => setOpenModal(true)}
        products={products}
        handleDeleteProduct={handleDeleteProduct}
        isLoading={isLoading}
      />
      <Favorites
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        products={products}
        handleDeleteFavorites={handleDeleteFavorites}
      />
    </>
  );
}

export { ProductListProvider };
