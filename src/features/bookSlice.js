import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "A",
      author: "Robiul",
      price: 100,
      quantity: 10,
    },
    {
      id: 2,
      title: "B",
      author: "Abir",
      price: 80,
      quantity: 15,
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;
      const existingBook = state.books.find((book) => book.id === id);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      }
    },
  },
});

export default bookSlice.reducer;
export const { deleteBook, addBook, updateBook } = bookSlice.actions;
