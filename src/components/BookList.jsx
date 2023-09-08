import React, { useEffect } from 'react';
import '../StyleSheets/booklist.css';
import { useDispatch, useSelector } from 'react-redux';
import BookActions from './bookActions';
import { getBooks } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <>
      {
        books.map((book) => (
          <div key={book.item_id} className="BooksListC">
            <section className="tittle-circle-container">
              <div className="book-info">
                <p>{book.title}</p>
                <h2>{book.author}</h2>
                <p>{book.category}</p>
                <BookActions key={books.item_id} id={book.item_id} />
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
export default BookList;
