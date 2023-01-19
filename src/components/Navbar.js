import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context'
import logo from '../logo.png'
import { useAuth } from '../pages/AuthContext'

export const Navbar = () => {
  // const{user,logout} = useContext(AppContext)

  

  // const handleLogout = () =>{
  // }
  const {currentUser} = useAuth()

  return (
    // <nav >
    //   <div >
    //     <Link to="/">
    //       <img src={logo} alt='logo' />
    //     </Link>
    //   </div>
    //   <ul >
    //     <li>
    //       <Link to='/'>Welcome</Link>
    //     </li>
    //     <li>
    //       <Link to='homePage'>Spaceships</Link>
    //     </li>
    //     <div>
    //       <ul>
    //         <span>{user?.name}</span>
    //       <li>
    //       <button onClick={handleLogout}>Logout</button>
    //     </li>
    //       </ul>
    //     </div>
        
    //   </ul>
    // </nav>



<nav id="header" class="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 ">
      <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         <input class="hidden" type="checkbox" id="menu-toggle" />
         
         <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                  <li> <Link to='/'>Welcome</Link></li>
                  <li> <Link to='homePage'>Spaceships</Link></li>
                  <li> <span>{currentUser?.email}</span></li>
               </ul>
            </nav>
         </div>
         
         <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full">
               <button class="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
               <button class="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">Sign up</button>
            </div>
         </div>
      </div>
   </nav>
  )
}
