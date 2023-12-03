import { useState } from "react";
import { input as day2Input } from "../inputs/day2input.ts";
import Day from "./Day.tsx";

interface Tile {
  char: string;
  x: number;
  y: number;
  partNo?: boolean;
  symbol: boolean;
}

export const readSchematic = (input: string): Tile[] => {
  const lines = input.split("\n");
  return lines
    .map((line, y) =>
      line.split("").map((char, x) => {
        return { char: char, x: x, y: y, symbol: char !== "." };
      })
    )
    .reduce((acc, line) => acc.concat(line), []);
};

export const isPartNo = (tile: Tile, schematic: Tile[]): boolean => {
  return false;
};

export const getPartNos = (schematic: Tile[]): number[] => {
  return [];
};

export const part1answer = (input: string): number => {
  const schematic = readSchematic(input);
  const schematicMarkedParts = schematic.map((tile) => {
    return { ...tile, partNo: isPartNo(tile, schematic) };
  });
  const partNos: number[] = getPartNos(schematicMarkedParts);
  return partNos.reduce((acc, partNo) => acc + partNo, 0);
};

export const part2answer = (input: string): number => {
  return 0;
};

const Day1 = () => {
  const [part, setPart] = useState(1);
  const [answer, setAnswer] = useState<number | undefined>();
  const [answer2, setAnswer2] = useState<number | undefined>();
  const getAnswer = () => {
    part === 1
      ? setAnswer(part1answer(day2Input))
      : setAnswer2(part2answer(day2Input));
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
            <div>input: </div>
            <div className="document"></div>
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
