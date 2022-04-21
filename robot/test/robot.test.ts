import { RobotState } from "../src/robot";

describe("Toy Robot Simulator Tests", () => {

    it("Should correctly ignore the query if not in a placed state", () => {

        const robot = new RobotState();

        expect(robot.report()).toEqual("undefined, undefined, undefined");

    })

})