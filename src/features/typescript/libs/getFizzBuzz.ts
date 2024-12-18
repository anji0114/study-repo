import { useState } from "react";

const getFizzBuzz = (value: number): string | number => {
  if (value % 3 === 0 && value % 5 === 0) return "FizzBuzz";
  if (value % 3 === 0) return "Fizz";
  if (value % 5 === 0) return "Buzz";
  return value;
};

const sequence = (start: number, end: number): number[] => {
  const result: number[] = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};

for (const i of sequence(1, 100)) {
}
