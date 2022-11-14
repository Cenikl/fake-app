import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="head" >
            <a href="" className="ops">None | None</a>
            <a href="" className="clock">Clock</a>
            <a href="" className="battery">battery icon</a>
        </div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
