import React from "react";
import { input as day1Input } from "../inputs/day1input.ts";

export const calibrationValue = (lineOfText: string): number => {
  const letters = lineOfText.split("");
  const firstNumber = letters.find((letter) => !isNaN(parseInt(letter)));
  const lastNumber = letters.findLast((letter) => !isNaN(parseInt(letter)));
  return parseInt(`${firstNumber}${lastNumber}`);
};

enum Digits {
  one = 1,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
}

interface SpelledOutNumber {
  value: number;
  index: number;
}

export const firstSpelledOutNumber = (lineOfText: string): SpelledOutNumber => {
  const one = lineOfText.indexOf(Digits[Digits.one]);
  const two = lineOfText.indexOf(Digits[Digits.two]);
  const three = lineOfText.indexOf(Digits[Digits.three]);
  const four = lineOfText.indexOf(Digits[Digits.four]);
  const five = lineOfText.indexOf(Digits[Digits.five]);
  const six = lineOfText.indexOf(Digits[Digits.six]);
  const seven = lineOfText.indexOf(Digits[Digits.seven]);
  const eight = lineOfText.indexOf(Digits[Digits.eight]);
  const nine = lineOfText.indexOf(Digits[Digits.nine]);
  const arr = [one, two, three, four, five, six, seven, eight, nine];
  const min = Math.min(
    one === -1 ? 999 : one,
    two === -1 ? 999 : two,
    three === -1 ? 999 : three,
    four === -1 ? 999 : four,
    five === -1 ? 999 : five,
    six === -1 ? 999 : six,
    seven === -1 ? 999 : seven,
    eight === -1 ? 999 : eight,
    nine === -1 ? 999 : nine
  );

  return {
    value: arr.findIndex((num) => num === min) + 1,
    index: min === 999 ? -1 : min,
  };
};

// TODO: Rework these two functions into one
export const lastSpelledOutNumber = (lineOfText: string): SpelledOutNumber => {
  const one = lineOfText.lastIndexOf(Digits[Digits.one]);
  const two = lineOfText.lastIndexOf(Digits[Digits.two]);
  const three = lineOfText.lastIndexOf(Digits[Digits.three]);
  const four = lineOfText.lastIndexOf(Digits[Digits.four]);
  const five = lineOfText.lastIndexOf(Digits[Digits.five]);
  const six = lineOfText.lastIndexOf(Digits[Digits.six]);
  const seven = lineOfText.lastIndexOf(Digits[Digits.seven]);
  const eight = lineOfText.lastIndexOf(Digits[Digits.eight]);
  const nine = lineOfText.lastIndexOf(Digits[Digits.nine]);
  const arr = [one, two, three, four, five, six, seven, eight, nine];
  const max = Math.max(one, two, three, four, five, six, seven, eight, nine);

  return {
    value: arr.findIndex((num) => num === max) + 1,
    index: max === 999 ? -1 : max,
  };
};

export const calibrationValuePart2 = (lineOfText: string): number => {
  // console.log(lineOfText);
  const letters = lineOfText.split("");
  const firstNumberIndex = letters.findIndex(
    (letter) => !isNaN(parseInt(letter))
  );
  const lastNumberIndex = letters.findLastIndex(
    (letter) => !isNaN(parseInt(letter))
  );

  const firstTextNumber = firstSpelledOutNumber(lineOfText);
  const lastTextNumber = lastSpelledOutNumber(lineOfText);
  // console.log("firstNumberIndex", firstNumberIndex);
  const firstNumber =
    (firstNumberIndex !== -1 && firstNumberIndex < firstTextNumber.index) ||
    firstTextNumber.index === -1
      ? lineOfText[firstNumberIndex]
      : firstTextNumber.value;
  const lastNumber =
    lastNumberIndex !== -1 && lastNumberIndex > lastTextNumber.index
      ? lineOfText[lastNumberIndex]
      : lastTextNumber.value;
  // console.log("firstNumber", firstNumber);
  // console.log("lastNumber", lastNumber);
  return parseInt(`${firstNumber}${lastNumber}`);
};

export const part2answer = (input: string) => {
  const lines = input.split("\n");
  return lines.reduce(
    (previousValue: number, currentValue: string) =>
      previousValue + calibrationValuePart2(currentValue),
    0
  );
};

export const part1answer = (input: string) => {
  const lines = input.split("\n");
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
      <div>Part 2 answer = {part2answer(day1Input)}</div>
    </div>
  );
};

export default Day1;
