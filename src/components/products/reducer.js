import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct: (state, actions) => {
      state.products = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: { updateProduct },
  reducer,
} = productSlice;
