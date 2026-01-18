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
  reducers: {},
});

export default bookSlice.reducer;
