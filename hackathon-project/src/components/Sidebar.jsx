import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
<div class="fixed bg-slate-800/[0.6] h-full w-56 transition-all hover:bg-slate-800">

  <div className='flex p-3'>
    <img src="/logo.png"/> 
    <span class='text-2xl content-center ml-2'>TechUp</span>
  </div>

  <ul class=" flex-col h-full content-start p-3 ml-3 space-y-10">
    <li>
      <Link to="/" className="text-white">Home</Link>
    </li>
    <li>
      <Link to="/1" className="text-white">category1</Link>
    </li>
    <li>
      <Link to="/2" className="text-white">category2</Link>
    </li>
    <li>
      <Link to="/3" className="text-white">category3</Link>
    </li>
    <li>
      <Link to="/4" className="text-white">category4</Link>
    </li>
    <li>
      <Link to="/5" className="text-white">category5</Link>
    </li>
  </ul>
</div>
    




</>
    
  );
}

export default Sidebar;
