import { useState } from "react";
import { input as day2Input } from "../inputs/day2input.ts";
import Day from "./Day";

export interface Subset {
  red?: number | undefined;
  green?: number | undefined;
  blue?: number | undefined;
}

export interface NormalizedSubset {
  red: number;
  green: number;
  blue: number;
}

export interface Game {
  id: number;
  subsets: Subset[];
}

const normalizeSubset = (subset: Subset): NormalizedSubset => {
  return {
    red: subset.red ?? 0,
    green: subset.green ?? 0,
    blue: subset.blue ?? 0,
  };
};

export const isGamePossible = (game: Game): boolean => {
  const bagContents: NormalizedSubset = {
    red: 12,
    green: 13,
    blue: 14,
  };
  return !game.subsets
    .map(normalizeSubset)
    .some(
      (subset) =>
        subset.red > bagContents.red ||
        subset.green > bagContents.green ||
        subset.blue > bagContents.blue
    );
};

export const readGameLine = (gameLine: string): Game => {
  const id = parseInt(gameLine.split(" ")[1].split(":")[0]);
  const subsetsLines = gameLine.split(": ")[1].split("; ");

  const subsets: Subset[] = subsetsLines.map((subsetLine) => {
    const colors = subsetLine.split(", ");
    const red = colors.find((color) => color.includes("red"));
    const green = colors.find((color) => color.includes("green"));
    const blue = colors.find((color) => color.includes("blue"));
    return {
      red: red ? parseInt(red.split(" ")[0]) : undefined,
      green: green ? parseInt(green.split(" ")[0]) : undefined,
      blue: blue ? parseInt(blue.split(" ")[0]) : undefined,
    };
  });

  return { id: id, subsets: subsets };
};

export const gamePower = (game: Game): number => {
  const biggestRed = game.subsets
    .map(normalizeSubset)
    .reduce(
      (biggest, subset) => (subset.red > biggest ? subset.red : biggest),
      0
    );
  const biggestGreen = game.subsets
    .map(normalizeSubset)
    .reduce(
      (biggest, subset) => (subset.green > biggest ? subset.green : biggest),
      0
    );
  const biggestBlue = game.subsets
    .map(normalizeSubset)
    .reduce(
      (biggest, subset) => (subset.blue > biggest ? subset.blue : biggest),
      0
    );
  return biggestRed * biggestGreen * biggestBlue;
};

export const part1answer = (input: string): number => {
  const lines = input.split("\n");
  return lines
    .map(readGameLine)
    .reduce<number>(
      (acc: number, game) => acc + (isGamePossible(game) ? game.id : 0),
      0
    );
};

export const part2answer = (input: string): number => {
  const lines = input.split("\n");
  return lines
    .map(readGameLine)
    .reduce<number>((acc: number, game) => acc + gamePower(game), 0);
};

const Day1 = () => {
  const [part, setPart] = useState(1);
  const [answer, setAnswer] = useState<number | undefined>();
  const [answer2, setAnswer2] = useState<number | undefined>();
  const getAnswer = () => {
    part === 1 ? setAnswer(part1answer(day2Input)) : setAnswer2(0);
  };

  return (
    <div>
      <Day dayNumber={1} part={part} setPart={setPart}>
        <div className="container">
          <div className="container-rows">
            <div>The record of a few games: </div>
            <div className="document">
              {day2Input.split("\n").map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
          <div className="container-rows">
            <button onClick={() => getAnswer()} disabled={answer !== undefined}>
              answer button
            </button>
            <>
              {part === 1 ? (
                <div>Answer = {answer}</div>
              ) : (
                <div>Part 2 answer = {answer2}</div>
              )}
            </>
          </div>
        </div>
      </Day>
    </div>
  );
};

export default Day1;
