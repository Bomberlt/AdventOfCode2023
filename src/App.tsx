import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Day12022 from "./days/Day12022.tsx";
import Day1 from "./days/Day1.tsx";
import Day2 from "./days/Day2.tsx";
import Day3 from "./days/Day3.tsx";
import Day4 from "./days/Day4.tsx";
import Day5 from "./days/Day5.tsx";
import Day6 from "./days/Day6.tsx";

function App() {
  return (
    <BrowserRouter>
      <h1>Advent of Code 2023</h1>
      <div>
        <h2>Days:</h2>
        <Link to="/day12022">Day1 (2022)</Link> | <Link to="/day1">Day1</Link> |{" "}
        <Link to="/day2">Day2</Link> | <Link to="/day3">Day3</Link> |{" "}
        <Link to="/day4">Day4</Link> | <Link to="/day5">Day5</Link> |{" "}
        <Link to="/day6">Day6</Link>
      </div>
      <Routes>
        <Route path="/day12022" element={<Day12022 />} />
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day6" element={<Day6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
