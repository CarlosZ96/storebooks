import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk(
  "getLorems",
  async (arg, { rejectWithValue }) => {
    try {
      const { response } = await axios.get(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/jsq4RL15t3XvwsIMmWiv/books'
      );
      const data = await response;

      const BooksListByID = Object.keys(data.data);
      const BooksListApi = [];
      BooksListByID.forEachforEach((idBook) => {
        const booksProperties = Object.keys(data.data[idBook]);
        booksProperties.forEach((firstKey) => {
          const authorApi = data.data[idBook][firstKey].author;
          const titleApi = data.data[idBook][firstKey].title;
          const categoryApi = data.data[idBook][firstKey].category;
          BooksListApi.push(
            {
              item_id: idBook,
              author: authorApi,
              title: titleApi,
              category: categoryApi,
              completed: 0,
              chapter: 'Chapter 1',
            },
          );
        });
      });
      return BooksListApi;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const bookslSlice = createSlice({
  name: 'booksl',
  initialState: {
    books: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.books = state.books.filter((book) => book.id !== itemId);
    },
    extraReducers: (builder) => {
      builder.addCase(getBooks.fulfilled, (state, action) => {
        state.bookItems = action.payload;
      });
      builder.addCase(getBooks.rejected, (state, action) => {
        state.error = action.payload;
      });
      builder.addCase(removeBook.fulfilled, (state, action) => {
        state.bookItems = state.bookItems.filter((bookId) => bookId.item_id !== action.payload);
      });
    },
  },
});

export const { addBook, removeBook } = bookslSlice.actions;
export default bookslSlice.reducer;
