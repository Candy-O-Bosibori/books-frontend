import React from "react";
import { Link } from "react-router-dom";
import pagepal from "/src/assests/pagepal.png";
import { useAuth , logout} from "../auth";

const LoggedInLinks = () => {
  return (
    <>
      <div className="px-3 pb-2 bg-ld pt-1 mt-0">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 mt-2 ">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="">
                <img src={pagepal} height="40" width="40" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            <Link
              to="/"
              className="font-bold font-body text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/add"
              className="font-bold font-body text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Add a Book
            </Link>
          </div>
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex">
              <a
                href="#"
                className="inline-flex  font-bold font-body items-center px-4 py-2 border border-transparent text-base leading-6 text-db hover:text-brown focus:outline-none transition duration-150 ease-in-out"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </a>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

const LoggedOutLinks = () => {
  <>
    <div className="px-3 pb-2 bg-ld pt-1 mt-0">
      <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 mt-2 ">
        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="">
              <img src={pagepal} height="40" width="40" />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:space-x-10">
          <Link
            to="/"
            className="font-bold font-body text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
          >
            Home
          </Link>
          <div className="px-3 pb-2 bg-ld pt-1 mt-0">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center py-6 mt-2 ">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0 ">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="">
                    <img src={pagepal} height="40" width="40" />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                <Link
                  to="/"
                  className="font-bold font-body text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="font-bold font-body text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About
                </Link>
                <Link
                  to="#"
                  className="font-bold font-body text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Library
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span className="inline-flex">
            <Link
              to="/login"
              className="inline-flex  font-bold font-body items-center px-4 py-2 border border-transparent text-base leading-6 text-db hover:text-brown focus:outline-none transition duration-150 ease-in-out"
            >
              Login
            </Link>
          </span>
          <span className="inline-flex rounded-md shadow ml-2 ">
            <Link
              to="/signup"
              className="inline-flex font-bold font-body items-center px-4 py-2 border border-transparent text-base leading-6  rounded-md text-white bg-db hover:bg-brown focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
            >
              Sign up
            </Link>
          </span>
        </div>
      </nav>
    </div>
  </>;
};

const Navbar = () => {
  const [logged] = useAuth();

  return <div>{logged ? <LoggedInLinks /> : <LoggedOutLinks />}</div>;
};

export default Navbar;
