import React, {Fragment} from 'react'

// Import Modules
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Import Utils
import setAuthToken from './utils/setAuthToken'

// Import Private Route
import PrivateRoute from './components/routing/PrivateRoute'

// Import Layouts
import Navbar from './components/layouts/Navbar'
import Alerts from './components/layouts/Alerts'

// Import Static Pages
import Home from './components/pages/Home'
import About from './components/pages/About'

// Import Components
import Register from './components/auth/Register'
import Login from './components/auth/Login'

// Import States
import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'

// Import CSS
import './App.css'

if (localStorage.tokem) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <AlertState>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </AlertState>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </AuthState>
  )
}

export default App
