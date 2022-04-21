import fs from "fs/promises";
import { join } from "path";
import { RobotState } from "./robot";
import { mapCommandsToRobot } from "./cli-validations";

(async () => {

    const fileName = process.argv[2];

    if(!fileName){
        console.log("Please indicate a file name.");
        return;
    }

    const file = join(process.cwd(), fileName);

    try{
        await fs.lstat(file);
    }catch(e){
        console.log("File doesn't exist.");
        return;
    }

    const data = await fs.readFile(file, "utf8");

    const commands = data.split(`\n`);

    const applyCommand = mapCommandsToRobot(new RobotState());

    commands.forEach(command => {
        
        const result = applyCommand(command.split(" ").map(c => c.trim()));

        if(result) console.log(result); 
    })

})()
