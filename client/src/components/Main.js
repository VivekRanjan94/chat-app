import { Link } from 'react-router-dom'
import { useEffect } from 'react'
// import Profile from './Profile'

import { useAuth } from '../contexts/AuthContext'

export default function Main() {
  const { loggedInUser } = useAuth()

  useEffect(() => {
    console.log(loggedInUser)
  }, [loggedInUser])

  return <Link to='/profile'>Profile</Link>
}
