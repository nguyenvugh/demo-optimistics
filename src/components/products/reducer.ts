import { createSlice } from "@reduxjs/toolkit";
import { toNormalize } from "src/common/lib/common.lib";
import { Products } from "./interfaces";

type StateProps = {
  products: Products[];
  productsNormalized: {};
};
const initialState: StateProps = {
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
