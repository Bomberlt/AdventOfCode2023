import { calculateDistance, part1answer, part2answer } from "./Day6";

const sampleInput = `Time:      7  15   30
Distance:  9  40  200`;

describe("Day6", () => {
  describe("calculateDistance", () => {
    it("returns 6 for 1 ms hold button and 7 ms race", () => {
      expect(calculateDistance(1, 7)).toBe(6);
    });
    it("returns 10 for 2 ms hold button and 7 ms race", () => {
      expect(calculateDistance(2, 7)).toBe(10);
    });
  });
  describe("part1answer", () => {
    it("returns 288 for sample data", () => {
      expect(part1answer(sampleInput)).toBe(288);
    });
  });
});
