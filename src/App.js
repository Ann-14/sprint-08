
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppProvider } from "./Context";
import AuthProvider from "./pages/AuthContext";
import { ErrorPage } from "./pages/ErrorPage";
import { ForgotPassword } from "./pages/ForgotPassword";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import { PublicRoute } from "./pages/PublicRoute";
import { Signup } from "./pages/Signup";
import { SingleSpaceShip } from "./pages/SingleSpaceShip";
import { UpdateProfile } from "./pages/UpdateProfile";
import { Welcome } from "./pages/Welcome";


function App() {

  return (
    <AuthProvider>
      <AppProvider>
        <Navbar />
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
          <Route path="/update-profile" element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          } />
          <Route path="spaceship/:id" element={<SingleSpaceShip />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AppProvider>
    </AuthProvider>
  )
}

export default App;
