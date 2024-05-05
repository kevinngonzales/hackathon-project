import { React, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../components/AuthContext";

//login functionality using axios to post data to database and using react-router-dom to redirect to another page when user is logged in
//conditional statement to check whether a user already exists

function Login() {
  const navigate = useNavigate();

  const { isLoggedIn, login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/login", {
      email,
      password,
    });

    if (response.data.status === "exist") {
      const { name } = response.data;
      login(name);
      navigate("/", { state: { id: email } });
    } else if (response.data === "notexist") {
      alert("User has not signed up");
    }
  }
  return (
    <div class="ml-64 flex flex-col h-screen mr-10">
      <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full  md:mt-0 sm:max-w-md xl:p-0 ">

          <div class='flex justify-center pt-12'>
                <img src="logo.svg"></img>
              </div>

            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="flex justify-center text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                Welcome Back!
              </h1>
              {isLoggedIn ? (
                <p>You are already logged in!</p>
              ) : (
                <form class="space-y-4 md:space-y-6" action="POST">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="hover:bg-gray-400  transition-all bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 hover:bg-gray-400  transition-all dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    class="w-full transition-all hover:bg-tertiary/[0.5] text-white bg-secondary h-12 rounded-xl dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={submit}
                  >
                    Sign in
                  </button>

                  <div class="flex justify-center space-x-1 text-md">
                      <div>Dont't have an account?</div>
                      <Link class="text-tertiary" to="/login">
                        Sign up
                      </Link>
                    </div>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
