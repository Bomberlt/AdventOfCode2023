import {
  calculateDistance,
  part1answer,
  part2answer,
  readTimes,
  readTimesPart2,
} from "./Day6";

const sampleInput = `Time:      7  15   30
Distance:  9  40  200`;
const sampleTimes = [
  [7, 9],
  [15, 40],
  [30, 200],
];
const sampleTimes2 = [[71530, 940200]];

describe("Day6", () => {
  describe("calculateDistance", () => {
    it("returns 6 for 1 ms hold button and 7 ms race", () => {
      expect(calculateDistance(1, 7)).toBe(6);
    });
    it("returns 10 for 2 ms hold button and 7 ms race", () => {
      expect(calculateDistance(2, 7)).toBe(10);
    });
  });

  describe("read times", () => {
    it("reads sample times", () => {
      expect(readTimes(sampleInput)).toEqual(sampleTimes);
    });
  });

  describe("read times part2", () => {
    it("reads sample  times", () => {
      expect(readTimesPart2(sampleInput)).toEqual(sampleTimes2);
    });
  });
  describe("part1answer", () => {
    it("returns 288 for sample data", () => {
      expect(part1answer(sampleInput)).toBe(288);
    });
  });
  describe("part2answer", () => {
    it("returns 71503 for sample data", () => {
      expect(part2answer(sampleInput)).toBe(71503);
    });
  });
});
