import { configureStore } from "@reduxjs/toolkit";
import booksReducers from "../features/bookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducers,
  },
});
