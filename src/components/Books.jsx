import React from 'react';
import AddNewBooks from './Addnewbook.jsx';
import '../StyleSheets/books.css';

const Books = () => {
  return (
    <div className="book-container">
      <div className="cards">
        <section className="tittle-circle-container">
          <div className="book-info">
            <p>Categorie</p>
            <h2>Book example</h2>
            <p>Author</p>
            <ul>
              <li><button>Comments</button></li>
              <li><button>Remove</button></li>
              <li><button>Edit</button></li>
            </ul>
          </div>
          <div className="percentage-container">
            <img src="https://cdn-icons-png.flaticon.com/128/5698/5698579.png" alt="50% cirlcle" />
            <div className="Percentage-text-container">
              <p>Completed</p>
            </div>
          </div>
        </section>
        <section className="current-chapter-container">
          <p>Current Chapter</p>
          <p>Chapter example</p>
          <button>Update Progress</button>
        </section>
      </div>
      <AddNewBooks />
    </div>
  );
}

export default Books;
