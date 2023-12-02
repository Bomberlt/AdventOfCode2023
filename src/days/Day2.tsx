import { useState } from "react";
import Day from "./Day";

const Day1 = () => {
  const [part, setPart] = useState(1);
  const [answer, setAnswer] = useState<number | undefined>();
  const [answer2, setAnswer2] = useState<number | undefined>();
  const getAnswer = () => {
    part === 1 ? setAnswer(0) : setAnswer2(0);
  };

  return (
    <div>
      <Day dayNumber={1} part={part} setPart={setPart}>
        <div className="container">
          <div className="container-rows">
            <div>Input: </div>
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

export default Day1;
