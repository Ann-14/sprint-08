import React, { useContext, useEffect, useReducer, useState } from 'react'
import axios from "axios";
import { authReducer } from './auth/authReducer';
import { types } from './auth/types/types';


const AppContext = React.createContext()



const init = () =>{
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        logged:!!user,
        user:user,
    }

}
const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [spaceShips, setSpaceShips] = useState([])
    const [pages, setPages] = useState(1)
    const [urlShip, setUrlShip] = useState("");
    const [shipIdContext, setShipIdContext] = useState('')
    

    const handleNextPage = () => {
        setPages(pages => pages + 1)
    }
    const handlePreviousPage = () => {
        setPages(pages => pages - 1)
    }

    const fetchSpaceShips = async (page) => {
        setLoading(true)
        try {
            const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`)
            const { results } = response.data;
            console.log(results)

            if (results) {

                const newSpaceShips =
                    results.map((item) => {
                        const {
                            name,
                            model,
                            url,
                            manufacturer,
                            max_atmosphering_speed: max_speed,
                            cost_in_credits: cost,
                            length,
                            passengers
                        } = item
                        return {
                            name, model, url, manufacturer, max_speed, cost, length, passengers
                        }
                    })

                setSpaceShips(newSpaceShips)

            } else {
                setSpaceShips([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchSpaceShips(pages)


    }, [pages])

//authentication with useReducer
    const [authState, dispatch] = useReducer(authReducer,{},init);

    
    const login = (name='') =>{
        const user = {id:'abc', name}
        const action = {
            type:types.login,
            payload:user
        }
        localStorage.setItem('user',JSON.stringify(user) )

        dispatch(action)
    }

const logout = () =>{
    localStorage.removeItem('user')
    const action = {type:types.logout}
    dispatch(action)
}

    return (
        <AppContext.Provider value={{
            loading,
            spaceShips,
            handleNextPage,
            handlePreviousPage,
            urlShip,
            setUrlShip,
            shipIdContext,
            setShipIdContext,
            ...authState,
            login:login,
            logout,
            

        }}>

            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }