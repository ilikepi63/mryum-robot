import { RobotState } from "../src/robot";

describe("Testing the constraints of the robot", () => {

    it("Should correctly place the robot on the board", () => {

        const robot = new RobotState();

        robot.place(0, 0, "NORTH");

        expect(robot.report()).toEqual("0, 0, NORTH");

    })

    it("Should correctly move the robot dependent on the direction - NORTH", () => {

        const robot = new RobotState();

        robot.place(0, 0, "NORTH");

        robot.move();

        expect(robot.report()).toEqual("0, 1, NORTH");

    })


    it("Should correctly ignore the robot dependent on the direction - SOUTH", () => {

        const robot = new RobotState();

        robot.place(0, 0, "SOUTH");

        robot.move();

        expect(robot.report()).toEqual("0, 0, SOUTH");

    })

    it("Should correctly move the robot dependent on the direction - SOUTH", () => {

        const robot = new RobotState();

        robot.place(1, 1, "SOUTH");

        robot.move();

        expect(robot.report()).toEqual("1, 0, SOUTH");

    })


    it("Should correctly ignore the robot dependent on the direction - WEST", () => {

        const robot = new RobotState();

        robot.place(0, 0, "WEST");

        robot.move();

        expect(robot.report()).toEqual("0, 0, WEST");

    })

    it("Should correctly move the robot dependent on the direction - WEST", () => {

        const robot = new RobotState();

        robot.place(1, 1, "WEST");

        robot.move();

        expect(robot.report()).toEqual("0, 1, WEST");

    })

    it("Should correctly ignore the robot dependent on the direction - EAST", () => {

        const robot = new RobotState();

        // placed at the north-eastern most part of the board
        robot.place(4, 4, "EAST");

        robot.move();

        expect(robot.report()).toEqual("4, 4, EAST");

    })

    it("Should correctly move the robot dependent on the direction - EAST", () => {

        const robot = new RobotState();

        robot.place(3, 3, "EAST");

        robot.move();

        expect(robot.report()).toEqual("4, 3, EAST");

    })

    it("Should correctly ignore the robot dependent on the direction - NORTH", () => {

        const robot = new RobotState();

        // placed at the north-eastern most part of the board
        robot.place(4, 4, "NORTH");

        robot.move();

        expect(robot.report()).toEqual("4, 4, NORTH");

    })

    it("Should correctly move the robot dependent on the direction - NORTH", () => {

        const robot = new RobotState();

        robot.place(3, 3, "NORTH");

        robot.move();

        expect(robot.report()).toEqual("3, 4, NORTH");

    })

});