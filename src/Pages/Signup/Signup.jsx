import React, { useState } from "react";
import pagepal from "/src/assests/pagepal.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  // states for paswor username and email

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // when the form is submited, iwas to fetch url, the post, headers
  const submitForm = (data) => {
    console.log(data);

    const body = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };
    // fetch
    fetch('http://127.0.0.1:5000/auth/signup', options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) = console.log(err));

    reset();
  };

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="#"
            class="flex font-body items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-8 h-8 mr-2 " src={pagepal} alt="logo" />
            Pagepal
          </Link>
          <div class="w-full bg-light rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold  font-body leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                WELCOME!!
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="username"
                    class="block font-body mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="usrename"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="username"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="font-body text-red-500">
                      <small>Username is required</small>
                    </span>
                  )}
                </div>

                <div>
                  <label
                    for="email"
                    class="block font-body mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="font-body text-red-500">
                      <small>Email is required</small>
                    </span>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    class="block font-body mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    {...register("password", { required: true, minlength: 8 })}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.password && (
                    <span className="font-body text-red-500">
                      <small>Pasword is required</small>
                    </span>
                  )}
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start"></div>
                  <Link
                    href="#"
                    class="text-sm font-light text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-db hover:bg-brown focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={handleSubmit(submitForm)}
                >
                  Create Account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="/login"
                    class="font-medium pl-2 ml- text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
