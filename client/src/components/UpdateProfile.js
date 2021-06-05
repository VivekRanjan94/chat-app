import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function UpdateProfile() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const { loggedInUser, updateEmail, updatePassword } = useAuth()
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match')
    }

    const promises = []
    setIsLoading(true)
    setError('')
    if (emailRef.current.value !== loggedInUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }

    if (passwordRef.current.value !== '') {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push('/')
      })
      .catch(() => {
        setError('Failed to update profile')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <div className='signup'>
        <span>Update Profile</span>
        {error && <div className='error'>{error}</div>}
        <div className='input'>
          <form onSubmit={handleSubmit}>
            <span>Email</span>
            <input
              type='email'
              required
              ref={emailRef}
              defaultValue={loggedInUser.email}
            />
            <span>Password</span>
            <input
              type='password'
              ref={passwordRef}
              placeholder='Leave blank to keep same'
            />
            <span>Confirm Password</span>
            <input
              type='password'
              ref={confirmPasswordRef}
              placeholder='Leave blank to keep same'
            />
            <button disabled={isLoading} type='submit' className='btn sign-up'>
              Update
            </button>
          </form>
        </div>
      </div>
      <div className='redirect-login'>
        <Link to='/'>Cancel</Link>
      </div>
    </>
  )
}
