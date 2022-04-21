export type Direction = "NORTH" | "SOUTH" | "EAST" | "WEST";

export const DirToChangesMap = new Map<Direction, [number, number]>([
    ["NORTH", [0, 1]],
    ["EAST", [1, 0]],
    ["SOUTH", [0, -1]],
    ["WEST", [-1, 0]],
]);

export const applyChangesToDirs = (xy: [number, number], dir: Direction ): Array<number>  => DirToChangesMap.get(dir)?.map((d, i) => d + xy[i]) ?? [];

export class DirectionState {

    private _directions: Array<Direction> = ["NORTH", "EAST", "SOUTH", "WEST"];

    // index of the current direction
    private _currentDirection: number;

    constructor(direction: Direction) {
        this._currentDirection = this._directions.indexOf(direction);
    }

    // moving right increments the index of the 
    // currentDirection, causing the index to reset if it goes out of bounds 
    moveRight(): DirectionState {
        const dir = this._currentDirection + 1;

        // checks the index of the dir var, if it exists then use it, otherwise reset to beginning of index;
        this._currentDirection = this._directions[dir] ? dir : 0;

        return this;
    }

    // turns left
    moveLeft(): DirectionState {
        const dir = this._currentDirection - 1;

        // checks the index of the dir var, if it exists then use it, otherwise reset to beginning of index;
        this._currentDirection = this._directions[dir] ? dir : this._directions.length - 1;

        return this;
    }

    // just simply returns the current direction of the 
    getDirection(): Direction {
        return this._directions[this._currentDirection];
    }

}