import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef()
  const nameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { signup } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setIsLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to create account')
    }
    setIsLoading(false)
  }

  return (
    <div className=''>
      <div className='signup-container card'>
        <span>Sign Up</span>
        {error && <div className='error'>{error}</div>}
        <div className='input'>
          <form onSubmit={handleSubmit}>
            <span>Email</span>
            <input type='email' required ref={emailRef} />
            <span>Name</span>
            <input type='text' required ref={nameRef} />
            <span>Password</span>
            <input type='password' required ref={passwordRef} />
            <span>Confirm Password</span>
            <input type='password' required ref={confirmPasswordRef} />
            <button disabled={isLoading} type='submit' className='btn sign-up'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className='redirect-login'>
        Already have an account? <Link to='/login'>Log In</Link>
      </div>
    </div>
  )
}
