import { calibrationValue, part1answer } from "./Day1";

describe("Day1", () => {
  describe("calibrationValue", () => {
    it("gets calibration value from line of text", () => {
      const lineOfText = "1abc2";
      expect(calibrationValue(lineOfText)).toBe(12);
    });
    it("gets calibration value from line of text pqr3stu8vwx", () => {
      const lineOfText = "pqr3stu8vwx";
      expect(calibrationValue(lineOfText)).toBe(38);
    });
    it("gets calibration value from line of text a1b2c3d4e5f", () => {
      const lineOfText = "a1b2c3d4e5f";
      expect(calibrationValue(lineOfText)).toBe(15);
    });
    it("gets calibration value from line of text treb7uchet", () => {
      const lineOfText = "treb7uchet";
      expect(calibrationValue(lineOfText)).toBe(77);
    });
  });
  describe("part1answer", () => {
    it("gets part 1 answer", () => {
      const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
      expect(part1answer(input)).toBe(142);
    });
  });
});
