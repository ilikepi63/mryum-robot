import { RobotState } from "../src/robot";

describe("Testing that the directions of the robot work", () => {

    it("Should face EAST from NORTH if moved left", () => {

        const robot = new RobotState();

        robot.place(0, 0, "NORTH");

        robot.left();

        expect(robot.report()).toEqual("0, 0, WEST");

    })

    it("Should face WEST from NORTH if moved right", () => {

        const robot = new RobotState();

        robot.place(0, 0, "NORTH");

        robot.right();

        expect(robot.report()).toEqual("0, 0, EAST");

    })


    
    it("Should face WEST from SOUTH if moved RIGHT", () => {

        const robot = new RobotState();

        robot.place(0, 0, "SOUTH");

        robot.right();

        expect(robot.report()).toEqual("0, 0, WEST");

    })

    it("Should face EAST from SOUTH if moved LEFT", () => {

        const robot = new RobotState();

        robot.place(0, 0, "SOUTH");

        robot.left();

        expect(robot.report()).toEqual("0, 0, EAST");

    })


    
    it("Should face NORTH from WEST if moved right", () => {

        const robot = new RobotState();

        robot.place(0, 0, "WEST");

        robot.right();

        expect(robot.report()).toEqual("0, 0, NORTH");

    })

    it("Should face SOUTH from WEST if moved left", () => {

        const robot = new RobotState();

        robot.place(0, 0, "WEST");

        robot.left();

        expect(robot.report()).toEqual("0, 0, SOUTH");

    })


    
    it("Should face NORTH from EAST if moved left", () => {

        const robot = new RobotState();

        robot.place(0, 0, "EAST");

        robot.left();

        expect(robot.report()).toEqual("0, 0, NORTH");

    })

    it("Should face SOUTH from EAST if moved right", () => {

        const robot = new RobotState();

        robot.place(0, 0, "EAST");

        robot.right();

        expect(robot.report()).toEqual("0, 0, SOUTH");

    })


});