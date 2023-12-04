import { cardWinCount, part1answer, part2answer } from "./Day4";

describe("Day4", () => {
  describe("part1answer", () => {
    it("returns 13 for sample data", () => {
      const sampleInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

      expect(part1answer(sampleInput)).toBe(13);
    });
  });
  describe("cardWinCount", () => {
    it("returns 3 for first card", () => {
      const firstCard = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53`;

      expect(cardWinCount(firstCard)).toBe(4);
    });
    it("returns 2 for second card", () => {
      const secondCard = `Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19`;

      expect(cardWinCount(secondCard)).toBe(2);
    });
    it("returns 2 for third card", () => {
      const thirdCard = `Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1`;

      expect(cardWinCount(thirdCard)).toBe(2);
    });
    it("returns 9 for card 11", () => {
      const card11 = `Card  11: 11  1 45 82 22 87 28 35 42 85 | 65 98 77 11 82 28  6  8 42 45 49 17 87  9 85  1 59  4 93 37 89 57 16 22 68`;

      expect(cardWinCount(card11)).toBe(9);
    });
  });
  describe("part2answer", () => {
    it("returns 13 for sample data", () => {
      const sampleInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

      expect(part2answer(sampleInput)).toBe(30);
    });
  });
});
