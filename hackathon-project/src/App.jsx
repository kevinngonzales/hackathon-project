import "./App.css";
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Math from "./pages/Math";
import English from "./pages/English";
import History from "./pages/History";
import Art from "./pages/Art";
import Science from "./pages/Science";





function App() {


  return (
    <>
    <NavBar />
   
<Routes>
<Route path='/' element={<Home />}> </Route>
<Route path='/math' element={<Math />}> </Route>
<Route path='/english' element={<English />}> </Route>
<Route path='/history' element={<History />}> </Route>
<Route path='/art' element={<Art />}> </Route>
<Route path='/science' element={<Science />}> </Route>


</Routes>

    </>
  );
}

export default App;
