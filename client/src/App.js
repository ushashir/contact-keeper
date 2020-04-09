// React
import React, { Fragment } from 'react';
// Modules
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Utilities
// import setAuthToken from './utils/setAuthToken'
import Alerts from './components/layouts/Alerts'
// Private Route
// import PrivateRoute from './components/routing/PrivateRoute'
// Components
import Navbar from './components/layouts/Navbar';
// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// States
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
// CSS
import './App.css'

const App = () => {  
  return (
    <AuthState>
      <ContactState>
       <AlertState>
          <Router>
              <Fragment>
                <Navbar />
                  <div className="container">
                    <Alerts />
                      <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component= {Login} />
                      </Switch>
                  </div>
              </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
