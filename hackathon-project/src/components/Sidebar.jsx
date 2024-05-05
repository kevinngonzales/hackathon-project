import { React, useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import UserProfile from "../components/UserProfile";

import { useAuth } from "../components/AuthContext";

// sidebar component which holds links to different pages as-well as login/signup buttons which direct to respective pages

function Sidebar() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="fixed bg-slate-800/[0.6] h-full w-80 transition-all hover:bg-slate-800 flex flex-col justify-between">
      <input
        class="border-white border-2 bg-slate-200/[0.1] text-white rounded-xl h-16 transition-all m-4"
        type="text"
        placeholder="Search"
      />

      <ul className="flex-col h-full content-start p-3 ml-3 space-y-6">
        <li className="rounded-xl transition-all hover:bg-pink h-12 pl-2 flex items-center">
          <Link to="/" className="text-white flex items-center">
            <img src="/logo.svg" class="h-9 mr-2" />
            AI Generator
          </Link>
        </li>
        <li className="rounded-xl transition-all hover:bg-pink h-12 pl-2 flex items-center">
          <Link to="/discover" className="text-white flex items-center">
            <img src="/discover.svg" className="mr-2" />
            Discover
          </Link>
        </li>
        <hr></hr>
      </ul>

      {/* conditionally render signup/login buttons depending on isloggedin state */}

      {!isLoggedIn && (
        <div className="flex-col pt-56 rounded-lg ">
          <Link to="/signup">
            <button className="flex justify-center bg-secondary p-2 rounded-xl w-10/12 ml-5 bg-slate-500[0.1] transition-all hover:bg-tertiary/[0.5]">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="flex justify-center p-2 rounded-xl w-10/12 bg-slate-500[0.1] transition-all hover:bg-tertiary/[0.5] border-2 mt-2 ml-5 mb-7">
              Login
            </button>
          </Link>
        </div>
      )}

      <UserProfile />

      <LogoutButton />
    </div>
  );
}

export default Sidebar;
