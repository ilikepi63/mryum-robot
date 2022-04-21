import React, { useState } from 'react';
import logo from './logo.svg';
import {RobotState} from "robot";
import './App.css';

function App() {

  const [commands, setCommands] = useState<Array<string>>([]);
  const [robot, setRobot] = useState<RobotState>(new RobotState());


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
