export const extractArrayValues = (str: string) => {
  const matches: string[] = [];
  let match;
  const regex = /\[([^\]]+)\]/g;

  while ((match = regex.exec(str)) !== null) {
    matches.push(match[1]);
  }

  return matches;
};

export const convertToInt = (num: string): number => {
  return parseInt(num, 10);
};

export const checkNegative = (numbers: number[]) => {
  const negativeString: number[] = [];

  numbers.forEach((number) => {
    if (number < 0) {
      negativeString.push(number);
    }
  });

  if (negativeString.length > 0) {
    throw new Error("Negatives not allowed: " + negativeString.join(","));
  }
};

export const escapeDelimiter = (delim: string): string => {
  return delim.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
};

export const splitNumbers = (numbers: string, dividers: string[]): number[] => {
  const escapedDelimiters = dividers.map(escapeDelimiter);
  const regex = new RegExp(escapedDelimiters.join("|"));
  return numbers
    .split(regex) 
    .filter(Boolean) 
    .map((num) => parseInt(num, 10)) 
    .filter((num) => !isNaN(num)); 
};
