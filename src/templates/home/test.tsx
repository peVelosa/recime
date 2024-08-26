import { render, screen, fireEvent, act } from "@testing-library/react";
import { HomeTemplate } from ".";
import C from "./constants";
import { capitalize } from "@/helpers";
import type { HomeServiceInterface, Recipe } from "./service";

class MockHomeService implements HomeServiceInterface {
  async getRecipes(): Promise<{ data: Recipe[]; error?: boolean }> {
    return {
      data: [
        {
          id: 1,
          difficulty: "easy",
          name: "Recipe 1",
          position: 1,
        },
      ],
    };
  }
}

describe("HomeTemplate", () => {
  it("should render the titles and description correctly", async () => {
    await act(async () => {
      render(<HomeTemplate service={new MockHomeService()} />);
    });

    expect(screen.getByText(C.title)).toBeInTheDocument();
    expect(screen.getByText(C.subtitle)).toBeInTheDocument();
    expect(screen.getByText(C.description)).toBeInTheDocument();
  });

  it("should render difficulty buttons with correct labels", async () => {
    await act(async () => {
      render(<HomeTemplate service={new MockHomeService()} />);
    });

    C.options.forEach((option) => {
      expect(screen.getByText(capitalize(option))).toBeInTheDocument();
    });
  });

  it("should call handleDifficultyChange when a difficulty button is clicked", async () => {
    await act(async () => {
      render(<HomeTemplate service={new MockHomeService()} />);
    });

    const easyButton = screen.getByRole("button", {
      name: capitalize(C.options[0]),
    });

    await act(async () => {
      fireEvent.click(easyButton);
    });

    const easyButtonSelected = screen.getByRole("button", {
      name: capitalize(C.options[0]),
    });

    expect(easyButtonSelected).toHaveAttribute("data-selected", "true");
    await act(async () => {
      fireEvent.click(easyButton);
    });

    const easyButtonUnselected = screen.getByRole("button", {
      name: capitalize(C.options[0]),
    });

    expect(easyButtonUnselected).toHaveAttribute("data-selected", "false");
  });

  it("should render cards when data is available and not loading", async () => {
    await act(async () => {
      render(<HomeTemplate service={new MockHomeService()} />);
    });

    expect(screen.getByText("Recipe 1")).toBeInTheDocument();
  });
});
