import { createSlice } from '@reduxjs/toolkit';

const bookslSlice = createSlice({
  name: 'booksl',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.id !== itemId);
    },
  },
});

export const { addBook, removeBook } = bookslSlice.actions;
export default bookslSlice.reducer;

