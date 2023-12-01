import React, { useEffect } from "react";
import { input as day1Input } from "../inputs/day1input.ts";

export const calibrationValue = (lineOfText: string): number => {
  console.log(lineOfText);
  const letters = lineOfText.split("");
  const firstNumber = letters.find((letter) => !isNaN(parseInt(letter)));
  const lastNumber = letters.findLast((letter) => !isNaN(parseInt(letter)));
  return parseInt(`${firstNumber}${lastNumber}`);
};

export const part1answer = (input: string) => {
  const lines = input.split("\n");
  console.log(lines);
  return lines.reduce(
    (previousValue: number, currentValue: string) =>
      previousValue + calibrationValue(currentValue),
    0
  );
};

const Day1 = () => {
  return (
    <div>
      Day1
      <div>Answer = {part1answer(day1Input)}</div>
    </div>
  );
};

export default Day1;
