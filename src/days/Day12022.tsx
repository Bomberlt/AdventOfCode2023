import React, { useEffect } from "react";

import { input as day1Input } from "../inputs/day12022input.ts";

const elfsCaloriesTotals = (input) => {
  const allCalories = input
    .split(`\n\n`)
    .reduce((acc, elfCalories) => [...acc, elfCalories.split("\n")], []);
  const firstElfCalories = allCalories[0];
  console.log("firstElfCalories", firstElfCalories);
  const totals = allCalories.reduce(
    (acc, elfCalories) => [
      ...acc,
      elfCalories.reduce((acc, calories) => acc + parseInt(calories), 0),
    ],
    []
  );
  console.log(totals[0]);
  return totals.sort((a, b) => (a < b ? 1 : -1));
};

export const day1 = (input) => {
  const totals = elfsCaloriesTotals(input);
  return totals[0];
};

export const day1part2 = (input) => {
  return elfsCaloriesTotals(input)
    .slice(0, 3)
    .reduce((acc, total) => acc + total, 0);
};

const Day12022 = () => {
  return (
    <div>
      Day1
      <div>Answer = {day1(day1Input)}</div>
      <div>Answer part 2 = {day1part2(day1Input)}</div>
    </div>
  );
};

export default Day12022;
