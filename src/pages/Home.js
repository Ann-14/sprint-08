import React from 'react'
import { SearchForm } from '../components/SearchForm'
import { SpaceShipsList } from '../components/SpaceShipsList'

export const Home = () => {
  return (
    <main>
    <SearchForm />
    <SpaceShipsList />
   </main>
  )
}
