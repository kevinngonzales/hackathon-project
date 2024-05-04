import { React, useState } from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";


// sidebar component which holds links to different pages as-well as login/signup buttons which direct to respective pages

function Sidebar() {

  return (
    <div className="fixed bg-slate-800/[0.6] h-full w-56 transition-all hover:bg-slate-800 flex flex-col justify-between">

<Link to="/" className="text-white">
      <div className="bg-slate-800 radius flex p-8">
        <img src="/logo.png" alt="Logo" />
        <span className="text-2xl content-center ml-2">TechUp</span>
      </div>
</Link>

      <ul className="flex-col h-full content-start p-3 ml-3 space-y-10">
        <li>
          <Link to="/discover" className="text-white">
            Discover
          </Link>
        </li>

      </ul>

      <div className="flex-col pt-56">
        <Link to="/Signup">
          <button className="flex justify-center bg-secondary p-2 rounded-xl w-44 ml-5">
            Signup
          </button>
        </Link>
        <Link to="/Login">
          <button className="flex justify-center bg-slate-780 p-2 rounded-xl w-44 border-gray-600 border-4 mt-2 ml-5 mb-4">
            Login
          </button>
        </Link>

<LogoutButton />
      </div>
    </div>
  );
}

export default Sidebar;
