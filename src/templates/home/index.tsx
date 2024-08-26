"use client";

import { useHooks } from "./hooks";
import C from "./constants";
import * as S from "./styles";
import { capitalize } from "@/helpers";
import { motion } from "framer-motion";
import { Button, Card, Spinner } from "@/components";
import { HomeService } from "./service";
import type { HomeTemplateProps } from "./props";

export const HomeTemplate = ({
  service = new HomeService(),
}: HomeTemplateProps) => {
  const {
    difficulty,
    handleDifficultyChange,
    data,
    isLoading,
    hasError,
    refetch,
  } = useHooks({ service });

  return (
    <>
      <S.Main>
        <S.TitleWrapper>
          <S.Title>{C.title}</S.Title>
          <S.Subtitle>{C.subtitle}</S.Subtitle>
          <S.Description>{C.description}</S.Description>
          <S.ButtonsWrapper>
            {C.options.map((option, index) => (
              <S.DifficultyButton
                key={option}
                onClick={() => handleDifficultyChange(option)}
                $isSelected={difficulty === option}
                $edge={
                  index === 0
                    ? "first"
                    : index === C.options.length - 1
                      ? "last"
                      : undefined
                }
                data-selected={difficulty === option}
                disabled={isLoading}
              >
                {capitalize(option)}
              </S.DifficultyButton>
            ))}
          </S.ButtonsWrapper>
        </S.TitleWrapper>
        {hasError ? (
          <>
            <p>Something went wrong. Please try again later.</p>
            <Button onClick={refetch}>Try again</Button>
          </>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <S.CardsWrapper
            initial={C.animation.cardsWrapper.initial}
            animate={C.animation.cardsWrapper.animate}
            variants={C.animation.cardsWrapper.variants}
          >
            {data.map((recipe) => (
              <motion.div key={recipe.id} layout variants={C.animation.card}>
                <Card
                  name={recipe.name}
                  difficulty={recipe.difficulty}
                  isHighlighted={difficulty === recipe.difficulty}
                />
              </motion.div>
            ))}
          </S.CardsWrapper>
        )}
      </S.Main>
    </>
  );
};
