# Toy Robot Simulator

Straightforward CLI based app for interpreting commands via a robot that works as a state machine. 

## Getting started

As always:

```
npm install
```

To build the js files: 

```
npm run build
```

### CLI

To start up the CLI, do the following: 

```
npm run cli
```

you will then be greeted with the following: 

```
Welcome to the Robot CLI!


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


 Enjoy!
```

as indicated, do some cool things: 

```
PLACE 0,0,NORTH
REPORT
> 0, 0, NORTH
MOVE
REPORT
> 0, 1, NORTH
MOVE
REPORT
> 0, 2, NORTH
```

### File based option

To start up the file: 

```
npm run file <file_name> 
```

where file_name is the path to the file that has the commands. IE: 

```
npm run file data/command.txt
```

outputs: 

```
0, 0, WEST
```

## Tests

To run tests:

```
npm run test
```

* NOTE: there are no integration/e2e tests, only unit testing. Coverage is not 100%, but it looks acceptable: 

```
---------------------|---------|----------|---------|---------|-------------------
File                 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------|---------|----------|---------|---------|-------------------
All files            |   80.12 |    64.21 |      90 |   82.14 |
 build/src           |   81.57 |    63.41 |   88.23 |   81.69 |
  cli.js             |    62.5 |    42.85 |      60 |   62.06 | 25,36-51
  directions.js      |     100 |    83.33 |     100 |     100 | 10
  robot.js           |   92.59 |    85.71 |     100 |   92.59 | 32,38
 build/src/utils     |     100 |       75 |     100 |     100 |
  validations.js     |     100 |       75 |     100 |     100 | 8
 src                 |   72.72 |    63.04 |   88.23 |   77.77 |
  cli-validations.ts |   51.61 |       50 |      60 |      52 | 50-70
  directions.ts      |     100 |    83.33 |     100 |     100 | 10
  robot.ts           |   86.36 |    78.57 |     100 |     100 | 29,45-54
 src/utils           |     100 |       75 |     100 |     100 |
  validations.ts     |     100 |       75 |     100 |     100 | 6
---------------------|---------|----------|---------|---------|-------------------
```

## Things to know

Some small things to know about my preferences/coding style: 

- I like Array<T> over T[] 

Because specifying it with Array<> seems more readable to me.

- there is a mixture of functional and object oriented. I don't think of them as wholely dissimilar and different paradigms, but tools in a toolbox. 