import { useState } from "react";
import { input as day4Input } from "../inputs/day4input.ts";
import Day from "./Day.tsx";

export const cardWinCount = (card: string): number => {
  const cardNumbers = card.split(": ")[1].split(" | ");
  const winningNumbers = cardNumbers[0]
    .trim()
    .split(" ")
    .filter((number) => number !== " " && number !== "")
    .map((number) => parseInt(number.trim()));
  const numbersYouHave = cardNumbers[1]
    .trim()
    .split(" ")
    .filter((number) => number !== " " && number !== "")
    .map((number) => parseInt(number.trim()));
  // console.log("winningNumbers", winningNumbers);
  // console.log("numbersYouHave", numbersYouHave);
  // console.log(
  //   "wins",
  //   winningNumbers.filter((winningNumber: number) =>
  //     numbersYouHave.includes(winningNumber)
  //   )
  // );
  return winningNumbers.filter((winningNumber: number) =>
    numbersYouHave.includes(winningNumber)
  ).length;
};

export const part1answer = (input: string): number => {
  // console.log("lines", input.split("\n"));
  // console.log("win counts", input.split("\n").map(cardWinCount));
  return input
    .split("\n")
    .map(cardWinCount)
    .map((winCount) => (winCount === 0 ? 0 : Math.pow(2, winCount - 1)))
    .reduce((acc, count) => acc + count, 0);
};

interface CardCopies {
  card: string;
  copies: number;
}

export const part2answer = (input: string): number => {
  const cards: CardCopies[] = input
    .split("\n")
    .map((line) => ({ card: line, copies: 1 }));
  cards.forEach((card, i) => {
    let winCount = cardWinCount(card.card);
    let j = i + 1;
    while (winCount > 0) {
      cards[j].copies += card.copies;
      j++;
      winCount--;
    }
  });
  console.log(
    "copies",
    cards.map((card) => card.copies)
  );
  return cards
    .map((card) => card.copies)
    .reduce((acc, count) => acc + count, 0);
};

const Day4 = () => {
  const [part, setPart] = useState(1);
  const [answer, setAnswer] = useState<number | undefined>();
  const [answer2, setAnswer2] = useState<number | undefined>();
  const getAnswer = () => {
    part === 1
      ? setAnswer(part1answer(day4Input))
      : setAnswer2(part2answer(day4Input));
  };

  return (
    <div>
      <Day
        dayNumber={3}
        part={part}
        setPart={(partNo) => {
          setPart(partNo);
          setAnswer(undefined);
        }}
      >
        <div className="container">
          <div className="container-rows">
            <div>Pile of colorful scratchcards: </div>
            <div className="document">
              {day4Input.split("\n").map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          </div>
          <div className="container-rows">
            <button onClick={() => getAnswer()} disabled={answer !== undefined}>
              answer button
            </button>
            <>
              {part === 1 ? (
                <div>Answer = {answer}</div>
              ) : (
                <div>Part 2 answer = {answer2}</div>
              )}
            </>
          </div>
        </div>
      </Day>
    </div>
  );
};

export default Day4;
