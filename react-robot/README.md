# CRA App for Robot state

## Getting started

as always: 

```
npm run start
```

## Valid Commands: 

```
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
```

## Things to note: 

- hasn't been tested on mobile. Should work just fine on desktop, might be a little janky on mobile but I had to cut the yakshaving somewhere
- No global scope/Context API/Redux if you are looking for it. The use case seemed simple enough so just used a combination of local state and component props.