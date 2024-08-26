import { Difficulty } from "@/templates/home/service";

export type CardProps = {
  /**
   * The name of the recipe.
   */
  name: string;

  /**
   * The difficulty of the recipe.
   * Can be "easy", "medium", or "hard".
   */
  difficulty: Difficulty;

  /**
   * Whether the card should be highlighted.
   */
  isHighlighted?: boolean;

  /**
   * The URL of the image to display.
   */
  imageUrl?: string;
};
