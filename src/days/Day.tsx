import React, { Children, useState } from "react";

interface DayProps {
  dayNumber: number;
  part: number;
  setPart: (partNo: number) => void;
  children?: React.ReactNode;
}
const Day = ({ dayNumber, part, setPart, children }: DayProps) => {
  return (
    <div>
      Day {dayNumber}
      {part === 2 && <span> Part 2</span>}
      <div>
        <span>
          <label>
            <input
              type="radio"
              value="1"
              checked={part === 1}
              onChange={() => setPart(1)}
            />
            Part 1
          </label>
        </span>
        <span>
          <label>
            <input
              type="radio"
              value="2"
              checked={part === 2}
              onChange={() => setPart(2)}
            />
            Part 2
          </label>
        </span>
      </div>
      {children}
    </div>
  );
};

export default Day;
