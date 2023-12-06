import { useState } from "react";
import { input as dayInput } from "../inputs/day6input.ts";
import Day from "./Day.tsx";

export const calculateDistance = (
  holdButtonTime: number,
  raceTime: number
): number => {
  const remainingTime = raceTime - holdButtonTime;
  const speed = holdButtonTime;
  return remainingTime * speed;
};

export const readTimes = (input: string): number[][] => {
  const lines = input.split("\n");

  const linesWithNumbers = lines.map((line) => {
    const numbers = line
      .split(":")[1]
      .split(" ")
      .filter((num) => num !== "")
      .map((num) => parseInt(num.trim()));
    return numbers;
  });
  return linesWithNumbers[0].map((numbers, i) => [
    linesWithNumbers[0][i],
    linesWithNumbers[1][i],
  ]);
};
export const readTimesPart2 = (input: string): number[][] => {
  const lines = input.split("\n");

  const numbers = lines.map((line) => {
    const number = line.split(":")[1].replaceAll(" ", "");
    return parseInt(number);
  });
  return [numbers];
};

export const part1answer = (input: string): number => {
  const times = readTimes(input);
  const numberOfWaysToBeatRecordArray = times.map((time) => {
    const [raceTime, record] = time;
    const posibleHoldButtonTimes = [...Array(raceTime).keys()];
    posibleHoldButtonTimes.shift();
    posibleHoldButtonTimes.pop();
    let numberOfWaysToBeatRecord = 0;
    posibleHoldButtonTimes.forEach((holdButtonTime) => {
      if (calculateDistance(holdButtonTime, raceTime) > record) {
        numberOfWaysToBeatRecord++;
      }
    });
    return numberOfWaysToBeatRecord;
  });
  return numberOfWaysToBeatRecordArray.reduce(
    (acc, num) => (acc > 0 ? acc * num : acc + num),
    0
  );
};

export const part2answer = (input: string): number => {
  const time = readTimesPart2(input)[0];
  const [raceTime, record] = time;
  const posibleHoldButtonTimes = [...Array(raceTime).keys()];
  posibleHoldButtonTimes.shift();
  posibleHoldButtonTimes.pop();
  let numberOfWaysToBeatRecord = 0;
  posibleHoldButtonTimes.forEach((holdButtonTime) => {
    if (calculateDistance(holdButtonTime, raceTime) > record) {
      numberOfWaysToBeatRecord++;
    }
  });
  return numberOfWaysToBeatRecord;
};

const Day6 = () => {
  const [part, setPart] = useState(1);
  const [answer, setAnswer] = useState<number | undefined>();
  const [answer2, setAnswer2] = useState<number | undefined>();
  const getAnswer = () => {
    part === 1
      ? setAnswer(part1answer(dayInput))
      : setAnswer2(part2answer(dayInput));
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
            <div style={{ textWrap: "wrap" }}>
              Sheet of paper that lists the time allowed for each race and also
              the best distance ever recorded in that race:{" "}
            </div>
            <div className="document" style={{ display: "block" }}>
              {dayInput.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
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

export default Day6;
