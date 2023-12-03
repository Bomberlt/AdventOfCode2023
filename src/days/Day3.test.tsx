import {
  getPartNos,
  isPartNo,
  part1answer,
  part2answer,
  readSchematic,
} from "./Day3";

describe("Day3", () => {
  const sampleInput = `467..114..
...*......
..35..633.`;
  const tiles = [
    {
      char: "4",
      x: 0,
      y: 0,
      symbol: false,
    },
    {
      char: "6",
      x: 1,
      y: 0,
      symbol: false,
    },
    {
      char: "7",
      x: 2,
      y: 0,
      symbol: false,
    },
    {
      char: ".",
      x: 3,
      y: 0,
      symbol: false,
    },
    {
      char: ".",
      x: 4,
      y: 0,
      symbol: false,
    },
    {
      char: "1",
      x: 5,
      y: 0,
      symbol: false,
    },
    {
      char: "1",
      x: 6,
      y: 0,
      symbol: false,
    },
    {
      char: "4",
      x: 7,
      y: 0,
      symbol: false,
    },
    {
      char: ".",
      x: 8,
      y: 0,
      symbol: false,
    },
    {
      char: ".",
      x: 9,
      y: 0,
      symbol: false,
    },
    {
      char: ".",
      x: 0,
      y: 1,
      symbol: false,
    },
    {
      char: ".",
      x: 1,
      y: 1,
      symbol: false,
    },
    {
      char: ".",
      x: 2,
      y: 1,
      symbol: false,
    },
    {
      char: "*",
      x: 3,
      y: 1,
      symbol: true,
    },
    {
      char: ".",
      x: 4,
      y: 1,
      symbol: false,
    },
    {
      char: ".",
      x: 5,
      y: 1,
      symbol: false,
    },
    {
      char: ".",
      x: 6,
      y: 1,
      symbol: false,
    },
    {
      char: ".",
      x: 7,
      y: 1,
      symbol: false,
    },
    {
      char: ".",
      x: 8,
      y: 1,
      symbol: false,
    },
    {
      char: ".",
      x: 9,
      y: 1,
      symbol: false,
    },
    {
      char: ".",
      x: 0,
      y: 2,
      symbol: false,
    },
    {
      char: ".",
      x: 1,
      y: 2,
      symbol: false,
    },
    {
      char: "3",
      x: 2,
      y: 2,
      symbol: false,
    },
    {
      char: "5",
      x: 3,
      y: 2,
      symbol: false,
    },
    {
      char: ".",
      x: 4,
      y: 2,
      symbol: false,
    },
    {
      char: ".",
      x: 5,
      y: 2,
      symbol: false,
    },
    {
      char: "6",
      x: 6,
      y: 2,
      symbol: false,
    },
    {
      char: "3",
      x: 7,
      y: 2,
      symbol: false,
    },
    {
      char: "3",
      x: 8,
      y: 2,
      symbol: false,
    },
    {
      char: ".",
      x: 9,
      y: 2,
      symbol: false,
    },
  ];
  describe("readSchematic", () => {
    it("returns a Schematic object for sample data", () => {
      expect(readSchematic(sampleInput)).toEqual(tiles);
    });
  });
  describe("isPartNo", () => {
    it("returns true for part 7", () => {
      expect(isPartNo(tiles[2], tiles)).toBe(true);
    });
    it("returns true for part .", () => {
      expect(isPartNo(tiles[3], tiles)).toBe(false);
    });
    it("returns false for part 1", () => {
      expect(isPartNo(tiles[5], tiles)).toBe(false);
    });
  });

  describe("getPartNos", () => {
    it("returns 467, 35", () => {
      expect(getPartNos(tiles, sampleInput)).toEqual([467, 35]);
    });
  });
  describe("part1answer", () => {
    it("returns 4361 for sample data", () => {
      const sampleInput = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

      expect(part1answer(sampleInput)).toBe(4361);
    });
  });
});
