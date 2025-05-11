import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  it("renders with the given component", () => {
    render(<Header />);
    expect(
      screen.getByText("Felipe Marcelino do Nascimento")
    ).toBeInTheDocument();
  });
});
