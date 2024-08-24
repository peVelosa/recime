import { useGSAP } from "@gsap/react";
import { type ElementRef, useCallback, useRef, useState } from "react";
import gsap from "gsap";
import type { Difficulty } from "./hooks";
import C from "./constants";

export const useAnimations = ({
  isLoading,
  difficulty,
}: {
  isLoading: boolean;
  difficulty: Difficulty;
}) => {
  const containerRef = useRef<ElementRef<"div">>(null);
  const [mappedElements, setMappedElements] = useState<{
    [key in Exclude<Difficulty, null> | "initial"]: HTMLElement[];
  }>({
    initial: [],
    easy: [],
    medium: [],
    hard: [],
  });

  const handleInitialAnimation = (elements: HTMLElement[]) => {
    gsap.to(elements, {
      ...C.Animation.initial,
    });
  };

  const handleReorderAnimation = (elements: HTMLElement[]) => {
    gsap.to(elements, {
      ...C.Animation.reorder,
      onComplete: () => handleInitialAnimation(elements),
    });
  };

  const getElements = useCallback(() => {
    if (!containerRef.current) return [];

    const elements = containerRef.current.querySelectorAll(
      ".target-card"
    ) as NodeListOf<HTMLElement>;

    return Array.from(elements);
  }, []);

  const mapElements = useCallback(
    (elements: HTMLElement[]) => {
      setMappedElements((old) => ({
        ...old,
        [difficulty || "initial"]: elements,
      }));
    },
    [difficulty]
  );

  useGSAP(
    () => {
      if (isLoading || !containerRef.current) return;
      if (mappedElements.initial.length === 0) {
        const elements = getElements();
        if (elements.length === 0) return;
        mapElements(elements);
        handleInitialAnimation(elements);
        return;
      }
      handleInitialAnimation(mappedElements.initial!);
    },
    {
      dependencies: [isLoading],
    }
  );

  useGSAP(
    () => {
      if (difficulty === null || mappedElements[difficulty].length === 0) {
        const elements = getElements();
        if (elements.length === 0) return;
        mapElements(elements);
        handleReorderAnimation(elements);
        return;
      }
      handleReorderAnimation(mappedElements[difficulty!]!);
    },
    {
      dependencies: [difficulty],
      revertOnUpdate: true,
    }
  );

  return { containerRef };
};
