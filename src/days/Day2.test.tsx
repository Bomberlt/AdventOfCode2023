import { Game, isGamePossible } from "./Day2";

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
});
