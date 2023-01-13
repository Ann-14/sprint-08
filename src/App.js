import { Route,  Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { AppProvider, useGlobalContext } from "./Context";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import { PublicRoute } from "./pages/PublicRoute";

import { SingleSpaceShip } from "./pages/SingleSpaceShip";
import { Welcome } from "./pages/Welcome";


function App() {

  return (
<>
<AppProvider>
<Navbar/>
<Routes>

<Route path="login" element={
  <PublicRoute>
    <Login></Login>
  </PublicRoute>
} />

<Route path="/" element={<Welcome />} ></Route>
<Route path="/HomePage" element={
  <PrivateRoute>
    <HomePage></HomePage>
  </PrivateRoute>
} />
{/* <Route path="/HomePage" element={<HomePage/>} />*/}
 
<Route path="spaceship/:id" element={<SingleSpaceShip/>} />
 {/* <Route path="login" element={<Login />} />  */}
<Route path='*' element={<ErrorPage />} />

</Routes>
</AppProvider>

</>
  
  )
}

export default App;
