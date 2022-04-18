import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "src/common/hooks/useAppSelector";
import { Favorites } from "../../favourites/Favourites";
import { ProductList } from "../components/ProductList";
import { useDeleteProducts } from "../hooks/useDeleteProducts";
import { useGetProducts } from "../hooks/useGetProducts";
import { updateProduct } from "../reducer";

function ProductListProvider() {
  const { data, isLoading } = useGetProducts();
  const mutationDelete = useDeleteProducts();

  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productReducer);

  const [openModal, setOpenModal] = useState(false);

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
