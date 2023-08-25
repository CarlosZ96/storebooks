import React from 'react';
import '../StyleSheets/newbook.css';

function AddNewBooks() {
  return (
    <div className="add-new-book">
      <input type="text" className="new-book-input" placeholder="Book Tittle" />
      <form className="categorie">
        <select>
          <option>Action</option>
          <option>Romance</option>
          <option>Fantasy</option>
          <option>Mystery</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddNewBooks;
