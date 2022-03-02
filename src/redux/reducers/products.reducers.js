import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addOneProduct: (state, actions) => {
      if (!actions.payload) return;
      const newId = state.products[state.products.length - 1]?.id || 1;
      state.products = [
        ...state.products,
        { ...actions.payload, id: newId + 1 },
      ];
    },
    updateProduct: (state, actions) => {
      state.products = actions.payload;
    },
    deleteProductById(state, actions) {
      const removedProducts = state.products.filter(
        (p) => p.id !== actions.payload
      );
      state.products = removedProducts;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: { updateProduct, deleteProductById, addOneProduct },
  reducer,
} = productSlice;
