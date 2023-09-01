import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [
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
    checkStatus: (state, action) => {
      if (action.payload === 'Under construction') {
        state.categories = 'Under construction';
      }
    },
  },
});

export const {
  checkStatus,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
