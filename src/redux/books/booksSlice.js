import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const ID = action.payload;
      state.books = state.books.filter((book) => book.id !== ID);
    },
  },
});

export default booksSlice;
