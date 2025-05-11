import { render, screen } from "@testing-library/react";
import Input from ".";

describe("Input component", () => {
  it("renders with the given component", () => {
    render(
      <Input placeholder="Teste input" value={1} name="teste_input" />
    );
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});
