import { useState } from "react";
import { input as day4Input } from "../inputs/day4input.ts";
import Day from "./Day.tsx";

export const part1answer = (input: string): number => {
  return 13;
};

export const part2answer = (input: string): number => {
  return 0;
};

const Day4 = () => {
  const [part, setPart] = useState(1);
  const [answer, setAnswer] = useState<number | undefined>();
  const [answer2, setAnswer2] = useState<number | undefined>();
  const getAnswer = () => {
    part === 1
      ? setAnswer(part1answer(day4Input))
      : setAnswer2(part2answer(day4Input));
  };

  return (
    <div>
      <Day
        dayNumber={3}
        part={part}
        setPart={(partNo) => {
          setPart(partNo);
          setAnswer(undefined);
        }}
      >
        <div className="container">
          <div className="container-rows">
            <div>Pile of colorful scratchcards: </div>
            <div className="document">
              {day4Input.split("\n").map((line, i) => (
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

export default Day4;
