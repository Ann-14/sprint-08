import React, { useState } from 'react'
import { useRef } from 'react'
import {  Form, Card, Button, Alert } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'

import { auth } from "../firebase";
import { updateEmail,updatePassword} from "firebase/auth";
import { useAuth } from './AuthContext'


 export const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const{currentUser}= useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleSubmit =  (e) =>{
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('passwords do not match')
        }
        

const promises = []
setLoading(true)
setError('')
if(emailRef.current.value !== currentUser.email){
    promises.push(updateEmail(auth.currentUser, emailRef.current.value))
}
if(passwordRef.current.value){
    promises.push(updatePassword(auth.currentUser, passwordRef.current.value))
}
Promise.all(promises).then(()=>{
    navigate('/HomePage')
}).catch(()=>{
    setError('failed to update acount')
}).finally(()=>{
    setLoading(false)
})

 }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Update Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} defaultValue={currentUser.email} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='passwork' ref={passwordRef} placeholder='leave blank to keep the same'  />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} placeholder='leave blank to keep the same'  />
                        </Form.Group>
                        <Button disabled={loading} type='submit' className='w-100' >Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                 <Link to='/'>Cancel</Link>
            </div>
        </>
    )
}
