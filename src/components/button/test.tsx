import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Should test the button component", () => {
  it("Should test the button component", () => {
    render(<Button>Test Button</Button>);

    const text = screen.getByText("Test Button");

    expect(text).toBeInTheDocument();
  });
});
