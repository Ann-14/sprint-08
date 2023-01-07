import React from 'react'
import { useGlobalContext } from '../Context'

export const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('')

  const searchSpaceShip = () => {
    setSearchTerm(searchValue.current.value)
  }
const handleSubmit = (e) =>{
  e.preventDefault()
}
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor='name'>Search your favourite spaceship</label>
          <input type='text' id='name' ref={searchValue}onChange={searchSpaceShip}></input>
        </div>
      </form>
    </section>
  )
}
