const {returnTwo, greeting, add, multiply, subtract, divide} = require("./functions");

test("returnTwo should return 2", () => {
    expect(returnTwo(2)).toEqual(2);
});

test("return the greeting", () => {
    expect(greeting('Chris')).toEqual(`Hello, Chris`);
});

test("return sum", () => {
    expect(add(1,2)).toEqual(3);
    expect(add(5,9)).toEqual(14);
});

test("return sum of multiplication", () => {
    expect(multiply(5,2)).toEqual(10);
    expect(multiply(6,2)).toEqual(12);
});

test("return sum of division", () => {
    expect(divide(6,2)).toEqual(3);
    expect(divide(10,5)).toEqual(2);
});

test("return sum of subtraction", () => {
    expect(subtract(10,5)).toEqual(5);
    expect(subtract(12,6)).toEqual(6);
});

describe("Math Functions", () => {
    it("should return num1 + num2", () => {
        expect(add(1,2)).toEqual(3);
    });
    it("should return subtract", () => {
        expect(subtract(10,5)).toEqual(5);
    });
    it("should return multiply", () => {
        expect(multiply(5,2)).toEqual(10);
    });
    it("should return division", () => {
        expect(divide(6,2)).toEqual(3);
    });
});