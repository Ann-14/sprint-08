
import React, { useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    // const { signIn } = useAuth()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password)
            //  await signIn(auth,email,password) con la funcion me obliga a hacer login 2 veces??
            console.log('you are logged in');
            navigate('/HomePage')
        } catch (error) {
            setError('failed to login')
            console.log(error.message)

        }
        setLoading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log in</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            {/* <Form.Control type='email' ref={emailRef} required /> */}
                            <Form.Control type='email' onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            {/* <Form.Control type='passwork' ref={passwordRef} required /> */}
                            <Form.Control type='passwork' onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button disabled={loading} type='submit' className='w-100' >Log in</Button>
                    </Form>
                    <div className='w-100 text-center mt-3'>
                        <Link to='/forgot-password'>Forgot password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/signup'>Sign up</Link>
            </div>
        </>
    )
}