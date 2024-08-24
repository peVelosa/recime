import styled from "styled-components";
import * as S from "@/styles/shared/shared-styles";
import Button from "@/components/button";

export const Main = styled(S.MaxWidthContainer)``;

export const TitleWrapper = styled.div`
  margin-block: 2rem;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  margin-block: 2rem;
  display: flex;
`;

export const DifficultyButton = styled(Button)<{
  $isSelected: boolean;
  $edge?: "first" | "last";
}>`
  border: 5px solid;
  border-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.blue : theme.gray};
  ${({ $edge }) => {
    if ($edge === "first") {
      return {
        borderTopLeftRadius: "0.5rem",
        borderBottomLeftRadius: "0.5rem",
      };
    }
    if ($edge === "last") {
      return {
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
      };
    }
  }}
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const CardsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  row-gap: 2rem;
  column-gap: 1rem;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.gray};
  font-size: 0.8rem;
`;

export const AnimationCardWrapper = styled.div`
  overflow: hidden;
`;

export const AnimationCard = styled.div`
  transform: translateY(-200px) translateX(-20px);
  opacity: 0.5;
`;
