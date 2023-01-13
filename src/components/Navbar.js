import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context'
import logo from '../logo.png'

export const Navbar = () => {
  const{user,logout} = useContext(AppContext)

  const navigate = useNavigate()

  const handleLogout = () =>{
    navigate('/login', {
      replace:true
    })
    logout();
  }

  return (
    <nav >
      <div >
        <Link to="/">
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <ul >
        <li>
          <Link to='/'>Welcome</Link>
        </li>
        <li>
          <Link to='homePage'>Spaceships</Link>
        </li>
        <div>
          <ul>
            <span>{user?.name}</span>
          <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
          </ul>
        </div>
        

      </ul>
    </nav>
  )
}
