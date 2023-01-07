import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context'

export const SingleSpaceShip = () => {
  const {id} = useParams()
  const {shipName,shipModel,spaceShips} = useGlobalContext()


  

return (
  <section >
    
  </section>
);
}
