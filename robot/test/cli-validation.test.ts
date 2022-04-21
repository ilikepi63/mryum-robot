import { validateCommand } from "../src/cli-validations";

describe("CLI Validation Tests", () => {

    it("Should return true for validation", () => {
        expect(validateCommand("PLACE 1,0,NORTH".split(" "))).toEqual(true)
    })

    it("Should return true for validation", () => {
        expect(validateCommand("MOVE".split(" "))).toEqual(true)
    })

    it("Should return true for validation", () => {
        expect(validateCommand("LEFT".split(" "))).toEqual(true)
    })

    it("Should return true for validation", () => {
        expect(validateCommand("RIGHT".split(" "))).toEqual(true)
    })

    it("Should return true for validation", () => {
        expect(validateCommand("REPORT".split(" "))).toEqual(true)
    })


    // negatives
    it("Should return true for validation", () => {
        expect(validateCommand("YELL".split(" "))).toEqual(false)
    })

});