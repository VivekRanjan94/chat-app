import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import { useAuth } from '../contexts/AuthContext'

export default function Main() {
  const { loggedInUser } = useAuth()

  return <Link to='/profile'>Profile</Link>
}
