import React from "react";
import { RobotState } from "robot";
import Robot from "./robot";


interface BoardProps{
    robot?: RobotState;
}

function Board({robot}: BoardProps) {
    return (
      <div className="flex flex-row w-full">
        {[0,1,2,3,4]
            .map(i => <div className="w-full">{[4,3,2,1,0]
                .map(p => {
                    return <div className=" h-20 border border-gray-200">
                        {robot && (robot.x === i && robot.y === p) && <Robot direction={robot.f}/>}
                    </div>
        })}</div>)}
      </div>
    );
  }
  
  export default Board;
  