import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
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
