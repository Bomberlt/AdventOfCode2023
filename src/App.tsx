import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Day12022 from "./days/Day12022.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Advent of Code 2023</h1>
        <div>
          <h2>Days:</h2>
          <Link to="/day12022">2022 Day1</Link>
        </div>
        <Routes>
          <Route path="/day12022" element={<Day12022 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
