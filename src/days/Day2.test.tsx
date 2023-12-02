import {
  Game,
  gamePower,
  isGamePossible,
  part1answer,
  part2answer,
  readGameLine,
} from "./Day2";

describe("Day2", () => {
  describe("isGamePossible", () => {
    it("returns true for sample game 1", () => {
      const game: Game = {
        id: 1,
        subsets: [
          {
            red: 4,
            blue: 3,
          },
          {
            red: 1,
            green: 2,
            blue: 6,
          },
          {
            green: 2,
          },
        ],
      };
      expect(isGamePossible(game)).toBe(true);
    });
    it("returns false for sample game 3", () => {
      const game: Game = {
        id: 3,
        subsets: [
          {
            red: 20,
            green: 8,
            blue: 6,
          },
          {
            red: 4,
            green: 13,
            blue: 4,
          },
          {
            red: 1,
            green: 5,
          },
        ],
      };
      expect(isGamePossible(game)).toBe(false);
    });
  });

  describe("readGameLine", () => {
    it("reads sample game 1", () => {
      const gameLine = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
      const game: Game = {
        id: 1,
        subsets: [
          {
            red: 4,
            green: undefined,
            blue: 3,
          },
          {
            red: 1,
            green: 2,
            blue: 6,
          },
          {
            red: undefined,
            green: 2,
            blue: undefined,
          },
        ],
      };
      expect(readGameLine(gameLine)).toMatchObject(game);
    });
  });
  describe("part1answer", () => {
    it("returns 8 for sample data", () => {
      const sampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

      expect(part1answer(sampleInput)).toBe(8);
    });
  });
  describe("gamePower", () => {
    it("returns 48 for sample game 1", () => {
      const game: Game = {
        id: 1,
        subsets: [
          {
            red: 4,
            blue: 3,
          },
          {
            red: 1,
            green: 2,
            blue: 6,
          },
          {
            green: 2,
          },
        ],
      };
      expect(gamePower(game)).toBe(48);
    });
    it("returns false for sample game 3", () => {
      const game: Game = {
        id: 3,
        subsets: [
          {
            red: 20,
            green: 8,
            blue: 6,
          },
          {
            red: 4,
            green: 13,
            blue: 4,
          },
          {
            red: 1,
            green: 5,
          },
        ],
      };
      expect(gamePower(game)).toBe(1560);
    });
  });
  describe("part2answer", () => {
    it("returns 2286 for sample data", () => {
      const sampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

      expect(part2answer(sampleInput)).toBe(2286);
    });
  });
});
