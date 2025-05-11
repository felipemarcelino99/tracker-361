import { render, screen } from "@testing-library/react";
import InputRadio from ".";

describe("InputRadio component", () => {
  it("renders with the given component", () => {
    render(
      <InputRadio
        label="Teste input radio"
        value={1}
        name="teste_input_radio"
      />
    );
    expect(screen.getByTestId("inputRadio")).toBeInTheDocument();
  });
});
