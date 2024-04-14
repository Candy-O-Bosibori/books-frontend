import React from "react";

import Book from "./Book";

function BookList({
  books,
  onBookDelete,
  onUpdateBook,
}) {
  return (
    <div className="list">
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            onBookDelete={onBookDelete}
            onUpdateBook={onUpdateBook}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
