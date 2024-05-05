import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Discover from "./pages/Discover";
import DiscoverWeb from "./pages/DiscoverWeb";
import DiscoverCyber from "./pages/DiscoverCyber";
import DiscoverData from "./pages/DiscoverData";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

//using react-router-dom establish all our routes to different pages/components

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/discoverWeb" element={<DiscoverWeb />}></Route>
        <Route path="/discoverCyber" element={<DiscoverCyber />}></Route>
        <Route path="/discoverData" element={<DiscoverData />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
