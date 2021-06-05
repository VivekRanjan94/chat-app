import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ForgotPassword() {
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef()
  const { resetPassword } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setMessage('')
      setIsLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check email for further instructions')
    } catch {
      setError('Failed to reset password')
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className='login'>
        <span>Log In</span>
        {error && <div className='error'>{error}</div>}
        {message && <div className='message'>{message}</div>}
        <div className='input'>
          <form onSubmit={handleSubmit}>
            <span>Email</span>
            <input type='email' required ref={emailRef} />
            <button disabled={isLoading} type='submit' className='btn sign-up'>
              Reset Password
            </button>
          </form>
          <div className='login'>
            <Link to='/login'>Log In</Link>
          </div>
        </div>
      </div>
      <div className='redirect-login'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </div>
    </>
  )
}
