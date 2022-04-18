import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as productReducer } from "../../components/products/reducer";

const rootReducer = combineReducers({
  productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
