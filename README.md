# Robot Simulator 5000

A robot simulator

## Getting started

- /robot
    
    This directory holds all of the code for the implementation of the CLI-based Robot app. Instructions are in a README inside of the folder.

- /react-robot

    This directory holds the react app that gives a ui of the robot state. 

    Things to note: 
        - the robot state is pulled from /robot using a relative path npm install(see package.json in react-robot). This means that you will have to run 
            `npm run build` inside of the /robot before `npm install` inside of /react-robot