import React, { useContext, useEffect, useState } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    // const [searchTerm, setSearchTerm] = useState('2')
    const [loading, setLoading] = useState(true)
    const [spaceShips, setSpaceShips] = useState([])
const [shipName, setShipName] = useState('')
const [shipModel, setShipModel] = useState('')

  const url = 'https://swapi.py4e.com/api/starships/'
    const fetchSpaceShips = async () => {
        setLoading(true)
        try {
            // const response = await fetch(`${url}${searchTerm}`)
            // const response = await fetch(`${url}`)
            const response = await fetch (`${url}`)
            const data = await response.json()
            
            const { results } = data;
            
            // console.log(results)
            if (results) {

                const newSpaceShips =
                    results.map((item) => {
                        const { name, model,url } = item
                        return {
                            name, model,url
                        }
                    })
                    
                   

                setSpaceShips(newSpaceShips)
                setShipModel(newSpaceShips.model)
                setShipModel(newSpaceShips.name)


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
        fetchSpaceShips()
       
                              
    }, [])


console.log(shipModel)

    return (
        <AppContext.Provider value={{
            loading,
            spaceShips,
            shipModel,
            shipName,
           
            url
            // searchTerm,
            // setSearchTerm
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }