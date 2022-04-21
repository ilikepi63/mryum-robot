import * as readline from "readline";
import {mapCommandsToRobot, validateCommand} from "./cli-validations";
import {RobotState} from "./robot";

const instructions = `
    PLACE {X} {Y} {F}
        This will place the robot at the specific coordinates facing a certain way. 
        X -> The coordinate of the robot along the x-axis
        y -> The coordinate of the robot along the y-axis
        f -> the direction of the robot. Possible values: NORTH, SOUTH, EAST, WEST

    MOVE 
        Move the robot one block in the direction it is currently facing

    LEFT
        Turn the robot left
    
    RIGHT 
        Turn the robot right
    
    REPORT
        Report the current coordinates and direction of the robot. 

    Type 'exit' when you are done!
`;
const greeting = `Welcome to the Robot CLI! \n\n ${instructions} \n\n Enjoy!`;


(() => {

    console.log(greeting);

    const applyCommand = mapCommandsToRobot(new RobotState());

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", (line: string) => {

        const l = line.trim();

        if(l.toLowerCase().includes("exit")) rl.close();

        const cArgs = l.split(" ");

        if(!validateCommand(cArgs)){
            console.log(instructions);
            return;
        }

        const result = applyCommand(cArgs.map(c => c.trim()));

        if(result) console.log(result);

    })


})()