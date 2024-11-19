export const extractArrayValues = (str: string): string[] => {
  const matches: string[] = [];
  let insideBrackets = false;
  let currentMatch = '';
  let noBracket = true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '[') {
      insideBrackets = true;
      currentMatch = '';
      noBracket = false;
    } else if (char === ']') {
      insideBrackets = false;
      if (currentMatch) {
        matches.push(currentMatch);
      }
    } else if (insideBrackets) {
      currentMatch += char;
    }
  }

  if (noBracket) {
    matches.push(str[2]);
  }

  return matches;
};

export const convertToInt = (num: string): number => {
  return parseInt(num, 10);
};

export const checkNegative = (numbers: number[]) => {
  const negativeNumbers: number[] = [];

  numbers.forEach((number) => {
    if (number < 0) {
      negativeNumbers.push(number);
    }
  });

  if (negativeNumbers.length > 0) {
    throw new Error("Negatives not allowed: " + negativeNumbers.join(","));
  }
};

export const splitNumbers = (numbers: string, dividers: string[]): number[] => {
  let result: string[] = [numbers];

  dividers.forEach((delimiter) => {
    result = result.flatMap((str) => str.split(delimiter));
  });

  return result
    .map((num) => parseInt(num.trim(), 10)) 
    .filter((num) => !isNaN(num) && num < 1000); 
};