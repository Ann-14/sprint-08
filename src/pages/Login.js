import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';

export const Login = () => {

const{login} = useContext(AppContext)
const navigate = useNavigate()
 

  const handleLogin =  () => {
    login('Lilu')

    navigate('/HomePage', {
      replace:true
    })
  };

  return (
    
      <button  className='btn btn-block' onClick={handleLogin}>
        login
      </button>
    
 
  )
}
