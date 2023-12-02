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

const Day1 = () => {
  const [part, setPart] = useState(1);
  const [answer, setAnswer] = useState<number | undefined>();
  const [answer2, setAnswer2] = useState<number | undefined>();
  const getAnswer = () => {
    part === 1 ? setAnswer(0) : setAnswer2(0);
  };

  return (
    <div>
      <Day dayNumber={1} part={part} setPart={setPart}>
        <div className="container">
          <div className="container-rows">
            <div>Input: </div>
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
