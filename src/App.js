import React from 'react';
import logo from './logo.svg';
import './App.css';
import './getList.js';
import ReactJson from 'react-json-view'

function App() {
  return (
    <div className="getList">
      <header className="getList-header">
        <a>
          hello moro
        </a>
        <ReactJson src={getLunchList} />
      </header>
    </div>
  );
}


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
