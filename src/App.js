import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <h1>New Social Media App</h1>
      <Sidebar width={300} height={"100vh"}>
        <h1>Friends</h1>
        <h1>Profile</h1>
        <h1>Settings</h1>
      </Sidebar>
    </div>
  );
}

export default App;
