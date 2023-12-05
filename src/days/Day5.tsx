import { useState } from "react";
import { input as day5Input } from "../inputs/day5input.ts";
import Day from "./Day.tsx";

export interface Mapp {
  ranges: {
    destinationStart: number;
    sourceStart: number;
    length: number;
  }[];
}

export const readMaps = (input: string): Mapp[] => {
  const lines = input.split("\n");
  lines.shift();
  return lines
    .filter((line) => line.length > 0)
    .reduce<Mapp[]>((acc, line) => {
      if (line.includes("map:")) {
        acc.push({ ranges: [] } as Mapp);
      } else {
        const numbers = line.split(" ").map((number) => parseInt(number));
        const ranges = {
          destinationStart: numbers[0],
          sourceStart: numbers[1],
          length: numbers[2],
        };
        acc[acc.length - 1].ranges.push(ranges);
      }
      return acc;
    }, [] as Mapp[]);
};

export const applyMap = (xNumber: number, map: Mapp): number => {
  const range = map.ranges.find(
    (range) =>
      xNumber >= range.sourceStart && xNumber < range.sourceStart + range.length
  );
  if (!range) {
    return xNumber;
  } else {
    const diff =
      range.destinationStart >= range.sourceStart
        ? range.destinationStart - range.sourceStart
        : range.destinationStart - range.sourceStart + 100;
    return (xNumber + diff) % 100;
  }
};

export const applyMaps = (xNumber: number, maps: Mapp[]): number => {
  return maps.reduce((acc, map) => {
    return applyMap(acc, map);
  }, xNumber);
};

export const part1answer = (input: string): number => {
  const maps = readMaps(input);
  const seeds = input
    .split("\n")[0]
    .split(": ")[1]
    .split(" ")
    .map((number) => parseInt(number));
  const locations = seeds.map((number) => applyMaps(number, maps));
  return Math.min(...locations);
};

export const part2answer = (input: string): number => {
  return 0;
};

const Day5 = () => {
  const [part, setPart] = useState(1);
  const [answer, setAnswer] = useState<number | undefined>();
  const [answer2, setAnswer2] = useState<number | undefined>();
  const getAnswer = () => {
    part === 1
      ? setAnswer(part1answer(day5Input))
      : setAnswer2(part2answer(day5Input));
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
            <div>The latest Island Island Almanac: </div>
            <div className="document" style={{ display: "block" }}>
              {day5Input.split("\n").map((line, i) => (
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

export default Day5;
