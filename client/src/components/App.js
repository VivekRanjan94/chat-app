import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext'
import PrivateRoute from '../PrivateRoute'
import Login from './Login'
import Signup from './Signup'
import ForgotPassword from './ForgotPassword'
import Main from './Main'
import UpdateProfile from './UpdateProfile'
import Profile from './Profile'

export default function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={Main} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  )
}
