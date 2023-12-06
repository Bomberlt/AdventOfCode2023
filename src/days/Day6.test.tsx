import { part1answer, part2answer } from "./Day6";

const sampleInput = `Time:      7  15   30
Distance:  9  40  200`;

describe("Day6", () => {
  describe("part1answer", () => {
    it("returns 288 for sample data", () => {
      expect(part1answer(sampleInput)).toBe(288);
    });
  });
});
