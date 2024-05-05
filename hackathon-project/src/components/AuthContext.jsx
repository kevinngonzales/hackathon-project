import { React, createContext, useState, useContext } from "react";

//use createContext to create global state variables
//manage users logging in and out

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const login = (user) => {
    setIsLoggedIn(true);
    setUsername(user);

    console.log(user + " Signed In");
  };

  const logout = () => {
    setIsLoggedIn(false);

    console.log("Signed Out");
    setUsername("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}
