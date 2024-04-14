import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Write from "./Pages/Write/Write";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/signup" element={ <Signup />}/>
        <Route path="/add" element={ <Write/>}/>
      </Routes>
    </div>
  );
};

export default App;
