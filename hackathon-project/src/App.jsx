import "./App.css";
import {Routes, Route} from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";
import Category3 from "./pages/Category3";
import Category4 from "./pages/Category4";
import Category5 from "./pages/Category5";





function App() {


  return (
    <>
    <Sidebar />
   
<Routes>
<Route path='/' element={<Home />}> </Route>
<Route path='/1' element={<Category1 />}> </Route>
<Route path='/2' element={<Category2 />}> </Route>
<Route path='/3' element={<Category3 />}> </Route>
<Route path='/4' element={<Category4 />}> </Route>
<Route path='/5' element={<Category5 />}> </Route>
</Routes>

    </>
  );
}

export default App;
