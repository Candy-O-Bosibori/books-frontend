import React from "react";
import pagepal from "/src/assests/pagepal.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../../auth"


const Login = () => {


  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitForm = (data) => {
    const body = {
        username: data.username,
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
      fetch('http://127.0.0.1:5000/auth/login', options)
        .then((res) => res.json())
        .then((data) => login(data.access_token),
        
           navigate('/'))
        .catch((err) = console.log(err));
    reset()
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="#"
            className="flex font-body items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={pagepal} alt="logo" />
            Pagepal
          </Link>
          <div className="w-full bg-light rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl  font-body text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="username"
                    className="block font-body mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="usrename"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="username"
                    {...register("username", { required: true})}
                   
                  />
                  {errors.username && <span className="font-body text-red-500"><small>Username is required</small></span>}
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 font-body text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    {...register("password", { required: true})}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                  />
                   {errors.password && <span className="font-body text-red-500"><small>Password is required</small></span>}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="text-sm font-light text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-db hover:bg-brown focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"

                  onClick={handleSubmit(submitForm)}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium ml-2 text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
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

export default Login;
