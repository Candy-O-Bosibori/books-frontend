import { useEffect, useState } from "react";
import React  from "react";
import book from "/src/assests/book.jpg"
import Search from "../../components/Search";
import BookList from "../../components/BookList";
import Add from "../Write/Write";

const Home = () => {
const[books, setBooks]=useState([]);
const [search, setSearch] = useState("");

useEffect(
  ()=>{
    fetch('http://127.0.0.1:5000/library/books')
    .then((res) => res.json())
    .then((data) => setBooks(data))

  },[]
)

function handleAddBook(newBook) {
  setBooks([...books, newBook]);
}

function handleUpdateBook(updatedBookObj) {
  const updatedBooks = books.map((book) => {
    if (book.id === updatedBookObj.id) {
      return updatedBookObj;
    } else {
      return book;
    }
  });
  setBooks(updatedBooks);
}
function handleDeleteBook(id) {
  const updatedBooks = books.filter((book) => book.id !== id);
  setBooks(updatedBooks);
}

// displayed books
const displayedBooks = books.filter((book) =>
book.title.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div className="px-6 md:px-12 lg:px-[120px] flex flex-col pt-5 bg-light h-max dark:bg-dm ">

      <div className="flex flex-col md:flex-row justify-evenly font-sans">
        <div className="flex flex-col justify-center space-y-4  ml-5 p-6">
          <h1 className="text-md md:text-3xl text-center lg:text-4xl font-body font-bold text-dm dark:text-white">
          "Discover, Read, Repeat"
          </h1>
        
          <p className="text-lg font-body text-center text-dm dark:text-white">

          "Track your books and share with others. Join our community to discover new reads, connect with fellow book lovers, and engage in lively discussions. Start building your book network now!"
          </p>
          <div className="flex justify-center mt-5" >
            <a  href="/signup" >
              <button className="text-lg bg-db hover:bg-brown mb-5 font-serif text-white py-2 px-4 w-48 rounded-lg h-12 font-medium transition-colors  hover:shadow-2xl duration-200 ease-in-out">
                Get Started
              </button>
            </a>
          </div>
        </div>
        <img
          src={book}
          alt="Bg"
          className="ml-5  md:block md:w-96 md:h-80 lg:w-[500px] lg:h-[500px] mt-6 md:mt-0"
        />
      </div>

       <section id="section1" className="py-5 mt-6 md:px-8">
        <h2 className="text-center font-body font-bold text-2xl underline"> About us</h2>
       <p className="text-center font-body">
Welcome to our world of storytelling, where we strive to bring back the sweet art of storytelling, as told by our fellow Kenyans. Dive into captivating narratives that reflect the rich culture, diversity, and spirit of Kenya, woven into tales that resonate with readers of all backgrounds. Join us on a journey through the heart of Kenya's stories, where every page is infused with the essence of our people and our land.

</p>
    </section>
    <Search search={search} onSearchChange={setSearch} />
    <BookList
        books={displayedBooks}
        // currentUser={testUser}
        onBookDelete={handleDeleteBook}
        onUpdateBook={handleUpdateBook}
      />
      < Add onAddBook={handleAddBook} />
    
    
    </div>
  );
};

export default Home