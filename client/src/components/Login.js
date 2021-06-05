import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setIsLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to log in')
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className='login-container card'>
        <div className='title'>Log In</div>
        {error && <div className='error'>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div>
            <span>Email</span>
            <input type='email' required ref={emailRef} />
          </div>
          <div>
            <span>Password</span>
            <input type='password' required ref={passwordRef} />
          </div>
          <button disabled={isLoading} type='submit' className='btn'>
            Log In
          </button>
        </form>
        <div className='forgot-password'>
          <Link to='/forgot-password'>Forgot Password?</Link>
        </div>
      </div>
      <div className='redirect-login'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  )
}
