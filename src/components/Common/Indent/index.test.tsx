import { render, screen } from "@testing-library/react";
import Indent from ".";

describe("Indent component", () => {
  it("renders with the given component", () => {
    render(
      <Indent>
        <div>Teste Indent</div>
      </Indent>
    );
    expect(screen.getByTestId("indent")).toBeInTheDocument();
  });
});
