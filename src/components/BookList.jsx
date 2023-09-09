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
                <p className="categorie">{book.category}</p>
                <h2>{book.title}</h2>
                <p className="author">{book.author}</p>
                <BookActions key={books.item_id} id={book.item_id} />
              </div>
              <div className="percentage-container">
                <img src="https://i.stack.imgur.com/2UAyy.png" alt="50% cirlcle" className="percentage-img" />
                <div className="Percentage-text-container">
                  <p className="percentage">25%</p>
                  <p className="Completed">Completed</p>
                </div>
              </div>
            </section>
            <section className="current-chapter-container">
              <p className="current-chapter">CURRENT CHAPTER</p>
              <p className="chapter">Chapter 1</p>
              <button type="button">UPDATE PROGRESS</button>
            </section>
          </div>
        ))
      }
    </>
  );
}
export default BookList;
