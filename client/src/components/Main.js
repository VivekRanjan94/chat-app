import { Link } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'
import { SocketProvider } from '../contexts/SocketProvider'

export default function Main() {
  const { loggedInUser } = useAuth()

  return (
    <SocketProvider id={loggedInUser.id}>
      <div>
        <Link to='/profile'>Profile</Link>
      </div>
    </SocketProvider>
  )
}
