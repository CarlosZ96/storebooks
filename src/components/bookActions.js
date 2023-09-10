import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import '../StyleSheets/bookactions.css';

const BookActions = ({ id }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeBook({
      getBookId: id,
    }));
  };
  return (
    <>
      <ul className="book-buttons">
        <li><button type="button" className="book-button">Comments</button></li>
        <li><button type="button" onClick={handleRemoveClick} className="book-button">Remove</button></li>
        <li><button type="button" className="book-button">Edit</button></li>
      </ul>
    </>
  );
};

BookActions.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BookActions;
