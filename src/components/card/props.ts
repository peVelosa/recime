import { Difficulty } from "@/templates/home/hooks";

export type CardProps = {
  name: string;
  difficulty: Difficulty;
  isHighlight?: boolean;
  imageUrl?: string;
};
