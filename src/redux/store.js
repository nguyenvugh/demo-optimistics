import { configureStore } from "@reduxjs/toolkit";
import { reducer as productReducer } from "../components/products/reducer";

export const store = configureStore({
  reducer: {
    productReducer,
  },
});
