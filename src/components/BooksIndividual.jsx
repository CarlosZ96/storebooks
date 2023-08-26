import React from 'react';
import AddNewBooks from './newbook';
import BookList from './BookList';
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
