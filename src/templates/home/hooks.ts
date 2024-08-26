import { useCallback, useEffect, useState } from "react";
import type { HomeTemplateProps } from "./props";
import type { Difficulty, Recipe } from "./service";

export const useHooks = ({ service }: Required<HomeTemplateProps>) => {
  const [difficulty, setDifficulty] = useState<Difficulty>(null);
  const [data, setData] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleDifficultyChange = (value: Difficulty) => {
    setDifficulty((old) => (old === value ? null : value));
  };

  const fetchData = useCallback(async () => {
    setError(false);
    setIsLoading(true);
    const { data, error } = await service.getRecipes();

    if (error) {
      setIsLoading(false);
      setError(true);
      return;
    }

    const sortedData = data.toSorted((a, b) => a.position - b.position);

    setData(sortedData);
    setIsLoading(false);
  }, [service]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setData((old) => [
      ...old
        .filter((recipe) => recipe.difficulty === difficulty)
        .toSorted((a, b) => a.position - b.position),
      ...old
        .filter((recipe) => recipe.difficulty !== difficulty)
        .toSorted((a, b) => a.position - b.position),
    ]);
  }, [difficulty]);

  return {
    difficulty,
    handleDifficultyChange,
    data,
    isLoading,
    hasError: error,
    refetch: fetchData,
  };
};
