      /* eslint-disable prefer-destructuring */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JX6HgfhVoknuk7ZGztbn/books',
      );
      const data = response.data;
      const booksIds = Object.keys(data);
      const booksApi = [];
      booksIds.forEach((bookId) => {
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
      return rejectWithValue(error.response);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JX6HgfhVoknuk7ZGztbn/books',
        payload.newBookOBjt,
      );
      if (!response) {
        return Error('Error when creating a new book.');
      }
      return payload.newBookOBjt;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/JX6HgfhVoknuk7ZGztbn/books/${payload.getBookId}`,
      );
      if (!response) {
        return Error('Error when deleting a book.');
      }
      return payload.getBookId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const bookslSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    });
  },
});

export default bookslSlice.reducer;
