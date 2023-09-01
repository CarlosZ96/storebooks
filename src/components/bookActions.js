import React from 'react'
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import PropTypes from 'prop-types';

const BookActions = ({id}) => {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <ul className="book-buttons">
        <li><button type="button" className="book-button">Comments</button></li>
        <li><button type="button" onClick={handleRemoveClick} className="book-button">Remove</button></li>
        <li><button type="button" className="book-button">Edit</button></li>
      </ul>
    </>
  )
}

BookActions.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BookActions;