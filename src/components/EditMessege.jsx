import React, { useState } from "react";
import { useForm } from "react-hook-form";

function EditBook({ id, title, onUpdateBook }) {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  function handleFormSubmit(data) {
   
    let token=localStorage.getItem('REACT_TOKEN_AUTH_KEY')
    fetch(`http://127.0.0.1:5000/library/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify({
        data
      }),
    })
      .then((r) => r.json())
      .then((updatedBook) => onUpdateBook(updatedBook));
      reset()
      const reload =window.location.reload()
      reload() 
  }

  return (
    <form className="edit-message" onSubmit={handleSubmit(handleFormSubmit)}>
      <input
      className="font-body text-2xl font-bold my-4 p-1 pl-2"
        type="text"
        name="body"
        autoComplete="off"
        {...register('title', {required:true})}
      />
      <input type="submit" value="Save" className="bg-brown ml-2 p-1 px-2 rounded-md text-white"/>
    </form>
  );
}

export default EditBook;
