import React from 'react'
import { useAuth } from "./AuthContext";


//logout button useAuth to change isLoggedIn state globally
function LogoutButton() {
    const { isLoggedIn, logout } = useAuth(); 

    function handleLogout() {
      logout();
      console.log(isLoggedIn);
    }
  return (
    <button onClick={handleLogout} className="flex justify-center bg-slate-780 p-2 rounded-xl w-44 border-gray-600 border-4 mt-2 ml-5 mb-4">
    Logout
  </button>
  )
}

export default LogoutButton