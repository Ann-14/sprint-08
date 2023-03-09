
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import { AppProvider } from "./context/Context";
import { ErrorPage, ForgotPassword, HomePage, Login, PublicRoute, Signup, SingleSpaceShip, Welcome, PrivateRoute, UpdateProfile} from "./pages";

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
