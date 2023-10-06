import BookItem from "../bookItem/bookItem.component";

import "./directory.styles.scss";

const Directory = ({ books }) => {
  return (
    <div className="directory-container">
      {books.map((book) => (
        <BookItem key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Directory;
