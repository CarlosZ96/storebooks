import { createSlice } from '@reduxjs/toolkit';

const bookslSlice = createSlice({
  name: 'booksl',
  initialState: {
    books: [
      {
        id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
        percentage: 20,
        chapter: 2,
      },
      {
        id: 'item2',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
        percentage: 32,
        chapter: 4,
      },
      {
        id: 'item3',
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
        percentage: 0,
        chapter: 0,
      },
    ],
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
