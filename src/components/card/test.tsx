import { render, screen } from "@testing-library/react";
import { Card } from ".";

it("Should test the card component", () => {
  const name = "Beef Burger";
  const difficulty = "easy";

  render(<Card difficulty={difficulty} name={name} isHighlighted={false} />);

  const cardValue = screen.getByText(name);
  const difficultyValue = screen.getByText(difficulty);

  expect(cardValue).toBeInTheDocument();
  expect(difficultyValue).toBeInTheDocument();
});
