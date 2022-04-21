import { applyChangesToDirs, Direction, DirectionState } from "./directions";
import { validateCoord } from "./utils/validations";

export class RobotState {

    private _x?: number;
    private _y?: number;
    private _f?: DirectionState;

    // this might need to be a function, but I decided it would be better 
    // as a property, considering that 
    hasBeenInitialized: boolean = false;

    constructor() { }

    get x():number | undefined{
        return this._x;
    }

    get y(): number | undefined{
        return this._y;
    }

    get f(): Direction | undefined{
        return this._f?.getDirection();
    }

    place(x: number, y: number, f: Direction): RobotState {

        this.hasBeenInitialized = true;

        this._x = x;
        this._y = y;
        this._f = new DirectionState(f);

        return this;
    }

    move(): RobotState {

        if(!this.hasBeenInitialized || this._x === undefined || this._y === undefined || this._f === undefined) return this;

        const [newX, newY] = applyChangesToDirs([this._x,this._y], this._f?.getDirection());


        // if the new coordinates are not valid, then we just do nothing.
        if(!validateCoord(newX) || !validateCoord(newY)) return this;

        // otherwise update the robot
        this._x = newX, this._y = newY;

        return this;
    }

    right(): RobotState {

        if(!this.hasBeenInitialized) return this;

        this._f?.moveRight();

        return this;
    }

    left(): RobotState {

        if(!this.hasBeenInitialized) return this;

        this._f?.moveLeft();

        return this;
    }

    report(): string {
        return `${this._x}, ${this._y}, ${this._f?.getDirection()}`
    }

}