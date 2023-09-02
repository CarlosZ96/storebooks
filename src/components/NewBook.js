import React, { useState } from 'react';
import '../StyleSheets/newbook.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import { nanoid } from '@reduxjs/toolkit';

function AddNewBooks() {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');

  const EventListener = (e) => {
    if (e.target.placeholder === 'Book Title') {
      setTitleValue(e.target.value);
    } else {
      setAuthorValue(e.target.value);
    }
  };

  const AddBookListener = () => {
    dispatch(addBook({
      id: nanoid(),
      title: titleValue,
      completed: '0%',
      author: authorValue,
      category: 'action',
      chapter: '1',
    }));
    setTitleValue('');
    setAuthorValue('');
  };

  return (
    <div className="add-new-book">
      <input type="text" className="new-book-input" placeholder="Book Title" onChange={EventListener} />
      <input type="text" className="new-book-input" placeholder="Book Author" onChange={EventListener} />
      <form className="categorie">
        <select>
          <option>Action</option>
          <option>Romance</option>
          <option>Fantasy</option>
          <option>Mystery</option>
        </select>
        <button type="button" onClick={AddBookListener}>Add Book</button>
      </form>
    </div>
  );
}

export default AddNewBooks;
