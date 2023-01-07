import { Route,  Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppProvider } from "./Context";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { SingleSpaceShip } from "./pages/SingleSpaceShip";
import { Welcome } from "./pages/Welcome";


function App() {
  return (
<>
<AppProvider>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="welcome" element={<Welcome />} />
<Route path="spaceship/:id" element={<SingleSpaceShip/>} />
<Route path='*' element={<ErrorPage />} />

</Routes>
</AppProvider>

</>
  
  )
}

export default App;
