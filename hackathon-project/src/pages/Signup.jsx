import { React, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../components/AuthContext";

//signup functionality, posting name, email, and password user inputs and storing it in database
//conditional statement to check whether a user already exists

function Signup() {
  const navigate = useNavigate();

  const { isLoggedin, login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
        name,
      });

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        await axios.post("http://localhost:8000/login", {
          email,
          password,
        });

        login(name);

        console.log("User Logged In");

        navigate("/", { state: { id: email } });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div class=" bg-purple-50 text-black">
      <div class="bg-purple-50 text-black ml-64 flex flex-col h-screen mr-10">
        <section>
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full md:mt-0 sm:max-w-md xl:p-0 transition-all">
              <div class="flex justify-center pt-12">
                <img src="logo.svg"></img>
              </div>

              <div class="p-6 space-y-4 md:space-y-4 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                  <div class="flex text-black justify-center">Sign Up</div>
                </h1>
                {isLoggedin ? (
                  <p>You are already logged in!</p>
                ) : (
                  <form class="space-y-4 md:space-y-6" action="POST">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium dark:black"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="hover:bg-gray-200  transition-all bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>

                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium dark:text-black"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="hover:bg-gray-200  transition-all bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="hover:bg-gray-200  transition-all bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      class="w-full text-white bg-secondary h-12 rounded-xl transition-all hover:bg-primary/[0.8] dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={submit}
                    >
                      Sign up
                    </button>
                    <div class="flex justify-center space-x-1 text-md">
                      <div>Already have an account?</div>
                      <Link class="text-pink" to="/login">
                        Login Here
                      </Link>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
