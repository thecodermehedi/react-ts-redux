import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/features/counterSlice";
import logger from "./middleware/logger";
// import logger from "redux-logger";

const store = configureStore({
 reducer: {
  counter: counterReducer
 },
 // devTools: false,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
