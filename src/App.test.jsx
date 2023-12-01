import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    const { queryByText } = render(<App title="React" />);

    screen.debug();

    expect(queryByText("Advent of Code 2023")).toBeTruthy();
  });
});
