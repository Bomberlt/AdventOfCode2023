import React, { useState } from "react";
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
  const [part, setPart] = useState(1);
  const [document, setDocument] = useState(day1Input.split("\n"));
  //const [document, setDocument] = useState(day1Input.map((lineOfText) => {}));
  const [recovered, setRecovered] = useState(false);
  const [answer, setAnswer] = useState<number | undefined>();
  const recoverCalibarationValues = () => {
    if (!recovered) {
      console.log("recovering...");
      setDocument(
        document.map((lineOfText) => calibrationValue(lineOfText).toString())
      );
      setRecovered(true);
    }
  };

  const recoverOneLine = (arr: string[], index: number) => {
    const newArr = [...arr];
    newArr[index] = calibrationValue(arr[index]).toString();
    setDocument(newArr);
    console.log(`recovering ${index} line...`);
    if (index < document.length - 1) {
      const wait = index < 100 ? 50 : 1;
      setTimeout(function () {
        recoverOneLine(newArr, index + 1);
      }, wait);
    } else {
      setRecovered(true);
    }
  };
  const recoverCalibarationValuesInteractively = () => {
    if (!recovered) {
      recoverOneLine(document, 0);
      console.log("recovering interactively...");
    }
  };

  const getAnswer = () => {
    setAnswer(
      document.reduce(
        (previousValue: number, currentValue: string) =>
          previousValue + parseInt(currentValue),
        0
      )
    );
  };

  return (
    <div>
      Day1
      {part === 2 && <span> Part 2</span>}
      <div>
        <span>
          <label>
            <input
              type="radio"
              value="1"
              checked={part === 1}
              onChange={() => setPart(1)}
            />
            Part 1
          </label>
        </span>
        <span>
          <label>
            <input
              type="radio"
              value="2"
              checked={part === 2}
              onChange={() => setPart(2)}
            />
            Part 2
          </label>
        </span>
      </div>
      <div className="container">
        <div className="container-rows">
          <div>The newly-improved calibration document: </div>
          <div className="document">
            {document.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
        <div className="container-rows">
          <button
            onClick={() => recoverCalibarationValues()}
            disabled={recovered}
          >
            Recover calibration values
          </button>
          <button
            onClick={() => recoverCalibarationValuesInteractively()}
            disabled={recovered}
          >
            Recover calibration values interactively
          </button>
          <button onClick={() => getAnswer()} disabled={answer !== undefined}>
            Calculate sum of all of the calibration values
          </button>
          <>
            {part === 1 ? (
              <div>Answer = {answer}</div>
            ) : (
              <div>Part 2 answer = {part2answer(day1Input)}</div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Day1;
