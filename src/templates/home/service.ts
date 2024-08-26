import { wait } from "@/helpers";

export type Difficulty = "easy" | "medium" | "hard" | null;
export type Recipe = {
  id: number;
  name: string;
  difficulty: Difficulty;
  position: number;
};

export interface HomeServiceInterface {
  getRecipes: () => Promise<{ data: Recipe[]; error?: boolean }>;
}

export class HomeService implements HomeServiceInterface {
  constructor() {}

  async getRecipes(): Promise<{ data: Recipe[]; error?: boolean }> {
    try {
      await wait(2000);
      const response = (await fetch("/api/recipes").then((response) =>
        response.json(),
      )) as Recipe[];

      return { data: response };
    } catch (error) {
      console.error(error);
      return { data: [], error: true };
    }
  }
}
