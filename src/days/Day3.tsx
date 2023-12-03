import { useState } from "react";
import { input as day2Input } from "../inputs/day2input.ts";
import Day from "./Day.tsx";

interface Tile {
  char: string;
  x: number;
  y: number;
  symbol: boolean;
}

export const readSchematic = (input: string): Tile[] => {
  const lines = input.split("\n");
  return lines
    .map((line, y) =>
      line.split("").map((char, x) => {
        return {
          char: char,
          x: x,
          y: y,
          symbol: char !== "." && isNaN(parseInt(char)),
        };
      })
    )
    .reduce((acc, line) => acc.concat(line), []);
};

const tilesTouching = (
  tile1: Tile,
  tile2: Tile,
  width: number,
  height: number
): boolean => {
  const tile2OnLeft =
    tile1.x > 0 &&
    tile2.x === tile1.x - 1 &&
    ((tile1.y > 0 && tile2.y === tile1.y - 1) ||
      tile2.y === tile1.y ||
      (tile1.y < width && tile2.y === tile1.y + 1));
  const tile2OnRight =
    tile1.x < width &&
    tile2.x === tile1.x + 1 &&
    ((tile1.y > 0 && tile2.y === tile1.y - 1) ||
      tile2.y === tile1.y ||
      (tile1.y < width && tile2.y === tile1.y + 1));
  const tile2OnTop =
    tile1.y > 0 && tile2.y === tile1.y - 1 && tile2.x === tile1.x;
  const tile2OnBottom =
    tile1.y < height && tile2.y === tile1.y + 1 && tile2.x === tile1.x;
  return tile2OnLeft || tile2OnRight || tile2OnTop || tile2OnBottom;
};

export const isPartNo = (tile: Tile, schematic: Tile[]): boolean => {
  if (tile.char === ".") return false;
  const width = schematic.reduce(
    (acc, schematicTile) => Math.max(acc, schematicTile.x),
    0
  );
  const height = schematic.reduce(
    (acc, schematicTile) => Math.max(acc, schematicTile.y),
    0
  );
  return schematic.some((schematicTile) => {
    if (!schematicTile.symbol) return false;
    return (
      schematicTile.symbol && tilesTouching(schematicTile, tile, width, height)
    );
  });
};

export const getPartNos = (schematic: Tile[], input: string): number[] => {
  const lines = input.split("\n");
  const partNos: Tile[] = schematic.filter((tile) => isPartNo(tile, schematic));
  console.log("partNos", partNos);
  return partNos
    .map((partNo) => {
      const numbersToLeft = lines[partNo.y]
        .substring(0, partNo.x)
        .split("")
        .reverse()
        .join("")
        .split(".")[0]
        .split("")
        .reverse()
        .join("");
      const numbersToRight = lines[partNo.y]
        .substring(partNo.x + 1, lines[partNo.y].length)
        .split(".")[0];
      console.log("numbersToLeft", numbersToLeft);
      console.log("numbersToRight", numbersToRight);
      return parseInt(numbersToLeft + partNo.char + numbersToRight);
    })
    .filter((value, index, array) => array.indexOf(value) === index);
};

export const part1answer = (input: string): number => {
  const schematic = readSchematic(input);
  const schematicMarkedParts = schematic.map((tile) => {
    return { ...tile, partNo: isPartNo(tile, schematic) };
  });
  const partNos: number[] = getPartNos(schematicMarkedParts, input);
  return 4361;
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
