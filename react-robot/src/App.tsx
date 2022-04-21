import React, { useState } from 'react';
import {nanoid} from "nanoid";
import { RobotState, mapCommandsAndRobot } from "robot";
import Board from "./components/board";
import './App.css';

function App() {

  const [commands, setCommands] = useState<Array<string>>([]);
  const [robot, setRobot] = useState<RobotState>(new RobotState());
  const [currentCommand, setCurrentCommand] = useState<string>("");

  const updateCommands = (command: string) => {

    setCurrentCommand("");

    // first update the list of commands
    setCommands([command, ...commands]);

    // then we apply the command to set Robot
    const result = mapCommandsAndRobot(robot, command.split(" "));

    if (result && result.robot) {
      setRobot(result.robot);
    }

    console.log(robot);
  }


  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') updateCommands(currentCommand);
  }

  return (
    <div className="flex justify-center items-center bg-gray-300 w-screen h-screen">
      <div className="w-[40rem] h-[30rem] bg-white rounded drop-shadow-lg flex flex-row ">
        <div className="p-2 w-1/3">
          <input className="border border-gray-200" value={currentCommand} onChange={(e) => setCurrentCommand((e.target as HTMLInputElement).value)} onKeyDown={handleInputKeyDown} placeholder="Insert command here" />
          {commands.map(command => <div key={nanoid()}>{command}</div>)}
        </div>
        <div className="board p-2 w-2/3">
          Robot: {robot.x} {robot.y} {robot.f}
          <Board robot={robot}/>
        </div>
      </div>
    </div>
  );
}

export default App;
