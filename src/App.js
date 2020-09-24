import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Register from './components/Register/Register'

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/'>
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;

{/* <Sidebar width={300} height={"100vh"}>
      <h1>Friends</h1>
      <h1>Profile</h1>
      <h1>Settings</h1>
</Sidebar> */}