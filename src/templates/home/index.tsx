import { useHooks } from "./hooks";
import Card from "@/components/card";
import C from "./constants";
import * as S from "./styles";
import { capitalize } from "@/helpers";
import { useAnimations } from "./animations";
import Spinner from "@/components/spinner";

const HomeTemplate = () => {
  const { difficulty, handleDifficultyChange, data, isLoading } = useHooks();

  const { containerRef } = useAnimations({
    isLoading,
    difficulty,
  });

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
              >
                {capitalize(option)}
              </S.DifficultyButton>
            ))}
          </S.ButtonsWrapper>
        </S.TitleWrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          <S.CardsWrapper ref={containerRef}>
            {data.map((recipe) => (
              <S.AnimationCardWrapper key={recipe.id}>
                <S.AnimationCard className="target-card">
                  <Card
                    name={recipe.name}
                    difficulty={recipe.difficulty}
                    isHighlight={difficulty === recipe.difficulty}
                  />
                </S.AnimationCard>
              </S.AnimationCardWrapper>
            ))}
          </S.CardsWrapper>
        )}
      </S.Main>
    </>
  );
};

export default HomeTemplate;
