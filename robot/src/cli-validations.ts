import { Direction } from "./directions";
import { RobotState } from "./robot";
import { convertStringToNumber, validateCoord, validateDirection } from "./utils/validations";

const convertAndValidateCoord = (c: string): boolean =>  validateCoord(convertStringToNumber(c) ?? -1);

const validatePlaceCommandArguments = (cArgs: Array<string>): boolean => {

    const [x, y, f] = cArgs[1].split(",");

    if(!x || !y || !f) return false;

    return convertAndValidateCoord(x.trim()) && convertAndValidateCoord(y.trim()) && validateDirection(f.trim())
}

const cliValidationMap = new Map<string, boolean | ((c: Array<string>) => boolean)>([
    ["PLACE", validatePlaceCommandArguments],
    ["MOVE", true],
    ["LEFT", true],
    ["RIGHT", true],
    ["REPORT", true]
]);



export const validateCommand = (cArgs: Array<string>): boolean => {
    
    // using a loop so that I can break it
    for(let i = 0; i < cArgs.length; i++){

        const v = cliValidationMap.get(cArgs[0]);
        
        if(!v) return false;

        if(!(typeof v === "function" ? v(cArgs) : v)) return false;

    }

    return true;
}


export const mapCommandsAndRobot = (robot: RobotState, cArgs: Array<string>)  => {
        // EXPLANATION OF WHY I AMM USING A SWITCH STATEMENT
    // some people may think this is an anti-pattern for some reason
    // I like the use of switch statements because I am used to using 
    // the match operator in my rust. Match is a really nice utility function imo: 

    switch(cArgs[0]){

        case "PLACE":

            const [x, y, f] = cArgs[1].split(",");

            robot.place(convertStringToNumber(x.trim()) ?? -1, convertStringToNumber(y.trim()) ?? -1 , f.trim() as Direction);
            return {robot}
        case "MOVE":
            robot.move();
            return {robot}
        case "LEFT":
            robot.left();
            return {robot}
        case "RIGHT":
            robot.right();
            return {robot}
        case "REPORT":
            return {result: robot.report(), robot}
        default: 
            break; 

    }

    return 
}

// use of currying here to hold the robot state
export const mapCommandsToRobot = (robot: RobotState) => (cArgs: Array<string>) => {
    
    const result = mapCommandsAndRobot(robot, cArgs)

    if(result?.result) return result.result;
}


