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
/*
{products.map((product)=> (
  <ProItem key={product.id} data={product} addToCart={addToCart}/>
  ))}  
*/
export default Book;
