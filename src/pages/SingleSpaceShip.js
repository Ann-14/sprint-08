import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {Loading} from '../components/Loading'

// import { useGlobalContext } from '../Context'

export const SingleSpaceShip = () => {
  let shipId = useParams()
  const [loading, setLoading] = React.useState(false)
  const [naus, setnaus] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getSpaceShip() {
      try {
        const response = await fetch(
          `https://swapi.dev/api/starships/?page=${shipId.id}`
        )
        const data = await response.json()
        if (data.results) {
          const {
           name,
           model,
           max_atmosphering_speed:speed,

          } = data.results[0]
          
          const newCocktail = {
            name,
            model,
            speed,
            
          }
          setnaus(newCocktail)
        } else {
          setnaus(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getSpaceShip()
  }, [shipId])
  if (loading) {
    return <Loading/>
  }
  if (!naus) {
    return <h2 className='section-title'>no spaceship to display</h2>
  } else {
    const {
      name,
      model,
      speed,
      
    } = naus
    return (
      <section >
        <Link to='/' >
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          {/* <img src={image} alt={name}></img> */}
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {model}
            </p>
            <p>
              <span className='drink-data'>info :</span> {speed}
            </p>
          
           
          </div>
        </div>
      </section>
    )
  }
}
