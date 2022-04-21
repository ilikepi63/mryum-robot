export const validateCoord = (coord: number): boolean => coord <= 4 && coord >= 0;

export const convertStringToNumber = (str: string):number | undefined => {
    const val =  Number.parseInt(str);

    return Number.isNaN(val) ? undefined : val;

}

export const validateDirection = (dir: string): boolean => ["NORTH", "SOUTH", "EAST", "WEST"].includes(dir);