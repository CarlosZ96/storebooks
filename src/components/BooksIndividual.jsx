import React from 'react';
import BookList from './BookList.jsx';
import AddNewBooks from './NewBook.js';
import '../StyleSheets/books.css';

function Book() {
  return (
    <div className="book-container">
      <BookList />
      <AddNewBooks />
    </div>
  );
}

export default Book;
