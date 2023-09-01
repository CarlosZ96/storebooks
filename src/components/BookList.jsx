import React from 'react';
import '../StyleSheets/booklist.css';
import { useSelector } from 'react-redux';

function BookList() {
  const categories = useSelector((state) => state.categories.categories);
  return (
    <>
      {
        categories.map((book, index) => (
          <div key ={index} className="BooksListC">
            <section className="tittle-circle-container">
              <div className="book-info">
                <p>{book.title}</p>
                <h2>{book.author}</h2>
                <p>{book.category}</p>
                <ul className="book-buttons">
                  <li><button type="button" className="book-button">Comments</button></li>
                  <li><button type="button" className="book-button">Remove</button></li>
                  <li><button type="button" className="book-button">Edit</button></li>
                </ul>
              </div>
              <div className="percentage-container">
                <img src="https://cdn-icons-png.flaticon.com/128/5698/5698579.png" alt="50% cirlcle" className="percentage-img" />
                <div className="Percentage-text-container">
                  <p className="Completed">Completed</p>
                </div>
              </div>
            </section>
            <section className="current-chapter-container">
              <p>Current Chapter</p>
              <p>Chapter example</p>
              <button type="button">Update Progress</button>
            </section>
          </div>
        ))
      }
    </>
  );
}
/*{products.map((product)=> (
  <ProItem key={product.id} data={product} addToCart={addToCart}/>
  ))}  */
export default BookList;
