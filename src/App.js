import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Book from './components/BooksIndividual';
import Categories from './components/Categories';
import { getBooks } from './redux/books/booksSlice';
import userIcon from './components/userIcon.png';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="nav-container">
        <div className="Header-Container">
          <h1 className="Tittle">CZ BookStore</h1>
          <ul className="books-menu">
            <Link to="/"><li className="menu">BOOKS</li></Link>
            <Link to="/categories"><li className="menuc">CATEGORIES</li></Link>
          </ul>
        </div>
        <img src={userIcon} alt="user icon" className="user-icon" />
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
