import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
};

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addOneFavourite: (state, actions) => {
      if (!actions.payload) return;
      state.favourites = [...state.favourites, actions.payload];
    },
    deleteFavouriteById(state, actions) {
      const removedFavourite = state.favourites.filter(
        (p) => p.id !== actions.payload
      );
      state.favourites = removedFavourite;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: { addOneFavourite, deleteFavouriteById },
  reducer,
} = favouriteSlice;
