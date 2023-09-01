import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';


const rootReducer = {
  booksl: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});



export default store;
