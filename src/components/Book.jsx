import React, { useState } from "react";
import EditBook from "./EditMessege";

function Book({ book, onBookDelete, onUpdateBook }) {
  const [isEditing, setIsEditing] = useState(false);

  const { id, image, title } = book;


  function handleDeleteClick() {
    fetch(`http://127.0.0.1:5000/library/books/${id}`, {
      method: "DELETE",
    });

    onBookDelete(id);
  }

  function handleUpdateBook(updatedBook) {
    setIsEditing(false);
    onUpdateBook(updatedBook);
  }

  return (
    <li className="p-4  flex justify-center flex-col  items-center shadow-xl dark:shaddow-2xl rounded  transition-all duration-300 cursor-pointer">
      <img src={image} alt=""  className="h-96 w-80 "/>
      {isEditing ? (
        <EditBook
          id={id}
          title={title}
          onUpdateBook={handleUpdateBook}
        />
      ) : (
        <p className="font-body text-2xl font-bold my-4">{title}</p>
      )}
      {
        <div className="actions">
          <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit"  className="mr-5  hover:brown py-1 px-5 rounded-md text-white  bg-db">
              Edit
            </span>
          </button>
          <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete " className="ml-5  hover:brown py-1 px-5 rounded-md text-white  bg-db">
              Delete
            </span>
          </button>
        </div>
      }
    </li>
  );
}

export default Book;
