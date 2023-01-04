import { Route,  Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { SingleSpaceShip } from "./pages/SingleSpaceShip";
import { Welcome } from "./pages/Welcome";


function App() {
  return (
<>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="welcome" element={<Welcome />} />
<Route path="spaceship/:id" element={<SingleSpaceShip/>} />
<Route path='*' element={<ErrorPage />} />

</Routes>

</>
  
  )
}

export default App;
