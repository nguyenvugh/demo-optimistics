import { createSlice } from "@reduxjs/toolkit";
import { toNormalize } from "../../libs/common.lib";

const initialState = {
  products: [],
  productsNormalized: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct: (state, actions) => {
      state.products = actions.payload;
      state.productsNormalized = toNormalize(actions.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: { updateProduct },
  reducer,
} = productSlice;
