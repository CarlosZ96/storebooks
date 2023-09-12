import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
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
            <NavLink to="/"><li className="menu">BOOKS</li></NavLink>
            <NavLink to="/categories"><li className="menuc">CATEGORIES</li></NavLink>
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
