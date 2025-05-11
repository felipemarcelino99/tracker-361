import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  it("renders with the given label", () => {
    render(<Button label="Button Render Teste" />);
    expect(screen.getByText("Button Render Teste")).toBeInTheDocument();
  });
});
