import { render, screen } from "@testing-library/react";
import Table from ".";

describe("Table component", () => {
  it("renders with the given component", () => {
    render(<Table />);
    expect(screen.getByTestId("table")).toBeInTheDocument();
  });
});
