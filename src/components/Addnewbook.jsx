import React from 'react';
import '../StyleSheets/newbook.css';


const AddNewBooks = () => {
  return (
    <div className="add-new-book">
      <input type="text" className="new-book-input" placeholder="Book Tittle" />
      <form>
        <select>
          <option >Action</option>
          <option >Romance</option>
          <option >Fantasy</option>
          <option >Mystery</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default AddNewBooks;