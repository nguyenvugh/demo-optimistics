import { HStack, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Favourites } from "./components/favourites/Favourites";
import { ProductForm } from "./components/products/ProductFrom";
import { ProductList } from "./components/products/ProductList";
import { fakeAPI } from "./fakeAPI.mock";
import {
  addOneFavourite,
  deleteFavouriteById,
} from "./redux/reducers/favourites.reducers";
import {
  addOneProduct,
  deleteProductById,
  updateProduct,
} from "./redux/reducers/products.reducers";

function App() {
  const { data, isLoading } = useQuery("getProducts", fakeAPI.getProducts);
  const mutationAdd = useMutation(fakeAPI.addProducts);
  const mutationDelete = useMutation(fakeAPI.deleteProduct);

  console.log({ data });
  const dispatch = useDispatch();
  const {
    productReducer: { products },
    favouriteReducer: { favourites },
  } = useSelector((state) => state);

  const toast = useToast();
  const [openModal, setOpenModal] = useState();
  function handleDeleteProduct(id) {
    mutationDelete.mutate(id);
    dispatch(deleteProductById(id));
  }

  useEffect(() => {
    dispatch(updateProduct(data));
  }, [dispatch, data]);

  function handleAddProduct(product) {
    if (!product) return;
    mutationAdd.mutate(product);
    dispatch(addOneProduct(product));
    toast({
      title: "Add product successfully!",
      status: "success",
      position: "top",
      duration: 2000,
    });
  }

  function handleAddFavorites(product) {
    dispatch(addOneFavourite(product));
    toast({
      title: "Add favourites successfully!",
      status: "success",
      position: "top",
      duration: 2000,
    });
  }

  function handleDeleteFavorites(productId) {
    dispatch(deleteFavouriteById(productId));
    toast({
      title: "Delete favourites successfully!",
      status: "success",
      position: "top",
      duration: 2000,
    });
  }
  return isLoading ? (
    "Loading..."
  ) : (
    <HStack
      bg="#1A202C"
      minHeight="100vh"
      w="full"
      alignItems="start"
      justifyContent="center"
      pt="150px"
      spacing="10"
    >
      <ProductList
        showFavorites={() => setOpenModal(true)}
        products={products}
        handleDeleteProduct={handleDeleteProduct}
        addFavorites={handleAddFavorites}
      />
      <ProductForm handleAddProduct={handleAddProduct} />
      <Favourites
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        favourites={favourites}
        handleDeleteFavorites={handleDeleteFavorites}
      />
    </HStack>
  );
}

export default App;
