import React from 'react';
import BookList from './BookList';
import AddNewBooks from './NewBook';
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
