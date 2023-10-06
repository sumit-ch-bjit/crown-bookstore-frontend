import "./bookItem.styles.scss";

const BookItem = ({ book }) => {
  const { title, author, price, description } = book;
  return (
    <div className="book-item-container">
      <h1 className="book-title">title: {title}</h1>
      <h3 className="book-author">author: {author}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BookItem;
