import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../Context"


const PrivateRoute = ({children}) => {
    const {logged} = useContext(AppContext)

    return (logged) ? children : <Navigate to='/login'></Navigate>
 
}

export default PrivateRoute