import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import bookSlice from "../features/book/bookSlice"; // Import the reducer directly
import messageSlice from "../features/message/messageSlice";

// Configure the store
export const store = configureStore({
  reducer: {
    bookList: bookSlice, // Use `bookList` as the key for the book slice
    message: messageSlice,
  },
});

// Infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>;

// Setup listeners (if needed)
setupListeners(store.dispatch);

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
