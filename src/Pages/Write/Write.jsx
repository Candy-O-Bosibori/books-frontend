import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Add({ onAddBook}) {
 
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
    

  function createBook(data) {
    console.log(data)
    
    
    fetch("http://127.0.0.1:5000/library/books", {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${JSON.parse(token)}`
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((newBook) => {
        onAddBook(newBook);
     
        reset()

      });
  }

  return (
    <div className="bg-ld p-32">
      <h2 className="text-center font-body font-bold mt-10 text-4xl"> Add A book </h2>
      <div className="flex items-center justify-center">
      
      <form className="my-2" onSubmit={handleSubmit(createBook)}>
      <input
        type="text"
        name="title"
        autoComplete="off"
        
        placeholder="Title"
        
        class="block w-full p-2 px-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...register('title', {required:true})}
      />
      <br />
       <input
        type="text"
        name="image"
        autoComplete="off"
        placeholder="Image  URL"
       
        {...register('image', {required:true})}
        class="block w-full p-2 px-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <br />
      
      <button type="submit" className="p-1 px-6 justify-center align-middle bg-brown rounded text-white ml-5">Send</button>
    </form>
    </div>
    </div>
  );
}

export default Add;

