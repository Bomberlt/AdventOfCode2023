import { part1answer, part2answer, readMaps } from "./Day5";

const sampleInput = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;

const maps: Mapp = [
  {
    ranges: [
      { destinationStart: 50, sourceStart: 98, length: 2 },
      { destinationStart: 52, sourceStart: 50, length: 48 },
    ],
  },
  {
    ranges: [
      { destinationStart: 0, sourceStart: 15, length: 37 },
      { destinationStart: 37, sourceStart: 52, length: 2 },
      { destinationStart: 39, sourceStart: 0, length: 15 },
    ],
  },
  {
    ranges: [
      { destinationStart: 49, sourceStart: 53, length: 8 },
      { destinationStart: 0, sourceStart: 11, length: 42 },
      { destinationStart: 42, sourceStart: 0, length: 7 },
      { destinationStart: 57, sourceStart: 7, length: 4 },
    ],
  },
  {
    ranges: [
      { destinationStart: 88, sourceStart: 18, length: 7 },
      { destinationStart: 18, sourceStart: 25, length: 70 },
    ],
  },
  {
    ranges: [
      { destinationStart: 45, sourceStart: 77, length: 23 },
      { destinationStart: 81, sourceStart: 45, length: 19 },
      { destinationStart: 68, sourceStart: 64, length: 13 },
    ],
  },
  {
    ranges: [
      { destinationStart: 0, sourceStart: 69, length: 1 },
      { destinationStart: 1, sourceStart: 0, length: 69 },
    ],
  },
  {
    ranges: [
      { destinationStart: 60, sourceStart: 56, length: 37 },
      { destinationStart: 56, sourceStart: 93, length: 4 },
    ],
  },
];

describe("Day5", () => {
  describe("part1answer", () => {
    it("returns 35 for sample data", () => {
      expect(part1answer(sampleInput)).toBe(35);
    });
  });

  describe("readMaps", () => {
    it("returns a Maps array for sample data", () => {
      expect(readMaps(sampleInput)).toEqual(maps);
    });
  });
});
