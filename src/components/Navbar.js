import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

export const Navbar = () => {
  return (
    <nav >
      <div >
        <Link to="/">
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <ul >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='welcome'>Welcome</Link>
        </li>

      </ul>
    </nav>
  )
}
