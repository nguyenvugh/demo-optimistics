import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Favorites } from "../favourites/Favourites";
import { useAddProducts } from "./hooks/useAddProducts";
import { useDeleteProducts } from "./hooks/useDeleteProducts";
import { useGetProducts } from "./hooks/useGetProducts";
import { ProductForm } from "./ProductFrom";
import { ProductList } from "./ProductList";
import { updateProduct } from "./reducer";
import Wrapper from "./Wrapper";

function Products() {
  const { data, isLoading } = useGetProducts();
  const mutationAdd = useAddProducts();
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

  function handleAddProduct(product) {
    if (!product) return;
    mutationAdd.mutate(product);
  }

  function handleDeleteFavorites(productId) {
    mutationDelete.mutate(productId);
  }
  return isLoading ? (
    "Loading..."
  ) : (
    <Wrapper>
      <ProductList
        showFavorites={() => setOpenModal(true)}
        products={products}
        handleDeleteProduct={handleDeleteProduct}
        isLoading={isLoading}
      />
      <ProductForm handleAddProduct={handleAddProduct} />
      <Favorites
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        products={products}
        handleDeleteFavorites={handleDeleteFavorites}
      />
    </Wrapper>
  );
}

export { Products };
