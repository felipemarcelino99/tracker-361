import { render, screen } from "@testing-library/react";
import Title from ".";

describe("Title component", () => {
  it("renders with the given component", () => {
    render(<Title label="Title test" />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });
});
