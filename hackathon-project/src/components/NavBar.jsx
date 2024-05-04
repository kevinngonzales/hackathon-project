import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
<nav class="bg-black text-white font-bold p-5 flex justify-between items-center">

  <div class='flex flex-row items-center'>
    <img src="/logo.png"/> TechUp
  </div>

  <ul class="flex space-x-8">
    <li>
      <Link to="/" className="text-white">home</Link>
    </li>
    <li>
      <Link to="/math" className="text-white">math</Link>
    </li>
    <li>
      <Link to="/english" className="text-white">english</Link>
    </li>
    <li>
      <Link to="/history" className="text-white">history</Link>
    </li>
    <li>
      <Link to="/art" className="text-white">art</Link>
    </li>
    <li>
      <Link to="/science" className="text-white">science</Link>
    </li>
  </ul>
</nav>
    
  );
}

export default NavBar;
