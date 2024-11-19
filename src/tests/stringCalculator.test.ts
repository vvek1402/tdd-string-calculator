import {
  calculate,
} from "../main/utils/Calculate";

enum operation {
  add = "add",
  subtract = "subtract",
  multiply = "multiply",
  divide = "divide",
}

describe("calculate function", () => {
  const testCases = [
    { input: "", operation: "add", expected: 0 },
    { input: "1,2,3", operation: "add", expected: 6 },
    { input: "10\\n20,30", operation: "add", expected: 60 },
    { input: "10,5,2", operation: "subtract", expected: 3 },
    { input: "100\\n50,25", operation: "subtract", expected: 25 },
    { input: "2,3,4", operation: "multiply", expected: 24 },
    { input: "5\\n2,10", operation: "multiply", expected: 100 },
    { input: "100,5,2", operation: "divide", expected: 10 },
    { input: "50\\n2,5", operation: "divide", expected: 5 },
    { input: "//;\\n1;2", operation: "add", expected: 3 },
    { input: "//[***]\\n1***2***3", operation: "add", expected: 6 },
    { input: "//[*][%]\\n1*2%23", operation: "add", expected: 26 },
    { input: "//[*][%]\\n1*2004%23", operation: "add", expected: 24 },
    { input: "//[**][%%]\\n1**2%%3", operation: "add", expected: 6 },
    { input: "//%%%\\n1%%%3", operation: "add", expected: 4 },
    { input: "//[**][%%%][^^]\\n1**2%%%3^^6", operation: "add", expected: 12 },

  ];

  testCases.forEach(({ input, operation, expected }) => {
    test(`${operation} numbers correctly for input "${input}"`, () => {
      expect(calculate(input, operation as operation)).toBe(expected);
    });
  });

  const errorCases = [
    {
      input: "10,0,5",
      operation: "divide",
      error: "Division by zero is not allowed",
    },
    {
      input: "10,-2,5",
      operation: "divide",
      error: "Negatives not allowed: -2",
    },
  ];

  errorCases.forEach(({ input, operation, error }) => {
    test(`throws error "${error}" for operation "${operation}" with input "${input}"`, () => {
      expect(() => calculate(input, operation as operation)).toThrow(error);
    });
  });
});

