import Button from "@/components/button";
import { useHooks } from "./hooks";
import Card from "@/components/card";
import C from "./constants";
import * as S from "./styles";
import { capitalize } from "@/helpers";

const HomeTemplate = () => {
  const { difficulty, handleDifficultyChange, data, isLoading } = useHooks();

  return (
    <>
      <S.Main>
        <S.TitleWrapper>
          <S.Title>{C.title}</S.Title>
          <S.Subtitle>{C.subtitle}</S.Subtitle>
          <S.Description>{C.description}</S.Description>
          <S.ButtonsWrapper>
            {C.options.map((option, index) => (
              <Button
                key={option}
                onClick={() => handleDifficultyChange(option)}
                isSelected={difficulty === option}
                edge={
                  index === 0
                    ? "first"
                    : index === C.options.length - 1
                    ? "last"
                    : undefined
                }
              >
                {capitalize(option)}
              </Button>
            ))}
          </S.ButtonsWrapper>
        </S.TitleWrapper>
        <S.CardsWrapper>
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Card isLoading={true} name={""} difficulty="" key={index} />
            ))
          ) : (
            <>
              {data.map((recipe) => (
                <Card
                  key={recipe.id}
                  name={recipe.name}
                  difficulty={recipe.difficulty}
                  isHighlight={difficulty === recipe.difficulty}
                />
              ))}
            </>
          )}
        </S.CardsWrapper>
      </S.Main>
    </>
  );
};

export default HomeTemplate;
