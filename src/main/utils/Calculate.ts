import { checkNegative, extractArrayValues, splitNumbers } from "./Helpers";

export const calculate = (
  numbers: string,
  operation: "add" | "subtract" | "multiply" | "divide"
): number => {
  const delimiter = [",", "\\n"];
  if (numbers.startsWith("//")) {
    const del = extractArrayValues(numbers);

    del.forEach((val) => {
      delimiter.push(val);
    });
  }

  console.log(delimiter)
  const numList: number[] = splitNumbers(numbers, delimiter);
  checkNegative(numList);

  switch (operation) {
    case "add":
      return numList.reduce((acc, n) => acc + n, 0);
    case "subtract":
      return numList.reduce((acc, n) => acc - n);
    case "multiply":
      return numList.reduce((acc, n) => acc * n, 1);
    case "divide":
      return numList.reduce((acc, n) => {
        if (n === 0) throw new Error("Division by zero is not allowed");
        return acc / n;
      });
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

export const add = (numbers: string): number => calculate(numbers, "add");
export const subtract = (numbers: string): number =>
  calculate(numbers, "subtract");
export const multiply = (numbers: string): number =>
  calculate(numbers, "multiply");
export const divide = (numbers: string): number => calculate(numbers, "divide");
