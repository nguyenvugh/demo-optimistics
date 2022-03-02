import { configureStore } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./reducers/products.reducers";
import { reducer as favouriteReducer } from "./reducers/favourites.reducers";

export const store = configureStore({
  reducer: {
    productReducer,
    favouriteReducer,
  },
});
