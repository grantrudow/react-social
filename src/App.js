import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

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
              <Route path='/'>
                <h1>Home</h1>
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