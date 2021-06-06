import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Main() {
  const [error, setError] = useState('')
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      history.push('/login')
      await logout()
    } catch {
      setError('Failed to log out')
    }
  }
  const { loggedInUser, logout } = useAuth()
  return (
    <>
      <div className='main-container'>
        <span>Profile</span>
        {error && <div className='error'>{error}</div>}
        <span>Email: {loggedInUser.email}</span>
        <Link to='/update-profile'>Update Profile</Link>
      </div>
      <div className='redirect-login'>
        <button className='logout' onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div className='redirect-home'>
        <Link to='/'>Home</Link>
      </div>
    </>
  )
}
