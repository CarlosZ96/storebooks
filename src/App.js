import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Book from './components/BooksIndividual';
import Categories from './components/Categories';
import { getBooks } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="Header-Container">
        <h1 className="Tittle">CZ BookStore</h1>
        <ul className="books-menu">
          <Link to="/"><li className="menu">BOOKS</li></Link>
          <Link to="/categories"><li className="menuc">CATEGORIES</li></Link>
        </ul>
      </header>
      <div className="body-books">
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
