import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewAccount from './Components/NewAccount'

// import Login from "../src/Components/Login/Login";
import Login from "../src/Components/Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Login />


      </header>

      <NewAccount/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
    </div>
  );
}

export default App;
