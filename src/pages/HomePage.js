import React, { useState } from 'react'
// import { SearchForm } from '../components/SearchForm'
import { SpaceShipsList } from '../components/SpaceShipsList'

import { Alert, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'




export const HomePage = () => {
  const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();

    async function handleLogout () {
        setError('')
        
        try {
            await logout()
            navigate('/login')
            console.log('you are logged out')
        } catch (error) {
            setError('Failed to log out')
        }
    }
  return (
    <>
    <div>
    <SpaceShipsList />
    <div>
                    <h2 className='text-center'>Profile</h2>
                    {error && <Alert variant='danger'>
                        {error}</Alert>}
                    <strong>Email:</strong>{currentUser.email}
                    <Link to='/update-profile' className='btn'>Update profile</Link>
                </div>
                <Button variant='link' onClick={handleLogout}>Logout</Button>
            </div>
            
   </>
  )
}
