import {
  calibrationValue,
  calibrationValuePart2,
  firstSpelledOutNumber,
  lastSpelledOutNumber,
  part1answer,
  part2answer,
} from "./Day1";

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
  describe("calibrationValuePart2", () => {
    it("gets calibration value from line of text two1nine", () => {
      const lineOfText = "two1nine";
      expect(calibrationValuePart2(lineOfText)).toBe(29);
    });
    it("gets calibration value from line of text eightwothree", () => {
      const lineOfText = "eightwothree";
      expect(calibrationValuePart2(lineOfText)).toBe(83);
    });
    it("gets calibration value from line of text eightwothree", () => {
      const lineOfText = "abcone2threexyz";
      expect(calibrationValuePart2(lineOfText)).toBe(13);
    });
    it("gets calibration value from line of text 92", () => {
      const lineOfText = "92";
      expect(calibrationValuePart2(lineOfText)).toBe(92);
    });
  });
  describe("firstSpelledOutNumber", () => {
    it("gets index of number", () => {
      const lineOfText = "two1nine";
      expect(firstSpelledOutNumber(lineOfText).index).toBe(0);
    });
    it("gets value of number", () => {
      const lineOfText = "two1nine";
      expect(firstSpelledOutNumber(lineOfText).value).toBe(2);
    });

    it("gets index of number abcone2threexyz", () => {
      const lineOfText = "abcone2threexyz";
      expect(firstSpelledOutNumber(lineOfText).index).toBe(3);
    });
  });
  describe("lastSpelledOutNumber", () => {
    it("gets index of number", () => {
      const lineOfText = "two1nine";
      expect(lastSpelledOutNumber(lineOfText).index).toBe(4);
    });
    it("gets value of number", () => {
      const lineOfText = "two1nine";
      expect(lastSpelledOutNumber(lineOfText).value).toBe(9);
    });

    it("gets index of number abcone2threexyz", () => {
      const lineOfText = "abcone2threexyz";
      expect(lastSpelledOutNumber(lineOfText).index).toBe(7);
    });

    it("gets value of number abcone2threexyz", () => {
      const lineOfText = "abcone2threexyz";
      expect(lastSpelledOutNumber(lineOfText).value).toBe(3);
    });
  });

  describe("part2answer", () => {
    it("gets part 2 answer", () => {
      const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
      expect(part2answer(input)).toBe(281);
    });
  });
});
