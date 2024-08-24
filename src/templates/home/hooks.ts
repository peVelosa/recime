import { useCallback, useEffect, useState } from "react";

export type Difficulty = "easy" | "medium" | "hard" | null;
type Recipe = {
  id: number;
  name: string;
  difficulty: Difficulty;
  position: number;
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useHooks = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>(null);
  const [data, setData] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDifficultyChange = (value: Difficulty) => {
    const newDifficulty = value === difficulty ? null : value;
    setDifficulty(newDifficulty);

    setData((old) => [
      ...old
        .filter((recipe) => recipe.difficulty === newDifficulty)
        .toSorted((a, b) => a.position - b.position),
      ...old
        .filter((recipe) => recipe.difficulty !== newDifficulty)
        .toSorted((a, b) => a.position - b.position),
    ]);
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("/api/recipes");
    await wait(2000);
    const data = (await response.json()) as Recipe[];

    const sortedData = data.toSorted((a, b) => a.position - b.position);

    setData(sortedData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { difficulty, handleDifficultyChange, data, isLoading };
};
