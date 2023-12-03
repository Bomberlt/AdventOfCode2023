import { part1answer, part2answer } from "./Day3";

describe("Day3", () => {
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
