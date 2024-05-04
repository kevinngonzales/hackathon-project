import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import Category1 from "./pages/Category1";

import Login from "./pages/Login";
import Signup from "./pages/Signup";


//using react-router-dom establish all our routes to different pages/components


function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/1" element={<Category1 />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
