import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Day1 from "./days/Day1.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Advent of Code 2023</h1>
        <div>
          <h2>Days:</h2>
          <Link to="/day1">Day1</Link>
        </div>
        <Routes>
          <Route path="/day1" element={<Day1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
