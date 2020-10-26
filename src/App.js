import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/private-route/PrivateRoute';
import Navbar from './components/Navbar/Navbar';
import ModalContainer from './components/ModalContainer/ModalContainer';
import MeetPage from './components/MeetPage/MeetPage';

// Check to token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; //To get it into milliseconds
  if(decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = './login';
  }
}

class App extends Component {
  render() {

    

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/register'>
                <Register />
              </Route>
              <PrivateRoute exact path='/dashboard'>
              <ModalContainer hideModal={this.props.hideModal} />
                <Navbar />
                <Dashboard />
              </PrivateRoute>
              <Route path='/'>
                <ModalContainer hideModal={this.props.hideModal} />
                <Navbar />
                <MeetPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;

{/* <Sidebar width={300} height={"100vh"}>
      <h1>Friends</h1>
      <h1>Profile</h1>
      <h1>Settings</h1>
</Sidebar> */}