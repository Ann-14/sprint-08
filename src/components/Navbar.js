import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Star-Wars-logo.png'
import { useAuth } from '../pages/AuthContext'
import { SlSocialSpotify } from 'react-icons/sl';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialGithub } from 'react-icons/sl';
import { SlSocialYoutube } from 'react-icons/sl';
import { CiLogin } from 'react-icons/ci';

export const Navbar = () => {
   // const{user,logout} = useContext(AppContext)
   const [error, setError] = useState('')
   const { currentUser, logout } = useAuth()

   async function handleLogout() {
      setError('')

      try {
         await logout()
         navigate('/login')
         console.log('you are logged out')
      } catch (error) {
         setError('Failed to log out')
      }
   }

   const navigate = useNavigate()

   return (
      <header className=" ">

         {/*------------ Left social icons------------ */}
         <div>
            <nav className="flex flex-row justify-between text-white py-8 px-10 ">

               <ul className="flex list-none gap-4">
                  <li className=''>< SlSocialSpotify className='yellow' /> </li>
                  <li className=''>< SlSocialInstagram className='yellow' /></li>
                  <li className=''>< SlSocialGithub className='yellow' /></li>
                  <li className=''>< SlSocialYoutube className='yellow' /></li>
               </ul>

               {/* ------------Hero image ------------*/}
               <div >

                  <img className='flex w-72  ' alt='starwars logo' src={logo}></img>
                  {/* <img className="  " src={logo} alt="web logo " /> */}

               </div>
               {/* ------------Right Buttons------------*/}
               <div >
                  <div className='flex gap-3'>
                     <button className=" p-2  hover:underline flex">
                        {currentUser ?
                           <button variant='link' onClick={handleLogout}>LOG OUT</button> : <Link to='/login'  className='flex'> <CiLogin className='login-icon'></CiLogin>LOG IN</Link>}
                     </button>
                     <button className="bg-transparent p-2 rounded border border-gray-300 mr-4 hover:bg-yellow-400 hover:text-black"><Link to='/signup'>SIGN UP</Link></button>
                  </div>
               </div>

            </nav>
         </div>
         {/* ------------Hero section links------------*/}
         <section>
            <ul className="flex list-none gap-3  md:text-2xl p-2 mt-4 md:justify-center md:mb-5">
               <li><Link to='/' className="no-underline list-none md:m-5 hover:text-yellow-400 ">HOME</Link></li>
               <li><Link to='/homePage' className="no-underline list-none   md:m-5 hover:text-yellow-400">SPACESHIPS</Link></li>
               <li><Link to='/update-profile' className="no-underline list-none md:m-5 hover:text-yellow-400">MY PROFILE</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">DISNEY +</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">INTERACTIVE</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">KIDS</Link></li>
               <li><Link to='/' className="no-underline list-none hover:text-yellow-400  md:m-5">SERIES</Link></li>
            </ul>
         </section>
      </header>
   )
}
