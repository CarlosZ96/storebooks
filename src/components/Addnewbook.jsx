import React from 'react';

const AddNewBooks = () => {
  return (
    <div>
      <input type="text" />
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