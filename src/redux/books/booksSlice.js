import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JX6HgfhVoknuk7ZGztbn/books'
      );
      const data = response.data;
      console.log(data);
      const booksIds = Object.keys(data);
      console.log(booksIds);
      const booksApi = [];
      booksIds.forEach(bookId => {
        const AuthorApi = data[bookId][0].author;
        const TitleApi = data[bookId][0].title;
        const CaregoryApi = data[bookId][0].category;
        booksApi.push(
          {
            item_id: bookId,
            author: AuthorApi,
            title: TitleApi,
            category: CaregoryApi,
          },
        );
      });
      return booksApi; 
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const bookslSlice = createSlice({
  name: 'books',
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
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const { addBook, removeBook } = bookslSlice.actions;
export default bookslSlice.reducer;
